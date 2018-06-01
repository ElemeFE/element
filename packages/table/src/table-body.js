import { getCell, getColumnByCell, getRowIdentity } from './util';
import { getStyle, hasClass, addClass, removeClass } from 'element-ui/src/utils/dom';
import ElCheckbox from 'element-ui/packages/checkbox';
import ElTooltip from 'element-ui/packages/tooltip';
import debounce from 'throttle-debounce/debounce';
import LayoutObserver from './layout-observer';

export default {
  name: 'ElTableBody',

  mixins: [LayoutObserver],

  components: {
    ElCheckbox,
    ElTooltip
  },

  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },

  render(h) {
    const columnsHidden = this.columns.map((column, index) => this.isColumnHidden(index));
    return (
      <table
        class="el-table__body"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(this.columns, column => <col name={ column.id } />)
          }
        </colgroup>
        <tbody>
          {
            this._l(this.data, (row, $index) =>
              [<tr
                style={ this.rowStyle ? this.getRowStyle(row, $index) : null }
                key={ this.table.rowKey ? this.getKeyOfRow(row, $index) : $index }
                on-dblclick={ ($event) => this.handleDoubleClick($event, row) }
                on-click={ ($event) => this.handleClick($event, row) }
                on-contextmenu={ ($event) => this.handleContextMenu($event, row) }
                on-mouseenter={ _ => this.handleMouseEnter($index) }
                on-mouseleave={ _ => this.handleMouseLeave() }
                class={ [this.getRowClass(row, $index)] }>
                {
                  this._l(this.columns, (column, cellIndex) => {
                    const { rowspan, colspan } = this.getSpan(row, column, $index, cellIndex);
                    if (!rowspan || !colspan) {
                      return '';
                    } else {
                      if (rowspan === 1 && colspan === 1) {
                        return (
                          <td
                            style={ this.getCellStyle($index, cellIndex, row, column) }
                            class={ this.getCellClass($index, cellIndex, row, column) }
                            on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                            on-mouseleave={ this.handleCellMouseLeave }>
                            {
                              column.renderCell.call(
                                this._renderProxy,
                                h,
                                {
                                  row,
                                  column,
                                  $index,
                                  store: this.store,
                                  _self: this.context || this.table.$vnode.context
                                },
                                columnsHidden[cellIndex]
                              )
                            }
                          </td>
                        );
                      } else {
                        return (
                          <td
                            style={ this.getCellStyle($index, cellIndex, row, column) }
                            class={ this.getCellClass($index, cellIndex, row, column) }
                            rowspan={ rowspan }
                            colspan={ colspan }
                            on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                            on-mouseleave={ this.handleCellMouseLeave }>
                            {
                              column.renderCell.call(
                                this._renderProxy,
                                h,
                                {
                                  row,
                                  column,
                                  $index,
                                  store: this.store,
                                  _self: this.context || this.table.$vnode.context
                                },
                                columnsHidden[cellIndex]
                              )
                            }
                          </td>
                        );
                      }
                    }
                  })
                }
              </tr>,
              this.store.isRowExpanded(row)
                ? (<tr>
                  <td colspan={ this.columns.length } class="el-table__expanded-cell">
                    { this.table.renderExpanded ? this.table.renderExpanded(h, { row, $index, store: this.store }) : ''}
                  </td>
                </tr>)
                : ''
              ]
            ).concat(
              <el-tooltip effect={ this.table.tooltipEffect } placement="top" ref="tooltip" content={ this.tooltipContent }></el-tooltip>
            )
          }
        </tbody>
      </table>
    );
  },

  watch: {
    'store.states.hoverRow'(newVal, oldVal) {
      if (!this.store.states.isComplex) return;
      const el = this.$el;
      if (!el) return;
      const tr = el.querySelector('tbody').children;
      const rows = [].filter.call(tr, row => hasClass(row, 'el-table__row'));
      const oldRow = rows[oldVal];
      const newRow = rows[newVal];
      if (oldRow) {
        removeClass(oldRow, 'hover-row');
      }
      if (newRow) {
        addClass(newRow, 'hover-row');
      }
    },
    'store.states.currentRow'(newVal, oldVal) {
      if (!this.highlight) return;
      const el = this.$el;
      if (!el) return;
      const data = this.store.states.data;
      const tr = el.querySelector('tbody').children;
      const rows = [].filter.call(tr, row => hasClass(row, 'el-table__row'));
      const oldRow = rows[data.indexOf(oldVal)];
      const newRow = rows[data.indexOf(newVal)];
      if (oldRow) {
        removeClass(oldRow, 'current-row');
      } else {
        [].forEach.call(rows, row => removeClass(row, 'current-row'));
      }
      if (newRow) {
        addClass(newRow, 'current-row');
      }
    }
  },

  computed: {
    table() {
      return this.$parent;
    },

    data() {
      return this.store.states.data;
    },

    columnsCount() {
      return this.store.states.columns.length;
    },

    leftFixedLeafCount() {
      return this.store.states.fixedLeafColumnsLength;
    },

    rightFixedLeafCount() {
      return this.store.states.rightFixedLeafColumnsLength;
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

  data() {
    return {
      tooltipContent: ''
    };
  },

  created() {
    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper());
  },

  methods: {
    getKeyOfRow(row, index) {
      const rowKey = this.table.rowKey;
      if (rowKey) {
        return getRowIdentity(row, rowKey);
      }
      return index;
    },

    isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return (index < this.leftFixedLeafCount) || (index >= this.columnsCount - this.rightFixedLeafCount);
      }
    },

    getSpan(row, column, rowIndex, columnIndex) {
      let rowspan = 1;
      let colspan = 1;

      const fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex
        });

        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if (typeof result === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }

      return {
        rowspan,
        colspan
      };
    },

    getRowStyle(row, rowIndex) {
      const rowStyle = this.table.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row,
          rowIndex
        });
      }
      return rowStyle;
    },

    getRowClass(row, rowIndex) {
      const currentRow = this.store.states.currentRow;
      const classes = currentRow === row ? ['el-table__row', 'current-row'] : ['el-table__row'];

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped');
      }
      const rowClassName = this.table.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
          row,
          rowIndex
        }));
      }

      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
      }

      return classes.join(' ');
    },

    getCellStyle(rowIndex, columnIndex, row, column) {
      const cellStyle = this.table.cellStyle;
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        });
      }
      return cellStyle;
    },

    getCellClass(rowIndex, columnIndex, row, column) {
      const classes = [column.id, column.align, column.className];

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden');
      }

      const cellClassName = this.table.cellClassName;
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName);
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        }));
      }

      return classes.join(' ');
    },

    handleCellMouseEnter(event, row) {
      const table = this.table;
      const cell = getCell(event);

      if (cell) {
        const column = getColumnByCell(table, cell);
        const hoverState = table.hoverState = {cell, column, row};
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell');
      if (!hasClass(cellChild, 'el-tooltip')) {
        return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
        (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
        const tooltip = this.$refs.tooltip;
        // TODO 会引起整个 Table 的重新渲染，需要优化
        this.tooltipContent = cell.textContent || cell.innerText;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },

    handleCellMouseLeave(event) {
      const tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      const cell = getCell(event);
      if (!cell) return;

      const oldHoverState = this.table.hoverState || {};
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },

    handleMouseEnter(index) {
      this.store.commit('setHoverRow', index);
    },

    handleMouseLeave() {
      this.store.commit('setHoverRow', null);
    },

    handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },

    handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },

    handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },

    handleEvent(event, row, name) {
      const table = this.table;
      const cell = getCell(event);
      let column;
      if (cell) {
        column = getColumnByCell(table, cell);
        if (column) {
          table.$emit(`cell-${name}`, row, column, cell, event);
        }
      }
      table.$emit(`row-${name}`, row, event, column);
    },

    handleExpandClick(row, e) {
      e.stopPropagation();
      this.store.toggleRowExpansion(row);
    }
  }
};
