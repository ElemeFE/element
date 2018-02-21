<script>
  import Emitter from 'tmconsulting-ui/src/mixins/emitter';

  export default {
    name: 'TmCheckboxGroup',

    componentName: 'TmCheckboxGroup',

    mixins: [Emitter],

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('TmFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="tm-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
