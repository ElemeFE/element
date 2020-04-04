<template>
  <div
    class="el-slider"
    :class="{ 'is-vertical': vertical, 'el-slider--with-input': !!inputNumber }"
    role="slider"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-orientation="vertical ? 'vertical': 'horizontal'"
    :aria-disabled="sliderDisabled"
    :aria-valuetext="value"
    :aria-label="label || `slider between ${min} and ${max}`"
  >
    <el-input-number
      :value="value"
      @input="setValues"
      v-if="inputNumber"
      class="el-slider__input"
      ref="input"
      @change="$emit('change', $event)"
      v-bind="inputNumber"
      :step="step"
      :disabled="sliderDisabled"
      :min="min"
      :max="max">
    </el-input-number>
    <div
      class="el-slider__runway"
      :class="{ 'show-input': !!inputNumber, 'disabled': sliderDisabled }"
      :style="runwayStyle"
      @click="onSliderClick"
      ref="slider">
      <slider-button
        :vertical="vertical"
        :value="value"
        :index="0"
        @input="setValues"
        @change="$emit('change', value)"
        :tooltip-class="tooltipClass"
        :dragging.sync="dragging"
        ref="button">
      </slider-button>
      <slider-common />
    </div>
  </div>
</template>

<script type="text/babel">
  import ElInputNumber from 'element-ui/packages/input-number';
  import Mixin from './mixin';

  export default {
    mixins: [Mixin],

    name: 'ElSliderSingle',

    props: {
      value: Number,
      inputNumber: {
        type: Object,
        default: null
      }
    },

    components: {
      ElInputNumber
    },

    methods: {
      setValues(value = this.value) {
        if (typeof value !== 'number' || value !== value) {
          this.$emit('input', this.min);
          return;
        }

        const { min, max } = this;
        if (value < min) {
          this.$emit('input', min);
        } else if (value > max) {
          this.$emit('input', max);
        } else if (value !== this.oldValue) {
          this.$emit('input', value);
        }
      },

      setOldValues(val) {
        this.oldValue = val;
      },

      setPosition(percent) {
        const targetValue = this.min + percent * this.length / 100;
        this.$refs.button.setPosition(percent);
      }
    },

    computed: {
      bars() {
        return [
          {
            start: 0,
            width: 100 * (this.value - this.min) / this.length
          },
          {
            start: 100 * (this.value - this.min) / this.length,
            width: 100 * (this.max - this.value) / this.length,
            hidden: true
          }
        ];
      }
    }
  };
</script>
