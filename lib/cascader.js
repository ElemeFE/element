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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/migrating");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/scrollbar");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/types");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/shared");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/aria-utils");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tag");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/cascader-panel");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=template&id=032537a6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: function() {
            return _vm.toggleDropDownVisible(false)
          },
          expression: "() => toggleDropDownVisible(false)"
        }
      ],
      ref: "reference",
      class: [
        "el-cascader",
        _vm.realSize && "el-cascader--" + _vm.realSize,
        { "is-disabled": _vm.isDisabled }
      ],
      on: {
        mouseenter: function($event) {
          _vm.inputHover = true
        },
        mouseleave: function($event) {
          _vm.inputHover = false
        },
        click: function() {
          return _vm.toggleDropDownVisible(_vm.readonly ? undefined : true)
        },
        keydown: _vm.handleKeyDown
      }
    },
    [
      _c(
        "el-input",
        {
          ref: "input",
          class: { "is-focus": _vm.dropDownVisible },
          attrs: {
            size: _vm.realSize,
            placeholder: _vm.placeholder,
            readonly: _vm.readonly,
            disabled: _vm.isDisabled,
            "validate-event": false
          },
          on: {
            focus: _vm.handleFocus,
            blur: _vm.handleBlur,
            input: _vm.handleInput
          },
          model: {
            value: _vm.multiple ? _vm.presentText : _vm.inputValue,
            callback: function($$v) {
              _vm.multiple ? _vm.presentText : (_vm.inputValue = $$v)
            },
            expression: "multiple ? presentText : inputValue"
          }
        },
        [
          _c("template", { slot: "suffix" }, [
            _vm.clearBtnVisible
              ? _c("i", {
                  key: "clear",
                  staticClass: "el-input__icon el-icon-circle-close",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.handleClear($event)
                    }
                  }
                })
              : _c("i", {
                  key: "arrow-down",
                  class: [
                    "el-input__icon",
                    "el-icon-arrow-down",
                    _vm.dropDownVisible && "is-reverse"
                  ],
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.toggleDropDownVisible()
                    }
                  }
                })
          ])
        ],
        2
      ),
      _vm.multiple
        ? _c(
            "div",
            { staticClass: "el-cascader__tags" },
            [
              _vm._l(_vm.presentTags, function(tag, index) {
                return _c(
                  "el-tag",
                  {
                    key: tag.key,
                    attrs: {
                      type: "info",
                      size: _vm.tagSize,
                      hit: tag.hitState,
                      closable: tag.closable,
                      "disable-transitions": ""
                    },
                    on: {
                      close: function($event) {
                        _vm.deleteTag(index)
                      }
                    }
                  },
                  [_c("span", [_vm._v(_vm._s(tag.text))])]
                )
              }),
              _vm.filterable && !_vm.isDisabled
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.trim",
                        value: _vm.inputValue,
                        expression: "inputValue",
                        modifiers: { trim: true }
                      }
                    ],
                    staticClass: "el-cascader__search-input",
                    attrs: {
                      type: "text",
                      placeholder: _vm.presentTags.length ? "" : _vm.placeholder
                    },
                    domProps: { value: _vm.inputValue },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.inputValue = $event.target.value.trim()
                        },
                        function(e) {
                          return _vm.handleInput(_vm.inputValue, e)
                        }
                      ],
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.toggleDropDownVisible(true)
                      },
                      keydown: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "delete",
                            [8, 46],
                            $event.key,
                            ["Backspace", "Delete", "Del"]
                          )
                        ) {
                          return null
                        }
                        return _vm.handleDelete($event)
                      },
                      blur: function($event) {
                        _vm.$forceUpdate()
                      }
                    }
                  })
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _c(
        "transition",
        {
          attrs: { name: "el-zoom-in-top" },
          on: { "after-leave": _vm.handleDropdownLeave }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.dropDownVisible,
                  expression: "dropDownVisible"
                }
              ],
              ref: "popper",
              class: ["el-popper", "el-cascader__dropdown", _vm.popperClass]
            },
            [
              _c("el-cascader-panel", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.filtering,
                    expression: "!filtering"
                  }
                ],
                ref: "panel",
                attrs: {
                  options: _vm.options,
                  props: _vm.config,
                  border: false,
                  "render-label": _vm.$scopedSlots.default
                },
                on: {
                  "expand-change": _vm.handleExpandChange,
                  close: function($event) {
                    _vm.toggleDropDownVisible(false)
                  }
                },
                model: {
                  value: _vm.checkedValue,
                  callback: function($$v) {
                    _vm.checkedValue = $$v
                  },
                  expression: "checkedValue"
                }
              }),
              _vm.filterable
                ? _c(
                    "el-scrollbar",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.filtering,
                          expression: "filtering"
                        }
                      ],
                      ref: "suggestionPanel",
                      staticClass: "el-cascader__suggestion-panel",
                      attrs: {
                        tag: "ul",
                        "view-class": "el-cascader__suggestion-list"
                      },
                      nativeOn: {
                        keydown: function($event) {
                          return _vm.handleSuggestionKeyDown($event)
                        }
                      }
                    },
                    [
                      _vm.suggestions.length
                        ? _vm._l(_vm.suggestions, function(item, index) {
                            return _c(
                              "li",
                              {
                                key: item.uid,
                                class: [
                                  "el-cascader__suggestion-item",
                                  item.checked && "is-checked"
                                ],
                                attrs: { tabindex: -1 },
                                on: {
                                  click: function($event) {
                                    _vm.handleSuggestionClick(index)
                                  }
                                }
                              },
                              [
                                _c("span", [_vm._v(_vm._s(item.text))]),
                                item.checked
                                  ? _c("i", { staticClass: "el-icon-check" })
                                  : _vm._e()
                              ]
                            )
                          })
                        : _vm._t("empty", [
                            _c(
                              "li",
                              { staticClass: "el-cascader__empty-text" },
                              [_vm._v(_vm._s(_vm.t("el.cascader.noMatch")))]
                            )
                          ])
                    ],
                    2
                  )
                : _vm._e()
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=template&id=032537a6&

