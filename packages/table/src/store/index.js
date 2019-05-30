import Vue from 'vue';
import Watcher from './watcher';
import { arrayFind } from 'element-ui/src/utils/util';

Watcher.prototype.mutations = {
  setData(states, data) {
    const dataInstanceChanged = states._data !== data;
    states._data = data;

    this.execQuery();
    // 数据变化，更新部分数据。
    // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
    this.updateCurrentRow();
    this.updateExpandRows();
    if (!states.reserveSelection) {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
    } else {
      this.assertRowKey();
      this.updateSelectionByRowKey();
    }
    this.updateAllSelected();

    this.updateTableScrollY();
  },

  insertColumn(states, column, index, parent) {
    let array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics insert column
      this.scheduleLayout();
    }
  },

  removeColumn(states, column, parent) {
    let array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (array) {
      array.splice(array.indexOf(column), 1);
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics remove column
      this.scheduleLayout();
    }
  },

  sort(states, options) {
    const { prop, order } = options;
    if (prop) {
      // TODO：nextTick 是否有必要？
      Vue.nextTick(() => {
        const column = arrayFind(states.columns, column => column.property === prop);
        if (column) {
          column.order = order;
          this.updateSort(column, prop, order);
          this.commit('changeSortCondition');
        }
      });
    }
  },

  changeSortCondition(states, options) {
    // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
    const { sortingColumn: column, sortProp: prop, sortOrder: order } = states;
    if (order === null) {
      states.sortingColumn = null;
      states.sortProp = null;
    }
    const ingore = { filter: true };
    this.execQuery(ingore);

    if (!options || !options.silent) {
      this.table.$emit('sort-change', {
        column,
        prop,
        order
      });
    }

    this.updateTableScrollY();
  },

  filterChange(states, options) {
    let { column, values, silent } = options;
    const newFilters = this.updateFilters(column, values);

    this.execQuery();

    if (!silent) {
      this.table.$emit('filter-change', newFilters);
    }

    this.updateTableScrollY();
  },

  toggleAllSelection() {
    this.toggleAllSelection();
  },

  rowSelectedChanged(states, row) {
    this.toggleRowSelection(row);
    this.updateAllSelected();
  },

  setHoverRow(states, row) {
    states.hoverRow = row;
  },

  setCurrentRow(states, row) {
    const oldCurrentRow = states.currentRow;
    states.currentRow = row;

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow);
    }
  }
};

Watcher.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};

Watcher.prototype.updateTableScrollY = function() {
  Vue.nextTick(this.table.updateScrollY);
};

export default Watcher;
