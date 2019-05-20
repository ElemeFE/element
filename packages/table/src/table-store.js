import Vue from 'vue';
import debounce from 'throttle-debounce/debounce';
import merge from 'element-ui/src/utils/merge';
import { orderBy, getColumnById, getRowIdentity, getColumnByKey } from './util';

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  if (Object.keys(states.treeData).length === 0) {
    return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
  }
  // 存在嵌套类型的数据
  const rowKey = states.rowKey;
  const filteredData = [];
  const treeDataMap = {};
  let index = 0;
  while (index < data.length) {
    let cur = data[index];
    const key = cur[rowKey];
    let treeNode = states.treeData[key];
    filteredData.push(cur);
    index++;
    if (!treeNode) {
      continue;
    }
    treeDataMap[key] = [];
    while (index < data.length) {
      cur = data[index];
      treeNode = states.treeData[cur[rowKey]];
      index++;
      if (treeNode && treeNode.level !== 0) {
        treeDataMap[key].push(cur);
      } else {
        filteredData.push(cur);
        break;
      }
    }
  }
  const sortedData = orderBy(filteredData, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
  return sortedData.reduce((prev, current) => {
    const treeNodes = treeDataMap[current[rowKey]] || [];
    return prev.concat(current, treeNodes);
  }, []);
};

const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row, index) => {
    arrayMap[getRowIdentity(row, rowKey)] = { row, index };
  });
  return arrayMap;
};

