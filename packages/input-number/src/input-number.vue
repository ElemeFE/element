<template>
  <div class="el-input-number"
    :class="[
      size ? 'is-' + size : '',
      { 'is-disabled': disabled }
    ]"
  >
    <el-input
      v-model="currentValue"
      @onchange="handleChange"
      :disabled="disabled"
      :size="size"
      :number="true"
      :class="{
        'is-active': inputActive
      }">
    </el-input>
    <span
      class="el-input-number__decrease el-icon-minus"
      :class="{'is-disabled': minDisabled}"
      v-repeat-click="decrease"
      @mouseenter="activeInput(minDisabled)"
      @mouseleave="inactiveInput(minDisabled)"
    >
    </span>
    <span
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
  import ElInput from 'packages/input/index.js';
  import { once, on } from 'wind-dom/src/event';

  export default {
    name: 'ElInputNumber',
    props: {
      value: {
        type: Number
      },
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
      disabled: Boolean,
      size: String
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
      return {
        currentValue: null,
        inputActive: false
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          this.currentValue = val;
        }
      },
      currentValue(val) {
        if (!isNaN(parseInt(val, 10))) {
          this.$emit('input', parseInt(val, 10));
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
      increase() {
        if (this.value + this.step > this.max || this.disabled) return;
        this.currentValue += this.step;
        if (this.maxDisabled) {
          this.inputActive = false;
        }
      },
      decrease() {
        if (this.value - this.step < this.min || this.disabled) return;
        this.currentValue -= this.step;
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
      handleChange(value) {
        this.$emit('onchange', value);
      }
    }
  };
</script>
