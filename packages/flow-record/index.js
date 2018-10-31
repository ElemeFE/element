import FlowRecord from './src/index';

/* istanbul ignore next */
FlowRecord.install = function(Vue) {
  Vue.component(FlowRecord.name, FlowRecord);
};

export default FlowRecord;
