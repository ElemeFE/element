<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <div class="el-dropdown-menu el-popper" :class="[size && `el-dropdown-menu--${size}`]" v-show="showPopper">
      <el-scrollbar 
        tag="ul"
        wrap-class="dropdown-scrollbar__wrap"
        view-class="dropdown-scrollbar__list">
        <slot></slot>
      </el-scrollbar>
    </div>
  </transition>
</template>
<script>
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import Popper from 'element-ui/src/utils/vue-popper';

  export default {
    name: 'ElDropdownMenu',

    componentName: 'ElDropdownMenu',

    components: {
      ElScrollbar
    },

    mixins: [Popper],

    props: {
      visibleArrow: {
        type: Boolean,
        default: true
      },
      arrowOffset: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        size: this.dropdown.dropdownSize
      };
    },

    inject: ['dropdown'],

    created() {
      this.$on('updatePopper', () => {
        if (this.showPopper) this.updatePopper();
      });
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },

    mounted() {
      this.dropdown.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.dropdown.$el;
      // compatible with 2.6 new v-slot syntax
      // issue link https://github.com/ElemeFE/element/issues/14345
      this.dropdown.initDomOperation();
    },

    watch: {
      'dropdown.placement': {
        immediate: true,
        handler(val) {
          this.currentPlacement = val;
        }
      }
    }
  };
</script>
