<template>
  <label class="el-checkbox">
    <span class="el-checkbox__input">
      <span class="el-checkbox__inner"
        :class="{
          'is-disabled': isLimit || disabled,
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
        @change="$emit('on-change', checked)"
        @focus="focus = true"
        @blur="focus = false"
        :disabled="isLimit || disabled"
        v-el: checkbox>
      <input
        v-else
        class="el-checkbox__original"
        :value="label"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false"
        type="checkbox"
        @change="$emit('on-change', checked)"
        :disabled="isLimit || disabled">
    </span>
    <span class="el-checkbox__label">
      <slot></slot>
      <template v-if="!_slotContents">{{label}}</template>
    </span>
  </label>
</template>
<script>
  /**
   * checkbox
   * @module components/basic/checkbox
   * @desc 多选按钮
   * @param {string[]} value - 绑定值
   * @param {string} value - 真实值
   * @param {string} [label] - 显示值
   * @param {boolean} [disabled=false] - 是否禁用
   *
   * @example
   * <el-checkbox :value.sync="data" value="Jack"></el-checkbox>
   * <el-checkbox :value.sync="data" value="John"></el-checkbox>
   * <el-checkbox :value.sync="data" value="Mike" disabled></el-checkbox>
   */
  export default {
    name: 'ElCheckbox',

    props: {
      value: {
        type: [Array, Boolean, String]
      },
      label: {
        type: String
      },
      indeterminate: Boolean,
      disabled: Boolean,
      trueLabel: {
        default: ''
      },
      falseLabel: {
        default: ''
      }
    },

    computed: {
      _value: {
        get() {
          return this.value !== undefined ? this.value : this.$parent.value;
        },
        set(newValue) {
          if (this.value !== undefined) {
            this.value = newValue;
          } else {
            this.$parent.value = newValue;
          }
        }
      },
      checked() {
        var type = Object.prototype.toString.call(this._value);

        if (type === '[object Boolean]') {
          return this._value;
        } else if (type === '[object Array]') {
          return this._value.indexOf(this.label) > -1;
        } else if (type === '[object String]') {
          return this._value === this.trueLabel;
        }
      }
    },

    data() {
      return {
        isLimit: false,
        focus: false
      };
    },

    events: {
      ['element.checkbox.disabled']() {
        if (this.checked) {
          return;
        }

        this.isLimit = true;
      },

      ['element.checkbox.enabled']() {
        this.isLimit = false;
      }
    },

    watch: {
      checked(sure) {
        this.$dispatch('element.checkbox', sure);
      }
    }
  };
</script>