const toggleRowSelection = function(states, row, selected) {
  let changed = false;
  const selection = states.selection;
  const index = selection.indexOf(row);
  if (typeof selected === 'undefined') {
    if (index === -1) {
      selection.push(row);
      changed = true;
    } else {
      selection.splice(index, 1);
      changed = true;
    }
  } else {
    if (selected && index === -1) {
      selection.push(row);
      changed = true;
    } else if (!selected && index > -1) {
      selection.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};

const toggleRowExpansion = function(states, row, expanded) {
  let changed = false;
  const expandRows = states.expandRows;
  if (typeof expanded !== 'undefined') {
    const index = expandRows.indexOf(row);
    if (expanded) {
      if (index === -1) {
        expandRows.push(row);
        changed = true;
      }
    } else {
      if (index !== -1) {
        expandRows.splice(index, 1);
        changed = true;
      }
    }
  } else {
    const index = expandRows.indexOf(row);
    if (index === -1) {
      expandRows.push(row);
      changed = true;
    } else {
      expandRows.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};

const TableStore = function(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    rowKey: null,
    _columns: [],
    originColumns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    leafColumns: [],
    fixedLeafColumns: [],
    rightFixedLeafColumns: [],
    leafColumnsLength: 0,
    fixedLeafColumnsLength: 0,
    rightFixedLeafColumnsLength: 0,
    isComplex: false,
    filteredData: null,
    data: null,
    sortingColumn: null,
    sortProp: null,
    sortOrder: null,
    isAllSelected: false,
    selection: [],
    reserveSelection: false,
    selectable: null,
    currentRow: null,
    hoverRow: null,
    filters: {},
    expandRows: [],
    defaultExpandAll: false,
    selectOnIndeterminate: false,
    treeData: {},
    indent: 16,
    lazy: false,
    lazyTreeNodeMap: {}
  };

  this._toggleAllSelection = debounce(10, function(states) {
    const data = states.data || [];
    if (data.length === 0) return;
    const selection = this.states.selection;
    // when only some rows are selected (but not all), select or deselect all of them
    // depending on the value of selectOnIndeterminate
    const value = states.selectOnIndeterminate
      ? !states.isAllSelected
      : !(states.isAllSelected || selection.length);
    let selectionChanged = false;
    data.forEach((item, index) => {
      if (states.selectable) {
        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      }
    });
    const table = this.table;
    if (selectionChanged) {
      table.$emit('selection-change', selection ? selection.slice() : []);
    }
    table.$emit('select-all', selection);
    states.isAllSelected = value;
  });

  for (let prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop];
    }
  }
};

TableStore.prototype.mutations = {
  setData(states, data) {
    const dataInstanceChanged = states._data !== data;
    states._data = data;

    Object.keys(states.filters).forEach((columnId) => {
      const values = states.filters[columnId];
      if (!values || values.length === 0) return;
      const column = getColumnById(this.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter((row) => {
          return values.some(value => column.filterMethod.call(null, value, row, column));
        });
      }
    });

    states.filteredData = data;
    states.data = sortData((data || []), states);

    this.updateCurrentRow();

    const rowKey = states.rowKey;

    if (!states.reserveSelection) {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
      this.updateAllSelected();
    } else {
      if (rowKey) {
        const selection = states.selection;
        const selectedMap = getKeysMap(selection, rowKey);

        states.data.forEach((row) => {
          const rowId = getRowIdentity(row, rowKey);
          const rowInfo = selectedMap[rowId];
          if (rowInfo) {
            selection[rowInfo.index] = row;
          }
        });

        this.updateAllSelected();
      } else {
        console.warn('WARN: rowKey is required when reserve-selection is enabled.');
      }
    }

    const defaultExpandAll = states.defaultExpandAll;
    if (defaultExpandAll) {
      this.states.expandRows = (states.data || []).slice(0);
    } else if (rowKey) {
      // update expandRows to new rows according to rowKey
      const ids = getKeysMap(this.states.expandRows, rowKey);
      let expandRows = [];
      for (const row of states.data) {
        const rowId = getRowIdentity(row, rowKey);
        if (ids[rowId]) {
          expandRows.push(row);
        }
      }
      this.states.expandRows = expandRows;
    } else {
      // clear the old rows
      this.states.expandRows = [];
    }

    Vue.nextTick(() => this.table.updateScrollY());
  },

  changeSortCondition(states, options) {
    states.data = sortData((states.filteredData || states._data || []), states);

    if (!options || !(options.silent || options.init)) {
      this.table.$emit('sort-change', {
        column: this.states.sortingColumn,
        prop: this.states.sortProp,
        order: this.states.sortOrder
      });
    }

    Vue.nextTick(() => this.table.updateScrollY());
  },

  sort(states, options) {
    const { prop, order, init } = options;
    if (prop) {
      states.sortProp = prop;
      states.sortOrder = order || 'ascending';
      Vue.nextTick(() => {
        for (let i = 0, length = states.columns.length; i < length; i++) {
          let column = states.columns[i];
          if (column.property === states.sortProp) {
            column.order = states.sortOrder;
            states.sortingColumn = column;
            break;
          }
        }

        if (states.sortingColumn) {
          this.commit('changeSortCondition', {
            init: init
          });
        }
      });
    }
  },

  filterChange(states, options) {
    let { column, values, silent, multi } = options;
    if (values && !Array.isArray(values)) {
      values = [values];
    }
    const filters = {};

    if (multi) {
      column.forEach(col => {
        states.filters[col.id] = values;
        filters[col.columnKey || col.id] = values;
      });
    } else {
      const prop = column.property;

      if (prop) {
        states.filters[column.id] = values;
        filters[column.columnKey || column.id] = values;
      }
    }

    let data = states._data;

    Object.keys(states.filters).forEach((columnId) => {
      const values = states.filters[columnId];
      if (!values || values.length === 0) return;
      const column = getColumnById(this.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter((row) => {
          return values.some(value => column.filterMethod.call(null, value, row, column));
        });
      }
    });

    states.filteredData = data;
    states.data = sortData(data, states);

    if (!silent) {
      this.table.$emit('filter-change', filters);
    }

    Vue.nextTick(() => this.table.updateScrollY());
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

  setHoverRow(states, row) {
    states.hoverRow = row;
  },

  setCurrentRow(states, row) {
    const oldCurrentRow = states.currentRow;
    states.currentRow = row;

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow);
    }
  },

  rowSelectedChanged(states, row) {
    const changed = toggleRowSelection(states, row);
    const selection = states.selection;

    if (changed) {
      const table = this.table;
      table.$emit('selection-change', selection ? selection.slice() : []);
      table.$emit('select', selection, row);
    }

    this.updateAllSelected();
  },

  toggleAllSelection(state) {
    this._toggleAllSelection(state);
  }
};

