<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElRadioGroup',

    componentName: 'ElRadioGroup',

    mixins: [Emitter],

    props: {
      value: [String, Number],
      size: String,
      fill: {
        type: String,
        default: '#20a0ff'
      },
      textColor: {
        type: String,
        default: '#fff'
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

<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>
