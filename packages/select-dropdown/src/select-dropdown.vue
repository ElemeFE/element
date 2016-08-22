<template>
  <div class="el-select-dropdown">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import Popper from 'main/utils/popper';

  export default {
    name: 'el-select-dropdown',

    componentName: 'select-dropdown',

    data() {
      return {
        popper: null
      };
    },

    created() {
      this.$on('updatePopper', this.updatePopper);
      this.$on('destroyPopper', this.destroyPopper);
    },

    methods: {
      updatePopper() {
        if (this.popper) {
          this.$nextTick(() => {
            this.popper.update();
          });
        } else {
          this.$nextTick(() => {
            this.popper = new Popper(this.$parent.$refs.reference.$el, this.$el, {
              gpuAcceleration: false,
              placement: 'bottom-start',
              boundariesPadding: 0,
              forceAbsolute: true
            });
            this.popper.onCreate(popper => {
              this.resetTransformOrigin(popper);
            });
          });
        }
      },

      destroyPopper() {
        if (this.popper) {
          this.resetTransformOrigin(this.popper);
          setTimeout(() => {
            this.popper.destroy();
            this.popper = null;
          }, 300);
        }
      },

      resetTransformOrigin(popper) {
        let placementMap = { top: 'bottom', bottom: 'top' };
        let placement = popper._popper.getAttribute('x-placement').split('-')[0];
        let origin = placementMap[placement];
        popper._popper.style.transformOrigin = `center ${ origin }`;
      }
    },

    beforeDestroy() {
      if (this.popper) {
        this.popper.destroy();
      }
    }
  };
</script>
