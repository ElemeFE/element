import Vue from 'vue';
import debounce from 'throttle-debounce/debounce';
import { orderBy } from './util';

const TableStore = function(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    _columns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    _data: null,
    data: null,
    sortCondition: {
      column: null,
      property: null,
      direction: null
    },
    isAllSelected: false,
    selection: null,
    allowNoSelection: false,
    selectionMode: 'none',
    selectable: null,
    currentRow: null,
    hoverRow: null
  };

  for (let prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop];
    }
  }
};

TableStore.prototype.mutations = {
  setData(states, data) {
    states._data = data;
    if (data && data[0] && typeof data[0].$selected === 'undefined') {
      data.forEach((item) => Vue.set(item, '$selected', false));
    }
    states.data = orderBy((data || []), states.sortCondition.property, states.sortCondition.direction);
    this.updateSelectedRow();

    if (states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0) Vue.nextTick(() => this.table.syncHeight());
    Vue.nextTick(() => this.table.updateScrollY());
  },

  changeSortCondition(states) {
    states.data = orderBy((states._data || []), states.sortCondition.property, states.sortCondition.direction);

    if (states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0) Vue.nextTick(() => this.table.syncHeight());
    Vue.nextTick(() => this.table.updateScrollY());
  },

  insertColumn(states, column, index) {
    let _columns = states._columns;
    if (typeof index !== 'undefined') {
      _columns.splice(index, 0, column);
    } else {
      _columns.push(column);
    }
    if (column.type === 'selection') {
      states.selectable = column.selectable;
    }

    this.scheduleLayout();
  },

  removeColumn(states, column) {
    let _columns = states._columns;
    if (_columns) {
      _columns.splice(_columns.indexOf(column), 1);
    }

    this.scheduleLayout();
  },

  setHoverRow(states, row) {
    states.hoverRow = row;
  },

  rowSelectedChanged(states) {
    let isAllSelected = true;
    const data = states.data || [];
    for (let i = 0, j = data.length; i < j; i++) {
      const item = data[i];
      if (states.selectable) {
        if (states.selectable.call(null, item, i) && !item.$selected) {
          isAllSelected = false;
          break;
        }
      } else {
        if (!item.$selected) {
          isAllSelected = false;
          break;
        }
      }
    }
    states.isAllSelected = isAllSelected;
  },

  toggleAllSelection: debounce(10, function(states) {
    const data = states.data || [];
    const value = !states.isAllSelected;
    data.forEach((item, index) => {
      if (states.selectable) {
        if (states.selectable.call(null, item, index)) {
          item.$selected = value;
        }
      } else {
        item.$selected = value;
      }
    });
    states.isAllSelected = value;
  }),

  setSelectedRow(states, row) {
    if (states.selectionMode === 'single') {
      states.currentRow = row;
    }
  }
};

TableStore.prototype.updateColumns = function() {
  const states = this.states;
  const _columns = states._columns || [];
  states.fixedColumns = _columns.filter((column) => column.fixed === true || column.fixed === 'left');
  states.rightFixedColumns = _columns.filter((column) => column.fixed === 'right');

  if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
    _columns[0].fixed = true;
    states.fixedColumns.unshift(_columns[0]);
  }
  states.columns = [].concat(states.fixedColumns).concat(_columns.filter((column) => !column.fixed)).concat(states.rightFixedColumns);
};

TableStore.prototype.updateSelectedRow = function() {
  const states = this.states;
  const table = this.table;
  const data = states.data || [];
  if (states.selectionMode === 'single') {
    const oldSelectedRow = states.currentRow;
    if (oldSelectedRow === null && !states.allowNoSelection) {
      states.currentRow = data[0];
      if (states.currentRow !== oldSelectedRow) {
        table.$emit('selectionchange', states.currentRow);
      }
    } else if (data.indexOf(oldSelectedRow) === -1) {
      if (!states.allowNoSelection) {
        states.currentRow = data[0];
      } else {
        states.currentRow = null;
      }
      if (states.currentRow !== oldSelectedRow) {
        table.$emit('selectionchange', states.currentRow);
      }
    }
  }
};

TableStore.prototype.scheduleLayout = function() {
  this.table.debouncedLayout();
};

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  }
};

export default TableStore;
