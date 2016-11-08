import ElTable from './src/table';

/* istanbul ignore next */
ElTable.install = function(Vue) {
  Vue.component(ElTable.name, ElTable);
};

export default ElTable;
