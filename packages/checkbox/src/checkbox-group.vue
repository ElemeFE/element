<script>
  export default {
    name: 'ElCheckboxGroup',

    componentName: 'ElCheckboxGroup',

    provide() {
      return {
        ElCheckboxGroup: this
      };
    },

    inject: ['ElFormItem'],

    props: {
      value: {},
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    watch: {
      value(value) {
        this.ElFormItem.$emit('el.form.change', value);
      }
    }
  };
</script>

<template>
  <div class="el-checkbox-group">
    <slot></slot>
  </div>
</template>
