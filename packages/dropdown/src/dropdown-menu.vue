<template>
  <transition name="md-fade-bottom" @after-leave="doDestroy">
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
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    computed: {
      placement() {
        return `bottom-${this.$parent.menuAlign}`;
      }
    }
  };
</script>
