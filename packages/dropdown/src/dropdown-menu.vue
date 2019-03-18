<template>
  <transition name="el-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="doDestroy">
    <div class="el-dropdown-menu el-popper" v-show="showPopper">
      <el-scrollbar
        tag="ul"
        wrap-class="el-dropdown-menu__wrap"
        view-class="el-dropdown-menu__list"
        :class="[size && `el-dropdown-menu--${size}`]"
        ref="scrollbar"
      >
        <slot></slot>
      </el-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'element-ui/src/utils/vue-popper';

  export default {
    name: 'ElDropdownMenu',

    componentName: 'ElDropdownMenu',

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

    methods: {
      handleMenuEnter() {
        this.$nextTick(() => this.$refs.scrollbar && this.$refs.scrollbar.handleScroll());
      }
    },

    created() {
      this.$on('updatePopper', () => {
        if (this.showPopper) this.updatePopper();
      });
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
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
