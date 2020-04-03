<template>
  <div
    class="el-slider"
    :class="{ 'is-vertical': vertical, 'el-slider--with-input': showInput }"
    role="slider"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-orientation="vertical ? 'vertical': 'horizontal'"
    :aria-disabled="sliderDisabled"
    :aria-valuetext="range ? `${minValue}-${maxValue}` : minValue"
    :aria-label="label || `slider between ${min} and ${max}`"
  >
    <el-input-number
      :value="minValue"
      @input="min => setValues({ min })"
      v-if="showInput && !range"
      class="el-slider__input"
      ref="input"
      @change="$emit('change', $event)"
      :step="step"
      :disabled="sliderDisabled"
      :controls="showInputControls"
      :controls-position="inputControlsPosition"
      :min="min"
      :max="max"
      :debounce="debounce"
      :size="inputSize">
    </el-input-number>
    <div
      class="el-slider__runway"
      :class="{ 'show-input': showInput, 'disabled': sliderDisabled }"
      :style="runwayStyle"
      @click="onSliderClick"
      ref="slider">
      <div
        class="el-slider__bar"
        :style="barStyle">
      </div>
      <slider-button
        :vertical="vertical"
        :value="minValue"
        @input="min => setValues({ min })"
        @change="$emit('change', value)"
        :tooltip-class="tooltipClass"
        :dragging.sync="dragging"
        ref="button1">
      </slider-button>
      <slider-button
        :vertical="vertical"
        :value="maxValue"
        @input="max => setValues({ max })"
        @change="$emit('change', value)"
        :tooltip-class="tooltipClass"
        :dragging.sync="dragging"
        ref="button2"
        v-if="range">
      </slider-button>
      <template v-if="showStops">
        <div
          class="el-slider__stop"
          v-for="(item, key) in stops"
          :key="key"
          :style="getStopStyle(item)">
        </div>
      </template>
      <template v-if="markList.length > 0">
        <div>
          <div
            v-for="(item, key) in markList"
            :style="getStopStyle(item.position)"
            class="el-slider__stop el-slider__marks-stop"
            :key="key">
          </div>
        </div>
        <div class="el-slider__marks">
          <slider-marker
            :mark="item.mark" v-for="(item, key) in markList"
            :key="key"
            :style="getStopStyle(item.position)">
          </slider-marker>
        </div>
      </template>
    </div>
  </div>
</template>

