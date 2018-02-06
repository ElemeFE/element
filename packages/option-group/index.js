import TmOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
TmOptionGroup.install = function(Vue) {
  Vue.component(TmOptionGroup.name, TmOptionGroup);
};

export default TmOptionGroup;
