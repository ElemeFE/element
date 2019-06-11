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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 123);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/migrating");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(12);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(11);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// EXTERNAL MODULE: external "element-ui/lib/button"
var button_ = __webpack_require__(18);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "element-ui/lib/button-group"
var button_group_ = __webpack_require__(45);
var button_group_default = /*#__PURE__*/__webpack_require__.n(button_group_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/dropdown/src/dropdown.vue?vue&type=script&lang=js&








/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: 'ElDropdown',

  componentName: 'ElDropdown',

  mixins: [emitter_default.a, migrating_default.a],

  directives: { Clickoutside: clickoutside_default.a },

  components: {
    ElButton: button_default.a,
    ElButtonGroup: button_group_default.a
  },

  provide: function provide() {
    return {
      dropdown: this
    };
  },


  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    type: String,
    size: {
      type: String,
      default: ''
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    visibleArrow: {
      default: true
    },
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      timeout: null,
      visible: false,
      triggerElm: null,
      menuItems: null,
      menuItemsArray: null,
      dropdownElm: null,
      focusing: false,
      listId: 'dropdown-menu-' + Object(util_["generateId"])()
    };
  },


  computed: {
    dropdownSize: function dropdownSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },

  mounted: function mounted() {
    this.$on('menu-item-click', this.handleMenuItemClick);
  },


  watch: {
    visible: function visible(val) {
      this.broadcast('ElDropdownMenu', 'visible', val);
      this.$emit('visible-change', val);
    },
    focusing: function focusing(val) {
      var selfDefine = this.$el.querySelector('.el-dropdown-selfdefine');
      if (selfDefine) {
        // 自定义
        if (val) {
          selfDefine.className += ' focusing';
        } else {
          selfDefine.className = selfDefine.className.replace('focusing', '');
        }
      }
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'menu-align': 'menu-align is renamed to placement.'
        }
      };
    },
    show: function show() {
      var _this = this;

      if (this.triggerElm.disabled) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.visible = true;
      }, this.trigger === 'click' ? 0 : this.showTimeout);
    },
    hide: function hide() {
      var _this2 = this;

      if (this.triggerElm.disabled) return;
      this.removeTabindex();
      if (this.tabindex >= 0) {
        this.resetTabindex(this.triggerElm);
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.visible = false;
      }, this.trigger === 'click' ? 0 : this.hideTimeout);
    },
    handleClick: function handleClick() {
      if (this.triggerElm.disabled) return;
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }
    },
    handleTriggerKeyDown: function handleTriggerKeyDown(ev) {
      var keyCode = ev.keyCode;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up/down
        this.removeTabindex();
        this.resetTabindex(this.menuItems[0]);
        this.menuItems[0].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (keyCode === 13) {
        // space enter选中
        this.handleClick();
      } else if ([9, 27].indexOf(keyCode) > -1) {
        // tab || esc
        this.hide();
      }
    },
    handleItemKeyDown: function handleItemKeyDown(ev) {
      var keyCode = ev.keyCode;
      var target = ev.target;
      var currentIndex = this.menuItemsArray.indexOf(target);
      var max = this.menuItemsArray.length - 1;
      var nextIndex = void 0;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up/down
        if (keyCode === 38) {
          // up
          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
        } else {
          // down
          nextIndex = currentIndex < max ? currentIndex + 1 : max;
        }
        this.removeTabindex();
        this.resetTabindex(this.menuItems[nextIndex]);
        this.menuItems[nextIndex].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (keyCode === 13) {
        // enter选中
        this.triggerElmFocus();
        target.click();
        if (this.hideOnClick) {
          // click关闭
          this.visible = false;
        }
      } else if ([9, 27].indexOf(keyCode) > -1) {
        // tab // esc
        this.hide();
        this.triggerElmFocus();
      }
    },
    resetTabindex: function resetTabindex(ele) {
      // 下次tab时组件聚焦元素
      this.removeTabindex();
      ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
    },
    removeTabindex: function removeTabindex() {
      this.triggerElm.setAttribute('tabindex', '-1');
      this.menuItemsArray.forEach(function (item) {
        item.setAttribute('tabindex', '-1');
      });
    },
    initAria: function initAria() {
      this.dropdownElm.setAttribute('id', this.listId);
      this.triggerElm.setAttribute('aria-haspopup', 'list');
      this.triggerElm.setAttribute('aria-controls', this.listId);

      if (!this.splitButton) {
        // 自定义
        this.triggerElm.setAttribute('role', 'button');
        this.triggerElm.setAttribute('tabindex', this.tabindex);
        this.triggerElm.setAttribute('class', (this.triggerElm.getAttribute('class') || '') + ' el-dropdown-selfdefine'); // 控制
      }
    },
    initEvent: function initEvent() {
      var _this3 = this;

      var trigger = this.trigger,
          show = this.show,
          hide = this.hide,
          handleClick = this.handleClick,
          splitButton = this.splitButton,
          handleTriggerKeyDown = this.handleTriggerKeyDown,
          handleItemKeyDown = this.handleItemKeyDown;

      this.triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

      var dropdownElm = this.dropdownElm;

      this.triggerElm.addEventListener('keydown', handleTriggerKeyDown); // triggerElm keydown
      dropdownElm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
      // 控制自定义元素的样式
      if (!splitButton) {
        this.triggerElm.addEventListener('focus', function () {
          _this3.focusing = true;
        });
        this.triggerElm.addEventListener('blur', function () {
          _this3.focusing = false;
        });
        this.triggerElm.addEventListener('click', function () {
          _this3.focusing = false;
        });
      }
      if (trigger === 'hover') {
        this.triggerElm.addEventListener('mouseenter', show);
        this.triggerElm.addEventListener('mouseleave', hide);
        dropdownElm.addEventListener('mouseenter', show);
        dropdownElm.addEventListener('mouseleave', hide);
      } else if (trigger === 'click') {
        this.triggerElm.addEventListener('click', handleClick);
      }
    },
    handleMenuItemClick: function handleMenuItemClick(command, instance) {
      if (this.hideOnClick) {
        this.visible = false;
      }
      this.$emit('command', command, instance);
    },
    triggerElmFocus: function triggerElmFocus() {
      this.triggerElm.focus && this.triggerElm.focus();
    },
    initDomOperation: function initDomOperation() {
      this.dropdownElm = this.popperElm;
      this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']");
      this.menuItemsArray = [].slice.call(this.menuItems);

      this.initEvent();
      this.initAria();
    }
  },

  render: function render(h) {
    var _this4 = this;

    var hide = this.hide,
        splitButton = this.splitButton,
        type = this.type,
        dropdownSize = this.dropdownSize;


    var handleMainButtonClick = function handleMainButtonClick(event) {
      _this4.$emit('click', event);
      hide();
    };

    var triggerElm = !splitButton ? this.$slots.default : h('el-button-group', [h(
      'el-button',
      {
        attrs: { type: type, size: dropdownSize },
        nativeOn: {
          'click': handleMainButtonClick
        }
      },
      [this.$slots.default]
    ), h(
      'el-button',
      { ref: 'trigger', attrs: { type: type, size: dropdownSize },
        'class': 'el-dropdown__caret-button' },
      [h('i', { 'class': 'el-dropdown__icon el-icon-arrow-down' })]
    )]);

    return h(
      'div',
      { 'class': 'el-dropdown', directives: [{
          name: 'clickoutside',
          value: hide
        }]
      },
      [triggerElm, this.$slots.dropdown]
    );
  }
});
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/dropdown/src/dropdown.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_dropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/dropdown/src/dropdown.vue"
/* harmony default export */ var dropdown = (component.exports);
// CONCATENATED MODULE: ./packages/dropdown/index.js


/* istanbul ignore next */
dropdown.install = function (Vue) {
  Vue.component(dropdown.name, dropdown);
};

/* harmony default export */ var packages_dropdown = __webpack_exports__["default"] = (dropdown);

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button-group");

/***/ })

/******/ });