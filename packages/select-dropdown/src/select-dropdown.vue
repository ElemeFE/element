<template>
  <div
    class="el-select-dropdown"
    :class="{ 'is-multiple': $parent.multiple }"
    :style="{ minWidth: minWidth }">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import Popper from 'element-ui/src/utils/vue-popper';

  export default {
    name: 'el-select-dropdown',

    componentName: 'select-dropdown',

    mixins: [Popper],

    props: {
      placement: {
        default: 'bottom-start'
      },

      boundariesPadding: {
        default: 0
      },

      options: {
        default() {
          return {
            forceAbsolute: true,
            gpuAcceleration: false
          };
        }
      }
    },

    data() {
      return {
        minWidth: ''
      };
    },

    watch: {
      '$parent.inputWidth'() {
        this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
      }
    },

    mounted() {
      this.referenceElm = this.$parent.$refs.reference.$el;
      this.$parent.popperElm = this.popperElm = this.$el;
      this.$on('updatePopper', this.updatePopper);
      this.$on('destroyPopper', this.destroyPopper);
    }
  };
</script>
