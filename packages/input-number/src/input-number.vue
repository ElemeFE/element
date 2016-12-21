<template>
  <div class="el-input-number"
    :class="[
      size ? 'el-input-number--' + size : '',
      { 'is-disabled': disabled },
      { 'is-without-controls': !controls}
    ]"
  >
    <el-input
      :value="currentValue"
      @keydown.up.native="increase"
      @keydown.down.native="decrease"
      @blur="handleBlur"
      @input="handleInput"
      :disabled="disabled"
      :size="size"
      :class="{
        'is-active': inputActive
      }">
        <template slot="prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </template>
        <template slot="append" v-if="$slots.append">
          <slot name="append"></slot>
        </template> 
    </el-input>
    <span
      v-if="controls"
      class="el-input-number__decrease el-icon-minus"
      :class="{'is-disabled': minDisabled}"
      v-repeat-click="decrease"
      @mouseenter="activeInput(minDisabled)"
      @mouseleave="inactiveInput(minDisabled)"
    >
    </span>
    <span
      v-if="controls"
      class="el-input-number__increase el-icon-plus"
      :class="{'is-disabled': maxDisabled}"
      v-repeat-click="increase"
      @mouseenter="activeInput(maxDisabled)"
      @mouseleave="inactiveInput(maxDisabled)"
    >
    </span>
  </div>
</template>
<script>
  import ElInput from 'element-ui/packages/input';
  import { once, on } from 'wind-dom/src/event';

  export default {
    name: 'ElInputNumber',
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
        default: 0
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
    directives: {
      repeatClick: {
        bind(el, binding, vnode) {
          let interval = null;
          let startTime;

          const handler = () => {
            vnode.context[binding.expression]();
          };

          const clear = function() {
            if (new Date() - startTime < 100) {
              handler();
            }
            clearInterval(interval);
            interval = null;
          };

          on(el, 'mousedown', function() {
            startTime = new Date();
            once(document, 'mouseup', clear);
            interval = setInterval(function() {
              handler();
            }, 100);
          });
        }
      }
    },
    components: {
      ElInput
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
        currentValue: value,
        inputActive: false
      };
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },

      currentValue(newVal, oldVal) {
        let value = Number(newVal);
        if (value <= this.max && value >= this.min) {
          this.$emit('change', value, oldVal);
          this.$emit('input', value);
        }
      }
    },
    computed: {
      minDisabled() {
        return this.value - this.step < this.min;
      },
      maxDisabled() {
        return this.value + this.step > this.max;
      }
    },
    methods: {
      accSub(arg1, arg2) {
        var r1, r2, m, n;
        try {
          r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
      },
      accAdd(arg1, arg2) {
        var r1, r2, m, c;
        try {
          r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
          r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
          var cm = Math.pow(10, c);
          if (r1 > r2) {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', '')) * cm;
          } else {
            arg1 = Number(arg1.toString().replace('.', '')) * cm;
            arg2 = Number(arg2.toString().replace('.', ''));
          }
        } else {
          arg1 = Number(arg1.toString().replace('.', ''));
          arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
      },
      increase() {
        const value = this.value || 0;
        if (value + this.step > this.max || this.disabled) return;
        this.currentValue = this.accAdd(this.step, value);
        if (this.maxDisabled) {
          this.inputActive = false;
        }
      },
      decrease() {
        const value = this.value || 0;
        if (value - this.step < this.min || this.disabled) return;
        this.currentValue = this.accSub(value, this.step);
        if (this.minDisabled) {
          this.inputActive = false;
        }
      },
      activeInput(disabled) {
        if (!this.disabled && !disabled) {
          this.inputActive = true;
        }
      },
      inactiveInput(disabled) {
        if (!this.disabled && !disabled) {
          this.inputActive = false;
        }
      },
      handleBlur(event) {
        let value = Number(this.currentValue);
        if (isNaN(value) || value > this.max || value < this.min) {
          this.currentValue = this.value;
        } else {
          this.currentValue = value;
        }
      },
      handleInput(value) {
        this.currentValue = value;
      }
    }
  };
</script>
