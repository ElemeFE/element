<template>
  <div
    class="el-content-switch-group"
    :class="{ 'is-disabled': disabled }">
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
        required: true
      },

      disabled: {
        type: Boolean,
        default: false,
        required: false
      }
    }
  };
</script>
