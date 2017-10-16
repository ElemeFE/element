<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading" @click="handleInnerClick"></i>
    <i :class="icon" v-if="icon && !loading" @click="handleInnerClick"></i>
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'ElButton',

    inject: {
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
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
      handleInnerClick(evt) {
        if (this.disabled) {
          evt.stopPropagation();
        }
      }
    }
  };
</script>
