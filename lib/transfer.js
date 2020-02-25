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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox-group");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/main.vue?vue&type=template&id=5c654dd8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "el-transfer" },
    [
      _c(
        "transfer-panel",
        _vm._b(
          {
            ref: "leftPanel",
            attrs: {
              data: _vm.sourceData,
              title: _vm.titles[0] || _vm.t("el.transfer.titles.0"),
              "default-checked": _vm.leftDefaultChecked,
              placeholder:
                _vm.filterPlaceholder || _vm.t("el.transfer.filterPlaceholder")
            },
            on: { "checked-change": _vm.onSourceCheckedChange }
          },
          "transfer-panel",
          _vm.$props,
          false
        ),
        [_vm._t("left-footer")],
        2
      ),
      _c(
        "div",
        { staticClass: "el-transfer__buttons" },
        [
          _c(
            "el-button",
            {
              class: [
                "el-transfer__button",
                _vm.hasButtonTexts ? "is-with-texts" : ""
              ],
              attrs: {
                type: "primary",
                disabled: _vm.rightChecked.length === 0
              },
              nativeOn: {
                click: function($event) {
                  return _vm.addToLeft($event)
                }
              }
            },
            [
              _c("i", { staticClass: "el-icon-arrow-left" }),
              _vm.buttonTexts[0] !== undefined
                ? _c("span", [_vm._v(_vm._s(_vm.buttonTexts[0]))])
                : _vm._e()
            ]
          ),
          _c(
            "el-button",
            {
              class: [
                "el-transfer__button",
                _vm.hasButtonTexts ? "is-with-texts" : ""
              ],
              attrs: {
                type: "primary",
                disabled: _vm.leftChecked.length === 0
              },
              nativeOn: {
                click: function($event) {
                  return _vm.addToRight($event)
                }
              }
            },
            [
              _vm.buttonTexts[1] !== undefined
                ? _c("span", [_vm._v(_vm._s(_vm.buttonTexts[1]))])
                : _vm._e(),
              _c("i", { staticClass: "el-icon-arrow-right" })
            ]
          )
        ],
        1
      ),
      _c(
        "transfer-panel",
        _vm._b(
          {
            ref: "rightPanel",
            attrs: {
              data: _vm.targetData,
              title: _vm.titles[1] || _vm.t("el.transfer.titles.1"),
              "default-checked": _vm.rightDefaultChecked,
              placeholder:
                _vm.filterPlaceholder || _vm.t("el.transfer.filterPlaceholder")
            },
            on: { "checked-change": _vm.onTargetCheckedChange }
          },
          "transfer-panel",
          _vm.$props,
          false
        ),
        [_vm._t("right-footer")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/transfer/src/main.vue?vue&type=template&id=5c654dd8&

// EXTERNAL MODULE: external "element-ui/lib/button"
var button_ = __webpack_require__(13);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/transfer-panel.vue?vue&type=template&id=2ddab8bd&
var transfer_panelvue_type_template_id_2ddab8bd_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-transfer-panel" }, [
    _c(
      "p",
      { staticClass: "el-transfer-panel__header" },
      [
        _c(
          "el-checkbox",
          {
            attrs: { indeterminate: _vm.isIndeterminate },
            on: { change: _vm.handleAllCheckedChange },
            model: {
              value: _vm.allChecked,
              callback: function($$v) {
                _vm.allChecked = $$v
              },
              expression: "allChecked"
            }
          },
          [
            _vm._v("\n      " + _vm._s(_vm.title) + "\n      "),
            _c("span", [_vm._v(_vm._s(_vm.checkedSummary))])
          ]
        )
      ],
      1
    ),
    _c(
      "div",
      {
        class: [
          "el-transfer-panel__body",
          _vm.hasFooter ? "is-with-footer" : ""
        ]
      },
      [
        _vm.filterable
          ? _c(
              "el-input",
              {
                staticClass: "el-transfer-panel__filter",
                attrs: { size: "small", placeholder: _vm.placeholder },
                nativeOn: {
                  mouseenter: function($event) {
                    _vm.inputHover = true
                  },
                  mouseleave: function($event) {
                    _vm.inputHover = false
                  }
                },
                model: {
                  value: _vm.query,
                  callback: function($$v) {
                    _vm.query = $$v
                  },
                  expression: "query"
                }
              },
              [
                _c("i", {
                  class: ["el-input__icon", "el-icon-" + _vm.inputIcon],
                  attrs: { slot: "prefix" },
                  on: { click: _vm.clearQuery },
                  slot: "prefix"
                })
              ]
            )
          : _vm._e(),
        _c(
          "el-checkbox-group",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.hasNoMatch && _vm.data.length > 0,
                expression: "!hasNoMatch && data.length > 0"
              }
            ],
            staticClass: "el-transfer-panel__list",
            class: { "is-filterable": _vm.filterable },
            model: {
              value: _vm.checked,
              callback: function($$v) {
                _vm.checked = $$v
              },
              expression: "checked"
            }
          },
          _vm._l(_vm.filteredData, function(item) {
            return _c(
              "el-checkbox",
              {
                key: item[_vm.keyProp],
                staticClass: "el-transfer-panel__item",
                attrs: {
                  label: item[_vm.keyProp],
                  disabled: item[_vm.disabledProp]
                }
              },
              [_c("option-content", { attrs: { option: item } })],
              1
            )
          }),
          1
        ),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.hasNoMatch,
                expression: "hasNoMatch"
              }
            ],
            staticClass: "el-transfer-panel__empty"
          },
          [_vm._v(_vm._s(_vm.t("el.transfer.noMatch")))]
        ),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.data.length === 0 && !_vm.hasNoMatch,
                expression: "data.length === 0 && !hasNoMatch"
              }
            ],
            staticClass: "el-transfer-panel__empty"
          },
          [_vm._v(_vm._s(_vm.t("el.transfer.noData")))]
        )
      ],
      1
    ),
    _vm.hasFooter
      ? _c(
          "p",
          { staticClass: "el-transfer-panel__footer" },
          [_vm._t("default")],
          2
        )
      : _vm._e()
  ])
}
var transfer_panelvue_type_template_id_2ddab8bd_staticRenderFns = []
transfer_panelvue_type_template_id_2ddab8bd_render._withStripped = true


// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel.vue?vue&type=template&id=2ddab8bd&

// EXTERNAL MODULE: external "element-ui/lib/checkbox-group"
var checkbox_group_ = __webpack_require__(40);
var checkbox_group_default = /*#__PURE__*/__webpack_require__.n(checkbox_group_);

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(18);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(10);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/transfer-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var transfer_panelvue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  name: 'ElTransferPanel',

  componentName: 'ElTransferPanel',

  components: {
    ElCheckboxGroup: checkbox_group_default.a,
    ElCheckbox: checkbox_default.a,
    ElInput: input_default.a,
    OptionContent: {
      props: {
        option: Object
      },
      render: function render(h) {
        var getParent = function getParent(vm) {
          if (vm.$options.componentName === 'ElTransferPanel') {
            return vm;
          } else if (vm.$parent) {
            return getParent(vm.$parent);
          } else {
            return vm;
          }
        };
        var panel = getParent(this);
        var transfer = panel.$parent || panel;
        return panel.renderContent ? panel.renderContent(h, this.option) : transfer.$scopedSlots.default ? transfer.$scopedSlots.default({ option: this.option }) : h('span', [this.option[panel.labelProp] || this.option[panel.keyProp]]);
      }
    }
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object
  },

  data: function data() {
    return {
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      checkChangeByUser: true
    };
  },


  watch: {
    checked: function checked(val, oldVal) {
      this.updateAllChecked();
      if (this.checkChangeByUser) {
        var movedKeys = val.concat(oldVal).filter(function (v) {
          return val.indexOf(v) === -1 || oldVal.indexOf(v) === -1;
        });
        this.$emit('checked-change', val, movedKeys);
      } else {
        this.$emit('checked-change', val);
        this.checkChangeByUser = true;
      }
    },
    data: function data() {
      var _this = this;

      var checked = [];
      var filteredDataKeys = this.filteredData.map(function (item) {
        return item[_this.keyProp];
      });
      this.checked.forEach(function (item) {
        if (filteredDataKeys.indexOf(item) > -1) {
          checked.push(item);
        }
      });
      this.checkChangeByUser = false;
      this.checked = checked;
    },
    checkableData: function checkableData() {
      this.updateAllChecked();
    },


    defaultChecked: {
      immediate: true,
      handler: function handler(val, oldVal) {
        var _this2 = this;

        if (oldVal && val.length === oldVal.length && val.every(function (item) {
          return oldVal.indexOf(item) > -1;
        })) return;
        var checked = [];
        var checkableDataKeys = this.checkableData.map(function (item) {
          return item[_this2.keyProp];
        });
        val.forEach(function (item) {
          if (checkableDataKeys.indexOf(item) > -1) {
            checked.push(item);
          }
        });
        this.checkChangeByUser = false;
        this.checked = checked;
      }
    }
  },

  computed: {
    filteredData: function filteredData() {
      var _this3 = this;

      return this.data.filter(function (item) {
        if (typeof _this3.filterMethod === 'function') {
          return _this3.filterMethod(_this3.query, item);
        } else {
          var label = item[_this3.labelProp] || item[_this3.keyProp].toString();
          return label.toLowerCase().indexOf(_this3.query.toLowerCase()) > -1;
        }
      });
    },
    checkableData: function checkableData() {
      var _this4 = this;

      return this.filteredData.filter(function (item) {
        return !item[_this4.disabledProp];
      });
    },
    checkedSummary: function checkedSummary() {
      var checkedLength = this.checked.length;
      var dataLength = this.data.length;
      var _format = this.format,
          noChecked = _format.noChecked,
          hasChecked = _format.hasChecked;

      if (noChecked && hasChecked) {
        return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength) : noChecked.replace(/\${total}/g, dataLength);
      } else {
        return checkedLength + '/' + dataLength;
      }
    },
    isIndeterminate: function isIndeterminate() {
      var checkedLength = this.checked.length;
      return checkedLength > 0 && checkedLength < this.checkableData.length;
    },
    hasNoMatch: function hasNoMatch() {
      return this.query.length > 0 && this.filteredData.length === 0;
    },
    inputIcon: function inputIcon() {
      return this.query.length > 0 && this.inputHover ? 'circle-close' : 'search';
    },
    labelProp: function labelProp() {
      return this.props.label || 'label';
    },
    keyProp: function keyProp() {
      return this.props.key || 'key';
    },
    disabledProp: function disabledProp() {
      return this.props.disabled || 'disabled';
    },
    hasFooter: function hasFooter() {
      return !!this.$slots.default;
    }
  },

  methods: {
    updateAllChecked: function updateAllChecked() {
      var _this5 = this;

      var checkableDataKeys = this.checkableData.map(function (item) {
        return item[_this5.keyProp];
      });
      this.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every(function (item) {
        return _this5.checked.indexOf(item) > -1;
      });
    },
    handleAllCheckedChange: function handleAllCheckedChange(value) {
      var _this6 = this;

      this.checked = value ? this.checkableData.map(function (item) {
        return item[_this6.keyProp];
      }) : [];
    },
    clearQuery: function clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.query = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_transfer_panelvue_type_script_lang_js_ = (transfer_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_transfer_panelvue_type_script_lang_js_,
  transfer_panelvue_type_template_id_2ddab8bd_render,
  transfer_panelvue_type_template_id_2ddab8bd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/transfer/src/transfer-panel.vue"
/* harmony default export */ var transfer_panel = (component.exports);
// EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(11);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElTransfer',

  mixins: [emitter_default.a, locale_default.a, migrating_default.a],

  components: {
    TransferPanel: transfer_panel,
    ElButton: button_default.a
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    titles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    buttonTexts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rightDefaultChecked: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    renderContent: Function,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    format: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default: function _default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled'
        };
      }
    },
    targetOrder: {
      type: String,
      default: 'original'
    }
  },

  data: function data() {
    return {
      leftChecked: [],
      rightChecked: []
    };
  },


  computed: {
    dataObj: function dataObj() {
      var key = this.props.key;
      return this.data.reduce(function (o, cur) {
        return (o[cur[key]] = cur) && o;
      }, {});
    },
    sourceData: function sourceData() {
      var _this = this;

      return this.data.filter(function (item) {
        return _this.value.indexOf(item[_this.props.key]) === -1;
      });
    },
    targetData: function targetData() {
      var _this2 = this;

      if (this.targetOrder === 'original') {
        return this.data.filter(function (item) {
          return _this2.value.indexOf(item[_this2.props.key]) > -1;
        });
      } else {
        return this.value.reduce(function (arr, cur) {
          var val = _this2.dataObj[cur];
          if (val) {
            arr.push(val);
          }
          return arr;
        }, []);
      }
    },
    hasButtonTexts: function hasButtonTexts() {
      return this.buttonTexts.length === 2;
    }
  },

  watch: {
    value: function value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val);
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'footer-format': 'footer-format is renamed to format.'
        }
      };
    },
    onSourceCheckedChange: function onSourceCheckedChange(val, movedKeys) {
      this.leftChecked = val;
      if (movedKeys === undefined) return;
      this.$emit('left-check-change', val, movedKeys);
    },
    onTargetCheckedChange: function onTargetCheckedChange(val, movedKeys) {
      this.rightChecked = val;
      if (movedKeys === undefined) return;
      this.$emit('right-check-change', val, movedKeys);
    },
    addToLeft: function addToLeft() {
      var currentValue = this.value.slice();
      this.rightChecked.forEach(function (item) {
        var index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'left', this.rightChecked);
    },
    addToRight: function addToRight() {
      var _this3 = this;

      var currentValue = this.value.slice();
      var itemsToBeMoved = [];
      var key = this.props.key;
      this.data.forEach(function (item) {
        var itemKey = item[key];
        if (_this3.leftChecked.indexOf(itemKey) > -1 && _this3.value.indexOf(itemKey) === -1) {
          itemsToBeMoved.push(itemKey);
        }
      });
      currentValue = this.targetOrder === 'unshift' ? itemsToBeMoved.concat(currentValue) : currentValue.concat(itemsToBeMoved);
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'right', this.leftChecked);
    },
    clearQuery: function clearQuery(which) {
      if (which === 'left') {
        this.$refs.leftPanel.query = '';
      } else if (which === 'right') {
        this.$refs.rightPanel.query = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/transfer/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/transfer/src/main.vue





/* normalize component */

var main_component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/transfer/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/transfer/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var transfer = __webpack_exports__["default"] = (main);

/***/ })

/******/ });