<template>
  <div class="el-slider">
    <el-input-number
      :value.sync="value"
      v-if="showInput"
      class="el-slider__input"
      @keyup="onInputChange()"
      v-el:input
      :step="step"
      :min="min"
      :max="max"
      size="small">
    </el-input-number>
    <div class="el-slider__runway"
      :class="{ 'show-input': showInput }"
      @click="onSliderClick($event)" v-el:slider>
      <div class="el-slider__bar" :style="{ width: currentPosition }"></div>
      <div class="el-slider__button-wrapper" @mouseenter="hovering = true" @mouseleave="hovering = false" :style="{left: currentPosition}" v-el:button>
        <div class="el-slider__button" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
      </div>
      <div class="el-slider__pop" v-show="showTip" transition="popper-fade" v-el:pop>{{ value }}</div>
      <div class="el-slider__stop" v-for="item in stops" :style="{ 'left': item + '%' }" v-if="showStops"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Popper from 'main/utils/popper.js';
  import ElInputNumber from 'packages/input-number/index.js';
  import { getStyle } from 'wind-dom/src/style';

  export default {
    name: 'ElSlider',

    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      defaultValue: {
        type: Number,
        default: 0
      },
      value: {
        type: Number,
        default: 0
      },
      showInput: {
        type: Boolean,
        default: false
      },
      showStops: {
        type: Boolean,
        default: false
      }
    },

    components: {
      ElInputNumber
    },

    data() {
      return {
        showTip: false,
        hovering: false,
        dragging: false,
        popper: null,
        newPos: null,
        oldValue: this.value,
        currentPosition: (this.value - this.min) / (this.max - this.min) * 100 + '%'
      };
    },

    watch: {
      showTip(val) {
        if (val) {
          this.$nextTick(() => {
            this.updatePopper();
          });
        } else {
          setTimeout(() => {
            if (this.popper) {
              this.popper.destroy();
              this.popper = null;
            }
          }, 150);
        }
      },

      value(val) {
        this.$nextTick(() => {
          this.updatePopper();
        });
        if (val < this.min) {
          this.value = this.min;
          return;
        }
        if (val > this.max) {
          this.value = this.max;
          return;
        }
        this.setPosition((val - this.min) * 100 / (this.max - this.min));
      }
    },

    methods: {
      updatePopper() {
        if (this.popper) {
          this.popper.update();
        } else {
          this.popper = new Popper(this.$els.button, this.$els.pop, { gpuAcceleration: false, placement: 'top' });
          this.popper.onCreate(() => {
            let placementMap = { top: 'bottom', bottom: 'top' };
            let placement = this.popper._popper.getAttribute('x-placement').split('-')[0];
            let origin = placementMap[placement];
            this.popper._popper.classList.add(placement);
            this.popper._popper.classList.remove(placementMap[placement]);
            this.popper._popper.style.transformOrigin = `center ${ origin }`;
          });
          this.updatePopper();
        }
      },

      setPosition(newPos) {
        if (newPos >= 0 && (newPos <= 100)) {
          var lengthPerStep = 100 / ((this.max - this.min) / this.step);
          var steps = Math.round(newPos / lengthPerStep);
          this.value = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
          this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
          if (!this.dragging) {
            if (this.value !== this.oldValue) {
              this.$emit('change', this.value);
              this.oldValue = this.value;
            }
          }
        }
      },

      onSliderClick(event) {
        var currentX = event.clientX;
        var sliderOffsetLeft;
        getStyle(this.$el.parentNode, 'position') === 'static' ? sliderOffsetLeft = this.$els.slider.offsetLeft : sliderOffsetLeft = this.$el.parentNode.offsetLeft + this.$els.slider.offsetLeft;
        var newPos = (currentX - sliderOffsetLeft) / this.$sliderWidth * 100;
        this.setPosition(newPos);
      },

      onInputChange() {
        if (this.value === '') {
          return;
        }
        if (!isNaN(this.value)) {
          this.setPosition((this.value - this.min) * 100 / (this.max - this.min));
        }
      }
    },

    computed: {
      $sliderWidth() {
        return parseInt(getStyle(this.$els.slider, 'width'), 10);
      },

      showTip() {
        return this.dragging || this.hovering;
      },

      stops() {
        let stopCount = (this.max - this.value) / this.step;
        let result = [];
        let currentLeft = parseFloat(this.currentPosition);
        let stepWidth = 100 * this.step / (this.max - this.min);
        for (let i = 1; i < stopCount; i++) {
          result.push(currentLeft + i * stepWidth);
        }
        return result;
      }
    },

    compiled() {
      var startX = 0;
      var currentX = 0;
      var startPos = 0;

      var onDragStart = event => {
        this.dragging = true;
        startX = event.clientX;
        startPos = parseInt(this.currentPosition, 10);
      };

      var onDragging = event => {
        if (this.dragging) {
          currentX = event.clientX;
          var diff = (currentX - startX) / this.$sliderWidth * 100;
          this.newPos = startPos + diff;
          this.setPosition(this.newPos);
        }
      };

      var onDragEnd = () => {
        if (this.dragging) {
          this.dragging = false;
          this.setPosition(this.newPos);
          window.removeEventListener('mousemove', onDragging);
          window.removeEventListener('mouseup', onDragEnd);
        }
      };

      this.$els.button.addEventListener('mousedown', function(event) {
        onDragStart(event);
        window.addEventListener('mousemove', onDragging);
        window.addEventListener('mouseup', onDragEnd);
      });
    },

    created() {
      if (this.value < this.min || this.value > this.max) {
        this.value = this.min;
      }
    },

    beforeDestroy() {
      if (this.popper) {
        this.popper.destroy();
      }
    }
  };
</script>
