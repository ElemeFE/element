const ElBreadcrumbItem = require('../breadcrumb/src/breadcrumb-item');

/* istanbul ignore next */
ElBreadcrumbItem.install = function(Vue) {
  Vue.component(ElBreadcrumbItem.name, ElBreadcrumbItem);
};

module.exports = ElBreadcrumbItem;
