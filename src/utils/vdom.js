import Vue from 'vue';

export function isVNode(node) {
  return typeof node === 'object' && Vue.util.hasOwn(node, 'componentOptions');
};

export function getFirstComponentChild(children) {
  return children && children.filter(c => c && c.tag)[0];
};
