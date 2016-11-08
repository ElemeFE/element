import ElTableColumn from './src/table-column';
import ElTable from './src/table';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(ElTable.name, ElTable);
  Vue.component(ElTableColumn.name, ElTableColumn);
};

export { ElTable, ElTableColumn };
