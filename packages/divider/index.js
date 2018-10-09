import ElDivider from './src/main';

/* istanbul ignore next */
ElDivider.install = function(Vue) {
  Vue.component(ElDivider.name, ElDivider);
};

export default ElDivider;
