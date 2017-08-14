import { getValueByPath } from 'element-ui/src/utils/util';

export const getCell = function(event) {
  let cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

const isObject = function(obj) {
  return obj !== null && typeof obj === 'object';
};

export const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = (reverse && reverse < 0) ? -1 : 1;
  }
  if (!sortKey && !sortMethod && !sortBy) {
    return array;
  }

  let getKey = sortMethod ? null : function(row, index) {
    if (sortBy) {
      if (typeof sortBy === 'string') {
        return getValueByPath(row, sortBy);
      }
      return sortBy(row, index);
    }
    if (sortKey !== '$key') {
      if (isObject(row) && '$value' in row) return row.$value;
    }
    return isObject(row) ? getValueByPath(row, sortKey) : row;
  };
  let compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.row, b.row);
    }
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  };
  return array.map(function(row, index) {
    return { row: row, index: index, key: getKey ? getKey(row, index) : null };
  }).sort(function(a, b) {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function(item) {
    return item.row;
  });
};

export const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach(function(item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

export const getColumnByCell = function(table, cell) {
  const matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

export const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback);
  }
};

export const getRowIdentity = (row, rowKey) => {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    let key = rowKey.split('.');
    let current = row;
    for (let i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};
