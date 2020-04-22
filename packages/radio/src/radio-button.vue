<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="el-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';
  import { calcDisabled } from 'element-ui/src/utils/util';

  export default {
    name: 'ElRadioButton',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      },
      elRadioGroup: {
        default: null
      }
    },

    props: {
      label: {},
      disabled: {
        type: Boolean,
        default: null
      },
      name: String
    },
    data() {
      return {
        focus: false
      };
    },
    computed: {
      value: {
        get() {
          return this.elRadioGroup.value;
        },
        set(value) {
          this.elRadioGroup.$emit('input', value);
        }
      },
      activeStyle() {
        return {
          backgroundColor: this.elRadioGroup.fill || '',
          borderColor: this.elRadioGroup.fill || '',
          boxShadow: this.elRadioGroup.fill ? `-1px 0 0 0 ${this.elRadioGroup.fill}` : '',
          color: this.elRadioGroup.textColor || ''
        };
      },
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      size() {
        return this.elRadioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      isDisabled() {
        return this.elRadioGroup.disabled || calcDisabled(this.disabled, this.elForm);
      },
      tabIndex() {
        return this.isDisabled || (this.elRadioGroup && this.value !== this.label) ? -1 : 0;
      }
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.dispatch('ElRadioGroup', 'handleChange', this.value);
        });
      }
    }
  };
</script>
