<template>
  <header class="tm-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'TmHeader',

    componentName: 'TmHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
