<template>
  <div
    class="el-table"
    :class="[
      {
        'el-table--fit': fit,
        'el-table--striped': stripe,
        'el-table--border': border || isGroup,
        'el-table--hidden': isHidden,
        'el-table--group': isGroup,
        'el-table--fluid-height': maxHeight,
        'el-table--scrollable-x': layout.scrollX,
        'el-table--scrollable-y': layout.scrollY,
        'el-table--enable-row-hover': !store.states.isComplex,
        'el-table--enable-row-transition':
          (store.states.data || []).length !== 0 &&
          (store.states.data || []).length < 100
      },
      tableSize ? `el-table--${tableSize}` : ''
    ]"
    @mouseleave="handleMouseLeave($event)"
  >
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div
      v-if="showHeader"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__header-wrapper"
      ref="headerWrapper"
    >
      <table-header
        ref="tableHeader"
        :store="store"
        :border="border"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }"
        fixed=""
      >
      </table-header>
    </div>
    <div
      key="table-fixed"
      v-if="fixedColumns.length > 0"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed"
      ref="fixedWrapper"
      :style="[
        {
          width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
        },
        fixedHeight
      ]"
    >
      <div
        v-if="showHeader"
        class="el-table__fixed-header-wrapper"
        ref="fixedHeaderWrapper"
      >
        <table-header
          ref="fixedTableHeader"
          fixed="left"
          :border="border"
          :store="store"
          :style="{
            width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
          }"
        ></table-header>
      </div>
      <div
        class="el-table__fixed-body-wrapper"
        ref="fixedBodyWrapper"
        :style="[
          {
            top: layout.headerHeight + 'px'
          },
          fixedBodyHeight
        ]"
      >
        <table-body
          fixed="left"
          :store="store"
          :stripe="stripe"
          :highlight="highlightCurrentRow"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :style="{
            width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
          }"
          :minIndexForShow="minIndexForShow"
          :maxIndexForShow="maxIndexForShow"
        >
        </table-body>
        <div
          v-if="$slots.append"
          class="el-table__append-gutter"
          :style="{ height: layout.appendHeight + 'px' }"
        ></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        class="el-table__fixed-footer-wrapper"
        ref="fixedFooterWrapper"
      >
        <table-footer
          fixed="left"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
          }"
        ></table-footer>
      </div>
    </div>
    <div
      key="table-fixed-right"
      v-if="rightFixedColumns.length > 0"
      v-mousewheel="handleFixedMousewheel"
      class="el-table__fixed-right"
      ref="rightFixedWrapper"
      :style="[
        {
          width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',
          right: layout.scrollY
            ? (border ? layout.gutterWidth : layout.gutterWidth || 0) + 'px'
            : ''
        },
        fixedHeight
      ]"
    >
      <div
        v-if="showHeader"
        class="el-table__fixed-header-wrapper"
        ref="rightFixedHeaderWrapper"
      >
        <table-header
          ref="rightFixedTableHeader"
          fixed="right"
          :border="border"
          :store="store"
          :style="{
            width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : ''
          }"
        ></table-header>
      </div>
      <div
        class="el-table__fixed-body-wrapper"
        ref="rightFixedBodyWrapper"
        :style="[
          {
            top: layout.headerHeight + 'px'
          },
          fixedBodyHeight
        ]"
      >
        <table-body
          fixed="right"
          :store="store"
          :stripe="stripe"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{
            width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : ''
          }"
          :minIndexForShow="minIndexForShow"
          :maxIndexForShow="maxIndexForShow"
        >
        </table-body>
        <div
          v-if="$slots.append"
          class="el-table__append-gutter"
          :style="{ height: layout.appendHeight + 'px' }"
        ></div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        class="el-table__fixed-footer-wrapper"
        ref="rightFixedFooterWrapper"
      >
        <table-footer
          fixed="right"
          :border="border"
          :sum-text="sumText || t('el.table.sumText')"
          :summary-method="summaryMethod"
          :store="store"
          :style="{
            width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : ''
          }"
        ></table-footer>
      </div>
    </div>
    <div
      key="table-body-wrapper"
      class="el-table__body-wrapper"
      ref="bodyWrapper"
      :class="[
        layout.scrollX ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none'
      ]"
      :style="[bodyHeight]"
    >
      <table-body
        :store="store"
        :stripe="stripe"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :highlight="highlightCurrentRow"
        :style="{
          width: bodyWidth
        }"
        :minIndexForShow="minIndexForShow"
        :maxIndexForShow="maxIndexForShow"
        fixed=""
      >
      </table-body>
      <div
        v-if="$slots.append"
        class="el-table__append-wrapper"
        ref="appendWrapper"
      >
        <slot name="append"></slot>
      </div>
    </div>
    <div
      v-if="showSummary"
      v-show="data && data.length > 0"
      v-mousewheel="handleHeaderFooterMousewheel"
      class="el-table__footer-wrapper"
      ref="footerWrapper"
    >
      <table-footer
        :store="store"
        :border="border"
        :sum-text="sumText || t('el.table.sumText')"
        :summary-method="summaryMethod"
        :default-sort="defaultSort"
        :style="{
          width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
        }"
        fixed=""
      >
      </table-footer>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      class="el-table__fixed-right-patch"
      ref="rightFixedPatch"
      :style="{
        width: layout.scrollY ? layout.gutterWidth + 'px' : '0',
        height: layout.headerHeight + 'px'
      }"
    ></div>
    <div
      class="el-table__column-resize-proxy"
      ref="resizeProxy"
      v-show="resizeProxyVisible"
    ></div>
  </div>
