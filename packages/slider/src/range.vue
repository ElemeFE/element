<template>
  <div
    class="el-slider"
    :class="{ 'is-vertical': vertical }"
    role="slider"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-orientation="vertical ? 'vertical': 'horizontal'"
    :aria-disabled="sliderDisabled"
    :aria-valuetext="`${value[0]}-${value[1]}`"
    :aria-label="label || `slider between ${min} and ${max}`"
  >
    <div
      class="el-slider__runway"
      :class="{ 'disabled': sliderDisabled }"
      :style="runwayStyle"
      @click="onSliderClick"
      ref="slider">
      <slider-button
        v-for="idx of range"
        :key="'btn-' + idx"
        :vertical="vertical"
        :value="value[idx - 1]"
        :index="idx - 1"
        @input="setValueByIdx($event, idx - 1)"
        @change="setValues(); $emit('change', value)"
        :tooltip-class="tooltipClass"
        :dragging.sync="dragging"
        ref="buttons">
      </slider-button>
      <slider-common />
    </div>
  </div>
</template>

<script type="text/babel">
  import { arrayFill, arrayFindIndex, arrayEquals } from 'element-ui/src/utils/util';
  import Mixin from './mixin';

  export default {
    mixins: [Mixin],

    name: 'ElSliderRange',

    props: {
      value: Array,
      range: {
        type: Number,
        default: 2
      }
    },

    methods: {
      setValueByIdx(newVal, index) {
        const value = this.value.concat();
        value[index] = newVal;
        this.setValues(value);
      },

      setValues(value = this.value.concat()) {
        const { min, max } = this;

        if (!Array.isArray(value)) {
          this.$emit('input', arrayFill(Array(this.range), this.min));
          return;
        }
        value.forEach((x, i) => {
          if (x < min) {
            value[i] = min;
          } else if (x > max) {
            value[i] = max;
          }
        });
        value.forEach((x, i) => {
          if (i <= 0) return;
          const prev = value[i - 1];
          if (x < prev) value[i] = prev;
        });
        if (!arrayEquals(value, this.oldValue)) this.$emit('input', value);
      },

      setOldValues(val) {
        this.oldValue = val.concat();
      },

      setPosition(percent) {
        const targetValue = this.min + percent * this.length / 100;
        let button = arrayFindIndex(this.value, x => targetValue <= x);
        if (button < 0) {
          // most right side
          button = this.value.length - 1;
        } else if (button > 0) {
          // middle side
          if (Math.abs(this.value[button - 1] - targetValue) < Math.abs(this.value[button] - targetValue)) {
            button--;
          }
        }

        this.$refs.buttons[button].setPosition(percent);
      }
    },

    computed: {
      bars() {
        return [
          {
            start: 0,
            width: 100 * (this.value[0] - this.min) / this.length,
            hidden: true
          },
          ...this.value.slice(0, -1).map((x, i) => {
            return {
              start: 100 * (x - this.min) / this.length,
              width: 100 * (this.value[i + 1] - x) / this.length
            };
          }),
          {
            start: 100 * (this.value[this.value.length - 1] - this.min) / this.length,
            width: 100 * (this.max - this.value[this.value.length - 1]) / this.length,
            hidden: true
          }
        ];
      }
    }
  };
</script>
