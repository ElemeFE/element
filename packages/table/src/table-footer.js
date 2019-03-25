import LayoutObserver from './layout-observer';

export default {
  name: 'ElTableFooter',

  mixins: [LayoutObserver],

  render(h) {
    let sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data });
    } else {
      this.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText;
          return;
        }
        const values = this.store.states.data.map(item => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach(value => {
          if (!isNaN(value)) {
            notNumber = false;
            let decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }

    return (
      <table
        class="el-table__footer"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(this.columns, column => <col name={ column.id } />)
          }
          {
            this.hasGutter ? <col name="gutter" /> : ''
          }
        </colgroup>
        <tbody class={ [{ 'has-gutter': this.hasGutter }] }>
          <tr>
            {
              this._l(this.columns, (column, cellIndex) =>
                <td
                  colspan={ column.colSpan }
                  rowspan={ column.rowSpan }
                  class={ this.getRowClasses(column, cellIndex) }>
                  <div class={ ['cell', column.labelClassName] }>
                    {
                      sums[cellIndex]
                    }
                  </div>
                </td>
              )
            }
            {
              this.hasGutter ? <th class="gutter"></th> : ''
            }
          </tr>
        </tbody>
      </table>
    );
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: {
    table() {
      return this.$parent;
    },

    isAllSelected() {
      return this.store.states.isAllSelected;
    },

    columnsCount() {
      return this.store.states.columns.length;
    },

    leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },

    leftFixedLeafCount() {
      return this.store.states.fixedLeafColumnsLength;
    },

    rightFixedLeafCount() {
      return this.store.states.rightFixedLeafColumnsLength;
    },

    rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },

    columns() {
      return this.store.states.columns;
    },

    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  },

  methods: {
    isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        let before = 0;
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) { // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    },

    getRowClasses(column, cellIndex) {
      const classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes;
    }
  }
};
