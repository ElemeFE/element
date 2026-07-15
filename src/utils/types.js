import Vue from 'vue';

const toString = Object.prototype.toString;

export function isString(obj) {
  return toString.call(obj) === '[object String]';
}

export function isObject(obj) {
  return toString.call(obj) === '[object Object]';
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

let isFunction = (functionToCheck) => {
  return functionToCheck && toString.call(functionToCheck) === '[object Function]';
};

if (typeof /./ !== 'function' && typeof Int8Array !== 'object' && (Vue.prototype.$isServer || typeof document.childNodes !== 'function')) {
  isFunction = function(obj) {
    return typeof obj === 'function' || false;
  };
}

export {
  isFunction
};

export const isUndefined = (val) => {
  return val === void 0;
};

export const isDefined = (val) => {
  return val !== undefined && val !== null;
};

export const isNumber = (val) => {
  return toString.call(val) === '[object Number]';
};

export const isBoolean = (val) => {
  return toString.call(val) === '[object Boolean]';
};

export const isArray = (val) => {
  return Array.isArray ? Array.isArray(val) : toString.call(val) === '[object Array]';
};
