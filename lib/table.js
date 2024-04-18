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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getColumnById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getColumnByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getColumnByCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRowIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getKeysMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return parseWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return parseMinWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return toggleRowStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return walkTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return objectEquals; });
/* harmony import */ var element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return Object(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__["getValueByPath"])(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? Object(element_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__["getValueByPath"])(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByKey = function getColumnByKey(table, columnKey) {
  var column = null;
  for (var i = 0; i < table.columns.length; i++) {
    var item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};

var getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function mergeOptions(defaults, config) {
  var options = {};
  var key = void 0;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      var value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}

function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}

function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
};

function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;

  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };
  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}

function walkTreeNode(root, cb) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var lazyKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hasChildren';

  var isNil = function isNil(array) {
    return !(Array.isArray(array) && array.length);
  };

  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(function (item) {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      var children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach(function (item) {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    var children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}

var objectEquals = function objectEquals(objectA, objectB) {
  // 取对象a和b的属性名
  var aProps = Object.getOwnPropertyNames(objectA);
  var bProps = Object.getOwnPropertyNames(objectB);
  // 判断属性名的length是否一致
  if (aProps.length !== bProps.length) {
    return false;
  }
  // 循环取出属性名，再判断属性值是否一致
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (objectA[propName] !== objectB[propName]) {
      return false;
    }
  }
  return true;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/merge");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/migrating");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/popup");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/scrollbar");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tooltip");

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/scrollbar-width");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox-group");

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = require("normalize-wheel");

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=template&id=493fe34e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-table",
      class: [
        {
          "el-table--fit": _vm.fit,
          "el-table--striped": _vm.stripe,
          "el-table--border": _vm.border || _vm.isGroup,
          "el-table--hidden": _vm.isHidden,
          "el-table--group": _vm.isGroup,
          "el-table--fluid-height": _vm.maxHeight,
          "el-table--scrollable-x": _vm.layout.scrollX,
          "el-table--scrollable-y": _vm.layout.scrollY,
          "el-table--enable-row-hover": !_vm.store.states.isComplex,
          "el-table--enable-row-transition":
            (_vm.store.states.data || []).length !== 0 &&
            (_vm.store.states.data || []).length < 100
        },
        _vm.tableSize ? "el-table--" + _vm.tableSize : ""
      ],
      on: {
        mouseleave: function($event) {
          _vm.handleMouseLeave($event)
        }
      }
    },
    [
      _c(
        "div",
        { ref: "hiddenColumns", staticClass: "hidden-columns" },
        [_vm._t("default")],
        2
      ),
      _vm.showHeader
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleHeaderFooterMousewheel,
                  expression: "handleHeaderFooterMousewheel"
                }
              ],
              ref: "headerWrapper",
              staticClass: "el-table__header-wrapper"
            },
            [
              _c("table-header", {
                ref: "tableHeader",
                style: {
                  width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + "px" : ""
                },
                attrs: {
                  store: _vm.store,
                  border: _vm.border,
                  "default-sort": _vm.defaultSort
                }
              })
            ],
            1
          )
        : _vm._e(),
      _c(
        "div",
        {
          ref: "bodyWrapper",
          staticClass: "el-table__body-wrapper",
          class: [
            _vm.layout.scrollX
              ? "is-scrolling-" + _vm.scrollPosition
              : "is-scrolling-none"
          ],
          style: [_vm.bodyHeight]
        },
        [
          _c("table-body", {
            style: {
              width: _vm.bodyWidth
            },
            attrs: {
              context: _vm.context,
              store: _vm.store,
              stripe: _vm.stripe,
              "row-class-name": _vm.rowClassName,
              "row-style": _vm.rowStyle,
              highlight: _vm.highlightCurrentRow
            }
          }),
          !_vm.data || _vm.data.length === 0
            ? _c(
                "div",
                {
                  ref: "emptyBlock",
                  staticClass: "el-table__empty-block",
                  style: _vm.emptyBlockStyle
                },
                [
                  _c(
                    "span",
                    { staticClass: "el-table__empty-text" },
                    [
                      _vm._t("empty", [
                        _vm._v(
                          _vm._s(_vm.emptyText || _vm.t("el.table.emptyText"))
                        )
                      ])
                    ],
                    2
                  )
                ]
              )
            : _vm._e(),
          _vm.$slots.append
            ? _c(
                "div",
                {
                  ref: "appendWrapper",
                  staticClass: "el-table__append-wrapper"
                },
                [_vm._t("append")],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm.showSummary
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.data && _vm.data.length > 0,
                  expression: "data && data.length > 0"
                },
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleHeaderFooterMousewheel,
                  expression: "handleHeaderFooterMousewheel"
                }
              ],
              ref: "footerWrapper",
              staticClass: "el-table__footer-wrapper"
            },
            [
              _c("table-footer", {
                style: {
                  width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + "px" : ""
                },
                attrs: {
                  store: _vm.store,
                  border: _vm.border,
                  "sum-text": _vm.sumText || _vm.t("el.table.sumText"),
                  "summary-method": _vm.summaryMethod,
                  "default-sort": _vm.defaultSort
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm.fixedColumns.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleFixedMousewheel,
                  expression: "handleFixedMousewheel"
                }
              ],
              ref: "fixedWrapper",
              staticClass: "el-table__fixed",
              style: [
                {
                  width: _vm.layout.fixedWidth
                    ? _vm.layout.fixedWidth + "px"
                    : ""
                },
                _vm.fixedHeight
              ]
            },
            [
              _vm.showHeader
                ? _c(
                    "div",
                    {
                      ref: "fixedHeaderWrapper",
                      staticClass: "el-table__fixed-header-wrapper"
                    },
                    [
                      _c("table-header", {
                        ref: "fixedTableHeader",
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "left",
                          border: _vm.border,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  ref: "fixedBodyWrapper",
                  staticClass: "el-table__fixed-body-wrapper",
                  style: [
                    {
                      top: _vm.layout.headerHeight + "px"
                    },
                    _vm.fixedBodyHeight
                  ]
                },
                [
                  _c("table-body", {
                    style: {
                      width: _vm.bodyWidth
                    },
                    attrs: {
                      fixed: "left",
                      store: _vm.store,
                      stripe: _vm.stripe,
                      highlight: _vm.highlightCurrentRow,
                      "row-class-name": _vm.rowClassName,
                      "row-style": _vm.rowStyle
                    }
                  }),
                  _vm.$slots.append
                    ? _c("div", {
                        staticClass: "el-table__append-gutter",
                        style: { height: _vm.layout.appendHeight + "px" }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm.showSummary
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data && _vm.data.length > 0,
                          expression: "data && data.length > 0"
                        }
                      ],
                      ref: "fixedFooterWrapper",
                      staticClass: "el-table__fixed-footer-wrapper"
                    },
                    [
                      _c("table-footer", {
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "left",
                          border: _vm.border,
                          "sum-text": _vm.sumText || _vm.t("el.table.sumText"),
                          "summary-method": _vm.summaryMethod,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm.rightFixedColumns.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleFixedMousewheel,
                  expression: "handleFixedMousewheel"
                }
              ],
              ref: "rightFixedWrapper",
              staticClass: "el-table__fixed-right",
              style: [
                {
                  width: _vm.layout.rightFixedWidth
                    ? _vm.layout.rightFixedWidth + "px"
                    : "",
                  right: _vm.layout.scrollY
                    ? (_vm.border
                        ? _vm.layout.gutterWidth
                        : _vm.layout.gutterWidth || 0) + "px"
                    : ""
                },
                _vm.fixedHeight
              ]
            },
            [
              _vm.showHeader
                ? _c(
                    "div",
                    {
                      ref: "rightFixedHeaderWrapper",
                      staticClass: "el-table__fixed-header-wrapper"
                    },
                    [
                      _c("table-header", {
                        ref: "rightFixedTableHeader",
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "right",
                          border: _vm.border,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  ref: "rightFixedBodyWrapper",
                  staticClass: "el-table__fixed-body-wrapper",
                  style: [
                    {
                      top: _vm.layout.headerHeight + "px"
                    },
                    _vm.fixedBodyHeight
                  ]
                },
                [
                  _c("table-body", {
                    style: {
                      width: _vm.bodyWidth
                    },
                    attrs: {
                      fixed: "right",
                      store: _vm.store,
                      stripe: _vm.stripe,
                      "row-class-name": _vm.rowClassName,
                      "row-style": _vm.rowStyle,
                      highlight: _vm.highlightCurrentRow
                    }
                  }),
                  _vm.$slots.append
                    ? _c("div", {
                        staticClass: "el-table__append-gutter",
                        style: { height: _vm.layout.appendHeight + "px" }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm.showSummary
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data && _vm.data.length > 0,
                          expression: "data && data.length > 0"
                        }
                      ],
                      ref: "rightFixedFooterWrapper",
                      staticClass: "el-table__fixed-footer-wrapper"
                    },
                    [
                      _c("table-footer", {
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "right",
                          border: _vm.border,
                          "sum-text": _vm.sumText || _vm.t("el.table.sumText"),
                          "summary-method": _vm.summaryMethod,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm.rightFixedColumns.length > 0
        ? _c("div", {
            ref: "rightFixedPatch",
            staticClass: "el-table__fixed-right-patch",
            style: {
              width: _vm.layout.scrollY ? _vm.layout.gutterWidth + "px" : "0",
              height: _vm.layout.headerHeight + "px"
            }
          })
        : _vm._e(),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.resizeProxyVisible,
            expression: "resizeProxyVisible"
          }
        ],
        ref: "resizeProxy",
        staticClass: "el-table__column-resize-proxy"
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=template&id=493fe34e&

// EXTERNAL MODULE: external "element-ui/lib/checkbox"
var checkbox_ = __webpack_require__(18);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(44);

// EXTERNAL MODULE: external "element-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(16);

// EXTERNAL MODULE: external "normalize-wheel"
var external_normalize_wheel_ = __webpack_require__(47);
var external_normalize_wheel_default = /*#__PURE__*/__webpack_require__.n(external_normalize_wheel_);

// CONCATENATED MODULE: ./src/directives/mousewheel.js


var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel_mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = external_normalize_wheel_default()(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

/* harmony default export */ var directives_mousewheel = ({
  bind: function bind(el, binding) {
    mousewheel_mousewheel(el, binding.value);
  }
});
// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(11);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(7);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "element-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// EXTERNAL MODULE: ./packages/table/src/util.js
var util = __webpack_require__(8);

// CONCATENATED MODULE: ./packages/table/src/store/expand.js


/* harmony default export */ var expand = ({
  data: function data() {
    return {
      states: {
        defaultExpandAll: false,
        expandRows: []
      }
    };
  },


  methods: {
    updateExpandRows: function updateExpandRows() {
      var _states = this.states,
          _states$data = _states.data,
          data = _states$data === undefined ? [] : _states$data,
          rowKey = _states.rowKey,
          defaultExpandAll = _states.defaultExpandAll,
          expandRows = _states.expandRows;

      if (defaultExpandAll) {
        this.states.expandRows = data.slice();
      } else if (rowKey) {
        // TODO：这里的代码可以优化
        var expandRowsMap = Object(util["f" /* getKeysMap */])(expandRows, rowKey);
        this.states.expandRows = data.reduce(function (prev, row) {
          var rowId = Object(util["g" /* getRowIdentity */])(row, rowKey);
          var rowInfo = expandRowsMap[rowId];
          if (rowInfo) {
            prev.push(row);
          }
          return prev;
        }, []);
      } else {
        this.states.expandRows = [];
      }
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      var changed = Object(util["n" /* toggleRowStatus */])(this.states.expandRows, row, expanded);
      if (changed) {
        this.table.$emit('expand-change', row, this.states.expandRows.slice());
        this.scheduleLayout();
      }
    },
    setExpandRowKeys: function setExpandRowKeys(rowKeys) {
      this.assertRowKey();
      // TODO：这里的代码可以优化
      var _states2 = this.states,
          data = _states2.data,
          rowKey = _states2.rowKey;

      var keysMap = Object(util["f" /* getKeysMap */])(data, rowKey);
      this.states.expandRows = rowKeys.reduce(function (prev, cur) {
        var info = keysMap[cur];
        if (info) {
          prev.push(info.row);
        }
        return prev;
      }, []);
    },
    isRowExpanded: function isRowExpanded(row) {
      var _states3 = this.states,
          _states3$expandRows = _states3.expandRows,
          expandRows = _states3$expandRows === undefined ? [] : _states3$expandRows,
          rowKey = _states3.rowKey;

      if (rowKey) {
        var expandMap = Object(util["f" /* getKeysMap */])(expandRows, rowKey);
        return !!expandMap[Object(util["g" /* getRowIdentity */])(row, rowKey)];
      }
      return expandRows.indexOf(row) !== -1;
    }
  }
});
// EXTERNAL MODULE: external "element-ui/lib/utils/util"
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/table/src/store/current.js



/* harmony default export */ var current = ({
  data: function data() {
    return {
      states: {
        // 不可响应的，设置 currentRowKey 时，data 不一定存在，也许无法算出正确的 currentRow
        // 把该值缓存一下，当用户点击修改 currentRow 时，把该值重置为 null
        _currentRowKey: null,
        currentRow: null
      }
    };
  },


  methods: {
    setCurrentRowKey: function setCurrentRowKey(key) {
      this.assertRowKey();
      this.states._currentRowKey = key;
      this.setCurrentRowByKey(key);
    },
    restoreCurrentRowKey: function restoreCurrentRowKey() {
      this.states._currentRowKey = null;
    },
    setCurrentRowByKey: function setCurrentRowByKey(key) {
      var states = this.states;
      var _states$data = states.data,
          data = _states$data === undefined ? [] : _states$data,
          rowKey = states.rowKey;

      var currentRow = null;
      if (rowKey) {
        currentRow = Object(util_["arrayFind"])(data, function (item) {
          return Object(util["g" /* getRowIdentity */])(item, rowKey) === key;
        });
      }
      states.currentRow = currentRow;
    },
    updateCurrentRow: function updateCurrentRow(currentRow) {
      var states = this.states,
          table = this.table;

      var oldCurrentRow = states.currentRow;
      if (currentRow && currentRow !== oldCurrentRow) {
        states.currentRow = currentRow;
        table.$emit('current-change', currentRow, oldCurrentRow);
        return;
      }
      if (!currentRow && oldCurrentRow) {
        states.currentRow = null;
        table.$emit('current-change', null, oldCurrentRow);
      }
    },
    updateCurrentRowData: function updateCurrentRowData() {
      var states = this.states,
          table = this.table;
      var rowKey = states.rowKey,
          _currentRowKey = states._currentRowKey;
      // data 为 null 时，解构时的默认值会被忽略

      var data = states.data || [];
      var oldCurrentRow = states.currentRow;

      // 当 currentRow 不在 data 中时尝试更新数据
      if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
        if (rowKey) {
          var currentRowKey = Object(util["g" /* getRowIdentity */])(oldCurrentRow, rowKey);
          this.setCurrentRowByKey(currentRowKey);
        } else {
          states.currentRow = null;
        }
        if (states.currentRow === null) {
          table.$emit('current-change', null, oldCurrentRow);
        }
      } else if (_currentRowKey) {
        // 把初始时下设置的 rowKey 转化成 rowData
        this.setCurrentRowByKey(_currentRowKey);
        this.restoreCurrentRowKey();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/tree.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ var tree = ({
  data: function data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，这里不重复添加
        // 在展开行中，expandRowKeys 会被转化成 expandRows，expandRowKeys 这个属性只是记录了 TreeTable 行的展开
        // TODO: 拆分为独立的 TreeTable，统一用法
        expandRowKeys: [],
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        lazyColumnIdentifier: 'hasChildren',
        childrenColumnName: 'children'
      }
    };
  },


  computed: {
    // 嵌入型的数据，watch 无法是检测到变化 https://github.com/ElemeFE/element/issues/14998
    // TODO: 使用 computed 解决该问题，是否会造成性能问题？
    // @return { id: { level, children } }
    normalizedData: function normalizedData() {
      if (!this.states.rowKey) return {};
      var data = this.states.data || [];
      return this.normalize(data);
    },

    // @return { id: { children } }
    // 针对懒加载的情形，不处理嵌套数据
    normalizedLazyNode: function normalizedLazyNode() {
      var _states = this.states,
          rowKey = _states.rowKey,
          lazyTreeNodeMap = _states.lazyTreeNodeMap,
          lazyColumnIdentifier = _states.lazyColumnIdentifier;

      var keys = Object.keys(lazyTreeNodeMap);
      var res = {};
      if (!keys.length) return res;
      keys.forEach(function (key) {
        if (lazyTreeNodeMap[key].length) {
          var item = { children: [] };
          lazyTreeNodeMap[key].forEach(function (row) {
            var currentRowKey = Object(util["g" /* getRowIdentity */])(row, rowKey);
            item.children.push(currentRowKey);
            if (row[lazyColumnIdentifier] && !res[currentRowKey]) {
              res[currentRowKey] = { children: [] };
            }
          });
          res[key] = item;
        }
      });
      return res;
    }
  },

  watch: {
    normalizedData: 'updateTreeData',
    normalizedLazyNode: 'updateTreeData'
  },

  methods: {
    normalize: function normalize(data) {
      var _states2 = this.states,
          childrenColumnName = _states2.childrenColumnName,
          lazyColumnIdentifier = _states2.lazyColumnIdentifier,
          rowKey = _states2.rowKey,
          lazy = _states2.lazy;

      var res = {};
      Object(util["o" /* walkTreeNode */])(data, function (parent, children, level) {
        var parentId = Object(util["g" /* getRowIdentity */])(parent, rowKey);
        if (Array.isArray(children)) {
          res[parentId] = {
            children: children.map(function (row) {
              return Object(util["g" /* getRowIdentity */])(row, rowKey);
            }),
            level: level
          };
        } else if (lazy) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res[parentId] = {
            children: [],
            lazy: true,
            level: level
          };
        }
      }, childrenColumnName, lazyColumnIdentifier);
      return res;
    },
    updateTreeData: function updateTreeData() {
      var nested = this.normalizedData;
      var normalizedLazyNode = this.normalizedLazyNode;
      var keys = Object.keys(nested);
      var newTreeData = {};
      if (keys.length) {
        var _states3 = this.states,
            oldTreeData = _states3.treeData,
            defaultExpandAll = _states3.defaultExpandAll,
            expandRowKeys = _states3.expandRowKeys,
            lazy = _states3.lazy;

        var rootLazyRowKeys = [];
        var getExpanded = function getExpanded(oldValue, key) {
          var included = defaultExpandAll || expandRowKeys && expandRowKeys.indexOf(key) !== -1;
          return !!(oldValue && oldValue.expanded || included);
        };
        // 合并 expanded 与 display，确保数据刷新后，状态不变
        keys.forEach(function (key) {
          var oldValue = oldTreeData[key];
          var newValue = _extends({}, nested[key]);
          newValue.expanded = getExpanded(oldValue, key);
          if (newValue.lazy) {
            var _ref = oldValue || {},
                _ref$loaded = _ref.loaded,
                loaded = _ref$loaded === undefined ? false : _ref$loaded,
                _ref$loading = _ref.loading,
                loading = _ref$loading === undefined ? false : _ref$loading;

            newValue.loaded = !!loaded;
            newValue.loading = !!loading;
            rootLazyRowKeys.push(key);
          }
          newTreeData[key] = newValue;
        });
        // 根据懒加载数据更新 treeData
        var lazyKeys = Object.keys(normalizedLazyNode);
        if (lazy && lazyKeys.length && rootLazyRowKeys.length) {
          lazyKeys.forEach(function (key) {
            var oldValue = oldTreeData[key];
            var lazyNodeChildren = normalizedLazyNode[key].children;
            if (rootLazyRowKeys.indexOf(key) !== -1) {
              // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
              if (newTreeData[key].children.length !== 0) {
                throw new Error('[ElTable]children must be an empty array.');
              }
              newTreeData[key].children = lazyNodeChildren;
            } else {
              var _ref2 = oldValue || {},
                  _ref2$loaded = _ref2.loaded,
                  loaded = _ref2$loaded === undefined ? false : _ref2$loaded,
                  _ref2$loading = _ref2.loading,
                  loading = _ref2$loading === undefined ? false : _ref2$loading;

              newTreeData[key] = {
                lazy: true,
                loaded: !!loaded,
                loading: !!loading,
                expanded: getExpanded(oldValue, key),
                children: lazyNodeChildren,
                level: ''
              };
            }
          });
        }
      }
      this.states.treeData = newTreeData;
      this.updateTableScrollY();
    },
    updateTreeExpandKeys: function updateTreeExpandKeys(value) {
      this.states.expandRowKeys = value;
      this.updateTreeData();
    },
    toggleTreeExpansion: function toggleTreeExpansion(row, expanded) {
      this.assertRowKey();

      var _states4 = this.states,
          rowKey = _states4.rowKey,
          treeData = _states4.treeData;

      var id = Object(util["g" /* getRowIdentity */])(row, rowKey);
      var data = id && treeData[id];
      if (id && data && 'expanded' in data) {
        var oldExpanded = data.expanded;
        expanded = typeof expanded === 'undefined' ? !data.expanded : expanded;
        treeData[id].expanded = expanded;
        if (oldExpanded !== expanded) {
          this.table.$emit('expand-change', row, expanded);
        }
        this.updateTableScrollY();
      }
    },
    loadOrToggle: function loadOrToggle(row) {
      this.assertRowKey();
      var _states5 = this.states,
          lazy = _states5.lazy,
          treeData = _states5.treeData,
          rowKey = _states5.rowKey;

      var id = Object(util["g" /* getRowIdentity */])(row, rowKey);
      var data = treeData[id];
      if (lazy && data && 'loaded' in data && !data.loaded) {
        this.loadData(row, id, data);
      } else {
        this.toggleTreeExpansion(row);
      }
    },
    loadData: function loadData(row, key, treeNode) {
      var _this = this;

      var load = this.table.load;
      var rawTreeData = this.states.treeData;

      if (load && !rawTreeData[key].loaded) {
        rawTreeData[key].loading = true;
        load(row, treeNode, function (data) {
          if (!Array.isArray(data)) {
            throw new Error('[ElTable] data must be an array');
          }
          var _states6 = _this.states,
              lazyTreeNodeMap = _states6.lazyTreeNodeMap,
              treeData = _states6.treeData;

          treeData[key].loading = false;
          treeData[key].loaded = true;
          treeData[key].expanded = true;
          if (data.length) {
            _this.$set(lazyTreeNodeMap, key, data);
          }
          _this.table.$emit('expand-change', row, true);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/watcher.js







var watcher_sortData = function sortData(data, states) {
  var sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return Object(util["j" /* orderBy */])(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

var doFlattenColumns = function doFlattenColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

/* harmony default export */ var watcher = (external_vue_default.a.extend({
  data: function data() {
    return {
      states: {
        // 3.0 版本后要求必须设置该属性
        rowKey: null,

        // 渲染的数据来源，是对 table 中的 data 过滤排序后的结果
        data: [],

        // 是否包含固定列
        isComplex: false,

        // 列
        _columns: [], // 不可响应的
        originColumns: [],
        columns: [],
        fixedColumns: [],
        rightFixedColumns: [],
        leafColumns: [],
        fixedLeafColumns: [],
        rightFixedLeafColumns: [],
        leafColumnsLength: 0,
        fixedLeafColumnsLength: 0,
        rightFixedLeafColumnsLength: 0,

        // 选择
        isAllSelected: false,
        selection: [],
        reserveSelection: false,
        selectOnIndeterminate: false,
        selectable: null,

        // 过滤
        filters: {}, // 不可响应的
        filteredData: null,

        // 排序
        sortingColumn: null,
        sortProp: null,
        sortOrder: null,

        hoverRow: null
      }
    };
  },


  mixins: [expand, current, tree],

  methods: {
    // 检查 rowKey 是否存在
    assertRowKey: function assertRowKey() {
      var rowKey = this.states.rowKey;
      if (!rowKey) throw new Error('[ElTable] prop row-key is required');
    },


    // 更新列
    updateColumns: function updateColumns() {
      var states = this.states;
      var _columns = states._columns || [];
      states.fixedColumns = _columns.filter(function (column) {
        return column.fixed === true || column.fixed === 'left';
      });
      states.rightFixedColumns = _columns.filter(function (column) {
        return column.fixed === 'right';
      });

      if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
        _columns[0].fixed = true;
        states.fixedColumns.unshift(_columns[0]);
      }

      var notFixedColumns = _columns.filter(function (column) {
        return !column.fixed;
      });
      states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

      var leafColumns = doFlattenColumns(notFixedColumns);
      var fixedLeafColumns = doFlattenColumns(states.fixedColumns);
      var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

      states.leafColumnsLength = leafColumns.length;
      states.fixedLeafColumnsLength = fixedLeafColumns.length;
      states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

      states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
      states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
    },


    // 更新 DOM
    scheduleLayout: function scheduleLayout(needUpdateColumns) {
      if (needUpdateColumns) {
        this.updateColumns();
      }
      this.table.debouncedUpdateLayout();
    },


    // 选择
    isSelected: function isSelected(row) {
      var _states$selection = this.states.selection,
          selection = _states$selection === undefined ? [] : _states$selection;

      return selection.indexOf(row) > -1;
    },
    clearSelection: function clearSelection() {
      var states = this.states;
      states.isAllSelected = false;
      var oldSelection = states.selection;
      if (oldSelection.length) {
        states.selection = [];
        this.table.$emit('selection-change', []);
      }
    },
    cleanSelection: function cleanSelection() {
      var states = this.states;
      var data = states.data,
          rowKey = states.rowKey,
          selection = states.selection;

      var deleted = void 0;
      if (rowKey) {
        deleted = [];
        var selectedMap = Object(util["f" /* getKeysMap */])(selection, rowKey);
        var dataMap = Object(util["f" /* getKeysMap */])(data, rowKey);
        for (var key in selectedMap) {
          if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
            deleted.push(selectedMap[key].row);
          }
        }
      } else {
        deleted = selection.filter(function (item) {
          return data.indexOf(item) === -1;
        });
      }
      if (deleted.length) {
        var newSelection = selection.filter(function (item) {
          return deleted.indexOf(item) === -1;
        });
        states.selection = newSelection;
        this.table.$emit('selection-change', newSelection.slice());
      }
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      var emitChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var changed = Object(util["n" /* toggleRowStatus */])(this.states.selection, row, selected);
      if (changed) {
        var newSelection = (this.states.selection || []).slice();
        // 调用 API 修改选中值，不触发 select 事件
        if (emitChange) {
          this.table.$emit('select', newSelection, row);
        }
        this.table.$emit('selection-change', newSelection);
      }
    },
    _toggleAllSelection: function _toggleAllSelection() {
      var states = this.states;
      var _states$data = states.data,
          data = _states$data === undefined ? [] : _states$data,
          selection = states.selection;
      // when only some rows are selected (but not all), select or deselect all of them
      // depending on the value of selectOnIndeterminate

      var value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
      states.isAllSelected = value;

      var selectionChanged = false;
      data.forEach(function (row, index) {
        if (states.selectable) {
          if (states.selectable.call(null, row, index) && Object(util["n" /* toggleRowStatus */])(selection, row, value)) {
            selectionChanged = true;
          }
        } else {
          if (Object(util["n" /* toggleRowStatus */])(selection, row, value)) {
            selectionChanged = true;
          }
        }
      });

      if (selectionChanged) {
        this.table.$emit('selection-change', selection ? selection.slice() : []);
      }
      this.table.$emit('select-all', selection);
    },
    updateSelectionByRowKey: function updateSelectionByRowKey() {
      var states = this.states;
      var selection = states.selection,
          rowKey = states.rowKey,
          data = states.data;

      var selectedMap = Object(util["f" /* getKeysMap */])(selection, rowKey);
      data.forEach(function (row) {
        var rowId = Object(util["g" /* getRowIdentity */])(row, rowKey);
        var rowInfo = selectedMap[rowId];
        if (rowInfo) {
          selection[rowInfo.index] = row;
        }
      });
    },
    updateAllSelected: function updateAllSelected() {
      var states = this.states;
      var selection = states.selection,
          rowKey = states.rowKey,
          selectable = states.selectable;
      // data 为 null 时，解构时的默认值会被忽略

      var data = states.data || [];
      if (data.length === 0) {
        states.isAllSelected = false;
        return;
      }

      var selectedMap = void 0;
      if (rowKey) {
        selectedMap = Object(util["f" /* getKeysMap */])(selection, rowKey);
      }
      var isSelected = function isSelected(row) {
        if (selectedMap) {
          return !!selectedMap[Object(util["g" /* getRowIdentity */])(row, rowKey)];
        } else {
          return selection.indexOf(row) !== -1;
        }
      };
      var isAllSelected = true;
      var selectedCount = 0;
      for (var i = 0, j = data.length; i < j; i++) {
        var item = data[i];
        var isRowSelectable = selectable && selectable.call(null, item, i);
        if (!isSelected(item)) {
          if (!selectable || isRowSelectable) {
            isAllSelected = false;
            break;
          }
        } else {
          selectedCount++;
        }
      }

      if (selectedCount === 0) isAllSelected = false;
      states.isAllSelected = isAllSelected;
    },


    // 过滤与排序
    updateFilters: function updateFilters(columns, values) {
      if (!Array.isArray(columns)) {
        columns = [columns];
      }
      var states = this.states;
      var filters = {};
      columns.forEach(function (col) {
        states.filters[col.id] = values;
        filters[col.columnKey || col.id] = values;
      });

      return filters;
    },
    updateSort: function updateSort(column, prop, order) {
      if (this.states.sortingColumn && this.states.sortingColumn !== column) {
        this.states.sortingColumn.order = null;
      }
      this.states.sortingColumn = column;
      this.states.sortProp = prop;
      this.states.sortOrder = order;
    },
    execFilter: function execFilter() {
      var _this = this;

      var states = this.states;
      var _data = states._data,
          filters = states.filters;

      var data = _data;

      Object.keys(filters).forEach(function (columnId) {
        var values = states.filters[columnId];
        if (!values || values.length === 0) return;
        var column = Object(util["d" /* getColumnById */])(_this.states, columnId);
        if (column && column.filterMethod) {
          data = data.filter(function (row) {
            return values.some(function (value) {
              return column.filterMethod.call(null, value, row, column);
            });
          });
        }
      });

      states.filteredData = data;
    },
    execSort: function execSort() {
      var states = this.states;
      states.data = watcher_sortData(states.filteredData, states);
    },


    // 根据 filters 与 sort 去过滤 data
    execQuery: function execQuery(ignore) {
      if (!(ignore && ignore.filter)) {
        this.execFilter();
      }
      this.execSort();
    },
    clearFilter: function clearFilter(columnKeys) {
      var states = this.states;
      var _table$$refs = this.table.$refs,
          tableHeader = _table$$refs.tableHeader,
          fixedTableHeader = _table$$refs.fixedTableHeader,
          rightFixedTableHeader = _table$$refs.rightFixedTableHeader;


      var panels = {};
      if (tableHeader) panels = merge_default()(panels, tableHeader.filterPanels);
      if (fixedTableHeader) panels = merge_default()(panels, fixedTableHeader.filterPanels);
      if (rightFixedTableHeader) panels = merge_default()(panels, rightFixedTableHeader.filterPanels);

      var keys = Object.keys(panels);
      if (!keys.length) return;

      if (typeof columnKeys === 'string') {
        columnKeys = [columnKeys];
      }

      if (Array.isArray(columnKeys)) {
        var columns = columnKeys.map(function (key) {
          return Object(util["e" /* getColumnByKey */])(states, key);
        });
        keys.forEach(function (key) {
          var column = columns.find(function (col) {
            return col.id === key;
          });
          if (column) {
            // TODO: 优化这里的代码
            panels[key].filteredValue = [];
          }
        });
        this.commit('filterChange', {
          column: columns,
          values: [],
          silent: true,
          multi: true
        });
      } else {
        keys.forEach(function (key) {
          // TODO: 优化这里的代码
          panels[key].filteredValue = [];
        });

        states.filters = {};
        this.commit('filterChange', {
          column: {},
          values: [],
          silent: true
        });
      }
    },
    clearSort: function clearSort() {
      var states = this.states;
      if (!states.sortingColumn) return;

      this.updateSort(null, null, null);
      this.commit('changeSortCondition', {
        silent: true
      });
    },


    // 适配层，expand-row-keys 在 Expand 与 TreeTable 中都有使用
    setExpandRowKeysAdapter: function setExpandRowKeysAdapter(val) {
      // 这里会触发额外的计算，但为了兼容性，暂时这么做
      this.setExpandRowKeys(val);
      this.updateTreeExpandKeys(val);
    },


    // 展开行与 TreeTable 都要使用
    toggleRowExpansionAdapter: function toggleRowExpansionAdapter(row, expanded) {
      var hasExpandColumn = this.states.columns.some(function (_ref) {
        var type = _ref.type;
        return type === 'expand';
      });
      if (hasExpandColumn) {
        this.toggleRowExpansion(row, expanded);
      } else {
        this.toggleTreeExpansion(row, expanded);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/table/src/store/index.js




watcher.prototype.mutations = {
  setData: function setData(states, data) {
    var dataInstanceChanged = states._data !== data;
    states._data = data;

    this.execQuery();
    // 数据变化，更新部分数据。
    // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
    this.updateCurrentRowData();
    this.updateExpandRows();
    if (states.reserveSelection) {
      this.assertRowKey();
      this.updateSelectionByRowKey();
    } else {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
    }
    this.updateAllSelected();

    this.updateTableScrollY();
  },
  insertColumn: function insertColumn(states, column, index, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics insert column
      this.scheduleLayout();
    }
  },
  removeColumn: function removeColumn(states, column, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (array) {
      array.splice(array.indexOf(column), 1);
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics remove column
      this.scheduleLayout();
    }
  },
  sort: function sort(states, options) {
    var prop = options.prop,
        order = options.order,
        init = options.init;

    if (prop) {
      var column = Object(util_["arrayFind"])(states.columns, function (column) {
        return column.property === prop;
      });
      if (column) {
        column.order = order;
        this.updateSort(column, prop, order);
        this.commit('changeSortCondition', { init: init });
      }
    }
  },
  changeSortCondition: function changeSortCondition(states, options) {
    // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
    var column = states.sortingColumn,
        prop = states.sortProp,
        order = states.sortOrder;

    if (order === null) {
      states.sortingColumn = null;
      states.sortProp = null;
    }
    var ingore = { filter: true };
    this.execQuery(ingore);

    if (!options || !(options.silent || options.init)) {
      this.table.$emit('sort-change', {
        column: column,
        prop: prop,
        order: order
      });
    }

    this.updateTableScrollY();
  },
  filterChange: function filterChange(states, options) {
    var column = options.column,
        values = options.values,
        silent = options.silent;

    var newFilters = this.updateFilters(column, values);

    this.execQuery();

    if (!silent) {
      this.table.$emit('filter-change', newFilters);
    }

    this.updateTableScrollY();
  },
  toggleAllSelection: function toggleAllSelection() {
    this.toggleAllSelection();
  },
  rowSelectedChanged: function rowSelectedChanged(states, row) {
    this.toggleRowSelection(row);
    this.updateAllSelected();
  },
  setHoverRow: function setHoverRow(states, row) {
    states.hoverRow = row;
  },
  setCurrentRow: function setCurrentRow(states, row) {
    this.updateCurrentRow(row);
  }
};

watcher.prototype.commit = function (name) {
  var mutations = this.mutations;
  if (mutations[name]) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error('Action not found: ' + name);
  }
};

watcher.prototype.updateTableScrollY = function () {
  external_vue_default.a.nextTick(this.table.updateScrollY);
};

/* harmony default export */ var src_store = (watcher);
// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(19);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./packages/table/src/store/helper.js



function createStore(table) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!table) {
    throw new Error('Table is required.');
  }

  var store = new src_store();
  store.table = table;
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  store.toggleAllSelection = debounce_default()(10, store._toggleAllSelection);
  Object.keys(initialState).forEach(function (key) {
    store.states[key] = initialState[key];
  });
  return store;
}

function mapStates(mapper) {
  var res = {};
  Object.keys(mapper).forEach(function (key) {
    var value = mapper[key];
    var fn = void 0;
    if (typeof value === 'string') {
      fn = function fn() {
        return this.store.states[value];
      };
    } else if (typeof value === 'function') {
      fn = function fn() {
        return value.call(this, this.store.states);
      };
    } else {
      console.error('invalid value type');
    }
    if (fn) {
      res[key] = fn;
    }
  });
  return res;
};
// EXTERNAL MODULE: external "element-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(39);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// CONCATENATED MODULE: ./packages/table/src/table-layout.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var table_layout_TableLayout = function () {
  function TableLayout(options) {
    _classCallCheck(this, TableLayout);

    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;
    this.showHeader = true;

    this.height = null;
    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 44; // Table Header Height
    this.appendHeight = 0; // Append Slot Height
    this.footerHeight = 44; // Table Footer Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
    this.gutterWidth = scrollbar_width_default()();

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }

  TableLayout.prototype.updateScrollY = function updateScrollY() {
    var height = this.height;
    if (height === null) return false;
    var bodyWrapper = this.table.bodyWrapper;
    if (this.table.$el && bodyWrapper) {
      var body = bodyWrapper.querySelector('.el-table__body');
      var prevScrollY = this.scrollY;
      var scrollY = body.offsetHeight > this.bodyHeight;
      this.scrollY = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  };

  TableLayout.prototype.setHeight = function setHeight(value) {
    var _this = this;

    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

    if (external_vue_default.a.prototype.$isServer) return;
    var el = this.table.$el;
    value = Object(util["k" /* parseHeight */])(value);
    this.height = value;

    if (!el && (value || value === 0)) return external_vue_default.a.nextTick(function () {
      return _this.setHeight(value, prop);
    });

    if (typeof value === 'number') {
      el.style[prop] = value + 'px';
      this.updateElsHeight();
    } else if (typeof value === 'string') {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  };

  TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
    this.setHeight(value, 'max-height');
  };

  TableLayout.prototype.getFlattenColumns = function getFlattenColumns() {
    var flattenColumns = [];
    var columns = this.table.columns;
    columns.forEach(function (column) {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });

    return flattenColumns;
  };

  TableLayout.prototype.updateElsHeight = function updateElsHeight() {
    var _this2 = this;

    if (!this.table.$ready) return external_vue_default.a.nextTick(function () {
      return _this2.updateElsHeight();
    });
    var _table$$refs = this.table.$refs,
        headerWrapper = _table$$refs.headerWrapper,
        appendWrapper = _table$$refs.appendWrapper,
        footerWrapper = _table$$refs.footerWrapper;

    this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

    if (this.showHeader && !headerWrapper) return;

    // fix issue (https://github.com/ElemeFE/element/pull/16956)
    var headerTrElm = headerWrapper ? headerWrapper.querySelector('.el-table__header tr') : null;
    var noneHeader = this.headerDisplayNone(headerTrElm);

    var headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
    if (this.showHeader && !noneHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
      return external_vue_default.a.nextTick(function () {
        return _this2.updateElsHeight();
      });
    }
    var tableHeight = this.tableHeight = this.table.$el.clientHeight;
    var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
    if (this.height !== null) {
      this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
    }
    this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

    var noData = !(this.store.states.data && this.store.states.data.length);
    this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;
    this.updateScrollY();
    this.notifyObservers('scrollable');
  };

  TableLayout.prototype.headerDisplayNone = function headerDisplayNone(elm) {
    if (!elm) return true;
    var headerChild = elm;
    while (headerChild.tagName !== 'DIV') {
      if (getComputedStyle(headerChild).display === 'none') {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  };

  TableLayout.prototype.updateColumnsWidth = function updateColumnsWidth() {
    if (external_vue_default.a.prototype.$isServer) return;
    var fit = this.fit;
    var bodyWidth = this.table.$el.clientWidth;
    var bodyMinWidth = 0;

    var flattenColumns = this.getFlattenColumns();
    var flexColumns = flattenColumns.filter(function (column) {
      return typeof column.width !== 'number';
    });

    flattenColumns.forEach(function (column) {
      // Clean those columns whose width changed from flex to unflex
      if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
    });

    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach(function (column) {
        bodyMinWidth += column.width || column.minWidth || 80;
      });

      var scrollYWidth = this.scrollY ? this.gutterWidth : 0;

      if (bodyMinWidth <= bodyWidth - scrollYWidth) {
        // DON'T HAVE SCROLL BAR
        this.scrollX = false;

        var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          var allColumnsWidth = flexColumns.reduce(function (prev, column) {
            return prev + (column.minWidth || 80);
          }, 0);
          var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          var noneFirstWidth = 0;

          flexColumns.forEach(function (column, index) {
            if (index === 0) return;
            var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });

          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        // HAVE HORIZONTAL SCROLL BAR
        this.scrollX = true;
        flexColumns.forEach(function (column) {
          column.realWidth = column.minWidth;
        });
      }

      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
      this.table.resizeState.width = this.bodyWidth;
    } else {
      flattenColumns.forEach(function (column) {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = column.width || column.minWidth;
        }

        bodyMinWidth += column.realWidth;
      });
      this.scrollX = bodyMinWidth > bodyWidth;

      this.bodyWidth = bodyMinWidth;
    }

    var fixedColumns = this.store.states.fixedColumns;

    if (fixedColumns.length > 0) {
      var fixedWidth = 0;
      fixedColumns.forEach(function (column) {
        fixedWidth += column.realWidth || column.width;
      });

      this.fixedWidth = fixedWidth;
    }

    var rightFixedColumns = this.store.states.rightFixedColumns;
    if (rightFixedColumns.length > 0) {
      var rightFixedWidth = 0;
      rightFixedColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth || column.width;
      });

      this.rightFixedWidth = rightFixedWidth;
    }

    this.notifyObservers('columns');
  };

  TableLayout.prototype.addObserver = function addObserver(observer) {
    this.observers.push(observer);
  };

  TableLayout.prototype.removeObserver = function removeObserver(observer) {
    var index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  };

  TableLayout.prototype.notifyObservers = function notifyObservers(event) {
    var _this3 = this;

    var observers = this.observers;
    observers.forEach(function (observer) {
      switch (event) {
        case 'columns':
          observer.onColumnsChange(_this3);
          break;
        case 'scrollable':
          observer.onScrollableChange(_this3);
          break;
        default:
          throw new Error('Table Layout don\'t have event ' + event + '.');
      }
    });
  };

  return TableLayout;
}();

/* harmony default export */ var table_layout = (table_layout_TableLayout);
// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(2);

// EXTERNAL MODULE: external "element-ui/lib/tooltip"
var tooltip_ = __webpack_require__(29);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// CONCATENATED MODULE: ./packages/table/src/layout-observer.js
/* harmony default export */ var layout_observer = ({
  created: function created() {
    this.tableLayout.addObserver(this);
  },
  destroyed: function destroyed() {
    this.tableLayout.removeObserver(this);
  },


  computed: {
    tableLayout: function tableLayout() {
      var layout = this.layout;
      if (!layout && this.table) {
        layout = this.table.layout;
      }
      if (!layout) {
        throw new Error('Can not find table layout.');
      }
      return layout;
    }
  },

  mounted: function mounted() {
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
  },
  updated: function updated() {
    if (this.__updated__) return;
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
    this.__updated__ = true;
  },


  methods: {
    onColumnsChange: function onColumnsChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col');
      if (!cols.length) return;
      var flattenColumns = layout.getFlattenColumns();
      var columnsMap = {};
      flattenColumns.forEach(function (column) {
        columnsMap[column.id] = column;
      });
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        var name = col.getAttribute('name');
        var column = columnsMap[name];
        if (column) {
          col.setAttribute('width', column.realWidth || column.width);
        }
      }
    },
    onScrollableChange: function onScrollableChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
      }
      var ths = this.$el.querySelectorAll('th.gutter');
      for (var _i = 0, _j = ths.length; _i < _j; _i++) {
        var th = ths[_i];
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
        th.style.display = layout.scrollY ? '' : 'none';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-row.js
var table_row_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


/* harmony default export */ var table_row = ({
  name: 'ElTableRow',
  props: ['columns', 'row', 'index', 'isSelected', 'isExpanded', 'store', 'context', 'firstDefaultColumnIndex', 'treeRowData', 'treeIndent', 'columnsHidden', 'getSpan', 'getColspanRealWidth', 'getCellStyle', 'getCellClass', 'handleCellMouseLeave', 'handleCellMouseEnter', 'fixed'],
  components: {
    ElCheckbox: checkbox_default.a
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var columns = this.columns,
        row = this.row,
        $index = this.index,
        store = this.store,
        context = this.context,
        firstDefaultColumnIndex = this.firstDefaultColumnIndex,
        treeRowData = this.treeRowData,
        treeIndent = this.treeIndent,
        _columnsHidden = this.columnsHidden,
        columnsHidden = _columnsHidden === undefined ? [] : _columnsHidden,
        isSelected = this.isSelected,
        isExpanded = this.isExpanded;


    return h('tr', [columns.map(function (column, cellIndex) {
      var _getSpan = _this.getSpan(row, column, $index, cellIndex),
          rowspan = _getSpan.rowspan,
          colspan = _getSpan.colspan;

      if (!rowspan || !colspan) {
        return null;
      }
      var columnData = table_row_extends({}, column);
      columnData.realWidth = _this.getColspanRealWidth(columns, colspan, cellIndex);
      var data = {
        store: store,
        isSelected: isSelected,
        isExpanded: isExpanded,
        _self: context,
        column: columnData,
        row: row,
        $index: $index
      };
      if (cellIndex === firstDefaultColumnIndex && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * treeIndent,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === 'boolean') {
          data.treeNode.expanded = treeRowData.expanded;
          // 表明是懒加载
          if ('loading' in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ('noLazyChildren' in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      return h(
        'td',
        {
          style: _this.getCellStyle($index, cellIndex, row, column),
          'class': _this.getCellClass($index, cellIndex, row, column),
          attrs: { rowspan: rowspan,
            colspan: colspan
          },
          on: {
            'mouseenter': function mouseenter($event) {
              return _this.handleCellMouseEnter($event, row);
            },
            'mouseleave': _this.handleCellMouseLeave
          }
        },
        [column.renderCell.call(_this._renderProxy, _this.$createElement, data, columnsHidden[cellIndex])]
      );
    })]);
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-body.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var table_body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











/* harmony default export */ var table_body = ({
  name: 'ElTableBody',

  mixins: [layout_observer],

  components: {
    ElCheckbox: checkbox_default.a,
    ElTooltip: tooltip_default.a,
    TableRow: table_row
  },

  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },

  render: function render(h) {
    var _this = this;

    var data = this.data || [];
    return h(
      'table',
      {
        'class': 'el-table__body',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      })]), h('tbody', [data.reduce(function (acc, row) {
        return acc.concat(_this.wrappedRowRender(row, acc.length));
      }, []), h('el-tooltip', {
        attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
        ref: 'tooltip' })])]
    );
  },


  computed: table_body_extends({
    table: function table() {
      return this.$parent;
    }
  }, mapStates({
    data: 'data',
    columns: 'columns',
    treeIndent: 'indent',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    },
    hasExpandColumn: function hasExpandColumn(states) {
      return states.columns.some(function (_ref) {
        var type = _ref.type;
        return type === 'expand';
      });
    }
  }), {
    columnsHidden: function columnsHidden() {
      var _this2 = this;

      return this.columns.map(function (column, index) {
        return _this2.isColumnHidden(index);
      });
    },
    firstDefaultColumnIndex: function firstDefaultColumnIndex() {
      return Object(util_["arrayFindIndex"])(this.columns, function (_ref2) {
        var type = _ref2.type;
        return type === 'default';
      });
    }
  }),

  watch: {
    // don't trigger getter of currentRow in getCellClass. see https://jsfiddle.net/oe2b4hqt/
    // update DOM manually. see https://github.com/ElemeFE/element/pull/13954/files#diff-9b450c00d0a9dec0ffad5a3176972e40
    'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
      var _this3 = this;

      if (!this.store.states.isComplex || this.$isServer) return;
      var raf = window.requestAnimationFrame;
      if (!raf) {
        raf = function raf(fn) {
          return setTimeout(fn, 16);
        };
      }
      raf(function () {
        var rows = _this3.$el.querySelectorAll('.el-table__row');
        var oldRow = rows[oldVal];
        var newRow = rows[newVal];
        if (oldRow) {
          Object(dom_["removeClass"])(oldRow, 'hover-row');
        }
        if (newRow) {
          Object(dom_["addClass"])(newRow, 'hover-row');
        }
      });
    }
  },

  data: function data() {
    return {
      tooltipContent: ''
    };
  },
  created: function created() {
    this.activateTooltip = debounce_default()(50, function (tooltip) {
      return tooltip.handleShowPopper();
    });
  },


  methods: {
    getKeyOfRow: function getKeyOfRow(row, index) {
      var rowKey = this.table.rowKey;
      if (rowKey) {
        return Object(util["g" /* getRowIdentity */])(row, rowKey);
      }
      return index;
    },
    isColumnHidden: function isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
      var rowspan = 1;
      var colspan = 1;
      var fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        var result = fn({
          row: row,
          column: column,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }
      return { rowspan: rowspan, colspan: colspan };
    },
    getRowStyle: function getRowStyle(row, rowIndex) {
      var rowStyle = this.table.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row: row,
          rowIndex: rowIndex
        });
      }
      return rowStyle || null;
    },
    getRowClass: function getRowClass(row, rowIndex) {
      var selection = this.store.states.selection;
      var classes = ['el-table__row'];
      if (this.table.highlightCurrentRow && row === this.store.states.currentRow) {
        classes.push('current-row');
      }

      if (this.table.highlightSelectionRow) {
        for (var i = 0; i < selection.length; i++) {
          if (Object(util["i" /* objectEquals */])(row, selection[i])) {
            classes.push('selection-row');
          }
        };
      }

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped');
      }
      var rowClassName = this.table.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
          row: row,
          rowIndex: rowIndex
        }));
      }

      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
      }

      return classes;
    },
    getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
      var cellStyle = this.table.cellStyle;
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return cellStyle;
    },
    getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.align, column.className];

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden');
      }

      var cellClassName = this.table.cellClassName;
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName);
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      classes.push('el-table__cell');

      return classes.join(' ');
    },
    getColspanRealWidth: function getColspanRealWidth(columns, colspan, index) {
      if (colspan < 1) {
        return columns[index].realWidth;
      }
      var widthArr = columns.map(function (_ref3) {
        var realWidth = _ref3.realWidth;
        return realWidth;
      }).slice(index, index + colspan);
      return widthArr.reduce(function (acc, width) {
        return acc + width;
      }, -1);
    },
    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
      var table = this.table;
      var cell = Object(util["b" /* getCell */])(event);

      if (cell) {
        var column = Object(util["c" /* getColumnByCell */])(table, cell);
        var hoverState = table.hoverState = { cell: cell, column: column, row: row };
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      var cellChild = event.target.querySelector('.cell');
      if (!(Object(dom_["hasClass"])(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
        return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      var range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      var rangeWidth = range.getBoundingClientRect().width;
      var padding = (parseInt(Object(dom_["getStyle"])(cellChild, 'paddingLeft'), 10) || 0) + (parseInt(Object(dom_["getStyle"])(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
        var tooltip = this.$refs.tooltip;
        // TODO 会引起整个 Table 的重新渲染，需要优化
        this.tooltipContent = cell.innerText || cell.textContent;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    handleCellMouseLeave: function handleCellMouseLeave(event) {
      var tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      var cell = Object(util["b" /* getCell */])(event);
      if (!cell) return;

      var oldHoverState = this.table.hoverState || {};
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },


    handleMouseEnter: debounce_default()(30, function (index) {
      this.store.commit('setHoverRow', index);
    }),

    handleMouseLeave: debounce_default()(30, function () {
      this.store.commit('setHoverRow', null);
    }),

    handleContextMenu: function handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },
    handleDoubleClick: function handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },
    handleClick: function handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },
    handleEvent: function handleEvent(event, row, name) {
      var table = this.table;
      var cell = Object(util["b" /* getCell */])(event);
      var column = void 0;
      if (cell) {
        column = Object(util["c" /* getColumnByCell */])(table, cell);
        if (column) {
          table.$emit('cell-' + name, row, column, cell, event);
        }
      }
      table.$emit('row-' + name, row, column, event);
    },
    rowRender: function rowRender(row, $index, treeRowData) {
      var _this4 = this;

      var h = this.$createElement;
      var treeIndent = this.treeIndent,
          columns = this.columns,
          firstDefaultColumnIndex = this.firstDefaultColumnIndex;

      var rowClasses = this.getRowClass(row, $index);
      var display = true;
      if (treeRowData) {
        rowClasses.push('el-table__row--level-' + treeRowData.level);
        display = treeRowData.display;
      }
      // 指令 v-show 会覆盖 row-style 中 display
      // 使用 :style 代替 v-show https://github.com/ElemeFE/element/issues/16995
      var displayStyle = display ? null : {
        display: 'none'
      };
      return h(table_row, {
        style: [displayStyle, this.getRowStyle(row, $index)],
        'class': rowClasses,
        key: this.getKeyOfRow(row, $index),
        nativeOn: {
          'dblclick': function dblclick($event) {
            return _this4.handleDoubleClick($event, row);
          },
          'click': function click($event) {
            return _this4.handleClick($event, row);
          },
          'contextmenu': function contextmenu($event) {
            return _this4.handleContextMenu($event, row);
          },
          'mouseenter': function mouseenter(_) {
            return _this4.handleMouseEnter($index);
          },
          'mouseleave': this.handleMouseLeave
        },
        attrs: {
          columns: columns,
          row: row,
          index: $index,
          store: this.store,
          context: this.context || this.table.$vnode.context,
          firstDefaultColumnIndex: firstDefaultColumnIndex,
          treeRowData: treeRowData,
          treeIndent: treeIndent,
          columnsHidden: this.columnsHidden,
          getSpan: this.getSpan,
          getColspanRealWidth: this.getColspanRealWidth,
          getCellStyle: this.getCellStyle,
          getCellClass: this.getCellClass,
          handleCellMouseEnter: this.handleCellMouseEnter,
          handleCellMouseLeave: this.handleCellMouseLeave,
          isSelected: this.store.isSelected(row),
          isExpanded: this.store.states.expandRows.indexOf(row) > -1,
          fixed: this.fixed
        }
      });
    },
    wrappedRowRender: function wrappedRowRender(row, $index) {
      var _this5 = this;

      var h = this.$createElement;

      var store = this.store;
      var isRowExpanded = store.isRowExpanded,
          assertRowKey = store.assertRowKey;
      var _store$states = store.states,
          treeData = _store$states.treeData,
          lazyTreeNodeMap = _store$states.lazyTreeNodeMap,
          childrenColumnName = _store$states.childrenColumnName,
          rowKey = _store$states.rowKey;

      if (this.hasExpandColumn && isRowExpanded(row)) {
        var renderExpanded = this.table.renderExpanded;
        var tr = this.rowRender(row, $index);
        if (!renderExpanded) {
          console.error('[Element Error]renderExpanded is required.');
          return tr;
        }
        // 使用二维数组，避免修改 $index
        return [[tr, h(
          'tr',
          { key: 'expanded-row__' + tr.key },
          [h(
            'td',
            {
              attrs: { colspan: this.columnsCount },
              'class': 'el-table__cell el-table__expanded-cell' },
            [renderExpanded(this.$createElement, { row: row, $index: $index, store: this.store })]
          )]
        )]];
      } else if (Object.keys(treeData).length) {
        assertRowKey();
        // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
        // 在调用 rowRender 函数时，仍然会计算 rowKey，不太好的操作
        var key = Object(util["g" /* getRowIdentity */])(row, rowKey);
        var cur = treeData[key];
        var treeRowData = null;
        if (cur) {
          treeRowData = {
            expanded: cur.expanded,
            level: cur.level,
            display: true
          };
          if (typeof cur.lazy === 'boolean') {
            if (typeof cur.loaded === 'boolean' && cur.loaded) {
              treeRowData.noLazyChildren = !(cur.children && cur.children.length);
            }
            treeRowData.loading = cur.loading;
          }
        }
        var tmp = [this.rowRender(row, $index, treeRowData)];
        // 渲染嵌套数据
        if (cur) {
          // currentRow 记录的是 index，所以还需主动增加 TreeTable 的 index
          var i = 0;
          var traverse = function traverse(children, parent) {
            if (!(children && children.length && parent)) return;
            children.forEach(function (node) {
              // 父节点的 display 状态影响子节点的显示状态
              var innerTreeRowData = {
                display: parent.display && parent.expanded,
                level: parent.level + 1
              };
              var childKey = Object(util["g" /* getRowIdentity */])(node, rowKey);
              if (childKey === undefined || childKey === null) {
                throw new Error('for nested data item, row-key is required.');
              }
              cur = table_body_extends({}, treeData[childKey]);
              // 对于当前节点，分成有无子节点两种情况。
              // 如果包含子节点的，设置 expanded 属性。
              // 对于它子节点的 display 属性由它本身的 expanded 与 display 共同决定。
              if (cur) {
                innerTreeRowData.expanded = cur.expanded;
                // 懒加载的某些节点，level 未知
                cur.level = cur.level || innerTreeRowData.level;
                cur.display = !!(cur.expanded && innerTreeRowData.display);
                if (typeof cur.lazy === 'boolean') {
                  if (typeof cur.loaded === 'boolean' && cur.loaded) {
                    innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                  }
                  innerTreeRowData.loading = cur.loading;
                }
              }
              i++;
              tmp.push(_this5.rowRender(node, $index + i, innerTreeRowData));
              if (cur) {
                var _nodes = lazyTreeNodeMap[childKey] || node[childrenColumnName];
                traverse(_nodes, cur);
              }
            });
          };
          // 对于 root 节点，display 一定为 true
          cur.display = true;
          var nodes = lazyTreeNodeMap[key] || row[childrenColumnName];
          traverse(nodes, cur);
        }
        return tmp;
      } else {
        return this.rowRender(row, $index);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/filter-panel.vue?vue&type=template&id=7f2c919f&
var filter_panelvue_type_template_id_7f2c919f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "el-zoom-in-top" } }, [
    _vm.multiple
      ? _c(
          "div",
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleOutsideClick,
                expression: "handleOutsideClick"
              },
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showPopper,
                expression: "showPopper"
              }
            ],
            staticClass: "el-table-filter"
          },
          [
            _c(
              "div",
              { staticClass: "el-table-filter__content" },
              [
                _c(
                  "el-scrollbar",
                  { attrs: { "wrap-class": "el-table-filter__wrap" } },
                  [
                    _c(
                      "el-checkbox-group",
                      {
                        staticClass: "el-table-filter__checkbox-group",
                        model: {
                          value: _vm.filteredValue,
                          callback: function($$v) {
                            _vm.filteredValue = $$v
                          },
                          expression: "filteredValue"
                        }
                      },
                      _vm._l(_vm.filters, function(filter) {
                        return _c(
                          "el-checkbox",
                          { key: filter.value, attrs: { label: filter.value } },
                          [_vm._v(_vm._s(filter.text))]
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _c("div", { staticClass: "el-table-filter__bottom" }, [
              _c(
                "button",
                {
                  class: { "is-disabled": _vm.filteredValue.length === 0 },
                  attrs: { disabled: _vm.filteredValue.length === 0 },
                  on: { click: _vm.handleConfirm }
                },
                [_vm._v(_vm._s(_vm.t("el.table.confirmFilter")))]
              ),
              _c("button", { on: { click: _vm.handleReset } }, [
                _vm._v(_vm._s(_vm.t("el.table.resetFilter")))
              ])
            ])
          ]
        )
      : _c(
          "div",
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleOutsideClick,
                expression: "handleOutsideClick"
              },
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showPopper,
                expression: "showPopper"
              }
            ],
            staticClass: "el-table-filter"
          },
          [
            _c(
              "ul",
              { staticClass: "el-table-filter__list" },
              [
                _c(
                  "li",
                  {
                    staticClass: "el-table-filter__list-item",
                    class: {
                      "is-active":
                        _vm.filterValue === undefined ||
                        _vm.filterValue === null
                    },
                    on: {
                      click: function($event) {
                        _vm.handleSelect(null)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.t("el.table.clearFilter")))]
                ),
                _vm._l(_vm.filters, function(filter) {
                  return _c(
                    "li",
                    {
                      key: filter.value,
                      staticClass: "el-table-filter__list-item",
                      class: { "is-active": _vm.isActive(filter) },
                      attrs: { label: filter.value },
                      on: {
                        click: function($event) {
                          _vm.handleSelect(filter.value)
                        }
                      }
                    },
                    [_vm._v(_vm._s(filter.text))]
                  )
                })
              ],
              2
            )
          ]
        )
  ])
}
var filter_panelvue_type_template_id_7f2c919f_staticRenderFns = []
filter_panelvue_type_template_id_7f2c919f_render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue?vue&type=template&id=7f2c919f&

// EXTERNAL MODULE: external "element-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(5);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// EXTERNAL MODULE: external "element-ui/lib/utils/popup"
var popup_ = __webpack_require__(13);

// EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(12);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// CONCATENATED MODULE: ./packages/table/src/dropdown.js

var dropdowns = [];

!external_vue_default.a.prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});

/* harmony default export */ var dropdown = ({
  open: function open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },
  close: function close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
});
// EXTERNAL MODULE: external "element-ui/lib/checkbox-group"
var checkbox_group_ = __webpack_require__(40);
var checkbox_group_default = /*#__PURE__*/__webpack_require__.n(checkbox_group_);

// EXTERNAL MODULE: external "element-ui/lib/scrollbar"
var scrollbar_ = __webpack_require__(15);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/filter-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var filter_panelvue_type_script_lang_js_ = ({
  name: 'ElTableFilterPanel',

  mixins: [vue_popper_default.a, locale_default.a],

  directives: {
    Clickoutside: clickoutside_default.a
  },

  components: {
    ElCheckbox: checkbox_default.a,
    ElCheckboxGroup: checkbox_group_default.a,
    ElScrollbar: scrollbar_default.a
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },

  methods: {
    isActive: function isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick: function handleOutsideClick() {
      var _this = this;

      setTimeout(function () {
        _this.showPopper = false;
      }, 16);
    },
    handleConfirm: function handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleReset: function handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect: function handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },
    confirmFilter: function confirmFilter(filteredValue) {
      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },

  data: function data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },


  computed: {
    filters: function filters() {
      return this.column && this.column.filters;
    },


    filterValue: {
      get: function get() {
        return (this.column.filteredValue || [])[0];
      },
      set: function set(value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },

    filteredValue: {
      get: function get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set: function set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },

    multiple: function multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener('scroll', function () {
      _this2.updatePopper();
    });

    this.$watch('showPopper', function (value) {
      if (_this2.column) _this2.column.filterOpened = value;
      if (value) {
        dropdown.open(_this2);
      } else {
        dropdown.close(_this2);
      }
    });
  },

  watch: {
    showPopper: function showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < popup_["PopupManager"].zIndex) {
        this.popperJS._popper.style.zIndex = popup_["PopupManager"].nextZIndex();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_filter_panelvue_type_script_lang_js_ = (filter_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_filter_panelvue_type_script_lang_js_,
  filter_panelvue_type_template_id_7f2c919f_render,
  filter_panelvue_type_template_id_7f2c919f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/table/src/filter-panel.vue"
/* harmony default export */ var filter_panel = (component.exports);
// CONCATENATED MODULE: ./packages/table/src/table-header.js
var table_header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var getAllColumns = function getAllColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

var convertToRows = function convertToRows(originColumns) {
  var maxLevel = 1;
  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(function (column) {
    column.level = 1;
    traverse(column);
  });

  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = getAllColumns(originColumns);

  allColumns.forEach(function (column) {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

/* harmony default export */ var table_header = ({
  name: 'ElTableHeader',

  mixins: [layout_observer],

  render: function render(h) {
    var _this = this;

    var originColumns = this.store.states.originColumns;
    var columnRows = convertToRows(originColumns, this.columns);
    // 是否拥有多级表头
    var isGroup = columnRows.length > 1;
    if (isGroup) this.$parent.isGroup = true;
    return h(
      'table',
      {
        'class': 'el-table__header',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'thead',
        { 'class': [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
        [this._l(columnRows, function (columns, rowIndex) {
          return h(
            'tr',
            {
              style: _this.getHeaderRowStyle(rowIndex),
              'class': _this.getHeaderRowClass(rowIndex)
            },
            [columns.map(function (column, cellIndex) {
              return h(
                'th',
                {
                  attrs: {
                    colspan: column.colSpan,
                    rowspan: column.rowSpan
                  },
                  on: {
                    'mousemove': function mousemove($event) {
                      return _this.handleMouseMove($event, column);
                    },
                    'mouseout': _this.handleMouseOut,
                    'mousedown': function mousedown($event) {
                      return _this.handleMouseDown($event, column);
                    },
                    'click': function click($event) {
                      return _this.handleHeaderClick($event, column);
                    },
                    'contextmenu': function contextmenu($event) {
                      return _this.handleHeaderContextMenu($event, column);
                    }
                  },

                  style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
                  'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column),
                  key: column.id },
                [h(
                  'div',
                  { 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
                    'span',
                    {
                      'class': 'caret-wrapper',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': 'sort-caret ascending',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'ascending');
                        }
                      }
                    }), h('i', { 'class': 'sort-caret descending',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'descending');
                        }
                      }
                    })]
                  ) : '', column.filterable ? h(
                    'span',
                    {
                      'class': 'el-table__column-filter-trigger',
                      on: {
                        'click': function click($event) {
                          return _this.handleFilterClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] })]
                  ) : '']
                )]
              );
            }), _this.hasGutter ? h('th', { 'class': 'el-table__cell gutter' }) : '']
          );
        })]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  components: {
    ElCheckbox: checkbox_default.a
  },

  computed: table_header_extends({
    table: function table() {
      return this.$parent;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  }, mapStates({
    columns: 'columns',
    isAllSelected: 'isAllSelected',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    }
  })),

  created: function created() {
    this.filterPanels = {};
  },
  mounted: function mounted() {
    var _this2 = this;

    // nextTick 是有必要的 https://github.com/ElemeFE/element/pull/11311
    this.$nextTick(function () {
      var _defaultSort = _this2.defaultSort,
          prop = _defaultSort.prop,
          order = _defaultSort.order;

      var init = true;
      _this2.store.commit('sort', { prop: prop, order: order, init: init });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var panels = this.filterPanels;
    for (var prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },


  methods: {
    isCellHidden: function isCellHidden(index, columns) {
      var start = 0;
      for (var i = 0; i < index; i++) {
        start += columns[i].colSpan;
      }
      var after = start + columns[index].colSpan - 1;
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
      var headerRowStyle = this.table.headerRowStyle;
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex: rowIndex });
      }
      return headerRowStyle;
    },
    getHeaderRowClass: function getHeaderRowClass(rowIndex) {
      var classes = [];

      var headerRowClassName = this.table.headerRowClassName;
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName);
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex: rowIndex }));
      }

      return classes.join(' ');
    },
    getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      var headerCellStyle = this.table.headerCellStyle;
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return headerCellStyle;
    },
    getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }

      if (!column.children) {
        classes.push('is-leaf');
      }

      if (column.sortable) {
        classes.push('is-sortable');
      }

      var headerCellClassName = this.table.headerCellClassName;
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName);
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      classes.push('el-table__cell');

      return classes.join(' ');
    },
    toggleAllSelection: function toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    },
    handleFilterClick: function handleFilterClick(event, column) {
      event.stopPropagation();
      var target = event.target;
      var cell = target.tagName === 'TH' ? target : target.parentNode;
      if (Object(dom_["hasClass"])(cell, 'noclick')) return;
      cell = cell.querySelector('.el-table__column-filter-trigger') || cell;
      var table = this.$parent;

      var filterPanel = this.filterPanels[column.id];

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }

      if (!filterPanel) {
        filterPanel = new external_vue_default.a(filter_panel);
        this.filterPanels[column.id] = filterPanel;
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement;
        }
        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        !this.$isServer && filterPanel.$mount(document.createElement('div'));
      }

      setTimeout(function () {
        filterPanel.showPopper = true;
      }, 16);
    },
    handleHeaderClick: function handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column);
      } else if (column.filterable && !column.sortable) {
        this.handleFilterClick(event, column);
      }

      this.$parent.$emit('header-click', column, event);
    },
    handleHeaderContextMenu: function handleHeaderContextMenu(event, column) {
      this.$parent.$emit('header-contextmenu', column, event);
    },
    handleMouseDown: function handleMouseDown(event, column) {
      var _this3 = this;

      if (this.$isServer) return;
      if (column.children && column.children.length > 0) return;
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        var table = this.$parent;
        var tableEl = table.$el;
        var tableLeft = tableEl.getBoundingClientRect().left;
        var columnEl = this.$el.querySelector('th.' + column.id);
        var columnRect = columnEl.getBoundingClientRect();
        var minLeft = columnRect.left - tableLeft + 30;

        Object(dom_["addClass"])(columnEl, 'noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft: tableLeft
        };

        var resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };

        var handleMouseMove = function handleMouseMove(event) {
          var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
          var proxyLeft = _this3.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        var handleMouseUp = function handleMouseUp() {
          if (_this3.dragging) {
            var _dragState = _this3.dragState,
                startColumnLeft = _dragState.startColumnLeft,
                startLeft = _dragState.startLeft;

            var finalLeft = parseInt(resizeProxy.style.left, 10);
            var columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

            _this3.store.scheduleLayout();

            document.body.style.cursor = '';
            _this3.dragging = false;
            _this3.draggingColumn = null;
            _this3.dragState = {};

            table.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function () {
            Object(dom_["removeClass"])(columnEl, 'noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    handleMouseMove: function handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return;
      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        var rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          if (Object(dom_["hasClass"])(target, 'is-sortable')) {
            target.style.cursor = 'col-resize';
          }
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          if (Object(dom_["hasClass"])(target, 'is-sortable')) {
            target.style.cursor = 'pointer';
          }
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut: function handleMouseOut() {
      if (this.$isServer) return;
      document.body.style.cursor = '';
    },
    toggleOrder: function toggleOrder(_ref) {
      var order = _ref.order,
          sortOrders = _ref.sortOrders;

      if (order === '') return sortOrders[0];
      var index = sortOrders.indexOf(order || null);
      return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
    },
    handleSortClick: function handleSortClick(event, column, givenOrder) {
      event.stopPropagation();
      var order = column.order === givenOrder ? null : givenOrder || this.toggleOrder(column);

      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if (Object(dom_["hasClass"])(target, 'noclick')) {
          Object(dom_["removeClass"])(target, 'noclick');
          return;
        }
      }

      if (!column.sortable) return;

      var states = this.store.states;
      var sortProp = states.sortProp;
      var sortOrder = void 0;
      var sortingColumn = states.sortingColumn;

      if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }

      if (!order) {
        sortOrder = column.order = null;
      } else {
        sortOrder = column.order = order;
      }

      states.sortProp = sortProp;
      states.sortOrder = sortOrder;

      this.store.commit('changeSortCondition');
    }
  },

  data: function data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-footer.js
var table_footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ var table_footer = ({
  name: 'ElTableFooter',

  mixins: [layout_observer],

  render: function render(h) {
    var _this = this;

    var sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data });
    } else {
      this.columns.forEach(function (column, index) {
        if (index === 0) {
          sums[index] = _this.sumText;
          return;
        }
        var values = _this.store.states.data.map(function (item) {
          return Number(item[column.property]);
        });
        var precisions = [];
        var notNumber = true;
        values.forEach(function (value) {
          if (!isNaN(value)) {
            notNumber = false;
            var decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        var precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce(function (prev, curr) {
            var value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }

    return h(
      'table',
      {
        'class': 'el-table__footer',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'tbody',
        { 'class': [{ 'has-gutter': this.hasGutter }] },
        [h('tr', [this.columns.map(function (column, cellIndex) {
          return h(
            'td',
            {
              key: cellIndex,
              attrs: { colspan: column.colSpan,
                rowspan: column.rowSpan
              },
              'class': [].concat(_this.getRowClasses(column, cellIndex), ['el-table__cell']) },
            [h(
              'div',
              { 'class': ['cell', column.labelClassName] },
              [sums[cellIndex]]
            )]
          );
        }), this.hasGutter ? h('th', { 'class': 'el-table__cell gutter' }) : ''])]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: table_footer_extends({
    table: function table() {
      return this.$parent;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  }, mapStates({
    columns: 'columns',
    isAllSelected: 'isAllSelected',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    }
  })),

  methods: {
    isCellHidden: function isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        var before = 0;
        for (var i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) {
        // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
      }
    },
    getRowClasses: function getRowClasses(column, cellIndex) {
      var classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=script&lang=js&
var tablevue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














var tableIdSeed = 1;

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: 'ElTable',

  mixins: [locale_default.a, migrating_default.a],

  directives: {
    Mousewheel: directives_mousewheel
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    highlightSelectionRow: {
      type: Boolean,
      default: false
    },

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },

    indent: {
      type: Number,
      default: 16
    },

    treeProps: {
      type: Object,
      default: function _default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        };
      }
    },

    lazy: Boolean,

    load: Function
  },

  components: {
    TableHeader: table_header,
    TableFooter: table_footer,
    TableBody: table_body,
    ElCheckbox: checkbox_default.a
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },
    setCurrentRow: function setCurrentRow(row) {
      this.store.commit('setCurrentRow', row);
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.store.toggleRowSelection(row, selected, false);
      this.store.updateAllSelected();
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      this.store.toggleRowExpansionAdapter(row, expanded);
    },
    clearSelection: function clearSelection() {
      this.store.clearSelection();
    },
    clearFilter: function clearFilter(columnKeys) {
      this.store.clearFilter(columnKeys);
    },
    clearSort: function clearSort() {
      this.store.clearSort();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },
    updateScrollY: function updateScrollY() {
      var changed = this.layout.updateScrollY();
      if (changed) {
        this.layout.notifyObservers('scrollable');
        this.layout.updateColumnsWidth();
      }
    },
    handleFixedMousewheel: function handleFixedMousewheel(event, data) {
      var bodyWrapper = this.bodyWrapper;
      if (Math.abs(data.spinY) > 0) {
        var currentScrollTop = bodyWrapper.scrollTop;
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault();
        }
        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault();
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
      }
    },
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    },


    // TODO 使用 CSS transform
    syncPostion: function syncPostion() {
      var _bodyWrapper = this.bodyWrapper,
          scrollLeft = _bodyWrapper.scrollLeft,
          scrollTop = _bodyWrapper.scrollTop,
          offsetWidth = _bodyWrapper.offsetWidth,
          scrollWidth = _bodyWrapper.scrollWidth;
      var _$refs = this.$refs,
          headerWrapper = _$refs.headerWrapper,
          footerWrapper = _$refs.footerWrapper,
          fixedBodyWrapper = _$refs.fixedBodyWrapper,
          rightFixedBodyWrapper = _$refs.rightFixedBodyWrapper;

      if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
      if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
      if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
      if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
      var maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
      if (scrollLeft >= maxScrollLeftPosition) {
        this.scrollPosition = 'right';
      } else if (scrollLeft === 0) {
        this.scrollPosition = 'left';
      } else {
        this.scrollPosition = 'middle';
      }
    },


    throttleSyncPostion: Object(external_throttle_debounce_["throttle"])(16, function () {
      this.syncPostion();
    }),

    onScroll: function onScroll(evt) {
      var raf = window.requestAnimationFrame;
      if (!raf) {
        this.throttleSyncPostion();
      } else {
        raf(this.syncPostion);
      }
    },
    bindEvents: function bindEvents() {
      this.bodyWrapper.addEventListener('scroll', this.onScroll, { passive: true });
      if (this.fit) {
        Object(resize_event_["addResizeListener"])(this.$el, this.resizeListener);
      }
    },
    unbindEvents: function unbindEvents() {
      this.bodyWrapper.removeEventListener('scroll', this.onScroll, { passive: true });
      if (this.fit) {
        Object(resize_event_["removeResizeListener"])(this.$el, this.resizeListener);
      }
    },
    resizeListener: function resizeListener() {
      if (!this.$ready) return;
      var shouldUpdateLayout = false;
      var el = this.$el;
      var _resizeState = this.resizeState,
          oldWidth = _resizeState.width,
          oldHeight = _resizeState.height;


      var width = el.offsetWidth;
      if (oldWidth !== width) {
        shouldUpdateLayout = true;
      }

      var height = el.offsetHeight;
      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true;
      }

      if (shouldUpdateLayout) {
        this.resizeState.width = width;
        this.resizeState.height = height;
        this.doLayout();
      }
    },
    doLayout: function doLayout() {
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
      }
      this.layout.updateColumnsWidth();
    },
    sort: function sort(prop, order) {
      this.store.commit('sort', { prop: prop, order: order });
    },
    toggleAllSelection: function toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    }
  },

  computed: tablevue_type_script_lang_js_extends({
    tableSize: function tableSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    bodyWrapper: function bodyWrapper() {
      return this.$refs.bodyWrapper;
    },
    shouldUpdateHeight: function shouldUpdateHeight() {
      return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
    },
    bodyWidth: function bodyWidth() {
      var _layout = this.layout,
          bodyWidth = _layout.bodyWidth,
          scrollY = _layout.scrollY,
          gutterWidth = _layout.gutterWidth;

      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },
    bodyHeight: function bodyHeight() {
      var _layout2 = this.layout,
          _layout2$headerHeight = _layout2.headerHeight,
          headerHeight = _layout2$headerHeight === undefined ? 0 : _layout2$headerHeight,
          bodyHeight = _layout2.bodyHeight,
          _layout2$footerHeight = _layout2.footerHeight,
          footerHeight = _layout2$footerHeight === undefined ? 0 : _layout2$footerHeight;

      if (this.height) {
        return {
          height: bodyHeight ? bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = Object(util["k" /* parseHeight */])(this.maxHeight);
        if (typeof maxHeight === 'number') {
          return {
            'max-height': maxHeight - footerHeight - (this.showHeader ? headerHeight : 0) + 'px'
          };
        }
      }
      return {};
    },
    fixedBodyHeight: function fixedBodyHeight() {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = Object(util["k" /* parseHeight */])(this.maxHeight);
        if (typeof maxHeight === 'number') {
          maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }
          maxHeight -= this.layout.footerHeight;
          return {
            'max-height': maxHeight + 'px'
          };
        }
      }
      return {};
    },
    fixedHeight: function fixedHeight() {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          };
        }
        return {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        };
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          };
        }
        return {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        };
      }
    },
    emptyBlockStyle: function emptyBlockStyle() {
      if (this.data && this.data.length) return null;
      var height = '100%';
      if (this.layout.appendHeight) {
        height = 'calc(100% - ' + this.layout.appendHeight + 'px)';
      }
      return {
        width: this.bodyWidth,
        height: height
      };
    }
  }, mapStates({
    selection: 'selection',
    columns: 'columns',
    tableData: 'data',
    fixedColumns: 'fixedColumns',
    rightFixedColumns: 'rightFixedColumns'
  })),

  watch: {
    height: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setHeight(value);
      }
    },

    maxHeight: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setMaxHeight(value);
      }
    },

    currentRowKey: {
      immediate: true,
      handler: function handler(value) {
        if (!this.rowKey) return;
        this.store.setCurrentRowKey(value);
      }
    },

    data: {
      immediate: true,
      handler: function handler(value) {
        this.store.commit('setData', value);
      }
    },

    expandRowKeys: {
      immediate: true,
      handler: function handler(newVal) {
        if (newVal) {
          this.store.setExpandRowKeysAdapter(newVal);
        }
      }
    }
  },

  created: function created() {
    var _this = this;

    this.tableId = 'el-table_' + tableIdSeed++;
    this.debouncedUpdateLayout = Object(external_throttle_debounce_["debounce"])(50, function () {
      return _this.doLayout();
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.bindEvents();
    this.store.updateColumns();
    this.doLayout();

    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };

    // init filters
    this.store.states.columns.forEach(function (column) {
      if (column.filteredValue && column.filteredValue.length) {
        _this2.store.commit('filterChange', {
          column: column,
          values: column.filteredValue,
          silent: true
        });
      }
    });

    this.$ready = true;
  },
  destroyed: function destroyed() {
    this.unbindEvents();
  },
  data: function data() {
    var _treeProps = this.treeProps,
        _treeProps$hasChildre = _treeProps.hasChildren,
        hasChildren = _treeProps$hasChildre === undefined ? 'hasChildren' : _treeProps$hasChildre,
        _treeProps$children = _treeProps.children,
        children = _treeProps$children === undefined ? 'children' : _treeProps$children;

    this.store = createStore(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: this.indent,
      lazy: this.lazy,
      lazyColumnIdentifier: hasChildren,
      childrenColumnName: children
    });
    var layout = new table_layout({
      store: this.store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });
    return {
      layout: layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    };
  }
});
// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/table.vue





/* normalize component */

var table_component = Object(componentNormalizer["a" /* default */])(
  src_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "packages/table/src/table.vue"
/* harmony default export */ var src_table = (table_component.exports);
// CONCATENATED MODULE: ./packages/table/index.js


/* istanbul ignore next */
src_table.install = function (Vue) {
  Vue.component(src_table.name, src_table);
};

/* harmony default export */ var packages_table = __webpack_exports__["default"] = (src_table);

/***/ })
/******/ ]);