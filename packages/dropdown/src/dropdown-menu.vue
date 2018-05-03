<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <ul class="el-dropdown-menu el-popper" :class="[size && `el-dropdown-menu--${size}`]" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  import Popper from 'element-ui/src/utils/vue-popper';

  const poperMixins = {
    props: {
      transformOrigin: Popper.props.transformOrigin,
      offset: Popper.props.offset,
      boundariesPadding: Popper.props.boundariesPadding,
      popperOptions: Popper.props.popperOptions,
      placement: Popper.props.placement,
      reference: Popper.props.reference,
      popper: Popper.props.popper,
      value: Popper.props.value,
      visibleArrow: Popper.props.visibleArrow,
      arrowOffset: Popper.props.arrowOffset,
      transition: Popper.props.transition
    },
    data: Popper.data,
    watch: Popper.watch,
    methods: Popper.methods,
    beforeDestroy: Popper.beforeDestroy,
    deactivated: Popper.deactivated
  };

  export default {
    name: 'ElDropdownMenu',

    componentName: 'ElDropdownMenu',

    mixins: [poperMixins],

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

    computed: {
      appendToBody() {
        return this.isRoot;
      },
      isRoot() {
        return ['ElDropdown'].indexOf(this.$parent.$options.componentName) > -1;
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
      },
      // 'dropdownItem.placement': {
      //   immediate: true,
      //   handler(val) {
      //     if (!this.isRoot) {
      //       this.currentPlacement = val;
      //     }
      //   }
      // }
    }
  };
</script>
