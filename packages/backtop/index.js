import Backtop from './src/main';

/* istanbul ignore next */
Backtop.install = function(Vue) {
  Vue.component(Backtop.name, Backtop);
};

export default Backtop;
