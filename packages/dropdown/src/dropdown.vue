<script>
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDropdown',

    componentName: 'ElDropdown',

    mixins: [Emitter],

    directives: { Clickoutside },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      menuAlign: {
        type: String,
        default: 'end'
      },
      type: String,
      size: String,
      splitButton: Boolean
    },

    data() {
      return {
        timeout: null,
        visible: false
      };
    },

    mounted() {
      this.$on('visible', value => { this.visible = value; });
      this.initEvent();
    },

    watch: {
      visible(val) {
        this.broadcast('ElDropdownMenu', 'visible', val);
      }
    },

    methods: {
      show() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, 250);
      },
      hide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, 150);
      },
      handleClick() {
        this.visible = !this.visible;
      },
      initEvent() {
        let { trigger, show, hide, handleClick, splitButton } = this;
        let triggerElm = splitButton
          ? this.$refs.trigger.$el
          : this.$slots.default[0].elm;

        if (trigger === 'hover') {
          triggerElm.addEventListener('mouseenter', show);
          triggerElm.addEventListener('mouseleave', hide);

          let dropdownElm = this.$slots.dropdown[0].elm;

          dropdownElm.addEventListener('mouseenter', show);
          dropdownElm.addEventListener('mouseleave', hide);
        } else if (trigger === 'click') {
          triggerElm.addEventListener('click', handleClick);
        }
      }
    },

    render(h) {
      let { hide, splitButton, type, size } = this;

      var handleClick = _ => {
        this.$emit('click');
      };

      let triggerElm = !splitButton
        ? this.$slots.default
        : (<el-button-group>
            <el-button type={type} size={size} nativeOn-click={handleClick}>
              {this.$slots.default}
            </el-button>
            <el-button ref="trigger" type={type} size={size} class="el-dropdown__caret-button">
              <i class="el-dropdown__icon el-icon-caret-bottom"></i>
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
