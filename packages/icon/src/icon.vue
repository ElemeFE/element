<template>
  <i :class="className" @click="onClick">
    <svg><use :xlink:href="'#icon-' + name"></use></svg>
  </i>
</template>

<script>
  export default {
    name: 'TmIcon',

    props: {
      name: String,
      onClick: {
        type: Function,
        default: () => {}
      }
    },
    computed: {
      className() {
        return 'tm-icon tm-icon-' + this.name;
      }
    }
  };
</script>
