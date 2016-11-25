<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElRadioGroup',

    componentName: 'ElRadioGroup',

    mixins: [Emitter],

    props: {
      value: [String, Number],
      size: String
    },
    watch: {
      value(value) {
        this.$emit('change', value);
        this.broadcast('ElRadio', 'initData', value);
        this.dispatch('form-item', 'el.form.change', [this.value]);
      }
    },
    mounted() {
      this.broadcast('ElRadio', 'initData', this.value);
    }
  };
</script>

<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>
