<template>
  <svg class="tm-icon">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script>
  export default {
    name: 'TmIcon',

    props: {
      name: String
    }
  };
</script>
