<template>
  <div class="el-input-number"
    :class="[
      size ? 'is-' + size : '',
      { 'is-disabled': disabled }
    ]"
  >
    <el-input
      :value="value"
      @onchange="handleChnage"
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
      v-repeat-click="decrease()"
      @mouseenter="activeInput(minDisabled)"
      @mouseleave="unactiveInput(minDisabled)"
    >
    </span>
    <span
      class="el-input-number__increase el-icon-plus"
      :class="{'is-disabled': maxDisabled}"
      v-repeat-click="increase()"
      @mouseenter="activeInput(maxDisabled)"
      @mouseleave="unactiveInput(maxDisabled)"
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
        type: Number,
        required: true
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
        bind() {
          const el = this.el;
          let interval = null;
          let startTime;

          const handler = () => {
            this.vm.$get(this.expression);
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
        inputActive: false
      };
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
        this.value += this.step;
        if (this.maxDisabled) {
          this.inputActive = false;
        }
      },
      decrease() {
        if (this.value - this.step < this.min || this.disabled) return;
        this.value -= this.step;
        if (this.minDisabled) {
          this.inputActive = false;
        }
      },
      activeInput(disabled) {
        if (!this.disabled && !disabled) {
          this.inputActive = true;
        }
      },
      unactiveInput(disabled) {
        if (!this.disabled && !disabled) {
          this.inputActive = false;
        }
      },
      handleChnage(value) {
        this.$emit('onchange', value);
      }
    }
  };
</script>
