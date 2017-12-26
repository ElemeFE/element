<template>
  <li
    :class="{
      'el-submenu': true,
      'is-active': active,
      'is-opened': opened
    }"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @focus="handleMouseenter"
    role="menuitem"
    aria-haspopup="true"
    :aria-expanded="opened"
  >
    <div
      class="el-submenu__title"
      ref="submenu-title"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
      :style="[paddingStyle, titleStyle, { backgroundColor }]">
      <slot name="title"></slot>
      <i :class="{
        'el-submenu__icon-arrow': true,
        'el-icon-arrow-down': rootMenu.mode === 'horizontal' || rootMenu.mode === 'vertical' && !rootMenu.collapse,
        'el-icon-arrow-right': rootMenu.mode === 'vertical' && rootMenu.collapse
      }">
      </i>
    </div>
    <template v-if="rootMenu.mode === 'horizontal' || (rootMenu.mode === 'vertical' && rootMenu.collapse)">
      <transition :name="menuTransitionName">
        <ul class="el-menu" v-show="opened" :style="{ backgroundColor: rootMenu.backgroundColor || '' }" role="menu"><slot></slot></ul>
      </transition>
    </template>
    <el-collapse-transition v-else>
      <ul class="el-menu" v-show="opened" :style="{ backgroundColor: rootMenu.backgroundColor || '' }" role="menu"><slot></slot></ul>
    </el-collapse-transition>
  </li>
</template>
<script>
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import menuMixin from './menu-mixin';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElSubmenu',

    componentName: 'ElSubmenu',

    mixins: [menuMixin, Emitter],

    components: { ElCollapseTransition },

    props: {
      index: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        timeout: null,
        items: {},
        submenus: {}
      };
    },
    computed: {
      menuTransitionName() {
        return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
      },
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1;
      },
      active() {
        let isActive = false;
        const submenus = this.submenus;
        const items = this.items;

        Object.keys(items).forEach(index => {
          if (items[index].active) {
            isActive = true;
          }
        });

        Object.keys(submenus).forEach(index => {
          if (submenus[index].active) {
            isActive = true;
          }
        });

        return isActive;
      },
      hoverBackground() {
        return this.rootMenu.hoverBackground;
      },
      backgroundColor() {
        return this.rootMenu.backgroundColor || '';
      },
      activeTextColor() {
        return this.rootMenu.activeTextColor || '';
      },
      textColor() {
        return this.rootMenu.textColor || '';
      },
      mode() {
        return this.rootMenu.mode;
      },
      titleStyle() {
        if (this.mode !== 'horizontal') {
          return {
            color: this.textColor
          };
        }
        return {
          borderBottomColor: this.active
            ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
            : 'transparent',
          color: this.active
            ? this.activeTextColor
            : this.textColor
        };
      }
    },
    methods: {
      addItem(item) {
        this.$set(this.items, item.index, item);
      },
      removeItem(item) {
        delete this.items[item.index];
      },
      addSubmenu(item) {
        this.$set(this.submenus, item.index, item);
      },
      removeSubmenu(item) {
        delete this.submenus[item.index];
      },
      handleClick() {
        const {rootMenu} = this;
        if (
          (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal') ||
          (rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        this.dispatch('ElMenu', 'submenu-click', this);
      },
      handleMouseenter() {
        const {rootMenu} = this;
        if (
          (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath);
        }, 300);
      },
      handleMouseleave() {
        const {rootMenu} = this;
        if (
          (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal') ||
          (!rootMenu.collapse && rootMenu.mode === 'vertical')
        ) {
          return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index);
        }, 300);
      },
      handleTitleMouseenter() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        const title = this.$refs['submenu-title'];
        title && (title.style.backgroundColor = this.rootMenu.hoverBackground);
      },
      handleTitleMouseleave() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        const title = this.$refs['submenu-title'];
        title && (title.style.backgroundColor = this.rootMenu.backgroundColor || '');
      }
    },
    created() {
      this.parentMenu.addSubmenu(this);
      this.rootMenu.addSubmenu(this);
    },
    beforeDestroy() {
      this.parentMenu.removeSubmenu(this);
      this.rootMenu.removeSubmenu(this);
    }
  };
</script>
