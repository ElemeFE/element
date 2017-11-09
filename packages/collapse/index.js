import ElCollapse from './src/collapse';

/* istanbul ignore next */
ElCollapse.install = function(Vue) {
  Vue.component(ElCollapse.name, ElCollapse);
};

export default ElCollapse;

