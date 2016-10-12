import ElCheckbox from 'element-ui/packages/checkbox/index.js';
import ElTag from 'element-ui/packages/tag/index.js';
import objectAssign from 'object-assign';

let columnIdSeed = 1;

const defaults = {
  default: {
    direction: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    direction: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    direction: ''
  },
  filter: {
    headerTemplate: function(h) { return <span>filter header</span>; },
    direction: ''
  }
};

const forced = {
  selection: {
    headerTemplate: function(h) {
      return <div><el-checkbox
        nativeOn-click={ this.toggleAllSelection }
        domProps-value={ this.isAllSelected }
        on-input={ (value) => { this.$emit('allselectedchange', value); } } />
      </div>;
    },
    template: function(h, { row, column, store, $index }) {
      return <el-checkbox
        domProps-value={ row.$selected }
        disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
        on-input={ (value) => { row.$selected = value; store.commit('rowSelectedChanged', row); } } />;
    },
    sortable: false,
    resizable: false
  },
  index: {
    // headerTemplate: function(h) { return <div>#</div>; },
    headerTemplate: function(h, label) {
      return <div>{ label || '#' }</div>;
    },
    template: function(h, { row, $index }) {
      return <div>{ $index + 1 }</div>;
    },
    sortable: false
  },
  filter: {
    headerTemplate: function(h) {
      return <div>#</div>;
    },
    template: function(h, { row, column }) {
      return <el-tag type="primary" style="height: 16px; line-height: 16px; min-width: 40px; text-align: center">{ row[column.property] }</el-tag>;
    },
    resizable: false
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
    template: String,
    sortable: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: true
    },
    align: String,
    showTooltipWhenOverflow: {
      type: Boolean,
      default: false
    },
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function
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
    let template;

    let property = this.prop || this.property;
    if (property) {
      template = function(h, { row }, parent) {
        return <span>{ parent.getCellContent(row, property, columnId) }</span>;
      };
    }

    let column = getDefaultColumn(type, {
      id: columnId,
      label: this.label,
      property: this.property,
      type,
      template,
      minWidth,
      width,
      isColumnGroup,
      align: this.align ? 'is-' + this.align : null,
      sortable: this.sortable,
      resizable: this.resizable,
      showTooltipWhenOverflow: this.showTooltipWhenOverflow,
      formatter: this.formatter,
      selectable: this.selectable,
      fixed: this.fixed
    });

    objectAssign(column, forced[type] || {});

    let renderColumn = column.template;
    let _self = this;

    column.template = function(h, data) {
      if (_self.$vnode.data.inlineTemplate) {
        renderColumn = function() {
          data._staticTrees = _self._staticTrees;
          data.$options = {};
          data.$options.staticRenderFns = _self.$options.staticRenderFns;
          data._renderProxy = _self._renderProxy;
          data._m = _self._m;

          return _self.customRender.call(data);
        };
      }

      return _self.showTooltipWhenOverflow
        ? <el-tooltip
            effect={ this.effect }
            placement="top"
            disabled={ this.tooltipDisabled }>
            <div class="cell">{ renderColumn(h, data, this._renderProxy) }</div>
            <span slot="content">{ renderColumn(h, data, this._renderProxy) }</span>
          </el-tooltip>
        : <div class="cell">{ renderColumn(h, data, this._renderProxy) }</div>;
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