const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
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

  const notFixedColumns = _columns.filter(column => !column.fixed);
  states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

  const leafColumns = doFlattenColumns(notFixedColumns);
  const fixedLeafColumns = doFlattenColumns(states.fixedColumns);
  const rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

  states.leafColumnsLength = leafColumns.length;
  states.fixedLeafColumnsLength = fixedLeafColumns.length;
  states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

  states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
};

TableStore.prototype.isSelected = function(row) {
  return (this.states.selection || []).indexOf(row) > -1;
};

TableStore.prototype.clearSelection = function() {
  const states = this.states;
  states.isAllSelected = false;
  const oldSelection = states.selection;
  if (states.selection.length) {
    states.selection = [];
  }
  if (oldSelection.length > 0) {
    this.table.$emit('selection-change', states.selection ? states.selection.slice() : []);
  }
};

TableStore.prototype.setExpandRowKeys = function(rowKeys) {
  const expandRows = [];
  const data = this.states.data;
  const rowKey = this.states.rowKey;
  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
  const keysMap = getKeysMap(data, rowKey);
  rowKeys.forEach((key) => {
    const info = keysMap[key];
    if (info) {
      expandRows.push(info.row);
    }
  });

  this.states.expandRows = expandRows;
};

TableStore.prototype.toggleRowSelection = function(row, selected) {
  const changed = toggleRowSelection(this.states, row, selected);
  if (changed) {
    this.table.$emit('selection-change', this.states.selection ? this.states.selection.slice() : []);
  }
};

TableStore.prototype.toggleRowExpansion = function(row, expanded) {
  const changed = toggleRowExpansion(this.states, row, expanded);
  if (changed) {
    this.table.$emit('expand-change', row, this.states.expandRows);
    this.scheduleLayout();
  }
};

TableStore.prototype.isRowExpanded = function(row) {
  const { expandRows = [], rowKey } = this.states;
  if (rowKey) {
    const expandMap = getKeysMap(expandRows, rowKey);
    return !!expandMap[getRowIdentity(row, rowKey)];
  }
  return expandRows.indexOf(row) !== -1;
};

TableStore.prototype.cleanSelection = function() {
  const selection = this.states.selection || [];
  const data = this.states.data;
  const rowKey = this.states.rowKey;
  let deleted;
  if (rowKey) {
    deleted = [];
    const selectedMap = getKeysMap(selection, rowKey);
    const dataMap = getKeysMap(data, rowKey);
    for (let key in selectedMap) {
      if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
        deleted.push(selectedMap[key].row);
      }
    }
  } else {
    deleted = selection.filter((item) => {
      return data.indexOf(item) === -1;
    });
  }

  deleted.forEach((deletedItem) => {
    selection.splice(selection.indexOf(deletedItem), 1);
  });

  if (deleted.length) {
    this.table.$emit('selection-change', selection ? selection.slice() : []);
  }
};

TableStore.prototype.clearFilter = function(columnKeys) {
  const states = this.states;
  const { tableHeader, fixedTableHeader, rightFixedTableHeader } = this.table.$refs;
  let panels = {};

  if (tableHeader) panels = merge(panels, tableHeader.filterPanels);
  if (fixedTableHeader) panels = merge(panels, fixedTableHeader.filterPanels);
  if (rightFixedTableHeader) panels = merge(panels, rightFixedTableHeader.filterPanels);

  const keys = Object.keys(panels);
  if (!keys.length) return;

  if (typeof columnKeys === 'string') {
    columnKeys = [columnKeys];
  }
  if (Array.isArray(columnKeys)) {
    const columns = columnKeys.map(key => getColumnByKey(states, key));
    keys.forEach(key => {
      const column = columns.find(col => col.id === key);
      if (column) {
        panels[key].filteredValue = [];
      }
    });
    this.commit('filterChange', {
      column: columns,
      value: [],
      silent: true,
      multi: true
    });
  } else {
    keys.forEach(key => {
      panels[key].filteredValue = [];
    });

    states.filters = {};

    this.commit('filterChange', {
      column: {},
      values: [],
      silent: true
    });
  }
};

TableStore.prototype.clearSort = function() {
  const states = this.states;
  if (!states.sortingColumn) return;
  states.sortingColumn.order = null;
  states.sortProp = null;
  states.sortOrder = null;

  this.commit('changeSortCondition', {
    silent: true
  });
};

