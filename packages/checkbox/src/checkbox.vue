<template>
  <label class="el-checkbox">
    <span class="el-checkbox__input">
      <span class="el-checkbox__inner"
        :class="{
          'is-disabled': disabled,
          'is-checked': checked,
          'is-indeterminate': indeterminate,
          'is-focus': focus
        }"
      ></span>
      <input
        v-if="trueLabel || falseLabel"
        class="el-checkbox__original"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="_value"
        type="checkbox"
        @focus="focus = true"
        @blur="focus = false"
        :disabled="disabled"
        ref="checkbox">
      <input
        v-else
        class="el-checkbox__original"
        :value="label"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false"
        type="checkbox"
        :disabled="disabled">
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'main/mixins/emitter';

  export default {
    name: 'ElCheckbox',

    mixins: [Emitter],

    props: {
      value: {},
      label: {
        type: String
      },
      indeterminate: Boolean,
      disabled: Boolean,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },

    computed: {
      _value: {
        get() {
          return this.value !== undefined ? this.value : this.$parent.value;
        },
        set(newValue) {
          if (this.value !== undefined) {
            this.$emit('input', newValue);
          } else {
            this.$parent.$emit('input', newValue);
          }
        }
      },
      checked() {
        var type = Object.prototype.toString.call(this._value);

        if (type === '[object Boolean]') {
          return this._value;
        } else if (type === '[object Array]') {
          return this._value.indexOf(this.label) > -1;
        } else if (type === '[object String]' || type === '[object Number]') {
          return this._value === this.trueLabel;
        }
      }
    },

    data() {
      return {
        focus: false
      };
    },

    watch: {
      checked(sure) {
        this.$emit('change', sure);
      }
    }
  };
</script>
