import TmTabs from './src/tabs';

/* istanbul ignore next */
TmTabs.install = function(Vue) {
  Vue.component(TmTabs.name, TmTabs);
};

export default TmTabs;
