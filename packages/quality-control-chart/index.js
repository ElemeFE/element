import ElQualityControlChart from './src/main';

/* istanbul ignore next */
ElQualityControlChart.install = function(Vue) {
  Vue.component(ElQualityControlChart.name, ElQualityControlChart);
};

export default ElQualityControlChart;
