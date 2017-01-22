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
      closable: {
        type: Boolean,
        default: false
      },
      value: {}
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

    computed: {
      currentTab() {
        let result;
        this.panes.forEach(tab => {
          if (this.currentName === (tab.name || tab.index)) {
            result = tab;
          }
        });
        return result;
      }
    },

    methods: {
      handleTabRemove(pane, event) {
        event.stopPropagation();
        const panes = this.panes;
        const currentTab = this.currentTab;

        let index = panes.indexOf(pane);

        if (index === -1) return;

        panes.splice(index, 1);
        pane.$destroy();

        this.$emit('tab-remove', pane);

        this.$nextTick(_ => {
          if (pane.active) {
            const panes = this.panes;
            let nextChild = panes[index];
            let prevChild = panes[index - 1];
            let nextActiveTab = nextChild || prevChild || null;

            if (nextActiveTab) {
              this.setCurrentName(nextActiveTab.name || nextActiveTab.index);
            }
            return;
          } else {
            this.setCurrentName(currentTab.name || currentTab.index);
          }
        });
      },
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.setCurrentName(tabName);
        this.$emit('tab-click', tab, event);
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
        handleTabRemove,
        handleTabClick,
        currentName,
        panes
      } = this;

      const tabs = this._l(panes, (pane, index) => {
        let tabName = pane.name || pane.index || index;
        if (currentName === undefined && index === 0) {
          this.setCurrentName(tabName);
        }

        pane.index = index;

        const btnClose = pane.isClosable
          ? <span class="el-icon-close" on-click={(ev) => { handleTabRemove(pane, ev); }}></span>
          : null;

        const tabLabelContent = pane.$slots.label || pane.label;
        return (
          <div
            class={{
              'el-tabs__item': true,
              'is-active': pane.active,
              'is-disabled': pane.disabled,
              'is-closable': pane.isClosable
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
          </div>
          <div class="el-tabs__content">
            {this.$slots.default}
          </div>
        </div>
      );
    }
  };
</script>
