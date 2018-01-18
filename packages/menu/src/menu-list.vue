<script>
import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
import menuMixin from './menu-mixin';
import Popper from 'element-ui/src/utils/vue-popper';

export default {
  name: 'ElMenuList',

  mixins: [menuMixin, Popper],

  components: { ElCollapseTransition },

  computed: {
    menuTransitionName() {
      return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
    }
  },

  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: false
    },
    menuPopup: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    visible(val) {
      if (this.menuPopup) {
        this.$nextTick(_ => {
          this.showPopper = val;
        });
      }
    }
  },

  methods: {
    initPopper() {
      this.referenceElm = this.$parent.$el;
      this.popperElm = this.$el;
    }
  },

  mounted() {
    this.initPopper();
  },

  render(h) {
    const {
      rootMenu,
      placement,
      $slots,
      visible
    } = this;

    const popupMenu = (
      <transition name={this.menuTransitionName}>
        <div
          ref="menu"
          v-show={visible}
          class={[`el-menu--${rootMenu.mode}`]}
          on-mouseenter={() => { this.$emit('mouseenter'); }}
          on-mouseleave={() => { this.$emit('mouseleave'); }}
          on-focus={() => { this.$emit('mouseenter'); }}>
          <ul
            role="menu"
            class={['el-menu el-menu--popup', `el-menu--popup-${placement}`]}
            style={{ backgroundColor: rootMenu.backgroundColor || '' }}>
            {$slots.default}
          </ul>
        </div>
      </transition>
    );

    const inlineMenu = (
      <el-collapse-transition>
        <ul
          v-show={visible}
          role="menu"
          class="el-menu el-menu--inline"
          style={{ backgroundColor: rootMenu.backgroundColor || '' }}>
          {$slots.default}
        </ul>
      </el-collapse-transition>
    );
    return this.menuPopup ? popupMenu : inlineMenu;
  }
}
</script>
