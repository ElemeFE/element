<script>
  import emitter from 'main/mixins/emitter';

  export default {
    name: 'ElRadioGroup',

    mixins: [emitter],

    props: {
      value: {
        default: '',
        twoWay: true,
        required: true
      },
      size: String
    },
    watch: {
      value(value) {
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
