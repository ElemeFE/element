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

export const orderBy = function(array, sortKey, reverse, sortMethod) {
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  }
  if (!sortKey && !sortMethod) {
    return array;
  }
  const order = (reverse && reverse < 0) ? -1 : 1;

  // sort on a copy to avoid mutating original array
  return array.slice().sort(sortMethod ? function(a, b) {
    return sortMethod(a, b) ? order : -order;
  } : function(a, b) {
    if (sortKey !== '$key') {
      if (isObject(a) && '$value' in a) a = a.$value;
      if (isObject(b) && '$value' in b) b = b.$value;
    }
    a = isObject(a) ? getValueByPath(a, sortKey) : a;
    b = isObject(b) ? getValueByPath(b, sortKey) : b;
    return a === b ? 0 : a > b ? order : -order;
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
