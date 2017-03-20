import ElFactorItem from './src/factor-item';

/* istanbul ignore next */
ElFactorItem.install = function(Vue) {
  Vue.component(ElFactorItem.name, ElFactorItem);
};

export default ElFactorItem;
