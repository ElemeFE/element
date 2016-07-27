<template>
  <li class="el-select-group__title">{{ label }}</li>
  <li>
    <ul class="el-select-group">
      <slot></slot>
    </ul>
  </li>
</template>

<script type="text/babel">
  import emitter from 'main/mixins/emitter';

  export default {
    mixins: [emitter],

    name: 'el-option-group',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    ready() {
      if (this.disabled) {
        this.broadcast('option', 'disableOptions');
      }
    }
  };
</script>