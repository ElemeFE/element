import Vue from 'vue';
import debounce from 'throttle-debounce/debounce';
import { orderBy, getColumnById } from './util';

const getRowIdentity = (row, rowKey) => {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    return row[rowKey];
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod);
};

const TableStore = function(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    rowKey: null,
    _columns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    _data: null,
    filteredData: null,
    data: null,
    sortingColumn: null,
    sortProp: null,
    sortOrder: null,
    isAllSelected: false,
    selection: [],
    reserveSelection: false,
    selectable: null,
    hoverRow: null,
    filters: {}
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
    states.data = sortData((data || []), states);

    if (!states.reserveSelection) {
      states.isAllSelected = false;
    } else {
      const rowKey = states.rowKey;
      if (rowKey) {
        const selectionMap = {};
        states.selection.forEach((row) => {
          selectionMap[getRowIdentity(row, rowKey)] = row;
        });

        states.data.forEach((row) => {
          const rowId = getRowIdentity(row, rowKey);
          if (selectionMap[rowId]) {
            row.$selected = true;
            selectionMap[rowId] = row;
          }
        });

        this.updateAllSelected();
      } else {
        console.warn('WARN: rowKey is required when reserve-selection is enabled.');
      }
    }

    Vue.nextTick(() => this.table.updateScrollY());
  },

  changeSortCondition(states) {
    states.data = sortData((states.filteredData || states._data || []), states);

    this.table.$emit('sort-change', {
      column: this.states.sortingColumn,
      prop: this.states.sortProp,
      order: this.states.sortOrder
    });

    Vue.nextTick(() => this.table.updateScrollY());
  },

  filterChange(states, options) {
    let { column, values } = options;
    if (values && !Array.isArray(values)) {
      values = [values];
    }

    const prop = column.property;
    if (prop) {
      states.filters[column.id] = values;
    }

    let data = states._data;
    const filters = states.filters;

    Object.keys(filters).forEach((columnId) => {
      const values = filters[columnId];
      if (!values || values.length === 0) return;
      const column = getColumnById(this.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter((row) => {
          return values.some(value => column.filterMethod.call(null, value, row));
        });
      }
    });

    states.filteredData = data;
    states.data = sortData(data, states);

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
      states.reserveSelection = column.reserveSelection;
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

  rowSelectedChanged(states, row) {
    const selection = states.selection;
    if (row.$selected) {
      if (selection.indexOf(row) === -1) {
        selection.push(row);
      }
    } else {
      const index = selection.indexOf(row);
      if (index > -1) {
        selection.splice(index, 1);
      }
    }
    this.table.$emit('selection-change', selection);
    this.table.$emit('select', selection, row);

    this.updateAllSelected();
  },

  toggleAllSelection: debounce(10, function(states) {
    const data = states.data || [];
    const value = !states.isAllSelected;
    const selection = this.states.selection;
    let selectionChanged = false;

    const setSelected = (item) => {
      if (item.$selected !== value) {
        selectionChanged = true;
        if (value) {
          if (selection.indexOf(item) === -1) {
            selection.push(item);
          }
        } else {
          const itemIndex = selection.indexOf(item);
          if (itemIndex > -1) {
            selection.splice(itemIndex, 1);
          }
        }
      }
      item.$selected = value;
    };

    data.forEach((item, index) => {
      if (states.selectable) {
        if (states.selectable.call(null, item, index)) {
          setSelected(item);
        }
      } else {
        setSelected(item);
      }
    });

    if (selectionChanged) {
      this.table.$emit('selection-change', selection);
    }
    this.table.$emit('select-all', selection);
    states.isAllSelected = value;
  })
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

TableStore.prototype.clearSelection = function() {
  const states = this.states;
  const oldSelection = states.selection;
  oldSelection.forEach((row) => { row.$selected = false; });
  if (this.states.reserveSelection) {
    const data = states.data || [];
    data.forEach((row) => { row.$selected = false; });
  }
  states.isAllSelected = false;
  states.selection = [];
};

TableStore.prototype.updateAllSelected = function() {
  const states = this.states;
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
