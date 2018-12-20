<template>
  <p></p>
</template>

<script>
  export default {
    name: 'ElContentSwitch',

    componentName: 'ElContentSwitch',

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
