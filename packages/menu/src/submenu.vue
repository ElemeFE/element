<template>
  <li
    :class="{
      'el-submenu': true,
      'is-active': active,
      'is-opened': opened
    }"
  >
    <div class="el-submenu__title" ref="submenu-title">

      <slot name="title"></slot>
      <i :class="{
          'el-submenu__icon-arrow': true,
          'el-icon-arrow-down': rootMenu.mode === 'vertical',
          'el-icon-caret-bottom': rootMenu.mode === 'horizontal'
        }">
      </i>
    </div>
    <transition :name="rootMenu.mode === 'horizontal' ? 'md-fade-bottom' : ''">
      <ul class="el-menu" v-show="opened"><slot></slot></ul>
    </transition>
  </li>
</template>
<script>
  import menuMixin from './menu-mixin';

  module.exports = {
    name: 'ElSubmenu',

    componentName: 'ElSubmenu',

    mixins: [menuMixin],

    props: {
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        timeout: null,
        active: false
      };
    },
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) !== -1;
      }
    },
    methods: {
      handleClick() {
        this.rootMenu.handleSubmenuClick(this.index, this.indexPath);
      },
      handleMouseenter() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath);
        }, 300);
      },
      handleMouseleave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index, this.indexPath);
        }, 300);
      },
      initEvents() {
        let {
          rootMenu,
          handleMouseenter,
          handleMouseleave,
          handleClick
        } = this;
        let triggerElm;

        if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
          triggerElm = this.$el;
          triggerElm.addEventListener('mouseenter', handleMouseenter);
          triggerElm.addEventListener('mouseleave', handleMouseleave);
        } else {
          triggerElm = this.$refs['submenu-title'];
          triggerElm.addEventListener('click', handleClick);
        }
      }
    },
    created() {
      this.rootMenu.submenus[this.index] = this;
    },
    mounted() {
      this.$on('item-select', (index, indexPath) => {
        this.active = indexPath.indexOf(this.index) !== -1;
      });
      this.initEvents();
    }
  };
</script>
