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

          const handler = () => vnode.context[binding.expression]();
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
        }
      }
    },
    computed: {
      minDisabled() {
        return this.accSub(this.value, this.step) < this.min;
      },
      maxDisabled() {
        return this.accAdd(this.value, this.step) > this.max;
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
        if (this.maxDisabled) return;
        const value = this.value || 0;
        if (this.accAdd(value, this.step) > this.max || this.disabled) return;
        this.currentValue = this.accAdd(value, this.step);
      },
      decrease() {
        if (this.minDisabled) return;
        const value = this.value || 0;
        if (this.accSub(value, this.step) < this.min || this.disabled) return;
        this.currentValue = this.accSub(value, this.step);
      },
      handleBlur() {
        this.$refs.input.setCurrentValue(this.currentValue);
      }
    }
  };
</script>
