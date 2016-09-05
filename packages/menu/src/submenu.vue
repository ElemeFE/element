<script>
  import emitter from 'main/mixins/emitter';

  module.exports = {
    name: 'el-submenu',

    componentName: 'submenu',

    mixins: [emitter],

    props: {
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        opened: false,
        timeout: null,
        active: false
      };
    },
    computed: {
      indexPath() {
        var path = [this.index];
        var parent = this.$parent;
        while (parent.$options._componentTag !== 'el-menu') {
          if (parent.index) {
            path.unshift(parent.index);
          }
          parent = parent.$parent;
        }
        return path;
      },
      rootMenu() {
        var parent = this.$parent;
        while (parent.$options._componentTag !== 'el-menu') {
          parent = parent.$parent;
        }
        return parent;
      },
      mode() {
        return this.rootMenu.mode;
      }
    },
    methods: {
      handleClick() {
        if (this.mode === 'vertical') {
          if (!this.opened) {
            this.dispatch('menu', 'expand-menu', [this.index, this.indexPath]);
            this.opened = true;
          } else {
            this.dispatch('menu', 'collapse-menu', [this.index, this.indexPath]);
            this.opened = false;
          }
        }
      },
      handleMouseenter() {
        if (this.mode === 'horizontal') {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.dispatch('menu', 'expand-menu', [this.index, this.indexPath]);
            this.opened = true;
          }, 300);
        }
      },
      handleMouseleave() {
        if (this.mode === 'horizontal') {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.dispatch('menu', 'collapse-menu', [this.index, this.indexPath]);
            this.opened = false;
          }, 300);
        }
      }
    },
    mounted() {
      this.$on('close-menu', (openedIndexs) => {
        if (openedIndexs && openedIndexs.indexOf(this.index) === -1) {
          this.opened = false;
        }
      });
      this.$on('open-menu', (IndexsArray) => {
        if (IndexsArray && IndexsArray.indexOf(this.index) !== -1) {
          this.opened = true;
        }
      });
      this.$on('select', (index, indexPath) => {
        if (this.mode === 'horizontal') {
          this.active = indexPath.indexOf(this.index) !== -1;
          this.opened = false;
        }
      });
    },
    render(h) {
      var submenu;

      if (this.mode === 'horizontal') {
        submenu = (
          <transition name="md-fade-bottom">
            {this.opened ? <ul class="el-menu">{this.$slots.default}</ul> : null }
          </transition>
        );
      } else {
        submenu = (
          this.opened ? <ul class="el-menu">{this.$slots.default}</ul> : null
        );
      }

      return (
        <li
          class={{ 'el-submenu': true, 'is-active': this.active, 'is-opened': this.opened}}
          on-mouseenter={this.handleMouseenter}
          on-mouseleave={this.handleMouseleave}
        >
          <div class="el-submenu__title" on-click={this.handleClick}>

            {this.$slots.title}
            <i class={{
              'el-submenu__icon-arrow': true,
              'el-icon-arrow-down': this.mode === 'vertical',
              'el-icon-caret-bottom': this.mode === 'horizontal'
            }}>
            </i>
          </div>
          {submenu}
        </li>
      );
    }
  };
</script>
