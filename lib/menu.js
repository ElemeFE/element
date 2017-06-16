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

	module.exports = __webpack_require__(180);


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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _menu = __webpack_require__(181);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_menu2.default.install = function (Vue) {
	  Vue.component(_menu2.default.name, _menu2.default);
	};

	exports.default = _menu2.default;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(182),
	  /* template */
	  __webpack_require__(183),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(14);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElMenu',

	  componentName: 'ElMenu',

	  mixins: [_emitter2.default],

	  props: {
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    leftPadding: {
	      type: Number,
	      default: 10
	    },
	    defaultActive: {
	      type: String,
	      default: ''
	    },
	    defaultOpeneds: Array,
	    theme: {
	      type: String,
	      default: 'light'
	    },
	    uniqueOpened: Boolean,
	    router: Boolean,
	    menuTrigger: {
	      type: String,
	      default: 'hover'
	    }
	  },
	  data: function data() {
	    return {
	      activedIndex: this.defaultActive,
	      openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
	      items: {},
	      submenus: {}
	    };
	  },

	  watch: {
	    defaultActive: function defaultActive(value) {
	      var item = this.items[value];
	      if (item) {
	        this.activedIndex = item.index;
	        this.initOpenedMenu();
	      } else {
	        this.activedIndex = '';
	      }
	    },
	    defaultOpeneds: function defaultOpeneds(value) {
	      this.openedMenus = value;
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
	    openMenu: function openMenu(index, indexPath) {
	      var openedMenus = this.openedMenus;
	      if (openedMenus.indexOf(index) !== -1) return;
	      // 将不在该菜单路径下的其余菜单收起
	      if (this.uniqueOpened) {
	        this.openedMenus = openedMenus.filter(function (index) {
	          return indexPath.indexOf(index) !== -1;
	        });
	      }
	      this.openedMenus.push(index);
	    },
	    closeMenu: function closeMenu(index, indexPath) {
	      this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
	    },
	    handleSubmenuClick: function handleSubmenuClick(submenu) {
	      var index = submenu.index,
	          indexPath = submenu.indexPath;

	      var isOpened = this.openedMenus.indexOf(index) !== -1;

	      if (isOpened) {
	        this.closeMenu(index, indexPath);
	        this.$emit('close', index, indexPath);
	      } else {
	        this.openMenu(index, indexPath);
	        this.$emit('open', index, indexPath);
	      }
	    },
	    handleItemClick: function handleItemClick(item) {
	      var index = item.index,
	          indexPath = item.indexPath;

	      this.activedIndex = item.index;
	      this.$emit('select', index, indexPath, item);

	      if (this.mode === 'horizontal') {
	        this.openedMenus = [];
	      }

	      if (this.router) {
	        this.routeToItem(item);
	      }
	    },

	    // 初始化展开菜单
	    initOpenedMenu: function initOpenedMenu() {
	      var _this = this;

	      var index = this.activedIndex;
	      var activeItem = this.items[index];
	      if (!activeItem || this.mode === 'horizontal') return;

	      var indexPath = activeItem.indexPath;

	      // 展开该菜单项的路径上所有子菜单
	      indexPath.forEach(function (index) {
	        var submenu = _this.submenus[index];
	        submenu && _this.openMenu(index, submenu.indexPath);
	      });
	    },
	    routeToItem: function routeToItem(item) {
	      var route = item.route || item.index;
	      try {
	        this.$router.push(route);
	      } catch (e) {
	        console.error(e);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.initOpenedMenu();
	    this.$on('item-click', this.handleItemClick);
	    this.$on('submenu-click', this.handleSubmenuClick);
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

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "el-menu",
	    class: {
	      'el-menu--horizontal': _vm.mode === 'horizontal',
	        'el-menu--dark': _vm.theme === 'dark'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ })

/******/ });