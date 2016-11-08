import ElBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
ElBreadcrumb.install = function(Vue) {
  Vue.component(ElBreadcrumb.name, ElBreadcrumb);
};

export default ElBreadcrumb;
