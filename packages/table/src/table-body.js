import { getCell, getColumnByCell, getRowIdentity } from './util';
import ElInput from 'element-ui/packages/input';
import debounce from 'throttle-debounce/debounce';

export default {
  props: {
    store: {
      required: true
    },
    context: {},
    layout: {
      required: true
    },
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean,
    coloumInputFilter: Boolean
  },

  render(h) {
    const columnsHidden = this.columns.map((column, index) => this.isColumnHidden(index));
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
            (this.coloumInputFilter)
            ? <tr>
                {
                  this._l(this.columns, (column, cellIndex) =>
                    <td class="el-table-td__filter">
                      {
                        column.type === 'selection'
                        ? null
                        : <el-input
                            value={this.columnfilters[column.id] && this.columnfilters[column.id].value}
                            on-change={
                              debounce(300, (value, oldValue) =>
                                this.handleFilter(value, oldValue, column, cellIndex)
                            )} />
                      }
                    </td>
                  )
                }
              </tr>
            : null
          }
          {
            this._l(this.data, (row, $index) =>
              <tr
                style={ this.rowStyle ? this.getRowStyle(row, $index) : null }
                key={ this.$parent.rowKey ? this.getKeyOfRow(row, $index) : $index }
                on-click={ ($event) => this.handleClick($event, row) }
                on-mouseenter={ _ => this.handleMouseEnter($index) }
                on-mouseleave={ _ => this.handleMouseLeave() }
                class={ this.getRowClass(row, $index) }>
                {
                  this._l(this.columns, (column, cellIndex) =>
                    <td
                      class={ [column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden' : '' ] }
                      on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                      on-mouseleave={ this.handleCellMouseLeave }>
                      {
                        column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.context || this.$parent.$vnode.context })
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

  watch: {
    'store.states.hoverRow'(newVal, oldVal) {
      if (!this.store.states.isComplex) return;
      const el = this.$el;
      if (!el) return;
      const rows = el.querySelectorAll('tbody > tr');
      const oldRow = rows[oldVal];
      const newRow = rows[newVal];
      if (oldRow) {
        oldRow.classList.remove('hover-row');
      }
      if (newRow) {
        newRow.classList.add('hover-row');
      }
    },
    'store.states.currentRow'(newVal, oldVal) {
      if (!this.highlight) return;
      const el = this.$el;
      if (!el) return;
      const data = this.store.states.data;
      const rows = el.querySelectorAll('tbody > tr');
      const oldRow = rows[data.indexOf(oldVal)];
      const newRow = rows[data.indexOf(newVal)];
      if (oldRow) {
        oldRow.classList.remove('current-row');
      }
      if (newRow) {
        newRow.classList.add('current-row');
      }
    }
  },

  components: {
    ElInput
  },

  computed: {
    data() {
      return this.store.states.data;
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
      tooltipDisabled: true,
      columnfilters: {}
    };
  },

  methods: {
    getKeyOfRow(row, index) {
      const rowKey = this.$parent.rowKey;
      if (rowKey) {
        return getRowIdentity(row, rowKey);
      }
      return index;
    },

    isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedCount;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    },

    getRowStyle(row, index) {
      const rowStyle = this.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, row, index);
      }
      return rowStyle;
    },

    getRowClass(row, index) {
      const classes = [];

      const rowClassName = this.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, row, index) || '');
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

    handleFilter(value, oldValue, column, cellIndex) {
      if (this.columnfilters[column.id] && value === this.columnfilters[column.id].value) {
        return;
      }
      const table = this.$parent;
      this.columnfilters[column.id] = {
        value,
        property: column.property
      };
      this.store.commit('columnFilterChange', {
        filters: this.columnfilters
      });

      table.$emit('column-filter-change', this.columnfilters);
    }
  }
};
