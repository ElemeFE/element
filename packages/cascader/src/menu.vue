<script>
  export default {
    name: 'ElCascaderMenu',

    data() {
      return {
        options: [],
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
          let options = this.options;

          const loadActiveOptions = (options, activeOptions = []) => {
            const level = activeOptions.length;
            activeOptions[level] = options;
            let active = activeValue[level];
            if (active) {
              options = options.filter(option => option.value === active)[0];
              if (options && options.children) {
                loadActiveOptions(options.children, activeOptions);
              }
            }
            return activeOptions;
          };

          const result = loadActiveOptions(options);

          return result;
        }
      }
    },

    methods: {
      selectItem(item, menuIndex) {
        const len = this.activeOptions.length;
        const closeMenu = !item.children;

        if (item.__IS__FLAT__OPTIONS) {
          this.activeValue.splice(menuIndex, len, ...item.value);
        } else {
          this.activeValue.splice(menuIndex, len, item.value);
        }

        if (this.changeOnSelect) {
          this.$emit('pick', this.activeValue, closeMenu);
        }
      },
      expandItem(item, menuIndex) {
        const len = this.activeOptions.length;
        if (item.children) {
          this.activeValue.splice(menuIndex, len, item.value);
          this.activeOptions.splice(menuIndex + 1, len, item.children);
        }
      },
      handleItemClick(item, menuIndex) {
        this.expandItem(item, menuIndex);
        this.selectItem(item, menuIndex);

        if (!item.children && !this.changeOnSelect) {
          this.$emit('pick', this.activeValue);
        }
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

      const menus = this._l(activeOptions, (menu, index) => {
        const items = this._l(menu, item => {
          const events = {
            on: {}
          };

          if (!item.disabled) {
            if (expandTrigger === 'click' || !item.children) {
              events.on['click'] = () => { this.handleItemClick(item, index); };
            } else {
              events.on['mouseenter'] = () => { this.expandItem(item, index); };
            }
          }

          return (
            <li
              class={{
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[index],
                'is-disabled': item.disabled
              }}
              {...events}
            >
              {item.label}
            </li>
          );
        });
        return <ul class="el-cascader-menu">{items}</ul>;
      });
      return (
        <transition name="el-zoom-in-top">
          <div class={['el-cascader-menus', popperClass]} v-show={visible}>
            {menus}
          </div>
        </transition>
      );
    }
  };
</script>