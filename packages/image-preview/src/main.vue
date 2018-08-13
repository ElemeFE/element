<template>
  
  <div class="el-image-preview">
    <div class="el-image-preview__bg">
      <transition name="preview-fade" >
      <div class="el-image-preview__wrapper" v-show="visible" :style="{'width': width}">
        <button @click="closePreview" class="el-image-preview__close">
          <i class="el-icon el-icon-close"></i>
        </button>
        <div 
          class="el-image-preview__container"
          ref="imageContainer"
          :style="{
            'height': height + 'px',
            'line-height': height - 40 + 'px',
          }"
        >
          <img
            ref="viewImage" 
            class="preview-image"
            :class='[
              {"by-width": !isImagelongerThanWide},
              {"by-height": isImagelongerThanWide}
            ]'
            :src="url"
            v-mousewheel="onmousewheel"
            @mousedown="onmousedown"
            @mousemove="onmousemove"
            @mouseup="onmouseup"
            @mouseout="onmouseup"
          >
        </div>
        <div class="el-image-preview__tools">
          <button @click="zoomIn">
            <i class="el-icon el-icon-zoom-in"></i>
          </button>
          <button @click="zoomOut">
            <i class="el-icon el-icon-zoom-out"></i>
          </button>
          <button @click="rotateImage">
            <i class="el-icon el-icon-refresh"></i>
          </button>
        </div>
      </div>
      </transition>
    </div>
  </div>
  
</template>

<script>
import Popup from 'element-ui/src/utils/popup';
import Mousewheel from 'element-ui/src/directives/mousewheel';

export default {
  name: 'ElImagePreview',

  mixins: [Popup],

  directives: {Mousewheel},

  data() {
    return {
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2,
      height: 400,
      width: '50%',
      url: '',
      isImagelongerThanWide: false
    };
  },

  props: {
    modal: {
      type: Boolean,
      default: true
    }
  },

  created() {
    this.zoomBase = 1;
    this.rorateBase = 0;
    this.translateXBase = 0;
    this.translateYBase = 0;
    this.lastTranslateXBase = 0;
    this.lastTranslateYBase = 0;
    this.isMouseDown = false;
    this.containerBorderWidth = 20;
    this.useTransition = true;
  },

  mounted() {
    this.previewImage = this.$refs.viewImage;
    this.imageContainer = this.$refs.imageContainer;
  },

  methods: {
    destroyElement() {
      this.visible = false;
      setTimeout(() => {
        this.onClose && this.onClose();
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 300);
    },

    openPreview() {
      this.getImgNaturalDimensions();
      this.visible = true;
    },

    closePreview() {
      if (this.visible) {
        this.destroyElement();
      }
    },

    getImgNaturalDimensions() {
      let nImg = new Image();

      nImg.onload = () => {
        let nWidth = nImg.width;
        let nHeight = nImg.height;
        if (nWidth > nHeight) {
          this.isImagelongerThanWide = false;
        } else {
          this.isImagelongerThanWide = true;
        }
      };

      nImg.src = this.url;
    },

    onmousewheel(e) {
      e.preventDefault();
      if (e.wheelDelta > 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    },

    zoomIn(value) {
      if (Number(value)) {
        this.zoomBase = Math.min(this.maxZoomValue, this.zoomBase + value);
      } else {
        this.zoomBase = Math.min(this.maxZoomValue, this.zoomBase + this.zoomValue);
      }

      this.setImageStyle();
    },

    zoomOut(value) {
      if (Number(value)) {
        this.zoomBase = Math.max(this.minZoomValue, this.zoomBase - value);
      } else {
        this.zoomBase = Math.max(this.minZoomValue, this.zoomBase - this.zoomValue);
      }

      this.lastTranslateXBase = this.translateXBase = this.lastTranslateXBase - this.lastTranslateXBase / Math.max(1, this.zoomBase);
      this.lastTranslateYBase = this.translateYBase = this.lastTranslateYBase - this.lastTranslateYBase / Math.max(1, this.zoomBase);
      this.setImageStyle();
    },

    zoomTo(value) {
      if (value > this.maxZoomValue) {
        this.zoomBase = this.maxZoomValue;
      } else if (value < this.minZoomValue) {
        this.zoomBase = this.minZoomValue;
      } else {
        this.zoomBase = value;
      }
      this.setImageStyle();
    },

    onmousedown(e) {
      e.preventDefault();
      this.useTransition = false;
      this.isMouseDown = true;
      this.startPoint = {
        x: e.screenX,
        y: e.screenY
      };
    },

    onmousemove(e) {
      if (this.isMouseDown) {
        let nowPoint = {
          x: e.screenX,
          y: e.screenY
        };

        this.computeSkewing(this.startPoint, nowPoint);
        this.startPoint = {
          x: e.screenX,
          y: e.screenY
        };
        this.lastTranslateXBase = this.translateXBase;
        this.lastTranslateYBase = this.translateYBase;
      }
    },

    onmouseup() {
      this.isMouseDown = false;
      this.useTransition = true;
    },

    computeSkewing(startPos, nowPos) {
      let moveX = nowPos.x - startPos.x;
      let moveY = nowPos.y - startPos.y;
      let {horizontal, vertical} = this.isCanMove(moveX, moveY);

      if (horizontal && vertical) {
        this.translateXBase = moveX + this.lastTranslateXBase;
        this.translateYBase = moveY + this.lastTranslateYBase;
      } else if (horizontal) {
        this.translateXBase = moveX + this.lastTranslateXBase;
      } else if (vertical) {
        this.translateYBase = moveY + this.lastTranslateYBase;
      }

      this.setImageStyle();
    },

    isCanMove(moveX, moveY) {
      const previewImage = this.previewImage;
      const imageContainer = this.imageContainer;
      const ImageRect = previewImage.getBoundingClientRect();
      const containerRect = imageContainer.getBoundingClientRect();
      let horizontal = false;
      let vertical = false;

      if (
        containerRect.left + this.containerBorderWidth > ImageRect.left + moveX &&
        containerRect.right - this.containerBorderWidth < ImageRect.left + ImageRect.width + moveX
      ) {
        horizontal = true;
      }

      if (
        containerRect.top + this.containerBorderWidth > ImageRect.top + moveY &&
        containerRect.bottom - this.containerBorderWidth < ImageRect.top + ImageRect.height + moveY
      ) {
        vertical = true;
      }

      return {
        horizontal,
        vertical
      };
    },

    rotateImage(deg) {
      if (Number(deg)) {
        this.rorateBase = Math.ceil(this.rorateBase / 360) * 360 + deg;
      } else {
        this.rorateBase = this.rorateBase + 90;
      }

      this.translateXBase = 0;
      this.translateYBase = 0;
      this.lastTranslateXBase = 0;
      this.lastTranslateYBase = 0;
      this.setImageStyle();
    },

    setImageStyle() {
      const transform = `
        scale(${this.zoomBase}) 
        translateX(${this.translateXBase / this.zoomBase}px) 
        translateY(${this.translateYBase / this.zoomBase}px) 
        translateZ(0px)
        rotate(${this.rorateBase}deg)
      `;

      if (this.useTransition) {
        this.previewImage.style.transition = 'transform .4s ease';
      } else {
        this.previewImage.style.transition = '';
      }

      this.previewImage.style.transform = transform;
      this.previewImage.style.msTransform = transform;
      this.previewImage.style.webkitTransform = transform;
    }
  }
};
</script>
