<script>
  import { isDef } from 'element-ui/src/utils/shared';
  import scrollIntoView from 'element-ui/src/utils/scroll-into-view';

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
        popperClass: ''
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
        popperClass
      } = this;

      const menus = this._l(activeOptions, (menu, menuIndex) => {
        let isFlat = false;
        const items = this._l(menu, item => {
          const events = {
            on: {}
          };

          if (item.__IS__FLAT__OPTIONS) isFlat = true;

          if (!item.disabled) {
            if (item.children) {
              let triggerEvent = {
                click: 'click',
                hover: 'mouseenter'
              }[expandTrigger];
              events.on[triggerEvent] = () => {
                this.activeItem(item, menuIndex);
                this.$nextTick(() => {
                  // adjust self and next level
                  this.scrollMenu(this.$refs.menus[menuIndex]);
                  this.scrollMenu(this.$refs.menus[menuIndex + 1]);
                });
              };
            } else {
              events.on.click = () => {
                this.select(item, menuIndex);
                this.$nextTick(() => this.scrollMenu(this.$refs.menus[menuIndex]));
              };
            }
          }

          return (
            <li
              class={{
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[menuIndex],
                'is-disabled': item.disabled
              }}
              {...events}
            >
              {item.label}
            </li>
          );
        });
        let menuStyle = {};
        if (isFlat) {
          menuStyle.minWidth = this.inputWidth + 'px';
        }

        return (
          <ul
            class={{
              'el-cascader-menu': true,
              'el-cascader-menu--flexible': isFlat
            }}
            style={menuStyle}
            refInFor
            ref="menus">
            {items}
          </ul>
        );
      });
      return (
        <transition name="el-zoom-in-top" on-before-enter={this.handleMenuEnter} on-after-leave={this.handleMenuLeave}>
          <div
            v-show={visible}
            class={[
              'el-cascader-menus',
              popperClass
            ]}
            ref="wrapper"
          >
            {menus}
          </div>
        </transition>
      );
    }
  };
</script>
