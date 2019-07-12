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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/scrollbar");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/shared");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/scroll-into-view");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/aria-utils");

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/radio");

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-panel.vue?vue&type=template&id=34932346&
var cascader_panelvue_type_template_id_34932346_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["el-cascader-panel", _vm.border && "is-bordered"],
      on: { keydown: _vm.handleKeyDown }
    },
    _vm._l(_vm.menus, function(menu, index) {
      return _c("cascader-menu", {
        key: index,
        ref: "menu",
        refInFor: true,
        attrs: { index: index, nodes: menu }
      })
    }),
    1
  )
}
var staticRenderFns = []
cascader_panelvue_type_template_id_34932346_render._withStripped = true


// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-panel.vue?vue&type=template&id=34932346&

// EXTERNAL MODULE: external "babel-helper-vue-jsx-merge-props"
var external_babel_helper_vue_jsx_merge_props_ = __webpack_require__(26);
var external_babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(external_babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: external "element-ui/lib/scrollbar"
var scrollbar_ = __webpack_require__(15);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(17);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "element-ui/lib/radio"
var radio_ = __webpack_require__(51);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-node.vue?vue&type=script&lang=js&






var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

/* harmony default export */ var cascader_nodevue_type_script_lang_js_ = ({
  inject: ['panel'],

  components: {
    ElCheckbox: checkbox_default.a,
    ElRadio: radio_default.a
  },

  props: {
    node: {
      required: true
    },
    nodeId: String
  },

  computed: {
    config: function config() {
      return this.panel.config;
    },
    isLeaf: function isLeaf() {
      return this.node.isLeaf;
    },
    isDisabled: function isDisabled() {
      return this.node.isDisabled;
    },
    checkedValue: function checkedValue() {
      return this.panel.checkedValue;
    },
    isChecked: function isChecked() {
      return this.node.isSameNode(this.checkedValue);
    },
    inActivePath: function inActivePath() {
      return this.isInPath(this.panel.activePath);
    },
    inCheckedPath: function inCheckedPath() {
      var _this = this;

      if (!this.config.checkStrictly) return false;

      return this.panel.checkedNodePaths.some(function (checkedPath) {
        return _this.isInPath(checkedPath);
      });
    },
    value: function value() {
      return this.node.getValueByOption();
    }
  },

  methods: {
    handleExpand: function handleExpand() {
      var _this2 = this;

      var panel = this.panel,
          node = this.node,
          isDisabled = this.isDisabled,
          config = this.config;
      var multiple = config.multiple,
          checkStrictly = config.checkStrictly;


      if (!checkStrictly && isDisabled || node.loading) return;

      if (config.lazy && !node.loaded) {
        panel.lazyLoad(node, function () {
          // do not use cached leaf value here, invoke this.isLeaf to get new value.
          var isLeaf = _this2.isLeaf;


          if (!isLeaf) _this2.handleExpand();
          if (multiple) {
            // if leaf sync checked state, else clear checked state
            var checked = isLeaf ? node.checked : false;
            _this2.handleMultiCheckChange(checked);
          }
        });
      } else {
        panel.handleExpand(node);
      }
    },
    handleCheckChange: function handleCheckChange() {
      var panel = this.panel,
          value = this.value;

      panel.handleCheckChange(value);
    },
    handleMultiCheckChange: function handleMultiCheckChange(checked) {
      this.node.doCheck(checked);
      this.panel.calculateMultiCheckedValue();
    },
    isInPath: function isInPath(pathNodes) {
      var node = this.node;

      var selectedPathNode = pathNodes[node.level - 1] || {};
      return selectedPathNode.uid === node.uid;
    },
    renderPrefix: function renderPrefix(h) {
      var isLeaf = this.isLeaf,
          isChecked = this.isChecked,
          config = this.config;
      var checkStrictly = config.checkStrictly,
          multiple = config.multiple;


      if (multiple) {
        return this.renderCheckbox(h);
      } else if (checkStrictly) {
        return this.renderRadio(h);
      } else if (isLeaf && isChecked) {
        return this.renderCheckIcon(h);
      }

      return null;
    },
    renderPostfix: function renderPostfix(h) {
      var node = this.node,
          isLeaf = this.isLeaf;


      if (node.loading) {
        return this.renderLoadingIcon(h);
      } else if (!isLeaf) {
        return this.renderExpandIcon(h);
      }

      return null;
    },
    renderCheckbox: function renderCheckbox(h) {
      var node = this.node,
          config = this.config,
          isDisabled = this.isDisabled;

      var events = {
        on: { change: this.handleMultiCheckChange },
        nativeOn: {}
      };

      if (config.checkStrictly) {
        // when every node is selectable, click event should not trigger expand event.
        events.nativeOn.click = stopPropagation;
      }

      return h('el-checkbox', external_babel_helper_vue_jsx_merge_props_default()([{
        attrs: {
          value: node.checked,
          indeterminate: node.indeterminate,
          disabled: isDisabled
        }
      }, events]));
    },
    renderRadio: function renderRadio(h) {
      var checkedValue = this.checkedValue,
          value = this.value,
          isDisabled = this.isDisabled;

      // to keep same reference if value cause radio's checked state is calculated by reference comparision;

      if (Object(util_["isEqual"])(value, checkedValue)) {
        value = checkedValue;
      }

      return h(
        'el-radio',
        {
          attrs: {
            value: checkedValue,
            label: value,
            disabled: isDisabled
          },
          on: {
            'change': this.handleCheckChange
          },
          nativeOn: {
            'click': stopPropagation
          }
        },
        [h('span')]
      );
    },
    renderCheckIcon: function renderCheckIcon(h) {
      return h('i', { 'class': 'el-icon-check el-cascader-node__prefix' });
    },
    renderLoadingIcon: function renderLoadingIcon(h) {
      return h('i', { 'class': 'el-icon-loading el-cascader-node__postfix' });
    },
    renderExpandIcon: function renderExpandIcon(h) {
      return h('i', { 'class': 'el-icon-arrow-right el-cascader-node__postfix' });
    },
    renderContent: function renderContent(h) {
      var panel = this.panel,
          node = this.node;

      var render = panel.renderLabelFn;
      var vnode = render ? render({ node: node, data: node.data }) : null;

      return h(
        'span',
        { 'class': 'el-cascader-node__label' },
        [vnode || node.label]
      );
    }
  },

  render: function render(h) {
    var _this3 = this;

    var inActivePath = this.inActivePath,
        inCheckedPath = this.inCheckedPath,
        isChecked = this.isChecked,
        isLeaf = this.isLeaf,
        isDisabled = this.isDisabled,
        config = this.config,
        nodeId = this.nodeId;
    var expandTrigger = config.expandTrigger,
        checkStrictly = config.checkStrictly,
        multiple = config.multiple;

    var disabled = !checkStrictly && isDisabled;
    var events = { on: {} };

    if (!isLeaf) {
      if (expandTrigger === 'click') {
        events.on.click = this.handleExpand;
      } else {
        events.on.mouseenter = function (e) {
          _this3.handleExpand();
          _this3.$emit('expand', e);
        };
        events.on.focus = function (e) {
          _this3.handleExpand();
          _this3.$emit('expand', e);
        };
      }
    } else if (!isDisabled && !checkStrictly && !multiple) {
      events.on.click = this.handleCheckChange;
    }

    return h(
      'li',
      external_babel_helper_vue_jsx_merge_props_default()([{
        attrs: {
          role: 'menuitem',
          id: nodeId,
          'aria-expanded': inActivePath,
          tabindex: disabled ? null : -1
        },
        'class': {
          'el-cascader-node': true,
          'is-selectable': checkStrictly,
          'in-active-path': inActivePath,
          'in-checked-path': inCheckedPath,
          'is-active': isChecked,
          'is-disabled': disabled
        }
      }, events]),
      [this.renderPrefix(h), this.renderContent(h), this.renderPostfix(h)]
    );
  }
});
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-node.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_nodevue_type_script_lang_js_ = (cascader_nodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-node.vue
var cascader_node_render, cascader_node_staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_cascader_nodevue_type_script_lang_js_,
  cascader_node_render,
  cascader_node_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/cascader-panel/src/cascader-node.vue"
/* harmony default export */ var cascader_node = (component.exports);
// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-menu.vue?vue&type=script&lang=js&







/* harmony default export */ var cascader_menuvue_type_script_lang_js_ = ({
  name: 'ElCascaderMenu',

  mixins: [locale_default.a],

  inject: ['panel'],

  components: {
    ElScrollbar: scrollbar_default.a,
    CascaderNode: cascader_node
  },

  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: Number
  },

  data: function data() {
    return {
      activeNode: null,
      hoverTimer: null,
      id: Object(util_["generateId"])()
    };
  },


  computed: {
    isEmpty: function isEmpty() {
      return !this.nodes.length;
    },
    menuId: function menuId() {
      return 'cascader-menu-' + this.id + '-' + this.index;
    }
  },

  methods: {
    handleExpand: function handleExpand(e) {
      this.activeNode = e.target;
    },
    handleMouseMove: function handleMouseMove(e) {
      var activeNode = this.activeNode,
          hoverTimer = this.hoverTimer;
      var hoverZone = this.$refs.hoverZone;


      if (!activeNode || !hoverZone) return;

      if (activeNode.contains(e.target)) {
        clearTimeout(hoverTimer);

        var _$el$getBoundingClien = this.$el.getBoundingClientRect(),
            left = _$el$getBoundingClien.left;

        var startX = e.clientX - left;
        var _$el = this.$el,
            offsetWidth = _$el.offsetWidth,
            offsetHeight = _$el.offsetHeight;

        var top = activeNode.offsetTop;
        var bottom = top + activeNode.offsetHeight;

        hoverZone.innerHTML = '\n          <path style="pointer-events: auto;" fill="transparent" d="M' + startX + ' ' + top + ' L' + offsetWidth + ' 0 V' + top + ' Z" />\n          <path style="pointer-events: auto;" fill="transparent" d="M' + startX + ' ' + bottom + ' L' + offsetWidth + ' ' + offsetHeight + ' V' + bottom + ' Z" />\n        ';
      } else if (!hoverTimer) {
        this.hoverTimer = setTimeout(this.clearHoverZone, this.panel.config.hoverThreshold);
      }
    },
    clearHoverZone: function clearHoverZone() {
      var hoverZone = this.$refs.hoverZone;

      if (!hoverZone) return;
      hoverZone.innerHTML = '';
    },
    renderEmptyText: function renderEmptyText(h) {
      return h(
        'div',
        { 'class': 'el-cascader-menu__empty-text' },
        [this.t('el.cascader.noData')]
      );
    },
    renderNodeList: function renderNodeList(h) {
      var menuId = this.menuId;
      var isHoverMenu = this.panel.isHoverMenu;

      var events = { on: {} };

      if (isHoverMenu) {
        events.on.expand = this.handleExpand;
      }

      var nodes = this.nodes.map(function (node, index) {
        var hasChildren = node.hasChildren;

        return h('cascader-node', external_babel_helper_vue_jsx_merge_props_default()([{
          key: node.uid,
          attrs: { node: node,
            'node-id': menuId + '-' + index,
            'aria-haspopup': hasChildren,
            'aria-owns': hasChildren ? menuId : null
          }
        }, events]));
      });

      return [].concat(nodes, [isHoverMenu ? h('svg', { ref: 'hoverZone', 'class': 'el-cascader-menu__hover-zone' }) : null]);
    }
  },

  render: function render(h) {
    var isEmpty = this.isEmpty,
        menuId = this.menuId;

    var events = { nativeOn: {} };

    // optimize hover to expand experience (#8010)
    if (this.panel.isHoverMenu) {
      events.nativeOn.mousemove = this.handleMouseMove;
      // events.nativeOn.mouseleave = this.clearHoverZone;
    }

    return h(
      'el-scrollbar',
      external_babel_helper_vue_jsx_merge_props_default()([{
        attrs: {
          tag: 'ul',
          role: 'menu',
          id: menuId,

          'wrap-class': 'el-cascader-menu__wrap',
          'view-class': {
            'el-cascader-menu__list': true,
            'is-empty': isEmpty
          }
        },
        'class': 'el-cascader-menu' }, events]),
      [isEmpty ? this.renderEmptyText(h) : this.renderNodeList(h)]
    );
  }
});
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_menuvue_type_script_lang_js_ = (cascader_menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-menu.vue
var cascader_menu_render, cascader_menu_staticRenderFns




/* normalize component */

var cascader_menu_component = Object(componentNormalizer["a" /* default */])(
  src_cascader_menuvue_type_script_lang_js_,
  cascader_menu_render,
  cascader_menu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var cascader_menu_api; }
cascader_menu_component.options.__file = "packages/cascader-panel/src/cascader-menu.vue"
/* harmony default export */ var cascader_menu = (cascader_menu_component.exports);
// EXTERNAL MODULE: external "element-ui/lib/utils/shared"
var shared_ = __webpack_require__(22);

// CONCATENATED MODULE: ./packages/cascader-panel/src/node.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var uid = 0;

var node_Node = function () {
  function Node(data, config, parentNode) {
    _classCallCheck(this, Node);

    this.data = data;
    this.config = config;
    this.parent = parentNode || null;
    this.level = !this.parent ? 1 : this.parent.level + 1;
    this.uid = uid++;

    this.initState();
    this.initChildren();
  }

  Node.prototype.initState = function initState() {
    var _config = this.config,
        valueKey = _config.value,
        labelKey = _config.label;


    this.value = this.data[valueKey];
    this.label = this.data[labelKey];
    this.pathNodes = this.calculatePathNodes();
    this.path = this.pathNodes.map(function (node) {
      return node.value;
    });
    this.pathLabels = this.pathNodes.map(function (node) {
      return node.label;
    });

    // lazy load
    this.loading = false;
    this.loaded = false;
  };

  Node.prototype.initChildren = function initChildren() {
    var _this = this;

    var config = this.config;

    var childrenKey = config.children;
    var childrenData = this.data[childrenKey];
    this.hasChildren = Array.isArray(childrenData);
    this.children = (childrenData || []).map(function (child) {
      return new Node(child, config, _this);
    });
  };

  Node.prototype.calculatePathNodes = function calculatePathNodes() {
    var nodes = [this];
    var parent = this.parent;

    while (parent) {
      nodes.unshift(parent);
      parent = parent.parent;
    }

    return nodes;
  };

  Node.prototype.getPath = function getPath() {
    return this.path;
  };

  Node.prototype.getValue = function getValue() {
    return this.value;
  };

  Node.prototype.getValueByOption = function getValueByOption() {
    return this.config.emitPath ? this.getPath() : this.getValue();
  };

  Node.prototype.getText = function getText(allLevels, separator) {
    return allLevels ? this.pathLabels.join(separator) : this.label;
  };

  Node.prototype.isSameNode = function isSameNode(checkedValue) {
    var value = this.getValueByOption();
    return this.config.multiple && Array.isArray(checkedValue) ? checkedValue.some(function (val) {
      return Object(util_["isEqual"])(val, value);
    }) : Object(util_["isEqual"])(checkedValue, value);
  };

  Node.prototype.broadcast = function broadcast(event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var handlerName = 'onParent' + Object(util_["capitalize"])(event);

    this.children.forEach(function (child) {
      if (child) {
        // bottom up
        child.broadcast.apply(child, [event].concat(args));
        child[handlerName] && child[handlerName].apply(child, args);
      }
    });
  };

  Node.prototype.emit = function emit(event) {
    var parent = this.parent;

    var handlerName = 'onChild' + Object(util_["capitalize"])(event);
    if (parent) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      parent[handlerName] && parent[handlerName].apply(parent, args);
      parent.emit.apply(parent, [event].concat(args));
    }
  };

  Node.prototype.onParentCheck = function onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  };

  Node.prototype.onChildCheck = function onChildCheck() {
    var children = this.children;

    var validChildren = children.filter(function (child) {
      return !child.isDisabled;
    });
    var checked = validChildren.length ? validChildren.every(function (child) {
      return child.checked;
    }) : false;

    this.setCheckState(checked);
  };

  Node.prototype.setCheckState = function setCheckState(checked) {
    var totalNum = this.children.length;
    var checkedNum = this.children.reduce(function (c, p) {
      var num = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
      return c + num;
    }, 0);

    this.checked = checked;
    this.indeterminate = checkedNum !== totalNum && checkedNum > 0;
  };

  Node.prototype.syncCheckState = function syncCheckState(checkedValue) {
    var value = this.getValueByOption();
    var checked = this.isSameNode(checkedValue, value);

    this.doCheck(checked);
  };

  Node.prototype.doCheck = function doCheck(checked) {
    if (this.checked !== checked) {
      if (this.config.checkStrictly) {
        this.checked = checked;
      } else {
        // bottom up to unify the calculation of the indeterminate state
        this.broadcast('check', checked);
        this.setCheckState(checked);
        this.emit('check');
      }
    }
  };

  _createClass(Node, [{
    key: 'isDisabled',
    get: function get() {
      var data = this.data,
          parent = this.parent,
          config = this.config;

      var disabledKey = config.disabled;
      var checkStrictly = config.checkStrictly;

      return data[disabledKey] || !checkStrictly && parent && parent.isDisabled;
    }
  }, {
    key: 'isLeaf',
    get: function get() {
      var data = this.data,
          loaded = this.loaded,
          hasChildren = this.hasChildren,
          children = this.children;
      var _config2 = this.config,
          lazy = _config2.lazy,
          leafKey = _config2.leaf;

      if (lazy) {
        var isLeaf = Object(shared_["isDef"])(data[leafKey]) ? data[leafKey] : loaded ? !children.length : false;
        this.hasChildren = !isLeaf;
        return isLeaf;
      }
      return !hasChildren;
    }
  }]);

  return Node;
}();

