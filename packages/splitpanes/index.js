import Splitpanes from './src/splitpanes';

/* istanbul ignore next */
Splitpanes.install = function(Vue) {
  Vue.component(Splitpanes.name, Splitpanes);
};

export default Splitpanes;
