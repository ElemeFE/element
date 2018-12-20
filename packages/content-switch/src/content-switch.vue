<template>
  <button
    class="el-content-switch"
    :class="{ 'is-active': active, 'is-disabled': disabled }">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
  export default {
    name: 'ElContentSwitch',

    props: {
      value: {
        required: false,
      },

      label: {
        required: true,
      },

      disabled: {
        type: Boolean,
        default: false,
        required: false,
      },
    },

    computed: {
      active () {
        return this.value === this.label;
      },
    },
  };
</script>
