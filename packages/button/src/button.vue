<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="{
      ['el-button--' + type]: type,
      ['el-button--' + buttonSize]: buttonSize,
      'is-disabled': buttonDisabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle
    }"
  >
    <i
      v-if="icon || loading"
      :class="loading ? 'el-icon-loading' : icon"
      :style="$slots.default ? { marginRight: '5px' } : null"></i>
    <slot></slot>
    <i v-if="iconRight" :class="iconRight" style="margin-left: 5px"></i>
  </button>
</template>
<script>
  import { calcDisabled } from 'element-ui/src/utils/util';

  export default {
    name: 'ElButton',

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: String,
      iconRight: String,
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: {
        type: Boolean,
        default: null
      },
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      buttonDisabled() {
        return calcDisabled(this.disabled, this.elForm);
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
