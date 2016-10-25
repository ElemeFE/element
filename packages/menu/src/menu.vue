<template>
  <ul class="el-menu"
    :class="{
      'el-menu--horizontal': mode === 'horizontal',
      'el-menu--dark': theme === 'dark'
    }"
  >
    <slot></slot>
  </ul>
</template>
<script>
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElMenu',

    componentName: 'menu',

    mixins: [emitter],

    props: {
      mode: {
        type: String,
        default: 'vertical'
      },
      defaultActive: {
        type: String,
        default: ''
      },
      defaultOpeneds: Array,
      theme: {
        type: String,
        default: 'light'
      },
      uniqueOpened: Boolean,
      router: Boolean,
      menuTrigger: {
        type: String,
        default: 'hover'
      }
    },
    data() {
      return {
        activeIndex: this.defaultActive,
        openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
        menuItems: {},
        submenus: {}
      };
    },
    watch: {
      defaultActive(value) {
        this.activeIndex = value;
        if (!this.menuItems[value]) return;
        let menuItem = this.menuItems[value];
        let indexPath = menuItem.indexPath;

        this.handleSelect(value, indexPath, null, menuItem);
      },
      defaultOpeneds(value) {
        this.openedMenus = value;
      }
    },
    methods: {
      openMenu(index, indexPath) {
        let openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1) return;
        // 将不在该菜单路径下的其余菜单收起
        if (this.uniqueOpened) {
          this.openedMenus = openedMenus.filter(index => {
            return indexPath.indexOf(index) !== -1;
          });
        }
        this.openedMenus.push(index);
      },
      closeMenu(index, indexPath) {
        this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
      },
      handleSubmenuClick(index, indexPath) {
        let isOpened = this.openedMenus.indexOf(index) !== -1;

        if (isOpened) {
          this.closeMenu(index, indexPath);
          this.$emit('close', index, indexPath);
        } else {
          this.openMenu(index, indexPath);
          this.$emit('open', index, indexPath);
        }
      },
      handleSelect(index, indexPath, route, instance) {
        this.activeIndex = index;
        this.$emit('select', index, indexPath, instance);

        if (this.mode === 'horizontal') {
          this.broadcast('submenu', 'item-select', [index, indexPath]);
          this.openedMenus = [];
        } else {
          this.openActiveItemMenus();
        }

        if (this.router && route) {
          try {
            this.$router.push(route);
          } catch (e) {
            console.error(e);
          }
        }
      },
      openActiveItemMenus() {
        let index = this.activeIndex;
        if (!this.menuItems[index]) return;
        if (index && this.mode === 'vertical') {
          let indexPath = this.menuItems[index].indexPath;

          // 展开该菜单项的路径上所有子菜单
          indexPath.forEach(index => {
            let submenu = this.submenus[index];
            submenu && this.openMenu(index, submenu.indexPath);
          });
        }
      }
    },
    mounted() {
      this.openActiveItemMenus();
    }
  };
</script>
