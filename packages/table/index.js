import TmTable from './src/table';

/* istanbul ignore next */
TmTable.install = function(Vue) {
  Vue.component(TmTable.name, TmTable);
};

export default TmTable;
