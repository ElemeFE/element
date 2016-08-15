<script>
  import emitter from 'main/mixins/emitter';

  export default {
    name: 'ElRadioGroup',

    componentName: 'radio-group',

    mixins: [emitter],

    props: {
      value: [String, Number],
      size: String
    },
    watch: {
      value(value) {
        this.$emit('change', value);
        this.dispatch('form-item', 'el.form.change', [this.value]);
      }
    }
  };
</script>

<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>
