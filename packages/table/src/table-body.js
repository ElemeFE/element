import { getValueByPath, getCell } from './util';

const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach(function(item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

const getColumnByCell = function(table, cell) {
  const matches = (cell.className || '').match(/table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

export default {
  props: {
    store: {
      required: true
    },
    layout: {
      required: true
    },
    rowClassName: [String, Function],
    fixed: String
  },

  render(h) {
    return (
      <table
        class="el-table__body"
        cellspacing="0"
        cellpadding="0"
        border="0">
        {
          this._l(this.columns, column =>
            <colgroup
              name={ column.id }
              width={ column.realWidth || column.width }
            />)
        }
        <tbody>
          {
            this._l(this.data, (row, $index) =>
              <tr
                on-click={ ($event) => this.handleClick($event, row) }
                on-mouseenter={ _ => this.handleMouseEnter($index) }
                class={ this.getRowClass(row, $index) }>
                {
                  this._l(this.columns, (column) =>
                    <td
                      style={ this.getColumnWhiteSpaceStyle(column) }
                      class={ [column.id, column.align] }
                      on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                      on-mouseleave={ this.handleCellMouseLeave }>
                      {
                        column.template
                          ? column.template.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.$parent.$vnode.context })
                          : <div class="cell">{ this.getCellContent(row, column.property, column.id) }</div>
                      }
                    </td>
                  )
                }
                {
                  !this.fixed && this.layout.scrollY && this.layout.gutterWidth ? <td class="gutter" /> : ''
                }
              </tr>
            )
          }
        </tbody>
      </table>
    );
  },

  computed: {
    data() {
      return this.store.states.data;
    },
    hoverRowIndex() {
      return this.store.states.hoverRow;
    },
    currentRow() {
      return this.store.states.currentRow;
    },
    columns() {
      if (this.fixed === true || this.fixed === 'left') {
        return this.store.states.fixedColumns;
      } else if (this.fixed === 'right') {
        return this.store.states.rightFixedColumns;
      }
      return this.store.states.columns;
    }
  },

  data() {
    return {
      tooltipDisabled: true
    };
  },

  methods: {
    getRowClass(row, index) {
      const classes = [];
      if (row === this.currentRow) {
        classes.push('current-row');
      }
      if (this.hoverRowIndex === index) {
        classes.push('hover-row');
      }

      const rowClassName = this.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.apply(null, [row, index]) || '');
      }

      return classes.join(' ');
    },

    getColumnWhiteSpaceStyle(column) {
      return column.showTooltipWhenOverflow ? { 'white-space': 'nowrap' } : {};
    },

    handleCellMouseEnter(event, row) {
      const table = this.$parent;
      const cell = getCell(event);

      if (cell) {
        const column = getColumnByCell(table, cell);
        const hoverState = table.hoverState = { cell, column, row };
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell');

      this.tooltipDisabled = cellChild.scrollWidth <= cellChild.offsetWidth;
    },

    handleCellMouseLeave(event) {
      const cell = getCell(event);
      if (!cell) return;

      const oldHoverState = this.$parent.hoverState;
      this.$parent.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },

    handleMouseEnter(index) {
      this.store.commit('setHoverRow', index);
    },

    handleClick(event, row) {
      const table = this.$parent;
      const cell = getCell(event);

      if (cell) {
        const column = getColumnByCell(table, cell);
        if (column) {
          table.$emit('cell-click', row, column, cell, event);
        }
      }

      table.$emit('row-click', row, event);
    },

    getCellContent(row, property, columnId) {
      const column = getColumnById(this.$parent, columnId);
      if (column && column.formatter) {
        return column.formatter(row, column);
      }

      return getValueByPath(row, property);
    }
  }
};
