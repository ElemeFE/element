import ElCheckbox from 'element-ui/packages/checkbox';
import ElTag from 'element-ui/packages/tag';
import Vue from 'vue';
import FilterPanel from './filter-panel.vue';

export default {
  name: 'el-table-header',

  render(h) {
    return (
      <table
        class="el-table__header"
        cellspacing="0"
        cellpadding="0"
        border="0">
        {
          this._l(this.columns, column =>
            <col
              name={ column.id }
              width={ column.realWidth || column.width }
            />)
        }
        {
          !this.fixed && this.layout.gutterWidth
            ? <col name="gutter" width={ this.layout.scrollY ? this.layout.gutterWidth : '' }></col>
            : ''
        }
        <thead>
          <tr>
            {
              this._l(this.columns, (column, cellIndex) =>
                <th
                  on-mousemove={ ($event) => this.handleMouseMove($event, column) }
                  on-mouseout={ this.handleMouseOut }
                  on-mousedown={ ($event) => this.handleMouseDown($event, column) }
                  class={ [column.id, column.order, column.align, this.isCellHidden(cellIndex) ? 'is-hidden' : ''] }>
                  <div class={ ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : ''] }>
                  {
                    column.renderHeader
                      ? column.renderHeader.call(this._renderProxy, h, { column, $index: cellIndex, store: this.store, _self: this.$parent.$vnode.context })
                      : column.label
                  }
                  {
                    column.sortable
                      ? <span class="caret-wrapper" on-click={ ($event) => this.handleHeaderClick($event, column) }>
                          <i class="sort-caret ascending"></i>
                          <i class="sort-caret descending"></i>
                        </span>
                      : ''
                  }
                  {
                    column.filterable
                      ? <span class="el-table__column-filter-trigger" on-click={ ($event) => this.handleFilterClick($event, column) }><i class={ ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] }></i></span>
                      : ''
                  }
                  </div>
                </th>
              )
            }
            {
              !this.fixed && this.layout.gutterWidth
                ? <th class="gutter" style={{ width: this.layout.scrollY ? this.layout.gutterWidth + 'px' : '0' }}></th>
                : ''
            }
          </tr>
        </thead>
      </table>
    );
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    layout: {
      required: true
    },
    border: Boolean
  },

  components: {
    ElCheckbox,
    ElTag
  },

  computed: {
    isAllSelected() {
      return this.store.states.isAllSelected;
    },

    columnsCount() {
      return this.store.states.columns.length;
    },

    leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },

    rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },

    columns() {
      return this.store.states.columns;
    }
  },

  created() {
    this.filterPanels = {};
  },

  beforeDestroy() {
    const panels = this.filterPanels;
    for (let prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },

  methods: {
    isCellHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedCount;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    },

    toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    },

    handleFilterClick(event, column) {
      event.stopPropagation();
      const target = event.target;
      const cell = target.parentNode;
      const table = this.$parent;

      let filterPanel = this.filterPanels[column.id];

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }

      if (!filterPanel) {
        filterPanel = new Vue(FilterPanel);
        this.filterPanels[column.id] = filterPanel;

        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        filterPanel.$mount(document.createElement('div'));
      }

      setTimeout(() => {
        filterPanel.showPopper = true;
      }, 16);
    },

    handleMouseDown(event, column) {
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        const tableEl = this.$parent.$el;
        const tableLeft = tableEl.getBoundingClientRect().left;
        const columnEl = this.$el.querySelector(`th.${column.id}`);
        const columnRect = columnEl.getBoundingClientRect();
        const minLeft = columnRect.left - tableLeft + 30;

        columnEl.classList.add('noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft
        };

        const resizeProxy = this.$parent.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function() { return false; };
        document.ondragstart = function() { return false; };

        const handleMouseMove = (event) => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft;
          const proxyLeft = this.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        const handleMouseUp = () => {
          if (this.dragging) {
            const finalLeft = parseInt(resizeProxy.style.left, 10);
            const columnWidth = finalLeft - this.dragState.startColumnLeft;
            column.width = column.realWidth = columnWidth;

            this.store.scheduleLayout();

            document.body.style.cursor = '';
            this.dragging = false;
            this.draggingColumn = null;
            this.dragState = {};

            this.$parent.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function() {
            columnEl.classList.remove('noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },

    handleMouseMove(event, column) {
      let target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        let rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          this.draggingColumn = null;
        }
      }
    },

    handleMouseOut() {
      document.body.style.cursor = '';
    },

    handleHeaderClick(event, column) {
      let target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if (target.classList.contains('noclick')) {
          target.classList.remove('noclick');
          return;
        }
      }

      if (!column.sortable) return;

      const states = this.store.states;
      let sortProp = states.sortProp;
      let sortOrder;
      const sortingColumn = states.sortingColumn;

      if (sortingColumn !== column) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }

      if (!column.order) {
        sortOrder = column.order = 'ascending';
      } else if (column.order === 'ascending') {
        sortOrder = column.order = 'descending';
      } else {
        sortOrder = column.order = null;
        states.sortingColumn = null;
        sortProp = null;
      }
      states.sortProp = sortProp;
      states.sortOrder = sortOrder;

      this.store.commit('changeSortCondition');
    }
  },

  data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
};
