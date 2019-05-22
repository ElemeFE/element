import Vue from 'vue';
import Wachter from './watcher';
import { arrayFind } from 'element-ui/src/utils/util';

Wachter.prototype.mutations = {
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
      this.assertRowkey();
      this.updateSelectionByRowKey();
    }
    this.updateAllSelected();

    this.modifiers.updateScrollY();
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
    const ingore = { filter: true };
    this.execQuery(ingore);

    if (!options || !options.silent) {
      this.table.$emit('sort-change', {
        column: this.states.sortingColumn,
        prop: this.states.sortProp,
        order: this.states.sortOrder
      });
    }

    this.modifiers.updateScrollY();
  },

  filterChange(states, options) {
    let { column, values, silent } = options;
    const newFilters = this.updateFilters(column, values);

    this.execQuery();

    if (!silent) {
      this.table.$emit('filter-change', newFilters);
    }

    this.modifiers.updateScrollY();
  },

  toggleAllSelection() {
    this.toggleAllSelection();
  },

  rowSelectedChanged(states, row) {
    this.toggleRowSelection(row);
    this.updateAllSelected();
  },

  // throttle
  setHoverRow(states, row) {
    states.hoverRow = row;
  },

  // throttle
  setCurrentRow(states, row) {
    const oldCurrentRow = states.currentRow;
    states.currentRow = row;

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow);
    }
  }
};

Wachter.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};

// 额外的 DOM 操作都放在 modifiers 中
Wachter.prototype.modifiers = {
  updateScrollY() {
    Vue.nextTick(() => {
      this.table.updateScrollY();
    });
  },

  updateCurrentRow() {
    console.log('todo ===> ');
  }
};

export default Wachter;