// EXTERNAL MODULE: external "element-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(5);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(12);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(11);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(10);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "element-ui/lib/tag"
var tag_ = __webpack_require__(38);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "element-ui/lib/scrollbar"
var scrollbar_ = __webpack_require__(14);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

// EXTERNAL MODULE: external "element-ui/lib/cascader-panel"
var cascader_panel_ = __webpack_require__(50);
var cascader_panel_default = /*#__PURE__*/__webpack_require__.n(cascader_panel_);

// EXTERNAL MODULE: external "element-ui/lib/utils/aria-utils"
var aria_utils_ = __webpack_require__(32);
var aria_utils_default = /*#__PURE__*/__webpack_require__.n(aria_utils_);

// EXTERNAL MODULE: external "element-ui/lib/locale"
var lib_locale_ = __webpack_require__(19);

// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// EXTERNAL MODULE: external "element-ui/lib/utils/types"
var types_ = __webpack_require__(20);

// EXTERNAL MODULE: external "element-ui/lib/utils/shared"
var shared_ = __webpack_require__(21);

// EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(16);

// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(17);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
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


















var KeyCode = aria_utils_default.a.keys;

var MigratingProps = {
  expandTrigger: {
    newProp: 'expandTrigger',
    type: String
  },
  changeOnSelect: {
    newProp: 'checkStrictly',
    type: Boolean
  },
  hoverThreshold: {
    newProp: 'hoverThreshold',
    type: Number
  }
};

var PopperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: vue_popper_default.a.props.appendToBody,
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: vue_popper_default.a.props.arrowOffset,
    offset: vue_popper_default.a.props.offset,
    boundariesPadding: vue_popper_default.a.props.boundariesPadding,
    popperOptions: vue_popper_default.a.props.popperOptions
  },
  methods: vue_popper_default.a.methods,
  data: vue_popper_default.a.data,
  beforeDestroy: vue_popper_default.a.beforeDestroy
};

var InputSizeMap = {
  medium: 36,
  small: 32,
  mini: 28
};

