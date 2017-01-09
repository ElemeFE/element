<template>
  <div class="el-input-number"
    :class="[
      size ? 'el-input-number--' + size : '',
      { 'is-disabled': disabled },
      { 'is-without-controls': !controls}
    ]"
  >
    <span
      v-if="controls"
      class="el-input-number__decrease el-icon-minus"
      :class="{'is-disabled': minDisabled}"
      v-repeat-click="decrease"
    >
    </span>
    <span
      v-if="controls"
      class="el-input-number__increase el-icon-plus"
      :class="{'is-disabled': maxDisabled}"
      v-repeat-click="increase"
    >
    </span>
    <el-input
      v-model.number="currentValue"
      @keydown.up.native="increase"
      @keydown.down.native="decrease"
      @blur="handleBlur"
      :disabled="disabled"
      :size="size"
      :max="max"
      :min="min"
      ref="input"
    >
        <template slot="prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </template>
        <template slot="append" v-if="$slots.append">
          <slot name="append"></slot>
        </template> 
    </el-input>
  </div>
</template>
<script>
  import ElInput from 'element-ui/packages/input';
  import { once, on } from 'element-ui/src/utils/dom';

  export default {
    name: 'ElInputNumber',
    directives: {
      repeatClick: {
        bind(el, binding, vnode) {
          let interval = null;
          let startTime;
          const handler = () => vnode.context[binding.expression].apply();
          const clear = () => {
            if (new Date() - startTime < 100) {
              handler();
            }
            clearInterval(interval);
            interval = null;
          };

          on(el, 'mousedown', () => {
            startTime = new Date();
            once(document, 'mouseup', clear);
            interval = setInterval(handler, 100);
          });
        }
      }
    },
    components: {
      ElInput
    },
    props: {
      step: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      value: {
        default: 0
      },
      disabled: Boolean,
      size: String,
      controls: {
        type: Boolean,
        default: true
      }
    },
    data() {
      // correct the init value
      let value = this.value;
      if (value < this.min) {
        this.$emit('input', this.min);
        value = this.min;
      }
      if (value > this.max) {
        this.$emit('input', this.max);
        value = this.max;
      }

      return {
        currentValue: value
      };
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },

      currentValue(newVal, oldVal) {
        if (newVal <= this.max && newVal >= this.min) {
          this.$emit('change', newVal, oldVal);
          this.$emit('input', newVal);
        } else {
          this.currentValue = oldVal;
        }
      }
    },
    computed: {
      minDisabled() {
        return this._decrease(this.value, this.step) < this.min;
      },
      maxDisabled() {
        return this._increase(this.value, this.step) > this.max;
      },
      precision() {
        const { value, step, getPrecision } = this;
        return Math.max(getPrecision(value), getPrecision(step));
      }
    },
    methods: {
      toPrecision(num, precision) {
        if (precision === undefined) precision = this.precision;
        return parseFloat(parseFloat(Number(num).toFixed(precision)));
      },
      getPrecision(value) {
        const valueString = value.toString();
        const dotPosition = valueString.indexOf('.');
        let precision = 0;
        if (dotPosition !== -1) {
          precision = valueString.length - dotPosition - 1;
        }
        return precision;
      },
      _increase(val, step) {
        if (typeof val !== 'number') return this.currentValue;

        const precisionFactor = Math.pow(10, this.precision);

        return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
      },
      _decrease(val, step) {
        if (typeof val !== 'number') return this.currentValue;

        const precisionFactor = Math.pow(10, this.precision);

        return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
      },
      increase() {
        if (this.disabled || this.maxDisabled) return;
        const value = this.value || 0;
        const newVal = this._increase(value, this.step);
        if (newVal > this.max) return;
        this.currentValue = newVal;
      },
      decrease() {
        if (this.disabled || this.minDisabled) return;
        const value = this.value || 0;
        const newVal = this._decrease(value, this.step);
        if (newVal < this.min) return;
        this.currentValue = newVal;
      },
      handleBlur() {
        this.$refs.input.setCurrentValue(this.currentValue);
      }
    }
  };
</script>
