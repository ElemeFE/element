const Pagination = require('./src/pagination');

Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

module.exports = Pagination;
