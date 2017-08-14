function createAssign(undefinedOnly) {
  return function(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
      let source = arguments[i] || {};
      for (let prop in source) {
        if (source.hasOwnProperty(prop)) {
          let value = source[prop];
          if (!undefinedOnly || value !== undefined) {
            target[prop] = value;
          }
        }
      }
    }

    return target;
  };
}

export default createAssign(true);

export let merge = createAssign();
