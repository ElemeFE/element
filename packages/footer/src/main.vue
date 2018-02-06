<template>
  <footer class="tm-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'TmFooter',

    componentName: 'TmFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
