<template>
  <ul class="el-dropdown__menu">
    <slot></slot>
  </ul>
</template>
<script>
  import Popper from 'main/utils/popper';

  export default {
    name: 'ElDropdownMenu',

    props: {
      visible: Boolean
    },
    data() {
      return {
        popper: null
      };
    },
    computed: {
      menuAlign() {
        return this.$parent.menuAlign;
      }
    },
    mounted() {
      document.body.appendChild(this.$el);

      this.$nextTick(() => {
        this.popper = new Popper(this.$parent.$el, this.$el, { gpuAcceleration: false, placement: `bottom-${this.menuAlign}` });
      });
    },

    destroyed() {
      setTimeout(() => {
        this.popper.destroy();
      }, 300);
    }
  };
</script>
