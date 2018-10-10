module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 353);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
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
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/shared");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/scroll-into-view");

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(354);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2484e1d8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(358);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2484e1d8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _menu = __webpack_require__(356);

var _menu2 = _interopRequireDefault(_menu);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _vuePopper = __webpack_require__(7);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(5);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(12);

var _debounce = __webpack_require__(14);

var _debounce2 = _interopRequireDefault(_debounce);

var _util = __webpack_require__(2);

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

var popperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: _vuePopper2.default.props.appendToBody,
    arrowOffset: _vuePopper2.default.props.arrowOffset,
    offset: _vuePopper2.default.props.offset,
    boundariesPadding: _vuePopper2.default.props.boundariesPadding,
    popperOptions: _vuePopper2.default.props.popperOptions
  },
  methods: _vuePopper2.default.methods,
  data: _vuePopper2.default.data,
  beforeDestroy: _vuePopper2.default.beforeDestroy
};

exports.default = {
  name: 'ElCascader',

  directives: { Clickoutside: _clickoutside2.default },

  mixins: [popperMixin, _emitter2.default, _locale2.default],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  components: {
    ElInput: _input2.default
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default: function _default() {
        return {
          children: 'children',
          label: 'label',
          value: 'value',
          disabled: 'disabled'
        };
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    separator: {
      type: String,
      default: '/'
    },
    placeholder: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.cascader.placeholder');
      }
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: false
    },
    changeOnSelect: Boolean,
    popperClass: String,
    expandTrigger: {
      type: String,
      default: 'click'
    },
    filterable: Boolean,
    size: String,
    showAllLevels: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    hoverThreshold: {
      type: Number,
      default: 500
    }
  },

  data: function data() {
    return {
      currentValue: this.value || [],
      menu: null,
      debouncedInputChange: function debouncedInputChange() {},

      menuVisible: false,
      inputHover: false,
      inputValue: '',
      flatOptions: null,
      id: (0, _util.generateId)(),
      needFocus: true,
      isOnComposition: false
    };
  },


  computed: {
    labelKey: function labelKey() {
      return this.props.label || 'label';
    },
    valueKey: function valueKey() {
      return this.props.value || 'value';
    },
    childrenKey: function childrenKey() {
      return this.props.children || 'children';
    },
    disabledKey: function disabledKey() {
      return this.props.disabled || 'disabled';
    },
    currentLabels: function currentLabels() {
      var _this = this;

      var options = this.options;
      var labels = [];
      this.currentValue.forEach(function (value) {
        var targetOption = options && options.filter(function (option) {
          return option[_this.valueKey] === value;
        })[0];
        if (targetOption) {
          labels.push(targetOption[_this.labelKey]);
          options = targetOption[_this.childrenKey];
        }
      });
      return labels;
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    cascaderSize: function cascaderSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    cascaderDisabled: function cascaderDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    readonly: function readonly() {
      var isIE = !this.$isServer && !isNaN(Number(document.documentMode));
      return !this.filterable || !isIE && !this.menuVisible;
    }
  },

  watch: {
    menuVisible: function menuVisible(value) {
      this.$refs.input.$refs.input.setAttribute('aria-expanded', value);
      value ? this.showMenu() : this.hideMenu();
    },
    value: function value(_value) {
      this.currentValue = _value;
    },
    currentValue: function currentValue(value) {
      this.dispatch('ElFormItem', 'el.form.change', [value]);
    },
    currentLabels: function currentLabels(value) {
      var inputLabel = this.showAllLevels ? value.join('/') : value[value.length - 1];
      this.$refs.input.$refs.input.setAttribute('value', inputLabel);
    },

    options: {
      deep: true,
      handler: function handler(value) {
        if (!this.menu) {
          this.initMenu();
        }
        this.flatOptions = this.flattenOptions(this.options);
        this.menu.options = value;
      }
    }
  },

  methods: {
    initMenu: function initMenu() {
      this.menu = new _vue2.default(_menu2.default).$mount();
      this.menu.options = this.options;
      this.menu.props = this.props;
      this.menu.expandTrigger = this.expandTrigger;
      this.menu.changeOnSelect = this.changeOnSelect;
      this.menu.popperClass = this.popperClass;
      this.menu.hoverThreshold = this.hoverThreshold;
      this.popperElm = this.menu.$el;
      this.menu.$refs.menus[0].setAttribute('id', 'cascader-menu-' + this.id);
      this.menu.$on('pick', this.handlePick);
      this.menu.$on('activeItemChange', this.handleActiveItemChange);
      this.menu.$on('menuLeave', this.doDestroy);
      this.menu.$on('closeInside', this.handleClickoutside);
    },
    showMenu: function showMenu() {
      var _this2 = this;

      if (!this.menu) {
        this.initMenu();
      }

      this.menu.value = this.currentValue.slice(0);
      this.menu.visible = true;
      this.menu.options = this.options;
      this.$nextTick(function (_) {
        _this2.updatePopper();
        _this2.menu.inputWidth = _this2.$refs.input.$el.offsetWidth - 2;
      });
    },
    hideMenu: function hideMenu() {
      this.inputValue = '';
      this.menu.visible = false;
      if (this.needFocus) {
        this.$refs.input.focus();
      } else {
        this.needFocus = true;
      }
    },
    handleActiveItemChange: function handleActiveItemChange(value) {
      var _this3 = this;

      this.$nextTick(function (_) {
        _this3.updatePopper();
      });
      this.$emit('active-item-change', value);
    },
    handleKeydown: function handleKeydown(e) {
      var _this4 = this;

      var keyCode = e.keyCode;
      if (keyCode === 13) {
        this.handleClick();
      } else if (keyCode === 40) {
        // down
        this.menuVisible = true; // 打开
        setTimeout(function () {
          var firstMenu = _this4.popperElm.querySelectorAll('.el-cascader-menu')[0];
          firstMenu.querySelectorAll("[tabindex='-1']")[0].focus();
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (keyCode === 27 || keyCode === 9) {
        // esc  tab
        this.inputValue = '';
        if (this.menu) this.menu.visible = false;
      }
    },
    handlePick: function handlePick(value) {
      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);

      if (close) {
        this.menuVisible = false;
      } else {
        this.$nextTick(this.updatePopper);
      }
    },
    handleInputChange: function handleInputChange(value) {
      var _this5 = this;

      if (!this.menuVisible) return;
      var flatOptions = this.flatOptions;

      if (!value) {
        this.menu.options = this.options;
        this.$nextTick(this.updatePopper);
        return;
      }

      var filteredFlatOptions = flatOptions.filter(function (optionsStack) {
        return optionsStack.some(function (option) {
          return new RegExp((0, _util.escapeRegexpString)(value), 'i').test(option[_this5.labelKey]);
        });
      });

      if (filteredFlatOptions.length > 0) {
        filteredFlatOptions = filteredFlatOptions.map(function (optionStack) {
          return {
            __IS__FLAT__OPTIONS: true,
            value: optionStack.map(function (item) {
              return item[_this5.valueKey];
            }),
            label: _this5.renderFilteredOptionLabel(value, optionStack),
            disabled: optionStack.some(function (item) {
              return item[_this5.disabledKey];
            })
          };
        });
      } else {
        filteredFlatOptions = [{
          __IS__FLAT__OPTIONS: true,
          label: this.t('el.cascader.noMatch'),
          value: '',
          disabled: true
        }];
      }
      this.menu.options = filteredFlatOptions;
      this.$nextTick(this.updatePopper);
    },
    renderFilteredOptionLabel: function renderFilteredOptionLabel(inputValue, optionsStack) {
      var _this6 = this;

      return optionsStack.map(function (option, index) {
        var label = option[_this6.labelKey];
        var keywordIndex = label.toLowerCase().indexOf(inputValue.toLowerCase());
        var labelPart = label.slice(keywordIndex, inputValue.length + keywordIndex);
        var node = keywordIndex > -1 ? _this6.highlightKeyword(label, labelPart) : label;
        return index === 0 ? node : [' / ', node];
      });
    },
    highlightKeyword: function highlightKeyword(label, keyword) {
      var _this7 = this;

      var h = this._c;
      return label.split(keyword).map(function (node, index) {
        return index === 0 ? node : [h('span', { class: { 'el-cascader-menu__item__keyword': true } }, [_this7._v(keyword)]), node];
      });
    },
    flattenOptions: function flattenOptions(options) {
      var _this8 = this;

      var ancestor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var flatOptions = [];
      options.forEach(function (option) {
        var optionsStack = ancestor.concat(option);
        if (!option[_this8.childrenKey]) {
          flatOptions.push(optionsStack);
        } else {
          if (_this8.changeOnSelect) {
            flatOptions.push(optionsStack);
          }
          flatOptions = flatOptions.concat(_this8.flattenOptions(option[_this8.childrenKey], optionsStack));
        }
      });
      return flatOptions;
    },
    clearValue: function clearValue(ev) {
      ev.stopPropagation();
      this.handlePick([], true);
    },
    handleClickoutside: function handleClickoutside() {
      var pickFinished = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.menuVisible && !pickFinished) {
        this.needFocus = false;
      }
      this.menuVisible = false;
    },
    handleClick: function handleClick() {
      if (this.cascaderDisabled) return;
      this.$refs.input.focus();
      if (this.filterable) {
        this.menuVisible = true;
        return;
      }
      this.menuVisible = !this.menuVisible;
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
    },
    handleComposition: function handleComposition(event) {
      this.isOnComposition = event.type !== 'compositionend';
    }
  },

  created: function created() {
    var _this9 = this;

    this.debouncedInputChange = (0, _debounce2.default)(this.debounce, function (value) {
      var before = _this9.beforeFilter(value);

      if (before && before.then) {
        _this9.menu.options = [{
          __IS__FLAT__OPTIONS: true,
          label: _this9.t('el.cascader.loading'),
          value: '',
          disabled: true
        }];
        before.then(function () {
          _this9.$nextTick(function () {
            _this9.handleInputChange(value);
          });
        });
      } else if (before !== false) {
        _this9.$nextTick(function () {
          _this9.handleInputChange(value);
        });
      }
    });
  },
  mounted: function mounted() {
    this.flatOptions = this.flattenOptions(this.options);
  }
};

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _babelHelperVueJsxMergeProps = __webpack_require__(45);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _shared = __webpack_require__(23);

var _scrollIntoView = __webpack_require__(26);

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copyArray = function copyArray(arr, props) {
  if (!arr || !Array.isArray(arr) || !props) return arr;
  var result = [];
  var configurableProps = ['__IS__FLAT__OPTIONS', 'label', 'value', 'disabled'];
  var childrenProp = props.children || 'children';
  arr.forEach(function (item) {
    var itemCopy = {};
    configurableProps.forEach(function (prop) {
      var name = props[prop];
      var value = item[name];
      if (value === undefined) {
        name = prop;
        value = item[name];
      }
      if (value !== undefined) itemCopy[name] = value;
    });
    if (Array.isArray(item[childrenProp])) {
      itemCopy[childrenProp] = copyArray(item[childrenProp], props);
    }
    result.push(itemCopy);
  });
  return result;
};

exports.default = {
  name: 'ElCascaderMenu',

  data: function data() {
    return {
      inputWidth: 0,
      options: [],
      props: {},
      visible: false,
      activeValue: [],
      value: [],
      expandTrigger: 'click',
      changeOnSelect: false,
      popperClass: '',
      hoverTimer: 0,
      clicking: false,
      id: (0, _util.generateId)()
    };
  },


  watch: {
    visible: function visible(value) {
      if (value) {
        this.activeValue = this.value;
      }
    },

    value: {
      immediate: true,
      handler: function handler(value) {
        this.activeValue = value;
      }
    }
  },

  computed: {
    activeOptions: {
      cache: false,
      get: function get() {
        var _this = this;

        var activeValue = this.activeValue;
        var configurableProps = ['label', 'value', 'children', 'disabled'];

        var formatOptions = function formatOptions(options) {
          options.forEach(function (option) {
            if (option.__IS__FLAT__OPTIONS) return;
            configurableProps.forEach(function (prop) {
              var value = option[_this.props[prop] || prop];
              if (value !== undefined) option[prop] = value;
            });
            if (Array.isArray(option.children)) {
              formatOptions(option.children);
            }
          });
        };

        var loadActiveOptions = function loadActiveOptions(options) {
          var activeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          var level = activeOptions.length;
          activeOptions[level] = options;
          var active = activeValue[level];
          if ((0, _shared.isDef)(active)) {
            options = options.filter(function (option) {
              return option.value === active;
            })[0];
            if (options && options.children) {
              loadActiveOptions(options.children, activeOptions);
            }
          }
          return activeOptions;
        };

        var optionsCopy = copyArray(this.options, this.props);
        formatOptions(optionsCopy);
        return loadActiveOptions(optionsCopy);
      }
    }
  },

  methods: {
    select: function select(item, menuIndex) {
      if (item.__IS__FLAT__OPTIONS) {
        this.activeValue = item.value;
      } else if (menuIndex) {
        this.activeValue.splice(menuIndex, this.activeValue.length - 1, item.value);
      } else {
        this.activeValue = [item.value];
      }
      this.$emit('pick', this.activeValue.slice());
    },
    handleMenuLeave: function handleMenuLeave() {
      this.$emit('menuLeave');
    },
    activeItem: function activeItem(item, menuIndex) {
      var len = this.activeOptions.length;
      this.activeValue.splice(menuIndex, len, item.value);
      this.activeOptions.splice(menuIndex + 1, len, item.children);
      if (this.changeOnSelect) {
        this.$emit('pick', this.activeValue.slice(), false);
      } else {
        this.$emit('activeItemChange', this.activeValue);
      }
    },
    scrollMenu: function scrollMenu(menu) {
      (0, _scrollIntoView2.default)(menu, menu.getElementsByClassName('is-active')[0]);
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this2 = this;

      this.$nextTick(function () {
        return _this2.$refs.menus.forEach(function (menu) {
          return _this2.scrollMenu(menu);
        });
      });
    }
  },

  render: function render(h) {
    var _this3 = this;

    var activeValue = this.activeValue,
        activeOptions = this.activeOptions,
        visible = this.visible,
        expandTrigger = this.expandTrigger,
        popperClass = this.popperClass,
        hoverThreshold = this.hoverThreshold;

    var itemId = null;
    var itemIndex = 0;

    var hoverMenuRefs = {};
    var hoverMenuHandler = function hoverMenuHandler(e) {
      var activeMenu = hoverMenuRefs.activeMenu;
      if (!activeMenu) return;
      var offsetX = e.offsetX;
      var width = activeMenu.offsetWidth;
      var height = activeMenu.offsetHeight;

      if (e.target === hoverMenuRefs.activeItem) {
        clearTimeout(_this3.hoverTimer);
        var _hoverMenuRefs = hoverMenuRefs,
            activeItem = _hoverMenuRefs.activeItem;

        var offsetY_top = activeItem.offsetTop;
        var offsetY_Bottom = offsetY_top + activeItem.offsetHeight;

        hoverMenuRefs.hoverZone.innerHTML = '\n          <path style="pointer-events: auto;" fill="transparent" d="M' + offsetX + ' ' + offsetY_top + ' L' + width + ' 0 V' + offsetY_top + ' Z" />\n          <path style="pointer-events: auto;" fill="transparent" d="M' + offsetX + ' ' + offsetY_Bottom + ' L' + width + ' ' + height + ' V' + offsetY_Bottom + ' Z" />\n        ';
      } else {
        if (!_this3.hoverTimer) {
          _this3.hoverTimer = setTimeout(function () {
            hoverMenuRefs.hoverZone.innerHTML = '';
          }, hoverThreshold);
        }
      }
    };

    var menus = this._l(activeOptions, function (menu, menuIndex) {
      var isFlat = false;
      var menuId = 'menu-' + _this3.id + '-' + menuIndex;
      var ownsId = 'menu-' + _this3.id + '-' + (menuIndex + 1);
      var items = _this3._l(menu, function (item) {
        var events = {
          on: {}
        };

        if (item.__IS__FLAT__OPTIONS) isFlat = true;

        if (!item.disabled) {
          // keydown up/down/left/right/enter
          events.on.keydown = function (ev) {
            var keyCode = ev.keyCode;
            if ([37, 38, 39, 40, 13, 9, 27].indexOf(keyCode) < 0) {
              return;
            }
            var currentEle = ev.target;
            var parentEle = _this3.$refs.menus[menuIndex];
            var menuItemList = parentEle.querySelectorAll("[tabindex='-1']");
            var currentIndex = Array.prototype.indexOf.call(menuItemList, currentEle); // 当前索引
            var nextIndex = void 0,
                nextMenu = void 0;
            if ([38, 40].indexOf(keyCode) > -1) {
              if (keyCode === 38) {
                // up键
                nextIndex = currentIndex !== 0 ? currentIndex - 1 : currentIndex;
              } else if (keyCode === 40) {
                // down
                nextIndex = currentIndex !== menuItemList.length - 1 ? currentIndex + 1 : currentIndex;
              }
              menuItemList[nextIndex].focus();
            } else if (keyCode === 37) {
              // left键
              if (menuIndex !== 0) {
                var previousMenu = _this3.$refs.menus[menuIndex - 1];
                previousMenu.querySelector('[aria-expanded=true]').focus();
              }
            } else if (keyCode === 39) {
              // right
              if (item.children) {
                // 有子menu 选择子menu的第一个menuitem
                nextMenu = _this3.$refs.menus[menuIndex + 1];
                nextMenu.querySelectorAll("[tabindex='-1']")[0].focus();
              }
            } else if (keyCode === 13) {
              if (!item.children) {
                var id = currentEle.getAttribute('id');
                parentEle.setAttribute('aria-activedescendant', id);
                _this3.select(item, menuIndex);
                _this3.$nextTick(function () {
                  return _this3.scrollMenu(_this3.$refs.menus[menuIndex]);
                });
              }
            } else if (keyCode === 9 || keyCode === 27) {
              // esc tab
              _this3.$emit('closeInside');
            }
          };
          if (item.children) {
            (function () {
              var triggerEvent = {
                click: 'click',
                hover: 'mouseenter'
              }[expandTrigger];
              var triggerHandler = function triggerHandler() {
                if (_this3.visible) {
                  _this3.activeItem(item, menuIndex);
                  _this3.$nextTick(function () {
                    // adjust self and next level
                    _this3.scrollMenu(_this3.$refs.menus[menuIndex]);
                    _this3.scrollMenu(_this3.$refs.menus[menuIndex + 1]);
                  });
                }
              };
              events.on[triggerEvent] = triggerHandler;
              if (triggerEvent === 'mouseenter' && _this3.changeOnSelect) {
                events.on.click = function () {
                  if (_this3.activeValue.indexOf(item.value) !== -1) {
                    _this3.$emit('closeInside', true);
                  }
                };
              }
              events.on['mousedown'] = function () {
                _this3.clicking = true;
              };
              events.on['focus'] = function () {
                // focus 选中
                if (_this3.clicking) {
                  _this3.clicking = false;
                  return;
                }
                triggerHandler();
              };
            })();
          } else {
            events.on.click = function () {
              _this3.select(item, menuIndex);
              _this3.$nextTick(function () {
                return _this3.scrollMenu(_this3.$refs.menus[menuIndex]);
              });
            };
          }
        }
        if (!item.disabled && !item.children) {
          // no children set id
          itemId = menuId + '-' + itemIndex;
          itemIndex++;
        }
        return h(
          'li',
          (0, _babelHelperVueJsxMergeProps2.default)([{
            'class': {
              'el-cascader-menu__item': true,
              'el-cascader-menu__item--extensible': item.children,
              'is-active': item.value === activeValue[menuIndex],
              'is-disabled': item.disabled
            },
            ref: item.value === activeValue[menuIndex] ? 'activeItem' : null
          }, events, {
            attrs: {
              tabindex: item.disabled ? null : -1,
              role: 'menuitem',
              'aria-haspopup': !!item.children,
              'aria-expanded': item.value === activeValue[menuIndex],
              id: itemId,
              'aria-owns': !item.children ? null : ownsId
            }
          }]),
          [item.label]
        );
      });
      var menuStyle = {};
      if (isFlat) {
        menuStyle.minWidth = _this3.inputWidth + 'px';
      }

      var isHoveredMenu = expandTrigger === 'hover' && activeValue.length - 1 === menuIndex;
      var hoverMenuEvent = {
        on: {}
      };

      if (isHoveredMenu) {
        hoverMenuEvent.on.mousemove = hoverMenuHandler;
        menuStyle.position = 'relative';
      }

      return h(
        'ul',
        (0, _babelHelperVueJsxMergeProps2.default)([{
          'class': {
            'el-cascader-menu': true,
            'el-cascader-menu--flexible': isFlat
          }
        }, hoverMenuEvent, {
          style: menuStyle,
          refInFor: true,
          ref: 'menus',
          attrs: { role: 'menu',
            id: menuId
          }
        }]),
        [items, isHoveredMenu ? h(
          'svg',
          {
            ref: 'hoverZone',
            style: {
              position: 'absolute',
              top: 0,
              height: '100%',
              width: '100%',
              left: 0,
              pointerEvents: 'none'
            }
          },
          []
        ) : null]
      );
    });

    if (expandTrigger === 'hover') {
      this.$nextTick(function () {
        var activeItem = _this3.$refs.activeItem;

        if (activeItem) {
          var activeMenu = activeItem.parentElement;
          var hoverZone = _this3.$refs.hoverZone;

          hoverMenuRefs = {
            activeMenu: activeMenu,
            activeItem: activeItem,
            hoverZone: hoverZone
          };
        } else {
          hoverMenuRefs = {};
        }
      });
    }

    return h(
      'transition',
      {
        attrs: { name: 'el-zoom-in-top' },
        on: {
          'before-enter': this.handleMenuEnter,
          'after-leave': this.handleMenuLeave
        }
      },
      [h(
        'div',
        {
          directives: [{
            name: 'show',
            value: visible
          }],

          'class': ['el-cascader-menus el-popper', popperClass],
          ref: 'wrapper'
        },
        [h(
          'div',
          {
            attrs: { 'x-arrow': true },
            'class': 'popper__arrow' },
          []
        ), menus]
      )]
    );
  }
};

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClickoutside),expression:"handleClickoutside"}],ref:"reference",staticClass:"el-cascader",class:[
    {
      'is-opened': _vm.menuVisible,
      'is-disabled': _vm.cascaderDisabled
    },
    _vm.cascaderSize ? 'el-cascader--' + _vm.cascaderSize : ''
  ],on:{"click":_vm.handleClick,"mouseenter":function($event){_vm.inputHover = true},"focus":function($event){_vm.inputHover = true},"mouseleave":function($event){_vm.inputHover = false},"blur":function($event){_vm.inputHover = false},"keydown":_vm.handleKeydown}},[_c('el-input',{ref:"input",class:{ 'is-focus': _vm.menuVisible },attrs:{"readonly":_vm.readonly,"placeholder":_vm.currentLabels.length ? undefined : _vm.placeholder,"validate-event":false,"size":_vm.size,"disabled":_vm.cascaderDisabled},on:{"input":_vm.debouncedInputChange,"focus":_vm.handleFocus,"blur":_vm.handleBlur},nativeOn:{"compositionstart":function($event){_vm.handleComposition($event)},"compositionend":function($event){_vm.handleComposition($event)}},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}},[_c('template',{attrs:{"slot":"suffix"},slot:"suffix"},[(_vm.clearable && _vm.inputHover && _vm.currentLabels.length)?_c('i',{key:"1",staticClass:"el-input__icon el-icon-circle-close el-cascader__clearIcon",on:{"click":_vm.clearValue}}):_c('i',{key:"2",staticClass:"el-input__icon el-icon-arrow-down",class:{ 'is-reverse': _vm.menuVisible }})])],2),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.inputValue === '' && !_vm.isOnComposition),expression:"inputValue === '' && !isOnComposition"}],staticClass:"el-cascader__label"},[(_vm.showAllLevels)?[_vm._l((_vm.currentLabels),function(label,index){return [_vm._v("\n        "+_vm._s(label)+"\n        "),(index < _vm.currentLabels.length - 1)?_c('span',{key:index},[_vm._v(" "+_vm._s(_vm.separator)+" ")]):_vm._e()]})]:[_vm._v("\n      "+_vm._s(_vm.currentLabels[_vm.currentLabels.length - 1])+"\n    ")]],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ })

/******/ });