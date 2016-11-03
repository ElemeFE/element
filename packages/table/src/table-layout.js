import { getScrollBarWidth } from './util';

let GUTTER_WIDTH;

class TableLayout {
  constructor(options) {
    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;

    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 44; // Table Header Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height

    if (GUTTER_WIDTH === undefined) {
      GUTTER_WIDTH = getScrollBarWidth();
    }
    this.gutterWidth = GUTTER_WIDTH;

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }

  updateScrollY() {
    const bodyWrapper = this.table.$refs.bodyWrapper;
    if (this.table.$el && bodyWrapper) {
      const body = bodyWrapper.querySelector('.el-table__body');

      this.scrollY = body.offsetHeight > bodyWrapper.offsetHeight;
    }
  }

  setHeight(height) {
    if (typeof height === 'string' && /^\d+$/.test(height)) {
      height = Number(height);
    }

    const el = this.table.$el;
    if (!isNaN(height) && el) {
      el.style.height = height + 'px';

      this.updateHeight();
    }
  }

  updateHeight() {
    const height = this.tableHeight = this.table.$el.clientHeight;
    const { headerWrapper } = this.table.$refs;
    if (!headerWrapper) return;
    const headerHeight = this.headerHeight = headerWrapper.offsetHeight;
    const bodyHeight = this.bodyHeight = height - headerHeight;
    this.fixedBodyHeight = this.scrollX ? bodyHeight - this.gutterWidth : bodyHeight;
    this.viewportHeight = this.scrollX ? height - this.gutterWidth : height;
  }

  update() {
    const fit = this.fit;
    const columns = this.table.columns;
    const bodyWidth = this.table.$el.clientWidth;
    let bodyMinWidth = 0;

    const flattenColumns = [];
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });

    let flexColumns = flattenColumns.filter((column) => typeof column.width !== 'number');

    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += column.width || column.minWidth || 80;
      });

      if (bodyMinWidth < bodyWidth - this.gutterWidth) { // DON'T HAVE SCROLL BAR
        this.scrollX = false;

        const totalFlexWidth = bodyWidth - this.gutterWidth - bodyMinWidth;

        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;

          flexColumns.forEach((column, index) => {
            if (index === 0) return;
            const flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });

          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else { // HAVE HORIZONTAL SCROLL BAR
        this.scrollX = true;
        flexColumns.forEach(function(column) {
          column.realWidth = column.minWidth;
        });
      }

      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        }

        bodyMinWidth += column.realWidth;
      });
      this.scrollX = bodyMinWidth > bodyWidth;

      this.bodyWidth = bodyMinWidth;
    }

    const fixedColumns = this.store.states.fixedColumns;

    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach(function(column) {
        fixedWidth += column.realWidth;
      });

      this.fixedWidth = fixedWidth;
    }

    const rightFixedColumns = this.store.states.rightFixedColumns;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach(function(column) {
        rightFixedWidth += column.realWidth;
      });

      this.rightFixedWidth = rightFixedWidth;
    }
  }
}

export default TableLayout;