TableStore.prototype.updateAllSelected = function() {
  const states = this.states;
  const { selection, rowKey, selectable, data } = states;
  if (!data || data.length === 0) {
    states.isAllSelected = false;
    return;
  }

  let selectedMap;
  if (rowKey) {
    selectedMap = getKeysMap(states.selection, rowKey);
  }

  const isSelected = function(row) {
    if (selectedMap) {
      return !!selectedMap[getRowIdentity(row, rowKey)];
    } else {
      return selection.indexOf(row) !== -1;
    }
  };

  let isAllSelected = true;
  let selectedCount = 0;
  for (let i = 0, j = data.length; i < j; i++) {
    const item = data[i];
    const isRowSelectable = selectable && selectable.call(null, item, i);
    if (!isSelected(item)) {
      if (!selectable || isRowSelectable) {
        isAllSelected = false;
        break;
      }
    } else {
      selectedCount++;
    }
  }

  if (selectedCount === 0) isAllSelected = false;

  states.isAllSelected = isAllSelected;
};

TableStore.prototype.scheduleLayout = function(updateColumns) {
  if (updateColumns) {
    this.updateColumns();
  }
  this.table.debouncedUpdateLayout();
};

TableStore.prototype.setCurrentRowKey = function(key) {
  const states = this.states;
  const rowKey = states.rowKey;
  if (!rowKey) throw new Error('[Table] row-key should not be empty.');
  const data = states.data || [];
  const keysMap = getKeysMap(data, rowKey);
  const info = keysMap[key];
  states.currentRow = info ? info.row : null;
};

TableStore.prototype.updateCurrentRow = function() {
  const states = this.states;
  const table = this.table;
  const data = states.data || [];
  const oldCurrentRow = states.currentRow;

  if (data.indexOf(oldCurrentRow) === -1) {
    if (states.rowKey && oldCurrentRow) {
      let newCurrentRow = null;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item && item[states.rowKey] === oldCurrentRow[states.rowKey]) {
          newCurrentRow = item;
          break;
        }
      }
      if (newCurrentRow) {
        states.currentRow = newCurrentRow;
        return;
      }
    }
    states.currentRow = null;

    if (states.currentRow !== oldCurrentRow) {
      table.$emit('current-change', null, oldCurrentRow);
    }
  }
};

TableStore.prototype.commit = function(name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error(`Action not found: ${name}`);
  }
};

TableStore.prototype.toggleTreeExpansion = function(rowKey) {
  const { treeData } = this.states;
  const node = treeData[rowKey];
  if (!node) return;
  if (typeof node.expanded !== 'boolean') {
    throw new Error('a leaf must have expanded property');
  }
  node.expanded = !node.expanded;

  let traverse = null;
  if (node.expanded) {
    traverse = (children, parent) => {
      if (children && parent.expanded) {
        children.forEach(key => {
          treeData[key].display = true;
          traverse(treeData[key].children, treeData[key]);
        });
      }
    };
    node.children.forEach(key => {
      treeData[key].display = true;
      traverse(treeData[key].children, treeData[key]);
    });
  } else {
    const traverse = (children) => {
      if (!children) return;
      children.forEach(key => {
        treeData[key].display = false;
        traverse(treeData[key].children);
      });
    };
    traverse(node.children);
  }
};

TableStore.prototype.loadData = function(row, treeNode) {
  const table = this.table;
  const parentRowKey = treeNode.rowKey;
  if (table.lazy && table.load) {
    table.load(row, treeNode, (data) => {
      if (!Array.isArray(data)) {
        throw new Error('data must be an array');
      }
      const treeData = this.states.treeData;
      data.forEach(item => {
        const rowKey = table.getRowKey(item);
        const parent = treeData[parentRowKey];
        parent.loaded = true;
        parent.children.push(rowKey);
        const child = {
          display: true,
          level: parent.level + 1
        };
        if (item.hasChildren) {
          child.expanded = false;
          child.hasChildren = true;
          child.children = [];
        }
        Vue.set(treeData, rowKey, child);
        Vue.set(this.states.lazyTreeNodeMap, rowKey, item);
      });
      this.toggleTreeExpansion(parentRowKey);
    });
  }
};

export default TableStore;
