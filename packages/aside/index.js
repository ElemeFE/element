import Aside from './src/main';

/* istanbul ignore next */
Aside.install = function(Vue) {
  Vue.component(Aside.name, Aside);
};

export default Aside;
