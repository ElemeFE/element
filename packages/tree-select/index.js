import TreeSelect from './src/main';

/* istanbul ignore next */
TreeSelect.install = function(Vue) {
  Vue.component(TreeSelect.name, TreeSelect);
};

export default TreeSelect;
