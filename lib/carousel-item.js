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

	module.exports = __webpack_require__(48);


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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _item = __webpack_require__(49);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_item2.default.install = function (Vue) {
	  Vue.component(_item2.default.name, _item2.default);
	};

	exports.default = _item2.default;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(51),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
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

	var CARD_SCALE = 0.83;
	exports.default = {
	  name: 'ElCarouselItem',

	  props: {
	    name: String,
	    label: {
	      type: [String, Number],
	      default: ''
	    }
	  },

	  data: function data() {
	    return {
	      hover: false,
	      translate: 0,
	      scale: 1,
	      active: false,
	      ready: false,
	      inStage: false,
	      animating: false
	    };
	  },


	  methods: {
	    processIndex: function processIndex(index, activeIndex, length) {
	      if (activeIndex === 0 && index === length - 1) {
	        return -1;
	      } else if (activeIndex === length - 1 && index === 0) {
	        return length;
	      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
	        return length + 1;
	      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
	        return -2;
	      }
	      return index;
	    },
	    calculateTranslate: function calculateTranslate(index, activeIndex, parentWidth) {
	      if (this.inStage) {
	        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
	      } else if (index < activeIndex) {
	        return -(1 + CARD_SCALE) * parentWidth / 4;
	      } else {
	        return (3 + CARD_SCALE) * parentWidth / 4;
	      }
	    },
	    translateItem: function translateItem(index, activeIndex, oldIndex) {
	      var parentWidth = this.$parent.$el.offsetWidth;
	      var length = this.$parent.items.length;
	      if (this.$parent.type !== 'card' && oldIndex !== undefined) {
	        this.animating = index === activeIndex || index === oldIndex;
	      }
	      if (index !== activeIndex && length > 2) {
	        index = this.processIndex(index, activeIndex, length);
	      }
	      if (this.$parent.type === 'card') {
	        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
	        this.active = index === activeIndex;
	        this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
	        this.scale = this.active ? 1 : CARD_SCALE;
	      } else {
	        this.active = index === activeIndex;
	        this.translate = parentWidth * (index - activeIndex);
	      }
	      this.ready = true;
	    },
	    handleItemClick: function handleItemClick() {
	      var parent = this.$parent;
	      if (parent && parent.type === 'card') {
	        var index = parent.items.indexOf(this);
	        parent.setActiveItem(index);
	      }
	    }
	  },

	  created: function created() {
	    this.$parent && this.$parent.updateItems();
	  },
	  destroyed: function destroyed() {
	    this.$parent && this.$parent.updateItems();
	  }
	};

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.ready),
	      expression: "ready"
	    }],
	    staticClass: "el-carousel__item",
	    class: {
	      'is-active': _vm.active,
	      'el-carousel__item--card': _vm.$parent.type === 'card',
	        'is-in-stage': _vm.inStage,
	        'is-hover': _vm.hover,
	        'is-animating': _vm.animating
	    },
	    style: ({
	      msTransform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")"),
	      webkitTransform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")"),
	      transform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")")
	    }),
	    on: {
	      "click": _vm.handleItemClick
	    }
	  }, [(_vm.$parent.type === 'card') ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.active),
	      expression: "!active"
	    }],
	    staticClass: "el-carousel__mask"
	  }) : _vm._e(), _vm._t("default")], 2)
	},staticRenderFns: []}

/***/ })

/******/ });