<template>
  <button
    class="tm-button"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'tm-button--' + type : '',
      buttonSize ? 'tm-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-approve': approve,
        'is-cancel': cancel,
        'is-remove': remove,
        'is-search': search,
        'is-icon': icon
      }
    ]"
  >
    <tm-icon name="loader" v-if="loading" @click="handleInnerClick"></tm-icon>
    <tm-icon :name="icon" v-if="icon && !loading" @click="handleInnerClick"></tm-icon>
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'TmButton',

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
      round: Boolean,
      circle: Boolean,
      approve: Boolean,
      cancel: Boolean,
      remove: Boolean,
      search: Boolean
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
