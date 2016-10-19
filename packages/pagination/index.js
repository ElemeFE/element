const Pagination = require('./src/pagination');

/* istanbul ignore next */
Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

module.exports = Pagination;
