import TmPriceInfo from './src/price-info';

/* istanbul ignore next */
TmPriceInfo.install = function(Vue) {
  Vue.component(TmPriceInfo.name, TmPriceInfo);
};

export default TmPriceInfo;
