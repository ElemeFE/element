<script>
  import TabBar from './tab-bar';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';

  function noop() {}
  const firstUpperCase = str => {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
  };

  export default {
    name: 'TabNav',

    components: {
      TabBar
    },

    inject: ['rootTabs'],

    props: {
      panes: Array,
      currentName: String,
      editable: Boolean,
      onTabClick: {
        type: Function,
        default: noop
      },
      onTabRemove: {
        type: Function,
        default: noop
      },
      type: String
    },

    data() {
      return {
        scrollable: false,
        navOffset: 0,
        isFocus: false
      };
    },

    computed: {
      navStyle() {
        const dir = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y';
        return {
          transform: `translate${dir}(-${this.navOffset}px)`
        };
      },
      sizeName() {
        return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
      }
    },

    methods: {
      scrollPrev() {
        const viewportWidth = this.$refs.navScroll[`offset${firstUpperCase(this.sizeName)}`];
        const currentOffset = this.navOffset;

        if (!currentOffset) return;

        let newOffset = currentOffset > viewportWidth
          ? currentOffset - viewportWidth
          : 0;

        this.navOffset = newOffset;
      },
      scrollNext() {
        const overviewWidth = this.$refs.nav[`offset${firstUpperCase(this.sizeName)}`];
        const viewportWidth = this.$refs.navScroll[`offset${firstUpperCase(this.sizeName)}`];
        const currentOffset = this.navOffset;

        if (overviewWidth - currentOffset <= viewportWidth) return;

        let newOffset = overviewWidth - currentOffset > viewportWidth * 2
          ? currentOffset + viewportWidth
          : (overviewWidth - viewportWidth);

        this.navOffset = newOffset;
      },
      scrollToActiveTab() {
        if (!this.scrollable) return;
        const overview = this.$refs.nav;
        const activeTab = this.$el.querySelector('.is-active');
        const viewport = this.$refs.navScroll;
        const activeTabBounding = activeTab.getBoundingClientRect();
        const viewportBounding = viewport.getBoundingClientRect();
        const overviewBounding = overview.getBoundingClientRect();
        const currentOffset = this.navOffset;
        let newOffset = currentOffset;

        // 可以向左滚
        if (activeTabBounding.left < viewportBounding.left) {
          // 现在滚过的距离-滚动的左边界到当前的tab的距离
          newOffset = currentOffset - (viewportBounding.left - activeTabBounding.left);
        }
        // 可以向右滚
        if (activeTabBounding.right > viewportBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - viewportBounding.right;
        }
        if (overviewBounding.right < viewportBounding.right) {
          newOffset = overview.offsetWidth - viewportBounding.width;
        }
        this.navOffset = Math.max(newOffset, 0);
      },
      update() {
        if (!this.$refs.nav) return;
        const sizeName = this.sizeName;
        const overviewWidth = this.$refs.nav[`offset${firstUpperCase(sizeName)}`];
        const viewportWidth = this.$refs.navScroll[`offset${firstUpperCase(sizeName)}`];
        const activeTab = this.$el.querySelector('.is-active');
        const activeTabBounding = activeTab && activeTab.getBoundingClientRect();
        const viewport = this.$refs.navScroll;
        const viewportBounding = viewport.getBoundingClientRect();
        const currentOffset = this.navOffset;

        // 可视区域的宽度小的话，会出滚动
        if (viewportWidth < overviewWidth) {
          this.scrollable = this.scrollable || {};
          this.scrollable.prev = currentOffset;
          this.scrollable.next = currentOffset + viewportWidth < overviewWidth;
          // 滚多了，要校正
          if (overviewWidth - currentOffset < viewportWidth) {
            // 滚到最大滚动距离
            this.navOffset = overviewWidth - viewportWidth;
          } else if (activeTabBounding && this.scrollable.next && activeTabBounding.right > viewportBounding.right && activeTabBounding.left < viewportBounding.right) {
            // 现在active的tab是最后一个的时候（视窗右边界刚好处在最后一个tab的中间），在resize的时候有可能没有滚动条，这种情况下，这个tab可能没有滚完
            this.navOffset = overviewWidth - viewportWidth;
          }
        } else {
          this.scrollable = false;
          if (currentOffset > 0) {
            this.navOffset = 0;
          }
        }
      },
      changeTab(e) {
        const keyCode = e.keyCode;
        let nextIndex;
        let currentIndex, tabList;
        if ([37, 38, 39, 40].indexOf(keyCode) !== -1) { // 左右上下键更换tab
          tabList = e.currentTarget.querySelectorAll('[role=tab]');
          currentIndex = Array.prototype.indexOf.call(tabList, e.target);
        } else {
          return;
        }
        if (keyCode === 37 || keyCode === 38) { // left
          if (currentIndex === 0) { // first
            nextIndex = tabList.length - 1;
          } else {
            nextIndex = currentIndex - 1;
          }
        } else { // right
          if (currentIndex < tabList.length - 1) { // not last
            nextIndex = currentIndex + 1;
          } else {
            nextIndex = 0;
          }
        }
        tabList[nextIndex].focus(); // 改变焦点元素
        tabList[nextIndex].click(); // 选中下一个tab
      },
      setFocus() {
        this.isFocus = true;
      },
      removeFocus() {
        this.isFocus = false;
      }
    },

    updated() {
      this.update();
    },

    render(h) {
      const {
        type,
        panes,
        editable,
        onTabClick,
        onTabRemove,
        navStyle,
        scrollable,
        scrollNext,
        scrollPrev,
        changeTab,
        setFocus,
        removeFocus
      } = this;
      const scrollBtn = scrollable
      ? [
        <span class={['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled']} on-click={scrollPrev}><i class="el-icon-arrow-left"></i></span>,
        <span class={['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled']} on-click={scrollNext}><i class="el-icon-arrow-right"></i></span>
      ] : null;

      const tabs = this._l(panes, (pane, index) => {
        let tabName = pane.name || pane.index || index;
        const closable = pane.isClosable || editable;

        pane.index = `${index}`;

        const btnClose = closable
          ? <span class="el-icon-close" on-click={(ev) => { onTabRemove(pane, ev); }}></span>
          : null;

        const tabLabelContent = pane.$slots.label || pane.label;
        const tabindex = pane.active ? 0 : -1;
        return (
          <div
            class={{
              'el-tabs__item': true,
              'is-active': pane.active,
              'is-disabled': pane.disabled,
              'is-closable': closable,
              'is-focus': this.isFocus
            }}
            id={`tab-${tabName}`}
            aria-controls={`pane-${tabName}`}
            role="tab"
            aria-selected= { pane.active }
            ref="tabs"
            tabindex= {tabindex}
            refInFor
            on-focus= { ()=> { setFocus(); }}
            on-blur = { ()=> { removeFocus(); }}
            on-click={(ev) => { removeFocus(); onTabClick(pane, tabName, ev); }}
            on-keydown={(ev) => { if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) { onTabRemove(pane, ev);} }}
          >
            {tabLabelContent}
            {btnClose}
          </div>
        );
      });
      return (
        <div class={['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : '']}>
          {scrollBtn}
          <div class={['el-tabs__nav-scroll']} ref="navScroll">
            <div class="el-tabs__nav" ref="nav" style={navStyle} role="tablist" on-keydown={ changeTab }>
              {!type ? <tab-bar tabs={panes}></tab-bar> : null}
              {tabs}
            </div>
          </div>
        </div>
      );
    },

    mounted() {
      addResizeListener(this.$el, this.update);
    },

    beforeDestroy() {
      if (this.$el && this.update) removeResizeListener(this.$el, this.update);
    }
  };
</script>

