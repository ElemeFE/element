import InfiniteScroll from './src/main';

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
  Vue.component(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
