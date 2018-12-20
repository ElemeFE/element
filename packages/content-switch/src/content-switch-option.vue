<template>
  <p></p>
</template>

<script>
  export default {
    name: 'ElContentSwitchOption',

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
