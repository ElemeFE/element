<template>
  <ul class="el-select-group__wrap">
    <li class="el-select-group__title">{{ label }}</li>
    <li>
      <ul class="el-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'el-option-group',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      disabled(val) {
        this.broadcast('ElOption', 'handleGroupDisabled', val);
      }
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>