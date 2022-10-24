import ElCheckbox from 'element-ui/packages/checkbox';

export default {
  name: 'ElTableRow',
  props: [
    'firstDefaultColumnIndex',
    'columns',
    'row',
    'index',
    'isSelected',
    'isExpanded',
    'store',
    'treeRowData',
    'treeIndent',
    'getSpan',
    'getColspanRealWidth',
    'getCellStyle',
    'getCellClass',
    'fixed'
  ],
  computed: {},
  components: {
    ElCheckbox
  },
  render () {
    let {
      columns = [],
      row,
      index: $index,
      store,
      firstDefaultColumnIndex,
      treeRowData,
      treeIndent,
      isSelected,
      isExpanded,
      getSpan,
      fixed,
      getCellStyle,
      getCellClass,
      getColspanRealWidth
    } = this;
    if (columns.length === 0) {
      return <tr></tr>;
    }
    return (
      <tr>
        {columns.map((column, cellIndex) => {
          const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
          if (!rowspan || !colspan) {
            return null;
          }
          const columnData = {
            realWidth: getColspanRealWidth(columns, colspan, cellIndex),
            selectable: column.selectable,
            property: column.property,
            fixed: column.fixed
          };
          const data = {
            store,
            isSelected,
            isExpanded,
            column: columnData,
            row,
            $index,
            fixed
          };
          if (cellIndex === firstDefaultColumnIndex && treeRowData) {
            data.treeNode = {
              indent: treeRowData.level * treeIndent,
              level: treeRowData.level
            };
            if (typeof treeRowData.expanded === 'boolean') {
              data.treeNode.expanded = treeRowData.expanded;
              // 表明是懒加载
              if ('loading' in treeRowData) {
                data.treeNode.loading = treeRowData.loading;
              }
              if ('noLazyChildren' in treeRowData) {
                data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
              }
            }
          }
          return (
            <td
              style={getCellStyle($index, cellIndex, row, column)}
              class={getCellClass($index, cellIndex, row, column)}
              rowspan={rowspan}
              colspan={colspan}
            >
              {column.renderCell.call(
                this._renderProxy,
                this.$createElement,
                data
              )}
            </td>
          );
        })}
      </tr>
    );
  }
};
