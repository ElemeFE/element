<script>
  module.exports = {
    name: 'el-tabs',

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
        currentName: this.value || this.activeName
      };
    },

    watch: {
      activeName(val) {
        this.currentName = val;
      },
      value(val) {
        this.currentName = val;
      },
      currentName(val) {
        this.$emit('input', val);
      }
    },

    methods: {
      handleTabRemove(tab, event) {
        event.stopPropagation();
        const tabs = this.$children;

        let index = tabs.indexOf(tab);
        tab.$destroy();

        this.$emit('tab-remove', tab);
        this.$forceUpdate();

        this.$nextTick(_ => {
          if (tab.active) {
            let nextChild = tabs[index];
            let prevChild = tabs[index - 1];
            let nextActiveTab = nextChild || prevChild || null;

            if (nextActiveTab) {
              this.currentName = nextActiveTab.name || nextActiveTab.index;
            }
          }
        });
      },
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.currentName = tabName;
        this.$emit('tab-click', tab, event);
      }
    },
    mounted() {
      this.$forceUpdate();
    },
    render(h) {
      let {
        type,
        handleTabRemove,
        handleTabClick,
        currentName
      } = this;

      const getBarStyle = () => {
        if (this.type || !this.$refs.tabs) return {};
        let style = {};
        let offset = 0;
        let tabWidth = 0;

        this.$children.every((tab, index) => {
          let $el = this.$refs.tabs[index];
          if (!$el) { return false; }

          if (!tab.active) {
            offset += $el.clientWidth;
            return true;
          } else {
            tabWidth = $el.clientWidth;
            return false;
          }
        });

        style.width = tabWidth + 'px';
        style.transform = `translateX(${offset}px)`;

        return style;
      };

      const tabs = this.$children.map((tab, index) => {
        let tabName = tab.name || tab.index || index;
        if (currentName === undefined && index === 0) {
          this.currentName = tabName;
        }

        tab.index = index;

        const activeBar = !type && index === 0
          ? <div class="el-tabs__active-bar" style={getBarStyle()}></div>
          : null;

        const btnClose = tab.isClosable
          ? <span class="el-icon-close" on-click={(ev) => { handleTabRemove(tab, ev); }}></span>
          : null;

        const tabLabelContent = tab.$slots.label || tab.label;

        return (
          <div
            class={{
              'el-tabs__item': true,
              'is-active': tab.active,
              'is-disabled': tab.disabled,
              'is-closable': tab.isClosable
            }}
            ref="tabs"
            refInFor
            on-click={(ev) => { handleTabClick(tab, tabName, ev); }}
          >
            {tabLabelContent}
            {btnClose}
            {activeBar}
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
