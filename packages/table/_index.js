import TmTableColumn from './src/table-column';
import TmTable from './src/table';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(TmTable.name, TmTable);
  Vue.component(TmTableColumn.name, TmTableColumn);
};

export { TmTable, TmTableColumn };