<script type="text/babel">
  import ElInputNumber from 'element-ui/packages/input-number';
  import SliderButton from './button.vue';
  import SliderMarker from './marker';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElSlider',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      }
    },

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
      value: {
        type: [Number, Array],
        default: 0
      },
      showInput: {
        type: Boolean,
        default: false
      },
      showInputControls: {
        type: Boolean,
        default: true
      },
      inputControlsPosition: {
        type: String,
        default: ''
      },
      inputSize: {
        type: String,
        default: 'small'
      },
      showStops: {
        type: Boolean,
        default: false
      },
      showTooltip: {
        type: Boolean,
        default: true
      },
      formatTooltip: Function,
      disabled: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      },
      height: {
        type: String
      },
      debounce: {
        type: Number,
        default: 300
      },
      label: {
        type: String
      },
      tooltipClass: String,
      marks: Object,
      validateEvent: {
        type: Boolean,
        default: true
      }
    },

    components: {
      ElInputNumber,
      SliderButton,
      SliderMarker
    },

    data() {
      return {
        dragging: false,
        sliderSize: 1
      };
    },

    watch: {
      value(val) {
        this.setValues({ forceEmit: false });
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', val);
        }
      },

      min() {
        this.setValues({ forceEmit: false });
      },

      max() {
        this.setValues({ forceEmit: false });
      }
    },

    methods: {
      setValues({
        min = this.range ? this.value[0] : this.value,
        max = this.range ? this.value[1] : null,
        forceEmit = true
      } = {}) {
        if (this.min > this.max) {
          console.error('[Element Error][Slider]min should not be greater than max.');
          return;
        }
        if (this.range) {
          if (max < this.min) {
            this.$emit('input', [this.min, this.min]);
          } else if (min > this.max) {
            this.$emit('input', [this.max, this.max]);
          } else if (min < this.min) {
            this.$emit('input', [this.min, max]);
          } else if (max > this.max) {
            this.$emit('input', [min, this.max]);
          } else if (forceEmit) {
            this.$emit('input', [min, max]);
          }
        } else {
          const val = min;
          if (typeof val === 'number' && !isNaN(val)) {
            if (val < this.min) {
              this.$emit('input', this.min);
            } else if (val > this.max) {
              this.$emit('input', this.max);
            } else if (forceEmit) {
              this.$emit('input', val);
            }
          }
        }
      },

      setPosition(percent) {
        const targetValue = this.min + percent * (this.max - this.min) / 100;
        if (!this.range) {
          this.$refs.button1.setPosition(percent);
          return;
        }
        let button;
        if (Math.abs(this.minValue - targetValue) < Math.abs(this.maxValue - targetValue)) {
          button = this.minValue < this.maxValue ? 'button1' : 'button2';
        } else {
          button = this.minValue > this.maxValue ? 'button1' : 'button2';
        }
        this.$refs[button].setPosition(percent);
      },

      onSliderClick(event) {
        if (this.sliderDisabled) return;
        this.resetSize();
        if (this.vertical) {
          const sliderOffsetBottom = this.$refs.slider.getBoundingClientRect().bottom;
          this.setPosition((sliderOffsetBottom - event.clientY) / this.sliderSize * 100);
        } else {
          const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
          this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
        }
      },

      resetSize() {
        if (this.$refs.slider) {
          this.sliderSize = this.$refs.slider[`client${ this.vertical ? 'Height' : 'Width' }`];
        }
      },

      getStopStyle(position) {
        return { [this.vertical ? 'bottom' : 'left']: position + '%' };
      }
    },

    computed: {
      stops() {
        if (!this.showStops || this.min > this.max) return [];
        if (this.step === 0) {
          process.env.NODE_ENV !== 'production' &&
          console.warn('[Element Warn][Slider]step should not be 0.');
          return [];
        }
        const stopCount = (this.max - this.min) / this.step;
        const stepWidth = 100 * this.step / (this.max - this.min);
        const result = [];
        for (let i = 1; i < stopCount; i++) {
          result.push(i * stepWidth);
        }
        if (this.range) {
          return result.filter(step => {
            return step < 100 * (this.minValue - this.min) / (this.max - this.min) ||
              step > 100 * (this.maxValue - this.min) / (this.max - this.min);
          });
        } else {
          return result.filter(step => step > 100 * (this.minValue - this.min) / (this.max - this.min));
        }
      },

      markList() {
        if (!this.marks) {
          return [];
        }

        const marksKeys = Object.keys(this.marks);
        return marksKeys.map(parseFloat)
          .sort((a, b) => a - b)
          .filter(point => point <= this.max && point >= this.min)
          .map(point => ({
            point,
            position: (point - this.min) * 100 / (this.max - this.min),
            mark: this.marks[point]
          }));
      },

      minValue() {
        if (this.range) {
          return Array.isArray(this.value) ? this.value[0] : null;
        } else {
          return this.value;
        }
      },

      maxValue() {
        if (this.range) {
          return Array.isArray(this.value) ? this.value[1] : null;
        } else {
          return null;
        }
      },

      barSize() {
        return this.range
          ? `${ 100 * (this.maxValue - this.minValue) / (this.max - this.min) }%`
          : `${ 100 * (this.minValue - this.min) / (this.max - this.min) }%`;
      },

      barStart() {
        return this.range
          ? `${ 100 * (this.minValue - this.min) / (this.max - this.min) }%`
          : '0%';
      },

      precision() {
        return Math.max(...[this.min, this.max, this.step].map(item => {
          const str = '' + item;
          let decimal = str.indexOf('.') + 1;
          return decimal > 0 ? str.length - decimal : 0;
        }));
      },

      runwayStyle() {
        return this.vertical ? { height: this.height } : {};
      },

      barStyle() {
        return this.vertical
          ? {
            height: this.barSize,
            bottom: this.barStart
          } : {
            width: this.barSize,
            left: this.barStart
          };
      },

      sliderDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    mounted() {
      this.setValues({ forceEmit: false });
      this.resetSize();
      window.addEventListener('resize', this.resetSize);
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.resetSize);
    }
  };
</script>
