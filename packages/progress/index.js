import TmProgress from './src/progress';

/* istanbul ignore next */
TmProgress.install = function(Vue) {
  Vue.component(TmProgress.name, TmProgress);
};

export default TmProgress;
