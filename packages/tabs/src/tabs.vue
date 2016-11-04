<script>
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
        currentName: 0
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
      this.$nextTick(() => {
        this.currentName = this.activeName || this.$children[0].index || '1';
      });
    },
    render(h) {
      let {
        type,
        closable,
        handleTabRemove,
        handleTabClick,
        currentName
      } = this;

      const barStyle = this.calcBarStyle();
      const activeBar = !type
        ? <div class="el-tabs__active-bar" style={barStyle}></div>
        : null;

      const tabs = this.$children.map((tab, index) => {
        let btnClose = h('span', {
          class: {
            'el-icon-close': true
          },
          on: { click: (ev) => { handleTabRemove(tab, ev); } }
        });
        const _tab = h('div', {
          class: {
            'el-tabs__item': true,
            'is-active': currentName === tab.index,
            'is-disabled': tab.disabled,
            'is-closable': closable
          },
          ref: 'tabs',
          refInFor: true,
          on: { click: (ev) => { handleTabClick(tab, ev); } }
        }, [
          tab.label,
          closable ? btnClose : null,
          index === 0 ? activeBar : null
        ]);
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
