<template>
  <div
    class="el-slider__button-wrapper"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown"
    :class="{ 'hover': hovering, 'dragging': dragging }"
    :style="{ left: currentPosition }"
    ref="button">
    <el-tooltip placement="top" ref="tooltip">
      <span slot="content">{{ value }}</span>
      <div class="el-slider__button" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
    </el-tooltip>
  </div>
</template>

<script>
  import ElTooltip from 'element-ui/packages/tooltip';

  export default {
    name: 'ElSliderButton',

    components: {
      ElTooltip
    },

    props: {
      value: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        hovering: false,
        dragging: false,
        startX: 0,
        currentX: 0,
        startPosition: 0,
        newPosition: null,
        oldValue: this.value
      };
    },

    computed: {
      disabled() {
        return this.$parent.disabled;
      },

      max() {
        return this.$parent.max;
      },

      min() {
        return this.$parent.min;
      },

      step() {
        return this.$parent.step;
      },

      precision() {
        return this.$parent.precision;
      },

      currentPosition() {
        return `${ (this.value - this.min) / (this.max - this.min) * 100 }%`;
      }
    },

    watch: {
      dragging(val) {
        this.$parent.dragging = val;
      }
    },

    methods: {
      showTooltip() {
        this.$refs.tooltip && (this.$refs.tooltip.showPopper = true);
      },

      hideTooltip() {
        this.$refs.tooltip && (this.$refs.tooltip.showPopper = false);
      },

      handleMouseEnter() {
        this.hovering = true;
        this.showTooltip();
      },
  
      handleMouseLeave() {
        this.hovering = false;
        this.hideTooltip();
      },

      onButtonDown(event) {
        if (this.disabled) return;
        event.preventDefault();
        this.onDragStart(event);
        window.addEventListener('mousemove', this.onDragging);
        window.addEventListener('mouseup', this.onDragEnd);
        window.addEventListener('contextmenu', this.onDragEnd);
      },

      onDragStart(event) {
        this.dragging = true;
        this.startX = event.clientX;
        this.startPosition = parseInt(this.currentPosition, 10);
      },

      onDragging(event) {
        if (this.dragging) {
          this.showTooltip();
          this.currentX = event.clientX;
          const diff = (this.currentX - this.startX) / this.$parent.$sliderWidth * 100;
          this.newPosition = this.startPosition + diff;
          this.setPosition(this.newPosition);
        }
      },

      onDragEnd() {
        if (this.dragging) {
          /*
           * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
           * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
           */
          setTimeout(() => {
            this.dragging = false;
            this.hideTooltip();
            this.setPosition(this.newPosition);
          }, 0);
          window.removeEventListener('mousemove', this.onDragging);
          window.removeEventListener('mouseup', this.onDragEnd);
          window.removeEventListener('contextmenu', this.onDragEnd);
        }
      },

      setPosition(newPosition) {
        if (newPosition < 0) {
          newPosition = 0;
        } else if (newPosition > 100) {
          newPosition = 100;
        }
        const lengthPerStep = 100 / ((this.max - this.min) / this.step);
        const steps = Math.round(newPosition / lengthPerStep);
        let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
        value = parseFloat(value.toFixed(this.precision));
        this.$emit('input', value);
        this.$refs.tooltip && this.$refs.tooltip.updatePopper();
        if (!this.dragging && this.value !== this.oldValue) {
          this.oldValue = this.value;
        }
      }
    }
  };
</script>