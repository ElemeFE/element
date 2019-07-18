import CascaderPanel from './src/cascader-panel';

/* istanbul ignore next */
CascaderPanel.install = function(Vue) {
  Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;
