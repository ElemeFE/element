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
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
/******/ })
/************************************************************************/
/******/ ({

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./packages/descriptions/src/descriptions-row.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* harmony default export */ var descriptions_row = ({
  name: 'ElDescriptionsRow',
  props: {
    row: {
      type: Array
    }
  },
  inject: ['elDescriptions'],
  render: function render(h) {
    var elDescriptions = this.elDescriptions;

    var row = (this.row || []).map(function (item) {
      return _extends({}, item, {
        label: item.slots.label || item.props.label
      }, ['labelClassName', 'contentClassName', 'labelStyle', 'contentStyle'].reduce(function (res, key) {
        res[key] = item.props[key] || elDescriptions[key];
        return res;
      }, {}));
    });
    if (elDescriptions.direction === 'vertical') {
      return h('tbody', [h(
        'tr',
        { 'class': 'el-descriptions-row' },
        [row.map(function (item) {
          var _ref;

          return h(
            'th',
            {
              'class': (_ref = {
                'el-descriptions-item__cell': true,
                'el-descriptions-item__label': true,
                'has-colon': elDescriptions.border ? false : elDescriptions.colon,
                'is-bordered-label': elDescriptions.border
              }, _ref[item.labelClassName] = true, _ref),
              style: item.labelStyle,
              attrs: { colSpan: item.props.span
              }
            },
            [item.label]
          );
        })]
      ), h(
        'tr',
        { 'class': 'el-descriptions-row' },
        [row.map(function (item) {
          return h(
            'td',
            {
              'class': ['el-descriptions-item__cell', 'el-descriptions-item__content', item.contentClassName],
              style: item.contentStyle,
              attrs: { colSpan: item.props.span
              }
            },
            [item.slots.default]
          );
        })]
      )]);
    }
    if (elDescriptions.border) {
      return h('tbody', [h(
        'tr',
        { 'class': 'el-descriptions-row' },
        [row.map(function (item) {
          var _ref2;

          return [h(
            'th',
            {
              'class': (_ref2 = {
                'el-descriptions-item__cell': true,
                'el-descriptions-item__label': true,
                'is-bordered-label': elDescriptions.border
              }, _ref2[item.labelClassName] = true, _ref2),
              style: item.labelStyle,
              attrs: { colSpan: '1'
              }
            },
            [item.label]
          ), h(
            'td',
            {
              'class': ['el-descriptions-item__cell', 'el-descriptions-item__content', item.contentClassName],
              style: item.contentStyle,
              attrs: { colSpan: item.props.span * 2 - 1
              }
            },
            [item.slots.default]
          )];
        })]
      )]);
    }
    return h('tbody', [h(
      'tr',
      { 'class': 'el-descriptions-row' },
      [row.map(function (item) {
        var _ref3;

        return h(
          'td',
          { 'class': 'el-descriptions-item el-descriptions-item__cell', attrs: { colSpan: item.props.span }
          },
          [h(
            'div',
            { 'class': 'el-descriptions-item__container' },
            [h(
              'span',
              {
                'class': (_ref3 = {
                  'el-descriptions-item__label': true,
                  'has-colon': elDescriptions.colon
                }, _ref3[item.labelClassName] = true, _ref3),
                style: item.labelStyle
              },
              [item.label]
            ), h(
              'span',
              {
                'class': ['el-descriptions-item__content', item.contentClassName],
                style: item.contentStyle
              },
              [item.slots.default]
            )]
          )]
        );
      })]
    )]);
  }
});
// EXTERNAL MODULE: external "element-ui/lib/utils/types"
var types_ = __webpack_require__(17);

// CONCATENATED MODULE: ./packages/descriptions/src/index.js
var src_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components;




/* harmony default export */ var src = ({
  name: 'ElDescriptions',
  components: (_components = {}, _components[descriptions_row.name] = descriptions_row, _components),
  props: {
    border: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 3
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String
      // validator: isValidComponentSize,
    },
    title: {
      type: String,
      default: ''
    },
    extra: {
      type: String,
      default: ''
    },
    labelStyle: {
      type: Object
    },
    contentStyle: {
      type: Object
    },
    labelClassName: {
      type: String,
      default: ''
    },
    contentClassName: {
      type: String,
      default: ''
    },
    colon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    descriptionsSize: function descriptionsSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  provide: function provide() {
    return {
      elDescriptions: this
    };
  },

  methods: {
    getOptionProps: function getOptionProps(vnode) {
      if (vnode.componentOptions) {
        var componentOptions = vnode.componentOptions;
        var _componentOptions$pro = componentOptions.propsData,
            propsData = _componentOptions$pro === undefined ? {} : _componentOptions$pro,
            _componentOptions$Cto = componentOptions.Ctor,
            Ctor = _componentOptions$Cto === undefined ? {} : _componentOptions$Cto;

        var props = (Ctor.options || {}).props || {};
        var res = {};
        for (var k in props) {
          var v = props[k];
          var defaultValue = v.default;
          if (defaultValue !== undefined) {
            res[k] = Object(types_["isFunction"])(defaultValue) ? defaultValue.call(vnode) : defaultValue;
          }
        }
        return src_extends({}, res, propsData);
      }
      return {};
    },
    getSlots: function getSlots(vnode) {
      var _this = this;

      var componentOptions = vnode.componentOptions || {};
      var children = vnode.children || componentOptions.children || [];
      var slots = {};
      children.forEach(function (child) {
        if (!_this.isEmptyElement(child)) {
          var name = child.data && child.data.slot || 'default';
          slots[name] = slots[name] || [];
          if (child.tag === 'template') {
            slots[name].push(child.children);
          } else {
            slots[name].push(child);
          }
        }
      });
      return src_extends({}, slots);
    },
    isEmptyElement: function isEmptyElement(c) {
      return !(c.tag || c.text && c.text.trim() !== '');
    },
    filledNode: function filledNode(node, span, count) {
      var isLast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        // set the max span, cause of the last td
        node.props.span = count;
      }
      return node;
    },
    getRows: function getRows() {
      var _this2 = this;

      var children = (this.$slots.default || []).filter(function (vnode) {
        return vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'ElDescriptionsItem';
      });
      var nodes = children.map(function (vnode) {
        return {
          props: _this2.getOptionProps(vnode),
          slots: _this2.getSlots(vnode),
          vnode: vnode
        };
      });
      var rows = [];
      var temp = [];
      var count = this.column;

      nodes.forEach(function (node, index) {
        var span = node.props.span || 1;

        if (index === children.length - 1) {
          temp.push(_this2.filledNode(node, span, count, true));
          rows.push(temp);
          return;
        }

        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(_this2.filledNode(node, span, count));
          rows.push(temp);
          count = _this2.column;
          temp = [];
        }
      });

      return rows;
    }
  },
  render: function render() {
    var h = arguments[0];
    var title = this.title,
        extra = this.extra,
        border = this.border,
        descriptionsSize = this.descriptionsSize,
        $slots = this.$slots;

    var rows = this.getRows();

    return h(
      'div',
      { 'class': 'el-descriptions' },
      [title || extra || $slots.title || $slots.extra ? h(
        'div',
        { 'class': 'el-descriptions__header' },
        [h(
          'div',
          { 'class': 'el-descriptions__title' },
          [$slots.title ? $slots.title : title]
        ), h(
          'div',
          { 'class': 'el-descriptions__extra' },
          [$slots.extra ? $slots.extra : extra]
        )]
      ) : null, h(
        'div',
        { 'class': 'el-descriptions__body' },
        [h(
          'table',
          { 'class': ['el-descriptions__table', { 'is-bordered': border }, descriptionsSize ? 'el-descriptions--' + descriptionsSize : ''] },
          [rows.map(function (row) {
            return h(descriptions_row, {
              attrs: { row: row }
            });
          })]
        )]
      )]
    );
  }
});
// CONCATENATED MODULE: ./packages/descriptions/index.js


/* istanbul ignore next */
src.install = function install(Vue) {
  Vue.component(src.name, src);
};

/* harmony default export */ var descriptions = __webpack_exports__["default"] = (src);

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/types");

/***/ })

/******/ });