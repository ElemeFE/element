<script>
  import TabNav from './tab-nav';

  export default {
    name: 'ElTabs',

    components: {
      TabNav
    },

    props: {
      type: String,
      activeName: String,
      closable: Boolean,
      addable: Boolean,
      value: {},
      editable: Boolean,
      rightmenu: Boolean
    },

    data() {
      return {
        currentName: this.value || this.activeName,
        panes: []
      };
    },

    watch: {
      activeName(value) {
        this.setCurrentName(value);
      },
      value(value) {
        this.setCurrentName(value);
      },
      currentName(value) {
        if (this.$refs.nav) {
          this.$nextTick(_ => {
            this.$refs.nav.scrollToActiveTab();
          });
        }
      }
    },

    methods: {
      handleRightClick(tab, tabName, event) {
        event.preventDefault();
        if (tab.disabled || !this.rightmenu) return;
        this.$refs.right.openMenu(event, tab, tabName);
        this.$emit('tab-menu', tab, event);
      },
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.setCurrentName(tabName);
        this.$emit('tab-click', tab, event);
      },
      handleTabRemove(pane, ev) {
        if (pane.disabled) return;
        ev.stopPropagation();
        this.$emit('edit', pane.name, 'remove');
        this.$emit('tab-remove', pane.name);
      },
      handleTabAdd() {
        this.$emit('edit', null, 'add');
        this.$emit('tab-add');
      },
      setCurrentName(value) {
        this.currentName = value;
        this.$emit('input', value);
      },
      addPanes(item) {
        const index = this.$slots.default.indexOf(item.$vnode);
        this.panes.splice(index, 0, item);
      },
      removePanes(item) {
        const panes = this.panes;
        const index = panes.indexOf(item);
        if (index > -1) {
          panes.splice(index, 1);
        }
      }
    },
    render(h) {
      let {
        type,
        handleTabClick,
        handleRightClick,
        handleTabRemove,
        handleTabAdd,
        currentName,
        panes,
        editable,
        addable
      } = this;

      const newButton = editable || addable
        ? (
            <span
              class="el-tabs__new-tab"
              on-click={ handleTabAdd }
            >
                <i class="el-icon-plus"></i>
            </span>
          )
        : null;

      const navData = {
        props: {
          currentName,
          onTabClick: handleTabClick,
          onTabRemove: handleTabRemove,
          onRightClick: handleRightClick,
          editable,
          type,
          panes
        },
        ref: 'nav'
      };

      let viewShow = {
        ref: 'right'
      };

      const rightMenuContent = this.$slots.rightmenu;
      return (
        <div class={{
          'el-tabs': true,
          'el-tabs--card': type === 'card',
          'el-tabs--border-card': type === 'border-card'
        }}>
          <div class="el-tabs__header">
            {newButton}
            <tab-nav { ...navData }></tab-nav>
          </div>
          <div class="el-tabs__content">
            {this.$slots.default}
          </div>
          <el-right-menu {...viewShow}>
            <div slot="rightmenu">{rightMenuContent}</div>
          </el-right-menu>
        </div>

      );
    },
    created() {
      if (!this.currentName) {
        this.setCurrentName('0');
      }
    }
  };
</script>


