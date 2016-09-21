import ElCheckbox from 'packages/checkbox/index.js';
import ElTag from 'packages/tag/index.js';

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
            />).concat(
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
                    ).concat(this.$parent.showVScrollBar && this.$parent.currentGutterWidth ? <th class="gutter"
                              style={{ width: this.$parent.currentGutterWidth + 'px' }}></th> : '')
                  }
                </tr>
              </thead>
            )
        }
      </table>
    );
  },

  props: {
    columns: {},
    fixed: Boolean,
    allSelected: {
      default: Boolean
    },
    border: Boolean
  },

  components: {
    ElCheckbox,
    ElTag
  },

  methods: {
    toggleAllSelection($event) {
      this.$parent.toggleAllSelection($event);
    },

    handleMouseDown(event, column) {
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        const gridEl = this.$parent.$el;
        const gridLeft = gridEl.getBoundingClientRect().left;
        const columnEl = this.$el.querySelector(`th.${column.id}`);
        const columnRect = columnEl.getBoundingClientRect();
        const minLeft = columnRect.left - gridLeft + 30;

        columnEl.classList.add('noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - gridLeft,
          startColumnLeft: columnRect.left - gridLeft,
          gridLeft: gridLeft
        };

        const resizeProxy = this.$parent.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function() { return false; };
        document.ondragstart = function() { return false; };

        const mousemove = (event) => {
          const deltaLeft = event.clientX - this.dragState.startMouseLeft;
          const proxyLeft = this.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        const mouseup = () => {
          if (this.dragging) {
            const finalLeft = parseInt(resizeProxy.style.left, 10);
            const columnWidth = finalLeft - this.dragState.startColumnLeft;
            column.width = column.realWidth = columnWidth;

            this.$nextTick(() => {
              this.$parent.$calcColumns();
            });

            document.body.style.cursor = '';
            this.dragging = false;
            this.draggingColumn = null;
            this.dragState = {};

            this.$parent.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', mousemove);
          document.removeEventListener('mouseup', mouseup);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function() {
            columnEl.classList.remove('noclick');
          }, 0);
        };

        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
      }
    },

    handleMouseMove(event, column) {
      const target = event.target;

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        let rect = target.getBoundingClientRect();

        if (rect.width > 12 && rect.right - event.pageX < 8) {
          document.body.style.cursor = 'col-resize';
          this.draggingColumn = column;
        } else if (!this.dragging) {
          document.body.style.cursor = '';
          this.draggingColumn = null;
          if (column.sortable) document.body.style.cursor = 'pointer';
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

      const grid = this.$parent;

      if (grid.sortingColumn !== column) {
        if (grid.sortingColumn) {
          grid.sortingColumn.direction = '';
        }
        grid.sortingColumn = column;
        grid.sortingProperty = column.property;
      }

      if (!column.direction) {
        column.direction = 'ascending';
      } else if (column.direction === 'ascending') {
        column.direction = 'descending';
      } else {
        column.direction = '';
        grid.sortingColumn = null;
        grid.sortingProperty = null;
      }

      grid.sortingDirection = column.direction === 'descending' ? -1 : 1;
    },

    $setVisibleFilter(property) {
      if (this.visibleFilter) {
        this.visibleFilter = null;
      } else {
        this.visibleFilter = property;
      }
    }
  },

  watch: {
    visibleFilter(val) {
      this.$parent.visibleFilter = val;
    }
  },

  data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {},
      columnsMap: null,
      visibleFilter: null
    };
  }
};
