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
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _inputNumber = __webpack_require__(119);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_inputNumber2.default.install = function (Vue) {
  Vue.component(_inputNumber2.default.name, _inputNumber2.default);
};

exports.default = _inputNumber2.default;

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_591d2a59_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__ = __webpack_require__(121);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_591d2a59_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _debounce = __webpack_require__(12);

var _debounce2 = _interopRequireDefault(_debounce);

var _focus = __webpack_require__(13);

var _focus2 = _interopRequireDefault(_focus);

var _repeatClick = __webpack_require__(23);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

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

exports.default = {
  name: 'ElInputNumber',
  mixins: [(0, _focus2.default)('input')],
  inject: {
    elFormItem: {
      default: ''
    }
  },
  directives: {
    repeatClick: _repeatClick2.default
  },
  components: {
    ElInput: _input2.default
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      default: 0
    },
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ''
    },
    debounce: {
      type: Number,
      default: 300
    },
    name: String,
    label: String
  },
  data: function data() {
    return {
      currentValue: 0
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var newVal = Number(value);
        if (isNaN(newVal)) return;
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    minDisabled: function minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled: function maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    precision: function precision() {
      var value = this.value,
          step = this.step,
          getPrecision = this.getPrecision;

      return Math.max(getPrecision(value), getPrecision(step));
    },
    controlsAtRight: function controlsAtRight() {
      return this.controlsPosition === 'right';
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    inputNumberSize: function inputNumberSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  methods: {
    toPrecision: function toPrecision(num, precision) {
      if (precision === undefined) precision = this.precision;
      return parseFloat(parseFloat(Number(num).toFixed(precision)));
    },
    getPrecision: function getPrecision(value) {
      var valueString = value.toString();
      var dotPosition = valueString.indexOf('.');
      var precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    _increase: function _increase(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      var precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease: function _decrease(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      var precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    increase: function increase() {
      if (this.disabled || this.maxDisabled) return;
      var value = this.value || 0;
      var newVal = this._increase(value, this.step);
      if (newVal > this.max) return;
      this.setCurrentValue(newVal);
    },
    decrease: function decrease() {
      if (this.disabled || this.minDisabled) return;
      var value = this.value || 0;
      var newVal = this._decrease(value, this.step);
      if (newVal < this.min) return;
      this.setCurrentValue(newVal);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
      this.$refs.input.setCurrentValue(this.currentValue);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
    },
    setCurrentValue: function setCurrentValue(newVal) {
      var oldVal = this.currentValue;
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) {
        this.$refs.input.setCurrentValue(this.currentValue);
        return;
      }
      this.$emit('change', newVal, oldVal);
      this.$emit('input', newVal);
      this.currentValue = newVal;
    },
    handleInput: function handleInput(value) {
      if (value === '') {
        return;
      }

      if (value.indexOf('.') === value.length - 1) {
        return;
      }

      if (value.indexOf('-') === value.length - 1) {
        return;
      }

      var newVal = Number(value);
      if (!isNaN(newVal)) {
        this.setCurrentValue(newVal);
      } else {
        this.$refs.input.setCurrentValue(this.currentValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    this.debounceHandleInput = (0, _debounce2.default)(this.debounce, function (value) {
      _this.handleInput(value);
    });
  },
  mounted: function mounted() {
    var innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('role', 'spinbutton');
    innerInput.setAttribute('aria-valuemax', this.max);
    innerInput.setAttribute('aria-valuemin', this.min);
    innerInput.setAttribute('aria-valuenow', this.currentValue);
    innerInput.setAttribute('aria-disabled', this.disabled);
  },
  updated: function updated() {
    var innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('aria-valuenow', this.currentValue);
  }
};

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-input-number",class:[
    _vm.inputNumberSize ? 'el-input-number--' + _vm.inputNumberSize : '',
    { 'is-disabled': _vm.disabled },
    { 'is-without-controls': !_vm.controls },
    { 'is-controls-right': _vm.controlsAtRight }
  ]},[(_vm.controls)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-input-number__decrease",class:{'is-disabled': _vm.minDisabled},attrs:{"role":"button"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.decrease($event)}}},[_c('i',{class:("el-icon-" + (_vm.controlsAtRight ? 'arrow-down' : 'minus'))})]):_vm._e(),(_vm.controls)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-input-number__increase",class:{'is-disabled': _vm.maxDisabled},attrs:{"role":"button"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.increase($event)}}},[_c('i',{class:("el-icon-" + (_vm.controlsAtRight ? 'arrow-up' : 'plus'))})]):_vm._e(),_c('el-input',{ref:"input",attrs:{"value":_vm.currentValue,"disabled":_vm.disabled,"size":_vm.inputNumberSize,"max":_vm.max,"min":_vm.min,"name":_vm.name,"label":_vm.label},on:{"blur":_vm.handleBlur,"focus":_vm.handleFocus,"input":_vm.debounceHandleInput},nativeOn:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }$event.preventDefault();_vm.increase($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }$event.preventDefault();_vm.decrease($event)}]}},[(_vm.$slots.prepend)?_c('template',{attrs:{"slot":"prepend"},slot:"prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.$slots.append)?_c('template',{attrs:{"slot":"append"},slot:"append"},[_vm._t("append")],2):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/focus");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(2);

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (new Date() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = new Date();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ })

/******/ });