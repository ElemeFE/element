<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElCheckboxGroup',

    componentName: 'ElCheckboxGroup',

    mixins: [Emitter],

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
        this.dispatch('ElFormItem', 'el.form.change', [value]);
      }
    },
    mounted() {
      this.$on('input', this.limitExceeded);
      this.$on('change', this.groupChange);
    },
    methods: {
      limitExceeded(value) {
        this.$emit('limitExceeded', value);
      },
      groupChange(value) {
        this.$emit('groupChange', value);
      }
    }
};
</script>

<template>
  <div class="el-checkbox-group">
    <slot></slot>
  </div>
</template>
