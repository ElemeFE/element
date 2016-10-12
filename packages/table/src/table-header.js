import ElCheckbox from 'element-ui/packages/checkbox/index.js';
import ElTag from 'element-ui/packages/tag/index.js';

export default {
  name: 'el-table-header',

  render(h) {
    return (
      <table
        class="el-table__header"
        cellspacing="0"
        cellpadding="0"
        border="0">
        {
          this._l(this.columns, column =>
            <colgroup
              name={ column.id }
              width={ column.realWidth || column.width }
            />)
        }
        {
          !this.fixed && this.layout.gutterWidth
            ? <colgroup name="gutter" width={ this.layout.scrollY ? this.layout.gutterWidth : '' }></colgroup>
            : ''
        }
        <thead>
          <tr>
            {
              this._l(this.columns, column =>
                <th
                  on-mousemove={ ($event) => this.handleMouseMove($event, column) }
                  on-mouseout={ this.handleMouseOut }
                  on-mousedown={ ($event) => this.handleMouseDown($event, column) }
                  on-click={ ($event) => this.handleHeaderClick($event, column) }
                  class={ [column.id, column.direction, column.align] }>
                  {
                    [
                      column.headerTemplate
                        ? column.headerTemplate.call(this._renderProxy, h, column.label)
                        : <div>{ column.label }</div>,
                      column.sortable
                        ? <div class="caret-wrapper">
                            <i class="sort-caret ascending"></i>
                            <i class="sort-caret descending"></i>
                          </div>
                        : ''
                    ]
                  }
                </th>
              )
            }
            {
              !this.fixed && this.layout.gutterWidth
                ? <th class="gutter" style={{ width: this.layout.scrollY ? this.layout.gutterWidth + 'px' : '0' }}></th>
                : ''
            }
          </tr>
        </thead>
      </table>
    );
  },

  props: {
    columns: {},
    fixed: String,
    store: {
      required: true
    },
    layout: {
      required: true
    },
    border: Boolean
  },

  components: {
    ElCheckbox,
    ElTag
  },

  computed: {
    isAllSelected() {
      return this.store.states.isAllSelected;
    },

    columns() {
      if (this.fixed === true || this.fixed === 'left') {
        return this.store.states.fixedColumns;
      } else if (this.fixed === 'right') {
        return this.store.states.rightFixedColumns;
      }
      return this.store.states.columns;
    }
  },

  methods: {
    toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    },

    handleMouseDown(event, column) {
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        const tableEl = this.$parent.$el;
        const tableLeft = tableEl.getBoundingClientRect().left;
        const columnEl = this.$el.querySelector(`th.${column.id}`);
        const columnRect = columnEl.getBoundingClientRect();
        const minLeft = columnRect.left - tableLeft + 30;

        columnEl.classList.add('noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft
        };

        const resizeProxy = this.$parent.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function() { return false; };
        document.ondragstart = function() { return false; };

        const handleMouseMove = (event) => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft;
          const proxyLeft = this.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        const handleMouseUp = () => {
          if (this.dragging) {
            const finalLeft = parseInt(resizeProxy.style.left, 10);
            const columnWidth = finalLeft - this.dragState.startColumnLeft;
            column.width = column.realWidth = columnWidth;

            this.store.scheduleLayout();

            document.body.style.cursor = '';
            this.dragging = false;
            this.draggingColumn = null;
            this.dragState = {};

            this.$parent.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function() {
            columnEl.classList.remove('noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },

    handleMouseMove(event, column) {
      const target = event.target;

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        let rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          this.draggingColumn = null;
          if (column.sortable) bodyStyle.cursor = 'pointer';
        }
      }
    },

    handleMouseOut() {
      document.body.style.cursor = '';
    },

    handleHeaderClick(event, column) {
      let target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if (target.classList.contains('noclick')) {
          target.classList.remove('noclick');
          return;
        }
      }

      if (!column.sortable) return;

      const sortCondition = this.store.states.sortCondition;

      if (sortCondition.column !== column) {
        if (sortCondition.column) {
          sortCondition.column.direction = '';
        }
        sortCondition.column = column;
        sortCondition.property = column.property;
      }

      if (!column.direction) {
        column.direction = 'ascending';
      } else if (column.direction === 'ascending') {
        column.direction = 'descending';
      } else {
        column.direction = '';
        sortCondition.column = null;
        sortCondition.property = null;
      }
      sortCondition.direction = column.direction === 'descending' ? -1 : 1;

      this.store.commit('changeSortCondition');
    }
  },

  data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
};
