import Aside from './src/main.jsx';

/* istanbul ignore next */
Aside.install = function(Vue) {
  Vue.component(Aside.name, Aside);
};

export default Aside;