</template>

<script type="text/babel">
import ElCheckbox from 'element-ui/packages/checkbox';
import Mousewheel from 'element-ui/src/directives/mousewheel';
import Migrating from 'element-ui/src/mixins/migrating';
import fastdom from 'element-ui/src/utils/custom/fastdom';
import throttle from 'throttle-debounce/throttle';
import {
  addResizeListener,
  removeResizeListener
} from 'element-ui/src/utils/resize-event';
import {
  DEFAULT_BODY_TR_HEIGHT,
  DEFAULT_MAX_PAGE_SIZE,
  DEFAULT_TABLE_BODY_HEIGHT,
  MIN_DATA_QUANTITY,
  TABLE_ID_SEED
} from './consts';
import { createStore, mapStates } from './store/helper';
import TableBody from './table-body';
import TableFooter from './table-footer';
import TableHeader from './table-header';
import TableLayout from './table-layout';
import { parseHeight } from './util';

let tableIdSeed = TABLE_ID_SEED;

export default {
  name: 'ElTable',

  mixins: [Migrating],

  directives: {
    Mousewheel
  },

  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },

    indent: {
      type: Number,
      default: 16
    },

    treeProps: {
      type: Object,
      default () {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        };
      }
    },

    lazy: Boolean,

    load: Function
  },

  components: {
    TableHeader,
    TableFooter,
    TableBody,
    ElCheckbox
  },

  methods: {
    initProperties () {
      this.updateHeightData();
      this.updateIndexForShow();
    },
    initListenerProps () {
      this.debouncedUpdateLayout = throttle(50, false, () => this.doLayout());
    },
    updateHeightData () {
      if (!this.bodyWrapper) return;

      this.updateBodyPositionInfo();
      const $bodyWrapper = this.bodyWrapper;
      const $bodyTr = $bodyWrapper.querySelector('tr');
      if ($bodyTr) {
        this.bodyTrHeight = $bodyTr.getBoundingClientRect().height;
        this.updateMaxPageSize();
      } else {
        this.bodyTrHeight = DEFAULT_BODY_TR_HEIGHT;
      }
      this.updateTableBodyHeight();
    },
    updateMaxPageSize () {
      // 默认多给一条数据，如果表格高度是null，则设置为15
      const maxPageSize = this.layout.bodyHeight
        ? Math.ceil(this.layout.bodyHeight / this.bodyTrHeight) + 1
        : 15;
      // 每页最大数据量
      this.maxPageSize = Math.min(
        isNaN(maxPageSize) ? 0 : maxPageSize,
        DEFAULT_MAX_PAGE_SIZE
      );
    },
    updateTableBodyHeight () {
      if (!this.bodyWrapper) {
        return;
      }

      const dataLength = this.data.length;
      if (dataLength > 0) {
        this.tableBodyHeight = this.bodyTrHeight * dataLength;
      } else {
        this.tableBodyHeight = this.bodyWrapper.getBoundingClientRect().height;
      }
    },
    updateIndexForShow () {
      const dataLength = this.data.length;
      if (dataLength < MIN_DATA_QUANTITY) {
        if (this.minIndexForShow !== 0) {
          this.minIndexForShow = 0;
        }
        if (this.maxIndexForShow !== dataLength) {
          this.maxIndexForShow = dataLength;
        }
        return;
      }
      if (!this.bodyTrHeight || !this.maxPageSize) return;

      const { scrollTop } = this.getBodyPositionInfo();
      // 第一条数据的索引
      const firstIndex = Math.ceil(scrollTop / this.bodyTrHeight);
      // 最后一条数据的索引
      const lastIndex = firstIndex + this.maxPageSize;
      const minIndexForShow = Math.max(firstIndex - 2 * this.maxPageSize, 0);
      const maxIndexForShow = Math.min(
        Math.max(
          lastIndex + 2 * this.maxPageSize,
          minIndexForShow + this.maxPageSize
        ),
        this.data.length - 1
      );
      if (this.minIndexForShow !== minIndexForShow) {
        this.minIndexForShow = minIndexForShow;
      }
      if (this.maxIndexForShow !== maxIndexForShow) {
        this.maxIndexForShow = maxIndexForShow;
      }
    },

    getMigratingConfig () {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },

    setCurrentRow (row) {
      this.store.commit('setCurrentRow', row);
    },

    toggleRowSelection (row, selected) {
      this.store.toggleRowSelection(row, selected, false);
      this.store.updateAllSelected();
    },

    toggleRowExpansion (row, expanded) {
      this.store.toggleRowExpansionAdapter(row, expanded);
    },

    clearSelection () {
      this.store.clearSelection();
    },

    clearFilter (columnKeys) {
      this.store.clearFilter(columnKeys);
    },

    clearSort () {
      this.store.clearSort();
    },

    handleMouseLeave () {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },

    updateScrollY () {
      const changed = this.layout.updateScrollY();
      if (changed) {
        this.layout.notifyObservers('scrollable');
        this.layout.updateColumnsWidth();
      }
    },

    handleFixedMousewheel (event, data) {
      const bodyWrapper = this.bodyWrapper;
      if (Math.abs(data.spinY) > 0) {
        const currentScrollTop = bodyWrapper.scrollTop;
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault();
        }
        if (
          data.pixelY > 0 &&
          bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop
        ) {
          event.preventDefault();
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
      }
    },

    handleHeaderFooterMousewheel (event, data) {
      const { pixelX, pixelY } = data;
      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    },

    async syncPosition () {
      await fastdom.measure(() => {
        this.updateBodyPositionInfo();
        return fastdom.mutate(() => {
          const {
            headerWrapper,
            footerWrapper,
            fixedBodyWrapper,
            rightFixedBodyWrapper
          } = this.$refs;
          const {
            scrollLeft,
            scrollTop,
            offsetWidth,
            scrollWidth
          } = this.bodyPositionInfo;
          if (headerWrapper) {
            headerWrapper.scrollLeft = scrollLeft;
          }
          if (footerWrapper) {
            footerWrapper.scrollLeft = scrollLeft;
          }
          if (fixedBodyWrapper) {
            fixedBodyWrapper.scrollTop = scrollTop;
          }
          if (rightFixedBodyWrapper) {
            rightFixedBodyWrapper.scrollTop = scrollTop;
          }
          const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
          if (scrollLeft >= maxScrollLeftPosition) {
            this.scrollPosition = 'right';
          } else if (scrollLeft === 0) {
            this.scrollPosition = 'left';
          } else {
            this.scrollPosition = 'middle';
          }
          this.updateIndexForShow();
        });
      });
    },

    throttleSyncPosition: throttle(16, function () {
      this.syncPosition();
    }),

    onScroll (evt) {
      let raf = window.requestAnimationFrame;
      if (!raf) {
        this.throttleSyncPosition();
      } else {
        raf(this.syncPosition);
      }
    },

    bindEvents () {
      this.bodyWrapper.addEventListener('scroll', this.onScroll, {
        passive: true
      });
      if (this.fit) {
        addResizeListener(this.$el, this.resizeListener);
      }
    },

    unbindEvents () {
      this.bodyWrapper.removeEventListener('scroll', this.onScroll, {
        passive: true
      });
      if (this.fit) {
        removeResizeListener(this.$el, this.resizeListener);
      }
    },

    // 解决在 tabs 模式下，因tab切换后当前表格被隐藏导致的 scrollX 值错误，从而导致的 viewportHeight 值计算错误，
    // 进而引发的固定列高度与表格主体高度不一致的问题
    tableIsVisible() {
      return this.$el.getBoundingClientRect().width > 0
    },

    resizeListener () {
      // 表格未准备好、表格不可见时，不执行计算尺寸、布局的逻辑
      if (!this.$ready || !this.tableIsVisible()) {
        // 重置尺寸数据
        this.resizeState.width = null
        this.resizeState.height = null
        return;
      }
      let shouldUpdateLayout = false;
      const el = this.$el;
      const { width: oldWidth, height: oldHeight } = this.resizeState;

      const width = el.offsetWidth;
      if (oldWidth !== width) {
        shouldUpdateLayout = true;
      }

      const height = el.offsetHeight;
      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true;
      }

      if (shouldUpdateLayout) {
        this.resizeState.width = width;
        this.resizeState.height = height;
        this.doLayout();
      }
    },

    updateBodyPositionInfo () {
      const {
        scrollLeft,
        scrollTop,
        offsetWidth,
        scrollWidth
      } = this.bodyWrapper;
      return (this.bodyPositionInfo = {
        scrollLeft,
        scrollTop,
        offsetWidth,
        scrollWidth
      });
    },

    getBodyPositionInfo () {
      if (
        !this.bodyPositionInfo ||
        typeof this.bodyPositionInfo.scrollTop === 'undefined'
      ) {
        this.updateBodyPositionInfo();
      }
      return this.bodyPositionInfo;
    },

    doLayout () {
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
      }
      this.layout.updateColumnsWidth();
      this.updateHeightData();
      this.updateIndexForShow();
    },

    sort (prop, order) {
      this.store.commit('sort', { prop, order });
    },

    toggleAllSelection () {
      this.store.commit('toggleAllSelection');
    }
  },

  computed: {
    tableSize () {
      return this.size || (this.$ELEMENT || {}).size;
    },

    bodyWrapper () {
      return this.$refs.bodyWrapper;
    },

    shouldUpdateHeight () {
      return (
        this.height ||
        this.maxHeight ||
        this.fixedColumns.length > 0 ||
        this.rightFixedColumns.length > 0
      );
    },

    bodyWidth () {
      const { bodyWidth, scrollY, gutterWidth } = this.layout;
      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },

    bodyHeight () {
      const { headerHeight = 0, bodyHeight, footerHeight = 0 } = this.layout;
      if (this.height) {
        return {
          height: bodyHeight ? bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        const maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          return {
            'max-height':
              maxHeight -
              footerHeight -
              (this.showHeader ? headerHeight : 0) +
              'px'
          };
        }
      }
      return {};
    },

    fixedBodyHeight () {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight
            ? this.layout.fixedBodyHeight + 'px'
            : ''
        };
      } else if (this.maxHeight) {
        let maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          maxHeight = this.layout.scrollX
            ? maxHeight - this.layout.gutterWidth
            : maxHeight;
          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }
          maxHeight -= this.layout.footerHeight;
          return {
            'max-height': maxHeight + 'px'
          };
        }
      }
      return {};
    },

    fixedHeight () {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          };
        }
        return {
          bottom:
            this.layout.scrollX && this.data.length
              ? this.layout.gutterWidth + 'px'
              : ''
        };
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight
              ? this.layout.tableHeight + 'px'
              : ''
          };
        }
        return {
          height: this.layout.viewportHeight
            ? this.layout.viewportHeight + 'px'
            : ''
        };
      }
    },

    emptyBlockStyle () {
      if (this.data && this.data.length) return null;
      let height = '100%';
      if (this.layout.appendHeight) {
        height = `calc(100% - ${this.layout.appendHeight}px)`;
      }
      return {
        width: this.bodyWidth,
        height
      };
    },

    ...mapStates({
      selection: 'selection',
      columns: 'columns',
      tableData: 'data',
      fixedColumns: 'fixedColumns',
      rightFixedColumns: 'rightFixedColumns'
    })
  },

  watch: {
    height: {
      immediate: true,
      handler (value) {
        this.layout.setHeight(value);
      }
    },

    maxHeight: {
      immediate: true,
      handler (value) {
        this.layout.setMaxHeight(value);
      }
    },

    currentRowKey: {
      immediate: true,
      handler (value) {
        if (!this.rowKey) return;
        this.store.setCurrentRowKey(value);
      }
    },

    data: {
      immediate: true,
      handler (value) {
        this.$nextTick(() => {
          // 重算布局相关的数据
          // 1.由无垂直滚动条，到有垂直滚动条，会出现宽度显示不完整的问题
          // 2.数据量的不同，会导致起止索引值不同，需重算
          // 3.其他因数据量的变更而导致的问题
          this.doLayout();
        });
        this.store.commit('setData', value);
      }
    },

    expandRowKeys: {
      immediate: true,
      handler (newVal) {
        if (newVal) {
          this.store.setExpandRowKeysAdapter(newVal);
        }
      }
    }
  },

  created () {
    this.tableId = 'el-table_' + tableIdSeed++;
    this.initListenerProps();
  },

  mounted () {
    this.bindEvents();
    this.store.updateColumns();
    this.doLayout();

    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };

    // init filters
    this.store.states.columns.forEach(column => {
      if (column.filteredValue && column.filteredValue.length) {
        this.store.commit('filterChange', {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });

    this.initProperties();
    this.$ready = true;
  },

  activated () {
    this.$nextTick(() => {
      this.doLayout();
    });
  },

  destroyed () {
    this.unbindEvents();
  },

  data () {
    const {
      hasChildren = 'hasChildren',
      children = 'children'
    } = this.treeProps;
    this.store = createStore(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: this.indent,
      lazy: this.lazy,
      lazyColumnIdentifier: hasChildren,
      childrenColumnName: children
    });
    const layout = new TableLayout({
      store: this.store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });
    return {
      minIndexForShow: 0,
      maxIndexForShow: DEFAULT_MAX_PAGE_SIZE,
      tableBodyHeight: DEFAULT_TABLE_BODY_HEIGHT,
      layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    };
  }
};
</script>
