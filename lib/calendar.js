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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/date-util");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/date");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/main.vue?vue&type=template&id=6d9756be&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-calendar" }, [
    _c("div", { staticClass: "el-calendar__header" }, [
      _c("div", { staticClass: "el-calendar__title" }, [
        _vm._v("\n      " + _vm._s(_vm.i18nDate) + "\n    ")
      ]),
      _vm.validatedRange.length === 0
        ? _c(
            "div",
            { staticClass: "el-calendar__button-group" },
            [
              _c(
                "el-button-group",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "plain", size: "mini" },
                      on: {
                        click: function($event) {
                          _vm.selectDate("prev-month")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.t("el.datepicker.prevMonth")) +
                          "\n        "
                      )
                    ]
                  ),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "plain", size: "mini" },
                      on: {
                        click: function($event) {
                          _vm.selectDate("today")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.t("el.datepicker.today")) +
                          "\n        "
                      )
                    ]
                  ),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "plain", size: "mini" },
                      on: {
                        click: function($event) {
                          _vm.selectDate("next-month")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.t("el.datepicker.nextMonth")) +
                          "\n        "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ]),
    _vm.validatedRange.length === 0
      ? _c(
          "div",
          { key: "no-range", staticClass: "el-calendar__body" },
          [
            _c("date-table", {
              attrs: {
                date: _vm.date,
                "selected-day": _vm.realSelectedDay,
                "first-day-of-week": _vm.realFirstDayOfWeek
              },
              on: { pick: _vm.pickDay }
            })
          ],
          1
        )
      : _c(
          "div",
          { key: "has-range", staticClass: "el-calendar__body" },
          _vm._l(_vm.validatedRange, function(range, index) {
            return _c("date-table", {
              key: index,
              attrs: {
                date: range[0],
                "selected-day": _vm.realSelectedDay,
                range: range,
                "hide-header": index !== 0
              },
              on: { pick: _vm.pickDay }
            })
          }),
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/calendar/src/main.vue?vue&type=template&id=6d9756be&

// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui/lib/utils/date"
var date_ = __webpack_require__(24);
var date_default = /*#__PURE__*/__webpack_require__.n(date_);

// EXTERNAL MODULE: external "element-ui/lib/utils/date-util"
var date_util_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/date-table.vue?vue&type=script&lang=js&




var WEEK_DAYS = Object(date_util_["getI18nSettings"])().dayNames;
/* harmony default export */ var date_tablevue_type_script_lang_js_ = ({
  props: {
    selectedDay: String, // formated date yyyy-MM-dd
    range: {
      type: Array,
      validator: function validator(val) {
        if (!(val && val.length)) return true;
        var start = val[0],
            end = val[1];

        return Object(date_util_["validateRangeInOneMonth"])(start, end);
      }
    },
    date: Date,
    hideHeader: Boolean,
    firstDayOfWeek: Number
  },

  inject: ['elCalendar'],

  methods: {
    toNestedArr: function toNestedArr(days) {
      return Object(date_util_["range"])(days.length / 7).map(function (_, index) {
        var start = index * 7;
        return days.slice(start, start + 7);
      });
    },
    getFormateDate: function getFormateDate(day, type) {
      if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
        throw new Error('invalid day or type');
      }
      var prefix = this.curMonthDatePrefix;
      if (type === 'prev') {
        prefix = this.prevMonthDatePrefix;
      } else if (type === 'next') {
        prefix = this.nextMonthDatePrefix;
      }
      day = ('00' + day).slice(-2);
      return prefix + '-' + day;
    },
    getCellClass: function getCellClass(_ref) {
      var text = _ref.text,
          type = _ref.type;

      var classes = [type];
      if (type === 'current') {
        var date = this.getFormateDate(text, type);
        if (date === this.selectedDay) {
          classes.push('is-selected');
        }
        if (date === this.formatedToday) {
          classes.push('is-today');
        }
      }
      return classes;
    },
    pickDay: function pickDay(_ref2) {
      var text = _ref2.text,
          type = _ref2.type;

      var date = this.getFormateDate(text, type);
      this.$emit('pick', date);
    },
    cellRenderProxy: function cellRenderProxy(_ref3) {
      var text = _ref3.text,
          type = _ref3.type;
      var h = this.$createElement;

      var render = this.elCalendar.$scopedSlots.dateCell;
      if (!render) return h('span', [text]);

      var day = this.getFormateDate(text, type);
      var date = new Date(day);
      var data = {
        isSelected: this.selectedDay === day,
        type: type + '-month',
        day: day
      };
      return render({ date: date, data: data });
    }
  },

  computed: {
    prevMonthDatePrefix: function prevMonthDatePrefix() {
      var temp = new Date(this.date.getTime());
      temp.setDate(0);
      return date_default.a.format(temp, 'yyyy-MM');
    },
    curMonthDatePrefix: function curMonthDatePrefix() {
      return date_default.a.format(this.date, 'yyyy-MM');
    },
    nextMonthDatePrefix: function nextMonthDatePrefix() {
      var temp = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
      return date_default.a.format(temp, 'yyyy-MM');
    },
    formatedToday: function formatedToday() {
      return this.elCalendar.formatedToday;
    },
    isInRange: function isInRange() {
      return this.range && this.range.length;
    },
    rows: function rows() {
      var days = [];
      // if range exists, should render days in range.
      if (this.isInRange) {
        var _range = this.range,
            start = _range[0],
            end = _range[1];

        var currentMonthRange = Object(date_util_["range"])(end.getDate() - start.getDate() + 1).map(function (_, index) {
          return {
            text: start.getDate() + index,
            type: 'current'
          };
        });
        var remaining = currentMonthRange.length % 7;
        remaining = remaining === 0 ? 0 : 7 - remaining;
        var nextMonthRange = Object(date_util_["range"])(remaining).map(function (_, index) {
          return {
            text: index + 1,
            type: 'next'
          };
        });
        days = currentMonthRange.concat(nextMonthRange);
      } else {
        var date = this.date;
        var firstDay = Object(date_util_["getFirstDayOfMonth"])(date);
        firstDay = firstDay === 0 ? 7 : firstDay;
        var firstDayOfWeek = typeof this.firstDayOfWeek === 'number' ? this.firstDayOfWeek : 1;
        var prevMonthDays = Object(date_util_["getPrevMonthLastDays"])(date, firstDay - firstDayOfWeek).map(function (day) {
          return {
            text: day,
            type: 'prev'
          };
        });
        var currentMonthDays = Object(date_util_["getMonthDays"])(date).map(function (day) {
          return {
            text: day,
            type: 'current'
          };
        });
        days = [].concat(prevMonthDays, currentMonthDays);
        var nextMonthDays = Object(date_util_["range"])(42 - days.length).map(function (_, index) {
          return {
            text: index + 1,
            type: 'next'
          };
        });
        days = days.concat(nextMonthDays);
      }
      return this.toNestedArr(days);
    },
    weekDays: function weekDays() {
      var start = this.firstDayOfWeek;
      if (typeof start !== 'number' || start === 0) {
        return WEEK_DAYS.slice();
      } else {
        return WEEK_DAYS.slice(start).concat(WEEK_DAYS.slice(0, start));
      }
    }
  },

  render: function render() {
    var _this = this;

    var h = arguments[0];

    var thead = this.hideHeader ? null : h('thead', [this.weekDays.map(function (day) {
      return h(
        'th',
        { key: day },
        [day]
      );
    })]);
    return h(
      'table',
      {
        'class': {
          'el-calendar-table': true,
          'is-range': this.isInRange
        },
        attrs: { cellspacing: '0',
          cellpadding: '0' }
      },
      [thead, h('tbody', [this.rows.map(function (row, index) {
        return h(
          'tr',
          {
            'class': {
              'el-calendar-table__row': true,
              'el-calendar-table__row--hide-border': index === 0 && _this.hideHeader
            },
            key: index },
          [row.map(function (cell, key) {
            return h(
              'td',
              { key: key,
                'class': _this.getCellClass(cell),
                on: {
                  'click': _this.pickDay.bind(_this, cell)
                }
              },
              [h(
                'div',
                { 'class': 'el-calendar-day' },
                [_this.cellRenderProxy(cell)]
              )]
            );
          })]
        );
      })])]
    );
  }
});
// CONCATENATED MODULE: ./packages/calendar/src/date-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_date_tablevue_type_script_lang_js_ = (date_tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/calendar/src/date-table.vue
var date_table_render, date_table_staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_date_tablevue_type_script_lang_js_,
  date_table_render,
  date_table_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/calendar/src/date-table.vue"
