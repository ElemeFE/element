<template>
  <ul class="el-dropdown__menu" transition="md-fade-bottom">
    <slot></slot>
  </ul>
</template>
<script>
  import Popper from 'main/utils/popper.js';

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
    ready() {
      document.body.appendChild(this.$el);
      // this.$el.appendTo('body');

      this.$nextTick(() => {
        this.popper = new Popper(this.$parent.$el, this.$el, { gpuAcceleration: false, placement: `bottom-${this.menuAlign}` });
      });
    },

    beforeDestroy() {
      this.$remove();
      setTimeout(() => {
        this.popper.destroy();
      }, 300);
    }
  };
</script>
