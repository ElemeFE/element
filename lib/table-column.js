module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(327);


/***/ }),

/***/ 170:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/merge");

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _tableColumn = __webpack_require__(328);

	var _tableColumn2 = _interopRequireDefault(_tableColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_tableColumn2.default.install = function (Vue) {
	  Vue.component(_tableColumn2.default.name, _tableColumn2.default);
	};

	exports.default = _tableColumn2.default;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(313);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(270);

	var _tag2 = _interopRequireDefault(_tag);

	var _merge = __webpack_require__(170);

	var _merge2 = _interopRequireDefault(_merge);

	var _util = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	var columnIdSeed = 1;

	var defaults = {
	  default: {
	    order: ''
	  },
	  selection: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    order: '',
	    className: 'el-table-column--selection'
	  },
	  expand: {
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

	var forced = {
	  selection: {
	    renderHeader: function renderHeader(h) {
	      return h(
	        'el-checkbox',
	        {
	          nativeOn: {
	            'click': this.toggleAllSelection
	          },
	          attrs: {
	            value: this.isAllSelected }
	        },
	        []
	      );
	    },
	    renderCell: function renderCell(h, _ref) {
	      var row = _ref.row,
	          column = _ref.column,
	          store = _ref.store,
	          $index = _ref.$index;

	      return h(
	        'el-checkbox',
	        {
	          attrs: {
	            value: store.isSelected(row),
	            disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
	          },
	          on: {
	            'input': function input() {
	              store.commit('rowSelectedChanged', row);
	            }
	          }
	        },
	        []
	      );
	    },
	    sortable: false,
	    resizable: false
	  },
	  index: {
	    renderHeader: function renderHeader(h, _ref2) {
	      var column = _ref2.column;

	      return column.label || '#';
	    },
	    renderCell: function renderCell(h, _ref3) {
	      var $index = _ref3.$index;

	      return h(
	        'div',
	        null,
	        [$index + 1]
	      );
	    },
	    sortable: false
	  },
	  expand: {
	    renderHeader: function renderHeader(h, _ref4) {
	      _objectDestructuringEmpty(_ref4);

	      return '';
	    },
	    renderCell: function renderCell(h, _ref5, proxy) {
	      var row = _ref5.row,
	          store = _ref5.store;

	      var expanded = store.states.expandRows.indexOf(row) > -1;
	      return h(
	        'div',
	        { 'class': 'el-table__expand-icon ' + (expanded ? 'el-table__expand-icon--expanded' : ''),
	          on: {
	            'click': function click() {
	              return proxy.handleExpandClick(row);
	            }
	          }
	        },
	        [h(
	          'i',
	          { 'class': 'el-icon el-icon-arrow-right' },
	          []
	        )]
	      );
	    },
	    sortable: false,
	    resizable: false,
	    className: 'el-table__expand-column'
	  }
	};

	var getDefaultColumn = function getDefaultColumn(type, options) {
	  var column = {};

	  (0, _merge2.default)(column, defaults[type || 'default']);

	  for (var name in options) {
	    if (options.hasOwnProperty(name)) {
	      var value = options[name];
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

	var DEFAULT_RENDER_CELL = function DEFAULT_RENDER_CELL(h, _ref6) {
	  var row = _ref6.row,
	      column = _ref6.column;

	  var property = column.property;
	  var value = property && property.indexOf('.') === -1 ? row[property] : (0, _util.getValueByPath)(row, property);
	  if (column && column.formatter) {
	    return column.formatter(row, column, value);
	  }
	  return value;
	};

	exports.default = {
	  name: 'ElTableColumn',

	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    label: String,
	    className: String,
	    labelClassName: String,
	    property: String,
	    prop: String,
	    width: {},
	    minWidth: {},
	    renderHeader: Function,
	    sortable: {
	      type: [String, Boolean],
	      default: false
	    },
	    sortMethod: Function,
	    resizable: {
	      type: Boolean,
	      default: true
	    },
	    context: {},
	    columnKey: String,
	    align: String,
	    headerAlign: String,
	    showTooltipWhenOverflow: Boolean,
	    showOverflowTooltip: Boolean,
	    fixed: [Boolean, String],
	    formatter: Function,
	    selectable: Function,
	    reserveSelection: Boolean,
	    filterMethod: Function,
	    filteredValue: Array,
	    filters: Array,
	    filterPlacement: String,
	    filterMultiple: {
	      type: Boolean,
	      default: true
	    }
	  },

	  data: function data() {
	    return {
	      isSubColumn: false,
	      columns: []
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.row = {};
	    this.column = {};
	    this.$index = 0;
	  },


	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElTag: _tag2.default
	  },

	  computed: {
	    owner: function owner() {
	      var parent = this.$parent;
	      while (parent && !parent.tableId) {
	        parent = parent.$parent;
	      }
	      return parent;
	    }
	  },

	  created: function created() {
	    var _this = this;

	    var h = this.$createElement;

	    this.customRender = this.$options.render;
	    this.$options.render = function (h) {
	      return h('div', _this.$slots.default);
	    };
	    this.columnId = (this.$parent.tableId || this.$parent.columnId + '_') + 'column_' + columnIdSeed++;

	    var parent = this.$parent;
	    var owner = this.owner;
	    this.isSubColumn = owner !== parent;

	    var type = this.type;

	    var width = this.width;
	    if (width !== undefined) {
	      width = parseInt(width, 10);
	      if (isNaN(width)) {
	        width = null;
	      }
	    }

	    var minWidth = this.minWidth;
	    if (minWidth !== undefined) {
	      minWidth = parseInt(minWidth, 10);
	      if (isNaN(minWidth)) {
	        minWidth = 80;
	      }
	    }

	    var isColumnGroup = false;

	    var column = getDefaultColumn(type, {
	      id: this.columnId,
	      columnKey: this.columnKey,
	      label: this.label,
	      className: this.className,
	      labelClassName: this.labelClassName,
	      property: this.prop || this.property,
	      type: type,
	      renderCell: null,
	      renderHeader: this.renderHeader,
	      minWidth: minWidth,
	      width: width,
	      isColumnGroup: isColumnGroup,
	      context: this.context,
	      align: this.align ? 'is-' + this.align : null,
	      headerAlign: this.headerAlign ? 'is-' + this.headerAlign : this.align ? 'is-' + this.align : null,
	      sortable: this.sortable === '' ? true : this.sortable,
	      sortMethod: this.sortMethod,
	      resizable: this.resizable,
	      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
	      formatter: this.formatter,
	      selectable: this.selectable,
	      reserveSelection: this.reserveSelection,
	      fixed: this.fixed === '' ? true : this.fixed,
	      filterMethod: this.filterMethod,
	      filters: this.filters,
	      filterable: this.filters || this.filterMethod,
	      filterMultiple: this.filterMultiple,
	      filterOpened: false,
	      filteredValue: this.filteredValue || [],
	      filterPlacement: this.filterPlacement || ''
	    });

	    (0, _merge2.default)(column, forced[type] || {});

	    this.columnConfig = column;

	    var renderCell = column.renderCell;
	    var _self = this;

	    if (type === 'expand') {
	      owner.renderExpanded = function (h, data) {
	        return _self.$scopedSlots.default ? _self.$scopedSlots.default(data) : _self.$slots.default;
	      };

	      column.renderCell = function (h, data) {
	        return h(
	          'div',
	          { 'class': 'cell' },
	          [renderCell(h, data, this._renderProxy)]
	        );
	      };

	      return;
	    }

	    column.renderCell = function (h, data) {
	      // 未来版本移除
	      if (_self.$vnode.data.inlineTemplate) {
	        renderCell = function renderCell() {
	          data._self = _self.context || data._self;
	          if (Object.prototype.toString.call(data._self) === '[object Object]') {
	            for (var prop in data._self) {
	              if (!data.hasOwnProperty(prop)) {
	                data[prop] = data._self[prop];
	              }
	            }
	          }
	          // 静态内容会缓存到 _staticTrees 内，不改的话获取的静态数据就不是内部 context
	          data._staticTrees = _self._staticTrees;
	          data.$options.staticRenderFns = _self.$options.staticRenderFns;
	          return _self.customRender.call(data);
	        };
	      } else if (_self.$scopedSlots.default) {
	        renderCell = function renderCell() {
	          return _self.$scopedSlots.default(data);
	        };
	      }

	      if (!renderCell) {
	        renderCell = DEFAULT_RENDER_CELL;
	      }

	      return _self.showOverflowTooltip || _self.showTooltipWhenOverflow ? h(
	        'div',
	        { 'class': 'cell el-tooltip', style: 'width:' + (data.column.realWidth || data.column.width) + 'px' },
	        [renderCell(h, data)]
	      ) : h(
	        'div',
	        { 'class': 'cell' },
	        [renderCell(h, data)]
	      );
	    };
	  },
	  destroyed: function destroyed() {
	    if (!this.$parent) return;
	    this.owner.store.commit('removeColumn', this.columnConfig);
	  },


	  watch: {
	    label: function label(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.label = newVal;
	      }
	    },
	    prop: function prop(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    },
	    property: function property(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    },
	    filters: function filters(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.filters = newVal;
	      }
	    },
	    filterMultiple: function filterMultiple(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.filterMultiple = newVal;
	      }
	    },
	    align: function align(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.align = newVal ? 'is-' + newVal : null;

	        if (!this.headerAlign) {
	          this.columnConfig.headerAlign = newVal ? 'is-' + newVal : null;
	        }
	      }
	    },
	    headerAlign: function headerAlign(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.headerAlign = 'is-' + (newVal ? newVal : this.align);
	      }
	    },
	    width: function width(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.width = newVal;
	        this.owner.store.scheduleLayout();
	      }
	    },
	    minWidth: function minWidth(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.minWidth = newVal;
	        this.owner.store.scheduleLayout();
	      }
	    },
	    fixed: function fixed(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.fixed = newVal;
	        this.owner.store.scheduleLayout();
	      }
	    },
	    sortable: function sortable(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.sortable = newVal;
	      }
	    }
	  },

	  mounted: function mounted() {
	    var owner = this.owner;
	    var parent = this.$parent;
	    var columnIndex = void 0;

	    if (!this.isSubColumn) {
	      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
	    } else {
	      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
	    }

	    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
	  }
	};

/***/ })

/******/ });