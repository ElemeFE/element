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

	module.exports = __webpack_require__(291);


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

/***/ 14:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/transitions/collapse-transition");

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'ElMenu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    rootMenu: function rootMenu() {
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    parentMenu: function parentMenu() {
	      var parent = this.$parent;
	      while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    paddingStyle: function paddingStyle() {
	      if (this.rootMenu.mode !== 'vertical') return {};

	      var padding = this.rootMenu.leftPadding;
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        if (parent.$options.componentName === 'ElSubmenu') {
	          padding += this.rootMenu.leftPadding;
	        }
	        parent = parent.$parent;
	      }
	      return { paddingLeft: padding + 'px' };
	    }
	  }
	};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _submenu = __webpack_require__(292);

	var _submenu2 = _interopRequireDefault(_submenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_submenu2.default.install = function (Vue) {
	  Vue.component(_submenu2.default.name, _submenu2.default);
	};

	exports.default = _submenu2.default;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(293),
	  /* template */
	  __webpack_require__(294),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _collapseTransition = __webpack_require__(84);

	var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

	var _menuMixin = __webpack_require__(187);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	var _emitter = __webpack_require__(14);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSubmenu',

	  componentName: 'ElSubmenu',

	  mixins: [_menuMixin2.default, _emitter2.default],

	  components: { ElCollapseTransition: _collapseTransition2.default },

	  props: {
	    index: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      timeout: null,
	      items: {},
	      submenus: {}
	    };
	  },

	  computed: {
	    opened: function opened() {
	      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
	    },

	    active: {
	      cache: false,
	      get: function get() {
	        var isActive = false;
	        var submenus = this.submenus;
	        var items = this.items;

	        Object.keys(items).forEach(function (index) {
	          if (items[index].active) {
	            isActive = true;
	          }
	        });

	        Object.keys(submenus).forEach(function (index) {
	          if (submenus[index].active) {
	            isActive = true;
	          }
	        });

	        return isActive;
	      }
	    }
	  },
	  methods: {
	    addItem: function addItem(item) {
	      this.$set(this.items, item.index, item);
	    },
	    removeItem: function removeItem(item) {
	      delete this.items[item.index];
	    },
	    addSubmenu: function addSubmenu(item) {
	      this.$set(this.submenus, item.index, item);
	    },
	    removeSubmenu: function removeSubmenu(item) {
	      delete this.submenus[item.index];
	    },
	    handleClick: function handleClick() {
	      this.dispatch('ElMenu', 'submenu-click', this);
	    },
	    handleMouseenter: function handleMouseenter() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.rootMenu.openMenu(_this.index, _this.indexPath);
	      }, 300);
	    },
	    handleMouseleave: function handleMouseleave() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.rootMenu.closeMenu(_this2.index, _this2.indexPath);
	      }, 300);
	    },
	    initEvents: function initEvents() {
	      var rootMenu = this.rootMenu,
	          handleMouseenter = this.handleMouseenter,
	          handleMouseleave = this.handleMouseleave,
	          handleClick = this.handleClick;

	      var triggerElm = void 0;

	      if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
	        triggerElm = this.$el;
	        triggerElm.addEventListener('mouseenter', handleMouseenter);
	        triggerElm.addEventListener('mouseleave', handleMouseleave);
	      } else {
	        triggerElm = this.$refs['submenu-title'];
	        triggerElm.addEventListener('click', handleClick);
	      }
	    }
	  },
	  created: function created() {
	    this.parentMenu.addSubmenu(this);
	    this.rootMenu.addSubmenu(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.parentMenu.removeSubmenu(this);
	    this.rootMenu.removeSubmenu(this);
	  },
	  mounted: function mounted() {
	    this.initEvents();
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

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'el-submenu': true,
	      'is-active': _vm.active,
	      'is-opened': _vm.opened
	    }
	  }, [_c('div', {
	    ref: "submenu-title",
	    staticClass: "el-submenu__title",
	    style: (_vm.paddingStyle)
	  }, [_vm._t("title"), _c('i', {
	    class: {
	      'el-submenu__icon-arrow': true,
	      'el-icon-arrow-down': _vm.rootMenu.mode === 'vertical',
	        'el-icon-caret-bottom': _vm.rootMenu.mode === 'horizontal'
	    }
	  })], 2), (_vm.rootMenu.mode === 'horizontal') ? [_c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.opened),
	      expression: "opened"
	    }],
	    staticClass: "el-menu"
	  }, [_vm._t("default")], 2)])] : _c('el-collapse-transition', [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.opened),
	      expression: "opened"
	    }],
	    staticClass: "el-menu"
	  }, [_vm._t("default")], 2)])], 2)
	},staticRenderFns: []}

/***/ })

/******/ });