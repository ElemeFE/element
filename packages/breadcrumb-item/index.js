const ElBreadcrumbItem = require('../breadcrumb/src/breadcrumb-item');

ElBreadcrumbItem.install = function(Vue) {
  Vue.component(ElBreadcrumbItem.name, ElBreadcrumbItem);
};

module.exports = ElBreadcrumbItem;
