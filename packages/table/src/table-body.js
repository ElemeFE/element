const getColumnById = function(grid, columnId) {
  let column = null;
  grid.columns.forEach(function(item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

const getColumnByCell = function(grid, cell) {
  const matches = (cell.className || '').match(/grid_[^\s]+/gm);
  if (matches) {
    return getColumnById(grid, matches[0]);
  }
  return null;
};

import { getValueByPath, getCell, orderBy, getChild } from './util';

export default {
  props: {
    columns: {},
    data: {},
    fixed: {},
    selection: {
      default() {
        return [];
      }
    }
  },

  render(h) {
    return (
      <table
        class="el-table__body"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <tbody>
          {
            this._l(this.data, (row, $index) =>
              <tr
                on-click={ ($event) => this.handleClick($event, row) }
                on-mouseenter={ _ => this.handleMouseEnter($index) }
                style={ this.getCustomStyle(row) }
                class={{
                  'current-row': row === this.$parent.selected,
                  'hover': this.$parent.$parent.hoverRowIndex === $index
                }}>
                {
                  this._l(this.columns, (column) =>
                    <td
                      style={ this.getColumnWhiteSpaceStyle(column) }
                      class={ [column.id, column.align] }
                      on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                      on-mouseleave={ this.handleCellMouseLeave }>
                      {
                        column.template
                          ? column.template.call(this._renderProxy, h, { row, column, $index, _self: this.$parent.$vnode.context })
                          : <div class="cell">{ this.$getPropertyText(row, column.property, column.id) }</div>
                      }
                    </td>
                  ).concat(this.fixed ? <td class="gutter" /> : '')
                }
              </tr>
            )
          }
        </tbody>
      </table>
    );
  },

  data() {
    return {
      criteria: this.$parent.customCriteria,
      colors: this.$parent.customBackgroundColors,
      tooltipDisabled: true
    };
  },

  filters: {
    orderBy
  },

  methods: {
    getColumnWhiteSpaceStyle(column) {
      return column.showTooltipWhenOverflow ? { 'white-space': 'nowrap' } : {};
    },

    checkProperty(row) {
      if (this.criteria && this.criteria.length > 0) {
        for (let i = 0, len = this.criteria.length; i < len; i++) {
          if (row[this.criteria[i]] === true) {
            return i;
          }
        }
      }
      return -1;
    },

    getCustomStyle(row) {
      if (!this.criteria || !this.colors || this.criteria.length !== this.colors.length) {
        return {};
      }
      let criterionIndex = this.checkProperty(row);
      return criterionIndex > -1 ? { 'background-color': this.colors[criterionIndex] } : {};
    },

    handleCellMouseEnter(event, row) {
      let grid = this.$parent;
      const cell = getCell(event);

      if (cell) {
        const column = getColumnByCell(grid, cell);
        const hoverState = grid.hoverState = { cell: cell, column: column, row: row };
        grid.$emit('cellmouseenter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = getChild(event);

      this.tooltipDisabled = cellChild.scrollWidth <= cellChild.offsetWidth;
    },

    handleCellMouseLeave(event) {
      let grid = this.$parent;
      const cell = getCell(event);

      if (cell) {
        const oldHoverState = grid.hoverState;
        grid.$emit('cellmouseleave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
      }
    },

    handleMouseEnter(index) {
      this.$parent.hoverRowIndex = index;
    },

    handleClick(event, row) {
      let grid = this.$parent;
      const cell = getCell(event);

      if (cell) {
        const column = getColumnByCell(grid, cell);
        if (column) {
          grid.$emit('cellclick', row, column, cell, event);
        }
      }

      if (grid.selectionMode === 'single') {
        grid.selected = row;
      }

      grid.$emit('rowclick', row, event);
    },

    handleCreate(vm) {
      document.body.appendChild(vm.$refs.popper);
      vm.updatePopper();
    },

    $getPropertyText(row, property, columnId) {
      let grid = this.$parent;
      const column = getColumnById(grid, columnId);
      if (column && column.formatter) {
        return column.formatter(row, column);
      }

      return getValueByPath(row, property);
    }
  }
};
