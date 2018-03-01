import TmEntityCounter from './src/entity-counter';

/* istanbul ignore next */
TmEntityCounter.install = function(Vue) {
  Vue.component(TmEntityCounter.name, TmEntityCounter);
};

export default TmEntityCounter;
