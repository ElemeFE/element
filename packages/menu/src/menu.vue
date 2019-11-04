<script type="text/jsx">
  import emitter from 'element-ui/src/mixins/emitter';
  import Migrating from 'element-ui/src/mixins/migrating';
  import Menubar from 'element-ui/src/utils/menu/aria-menubar';
  import { addClass, removeClass, hasClass } from 'element-ui/src/utils/dom';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
  import ElSubmenu from './submenu'

  export default {
    name: 'ElMenu',

    render (h) {
      const component = (
        <ul
          role="menubar"
          key={ +this.collapse }
          style={{ backgroundColor: this.backgroundColor || '' }}
          class={{
            'el-menu--horizontal': this.mode === 'horizontal',
            'el-menu--collapse': this.collapse,
            "el-menu": true
          }}
        >
        {this.renderChildren(this.$slots.default)}
        </ul>
      );

      if (this.collapseTransition) {
        return (
          <el-menu-collapse-transition>
            { component }
          </el-menu-collapse-transition>
        );
      } else {
        return component;
      }
    },

    componentName: 'ElMenu',

    mixins: [emitter, Migrating],

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
                  el.dataset.scrollWidth = el.clientWidth;
                  addClass(el, 'el-menu--collapse');
                } else {
                  addClass(el, 'el-menu--collapse');
                  el.dataset.oldOverflow = el.style.overflow;
                  el.dataset.scrollWidth = el.clientWidth;
                  removeClass(el, 'el-menu--collapse');
                }

                el.style.width = el.scrollWidth + 'px';
                el.style.overflow = 'hidden';
              },

              leave(el) {
                addClass(el, 'horizontal-collapse-transition');
                el.style.width = el.dataset.scrollWidth + 'px';
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
      uniqueOpened: Boolean,
      router: Boolean,
      menuTrigger: {
        type: String,
        default: 'hover'
      },
      collapse: Boolean,
      backgroundColor: String,
      textColor: String,
      activeTextColor: String,
      collapseTransition: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        activeIndex: this.defaultActive,
        openedMenus: (this.defaultOpeneds && !this.collapse) ? this.defaultOpeneds.slice(0) : [],
        items: {},
        submenus: {},
        menuItemSizes: [],
        overflowedWidth: 0,
        lastVisibleIndex: 0,
      };
    },
    computed: {
      hoverBackground() {
        return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
      },
      isMenuPopup() {
        return this.mode === 'horizontal' || (this.mode === 'vertical' && this.collapse);
      }
    },
    watch: {
      defaultActive(value){
        if(!this.items[value]){
          this.activeIndex = null
        }
        this.updateActiveIndex(value)
      },

      defaultOpeneds(value) {
        if (!this.collapse) {
          this.openedMenus = value;
        }
      },

      collapse(value) {
        if (value) this.openedMenus = [];
        this.broadcast('ElSubmenu', 'toggle-collapse', value);
      }
    },
    methods: {
      renderChildren(children) {
        if (this.mode === 'horizontal') {
          let items = [];
          children.forEach((el, index) => {
            if (el.tag) {
              items.push(this.getOverflowedSubMenuItem(children.slice(index), index));
            }
            items.push(el);
          })
          return items;
        } else {
          return children;
        }
      },
      getOverflowedSubMenuItem(overflowedItems, index) {
        const key = "subpopmenu-" + index;
        return <ElSubmenu index={ key } class="el-submenu-overflowed"><template slot="title">...</template>{overflowedItems}</ElSubmenu>;
      },
      resizeInit(){
        if (this.mode === 'horizontal') {
        }
      },
      handleResize() {
        if (this.mode === 'horizontal') {
          const menuWidth = this.$el.getBoundingClientRect().width;
          const items  = [].slice.call(this.$el.children);
          const menuItemNodes = items.filter(el => el.className.split(' ').indexOf('el-submenu-overflowed') < 0);
          if (!this.menuItemSizes.length) this.menuItemSizes = menuItemNodes.map(el => el.getBoundingClientRect().width);
          const overflowedItems = items.filter(el => el.className.split(' ').indexOf('el-submenu-overflowed') >=0);
          if (!this.overflowedWidth) {
            this.overflowedWidth = overflowedItems[0].getBoundingClientRect().width;
            overflowedItems.forEach(el => {
              el.style['display'] = 'none'
            })
          }
          let currentWidth = 0
          let lastVisibleIndex = 0
          if (this.lastVisibleIndex < overflowedItems.length) {
            overflowedItems[this.lastVisibleIndex].style['display'] = 'none'
          }
          this.menuItemSizes.forEach(liWidth => {
            currentWidth += liWidth;
            if(currentWidth + this.overflowedWidth <= menuWidth) {
              lastVisibleIndex++;
            }
          })
          menuItemNodes.forEach((el, index) => {
            if (index >= lastVisibleIndex) {
              el.style['display'] = 'none';
            } else {
              el.style['display'] = 'inline-block'
            }
          })
          if(lastVisibleIndex < overflowedItems.length) {
            overflowedItems[lastVisibleIndex].style['display'] = 'inline-block';
          }
          this.lastVisibleIndex = lastVisibleIndex
        }
      },
      updateActiveIndex(val) {
        const item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive];
        if (item) {
          this.activeIndex = item.index;
          this.initOpenedMenu();
        } else {
          this.activeIndex = null;
        }
      },

      getMigratingConfig() {
        return {
          props: {
            'theme': 'theme is removed.'
          }
        };
      },
      getColorChannels(color) {
        color = color.replace('#', '');
        if (/^[0-9a-fA-F]{3}$/.test(color)) {
          color = color.split('');
          for (let i = 2; i >= 0; i--) {
            color.splice(i, 0, color[i]);
          }
          color = color.join('');
        }
        if (/^[0-9a-fA-F]{6}$/.test(color)) {
          return {
            red: parseInt(color.slice(0, 2), 16),
            green: parseInt(color.slice(2, 4), 16),
            blue: parseInt(color.slice(4, 6), 16)
          };
        } else {
          return {
            red: 255,
            green: 255,
            blue: 255
          };
        }
      },
      mixColor(color, percent) {
        let { red, green, blue } = this.getColorChannels(color);
        if (percent > 0) { // shade given color
          red *= 1 - percent;
          green *= 1 - percent;
          blue *= 1 - percent;
        } else { // tint given color
          red += (255 - red) * percent;
          green += (255 - green) * percent;
          blue += (255 - blue) * percent;
        }
        return `rgb(${ Math.round(red) }, ${ Math.round(green) }, ${ Math.round(blue) })`;
      },
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
        // collapse all menu that are not under current menu item
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
        const { index, indexPath } = item;
        const oldActiveIndex = this.activeIndex;
        const hasIndex = item.index !== null;

        if (hasIndex) {
          this.activeIndex = item.index;
        }

        this.$emit('select', index, indexPath, item);

        if (this.mode === 'horizontal' || this.collapse) {
          this.openedMenus = [];
        }

        if (this.router && hasIndex) {
          this.routeToItem(item, (error) => {
            this.activeIndex = oldActiveIndex;
            if (error) {
              // vue-router 3.1.0+ push/replace cause NavigationDuplicated error 
              // https://github.com/ElemeFE/element/issues/17044
              if (error.name === 'NavigationDuplicated') return
              console.error(error)
            }
          });
        }
      },
      // 初始化展开菜单
      // initialize opened menu
      initOpenedMenu() {
        const index = this.activeIndex;
        const activeItem = this.items[index];
        if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

        let indexPath = activeItem.indexPath;

        // 展开该菜单项的路径上所有子菜单
        // expand all submenus of the menu item
        indexPath.forEach(index => {
          let submenu = this.submenus[index];
          submenu && this.openMenu(index, submenu.indexPath);
        });
      },
      routeToItem(item, onError) {
        let route = item.route || item.index;
        try {
          this.$router.push(route, () => {}, onError);
        } catch (e) {
          console.error(e);
        }
      },
      open(index) {
        const { indexPath } = this.submenus[index.toString()];
        indexPath.forEach(i => this.openMenu(i, indexPath));
      },
      close(index) {
        this.closeMenu(index);
      }
    },
    mounted() {
      this.initOpenedMenu();
      this.$on('item-click', this.handleItemClick);
      this.$on('submenu-click', this.handleSubmenuClick);
      if (this.mode === 'horizontal') {
        new Menubar(this.$el); // eslint-disable-line
      }
      this.$watch('items', this.updateActiveIndex);
      this.$nextTick(() => {
        this.handleResize()
        addResizeListener(this.$el, this.handleResize)
      })
    },
    beforeDestroy() {
      if (this.$el && this.mode === 'horizontal') removeResizeListener(this.$el, this.handleResize)
    }
  };
</script>
