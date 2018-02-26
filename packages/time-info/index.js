import TmTimeInfo from './src/time-info';

/* istanbul ignore next */
TmTimeInfo.install = function(Vue) {
  Vue.component(TmTimeInfo.name, TmTimeInfo);
};

export default TmTimeInfo;
