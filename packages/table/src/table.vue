<template>
  <div class="el-table"
    :class="{ 'el-table--fit': fit, 'el-table--striped': stripe, 'el-table--border': border }"
    @mouseleave="handleMouseLeave($event)">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="el-table__header-wrapper" ref="headerWrapper">
      <table-header
        :store="store"
        :layout="layout"
        :border="border"
        :style="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">
      </table-header>
    </div>
    <div class="el-table__body-wrapper" ref="bodyWrapper"
      :style="{ height: layout.bodyHeight ? layout.bodyHeight + 'px' : '' }">
      <table-body
        :store="store"
        :layout="layout"
        :row-class-name="rowClassName"
        :style="{ width: layout.bodyWidth ? layout.bodyWidth - (layout.scrollY ? layout.gutterWidth : 0 ) + 'px' : '' }">
      </table-body>
    </div>
    <div class="el-table__fixed" ref="fixedWrapper"
      :style="{
        width: layout.fixedWidth ? layout.fixedWidth + 'px' : '',
        height: layout.viewportHeight ? layout.viewportHeight + 'px' : ''
      }">
      <div class="el-table__fixed-header-wrapper" ref="fixedHeaderWrapper"
        v-if="fixedColumns.length > 0">
        <table-header
          fixed="left"
          :border="border"
          :store="store"
          :layout="layout"
          :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-header>
      </div>
      <div class="el-table__fixed-body-wrapper" ref="fixedBodyWrapper"
        v-if="fixedColumns.length > 0"
        :style="{
          top: layout.headerHeight + 'px',
          height: layout.fixedBodyHeight ? layout.fixedBodyHeight + 'px' : ''
        }">
        <table-body
          fixed="left"
          :store="store"
          :layout="layout"
          :row-class-name="rowClassName"
          :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }">
        </table-body>
      </div>
    </div>
    <div class="el-table__fixed-right" ref="rightFixedWrapper"
      :style="{
        width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',
        height: layout.viewportHeight ? layout.viewportHeight + 'px' : '',
        right: layout.scrollY ? layout.gutterWidth + 'px' : ''
      }">
      <div class="el-table__fixed-header-wrapper" ref="rightFixedHeaderWrapper"
        v-if="rightFixedColumns.length > 0">
        <table-header
          fixed="right"
          :border="border"
          :store="store"
          :layout="layout"
          :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-header>
      </div>
      <div class="el-table__fixed-body-wrapper" ref="rightFixedBodyWrapper"
        v-if="rightFixedColumns.length > 0"
        :style="{
          top: layout.headerHeight + 'px',
          height: layout.fixedBodyHeight ? layout.fixedBodyHeight + 'px' : ''
        }">
        <table-body
          fixed="right"
          :store="store"
          :layout="layout"
          :row-class-name="rowClassName"
          :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }">
        </table-body>
      </div>
    </div>
    <div class="el-table__column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
  </div>
</template>

<script type="text/babel">
  import throttle from 'throttle-debounce/throttle';
  import debounce from 'throttle-debounce/debounce';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
  import TableStore from './table-store';
  import TableLayout from './table-layout';
  import TableBody from './table-body';
  import TableHeader from './table-header';

  let tableIdSeed = 1;

  export default {
    name: 'el-table',

    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },

      width: [String, Number],

      height: [String, Number],

      fit: {
        type: Boolean,
        default: true
      },

      stripe: Boolean,

      border: Boolean,

      selectionMode: {
        type: String,
        default: 'none'
      },

      rowKey: [String, Function],

      allowNoCurrentRow: Boolean,

      rowClassName: [String, Function]
    },

    components: {
      TableHeader,
      TableBody
    },

    methods: {
      clearSelection() {
        this.store.clearSelection();
      },

      handleMouseLeave() {
        this.store.commit('setHoverRow', null);
        if (this.hoverState) this.hoverState = null;
      },

      updateScrollY() {
        this.layout.updateScrollY();
      },

      syncHeight() {
        this.layout.syncHeight();
      },

      bindEvents() {
        const { bodyWrapper, headerWrapper } = this.$refs;
        const refs = this.$refs;
        bodyWrapper.addEventListener('scroll', function() {
          headerWrapper.scrollLeft = this.scrollLeft;
          if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
          if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
        });

        if (this.fit) {
          this.windowResizeListener = throttle(50, () => {
            if (this.$ready) this.doLayout();
          });
          addResizeListener(this.$el, this.windowResizeListener);
        }
      },

      doLayout() {
        this.store.updateColumns();
        this.layout.update();
        this.updateScrollY();
        this.$nextTick(() => {
          if (this.height) {
            this.layout.setHeight(this.height);
          } else if (this.shouldUpdateHeight) {
            this.layout.updateHeight();
          }
        });
      }
    },

    created() {
      this.tableId = 'el-table_' + tableIdSeed + '_';
      this.debouncedLayout = debounce(50, () => this.doLayout());
    },

    computed: {
      shouldUpdateHeight() {
        return typeof this.height === 'number' ||
          this.fixedColumns.length > 0 ||
          this.rightFixedColumns.length > 0;
      },

      selection() {
        if (this.selectionMode === 'multiple') {
          return this.store.selection;
        } else if (this.selectionMode === 'single') {
          return this.store.currentRow;
        }
        return null;
      },

      columns() {
        return this.store.states.columns;
      },

      tableData() {
        return this.store.states.data;
      },

      fixedColumns() {
        return this.store.states.fixedColumns;
      },

      rightFixedColumns() {
        return this.store.states.rightFixedColumns;
      }
    },

    watch: {
      height(value) {
        this.layout.setHeight(value);
      },

      data: {
        immediate: true,
        handler(val) {
          this.store.commit('setData', val);
        }
      }
    },

    destroyed() {
      if (this.windowResizeListener) removeResizeListener(this.$el, this.windowResizeListener);
    },

    mounted() {
      this.bindEvents();
      this.doLayout();

      this.$ready = true;
    },

    data() {
      const store = new TableStore(this, {
        allowNoCurrentRow: this.allowNoCurrentRow,
        selectionMode: this.selectionMode,
        rowKey: this.rowKey
      });
      const layout = new TableLayout({
        store,
        table: this,
        fit: this.fit
      });
      return {
        store,
        layout,
        resizeProxyVisible: false
      };
    }
  };
</script>
