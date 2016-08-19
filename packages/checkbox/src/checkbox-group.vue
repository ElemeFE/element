<script>
  import emitter from 'main/mixins/emitter';

  export default {
    name: 'ElCheckboxGroup',

    mixins: [emitter],

    props: {
      value: {}
    },

    watch: {
      value(value) {
        this.$emit('change', value);
        this.dispatch('form-item', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="el-checkbox-group">
    <slot></slot>
  </div>
</template>
