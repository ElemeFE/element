export const NODE_KEY = '$treeNodeId';

export const markNodeData = function(node, data) {
  if (!data || data[NODE_KEY]) return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};

export const getNodeKey = function(key, data) {
  if (!key) return data[NODE_KEY];
  return data[key];
};

export const findNearestComponent = (element, componentName) => {
  let target = element;
  while (target && target.tagName !== 'BODY') {
    if (target.__vue__ && target.__vue__.$options.name === componentName) {
      return target.__vue__;
    }
    target = target.parentNode;
  }
  return null;
};
