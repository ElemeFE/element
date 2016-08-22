<template>
  <ul class="el-dropdown__menu" transition="md-fade-bottom">
    <slot></slot>
  </ul>
</template>
<script>
  import Popper from 'main/utils/popper';

  export default {
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
    methods: {
      updatePopper() {
        if (this.popper) {
          this.popper.update();
        }
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
