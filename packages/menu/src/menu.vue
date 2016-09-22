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
  import emitter from 'main/mixins/emitter';

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
      defaultOpeneds: {
        type: Array,
        default() {
          return [];
        }
      },
      theme: {
        type: String,
        default: 'light'
      },
      uniqueOpened: Boolean,
      router: Boolean
    },
    data() {
      return {
        activeIndex: this.defaultActive,
        openedMenus: this.defaultOpeneds.slice(0),
        menuItems: {},
        submenus: {}
      };
    },
    watch: {
      defaultActive(value) {
        this.activeIndex = value;
        let indexPath = this.menuItems[value].indexPath;

        this.handleSelect(value, indexPath);
      },
      defaultOpeneds(value) {
        this.openedMenus = value;
      }
    },
    methods: {
      openMenu(index, indexPath) {
        let openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1) return;
        if (this.uniqueOpened) {
          openedMenus = openedMenus.filter(index => {
            return indexPath.indexOf(index) !== -1;
          });
        }
        openedMenus.push(index);
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
      handleSelect(index, indexPath) {
        this.activeIndex = index;
        this.$emit('select', index, indexPath);

        if (this.mode === 'horizontal') {
          this.broadcast('submenu', 'item-select', [index, indexPath]);
          this.openedMenus = [];
        } else {
          // 展开该菜单项的路径上所有子菜单
          indexPath.forEach(index => {
            let submenu = this.submenus[index];
            submenu && this.openMenu(index, submenu.indexPath);
          });
        }

        if (this.router) {
          this.$router.push(index);
        }
      }
    },
    mounted() {
      let index = this.activeIndex;
      let indexPath = this.menuItems[index].indexPath;

      this.handleSelect(index, indexPath);
    }
  };
</script>
