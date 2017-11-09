<script>
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Emitter from 'element-ui/src/mixins/emitter';
  import Migrating from 'element-ui/src/mixins/migrating';
  import ElButton from 'element-ui/packages/button';
  import ElButtonGroup from 'element-ui/packages/button-group';

  export default {
    name: 'ElDropdown',

    componentName: 'ElDropdown',

    mixins: [Emitter, Migrating],

    directives: { Clickoutside },

    components: {
      ElButton,
      ElButtonGroup
    },

    provide() {
      return {
        dropdown: this
      };
    },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      type: String,
      size: {
        type: String,
        default: ''
      },
      splitButton: Boolean,
      hideOnClick: {
        type: Boolean,
        default: true
      },
      placement: {
        type: String,
        default: 'bottom-end'
      },
      visibleArrow: {
        default: true
      },
      showTimeout: {
        type: Number,
        default: 250
      },
      hideTimeout: {
        type: Number,
        default: 150
      }
    },

    data() {
      return {
        timeout: null,
        visible: false,
        triggerElm: null
      };
    },

    computed: {
      dropdownSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },

    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
      this.initEvent();
    },

    watch: {
      visible(val) {
        this.broadcast('ElDropdownMenu', 'visible', val);
        this.$emit('visible-change', val);
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'menu-align': 'menu-align is renamed to placement.'
          }
        };
      },
      show() {
        if (this.triggerElm.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.showTimeout);
      },
      hide() {
        if (this.triggerElm.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.hideTimeout);
      },
      handleClick() {
        if (this.triggerElm.disabled) return;
        this.visible = !this.visible;
      },
      initEvent() {
        let { trigger, show, hide, handleClick, splitButton } = this;
        this.triggerElm = splitButton
          ? this.$refs.trigger.$el
          : this.$slots.default[0].elm;

        if (trigger === 'hover') {
          this.triggerElm.addEventListener('mouseenter', show);
          this.triggerElm.addEventListener('mouseleave', hide);

          let dropdownElm = this.$slots.dropdown[0].elm;

          dropdownElm.addEventListener('mouseenter', show);
          dropdownElm.addEventListener('mouseleave', hide);
        } else if (trigger === 'click') {
          this.triggerElm.addEventListener('click', handleClick);
        }
      },
      handleMenuItemClick(command, instance) {
        if (this.hideOnClick) {
          this.visible = false;
        }
        this.$emit('command', command, instance);
      }
    },

    render(h) {
      let { hide, splitButton, type, dropdownSize } = this;

      var handleMainButtonClick = (event) => {
        this.$emit('click', event);
        hide();
      };

      let triggerElm = !splitButton
        ? this.$slots.default
        : (<el-button-group>
            <el-button type={type} size={dropdownSize} nativeOn-click={handleMainButtonClick}>
              {this.$slots.default}
            </el-button>
            <el-button ref="trigger" type={type} size={dropdownSize} class="el-dropdown__caret-button">
              <i class="el-dropdown__icon el-icon-arrow-down"></i>
            </el-button>
          </el-button-group>);

      return (
        <div class="el-dropdown" v-clickoutside={hide}>
          {triggerElm}
          {this.$slots.dropdown}
        </div>
      );
    }
  };
</script>
