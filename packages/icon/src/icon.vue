<template>
  <i :class="'tm-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'TmIcon',

    props: {
      name: String
    }
  };
</script>
