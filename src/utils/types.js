export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

/**
 * 快速对象检查-主要用于当我们知道原始值是符合JSON的类型。
 * @param {*} obj 检查值
 * @returns {Boolean}
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

export const isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

export const isUndefined = (val)=> {
  return val === void 0;
};

export const isDefined = (val) => {
  return val !== undefined && val !== null;
};
