<template>
  <i :class="className" @click="onClick">
    <svg><use :xlink:href="iconHref"></use></svg>
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
        let className = 'tm-icon';
        if (this.name) {
          className += ' tm-icon--' + this.name;
        }
        return className;
      },
      iconHref() {
        return '#' + this.name;
      }
    }
  };
</script>
