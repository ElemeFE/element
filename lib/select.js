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

	module.exports = __webpack_require__(264);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context =
	        context || // cached call
	        (this.$vnode && this.$vnode.ssrContext) || // stateful
	        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }

	  if (hook) {
	    var functional = options.functional
	    var existing = functional
	      ? options.render
	      : options.beforeCreate
	    if (!functional) {
	      // inject component registration as beforeCreate hook
	      options.beforeCreate = existing
	        ? [].concat(existing, hook)
	        : [hook]
	    } else {
	      // register for functioal component in vue file
	      options.render = function renderWithStyleInjection (h, context) {
	        hook.call(context)
	        return existing(h, context)
	      }
	    }
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/input");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/scrollbar");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/scroll-into-view");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/locale");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(218),
	  /* template */
	  __webpack_require__(220),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(14);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _util = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'ElOption',

	  componentName: 'ElOption',

	  props: {
	    value: {
	      required: true
	    },
	    label: [String, Number],
	    created: Boolean,
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      index: -1,
	      groupDisabled: false,
	      visible: true,
	      hitState: false
	    };
	  },


	  computed: {
	    isObject: function isObject() {
	      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
	    },
	    currentLabel: function currentLabel() {
	      return this.label || (this.isObject ? '' : this.value);
	    },
	    currentValue: function currentValue() {
	      return this.value || this.label || '';
	    },
	    parent: function parent() {
	      var result = this.$parent;
	      while (!result.isSelect) {
	        result = result.$parent;
	      }
	      return result;
	    },
	    itemSelected: function itemSelected() {
	      if (!this.parent.multiple) {
	        return this.isEqual(this.value, this.parent.value);
	      } else {
	        return this.contains(this.parent.value, this.value);
	      }
	    },
	    limitReached: function limitReached() {
	      if (this.parent.multiple) {
	        return !this.itemSelected && this.parent.value.length >= this.parent.multipleLimit && this.parent.multipleLimit > 0;
	      } else {
	        return false;
	      }
	    }
	  },

	  watch: {
	    currentLabel: function currentLabel() {
	      if (!this.created && !this.parent.remote) this.dispatch('ElSelect', 'setSelected');
	    },
	    value: function value() {
	      if (!this.created && !this.parent.remote) this.dispatch('ElSelect', 'setSelected');
	    }
	  },

	  methods: {
	    isEqual: function isEqual(a, b) {
	      if (!this.isObject) {
	        return a === b;
	      } else {
	        var valueKey = this.parent.valueKey;
	        return (0, _util.getValueByPath)(a, valueKey) === (0, _util.getValueByPath)(b, valueKey);
	      }
	    },
	    contains: function contains() {
	      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      var target = arguments[1];

	      if (!this.isObject) {
	        return arr.indexOf(target) > -1;
	      } else {
	        var valueKey = this.parent.valueKey;
	        return arr.some(function (item) {
	          return (0, _util.getValueByPath)(item, valueKey) === (0, _util.getValueByPath)(target, valueKey);
	        });
	      }
	    },
	    handleGroupDisabled: function handleGroupDisabled(val) {
	      this.groupDisabled = val;
	    },
	    hoverItem: function hoverItem() {
	      if (!this.disabled && !this.groupDisabled) {
	        this.parent.hoverIndex = this.parent.options.indexOf(this);
	      }
	    },
	    selectOptionClick: function selectOptionClick() {
	      if (this.disabled !== true && this.groupDisabled !== true) {
	        this.dispatch('ElSelect', 'handleOptionClick', this);
	      }
	    },
	    queryChange: function queryChange(query) {
	      // query 里如果有正则中的特殊字符，需要先将这些字符转义
	      var parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
	      this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel) || this.created;
	      if (!this.visible) {
	        this.parent.filteredOptionsCount--;
	      }
	    },
	    resetIndex: function resetIndex() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.index = _this.parent.options.indexOf(_this);
	      });
	    }
	  },

	  created: function created() {
	    this.parent.options.push(this);
	    this.parent.cachedOptions.push(this);
	    this.parent.optionsCount++;
	    this.parent.filteredOptionsCount++;
	    this.index = this.parent.options.indexOf(this);

	    this.$on('queryChange', this.queryChange);
	    this.$on('handleGroupDisabled', this.handleGroupDisabled);
	    this.$on('resetIndex', this.resetIndex);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.dispatch('ElSelect', 'onOptionDestroy', this);
	  }
	};

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-select-dropdown__item",
	    class: {
	      'selected': _vm.itemSelected,
	      'is-disabled': _vm.disabled || _vm.groupDisabled || _vm.limitReached,
	        'hover': _vm.parent.hoverIndex === _vm.index
	    },
	    on: {
	      "mouseenter": _vm.hoverItem,
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.selectOptionClick($event)
	      }
	    }
	  }, [_vm._t("default", [_c('span', [_vm._v(_vm._s(_vm.currentLabel))])])], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _select = __webpack_require__(265);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_select2.default.install = function (Vue) {
	  Vue.component(_select2.default.name, _select2.default);
	};

	exports.default = _select2.default;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(266),
	  /* template */
	  __webpack_require__(271),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var _emitter = __webpack_require__(14);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _locale = __webpack_require__(61);

	var _locale2 = _interopRequireDefault(_locale);

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _selectDropdown = __webpack_require__(267);

	var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

	var _option = __webpack_require__(217);

	var _option2 = _interopRequireDefault(_option);

	var _tag = __webpack_require__(270);

	var _tag2 = _interopRequireDefault(_tag);

	var _scrollbar = __webpack_require__(15);

	var _scrollbar2 = _interopRequireDefault(_scrollbar);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _clickoutside = __webpack_require__(10);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _dom = __webpack_require__(123);

	var _resizeEvent = __webpack_require__(46);

	var _locale3 = __webpack_require__(62);

	var _scrollIntoView = __webpack_require__(60);

	var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

	var _util = __webpack_require__(219);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sizeMap = {
	  'large': 42,
	  'small': 30,
	  'mini': 22
	};

	exports.default = {
	  mixins: [_emitter2.default, _locale2.default],

	  name: 'ElSelect',

	  componentName: 'ElSelect',

	  computed: {
	    iconClass: function iconClass() {
	      var criteria = this.clearable && !this.disabled && this.inputHovering && !this.multiple && this.value !== undefined && this.value !== '';
	      return criteria ? 'circle-close is-show-close' : this.remote && this.filterable ? '' : 'caret-top';
	    },
	    debounce: function debounce() {
	      return this.remote ? 300 : 0;
	    },
	    emptyText: function emptyText() {
	      if (this.loading) {
	        return this.loadingText || this.t('el.select.loading');
	      } else {
	        if (this.remote && this.query === '' && this.options.length === 0) return false;
	        if (this.filterable && this.options.length > 0 && this.filteredOptionsCount === 0) {
	          return this.noMatchText || this.t('el.select.noMatch');
	        }
	        if (this.options.length === 0) {
	          return this.noDataText || this.t('el.select.noData');
	        }
	      }
	      return null;
	    },
	    showNewOption: function showNewOption() {
	      var _this = this;

	      var hasExistingOption = this.options.filter(function (option) {
	        return !option.created;
	      }).some(function (option) {
	        return option.currentLabel === _this.query;
	      });
	      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
	    }
	  },

	  components: {
	    ElInput: _input2.default,
	    ElSelectMenu: _selectDropdown2.default,
	    ElOption: _option2.default,
	    ElTag: _tag2.default,
	    ElScrollbar: _scrollbar2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    name: String,
	    value: {
	      required: true
	    },
	    size: String,
	    disabled: Boolean,
	    clearable: Boolean,
	    filterable: Boolean,
	    allowCreate: Boolean,
	    loading: Boolean,
	    popperClass: String,
	    remote: Boolean,
	    loadingText: String,
	    noMatchText: String,
	    noDataText: String,
	    remoteMethod: Function,
	    filterMethod: Function,
	    multiple: Boolean,
	    multipleLimit: {
	      type: Number,
	      default: 0
	    },
	    placeholder: {
	      type: String,
	      default: function _default() {
	        return (0, _locale3.t)('el.select.placeholder');
	      }
	    },
	    defaultFirstOption: Boolean,
	    valueKey: {
	      type: String,
	      default: 'value'
	    }
	  },

	  data: function data() {
	    return {
	      options: [],
	      cachedOptions: [],
	      createdLabel: null,
	      createdSelected: false,
	      selected: this.multiple ? [] : {},
	      isSelect: true,
	      inputLength: 20,
	      inputWidth: 0,
	      cachedPlaceHolder: '',
	      optionsCount: 0,
	      filteredOptionsCount: 0,
	      visible: false,
	      selectedLabel: '',
	      hoverIndex: -1,
	      query: '',
	      optionsAllDisabled: false,
	      inputHovering: false,
	      currentPlaceholder: ''
	    };
	  },


	  watch: {
	    placeholder: function placeholder(val) {
	      this.cachedPlaceHolder = this.currentPlaceholder = val;
	    },
	    value: function value(val) {
	      if (this.multiple) {
	        this.resetInputHeight();
	        if (val.length > 0 || this.$refs.input && this.query !== '') {
	          this.currentPlaceholder = '';
	        } else {
	          this.currentPlaceholder = this.cachedPlaceHolder;
	        }
	      }
	      this.setSelected();
	      if (this.filterable && !this.multiple) {
	        this.inputLength = 20;
	      }
	      this.$emit('change', val);
	      this.dispatch('ElFormItem', 'el.form.change', val);
	    },
	    query: function query(val) {
	      var _this2 = this;

	      this.$nextTick(function () {
	        if (_this2.visible) _this2.broadcast('ElSelectDropdown', 'updatePopper');
	      });
	      this.hoverIndex = -1;
	      if (this.multiple && this.filterable) {
	        this.inputLength = this.$refs.input.value.length * 15 + 20;
	        this.managePlaceholder();
	        this.resetInputHeight();
	      }
	      if (this.remote && typeof this.remoteMethod === 'function') {
	        this.hoverIndex = -1;
	        this.remoteMethod(val);
	        this.broadcast('ElOption', 'resetIndex');
	      } else if (typeof this.filterMethod === 'function') {
	        this.filterMethod(val);
	        this.broadcast('ElOptionGroup', 'queryChange');
	      } else {
	        this.filteredOptionsCount = this.optionsCount;
	        this.broadcast('ElOption', 'queryChange', val);
	        this.broadcast('ElOptionGroup', 'queryChange');
	      }
	      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
	        this.checkDefaultFirstOption();
	      }
	    },
	    visible: function visible(val) {
	      var _this3 = this;

	      if (!val) {
	        this.$refs.reference.$el.querySelector('input').blur();
	        this.handleIconHide();
	        this.broadcast('ElSelectDropdown', 'destroyPopper');
	        if (this.$refs.input) {
	          this.$refs.input.blur();
	        }
	        this.query = '';
	        this.selectedLabel = '';
	        this.inputLength = 20;
	        this.resetHoverIndex();
	        this.$nextTick(function () {
	          if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
	            _this3.currentPlaceholder = _this3.cachedPlaceHolder;
	          }
	        });
	        if (!this.multiple) {
	          if (this.selected) {
	            if (this.filterable && this.allowCreate && this.createdSelected && this.createdOption) {
	              this.selectedLabel = this.createdLabel;
	            } else {
	              this.selectedLabel = this.selected.currentLabel;
	            }
	            if (this.filterable) this.query = this.selectedLabel;
	          }
	        }
	      } else {
	        this.handleIconShow();
	        this.broadcast('ElSelectDropdown', 'updatePopper');
	        if (this.filterable) {
	          this.query = this.selectedLabel;
	          if (this.multiple) {
	            this.$refs.input.focus();
	          } else {
	            if (!this.remote) {
	              this.broadcast('ElOption', 'queryChange', '');
	              this.broadcast('ElOptionGroup', 'queryChange');
	            }
	            this.broadcast('ElInput', 'inputSelect');
	          }
	        }
	      }
	      this.$emit('visible-change', val);
	    },
	    options: function options(val) {
	      if (this.$isServer) return;
	      this.optionsAllDisabled = val.length === val.filter(function (item) {
	        return item.disabled === true;
	      }).length;
	      if (this.multiple) {
	        this.resetInputHeight();
	      }
	      var inputs = this.$el.querySelectorAll('input');
	      if ([].indexOf.call(inputs, document.activeElement) === -1) {
	        this.setSelected();
	      }
	      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
	        this.checkDefaultFirstOption();
	      }
	    }
	  },

	  methods: {
	    handleIconHide: function handleIconHide() {
	      var icon = this.$el.querySelector('.el-input__icon');
	      if (icon) {
	        (0, _dom.removeClass)(icon, 'is-reverse');
	      }
	    },
	    handleIconShow: function handleIconShow() {
	      var icon = this.$el.querySelector('.el-input__icon');
	      if (icon && !(0, _dom.hasClass)(icon, 'el-icon-circle-close')) {
	        (0, _dom.addClass)(icon, 'is-reverse');
	      }
	    },
	    scrollToOption: function scrollToOption(option) {
	      var target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
	      if (this.$refs.popper && target) {
	        var menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
	        (0, _scrollIntoView2.default)(menu, target);
	      }
	    },
	    handleMenuEnter: function handleMenuEnter() {
	      var _this4 = this;

	      this.$nextTick(function () {
	        return _this4.scrollToOption(_this4.selected);
	      });
	    },
	    getOption: function getOption(value) {
	      var option = void 0;
	      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
	      for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
	        var cachedOption = this.cachedOptions[i];
	        var isEqual = isObject ? (0, _util.getValueByPath)(cachedOption.value, this.valueKey) === (0, _util.getValueByPath)(value, this.valueKey) : cachedOption.value === value;
	        if (isEqual) {
	          option = cachedOption;
	          break;
	        }
	      }
	      if (option) return option;
	      var label = !isObject ? value : '';
	      var newOption = {
	        value: value,
	        currentLabel: label
	      };
	      if (this.multiple) {
	        newOption.hitState = false;
	      }
	      return newOption;
	    },
	    setSelected: function setSelected() {
	      var _this5 = this;

	      if (!this.multiple) {
	        var option = this.getOption(this.value);
	        if (option.created) {
	          this.createdLabel = option.currentLabel;
	          this.createdSelected = true;
	        } else {
	          this.createdSelected = false;
	        }
	        this.selectedLabel = option.currentLabel;
	        this.selected = option;
	        if (this.filterable) this.query = this.selectedLabel;
	        return;
	      }
	      var result = [];
	      if (Array.isArray(this.value)) {
	        this.value.forEach(function (value) {
	          result.push(_this5.getOption(value));
	        });
	      }
	      this.selected = result;
	      this.$nextTick(function () {
	        _this5.resetInputHeight();
	      });
	    },
	    handleFocus: function handleFocus() {
	      this.visible = true;
	    },
	    handleIconClick: function handleIconClick(event) {
	      if (this.iconClass.indexOf('circle-close') > -1) {
	        this.deleteSelected(event);
	      } else {
	        this.toggleMenu();
	      }
	    },
	    handleMouseDown: function handleMouseDown(event) {
	      if (event.target.tagName !== 'INPUT') return;
	      if (this.visible) {
	        this.handleClose();
	        event.preventDefault();
	      }
	    },
	    doDestroy: function doDestroy() {
	      this.$refs.popper && this.$refs.popper.doDestroy();
	      this.dropdownUl = null;
	    },
	    handleClose: function handleClose() {
	      this.visible = false;
	    },
	    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
	      if (!Array.isArray(this.selected)) return;
	      var option = this.selected[this.selected.length - 1];
	      if (!option) return;

	      if (hit === true || hit === false) {
	        option.hitState = hit;
	        return hit;
	      }

	      option.hitState = !option.hitState;
	      return option.hitState;
	    },
	    deletePrevTag: function deletePrevTag(e) {
	      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
	        var value = this.value.slice();
	        value.pop();
	        this.$emit('input', value);
	      }
	    },
	    managePlaceholder: function managePlaceholder() {
	      if (this.currentPlaceholder !== '') {
	        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
	      }
	    },
	    resetInputState: function resetInputState(e) {
	      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
	      this.inputLength = this.$refs.input.value.length * 15 + 20;
	      this.resetInputHeight();
	    },
	    resetInputHeight: function resetInputHeight() {
	      var _this6 = this;

	      this.$nextTick(function () {
	        if (!_this6.$refs.reference) return;
	        var inputChildNodes = _this6.$refs.reference.$el.childNodes;
	        var input = [].filter.call(inputChildNodes, function (item) {
	          return item.tagName === 'INPUT';
	        })[0];
	        input.style.height = Math.max(_this6.$refs.tags.clientHeight + 6, sizeMap[_this6.size] || 36) + 'px';
	        if (_this6.visible && _this6.emptyText !== false) {
	          _this6.broadcast('ElSelectDropdown', 'updatePopper');
	        }
	      });
	    },
	    resetHoverIndex: function resetHoverIndex() {
	      var _this7 = this;

	      setTimeout(function () {
	        if (!_this7.multiple) {
	          _this7.hoverIndex = _this7.options.indexOf(_this7.selected);
	        } else {
	          if (_this7.selected.length > 0) {
	            _this7.hoverIndex = Math.min.apply(null, _this7.selected.map(function (item) {
	              return _this7.options.indexOf(item);
	            }));
	          } else {
	            _this7.hoverIndex = -1;
	          }
	        }
	      }, 300);
	    },
	    handleOptionSelect: function handleOptionSelect(option) {
	      var _this8 = this;

	      if (this.multiple) {
	        var value = this.value.slice();
	        var optionIndex = this.getValueIndex(value, option.value);
	        if (optionIndex > -1) {
	          value.splice(optionIndex, 1);
	        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
	          value.push(option.value);
	        }
	        this.$emit('input', value);
	        if (option.created) {
	          this.query = '';
	          this.inputLength = 20;
	        }
	        if (this.filterable) this.$refs.input.focus();
	      } else {
	        this.$emit('input', option.value);
	        this.visible = false;
	      }
	      this.$nextTick(function () {
	        return _this8.scrollToOption(option);
	      });
	    },
	    getValueIndex: function getValueIndex() {
	      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      var value = arguments[1];

	      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
	      if (!isObject) {
	        return arr.indexOf(value);
	      } else {
	        var valueKey = this.valueKey;
	        var index = -1;
	        arr.some(function (item, i) {
	          if ((0, _util.getValueByPath)(item, valueKey) === (0, _util.getValueByPath)(value, valueKey)) {
	            index = i;
	            return true;
	          }
	          return false;
	        });
	        return index;
	      }
	    },
	    toggleMenu: function toggleMenu() {
	      if (this.filterable && this.query === '' && this.visible) {
	        return;
	      }
	      if (!this.disabled) {
	        this.visible = !this.visible;
	      }
	    },
	    navigateOptions: function navigateOptions(direction) {
	      var _this9 = this;

	      if (!this.visible) {
	        this.visible = true;
	        return;
	      }
	      if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
	      this.optionsAllDisabled = this.options.length === this.options.filter(function (item) {
	        return item.disabled === true;
	      }).length;
	      if (!this.optionsAllDisabled) {
	        if (direction === 'next') {
	          this.hoverIndex++;
	          if (this.hoverIndex === this.options.length) {
	            this.hoverIndex = 0;
	          }
	          if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true || !this.options[this.hoverIndex].visible) {
	            this.navigateOptions('next');
	          }
	        }
	        if (direction === 'prev') {
	          this.hoverIndex--;
	          if (this.hoverIndex < 0) {
	            this.hoverIndex = this.options.length - 1;
	          }
	          if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true || !this.options[this.hoverIndex].visible) {
	            this.navigateOptions('prev');
	          }
	        }
	      }
	      this.$nextTick(function () {
	        return _this9.scrollToOption(_this9.options[_this9.hoverIndex]);
	      });
	    },
	    selectOption: function selectOption() {
	      if (this.options[this.hoverIndex]) {
	        this.handleOptionSelect(this.options[this.hoverIndex]);
	      }
	    },
	    deleteSelected: function deleteSelected(event) {
	      event.stopPropagation();
	      this.$emit('input', '');
	      this.visible = false;
	      this.$emit('clear');
	    },
	    deleteTag: function deleteTag(event, tag) {
	      var index = this.selected.indexOf(tag);
	      if (index > -1 && !this.disabled) {
	        var value = this.value.slice();
	        value.splice(index, 1);
	        this.$emit('input', value);
	        this.$emit('remove-tag', tag);
	      }
	      event.stopPropagation();
	    },
	    onInputChange: function onInputChange() {
	      if (this.filterable) {
	        this.query = this.selectedLabel;
	      }
	    },
	    onOptionDestroy: function onOptionDestroy(option) {
	      this.optionsCount--;
	      this.filteredOptionsCount--;
	      var index = this.options.indexOf(option);
	      if (index > -1) {
	        this.options.splice(index, 1);
	      }
	      this.broadcast('ElOption', 'resetIndex');
	    },
	    resetInputWidth: function resetInputWidth() {
	      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
	    },
	    handleResize: function handleResize() {
	      this.resetInputWidth();
	      if (this.multiple) this.resetInputHeight();
	    },
	    checkDefaultFirstOption: function checkDefaultFirstOption() {
	      this.hoverIndex = -1;
	      for (var i = 0; i !== this.options.length; ++i) {
	        var option = this.options[i];
	        if (this.query) {
	          // pick first options that passes the filter
	          if (!option.disabled && !option.groupDisabled && option.visible) {
	            this.hoverIndex = i;
	            break;
	          }
	        } else {
	          // pick currently selected option
	          if (option.itemSelected) {
	            this.hoverIndex = i;
	            break;
	          }
	        }
	      }
	    },
	    getValueKey: function getValueKey(item) {
	      var type = _typeof(item.value);
	      if (type === 'number' || type === 'string') {
	        return item.value;
	      } else {
	        return (0, _util.getValueByPath)(item.value, this.valueKey);
	      }
	    }
	  },

	  created: function created() {
	    var _this10 = this;

	    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
	    if (this.multiple && !Array.isArray(this.value)) {
	      this.$emit('input', []);
	    }
	    if (!this.multiple && Array.isArray(this.value)) {
	      this.$emit('input', '');
	    }
	    this.setSelected();

	    this.debouncedOnInputChange = (0, _debounce2.default)(this.debounce, function () {
	      _this10.onInputChange();
	    });

	    this.$on('handleOptionClick', this.handleOptionSelect);
	    this.$on('onOptionDestroy', this.onOptionDestroy);
	    this.$on('setSelected', this.setSelected);
	  },
	  mounted: function mounted() {
	    var _this11 = this;

	    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
	      this.currentPlaceholder = '';
	    }
	    (0, _resizeEvent.addResizeListener)(this.$el, this.handleResize);
	    if (this.remote && this.multiple) {
	      this.resetInputHeight();
	    }
	    this.$nextTick(function () {
	      if (_this11.$refs.reference && _this11.$refs.reference.$el) {
	        _this11.inputWidth = _this11.$refs.reference.$el.getBoundingClientRect().width;
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el && this.handleResize) (0, _resizeEvent.removeResizeListener)(this.$el, this.handleResize);
	  }
	};

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(268),
	  /* template */
	  __webpack_require__(269),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(13);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSelectDropdown',

	  componentName: 'ElSelectDropdown',

	  mixins: [_vuePopper2.default],

	  props: {
	    placement: {
	      default: 'bottom-start'
	    },

	    boundariesPadding: {
	      default: 0
	    },

	    popperOptions: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      minWidth: ''
	    };
	  },


	  computed: {
	    popperClass: function popperClass() {
	      return this.$parent.popperClass;
	    }
	  },

	  watch: {
	    '$parent.inputWidth': function $parentInputWidth() {
	      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.referenceElm = this.$parent.$refs.reference.$el;
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on('updatePopper', function () {
	      if (_this.$parent.visible) _this.updatePopper();
	    });
	    this.$on('destroyPopper', this.destroyPopper);
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-select-dropdown",
	    class: [{
	      'is-multiple': _vm.$parent.multiple
	    }, _vm.popperClass],
	    style: ({
	      minWidth: _vm.minWidth
	    })
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClose),
	      expression: "handleClose"
	    }],
	    staticClass: "el-select"
	  }, [(_vm.multiple) ? _c('div', {
	    ref: "tags",
	    staticClass: "el-select__tags",
	    style: ({
	      'max-width': _vm.inputWidth - 32 + 'px'
	    }),
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.toggleMenu($event)
	      }
	    }
	  }, [_c('transition-group', {
	    on: {
	      "after-leave": _vm.resetInputHeight
	    }
	  }, _vm._l((_vm.selected), function(item) {
	    return _c('el-tag', {
	      key: _vm.getValueKey(item),
	      attrs: {
	        "closable": !_vm.disabled,
	        "hit": item.hitState,
	        "type": "primary",
	        "close-transition": ""
	      },
	      on: {
	        "close": function($event) {
	          _vm.deleteTag($event, item)
	        }
	      }
	    }, [_c('span', {
	      staticClass: "el-select__tags-text"
	    }, [_vm._v(_vm._s(item.currentLabel))])])
	  })), (_vm.filterable) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.query),
	      expression: "query"
	    }],
	    ref: "input",
	    staticClass: "el-select__input",
	    class: ("is-" + _vm.size),
	    style: ({
	      width: _vm.inputLength + 'px',
	      'max-width': _vm.inputWidth - 42 + 'px'
	    }),
	    attrs: {
	      "type": "text",
	      "disabled": _vm.disabled,
	      "debounce": _vm.remote ? 300 : 0
	    },
	    domProps: {
	      "value": (_vm.query)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.visible = true
	      },
	      "keyup": _vm.managePlaceholder,
	      "keydown": [_vm.resetInputState, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
	        _vm.deletePrevTag($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.query = $event.target.value
	      }
	    }
	  }) : _vm._e()], 1) : _vm._e(), _c('el-input', {
	    ref: "reference",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.currentPlaceholder,
	      "name": _vm.name,
	      "size": _vm.size,
	      "disabled": _vm.disabled,
	      "readonly": !_vm.filterable || _vm.multiple,
	      "validate-event": false,
	      "icon": _vm.iconClass
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "click": _vm.handleIconClick
	    },
	    nativeOn: {
	      "mousedown": function($event) {
	        _vm.handleMouseDown($event)
	      },
	      "keyup": function($event) {
	        _vm.debouncedOnInputChange($event)
	      },
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
	        _vm.visible = false
	      }],
	      "paste": function($event) {
	        _vm.debouncedOnInputChange($event)
	      },
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      }
	    },
	    model: {
	      value: (_vm.selectedLabel),
	      callback: function($$v) {
	        _vm.selectedLabel = $$v
	      },
	      expression: "selectedLabel"
	    }
	  }), _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    },
	    on: {
	      "before-enter": _vm.handleMenuEnter,
	      "after-leave": _vm.doDestroy
	    }
	  }, [_c('el-select-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible && _vm.emptyText !== false),
	      expression: "visible && emptyText !== false"
	    }],
	    ref: "popper"
	  }, [_c('el-scrollbar', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.options.length > 0 && !_vm.loading),
	      expression: "options.length > 0 && !loading"
	    }],
	    class: {
	      'is-empty': !_vm.allowCreate && _vm.filteredOptionsCount === 0
	    },
	    attrs: {
	      "tag": "ul",
	      "wrap-class": "el-select-dropdown__wrap",
	      "view-class": "el-select-dropdown__list"
	    }
	  }, [(_vm.showNewOption) ? _c('el-option', {
	    attrs: {
	      "value": _vm.query,
	      "created": ""
	    }
	  }) : _vm._e(), _vm._t("default")], 2), (_vm.emptyText && (_vm.allowCreate && _vm.options.length === 0 || !_vm.allowCreate)) ? _c('p', {
	    staticClass: "el-select-dropdown__empty"
	  }, [_vm._v(_vm._s(_vm.emptyText))]) : _vm._e()], 1)], 1)], 1)
	},staticRenderFns: []}

/***/ })

/******/ });