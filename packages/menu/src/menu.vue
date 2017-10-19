<template>
  <el-menu-collapse-transition>
    <ul class="el-menu"
      :key="+collapse"
      :class="{
        'el-menu--horizontal': mode === 'horizontal',
        'el-menu--dark': theme === 'dark',
        'el-menu--collapse': collapse
      }"
    >
      <slot></slot>
    </ul>
  </el-menu-collapse-transition>
</template>
<script>
  import emitter from 'element-ui/src/mixins/emitter';
  import { addClass, removeClass, hasClass } from 'element-ui/src/utils/dom';

  export default {
    name: 'ElMenu',

    componentName: 'ElMenu',

    mixins: [emitter],

    provide() {
      return {
        rootMenu: this
      };
    },

    components: {
      'el-menu-collapse-transition': {
        functional: true,
        render(createElement, context) {
          const data = {
            props: {
              mode: 'out-in'
            },
            on: {
              beforeEnter(el) {
                el.style.opacity = 0.2;
              },

              enter(el) {
                addClass(el, 'el-opacity-transition');
                el.style.opacity = 1;
              },

              afterEnter(el) {
                removeClass(el, 'el-opacity-transition');
                el.style.opacity = '';
              },

              beforeLeave(el) {
                if (!el.dataset) el.dataset = {};

                if (hasClass(el, 'el-menu--collapse')) {
                  removeClass(el, 'el-menu--collapse');
                  el.dataset.oldOverflow = el.style.overflow;
                  el.dataset.scrollWidth = el.scrollWidth;
                  addClass(el, 'el-menu--collapse');
                }

                el.style.width = el.scrollWidth + 'px';
                el.style.overflow = 'hidden';
              },

              leave(el) {
                if (!hasClass(el, 'el-menu--collapse')) {
                  addClass(el, 'horizontal-collapse-transition');
                  el.style.width = '64px';
                } else {
                  addClass(el, 'horizontal-collapse-transition');
                  el.style.width = el.dataset.scrollWidth + 'px';
                }
              },

              afterLeave(el) {
                removeClass(el, 'horizontal-collapse-transition');
                if (hasClass(el, 'el-menu--collapse')) {
                  el.style.width = el.dataset.scrollWidth + 'px';
                } else {
                  el.style.width = '64px';
                }
                el.style.overflow = el.dataset.oldOverflow;
              }
            }
          };
          return createElement('transition', data, context.children);
        }
      }
    },

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
      },
      collapse: Boolean
    },
    data() {
      return {
        activeIndex: this.defaultActive,
        openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
        items: {},
        submenus: {}
      };
    },
    watch: {
      defaultActive(value) {
        const item = this.items[value];
        if (item) {
          this.activeIndex = item.index;
          this.initOpenedMenu();
        } else {
          this.activeIndex = '';
        }

      },
      defaultOpeneds(value) {
        this.openedMenus = value;
      },
      collapse(value) {
        if (value) this.openedMenus = [];
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
      closeMenu(index) {
        const i = this.openedMenus.indexOf(index);
        if (i !== -1) {
          this.openedMenus.splice(i, 1);
        }
      },
      handleSubmenuClick(submenu) {
        const { index, indexPath } = submenu;
        let isOpened = this.openedMenus.indexOf(index) !== -1;

        if (isOpened) {
          this.closeMenu(index);
          this.$emit('close', index, indexPath);
        } else {
          this.openMenu(index, indexPath);
          this.$emit('open', index, indexPath);
        }
      },
      handleItemClick(item) {
        let { index, indexPath } = item;
        this.activeIndex = item.index;
        this.$emit('select', index, indexPath, item);

        if (this.mode === 'horizontal' || this.collapse) {
          this.openedMenus = [];
        }

        if (this.router) {
          this.routeToItem(item);
        }
      },
      // 初始化展开菜单
      initOpenedMenu() {
        const index = this.activeIndex;
        const activeItem = this.items[index];
        if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

        let indexPath = activeItem.indexPath;

        // 展开该菜单项的路径上所有子菜单
        indexPath.forEach(index => {
          let submenu = this.submenus[index];
          submenu && this.openMenu(index, submenu.indexPath);
        });
      },
      routeToItem(item) {
        let route = item.route || item.index;
        try {
          this.$router.push(route);
        } catch (e) {
          console.error(e);
        }
      }
    },
    mounted() {
      this.initOpenedMenu();
      this.$on('item-click', this.handleItemClick);
      this.$on('submenu-click', this.handleSubmenuClick);
    }
  };
</script>
