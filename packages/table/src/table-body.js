import { getValueByPath, getCell, getColumnById, getColumnByCell } from './util';

export default {
  props: {
    store: {
      required: true
    },
    layout: {
      required: true
    },
    rowClassName: [String, Function],
    fixed: String,
    highlight: Boolean
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
            <col
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
                on-mouseleave={ _ => this.handleMouseLeave() }
                class={ this.getRowClass(row, $index) }>
                {
                  this._l(this.columns, (column, cellIndex) =>
                    <td
                      class={ [column.id, column.align, this.isCellHidden(cellIndex) ? 'is-hidden' : '' ] }
                      on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                      on-mouseleave={ this.handleCellMouseLeave }>
                      {
                        column.renderCell
                          ? column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.$parent.$vnode.context })
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

  data() {
    return {
      tooltipDisabled: true
    };
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

    getRowClass(row, index) {
      const classes = [];
      if (this.hoverRowIndex === index) {
        classes.push('hover-row');
      }

      const rowClassName = this.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.apply(null, [row, index]) || '');
      }

      const currentRow = this.store.states.currentRow;
      if (this.highlight && currentRow === row) {
        classes.push('current-row');
      }

      return classes.join(' ');
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

    handleMouseLeave() {
      this.store.commit('setHoverRow', null);
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

      this.store.commit('setCurrentRow', row);

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
