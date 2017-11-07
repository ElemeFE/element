<script>
  import Menu from './menu-mixin';
  import ElTooltip from 'element-ui/packages/tooltip';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElMenuItem',

    componentName: 'ElMenuItem',

    mixins: [Menu, Emitter],

    components: { ElTooltip },

    props: {
      index: {
        type: String,
        required: true
      },
      route: {
        type: [String, Object],
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      active() {
        return this.index === this.rootMenu.activeIndex;
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
      itemStyle() {
        const style = {
          color: this.active ? this.activeTextColor : this.textColor
        };
        if (this.mode === 'horizontal' && !this.isNested) {
          style.borderBottomColor = this.active
            ? (this.rootMenu.activeTextColor ? this.activeTextColor : '')
            : 'transparent';
        }
        return style;
      },
      isNested() {
        return this.parentMenu !== this.rootMenu;
      }
    },
    methods: {
      onMouseEnter() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        this.$refs.item.style.backgroundColor = this.hoverBackground;
      },
      onMouseLeave() {
        if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
        this.$refs.item.style.backgroundColor = this.backgroundColor;
      },
      handleClick() {
        this.dispatch('ElMenu', 'item-click', this);
        this.$emit('click', this);
      }
    },
    created() {
      this.parentMenu.addItem(this);
      this.rootMenu.addItem(this);
    },
    beforeDestroy() {
      this.parentMenu.removeItem(this);
      this.rootMenu.removeItem(this);
    },

    render(h) {
      const item = (
        <li ref="item"
          style={[this.paddingStyle, this.itemStyle, { backgroundColor: this.backgroundColor }]}
          onClick={this.handleClick}
          onMouseenter={this.onMouseEnter}
          onFocus={this.onMouseEnter}
          onBlur={this.onMouseLeave}
          onMouseleave={this.onMouseLeave}
          class={{
            'el-menu-item': true,
            'is-active': this.active,
            'is-disabled': this.disabled
          }}
          role="menuitem"
          tabindex="-1"
        >
          {
            this.$parent === this.rootMenu && this.rootMenu.collapse
              ? (
                <el-tooltip
                  effect="dark"
                  placement="right">
                  <div slot="content">{this.$slots.title}</div>
                  <div style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;">
                    {this.$slots.default}
                  </div>
                </el-tooltip>
              )
              : [this.$slots.default, this.$slots.title]
          }
        </li>
      );

      return this.rootMenu.router
        ? <router-link to={this.route || this.index}>{item}</router-link>
        : item;
    }
  };
</script>
