import Vue from 'vue';

export const getIconClass = name => {
  const defaultPrefix = 'el-icon-';
  if (name.indexOf(defaultPrefix) === 0) {
    // 向后兼容
    return name;
  }
  const prefix = (Vue.prototype.$ELEMENT || {}).iconPrefix || defaultPrefix;
  return `${prefix}${name}`;
};