/* harmony default export */ var src_node = (node_Node);
// CONCATENATED MODULE: ./packages/cascader-panel/src/store.js
function store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var flatNodes = function flatNodes(data, leafOnly) {
  return data.reduce(function (res, node) {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};

var store_Store = function () {
  function Store(data, config) {
    store_classCallCheck(this, Store);

    this.config = config;
    this.initNodes(data);
  }

  Store.prototype.initNodes = function initNodes(data) {
    var _this = this;

    data = Object(util_["coerceTruthyValueToArray"])(data);
    this.nodes = data.map(function (nodeData) {
      return new src_node(nodeData, _this.config);
    });
    this.flattedNodes = this.getFlattedNodes(false, false);
    this.leafNodes = this.getFlattedNodes(true, false);
  };

  Store.prototype.appendNode = function appendNode(nodeData, parentNode) {
    var node = new src_node(nodeData, this.config, parentNode);
    var children = parentNode ? parentNode.children : this.nodes;

    children.push(node);
  };

  Store.prototype.appendNodes = function appendNodes(nodeDataList, parentNode) {
    var _this2 = this;

    nodeDataList = Object(util_["coerceTruthyValueToArray"])(nodeDataList);
    nodeDataList.forEach(function (nodeData) {
      return _this2.appendNode(nodeData, parentNode);
    });
  };

  Store.prototype.getNodes = function getNodes() {
    return this.nodes;
  };

  Store.prototype.getFlattedNodes = function getFlattedNodes(leafOnly) {
    var cached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var cachedNodes = leafOnly ? this.leafNodes : this.flattedNodes;
    return cached ? cachedNodes : flatNodes(this.nodes, leafOnly);
  };

  Store.prototype.getNodeByValue = function getNodeByValue(value) {
    if (value) {
      value = Array.isArray(value) ? value[value.length - 1] : value;
      var nodes = this.getFlattedNodes(false, !this.config.lazy).filter(function (node) {
        return node.value === value;
      });
      return nodes && nodes.length ? nodes[0] : null;
    }
    return null;
  };

  return Store;
}();

/* harmony default export */ var src_store = (store_Store);
// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// EXTERNAL MODULE: external "element-ui/lib/utils/aria-utils"
var aria_utils_ = __webpack_require__(39);
var aria_utils_default = /*#__PURE__*/__webpack_require__.n(aria_utils_);

// EXTERNAL MODULE: external "element-ui/lib/utils/scroll-into-view"
var scroll_into_view_ = __webpack_require__(31);
var scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(scroll_into_view_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader-panel/src/cascader-panel.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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








var KeyCode = aria_utils_default.a.keys;

var DefaultProps = {
  expandTrigger: 'click', // or hover
  multiple: false,
  checkStrictly: false, // whether all nodes can be selected
  emitPath: true, // wether to emit an array of all levels value in which node is located
  lazy: false,
  lazyLoad: util_["noop"],
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500
};

var cascader_panelvue_type_script_lang_js_isLeaf = function isLeaf(el) {
  return !el.getAttribute('aria-owns');
};

var getSibling = function getSibling(el, distance) {
  var parentNode = el.parentNode;

  if (parentNode) {
    var siblings = parentNode.querySelectorAll('.el-cascader-node[tabindex="-1"]');
    var index = Array.prototype.indexOf.call(siblings, el);
    return siblings[index + distance] || null;
  }
  return null;
};

var getMenuIndex = function getMenuIndex(el, distance) {
  if (!el) return;
  var pieces = el.id.split('-');
  return Number(pieces[pieces.length - 2]);
};

var focusNode = function focusNode(el) {
  if (!el) return;
  el.focus();
  !cascader_panelvue_type_script_lang_js_isLeaf(el) && el.click();
};

var checkNode = function checkNode(el) {
  if (!el) return;

  var input = el.querySelector('input');
  if (input) {
    input.click();
  } else if (cascader_panelvue_type_script_lang_js_isLeaf(el)) {
    el.click();
  }
};

/* harmony default export */ var cascader_panelvue_type_script_lang_js_ = ({
  name: 'ElCascaderPanel',

  components: {
    CascaderMenu: cascader_menu
  },

  props: {
    value: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },

  provide: function provide() {
    return {
      panel: this
    };
  },
  data: function data() {
    return {
      checkedValue: null,
      checkedNodePaths: [],
      store: [],
      menus: [],
      activePath: []
    };
  },


  computed: {
    config: function config() {
      return merge_default()(_extends({}, DefaultProps), this.props || {});
    },
    multiple: function multiple() {
      return this.config.multiple;
    },
    checkStrictly: function checkStrictly() {
      return this.config.checkStrictly;
    },
    leafOnly: function leafOnly() {
      return !this.checkStrictly;
    },
    isHoverMenu: function isHoverMenu() {
      return this.config.expandTrigger === 'hover';
    },
    renderLabelFn: function renderLabelFn() {
      return this.renderLabel || this.$scopedSlots.default;
    }
  },

  watch: {
    options: {
      handler: function handler() {
        this.initStore();
      },
      immediate: true,
      deep: true
    },
    value: function value() {
      this.syncCheckedValue();
      this.checkStrictly && this.calculateCheckedNodePaths();
    },
    checkedValue: function checkedValue(val) {
      if (!Object(util_["isEqual"])(val, this.value)) {
        this.checkStrictly && this.calculateCheckedNodePaths();
        this.$emit('input', val);
        this.$emit('change', val);
      }
    }
  },

  mounted: function mounted() {
    if (!Object(util_["isEmpty"])(this.value)) {
      this.syncCheckedValue();
    }
  },


  methods: {
    initStore: function initStore() {
      var config = this.config,
          options = this.options;

      if (config.lazy && Object(util_["isEmpty"])(options)) {
        this.lazyLoad();
      } else {
        this.store = new src_store(options, config);
        this.menus = [this.store.getNodes()];
        this.syncMenuState();
      }
    },
    syncCheckedValue: function syncCheckedValue() {
      var value = this.value,
          checkedValue = this.checkedValue;

      if (!Object(util_["isEqual"])(value, checkedValue)) {
        this.checkedValue = value;
        this.syncMenuState();
      }
    },
    syncMenuState: function syncMenuState() {
      var multiple = this.multiple,
          checkStrictly = this.checkStrictly;

      this.syncActivePath();
      multiple && this.syncMultiCheckState();
      checkStrictly && this.calculateCheckedNodePaths();
      this.$nextTick(this.scrollIntoView);
    },
    syncMultiCheckState: function syncMultiCheckState() {
      var _this = this;

      var nodes = this.getFlattedNodes(this.leafOnly);

      nodes.forEach(function (node) {
        node.syncCheckState(_this.checkedValue);
      });
    },
    syncActivePath: function syncActivePath() {
      var _this2 = this;

      var checkedValue = this.checkedValue,
          store = this.store,
          multiple = this.multiple;

      if (Object(util_["isEmpty"])(checkedValue)) {
        this.activePath = [];
        this.menus = [store.getNodes()];
      } else {
        checkedValue = multiple ? checkedValue[0] : checkedValue;
        var checkedNode = this.getNodeByValue(checkedValue) || {};
        var nodes = [];
        var parent = checkedNode.parent;

        while (parent) {
          nodes.unshift(parent);
          parent = parent.parent;
        }
        nodes.forEach(function (node) {
          return _this2.handleExpand(node, true /* silent */);
        });
      }
    },
    calculateCheckedNodePaths: function calculateCheckedNodePaths() {
      var _this3 = this;

      var checkedValue = this.checkedValue,
          multiple = this.multiple;

      var checkedValues = multiple ? Object(util_["coerceTruthyValueToArray"])(checkedValue) : [checkedValue];
      this.checkedNodePaths = checkedValues.map(function (v) {
        var checkedNode = _this3.getNodeByValue(v);
        return checkedNode ? checkedNode.pathNodes : [];
      });
    },
    handleKeyDown: function handleKeyDown(e) {
      var target = e.target,
          keyCode = e.keyCode;


      switch (keyCode) {
        case KeyCode.up:
          var prev = getSibling(target, -1);
          focusNode(prev);
          break;
        case KeyCode.down:
          var next = getSibling(target, 1);
          focusNode(next);
          break;
        case KeyCode.left:
          var preMenu = this.$refs.menu[getMenuIndex(target) - 1];
          if (preMenu) {
            var expandedNode = preMenu.$el.querySelector('.el-cascader-node[aria-expanded="true"]');
            focusNode(expandedNode);
          }
          break;
        case KeyCode.right:
          var nextMenu = this.$refs.menu[getMenuIndex(target) + 1];
          if (nextMenu) {
            var firstNode = nextMenu.$el.querySelector('.el-cascader-node[tabindex="-1"]');
            focusNode(firstNode);
          }
          break;
        case KeyCode.enter:
          checkNode(target);
          break;
        case KeyCode.esc:
        case KeyCode.tab:
          this.$emit('close');
          break;
        default:
          return;
      }
    },
    handleExpand: function handleExpand(node, silent) {
      var level = node.level;

      var path = this.activePath.slice(0, level - 1);
      var menus = this.menus.slice(0, level);

      if (!node.isLeaf) {
        path.push(node);
        menus.push(node.children);
      }

      if (Object(util_["valueEquals"])(path, this.activePath)) return;

      this.activePath = path;
      this.menus = menus;

      if (!silent) {
        var pathValues = path.map(function (node) {
          return node.getValue();
        });
        this.$emit('active-item-change', pathValues); // Deprecated
        this.$emit('expand-change', pathValues);
      }
    },
    handleCheckChange: function handleCheckChange(value) {
      this.checkedValue = value;
    },
    lazyLoad: function lazyLoad(node, onFullfiled) {
      var _this4 = this;

      var config = this.config;

      if (!node) {
        node = node || { root: true, level: 0 };
        this.store = new src_store([], config);
        this.menus = [this.store.getNodes()];
      }
      node.loading = true;
      var resolve = function resolve(dataList) {
        var parent = node.root ? null : node;
        dataList && dataList.length && _this4.store.appendNodes(dataList, parent);
        node.loading = false;
        node.loaded = true;
        onFullfiled && onFullfiled(dataList);
      };
      config.lazyLoad(node, resolve);
    },

    /**
     * public methods
    */
    calculateMultiCheckedValue: function calculateMultiCheckedValue() {
      this.checkedValue = this.getCheckedNodes(this.leafOnly).map(function (node) {
        return node.getValueByOption();
      });
    },
    scrollIntoView: function scrollIntoView() {
      if (this.$isServer) return;

      var menus = this.$refs.menu || [];
      menus.forEach(function (menu) {
        var menuElement = menu.$el;
        if (menuElement) {
          var container = menuElement.querySelector('.el-scrollbar__wrap');
          var activeNode = menuElement.querySelector('.el-cascader-node.is-active') || menuElement.querySelector('.el-cascader-node.in-active-path');
          scroll_into_view_default()(container, activeNode);
        }
      });
    },
    getNodeByValue: function getNodeByValue(val) {
      return this.store.getNodeByValue(val);
    },
    getFlattedNodes: function getFlattedNodes(leafOnly) {
      var cached = !this.config.lazy;
      return this.store.getFlattedNodes(leafOnly, cached);
    },
    getCheckedNodes: function getCheckedNodes(leafOnly) {
      var checkedValue = this.checkedValue,
          multiple = this.multiple;

      if (multiple) {
        var nodes = this.getFlattedNodes(leafOnly);
        return nodes.filter(function (node) {
          return node.checked;
        });
      } else {
        return Object(util_["isEmpty"])(checkedValue) ? [] : [this.getNodeByValue(checkedValue)];
      }
    },
    clearCheckedNodes: function clearCheckedNodes() {
      var config = this.config,
          leafOnly = this.leafOnly;
      var multiple = config.multiple,
          emitPath = config.emitPath;

      if (multiple) {
        this.getCheckedNodes(leafOnly).filter(function (node) {
          return !node.isDisabled;
        }).forEach(function (node) {
          return node.doCheck(false);
        });
        this.calculateMultiCheckedValue();
      } else {
        this.checkedValue = emitPath ? [] : null;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascader_panelvue_type_script_lang_js_ = (cascader_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/cascader-panel/src/cascader-panel.vue





/* normalize component */

var cascader_panel_component = Object(componentNormalizer["a" /* default */])(
  src_cascader_panelvue_type_script_lang_js_,
  cascader_panelvue_type_template_id_34932346_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var cascader_panel_api; }
cascader_panel_component.options.__file = "packages/cascader-panel/src/cascader-panel.vue"
/* harmony default export */ var cascader_panel = (cascader_panel_component.exports);
// CONCATENATED MODULE: ./packages/cascader-panel/index.js


/* istanbul ignore next */
cascader_panel.install = function (Vue) {
  Vue.component(cascader_panel.name, cascader_panel);
};

/* harmony default export */ var packages_cascader_panel = __webpack_exports__["default"] = (cascader_panel);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/merge");

/***/ })

/******/ });