<script>
  import Clickoutside from 'main/utils/clickoutside';
  import emitter from 'main/mixins/emitter';

  export default {
    name: 'ElDropdown',

    mixins: [emitter],

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
      type: {
        type: String
      },
      splitButton: Boolean
    },

    data() {
      return {
        timeout: null,
        visible: false
      };
    },

    mounted() {
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

          let dropdown = this.$slots.dropdown[0];
          let insertHook = dropdown.data.hook.insert;
          dropdown.data.hook.insert = (vnode) => {
            insertHook(vnode);
            this.$nextTick(_ => {
              vnode.elm.addEventListener('mouseenter', show);
              vnode.elm.addEventListener('mouseleave', hide);
            });
          };
        } else if (trigger === 'click') {
          triggerElm.addEventListener('click', handleClick);
        }
      }
    },

    render(h) {
      let { hide, splitButton, type } = this;

      var handleClick = _ => {
        this.$emit('click');
      };

      let triggerElm = !splitButton
        ? this.$slots.default
        : (<el-button-group>
            <el-button type={type} nativeOn-click={handleClick}>
              {this.$slots.default}
            </el-button>
            <el-button ref="trigger" type={type} class="el-dropdown__icon-button">
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