/* harmony default export */ var cascadervue_type_script_lang_js_ = ({
  name: 'ElCascader',

  directives: { Clickoutside: clickoutside_default.a },

  mixins: [PopperMixin, emitter_default.a, locale_default.a, migrating_default.a],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  components: {
    ElInput: input_default.a,
    ElTag: tag_default.a,
    ElScrollbar: scrollbar_default.a,
    ElCascaderPanel: cascader_panel_default.a
  },

  props: {
    value: {},
    options: Array,
    props: Object,
    size: String,
    placeholder: {
      type: String,
      default: function _default() {
        return Object(lib_locale_["t"])('el.cascader.placeholder');
      }
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    separator: {
      type: String,
      default: ' / '
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
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
    popperClass: String
  },

  data: function data() {
    return {
      dropDownVisible: false,
      checkedValue: this.value || null,
      inputHover: false,
      inputValue: null,
      presentText: null,
      presentTags: [],
      checkedNodes: [],
      filtering: false,
      suggestions: [],
      inputInitialHeight: 0,
      pressDeleteCount: 0
    };
  },


  computed: {
    realSize: function realSize() {
      var _elFormItemSize = (this.elFormItem || {}).elFormItemSize;
      return this.size || _elFormItemSize || (this.$ELEMENT || {}).size;
    },
    tagSize: function tagSize() {
      return ['small', 'mini'].indexOf(this.realSize) > -1 ? 'mini' : 'small';
    },
    isDisabled: function isDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    config: function config() {
      var config = this.props || {};
      var $attrs = this.$attrs;


      Object.keys(MigratingProps).forEach(function (oldProp) {
        var _MigratingProps$oldPr = MigratingProps[oldProp],
            newProp = _MigratingProps$oldPr.newProp,
            type = _MigratingProps$oldPr.type;

        var oldValue = $attrs[oldProp] || $attrs[Object(util_["kebabCase"])(oldProp)];
        if (Object(shared_["isDef"])(oldProp) && !Object(shared_["isDef"])(config[newProp])) {
          if (type === Boolean && oldValue === '') {
            oldValue = true;
          }
          config[newProp] = oldValue;
        }
      });

      return config;
    },
    multiple: function multiple() {
      return this.config.multiple;
    },
    leafOnly: function leafOnly() {
      return !this.config.checkStrictly;
    },
    readonly: function readonly() {
      return !this.filterable || this.multiple;
    },
    clearBtnVisible: function clearBtnVisible() {
      if (!this.clearable || this.isDisabled || this.filtering || !this.inputHover) {
        return false;
      }

      return this.multiple ? !!this.checkedNodes.filter(function (node) {
        return !node.isDisabled;
      }).length : !!this.presentText;
    },
    panel: function panel() {
      return this.$refs.panel;
    }
  },

  watch: {
    disabled: function disabled() {
      this.computePresentContent();
    },
    value: function value(val) {
      if (!Object(util_["isEqual"])(val, this.checkedValue)) {
        this.checkedValue = val;
        this.computePresentContent();
      }
    },
    checkedValue: function checkedValue(val) {
      var value = this.value,
          dropDownVisible = this.dropDownVisible;
      var _config = this.config,
          checkStrictly = _config.checkStrictly,
          multiple = _config.multiple;


      if (!Object(util_["isEqual"])(val, value) || Object(types_["isUndefined"])(value)) {
        this.computePresentContent();
        // hide dropdown when single mode
        if (!multiple && !checkStrictly && dropDownVisible) {
          this.toggleDropDownVisible(false);
        }

        this.$emit('input', val);
        this.$emit('change', val);
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    },

    options: {
      handler: function handler() {
        this.$nextTick(this.computePresentContent);
      },
      deep: true
    },
    presentText: function presentText(val) {
      this.inputValue = val;
    },
    presentTags: function presentTags(val, oldVal) {
      if (this.multiple && (val.length || oldVal.length)) {
        this.$nextTick(this.updateStyle);
      }
    },
    filtering: function filtering(val) {
      this.$nextTick(this.updatePopper);
    }
  },

  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    if (input && input.$el) {
      this.inputInitialHeight = input.$el.offsetHeight || InputSizeMap[this.realSize] || 40;
    }

    if (!Object(util_["isEmpty"])(this.value)) {
      this.computePresentContent();
    }

    this.filterHandler = debounce_default()(this.debounce, function () {
      var inputValue = _this.inputValue;


      if (!inputValue) {
        _this.filtering = false;
        return;
      }

      var before = _this.beforeFilter(inputValue);
      if (before && before.then) {
        before.then(_this.getSuggestions);
      } else if (before !== false) {
        _this.getSuggestions();
      } else {
        _this.filtering = false;
      }
    });

    Object(resize_event_["addResizeListener"])(this.$el, this.updateStyle);
  },
  beforeDestroy: function beforeDestroy() {
    Object(resize_event_["removeResizeListener"])(this.$el, this.updateStyle);
  },


  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'expand-trigger': 'expand-trigger is removed, use `props.expandTrigger` instead.',
          'change-on-select': 'change-on-select is removed, use `props.checkStrictly` instead.',
          'hover-threshold': 'hover-threshold is removed, use `props.hoverThreshold` instead'
        },
        events: {
          'active-item-change': 'active-item-change is renamed to expand-change'
        }
      };
    },
    toggleDropDownVisible: function toggleDropDownVisible(visible) {
      var _this2 = this;

      if (this.isDisabled) return;

      var dropDownVisible = this.dropDownVisible;
      var input = this.$refs.input;

      visible = Object(shared_["isDef"])(visible) ? visible : !dropDownVisible;
      if (visible !== dropDownVisible) {
        this.dropDownVisible = visible;
        if (visible) {
          this.$nextTick(function () {
            _this2.updatePopper();
            _this2.panel.scrollIntoView();
          });
        }
        input.$refs.input.setAttribute('aria-expanded', visible);
        this.$emit('visible-change', visible);
      }
    },
    handleDropdownLeave: function handleDropdownLeave() {
      this.filtering = false;
      this.inputValue = this.presentText;
    },
    handleKeyDown: function handleKeyDown(event) {
      switch (event.keyCode) {
        case KeyCode.enter:
          this.toggleDropDownVisible();
          break;
        case KeyCode.down:
          this.toggleDropDownVisible(true);
          this.focusFirstNode();
          event.preventDefault();
          break;
        case KeyCode.esc:
        case KeyCode.tab:
          this.toggleDropDownVisible(false);
          break;
      }
    },
    handleFocus: function handleFocus(e) {
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
    },
    handleInput: function handleInput(val, event) {
      !this.dropDownVisible && this.toggleDropDownVisible(true);

      if (event && event.isComposing) return;
      if (val) {
        this.filterHandler();
      } else {
        this.filtering = false;
      }
    },
    handleClear: function handleClear() {
      this.presentText = '';
      this.panel.clearCheckedNodes();
    },
    handleExpandChange: function handleExpandChange(value) {
      this.$nextTick(this.updatePopper.bind(this));
      this.$emit('expand-change', value);
      this.$emit('active-item-change', value); // Deprecated
    },
    focusFirstNode: function focusFirstNode() {
      var _this3 = this;

      this.$nextTick(function () {
        var filtering = _this3.filtering;
        var _$refs = _this3.$refs,
            popper = _$refs.popper,
            suggestionPanel = _$refs.suggestionPanel;

        var firstNode = null;

        if (filtering && suggestionPanel) {
          firstNode = suggestionPanel.$el.querySelector('.el-cascader__suggestion-item');
        } else {
          var firstMenu = popper.querySelector('.el-cascader-menu');
          firstNode = firstMenu.querySelector('.el-cascader-node[tabindex="-1"]');
        }

        if (firstNode) {
          firstNode.focus();
          !filtering && firstNode.click();
        }
      });
    },
    computePresentContent: function computePresentContent() {
      var _this4 = this;

      // nextTick is required, because checked nodes may not change right now
      this.$nextTick(function () {
        if (_this4.config.multiple) {
          _this4.computePresentTags();
          _this4.presentText = _this4.presentTags.length ? ' ' : null;
        } else {
          _this4.computePresentText();
        }
      });
    },
    computePresentText: function computePresentText() {
      var checkedValue = this.checkedValue,
          config = this.config;

      if (!Object(util_["isEmpty"])(checkedValue)) {
        var node = this.panel.getNodeByValue(checkedValue);
        if (node && (config.checkStrictly || node.isLeaf)) {
          this.presentText = node.getText(this.showAllLevels, this.separator);
          return;
        }
      }
      this.presentText = null;
    },
    computePresentTags: function computePresentTags() {
      var isDisabled = this.isDisabled,
          leafOnly = this.leafOnly,
          showAllLevels = this.showAllLevels,
          separator = this.separator,
          collapseTags = this.collapseTags;

      var checkedNodes = this.getCheckedNodes(leafOnly);
      var tags = [];

      var genTag = function genTag(node) {
        return {
          node: node,
          key: node.uid,
          text: node.getText(showAllLevels, separator),
          hitState: false,
          closable: !isDisabled && !node.isDisabled
        };
      };

      if (checkedNodes.length) {
        var first = checkedNodes[0],
            rest = checkedNodes.slice(1);

        var restCount = rest.length;
        tags.push(genTag(first));

        if (restCount) {
          if (collapseTags) {
            tags.push({
              key: -1,
              text: '+ ' + restCount,
              closable: false
            });
          } else {
            rest.forEach(function (node) {
              return tags.push(genTag(node));
            });
          }
        }
      }

      this.checkedNodes = checkedNodes;
      this.presentTags = tags;
    },
    getSuggestions: function getSuggestions() {
      var _this5 = this;

      var filterMethod = this.filterMethod;


      if (!Object(types_["isFunction"])(filterMethod)) {
        filterMethod = function filterMethod(node, keyword) {
          return node.text.includes(keyword);
        };
      }

      var suggestions = this.panel.getFlattedNodes(this.leafOnly).filter(function (node) {
        if (node.isDisabled) return false;
        node.text = node.getText(_this5.showAllLevels, _this5.separator) || '';
        return filterMethod(node, _this5.inputValue);
      });

      if (this.multiple) {
        this.presentTags.forEach(function (tag) {
          tag.hitState = false;
        });
      } else {
        suggestions.forEach(function (node) {
          node.checked = Object(util_["isEqual"])(_this5.checkedValue, node.getValueByOption());
        });
      }

      this.filtering = true;
      this.suggestions = suggestions;
      this.$nextTick(this.updatePopper);
    },
    handleSuggestionKeyDown: function handleSuggestionKeyDown(event) {
      var keyCode = event.keyCode,
          target = event.target;

      switch (keyCode) {
        case KeyCode.enter:
          target.click();
          break;
        case KeyCode.up:
          var prev = target.previousElementSibling;
          prev && prev.focus();
          break;
        case KeyCode.down:
          var next = target.nextElementSibling;
          next && next.focus();
          break;
        case KeyCode.esc:
        case KeyCode.tab:
          this.toggleDropDownVisible(false);
          break;
      }
    },
    handleDelete: function handleDelete() {
      var inputValue = this.inputValue,
          pressDeleteCount = this.pressDeleteCount,
          presentTags = this.presentTags;

      var lastIndex = presentTags.length - 1;
      var lastTag = presentTags[lastIndex];
      this.pressDeleteCount = inputValue ? 0 : pressDeleteCount + 1;

      if (!lastTag) return;

      if (this.pressDeleteCount) {
        if (lastTag.hitState) {
          this.deleteTag(lastIndex);
        } else {
          lastTag.hitState = true;
        }
      }
    },
    handleSuggestionClick: function handleSuggestionClick(index) {
      var multiple = this.multiple;

      var targetNode = this.suggestions[index];

      if (multiple) {
        var checked = targetNode.checked;

        targetNode.doCheck(!checked);
        this.panel.calculateMultiCheckedValue();
      } else {
        this.checkedValue = targetNode.getValueByOption();
        this.toggleDropDownVisible(false);
      }
    },
    deleteTag: function deleteTag(index) {
      var checkedValue = this.checkedValue;

      var val = checkedValue[index];
      this.checkedValue = checkedValue.filter(function (n, i) {
        return i !== index;
      });
      this.$emit('remove-tag', val);
    },
    updateStyle: function updateStyle() {
      var $el = this.$el,
          inputInitialHeight = this.inputInitialHeight;

      if (this.$isServer || !$el) return;

      var suggestionPanel = this.$refs.suggestionPanel;

      var inputInner = $el.querySelector('.el-input__inner');

      if (!inputInner) return;

      var tags = $el.querySelector('.el-cascader__tags');
      var suggestionPanelEl = null;

      if (suggestionPanel && (suggestionPanelEl = suggestionPanel.$el)) {
        var suggestionList = suggestionPanelEl.querySelector('.el-cascader__suggestion-list');
        suggestionList.style.minWidth = inputInner.offsetWidth + 'px';
      }

      if (tags) {
        var offsetHeight = tags.offsetHeight;

        var height = Math.max(offsetHeight + 6, inputInitialHeight) + 'px';
        inputInner.style.height = height;
        this.updatePopper();
      }
    },


    /**
     * public methods
    */
    getCheckedNodes: function getCheckedNodes(leafOnly) {
      return this.panel.getCheckedNodes(leafOnly);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascadervue_type_script_lang_js_ = (cascadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_cascadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/cascader/src/cascader.vue"
/* harmony default export */ var cascader = (component.exports);
// CONCATENATED MODULE: ./packages/cascader/index.js


/* istanbul ignore next */
cascader.install = function (Vue) {
  Vue.component(cascader.name, cascader);
};

/* harmony default export */ var packages_cascader = __webpack_exports__["default"] = (cascader);

/***/ })

/******/ });