import InfiniteScroll from './src/main.js';

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
  Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
