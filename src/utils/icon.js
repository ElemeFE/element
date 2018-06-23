import Vue from 'vue';

export const getIconClass = name => {
  const prefix = (Vue.prototype.$ELEMENT || {}).iconPrefix || 'el-icon-';
  return `${prefix}${name}`;
};
