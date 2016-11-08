import ElOption from '../select/src/option';

/* istanbul ignore next */
ElOption.install = function(Vue) {
  Vue.component(ElOption.name, ElOption);
};

export default ElOption;
