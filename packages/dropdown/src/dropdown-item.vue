<template>
  <li
    class="el-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'el-dropdown-menu__item--divided': divided,
      'el-dropdown-menu__item--submenu': hasDropdown
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <slot></slot>
    <i v-if="hasDropdown" :class="[ 'el-dropdown-menu__item--icon', 'el-dropdown-icon-arrow', 'el-icon-arrow-right' ]"></i>
    <slot name="dropdown"></slot>
  </li>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      trigger: {
        type: String,
        default: 'hover'
      },
      placement: {
        type: String,
        default: 'right-start'
      },
      showTimeout: {
        type: Number,
        default: 250
      },
      hideTimeout: {
        type: Number,
        default: 250
      },
      disabled: Boolean,
      divided: Boolean
    },

    provide() {
      return {
        dropdown: this
      };
    },

    data() {
      return {
        timeout: null,
        visible: false
      };
    },

    computed: {
      hasDropdown() {
        return this.$slots.dropdown && this.$slots.dropdown.length > 0;
      }
    },

    watch: {
      visible(val) {
        this.broadcast('ElDropdownMenu', 'visible', val);
        // this.$emit('visible-change', val);
      }
    },

    mounted() {
      // this.$on('menu-item-click', this.handleMenuItemClick);
      this.initEvent();
      // this.initAria();
    },

    methods: {
      initEvent() {
        if (this.hasDropdown) {
          let triggerElm = this.$el; // this.$slots.default[0].elm;
          let dropdownElm = this.$slots.dropdown[0].elm;

          if (this.trigger === 'hover') {
            triggerElm.addEventListener('mouseenter', this.show);
            triggerElm.addEventListener('mouseleave', this.hide);
            dropdownElm.addEventListener('mouseenter', this.show);
            dropdownElm.addEventListener('mouseleave', this.hide);
          } else if (this.trigger === 'click') {
            triggerElm.addEventListener('click', this.handleClick);
          }

        }
      },
      show() {
        // if (this.triggerElm.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.trigger === 'click' ? 0 : this.showTimeout);
        // this.trigger === 'click' ? 0 : this.showTimeout);
      },
      hide() {
        // if (this.triggerElm.disabled) return;
        // this.removeTabindex();
        // this.resetTabindex(this.triggerElm);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.trigger === 'click' ? 0 : this.hideTimeout);
      },
      handleClick(e) {
        // if (this.triggerElm.disabled) return;
        if (this.visible) {
          this.hide();
        } else {
          this.show();
        }
        this.dispatch('ElDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
