import Craw from './src/main';

/* istanbul ignore next */
Craw.install = function(Vue) {
  Vue.component(Craw.name, Craw);
};

export default Craw;
