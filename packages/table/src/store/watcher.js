import Vue from 'vue';
import debounce from 'throttle-debounce/debounce';
import merge from 'element-ui/src/utils/merge';
import { getKeysMap, getRowIdentity, getColumnById, getColumnByKey, orderBy, toggleRowStatus } from '../util';
import expand from './expand';
import current from './current';
import tree from './tree';

// import
const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
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

export default Vue.extend({
  data() {
    return {
      states: {
        // 3.0 版本后要求必须设置该属性
        rowKey: null,

        // 渲染的数据来源，是对 table 中的 data 过滤排序后的结果
        data: [],

        // 是否包含固定列
        isComplex: false,

        // 列
        _columns: [], // 不可响应的
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

        // 选择
        isAllSelected: false,
        selection: [],
        reserveSelection: false,
        selectOnIndeterminate: false,
        selectable: null,

        // 过滤
        filters: {}, // 不可响应的
        filteredData: null,

        // 排序
        sortingColumn: null,
        sortProp: null,
        sortOrder: null,

        hoverRow: null,
        currentRow: null
      }
    };
  },

  mixins: [expand, current, tree],

  methods: {
    // 检查 rowKey 是否存在
    assertRowKey() {
      const rowKey = this.states.rowKey;
      if (!rowKey) throw new Error('[ElTable] prop row-key is required');
    },

    // 更新列
    updateColumns() {
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
    },

    // 更新 DOM
    scheduleLayout(needUpdateColumns) {
      if (needUpdateColumns) {
        this.updateColumns();
      }
      this.table.debouncedUpdateLayout();
    },

    // 选择
    isSelected(row) {
      const { selection = [] } = this.states;
      return selection.indexOf(row) > -1;
    },

    clearSelection() {
      const states = this.states;
      states.isAllSelected = false;
      const oldSelection = states.selection;
      if (states.selection.length) {
        states.selection = [];
      }
      if (oldSelection.length > 0) {
        this.table.$emit('selection-change', states.selection ? states.selection.slice() : []);
      }
    },

    cleanSelection() {
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
    },

    toggleRowSelection(row, selected) {
      const changed = toggleRowStatus(this.states.selection, row, selected);
      if (changed) {
        const newSelection = this.states.selection ? this.states.selection.slice() : [];
        this.table.$emit('select', newSelection, row);
        this.table.$emit('selection-change', newSelection);
      }
    },

    toggleAllSelection: debounce(10, function() {
      const states = this.states;
      const { data = [], selection } = states;
      // when only some rows are selected (but not all), select or deselect all of them
      // depending on the value of selectOnIndeterminate
      const value = states.selectOnIndeterminate
        ? !states.isAllSelected
        : !(states.isAllSelected || selection.length);
      states.isAllSelected = value;

      let selectionChanged = false;
      data.forEach((row, index) => {
        if (states.selectable) {
          if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        } else {
          if (toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        }
      });

      if (selectionChanged) {
        this.table.$emit('selection-change', selection ? selection.slice() : []);
      }
      this.table.$emit('select-all', selection);
    }),

    updateSelectionByRowKey() {
      const states = this.states;
      const { selection, rowKey, data = [] } = states;
      const selectedMap = getKeysMap(selection, rowKey);
      // TODO：这里的代码可以优化
      states.selection = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = selectedMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    },

    updateAllSelected() {
      const states = this.states;
      const { selection, rowKey, selectable } = states;
      // data 为 null 时，结构时的默认值会被忽略
      const data = states.data || [];
      if (data.length === 0) {
        states.isAllSelected = false;
        return;
      }

      let selectedMap;
      if (rowKey) {
        selectedMap = getKeysMap(selection, rowKey);
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
    },

    // 过滤与排序
    updateFilters(columns, values) {
      if (!Array.isArray(columns)) {
        columns = [columns];
      }
      const states = this.states;
      const filters = {};
      columns.forEach(col => {
        states.filters[col.id] = values;
        filters[col.columnKey || col.id] = values;
      });

      return filters;
    },

    updateSort(column, prop, order) {
      this.states.sortingColumn = column;
      this.states.sortProp = prop;
      this.states.sortOrder = order;
    },

    execFilter() {
      const states = this.states;
      const { _data, filters } = states;
      let data = _data;

      Object.keys(filters).forEach((columnId) => {
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
      // states.data = data;
    },

    execSort() {
      const states = this.states;
      states.data = sortData(states.filteredData, states);
    },

    // 根据 filters 与 sort 去过滤 data
    execQuery(ignore) {
      if (!(ignore && ignore.filter)) {
        this.execFilter();
      }
      this.execSort();
    },

    clearFilter(columnKeys) {
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
            // TODO: 优化这里的代码
            panels[key].filteredValue = [];
          }
        });
        this.commit('filterChange', {
          column: columns,
          values: [],
          silent: true,
          multi: true
        });
      } else {
        keys.forEach(key => {
          // TODO: 优化这里的代码
          panels[key].filteredValue = [];
        });

        states.filters = {};
        this.commit('filterChange', {
          column: {},
          values: [],
          silent: true
        });
      }
    },

    clearSort() {
      const states = this.states;
      if (!states.sortingColumn) return;

      this.updateSort(null, null, null);
      this.commit('changeSortCondition', {
        silent: true
      });
    }
  }
});
