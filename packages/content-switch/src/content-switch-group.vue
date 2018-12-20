<template>
  <p></p>
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
