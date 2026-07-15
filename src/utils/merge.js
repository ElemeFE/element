const hasOwnProperty = Object.prototype.hasOwnProperty;

export default function(target) {
  if (target == null) {
    target = {};
  }
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {};
    for (let prop in source) {
      if (hasOwnProperty.call(source, prop)) {
        const value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};
