<template>
  <div class="el-content-switch-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ElContentSwitchGroup',

    componentName: 'ElContentSwitchGroup',

    props: {
      value: {
        type: String,
        required: true,
      },

      disabled: {
        type: Boolean,
        default: false,
        required: false,
      },
    },
  };
</script>
