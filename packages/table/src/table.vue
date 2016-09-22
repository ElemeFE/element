<template>
  <div class="el-table" :class="{ 'el-table--fit': fit, 'el-table--striped': stripe, 'el-table--border': border }" @mouseleave="handleMouseLeave($event)">
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="el-table__header-wrapper">
      <table-header :columns="columns" :all-selected="allSelected" @allselectedchange="handleAllSelectedChange" :selection="selection" :style="{ width: bodyWidth ? bodyWidth + 'px' : '' }" :border="border"></table-header>
    </div>
    <div class="el-table__body-wrapper">
      <table-body :columns="columns" :selection="selection" :data="filterData" :style="{ width: bodyWidth ? bodyWidth - (showVScrollBar ? currentGutterWidth : 0 ) + 'px' : '' }"></table-body>
    </div>
    <div class="el-table__fixed" :style="{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }" ref="fixed">
      <div class="el-table__fixed-header-wrapper" v-if="fixedColumnCount > 0">
        <table-header :columns="fixedColumns" :all-selected="allSelected" @allselectedchange="handleAllSelectedChange" :selection="selection" :style="{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }" :border="border"></table-header>
      </div>
      <div class="el-table__fixed-body-wrapper" v-if="fixedColumnCount > 0" :style="{ top: headerHeight + 'px' }">
        <table-body :columns="fixedColumns" fixed :selection="selection" :data="filterData" :style="{ width: fixedBodyWidth ? fixedBodyWidth + 'px' : '' }"></table-body>
      </div>
    </div>
    <div class="el-table__column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
    <slot name="bottom"></slot>
  </div>
</template>

