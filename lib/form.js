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

	module.exports = __webpack_require__(153);


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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _form = __webpack_require__(154);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_form2.default.install = function (Vue) {
	  Vue.component(_form2.default.name, _form2.default);
	};

	exports.default = _form2.default;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(155),
	  /* template */
	  __webpack_require__(156),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

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

	exports.default = {
	  name: 'ElForm',

	  componentName: 'ElForm',

	  props: {
	    model: Object,
	    rules: Object,
	    labelPosition: String,
	    labelWidth: String,
	    labelSuffix: {
	      type: String,
	      default: ''
	    },
	    inline: Boolean,
	    showMessage: {
	      type: Boolean,
	      default: true
	    }
	  },
	  watch: {
	    rules: function rules() {
	      this.validate();
	    }
	  },
	  data: function data() {
	    return {
	      fields: []
	    };
	  },
	  created: function created() {
	    var _this = this;

	    this.$on('el.form.addField', function (field) {
	      if (field) {
	        _this.fields.push(field);
	      }
	    });
	    /* istanbul ignore next */
	    this.$on('el.form.removeField', function (field) {
	      if (field.prop) {
	        _this.fields.splice(_this.fields.indexOf(field), 1);
	      }
	    });
	  },

	  methods: {
	    resetFields: function resetFields() {
	      if (!this.model) {
	        ("production") !== 'production' && console.warn('[Element Warn][Form]model is required for resetFields to work.');
	        return;
	      }
	      this.fields.forEach(function (field) {
	        field.resetField();
	      });
	    },
	    validate: function validate(callback) {
	      var _this2 = this;

	      if (!this.model) {
	        console.warn('[Element Warn][Form]model is required for validate to work!');
	        return;
	      };
	      var valid = true;
	      var count = 0;
	      // 如果需要验证的fields为空，调用验证时立刻返回callback
	      if (this.fields.length === 0 && callback) {
	        callback(true);
	      }
	      this.fields.forEach(function (field, index) {
	        field.validate('', function (errors) {
	          if (errors) {
	            valid = false;
	          }
	          if (typeof callback === 'function' && ++count === _this2.fields.length) {
	            callback(valid);
	          }
	        });
	      });
	    },
	    validateField: function validateField(prop, cb) {
	      var field = this.fields.filter(function (field) {
	        return field.prop === prop;
	      })[0];
	      if (!field) {
	        throw new Error('must call validateField with valid prop string!');
	      }

	      field.validate('', cb);
	    }
	  }
	};

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('form', {
	    staticClass: "el-form",
	    class: [
	      _vm.labelPosition ? 'el-form--label-' + _vm.labelPosition : '',
	      {
	        'el-form--inline': _vm.inline
	      }
	    ]
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ })

/******/ });