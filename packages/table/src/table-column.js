import ElCheckbox from 'element-ui/packages/checkbox';
import ElTag from 'element-ui/packages/tag';
import objectAssign from 'element-ui/src/utils/merge';

let columnIdSeed = 1;

const defaults = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

const forced = {
  selection: {
    renderHeader: function(h) {
      return <el-checkbox
        nativeOn-click={ this.toggleAllSelection }
        domProps-value={ this.isAllSelected } />;
    },
    renderCell: function(h, { row, column, store, $index }) {
      return <el-checkbox
        domProps-value={ store.isSelected(row) }
        disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
        on-input={ () => { store.commit('rowSelectedChanged', row); } } />;
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function(h, { column }) {
      return column.label || '#';
    },
    renderCell: function(h, { $index }) {
      return <div>{ $index + 1 }</div>;
    },
    sortable: false
  }
};

const getDefaultColumn = function(type, options) {
  const column = {};

  objectAssign(column, defaults[type || 'default']);

  for (let name in options) {
    if (options.hasOwnProperty(name)) {
      const value = options[name];
      if (typeof value !== 'undefined') {
        column[name] = value;
      }
    }
  }

  if (!column.minWidth) {
    column.minWidth = 80;
  }

  column.realWidth = column.width || column.minWidth;

  return column;
};

const DEFAULT_RENDER_CELL = function(h, { row, column }, parent) {
  return <span>{ parent.getCellContent(row, column.property, column.id) }</span>;
};

export default {
  name: 'el-table-column',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    resizable: {
      type: Boolean,
      default: true
    },
    align: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filters: Array,
    filterMultiple: {
      type: Boolean,
      default: true
    }
  },

  render() {},

  data() {
    return {
      isChildColumn: false,
      columns: []
    };
  },

  beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
  },

  components: {
    ElCheckbox,
    ElTag
  },

  computed: {
    owner() {
      let parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    }
  },

  created() {
    this.customRender = this.$options.render;
    this.$options.render = (h) => h('div');

    let columnId = this.columnId = (this.$parent.tableId || (this.$parent.columnId + '_')) + 'column_' + columnIdSeed++;

    let parent = this.$parent;
    let owner = this.owner;
    this.isChildColumn = owner !== parent;

    let type = this.type;

    let width = this.width;
    if (width !== undefined) {
      width = parseInt(width, 10);
      if (isNaN(width)) {
        width = null;
      }
    }

    let minWidth = this.minWidth;
    if (minWidth !== undefined) {
      minWidth = parseInt(minWidth, 10);
      if (isNaN(minWidth)) {
        minWidth = 80;
      }
    }

    let isColumnGroup = false;

    let column = getDefaultColumn(type, {
      id: columnId,
      label: this.label,
      property: this.prop || this.property,
      type,
      renderCell: DEFAULT_RENDER_CELL,
      renderHeader: this.renderHeader,
      minWidth,
      width,
      isColumnGroup,
      align: this.align ? 'is-' + this.align : null,
      sortable: this.sortable,
      sortMethod: this.sortMethod,
      resizable: this.resizable,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      formatter: this.formatter,
      selectable: this.selectable,
      reserveSelection: this.reserveSelection,
      fixed: this.fixed,
      filterMethod: this.filterMethod,
      filters: this.filters,
      filterable: this.filters || this.filterMethod,
      filterMultiple: this.filterMultiple,
      filterOpened: false,
      filteredValue: []
    });

    objectAssign(column, forced[type] || {});

    let renderCell = column.renderCell;
    let _self = this;

    column.renderCell = function(h, data) {
      if (_self.$vnode.data.inlineTemplate) {
        renderCell = function() {
          data._staticTrees = _self._staticTrees;
          data.$options = {};
          data.$options.staticRenderFns = _self.$options.staticRenderFns;
          data._renderProxy = _self._renderProxy;
          data._m = _self._m;

          return _self.customRender.call(data);
        };
      }

      return _self.showOverflowTooltip || _self.showTooltipWhenOverflow
        ? <el-tooltip
            effect={ this.effect }
            placement="top"
            disabled={ this.tooltipDisabled }>
            <div class="cell">{ renderCell(h, data, this._renderProxy) }</div>
            <span slot="content">{ renderCell(h, data, this._renderProxy) }</span>
          </el-tooltip>
        : <div class="cell">{ renderCell(h, data, this._renderProxy) }</div>;
    };

    this.columnConfig = column;
  },

  destroyed() {
    if (!this.$parent) return;
    this.owner.store.commit('removeColumn', this.columnConfig);
  },

  watch: {
    label(newVal) {
      if (this.columnConfig) {
        this.columnConfig.label = newVal;
      }
    },

    prop(newVal) {
      if (this.columnConfig) {
        this.columnConfig.property = newVal;
      }
    },

    property(newVal) {
      if (this.columnConfig) {
        this.columnConfig.property = newVal;
      }
    },

    filters(newVal) {
      if (this.columnConfig) {
        this.columnConfig.filters = newVal;
      }
    },

    filterMultiple(newVal) {
      if (this.columnConfig) {
        this.columnConfig.filterMultiple = newVal;
      }
    },

    align(newVal) {
      if (this.columnConfig) {
        this.columnConfig.align = newVal;
      }
    },

    width(newVal) {
      if (this.columnConfig) {
        this.columnConfig.width = newVal;
        this.owner.scheduleLayout();
      }
    },

    minWidth(newVal) {
      if (this.columnConfig) {
        this.columnConfig.minWidth = newVal;
        this.owner.scheduleLayout();
      }
    },

    fixed(newVal) {
      if (this.columnConfig) {
        this.columnConfig.fixed = newVal;
        this.owner.scheduleLayout();
      }
    }
  },

  mounted() {
    const owner = this.owner;
    const parent = this.$parent;
    let columnIndex;

    if (!this.isChildColumn) {
      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
    } else {
      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
    }

    owner.store.commit('insertColumn', this.columnConfig, columnIndex);
  }
};
