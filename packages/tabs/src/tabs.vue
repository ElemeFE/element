<script>
  import TabBar from './tab-bar';
  module.exports = {
    name: 'ElTabs',

    components: {
      TabBar
    },

    props: {
      type: String,
      activeName: String,
      closable: Boolean,
      addable: Boolean,
      value: {},
      editable: Boolean
    },

    data() {
      return {
        children: null,
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
      }
    },

    methods: {
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.setCurrentName(tabName);
        this.$emit('tab-click', tab, event);
      },
      handleTabRemove(pane, ev) {
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
        this.panes.push(item);
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
              class="el-tabs__new-button"
              on-click={ handleTabAdd }
            >
                <i class="el-icon-plus"></i>
            </span>
          )
        : null;

      const tabs = this._l(panes, (pane, index) => {
        let tabName = pane.name || pane.index || index;
        const closable = pane.isClosable || editable;

        if (currentName === undefined && index === 0) {
          this.setCurrentName(tabName);
        }

        pane.index = index;

        const btnClose = closable
          ? <span class="el-icon-close" on-click={(ev) => { handleTabRemove(pane, ev); }}></span>
          : null;

        const tabLabelContent = pane.$slots.label || pane.label;
        return (
          <div
            class={{
              'el-tabs__item': true,
              'is-active': pane.active,
              'is-disabled': pane.disabled,
              'is-closable': closable
            }}
            ref="tabs"
            refInFor
            on-click={(ev) => { handleTabClick(pane, tabName, ev); }}
          >
            {tabLabelContent}
            {btnClose}
          </div>
        );
      });

      return (
        <div class={{
          'el-tabs': true,
          'el-tabs--card': type === 'card',
          'el-tabs--border-card': type === 'border-card'
        }}>
          <div class="el-tabs__header">
            {!type ? <tab-bar tabs={panes}></tab-bar> : null}
            {tabs}
            {newButton}
          </div>
          <div class="el-tabs__content">
            {this.$slots.default}
          </div>
        </div>
      );
    }
  };
</script>
