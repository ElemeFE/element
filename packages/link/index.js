import Link from './src/main';

/* istanbul ignore next */
Link.install = function(Vue) {
  Vue.component(Link.name, Link);
};

export default Link;
