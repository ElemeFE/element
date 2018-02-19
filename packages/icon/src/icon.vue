<template>
  <i :class="className" @click="onClick">
    <svg><use :xlink:href="'#icon-' + iconName"></use></svg>
  </i>
</template>

<script>
  export default {
    name: 'TmIcon',

    props: {
      iconName: String,
      iconClass: {
        type: String,
        default: ''
      },
      onClick: {
        type: Function,
        default: () => {
          console.log('helllo biyatch');
        }
      }
    },
    computed: {
      className() {
        return 'tm-icon tm-icon-' + this.iconName + ' ' + this.iconClass;
      }
    }
  };
</script>
