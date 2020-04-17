import Vue from 'vue';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function noop() {};

/**
 * @param {object} obj
 * @param {string} key
 */
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};

/**
 * @param {object} target
 * @param {object} source
 */
function extend(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
  return target;
}

/** @param {object} object */
export function getValueByPath(object, prop = '') {
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
}

/**
 * @param {object} obj
 * @param {path} string
 * @param {boolean} strict
 **/
export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('Please provide a valid property path: ' + path);
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
};

let idSeed = 0;
export function generateId() {
  return ++idSeed;
}

export function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
/**
 * @param {any[]} arr
 * @param {(item: any, index: number) => bool} pred
 */
export function arrayFindIndex(arr, pred) {
  for (let i = 0; i < arr.length; ++i) {
    if (pred(arr[i], i)) {
      return i;
    }
  }
  return -1;
}

/**
 * @param {any[]} arr
 * @param {(item: any, index: number) => bool} pred
 */
export function arrayFind(arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
}

/** @param {any[]} arr */
export function arrayFill(arr, value) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = value;
  }
  return arr;
}

export function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
}

export function isChromeLike() {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Chrome') > -1;
}

export function isIE() {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
}

export function isEdge() {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
}

export function isFirefox() {
  return !Vue.prototype.$isServer && !!navigator.userAgent.match(/firefox/i);
}

/** @param {CSSStyleSheet} style */
export function autoprefixer(style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach(rule => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
}

/** @param {string} str */
export function kebabCase(str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
}

/** @param {string} str */
export function capitalize(str) {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function looseEqual(a, b) {
  const isObjectA = typeof a === 'object';
  const isObjectB = typeof b === 'object';
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

/**
 * @param {any[]} arrayA
 * @param {any[]} arrayB
 */
export function arrayEquals(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }

  return true;
}

export function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
}

export function isEmpty(val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
}

/** @param {Function} fn */
export function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

export function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}

/** @param {string} text */
export function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
