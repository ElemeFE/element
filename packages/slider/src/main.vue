<template>
  <div class="el-slider">
    <el-input-number
      v-model="inputValue"
      v-if="showInput"
      class="el-slider__input"
      @keyup.native="onInputChange"
      ref="input"
      :step="step"
      :disabled="disabled"
      :min="min"
      :max="max"
      size="small">
    </el-input-number>
    <div class="el-slider__runway"
      :class="{ 'show-input': showInput, 'disabled': disabled }"
      @click="onSliderClick" ref="slider">
      <div class="el-slider__bar" :style="{ width: currentPosition }"></div>
      <div
        class="el-slider__button-wrapper"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousedown="onButtonDown"
        :class="{ 'hover': hovering, 'dragging': dragging }"
        :style="{left: currentPosition}"
        ref="button">
        <el-tooltip placement="top" ref="tooltip">
          <span slot="content">{{ value }}</span>
          <div class="el-slider__button" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
        </el-tooltip>
      </div>
      <div class="el-slider__stop" v-for="item in stops" :style="{ 'left': item + '%' }" v-if="showStops"></div>
    </div>
  </div>
</template>

<script type="text/babel">
  import ElInputNumber from 'element-ui/packages/input-number';
  import ElTooltip from 'element-ui/packages/tooltip';
  import { getStyle } from 'element-ui/src/utils/dom';

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
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    components: {
      ElInputNumber,
      ElTooltip
    },

    data() {
      return {
        precision: 0,
        inputValue: null,
        timeout: null,
        hovering: false,
        dragging: false,
        startX: 0,
        currentX: 0,
        startPos: 0,
        newPos: null,
        oldValue: this.value,
        currentPosition: (this.value - this.min) / (this.max - this.min) * 100 + '%'
      };
    },

    watch: {
      inputValue(val) {
        this.$emit('input', Number(val));
      },

      value(val) {
        this.$nextTick(() => {
          this.updatePopper();
        });
        if (typeof val !== 'number' || isNaN(val) || val < this.min) {
          this.$emit('input', this.min);
          return;
        }
        if (val > this.max) {
          this.$emit('input', this.max);
          return;
        }
        this.inputValue = val;
        this.setPosition((val - this.min) * 100 / (this.max - this.min));
      }
    },

    methods: {
      handleMouseEnter() {
        this.hovering = true;
        this.$refs.tooltip.showPopper = true;
      },

      handleMouseLeave() {
        this.hovering = false;
        this.$refs.tooltip.showPopper = false;
      },

      updatePopper() {
        this.$refs.tooltip.updatePopper();
      },

      setPosition(newPos) {
        if (newPos < 0) {
          newPos = 0;
        } else if (newPos > 100) {
          newPos = 100;
        }

        const lengthPerStep = 100 / ((this.max - this.min) / this.step);
        const steps = Math.round(newPos / lengthPerStep);
        let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
        value = parseFloat(value.toFixed(this.precision));
        this.$emit('input', value);
        this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
        if (!this.dragging) {
          if (this.value !== this.oldValue) {
            this.$emit('change', this.value);
            this.oldValue = this.value;
          }
        }
      },

      onSliderClick(event) {
        if (this.disabled || this.dragging) return;
        const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
        this.setPosition((event.clientX - sliderOffsetLeft) / this.$sliderWidth * 100);
      },

      onInputChange() {
        if (this.value === '') {
          return;
        }
        if (!isNaN(this.value)) {
          this.setPosition((this.value - this.min) * 100 / (this.max - this.min));
        }
      },

      onDragStart(event) {
        this.dragging = true;
        this.startX = event.clientX;
        this.startPos = parseInt(this.currentPosition, 10);
      },

      onDragging(event) {
        if (this.dragging) {
          this.$refs.tooltip.showPopper = true;
          this.currentX = event.clientX;
          const diff = (this.currentX - this.startX) / this.$sliderWidth * 100;
          this.newPos = this.startPos + diff;
          this.setPosition(this.newPos);
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
            this.$refs.tooltip.showPopper = false;
            this.setPosition(this.newPos);
          }, 0);
          window.removeEventListener('mousemove', this.onDragging);
          window.removeEventListener('mouseup', this.onDragEnd);
          window.removeEventListener('contextmenu', this.onDragEnd);
        }
      },

      onButtonDown(event) {
        if (this.disabled) return;
        this.onDragStart(event);
        window.addEventListener('mousemove', this.onDragging);
        window.addEventListener('mouseup', this.onDragEnd);
        window.addEventListener('contextmenu', this.onDragEnd);
      }
    },

    computed: {
      $sliderWidth() {
        return parseInt(getStyle(this.$refs.slider, 'width'), 10);
      },

      stops() {
        const stopCount = (this.max - this.value) / this.step;
        const currentLeft = parseFloat(this.currentPosition);
        const stepWidth = 100 * this.step / (this.max - this.min);
        const result = [];
        for (let i = 1; i < stopCount; i++) {
          result.push(currentLeft + i * stepWidth);
        }
        return result;
      }
    },

    created() {
      if (typeof this.value !== 'number' ||
        isNaN(this.value) ||
        this.value < this.min) {
        this.$emit('input', this.min);
      } else if (this.value > this.max) {
        this.$emit('input', this.max);
      }
      let precisions = [this.min, this.max, this.step].map(item => {
        let decimal = ('' + item).split('.')[1];
        return decimal ? decimal.length : 0;
      });
      this.precision = Math.max.apply(null, precisions);
      this.inputValue = this.inputValue || this.value;
    }
  };
</script>