<script type="text/babel">
  import throttle from 'throttle-debounce/throttle';
  import debounce from 'throttle-debounce/debounce';
  import { getScrollBarWidth, orderBy } from './util';
  import objectAssign from 'object-assign';

  let gridIdSeed = 1;
  let GUTTER_WIDTH;

  import TableBody from './table-body';
  import TableHeader from './table-header';

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

      stripe: {
        type: Boolean,
        default: false
      },

      border: {
        type: Boolean,
        default: false
      },

      fixedColumnCount: {
        type: Number,
        default: 0
      },

      selectionMode: {
        type: String,
        default: 'none'
      },

      selection: {},

      allowNoSelection: {
        type: Boolean,
        default: false
      },

      gutterWidth: {
        default: 0
      },

      customCriteria: Array,
      customBackgroundColors: Array
    },

    components: {
      TableHeader,
      TableBody
    },

    methods: {
      handleAllSelectedChange(val) {
        this.allSelected = val;
      },

      doOnDataChange(data) {
        data = data || [];

        if (this.selectionMode === 'single') {
          const oldSelection = this.selected;
          if (oldSelection === null) {
            if (!this.allowNoSelection) {
              this.selected = data[0];
              if (this.selected !== oldSelection) {
                this.$emit('selectionchange', this.selected);
              }
            }
          } else if (data.indexOf(oldSelection) === -1) {
            if (!this.allowNoSelection) {
              this.selected = data[0];
            } else {
              this.selected = null;
            }
            if (this.selected !== oldSelection) {
              this.$emit('selectionchange', this.selected);
            }
          }
        }
      },

      toggleAllSelection() {
        setTimeout(() => {
          this.tableData.forEach(item => {
            item.$selected = this.allSelected;
          });
        }, 0);
      },

      $calcColumns() {
        let fit = this.fit;
        let columns = this.columns;

        let bodyWidth = this.$el.clientWidth;
        let bodyMinWidth = 0;

        let flattenColumns = [];

        columns.forEach((column) => {
          if (column.isColumnGroup) {
            flattenColumns.push.apply(flattenColumns, column.columns);
          } else {
            flattenColumns.push(column);
          }
        });

        if (fit) {
          let flexColumns = [];
          // let definedWidthColumnsWidth = 0;
          // let definedMinWidthSum = 0;

          flattenColumns.forEach((column) => {
            // definedMinWidthSum += column.minWidth || 80;
            bodyMinWidth += column.width || column.minWidth || 80;

            if (typeof column.width === 'number') {
              // definedWidthColumnsWidth += column.width;
            } else {
              flexColumns.push(column);
            }
          });

          if (bodyMinWidth < bodyWidth - this.currentGutterWidth) { // do not have scroll bar.
            let flexWidthTotal = bodyWidth - this.currentGutterWidth - columns.length - bodyMinWidth;
            let flexWidthPerColumn = Math.floor(flexWidthTotal / flexColumns.length);
            let flexWidthFirstColumn = flexWidthTotal - flexWidthPerColumn * flexColumns.length + flexWidthPerColumn;

            flexColumns.forEach((column, index) => {
              if (index === 0) {
                column.realWidth = (column.minWidth || 80) + flexWidthFirstColumn;
              } else {
                column.realWidth = (column.minWidth || 80) + flexWidthPerColumn;
              }
            });
          } else { // need horizontal scroll bar.
            this.showHScrollBar = true;
            flexColumns.forEach(function(column) {
              column.realWidth = column.minWidth;
            });
          }

          this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
        } else {
          flattenColumns.forEach((column) => {
            if (!column.width && !column.minWidth) {
              column.realWidth = 80;
            }

            bodyMinWidth += column.realWidth;
          });
          this.showHScrollBar = bodyMinWidth > bodyWidth;

          this.bodyWidth = bodyMinWidth;
        }

        if (this.styleNode) {
          let styleSheet = this.styleNode.sheet;

          if (!styleSheet) return;
          for (let i = 0, j = styleSheet.cssRules.length; i < j; i++) {
            styleSheet.deleteRule(0);
          }

          columns.forEach(function(column) {
            const addRule = function(rule) {
              styleSheet.insertRule(rule, styleSheet.cssRules.length);
            };

            if (column.isColumnGroup) {
              let childColumns = column.columns;
              let groupWidth = 0;
              childColumns.forEach(function(childColumn) {
                groupWidth += childColumn.realWidth;
                addRule(`.${childColumn.id}, .${childColumn.id} > div { width: ${childColumn.realWidth}px; }`);
              });

              addRule(`.${column.id}, .${column.id} > div { width: ${groupWidth}px; }`);
            } else {
              addRule(`.${column.id}, .${column.id} > div { width: ${column.realWidth}px; }`);
            }
          });
        }

        if (this.fixedColumnCount > 0) {
          let fixedBodyWidth = 0;
          let fixedColumnCount = this.fixedColumnCount;
          columns.forEach(function(column, index) {
            if (index < fixedColumnCount) {
              fixedBodyWidth += column.realWidth;
            }
          });

          this.fixedBodyWidth = fixedBodyWidth;
        }

        this.$nextTick(() => {
          this.headerHeight = this.$el.querySelector('.el-table__header-wrapper').offsetHeight;
        });
      },

      $calcHeight(height) {
        if (typeof height === 'string' && /^\d+$/.test(height)) {
          height = Number(height);
        }

        if (!isNaN(height) && this.$el) {
          const headerHeight = this.headerHeight = this.$el.querySelector('.el-table__header-wrapper').offsetHeight;
          const bodyHeight = (height - headerHeight);
          const gridWrapper = this.$el.querySelector('.el-table__body-wrapper');
          gridWrapper.style.height = bodyHeight + 'px';
          this.$el.style.height = height + 'px';
          if (this.$refs.fixed) {
            this.$refs.fixed.style.height = height + 'px';
          }
          const fixedBodyWrapper = this.$el.querySelector('.el-table__fixed-body-wrapper');
          if (fixedBodyWrapper) {
            fixedBodyWrapper.style.height = (this.showHScrollBar ? gridWrapper.offsetHeight - this.currentGutterWidth : gridWrapper.offsetHeight) + 'px';
          }
        }
      },

      handleMouseLeave() {
        this.hoverRowIndex = null;
        const hoverState = this.hoverState;
        if (hoverState) {
          this.hoverState = null;
        }
      },

      updateScrollInfo() {
        this.$nextTick(() => {
          if (this.$el) {
            let gridBodyWrapper = this.$el.querySelector('.el-table__body-wrapper');
            let gridBody = this.$el.querySelector('.el-table__body-wrapper .el-table__body');

            this.showVScrollBar = gridBody.offsetHeight > gridBodyWrapper.offsetHeight;
          }
        });
      },

      doRender() {
        let bodyWrapper = this.$el.querySelector('.el-table__body-wrapper');
        let headerWrapper = this.$el.querySelector('.el-table__header-wrapper');
        const el = this.$el;

        if (!this.$ready) {
          bodyWrapper.addEventListener('scroll', function() {
            headerWrapper.scrollLeft = this.scrollLeft;
            let fixedBodyWrapper = el.querySelector('.el-table__fixed-body-wrapper');
            if (fixedBodyWrapper) {
              fixedBodyWrapper.scrollTop = this.scrollTop;
            }
          });
        }

        this.$calcColumns();

        if (!this.$ready && this.fit) {
          this.windowResizeListener = throttle(100, () => {
            this.$calcColumns();
          });
          window.addEventListener('resize', this.windowResizeListener);
        }

        this.$nextTick(() => {
          if (this.height) {
            this.$calcHeight(this.height);
          }
        });
      }
    },

    created() {
      this.gridId = 'grid_' + gridIdSeed + '_';

      if (GUTTER_WIDTH === undefined) {
        GUTTER_WIDTH = getScrollBarWidth();
      }
      this.currentGutterWidth = GUTTER_WIDTH;

      this.debouncedReRender = debounce(50, () => {
        this.doRender();
      });
    },

    computed: {
      selection() {
        if (this.selectionMode === 'multiple') {
          const data = this.tableData || [];
          return data.filter(item => item.$selected === true);
        } else if (this.selectionMode === 'single') {
          return this.selected;
        } else {
          return null;
        }
      },

      fixedColumns() {
        const columns = this.columns || [];
        const fixedColumnCount = this.fixedColumnCount;
        return columns.filter(function(item, index) {
          return index < fixedColumnCount;
        });
      },

      filterData() {
        return orderBy(this.tableData, this.sortingProperty, this.sortingDirection);
      }
    },

    watch: {
      fixedColumnCount() {
        this.debouncedReRender();
      },

      selection(val) {
        this.$emit('selectionchange', val);
        if (this.selectionMode === 'multiple') {
          this.allSelected = this.tableData.length > 0 && val.length === this.tableData.length;
        }
      },

      visibleFilter(val) {
        this.$broadcast('toggleFilterPopup', val);
      },

      height(value) {
        this.$calcHeight(value);
      },

      data: {
        immediate: true,
        handler(val) {
          if (val && this.selectionMode === 'multiple') {
            this.tableData = val.map(item => objectAssign({ '$selected': false }, item));
          } else {
            this.tableData = val;
          }
        }
      },

      tableData(newVal) {
        this.$nextTick(_ => this.doRender());
        this.doOnDataChange(newVal);
        this.updateScrollInfo();
      }
    },

    destroyed() {
      if (this.styleNode) {
        this.styleNode.parentNode.removeChild(this.styleNode);
      }

      if (this.windowResizeListener) {
        window.removeEventListener('resize', this.windowResizeListener);
      }
    },

    mounted() {
      const styleNode = document.createElement('style');
      styleNode.type = 'text/css';
      styleNode.rel = 'stylesheet';
      styleNode.title = 'Grid Column Style';
      document.getElementsByTagName('head')[0].appendChild(styleNode);

      this.styleNode = styleNode;

      this.doRender();

      this.$ready = true;
      if (this.tableData) {
        this.doOnDataChange(this.tableData);
      }
      this.updateScrollInfo();
      if (this.fixedColumnCount > 0) {
        this.$nextTick(() => {
          const style = this.$refs.fixed.style;
          if (!style) return;
          // style.height = this.$el.clientHeight + 'px';
          // 存在横向滚动条的时候应该要减去滚动条的高度
          style.height = (this.showHScrollBar ? this.$el.clientHeight - this.currentGutterWidth : this.$el.clientHeight) + 'px';
          // 若非固定列中的某行内容被撑高, 需要固定列中对应行高度与其保持一致
          let bodyHeight = this.$el.querySelector('.el-table__body-wrapper').offsetHeight;
          let fixedBodyHeight = this.$el.querySelector('.el-table__fixed-body-wrapper').offsetHeight;
          if (bodyHeight !== fixedBodyHeight) {
            let bodyTrs = this.$el.querySelector('.el-table__body-wrapper').querySelectorAll('tr');
            let fixedBodyTrs = this.$el.querySelector('.el-table__fixed-body-wrapper').querySelectorAll('tr');
            bodyTrs.forEach((tr, index) => {
              let trHeight = tr.offsetHeight;
              let fixedTrHeight = fixedBodyTrs[index].offsetHeight;
              if (trHeight !== fixedTrHeight) {
                fixedBodyTrs[index].style.height = trHeight + 'px';
              }
            });
          }
        });
      }
    },

    data() {
      return {
        tableData: this.data,
        showHScrollBar: false,
        showVScrollBar: false,
        hoverRowIndex: null,
        headerHeight: 35,
        selected: null,
        allSelected: false,
        columns: [],
        resizeProxyVisible: false,
        bodyWidth: '',
        fixedBodyWidth: '',
        sortingColumn: null,
        sortingProperty: null,
        sortingDirection: 1,
        visibleFilter: null,
        currentGutterWidth: this.gutterWidth
      };
    }
  };
</script>
