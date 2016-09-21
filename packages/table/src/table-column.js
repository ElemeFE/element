import ElCheckbox from 'packages/checkbox/index.js';
import ElTag from 'packages/tag/index.js';
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
    headerTemplate: function(h) { return <div><el-checkbox nativeOn-click={ this.toggleAllSelection } domProps-value={ this.allSelected } on-input={ ($event) => this.$emit('allselectedchange', $event) } /></div>; },
    template: function(h, { row }) { return <el-checkbox domProps-value={ row.$selected } on-input={ ($event) => {row.$selected = $event;} } />; },
    sortable: false,
    resizable: false
  },
  index: {
    // headerTemplate: function(h) { return <div>#</div>; },
    headerTemplate: function(h, label) { return <div>{ label || '#' }</div>; },
    template: function(h, { row, $index }) { return <div>{ $index + 1 }</div>; },
    sortable: false
  },
  filter: {
    headerTemplate: function(h) { return <div>#</div>; },
    template: function(h, { row, column }) { return <el-tag type="primary" style="height: 16px; line-height: 16px; min-width: 40px; text-align: center">{ row[column.property] }</el-tag>; },
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
    formatter: Function
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

  created() {
    this.customRender = this.$options.render;
    this.$options.render = (h) => h('div');

    let columnId = this.columnId = (this.$parent.gridId || (this.$parent.columnId + '_')) + 'column_' + columnIdSeed++;

    let parent = this.$parent;
    if (!parent.gridId) {
      this.isChildColumn = true;
    }

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
    } else {
      minWidth = 80;
    }

    let isColumnGroup = false;
    let template;

    let property = this.property;
    if (property) {
      template = function(h, { row }, parent) {
        return <span>{ parent.$getPropertyText(row, property, columnId) }</span>;
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
      realWidth: width || minWidth,
      sortable: this.sortable,
      resizable: this.resizable,
      showTooltipWhenOverflow: this.showTooltipWhenOverflow,
      formatter: this.formatter
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
      };

      return _self.showTooltipWhenOverflow
        ? <el-tooltip
            on-created={ this.handleCreate }
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
    if (!this.$parent) {
      return;
    }
    let columns = this.$parent.columns;
    if (columns) {
      let columnId = this.columnId;
      for (let i = 0, j = columns.length; i < j; i++) {
        let column = columns[i];

        if (column.id === columnId) {
          columns.splice(i, 1);
          break;
        }
      }
    }

    if (this.isChildColumn) {
      if (this.$parent.$parent.$ready) {
        this.$parent.$parent.debouncedReRender();
      }
    } else {
      if (this.$parent.$ready) {
        this.$parent.debouncedReRender();
      }
    }
  },

  watch: {
    label(newVal) {
      if (this.columnConfig) {
        this.columnConfig.label = newVal;
      }
    },

    property(newVal) {
      if (this.columnConfig) {
        this.columnConfig.property = newVal;
      }
    }
  },

  mounted() {
    let parent = this.$parent;
    let columnConfig = this.columnConfig;
    let columnIndex;

    if (!this.isChildColumn) {
      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
    } else {
      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
    }

    parent.columns.splice(columnIndex, 0, columnConfig);

    if (this.isChildColumn) {
      parent.columnConfig.columns = parent.columns;

      if (parent.$parent.$ready) {
        parent.$parent.debouncedReRender();
      }
    } else {
      if (parent.$ready) {
        parent.debouncedReRender();
      }
    }
  }
};
