<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <ul class="el-dropdown-menu" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  import Popper from 'element-ui/src/utils/vue-popper';

  export default {
    name: 'ElDropdownMenu',

    componentName: 'ElDropdownMenu',

    mixins: [Popper],

    created() {
      this.$on('updatePopper', this.updatePopper);
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      '$parent.menuAlign': {
        immediate: true,
        handler(val) {
          this.currentPlacement = `bottom-${val}`;
        }
      }
    }
  };
</script>
