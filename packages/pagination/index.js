import Pagination from './src/pagination';

/* istanbul ignore next */
Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
