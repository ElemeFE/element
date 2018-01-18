<script>
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import menuMixin from './menu-mixin';
  import Emitter from 'element-ui/src/mixins/emitter';
  import Popper from 'element-ui/src/utils/vue-popper';
  import MenuList from './menu-list';

  export default {
    name: 'ElSubmenu',

    componentName: 'ElSubmenu',

    mixins: [menuMixin, Emitter, Popper],

    components: { ElCollapseTransition, MenuList },

    props: {
      index: {
        type: String,
        required: true
      },
      showTimeout: {
        type: Number,
        default: 300
      },
      hideTimeout: {
        type: Number,
        default: 300
      }
    },

    data() {
      return {
        popperJS: null,
        timeout: null,
        items: {},
        submenus: {}
      };
    },
    watch: {
      opened(val) {
        if (this.isMenuPopup) {
          this.showPopper = val;
        }
      }
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
      isMenuPopup() {
        return this.rootMenu.isMenuPopup;
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
      },
      popperPlacement() {
        return this.mode === 'horizontal' ? 'bottom-start' : 'right-start';
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
        }, this.showTimeout);
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
        }, this.hideTimeout);
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
    },
    render(h) {
      const {
        active,
        opened,
        paddingStyle,
        titleStyle,
        backgroundColor,
        $slots,
        rootMenu,
        isMenuPopup,
        mode
      } = this;

      return (
        <li
          class={{
            'el-submenu': true,
            'is-active': active,
            'is-opened': opened
          }}
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={opened}
          on-mouseenter={this.handleMouseenter}
          on-mouseleave={this.handleMouseleave}
          on-focus={this.handleMouseenter}
        >
          <div
            class="el-submenu__title"
            ref="submenu-title"
            on-click={this.handleClick}
            on-mouseenter={this.handleTitleMouseenter}
            on-mouseleave={this.handleTitleMouseleave}
            style={[paddingStyle, titleStyle, { backgroundColor }]}
          >
            {$slots.title}
            <i class={{
              'el-submenu__icon-arrow': true,
              'el-icon-arrow-down': rootMenu.mode === 'horizontal' || rootMenu.mode === 'vertical' && !rootMenu.collapse,
              'el-icon-arrow-right': rootMenu.mode === 'vertical' && rootMenu.collapse
            }}>
            </i>
          </div>
          <MenuList
            visible={opened}
            menu-popup={isMenuPopup}
            append-to-body={isMenuPopup && this.$parent === rootMenu}
            placement={this.popperPlacement}
            on-mouseenter={this.handleMouseenter}
            on-mouseleave={this.handleMouseleave}>
            {$slots.default}
          </MenuList>
        </li>
      );
    }
  };
</script>
