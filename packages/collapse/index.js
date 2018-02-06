import TmCollapse from './src/collapse';

/* istanbul ignore next */
TmCollapse.install = function(Vue) {
  Vue.component(TmCollapse.name, TmCollapse);
};

export default TmCollapse;

