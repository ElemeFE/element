<template>
  <i :class="className" @click="handleClick">
    <svg><use :xlink:href="iconHref"></use></svg>
  </i>
</template>

<script>
  export default {
    name: 'TmIcon',

    props: {
      name: String
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
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      },
    }
  };
</script>
