<script>
  import { isDef } from 'element-ui/src/utils/shared';
  import scrollIntoView from 'element-ui/src/utils/scroll-into-view';
  import { generateId } from 'element-ui/src/utils/util';

  const copyArray = (arr, props) => {
    if (!arr || !Array.isArray(arr) || !props) return arr;
    const result = [];
    const configurableProps = ['__IS__FLAT__OPTIONS', 'label', 'value', 'disabled'];
    const childrenProp = props.children || 'children';
    arr.forEach(item => {
      const itemCopy = {};
      configurableProps.forEach(prop => {
        let name = props[prop];
        let value = item[name];
        if (value === undefined) {
          name = prop;
          value = item[name];
        }
        if (value !== undefined) itemCopy[name] = value;
      });
      if (Array.isArray(item[childrenProp])) {
        itemCopy[childrenProp] = copyArray(item[childrenProp], props);
      }
      result.push(itemCopy);
    });
    return result;
  };

  export default {
    name: 'ElCascaderMenu',

    data() {
      return {
        inputWidth: 0,
        options: [],
        props: {},
        visible: false,
        activeValue: [],
        value: [],
        expandTrigger: 'click',
        changeOnSelect: false,
        popperClass: '',
        hoverTimer: 0,
        clicking: false
      };
    },

    watch: {
      visible(value) {
        if (value) {
          this.activeValue = this.value;
        }
      },
      value: {
        immediate: true,
        handler(value) {
          this.activeValue = value;
        }
      }
    },

    computed: {
      activeOptions: {
        cache: false,
        get() {
          const activeValue = this.activeValue;
          const configurableProps = ['label', 'value', 'children', 'disabled'];

          const formatOptions = options => {
            options.forEach(option => {
              if (option.__IS__FLAT__OPTIONS) return;
              configurableProps.forEach(prop => {
                const value = option[this.props[prop] || prop];
                if (value !== undefined) option[prop] = value;
              });
              if (Array.isArray(option.children)) {
                formatOptions(option.children);
              }
            });
          };

          const loadActiveOptions = (options, activeOptions = []) => {
            const level = activeOptions.length;
            activeOptions[level] = options;
            let active = activeValue[level];
            if (isDef(active)) {
              options = options.filter(option => option.value === active)[0];
              if (options && options.children) {
                loadActiveOptions(options.children, activeOptions);
              }
            }
            return activeOptions;
          };

          const optionsCopy = copyArray(this.options, this.props);
          formatOptions(optionsCopy);
          return loadActiveOptions(optionsCopy);
        }
      },
      id() {
        return generateId();
      }
    },

    methods: {
      select(item, menuIndex) {
        if (item.__IS__FLAT__OPTIONS) {
          this.activeValue = item.value;
        } else if (menuIndex) {
          this.activeValue.splice(menuIndex, this.activeValue.length - 1, item.value);
        } else {
          this.activeValue = [item.value];
        }
        this.$emit('pick', this.activeValue.slice());
      },
      handleMenuLeave() {
        this.$emit('menuLeave');
      },
      activeItem(item, menuIndex) {
        const len = this.activeOptions.length;
        this.activeValue.splice(menuIndex, len, item.value);
        this.activeOptions.splice(menuIndex + 1, len, item.children);
        if (this.changeOnSelect) {
          this.$emit('pick', this.activeValue.slice(), false);
        } else {
          this.$emit('activeItemChange', this.activeValue);
        }
      },
      scrollMenu(menu) {
        scrollIntoView(menu, menu.getElementsByClassName('is-active')[0]);
      },
      handleMenuEnter() {
        this.$nextTick(() => this.$refs.menus.forEach(menu => this.scrollMenu(menu)));
      }
    },

    render(h) {
      const {
        activeValue,
        activeOptions,
        visible,
        expandTrigger,
        popperClass,
        hoverThreshold
      } = this;
      let itemId = null;
      let itemIndex = 0;

      let hoverMenuRefs = {};
      const hoverMenuHandler = e => {
        const activeMenu = hoverMenuRefs.activeMenu;
        if (!activeMenu) return;
        const offsetX = e.offsetX;
        const width = activeMenu.offsetWidth;
        const height = activeMenu.offsetHeight;

        if (e.target === hoverMenuRefs.activeItem) {
          clearTimeout(this.hoverTimer);
          const {activeItem} = hoverMenuRefs;
          const offsetY_top = activeItem.offsetTop;
          const offsetY_Bottom = offsetY_top + activeItem.offsetHeight;

          hoverMenuRefs.hoverZone.innerHTML = `
            <path style="pointer-events: auto;" fill="transparent" d="M${offsetX} ${offsetY_top} L${width} 0 V${offsetY_top} Z" />
            <path style="pointer-events: auto;" fill="transparent" d="M${offsetX} ${offsetY_Bottom} L${width} ${height} V${offsetY_Bottom} Z" />
          `;
        } else {
          if (!this.hoverTimer) {
            this.hoverTimer = setTimeout(() => {
              hoverMenuRefs.hoverZone.innerHTML = '';
            }, hoverThreshold);
          }
        }
      };

      const menus = this._l(activeOptions, (menu, menuIndex) => {
        let isFlat = false;
        const menuId = `menu-${this.id}-${ menuIndex}`;
        const ownsId = `menu-${this.id}-${ menuIndex + 1 }`;
        const items = this._l(menu, item => {
          const events = {
            on: {}
          };

          if (item.__IS__FLAT__OPTIONS) isFlat = true;

          if (!item.disabled) {
            // keydown up/down/left/right/enter
            events.on.keydown = (ev) => {
              const keyCode = ev.keyCode;
              if ([37, 38, 39, 40, 13, 9, 27].indexOf(keyCode) < 0) {
                return;
              }
              const currentEle = ev.target;
              const parentEle = this.$refs.menus[menuIndex];
              const menuItemList = parentEle.querySelectorAll("[tabindex='-1']");
              const currentIndex = Array.prototype.indexOf.call(menuItemList, currentEle); // 当前索引
              let nextIndex, nextMenu;
              if ([38, 40].indexOf(keyCode) > -1) {
                if (keyCode === 38) { // up键
                  nextIndex = currentIndex !== 0 ? (currentIndex - 1) : currentIndex;
                } else if (keyCode === 40) { // down
                  nextIndex = currentIndex !== (menuItemList.length - 1) ? currentIndex + 1 : currentIndex;
                }
                menuItemList[nextIndex].focus();
              } else if (keyCode === 37) { // left键
                if (menuIndex !== 0) {
                  const previousMenu = this.$refs.menus[menuIndex - 1];
                  previousMenu.querySelector('[aria-expanded=true]').focus();
                }
              } else if (keyCode === 39) { // right
                if (item.children) {
                  // 有子menu 选择子menu的第一个menuitem
                  nextMenu = this.$refs.menus[menuIndex + 1];
                  nextMenu.querySelectorAll("[tabindex='-1']")[0].focus();
                }
              } else if (keyCode === 13) {
                if (!item.children) {
                  const id = currentEle.getAttribute('id');
                  parentEle.setAttribute('aria-activedescendant', id);
                  this.select(item, menuIndex);
                  this.$nextTick(() => this.scrollMenu(this.$refs.menus[menuIndex]));
                }
              } else if (keyCode === 9 || keyCode === 27) { // esc tab
                this.$emit('closeInside');
              }
            };
            if (item.children) {
              let triggerEvent = {
                click: 'click',
                hover: 'mouseenter'
              }[expandTrigger];
              const triggerHandler = () => {
                this.activeItem(item, menuIndex);
                this.$nextTick(() => {
                  // adjust self and next level
                  this.scrollMenu(this.$refs.menus[menuIndex]);
                  this.scrollMenu(this.$refs.menus[menuIndex + 1]);
                });
              };
              events.on[triggerEvent] = triggerHandler;
              events.on['mousedown'] = () => {
                this.clicking = true;
              };
              events.on['focus'] = () => { // focus 选中
                if (this.clicking) {
                  this.clicking = false;
                  return;
                }
                triggerHandler();
              };
            } else {
              events.on.click = () => {
                this.select(item, menuIndex);
                this.$nextTick(() => this.scrollMenu(this.$refs.menus[menuIndex]));
              };
            }
          }
          if (!item.disabled && !item.children) { // no children set id
            itemId = `${menuId}-${itemIndex}`;
            itemIndex++;
          }
          return (
            <li
              class={{
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[menuIndex],
                'is-disabled': item.disabled
              }}
              ref={item.value === activeValue[menuIndex] ? 'activeItem' : null}
              {...events}
              tabindex= { item.disabled ? null : -1 }
              role="menuitem"
              aria-haspopup={ !!item.children }
              aria-expanded={ item.value === activeValue[menuIndex] }
              id = { itemId }
              aria-owns = { !item.children ? null : ownsId }
            >
              {item.label}
            </li>
          );
        });
        let menuStyle = {};
        if (isFlat) {
          menuStyle.minWidth = this.inputWidth + 'px';
        }

        const isHoveredMenu = expandTrigger === 'hover' && activeValue.length - 1 === menuIndex;
        const hoverMenuEvent = {
          on: {
          }
        };

        if (isHoveredMenu) {
          hoverMenuEvent.on.mousemove = hoverMenuHandler;
          menuStyle.position = 'relative';
        }

        return (
          <ul
            class={{
              'el-cascader-menu': true,
              'el-cascader-menu--flexible': isFlat
            }}
            {...hoverMenuEvent}
            style={menuStyle}
            refInFor
            ref="menus"
            role="menu"
            id = { menuId }
          >
            {items}
            {
              isHoveredMenu
              ? (<svg
                ref="hoverZone"
                style={{
                  position: 'absolute',
                  top: 0,
                  height: '100%',
                  width: '100%',
                  left: 0,
                  pointerEvents: 'none'
                }}
              ></svg>) : null
            }
          </ul>
        );
      });

      if (expandTrigger === 'hover') {
        this.$nextTick(() => {
          const activeItem = this.$refs.activeItem;

          if (activeItem) {
            const activeMenu = activeItem.parentElement;
            const hoverZone = this.$refs.hoverZone;

            hoverMenuRefs = {
              activeMenu,
              activeItem,
              hoverZone
            };
          } else {
            hoverMenuRefs = {};
          }
        });
      }

      return (
        <transition name="el-zoom-in-top" on-before-enter={this.handleMenuEnter} on-after-leave={this.handleMenuLeave}>
          <div
            v-show={visible}
            class={[
              'el-cascader-menus el-popper',
              popperClass
            ]}
            ref="wrapper"
          >
            <div x-arrow class="popper__arrow"></div>
            {menus}
          </div>
        </transition>
      );
    }
  };
</script>
