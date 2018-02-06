<template>
  <aside class="tm-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'TmAside',

    componentName: 'TmAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
