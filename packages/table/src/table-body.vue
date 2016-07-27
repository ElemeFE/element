<template>
  <table class="el-table__body" cellspacing="0" cellpadding="0" border="0">
    <tbody>
    <tr v-for="row in data"
      @click="handleClick($event, row)" @mouseenter="handleMouseEnter($index)"
      :class="{
        'current-row': row === $parent.$parent.selected,
        hover: $parent.$parent.hoverRowIndex === $index,
        'positive-row': row.$positive,
        'info-row': row.$info,
        'warning-row': row.$warning,
        'negative-row': row.$negative
      }">
      <td v-for="column in columns" :class="column.id"
          @mouseenter="handleCellMouseEnter($event, row)"
          @mouseleave="handleCellMouseLeave($event)">
        <partial v-if="column.template" :name="'template:' + column.id"></partial>
        <partial v-else name="template:default"></partial>
      </td>
      <td class="gutter" v-if="!fixed"></td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
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

    data() {
      return {
        tooltipDisabled: true
      };
    },

    filters: {
      orderBy
    },

    partials: {
      'template:default': '<div class="cell">{{ $getPropertyText(row, column.property, column.id) }}</div>'
    },

    methods: {
      handleCellMouseEnter(event, row) {
        let grid = this.$parent;
        const cell = getCell(event);

        if (cell) {
          const column = getColumnByCell(grid, cell);
          const hoverState = grid.hoverState = { cell: cell, column: column, row: row };
          grid.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
        }

        // 判断是否text-overflow, 如果是就显示tooltip
        const cellChild = getChild(event);
        if (cellChild.scrollWidth > cellChild.offsetWidth) {
          this.tooltipDisabled = false;
        } else {
          this.tooltipDisabled = true;
        }
      },

      handleCellMouseLeave(event) {
        let grid = this.$parent;
        const cell = getCell(event);

        if (cell) {
          const oldHoverState = grid.hoverState;
          grid.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
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
            grid.$emit('cell-click', row, column, cell, event);
          }
        }

        if (grid.selectionMode === 'single') {
          grid.selected = row;
          grid.$emit('selection-change', row);
        }

        grid.$emit('row-click', row, event);
      },

      handleCreate(vm) {
        document.body.appendChild(vm.popper);
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
</script>