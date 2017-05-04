<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from 'setaria-ui/src/mixins/emitter';

  export default {
    name: 'ElRadioGroup',

    componentName: 'ElRadioGroup',

    mixins: [Emitter],

    props: {
      value: {},
      size: String,
      fill: String,
      textColor: String,
      disabled: Boolean,
      // 只读
      readonly: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value(value) {
        this.$emit('change', value);
        this.dispatch('ElFormItem', 'el.form.change', [this.value]);
      }
    }
  };
</script>

