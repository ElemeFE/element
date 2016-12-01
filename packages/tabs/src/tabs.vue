<script type="text/jsx">
  module.exports = {
    name: 'el-tabs',

    props: {
      type: String,
      tabPosition: String,
      activeName: String,
      closable: false,
      tabWidth: 0
    },

    data() {
      return {
        children: null,
        activeTab: null,
        currentName: 0,
        panes: []
      };
    },

    watch: {
      activeName: {
        handler(val) {
          this.currentName = val;
        }
      }
    },

    methods: {
      handleTabRemove(tab, event) {
        event.stopPropagation();
        let tabs = this.$children;

        var index = tabs.indexOf(tab);
        tab.$destroy(true);

        if (tab.index === this.currentName) {
          let nextChild = tabs[index];
          let prevChild = tabs[index - 1];

          this.currentName = nextChild ? nextChild.index : prevChild ? prevChild.index : '-1';
        }
        this.$emit('tab-remove', tab);
        this.$forceUpdate();
      },
      handleTabClick(tab, event) {
        this.currentName = tab.index;
        this.$emit('tab-click', tab, event);
      },
      calcBarStyle() {
        if (this.type || !this.$refs.tabs) return {};
        var style = {};
        var offset = 0;
        var tabWidth = 0;

        this.$children.every((panel, index) => {
          let $el = this.$refs.tabs[index];
          if (!$el) { return false; }
          if (panel.index !== this.currentName) {
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
      }
    },
    mounted() {
      this.currentName = this.activeName || this.$children[0].index || '1';
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },
    render(h) {
        let {
          type,
          panes, // eslint-disable-line
          handleTabRemove,
          handleTabClick,
          currentName,
        } = this;

        const barStyle = this.calcBarStyle();
        const activeBar = !type
          ? <div class="el-tabs__active-bar" style={barStyle}></div>
          : null;

        const tabs = this.$children.map((tab, index) => {
            let btnClose = (
					<span class="el-icon-close" onClick={(ev) => {
                        handleTabRemove(tab, ev);
                    }}/>
            );
            let header = tab.label;
            if (tab.customTemplate) {
                header = tab.$slots.label;
            }

            const _tab = (
					<div class={{
                        'el-tabs__item': true,
                        'is-active': currentName === tab.index,
                        'is-disabled': tab.disabled,
                        'is-closable': tab.isClosable
                    }}
						 ref={tabs}
						 refInFor={true}
						 onClick={(ev) => {
                             handleTabClick(tab, ev);
                         }}
					>
                        {header}
                        {tab.isClosable ? btnClose : null}
                        {index === 0 ? activeBar : null}
					</div>
            );
            return _tab;
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
