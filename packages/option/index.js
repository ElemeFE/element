import TmOption from '../select/src/option';

/* istanbul ignore next */
TmOption.install = function(Vue) {
  Vue.component(TmOption.name, TmOption);
};

export default TmOption;