/* harmony default export */ var date_table = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var validTypes = ['prev-month', 'today', 'next-month'];
var oneDay = 86400000;

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElCalendar',

  mixins: [locale_default.a],

  components: {
    DateTable: date_table
  },

  props: {
    value: [Date, String, Number],
    range: {
      type: Array,
      validator: function validator(range) {
        if (Array.isArray(range)) {
          return range.length === 2 && range.every(function (item) {
            return typeof item === 'string' || typeof item === 'number' || item instanceof Date;
          });
        } else {
          return true;
        }
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    }
  },

  provide: function provide() {
    return {
      elCalendar: this
    };
  },


  methods: {
    pickDay: function pickDay(day) {
      this.realSelectedDay = day;
    },
    selectDate: function selectDate(type) {
      if (validTypes.indexOf(type) === -1) {
        throw new Error('invalid type ' + type);
      }
      var day = '';
      if (type === 'prev-month') {
        day = this.prevMonthDatePrefix + '-01';
      } else if (type === 'next-month') {
        day = this.nextMonthDatePrefix + '-01';
      } else {
        day = this.formatedToday;
      }

      if (day === this.formatedDate) return;
      this.pickDay(day);
    },
    toDate: function toDate(val) {
      if (!val) {
        throw new Error('invalid val');
      }
      return val instanceof Date ? val : new Date(val);
    }
  },

  computed: {
    prevMonthDatePrefix: function prevMonthDatePrefix() {
      var temp = new Date(this.date.getTime());
      temp.setDate(0);
      return date_default.a.format(temp, 'yyyy-MM');
    },
    curMonthDatePrefix: function curMonthDatePrefix() {
      return date_default.a.format(this.date, 'yyyy-MM');
    },
    nextMonthDatePrefix: function nextMonthDatePrefix() {
      var temp = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
      return date_default.a.format(temp, 'yyyy-MM');
    },
    formatedDate: function formatedDate() {
      return date_default.a.format(this.date, 'yyyy-MM-dd');
    },
    i18nDate: function i18nDate() {
      var year = this.date.getFullYear();
      var month = this.date.getMonth() + 1;
      return year + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + month);
    },
    formatedToday: function formatedToday() {
      return date_default.a.format(this.now, 'yyyy-MM-dd');
    },


    realSelectedDay: {
      get: function get() {
        if (!this.value) return this.selectedDay;
        return this.formatedDate;
      },
      set: function set(val) {
        this.selectedDay = val;
        var date = new Date(val);
        this.$emit('input', date);
      }
    },

    date: function date() {
      if (!this.value) {
        if (this.realSelectedDay) {
          return new Date(this.selectedDay);
        } else if (this.validatedRange.length) {
          return this.validatedRange[0][0];
        }
        return this.now;
      } else {
        return this.toDate(this.value);
      }
    },


    // if range is valid, we get a two-digit array
    validatedRange: function validatedRange() {
      var _this = this;

      var range = this.range;
      if (!range) return [];
      var expetedMap = {
        0: {
          value: 1,
          message: 'start of range should be Monday.'
        },
        1: {
          value: 0,
          message: 'end of range should be Sunday.'
        }
      };
      range = range.reduce(function (prev, val, index) {
        var date = _this.toDate(val);
        if (date.getDay() !== expetedMap[index].value) {
          console.warn('[ElementCalendar]', expetedMap[index].message, ' invalid range will be ignored');
        } else {
          prev = prev.concat(date);
        }
        return prev;
      }, []);
      if (range.length === 2) {
        var _range = range,
            start = _range[0],
            end = _range[1];

        if (start > end) {
          console.warn('[ElementCalendar]end time should be greater than start time');
          return [];
        }
        // start time and end time in one month
        if (Object(date_util_["validateRangeInOneMonth"])(start, end)) {
          return [[start, end]];
        }
        var data = [];
        var startDay = new Date(start.getFullYear(), start.getMonth() + 1, 1);
        var lastDay = this.toDate(startDay.getTime() - oneDay);
        if (!Object(date_util_["validateRangeInOneMonth"])(startDay, end)) {
          console.warn('[ElementCalendar]start time and end time interval must not exceed two months');
          return [];
        }
        data.push([start, lastDay]);
        var interval = startDay.getDay();
        interval = interval <= 1 ? Math.abs(interval - 1) : 8 - interval;
        startDay = this.toDate(startDay.getTime() + interval * oneDay);
        if (startDay.getDate() < end.getDate()) {
          data.push([startDay, end]);
        }
        return data;
      }
      return [];
    },
    realFirstDayOfWeek: function realFirstDayOfWeek() {
      if (this.firstDayOfWeek < 1 || this.firstDayOfWeek > 6) {
        return 0;
      }
      return Math.floor(this.firstDayOfWeek);
    }
  },

  data: function data() {
    return {
      selectedDay: '',
      now: new Date()
    };
  }
});
// CONCATENATED MODULE: ./packages/calendar/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/calendar/src/main.vue





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
main_component.options.__file = "packages/calendar/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/calendar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var calendar = __webpack_exports__["default"] = (main);

/***/ })

/******/ });