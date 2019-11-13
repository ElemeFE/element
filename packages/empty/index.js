import Empty from './src/main.jsx';

/* istanbul ignore next */
Empty.install = function(Vue) {
  Vue.component(Empty.name, Empty);
};

export default Empty;
