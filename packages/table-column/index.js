import TmTableColumn from '../table/src/table-column';

/* istanbul ignore next */
TmTableColumn.install = function(Vue) {
  Vue.component(TmTableColumn.name, TmTableColumn);
};

export default TmTableColumn;
