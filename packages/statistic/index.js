import Statistic from './src/main';

/* istanbul ignore next */
Statistic.install = function(Vue) {
  Vue.component(Statistic.name, Statistic);
};

export default Statistic;
