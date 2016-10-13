<template>
  <label class="el-checkbox">
    <span class="el-checkbox__input">
      <span class="el-checkbox__inner"
        :class="{
          'is-disabled': disabled,
          'is-checked': isChecked,
          'is-indeterminate': indeterminate,
          'is-focus': focus
        }"
      ></span>
      <input
        v-if="trueLabel || falseLabel"
        class="el-checkbox__original"
        type="checkbox"
        :disabled="disabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        ref="checkbox">
      <input
        v-else
        class="el-checkbox__original"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange">
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElCheckbox',

    mixins: [Emitter],

    props: {
      value: {},
      label: String,
      indeterminate: Boolean,
      disabled: Boolean,
      checked: Boolean,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },

    computed: {
      _value: {
        get() {
          return !this.wrapInGroup ? this.value : this.$parent.value;
        },
        set(newValue) {
          if (!this.wrapInGroup) {
            this.$emit('input', newValue);
          } else {
            this.$parent.$emit('input', newValue);
          }
        }
      },
      isChecked() {
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
        focus: false,
        wrapInGroup: this.$parent.$options._componentTag === 'el-checkbox-group'
      };
    },

    watch: {
      checked: {
        immediate: true,
        handler(value) {
          if (value) {
            let type = Object.prototype.toString.call(this._value);
            if (type !== '[object Array]') {
              this._value = this.trueLabel || true;
            } else {
              this._value.push(this.label);
            }
          }
        }
      }
    },

    methods: {
      handleChange(ev) {
        this.$emit('change', ev);
      }
    }
  };
</script>
