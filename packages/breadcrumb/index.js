const ElBreadcrumb = require('./src/breadcrumb');

/* istanbul ignore next */
ElBreadcrumb.install = function(Vue) {
  Vue.component(ElBreadcrumb.name, ElBreadcrumb);
};

module.exports = ElBreadcrumb;
