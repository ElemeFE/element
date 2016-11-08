import ElTabs from './src/tabs';

/* istanbul ignore next */
ElTabs.install = function(Vue) {
  Vue.component(ElTabs.name, ElTabs);
};

export default ElTabs;
