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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 200);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
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
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nextYear = exports.prevYear = exports.nextMonth = exports.prevMonth = exports.timeWithinRange = exports.limitTimeRange = exports.clearMilliseconds = exports.clearTime = exports.modifyTime = exports.modifyDate = exports.range = exports.getRangeHours = exports.getWeekNumber = exports.getStartDateOfMonth = exports.nextDate = exports.prevDate = exports.getFirstDayOfMonth = exports.getDayCountOfYear = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.isDateObject = exports.isDate = exports.toDate = undefined;

var _date = __webpack_require__(28);

var _date2 = _interopRequireDefault(_date);

var _locale = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
var getI18nSettings = function getI18nSettings() {
  return {
    dayNamesShort: weeks.map(function (week) {
      return (0, _locale.t)('el.datepicker.weeks.' + week);
    }),
    dayNames: weeks.map(function (week) {
      return (0, _locale.t)('el.datepicker.weeks.' + week);
    }),
    monthNamesShort: months.map(function (month) {
      return (0, _locale.t)('el.datepicker.months.' + month);
    }),
    monthNames: months.map(function (month, index) {
      return (0, _locale.t)('el.datepicker.month' + (index + 1));
    }),
    amPm: ['am', 'pm']
  };
};

var newArray = function newArray(start, end) {
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

var toDate = exports.toDate = function toDate(date) {
  return isDate(date) ? new Date(date) : null;
};

var isDate = exports.isDate = function isDate(date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  return true;
};

var isDateObject = exports.isDateObject = function isDateObject(val) {
  return val instanceof Date;
};

var formatDate = exports.formatDate = function formatDate(date, format) {
  date = toDate(date);
  if (!date) return '';
  return _date2.default.format(date, format || 'yyyy-MM-dd', getI18nSettings());
};

var parseDate = exports.parseDate = function parseDate(string, format) {
  return _date2.default.parse(string, format || 'yyyy-MM-dd', getI18nSettings());
};

var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

var getDayCountOfYear = exports.getDayCountOfYear = function getDayCountOfYear(year) {
  var isLeapYear = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
  return isLeapYear ? 366 : 365;
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
  var temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

// see: https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
// {prev, next} Date should work for Daylight Saving Time
// Adding 24 * 60 * 60 * 1000 does not work in the above scenario
var prevDate = exports.prevDate = function prevDate(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

var nextDate = exports.nextDate = function nextDate(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

var getStartDateOfMonth = exports.getStartDateOfMonth = function getStartDateOfMonth(year, month) {
  var result = new Date(year, month, 1);
  var day = result.getDay();

  if (day === 0) {
    return prevDate(result, 7);
  } else {
    return prevDate(result, day);
  }
};

var getWeekNumber = exports.getWeekNumber = function getWeekNumber(src) {
  var date = new Date(src.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

var getRangeHours = exports.getRangeHours = function getRangeHours(ranges) {
  var hours = [];
  var disabledHours = [];

  (ranges || []).forEach(function (range) {
    var value = range.map(function (date) {
      return date.getHours();
    });

    disabledHours = disabledHours.concat(newArray(value[0], value[1]));
  });

  if (disabledHours.length) {
    for (var i = 0; i < 24; i++) {
      hours[i] = disabledHours.indexOf(i) === -1;
    }
  } else {
    for (var _i = 0; _i < 24; _i++) {
      hours[_i] = false;
    }
  }

  return hours;
};

var range = exports.range = function range(n) {
  // see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
  return Array.apply(null, { length: n }).map(function (_, n) {
    return n;
  });
};

var modifyDate = exports.modifyDate = function modifyDate(date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

var modifyTime = exports.modifyTime = function modifyTime(date, h, m, s) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

var clearTime = exports.clearTime = function clearTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

var clearMilliseconds = exports.clearMilliseconds = function clearMilliseconds(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

var limitTimeRange = exports.limitTimeRange = function limitTimeRange(date, ranges) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HH:mm:ss';

  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date;
  var normalizeDate = function normalizeDate(date) {
    return _date2.default.parse(_date2.default.format(date, format), format);
  };
  var ndate = normalizeDate(date);
  var nranges = ranges.map(function (range) {
    return range.map(normalizeDate);
  });
  if (nranges.some(function (nrange) {
    return ndate >= nrange[0] && ndate <= nrange[1];
  })) return date;

  var minDate = nranges[0][0];
  var maxDate = nranges[0][0];

  nranges.forEach(function (nrange) {
    minDate = new Date(Math.min(nrange[0], minDate));
    maxDate = new Date(Math.max(nrange[1], minDate));
  });

  var ret = ndate < minDate ? minDate : maxDate;
  // preserve Year/Month/Date
  return modifyDate(ret, date.getFullYear(), date.getMonth(), date.getDate());
};

var timeWithinRange = exports.timeWithinRange = function timeWithinRange(date, selectableRange, format) {
  var limitedDate = limitTimeRange(date, selectableRange, format);
  return limitedDate.getTime() === date.getTime();
};

var prevMonth = exports.prevMonth = function prevMonth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  if (month === 0) {
    year -= 1;
    month = 11;
  } else {
    month -= 1;
  }
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

var nextMonth = exports.nextMonth = function nextMonth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  if (month === 11) {
    year += 1;
    month = 0;
  } else {
    month += 1;
  }
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

// check for leap year Feburary
var prevYear = exports.prevYear = function prevYear(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var year = date.getFullYear() - amount;
  var month = date.getMonth();
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

var nextYear = exports.nextYear = function nextYear(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var year = date.getFullYear() + amount;
  var month = date.getMonth();
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/focus");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/scrollbar");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _datePicker = __webpack_require__(202);

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_datePicker2.default.install = function install(Vue) {
  Vue.component(_datePicker2.default.name, _datePicker2.default);
};

exports.default = _datePicker2.default;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _picker = __webpack_require__(26);

var _picker2 = _interopRequireDefault(_picker);

var _date = __webpack_require__(203);

var _date2 = _interopRequireDefault(_date);

var _dateRange = __webpack_require__(214);

var _dateRange2 = _interopRequireDefault(_dateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPanel = function getPanel(type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return _dateRange2.default;
  }
  return _date2.default;
};

exports.default = {
  mixins: [_picker2.default],

  name: 'ElDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type: function type(_type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(_type);
        this.mountPicker();
      } else {
        this.panel = getPanel(_type);
      }
    }
  },

  created: function created() {
    this.panel = getPanel(this.type);
  }
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f6496d7_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__ = __webpack_require__(213);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f6496d7_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(11);

var _locale = __webpack_require__(4);

var _locale2 = _interopRequireDefault(_locale);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(15);

var _button2 = _interopRequireDefault(_button);

var _time = __webpack_require__(30);

var _time2 = _interopRequireDefault(_time);

var _yearTable = __webpack_require__(205);

var _yearTable2 = _interopRequireDefault(_yearTable);

var _monthTable = __webpack_require__(208);

var _monthTable2 = _interopRequireDefault(_monthTable);

var _dateTable = __webpack_require__(47);

var _dateTable2 = _interopRequireDefault(_dateTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  mixins: [_locale2.default],

  watch: {
    showTime: function showTime(val) {
      var _this = this;

      /* istanbul ignore if */
      if (!val) return;
      this.$nextTick(function (_) {
        var inputElm = _this.$refs.input.$el;
        if (inputElm) {
          _this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
        }
      });
    },
    value: function value(val) {
      if ((0, _util.isDate)(val)) {
        this.date = new Date(val);
      } else {
        this.date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }
    },
    defaultValue: function defaultValue(val) {
      if (!(0, _util.isDate)(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },
    timePickerVisible: function timePickerVisible(val) {
      var _this2 = this;

      if (val) this.$nextTick(function () {
        return _this2.$refs.timepicker.adjustSpinners();
      });
    },
    selectionMode: function selectionMode(newVal) {
      if (newVal === 'month') {
        /* istanbul ignore next */
        if (this.currentView !== 'year' || this.currentView !== 'month') {
          this.currentView = 'month';
        }
      }
    }
  },

  methods: {
    proxyTimePickerDataProperties: function proxyTimePickerDataProperties() {
      var _this3 = this;

      var format = function format(timeFormat) {
        _this3.$refs.timepicker.format = timeFormat;
      };
      var value = function value(_value) {
        _this3.$refs.timepicker.value = _value;
      };
      var date = function date(_date) {
        _this3.$refs.timepicker.date = _date;
      };

      this.$watch('format', format);
      this.$watch('value', value);
      this.$watch('date', date);

      format(this.timeFormat);
      value(this.value);
      date(this.date);
    },
    handleClear: function handleClear() {
      this.date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      this.$emit('pick', null);
    },
    emit: function emit(value) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!value) {
        this.$emit.apply(this, ['pick', value].concat(args));
        return;
      }
      if (this.showTime) {
        this.$emit.apply(this, ['pick', (0, _util.clearMilliseconds)(value)].concat(args));
      } else {
        this.$emit.apply(this, ['pick', (0, _util.clearTime)(value)].concat(args));
      }
    },


    // resetDate() {
    //   this.date = new Date(this.date);
    // },

    showMonthPicker: function showMonthPicker() {
      this.currentView = 'month';
    },
    showYearPicker: function showYearPicker() {
      this.currentView = 'year';
    },


    // XXX: 没用到
    // handleLabelClick() {
    //   if (this.currentView === 'date') {
    //     this.showMonthPicker();
    //   } else if (this.currentView === 'month') {
    //     this.showYearPicker();
    //   }
    // },

    prevMonth: function prevMonth() {
      this.date = (0, _util.prevMonth)(this.date);
    },
    nextMonth: function nextMonth() {
      this.date = (0, _util.nextMonth)(this.date);
    },
    prevYear: function prevYear() {
      if (this.currentView === 'year') {
        this.date = (0, _util.prevYear)(this.date, 10);
      } else {
        this.date = (0, _util.prevYear)(this.date);
      }
    },
    nextYear: function nextYear() {
      if (this.currentView === 'year') {
        this.date = (0, _util.nextYear)(this.date, 10);
      } else {
        this.date = (0, _util.nextYear)(this.date);
      }
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleTimePick: function handleTimePick(value, visible, first) {
      if ((0, _util.isDate)(value)) {
        var newDate = (0, _util.modifyTime)(this.date, value.getHours(), value.getMinutes(), value.getSeconds());
        this.date = newDate;
        this.emit(this.date, true);
      } else {
        this.emit(value, true);
      }
      if (!first) {
        this.timePickerVisible = visible;
      }
    },
    handleMonthPick: function handleMonthPick(month) {
      if (this.selectionMode === 'month') {
        this.date = (0, _util.modifyDate)(this.date, this.year, month, 1);
        this.emit(this.date);
      } else {
        this.date = (0, _util.modifyDate)(this.date, this.year, month, this.monthDate);
        // TODO: should emit intermediate value ??
        // this.emit(this.date);
        this.currentView = 'date';
      }
    },
    handleDatePick: function handleDatePick(value) {
      if (this.selectionMode === 'day') {
        this.date = (0, _util.modifyDate)(this.date, value.getFullYear(), value.getMonth(), value.getDate());
        this.emit(this.date, this.showTime);
      } else if (this.selectionMode === 'week') {
        this.emit(value.date);
      }
    },
    handleYearPick: function handleYearPick(year) {
      if (this.selectionMode === 'year') {
        this.date = (0, _util.modifyDate)(this.date, year, 0, 1);
        this.emit(this.date);
      } else {
        this.date = (0, _util.modifyDate)(this.date, year, this.month, this.monthDate);
        // TODO: should emit intermediate value ??
        // this.emit(this.date, true);
        this.currentView = 'month';
      }
    },
    changeToNow: function changeToNow() {
      this.date = new Date();
      this.emit(this.date);
    },
    confirm: function confirm() {
      this.emit(this.date);
    },
    resetView: function resetView() {
      if (this.selectionMode === 'month') {
        this.currentView = 'month';
      } else if (this.selectionMode === 'year') {
        this.currentView = 'year';
      } else {
        this.currentView = 'date';
      }
    },
    handleEnter: function handleEnter() {
      document.body.addEventListener('keydown', this.handleKeydown);
    },
    handleLeave: function handleLeave() {
      this.$emit('dodestroy');
      document.body.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown: function handleKeydown(e) {
      var keyCode = e.keyCode;
      var list = [38, 40, 37, 39];
      if (this.visible && !this.timePickerVisible) {
        if (list.indexOf(keyCode) !== -1) {
          this.handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (keyCode === 13) {
          // Enter
          this.$emit('pick', this.date, false);
        }
      }
    },
    handleKeyControl: function handleKeyControl(keyCode) {
      var mapping = {
        'year': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setFullYear(date.getFullYear() + step);
          }
        },
        'month': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setMonth(date.getMonth() + step);
          }
        },
        'week': {
          38: -1, 40: 1, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step * 7);
          }
        },
        'day': {
          38: -7, 40: 7, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step);
          }
        }
      };
      var mode = this.selectionMode;
      var year = 3.1536e10;
      var now = this.date.getTime();
      var newDate = new Date(this.date.getTime());
      while (Math.abs(now - newDate.getTime()) <= year) {
        var map = mapping[mode];
        map.offset(newDate, map[keyCode]);
        if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
          continue;
        }
        this.date = newDate;
        this.$emit('pick', newDate, true);
        break;
      }
    },
    handleVisibleTimeChange: function handleVisibleTimeChange(event) {
      var time = (0, _util.parseDate)(event.target.value, this.timeFormat);
      if (time) {
        this.date = (0, _util.modifyDate)(time, this.year, this.month, this.monthDate);
        this.$refs.timepicker.value = this.date;
        this.timePickerVisible = false;
        this.$emit('pick', this.date, true);
      }
    },
    handleVisibleDateChange: function handleVisibleDateChange(event) {
      var date = (0, _util.parseDate)(event.target.value, this.dateFormat);
      if (date) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
          return;
        }
        this.date = (0, _util.modifyTime)(date, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        this.resetView();
        this.$emit('pick', this.date, true);
      }
    },
    isValidValue: function isValidValue(value) {
      return value && !isNaN(value) && (typeof this.disabledDate === 'function' ? !this.disabledDate(value) : true);
    }
  },

  components: {
    TimePicker: _time2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, DateTable: _dateTable2.default, ElInput: _input2.default, ElButton: _button2.default
  },

  data: function data() {
    return {
      popperClass: '',
      date: new Date(),
      value: '',
      defaultValue: null,
      showTime: false,
      selectionMode: 'day',
      shortcuts: '',
      visible: false,
      currentView: 'date',
      disabledDate: '',
      firstDayOfWeek: 7,
      showWeekNumber: false,
      timePickerVisible: false,
      format: '',
      arrowControl: false
    };
  },


  computed: {
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    week: function week() {
      return (0, _util.getWeekNumber)(this.date);
    },
    monthDate: function monthDate() {
      return this.date.getDate();
    },
    footerVisible: function footerVisible() {
      return this.showTime;
    },
    visibleTime: function visibleTime() {
      var date = this.value || this.defaultValue;
      return date ? (0, _util.formatDate)(date, this.timeFormat) : '';
    },
    visibleDate: function visibleDate() {
      var date = this.value || this.defaultValue;
      return date ? (0, _util.formatDate)(date, this.dateFormat) : '';
    },
    yearLabel: function yearLabel() {
      var yearTranslation = this.t('el.datepicker.year');
      if (this.currentView === 'year') {
        var startYear = Math.floor(this.year / 10) * 10;
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
        }
        return startYear + ' - ' + (startYear + 9);
      }
      return this.year + ' ' + yearTranslation;
    },
    timeFormat: function timeFormat() {
      if (this.format && this.format.indexOf('ss') === -1) {
        return 'HH:mm';
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return this.format.replace('HH', '').replace(/[^a-zA-Z]*mm/, '').replace(/[^a-zA-Z]*ss/, '').trim();
      } else {
        return 'yyyy-MM-dd';
      }
    }
  }
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c7e813d_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__ = __webpack_require__(207);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c7e813d_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(2);

var _util = __webpack_require__(11);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var datesInYear = function datesInYear(year) {
  var numOfDays = (0, _util.getDayCountOfYear)(year);
  var firstDay = new Date(year, 0, 1);
  return (0, _util.range)(numOfDays).map(function (n) {
    return (0, _util.nextDate)(firstDay, n);
  });
};

exports.default = {
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || val instanceof Date && (0, _util.isDate)(val);
      }
    },
    date: {}
  },

  computed: {
    startYear: function startYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    }
  },

  methods: {
    getCellStyle: function getCellStyle(year) {
      var style = {};
      var today = new Date();

      style.disabled = typeof this.disabledDate === 'function' ? datesInYear(year).every(this.disabledDate) : false;
      style.current = this.value.getFullYear() === year;
      style.today = today.getFullYear() === year;
      style.default = this.defaultValue && this.defaultValue.getFullYear() === year;

      return style;
    },
    handleYearTableClick: function handleYearTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        if ((0, _dom.hasClass)(target.parentNode, 'disabled')) return;
        var year = target.textContent || target.innerText;
        this.$emit('pick', Number(year));
      }
    }
  }
};

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-year-table",on:{"click":_vm.handleYearTableClick}},[_c('tbody',[_c('tr',[_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 0)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 1)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 1))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 2)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 2))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 3)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 3))])])]),_c('tr',[_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 4)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 4))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 5)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 5))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 6)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 6))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 7)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 7))])])]),_c('tr',[_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 8)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 8))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 9)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 9))])]),_c('td'),_c('td')])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_332101d2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__ = __webpack_require__(210);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_332101d2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _locale = __webpack_require__(4);

var _locale2 = _interopRequireDefault(_locale);

var _util = __webpack_require__(11);

var _dom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datesInMonth = function datesInMonth(year, month) {
  var numOfDays = (0, _util.getDayCountOfMonth)(year, month);
  var firstDay = new Date(year, month, 1);
  return (0, _util.range)(numOfDays).map(function (n) {
    return (0, _util.nextDate)(firstDay, n);
  });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || val instanceof Date && (0, _util.isDate)(val);
      }
    },
    date: {}
  },
  mixins: [_locale2.default],
  methods: {
    getCellStyle: function getCellStyle(month) {
      var style = {};
      var year = this.date.getFullYear();
      var today = new Date();

      style.disabled = typeof this.disabledDate === 'function' ? datesInMonth(year, month).every(this.disabledDate) : false;
      style.current = this.value.getFullYear() === year && this.value.getMonth() === month;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      style.default = this.defaultValue && this.defaultValue.getFullYear() === year && this.defaultValue.getMonth() === month;

      return style;
    },
    handleMonthTableClick: function handleMonthTableClick(event) {
      var target = event.target;
      if (target.tagName !== 'A') return;
      if ((0, _dom.hasClass)(target.parentNode, 'disabled')) return;
      var column = target.parentNode.cellIndex;
      var row = target.parentNode.parentNode.rowIndex;
      var month = row * 4 + column;

      this.$emit('pick', month);
    }
  }
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-month-table",on:{"click":_vm.handleMonthTableClick}},[_c('tbody',[_c('tr',[_c('td',{class:_vm.getCellStyle(0)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.jan')))])]),_c('td',{class:_vm.getCellStyle(1)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.feb')))])]),_c('td',{class:_vm.getCellStyle(2)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.mar')))])]),_c('td',{class:_vm.getCellStyle(3)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.apr')))])])]),_c('tr',[_c('td',{class:_vm.getCellStyle(4)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.may')))])]),_c('td',{class:_vm.getCellStyle(5)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.jun')))])]),_c('td',{class:_vm.getCellStyle(6)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.jul')))])]),_c('td',{class:_vm.getCellStyle(7)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.aug')))])])]),_c('tr',[_c('td',{class:_vm.getCellStyle(8)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.sep')))])]),_c('td',{class:_vm.getCellStyle(9)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.oct')))])]),_c('td',{class:_vm.getCellStyle(10)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.nov')))])]),_c('td',{class:_vm.getCellStyle(11)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.dec')))])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(11);

var _dom = __webpack_require__(2);

var _locale = __webpack_require__(4);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var clearHours = function clearHours(time) {
  var cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};

exports.default = {
  mixins: [_locale2.default],

  props: {
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: function validator(val) {
        return val >= 1 && val <= 7;
      }
    },

    value: {},

    defaultValue: {
      validator: function validator(val) {
        // either: null, valid Date object, Array of valid Date objects
        return val === null || (0, _util.isDate)(val) || Array.isArray(val) && val.every(_util.isDate);
      }
    },

    date: {},

    selectionMode: {
      default: 'day'
    },

    showWeekNumber: {
      type: Boolean,
      default: false
    },

    disabledDate: {},

    minDate: {},

    maxDate: {},

    rangeState: {
      default: function _default() {
        return {
          endDate: null,
          selecting: false,
          row: null,
          column: null
        };
      }
    }
  },

  computed: {
    offsetDay: function offsetDay() {
      var week = this.firstDayOfWeek;
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week;
    },
    WEEKS: function WEEKS() {
      var week = this.firstDayOfWeek;
      return _WEEKS.concat(_WEEKS).slice(week, week + 7);
    },
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    startDate: function startDate() {
      return (0, _util.getStartDateOfMonth)(this.year, this.month);
    },
    rows: function rows() {
      // TODO: refactory rows / getCellClasses
      var date = new Date(this.year, this.month, 1);
      var day = (0, _util.getFirstDayOfMonth)(date); // day of first day
      var dateCountOfMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth());
      var dateCountOfLastMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

      day = day === 0 ? 7 : day;

      var offset = this.offsetDay;
      var rows = this.tableRows;
      var count = 1;
      var firstDayPosition = void 0;

      var startDate = this.startDate;
      var disabledDate = this.disabledDate;
      var now = clearHours(new Date());

      for (var i = 0; i < 6; i++) {
        var row = rows[i];

        if (this.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: (0, _util.getWeekNumber)((0, _util.nextDate)(startDate, i * 7 + 1)) };
          }
        }

        for (var j = 0; j < 7; j++) {
          var cell = row[this.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 7 + j;
          var time = (0, _util.nextDate)(startDate, index - offset).getTime();
          cell.inRange = time >= clearHours(this.minDate) && time <= clearHours(this.maxDate);
          cell.start = this.minDate && time === clearHours(this.minDate);
          cell.end = this.maxDate && time === clearHours(this.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }

          if (i >= 0 && i <= 1) {
            if (j + i * 7 >= day + offset) {
              cell.text = count++;
              if (count === 2) {
                firstDayPosition = i * 7 + j;
              }
            } else {
              cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
              cell.type = 'prev-month';
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
              if (count === 2) {
                firstDayPosition = i * 7 + j;
              }
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = 'next-month';
            }
          }

          cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));

          this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
        }

        if (this.selectionMode === 'week') {
          var start = this.showWeekNumber ? 1 : 0;
          var end = this.showWeekNumber ? 7 : 6;
          var isWeekActive = this.isWeekActive(row[start + 1]);

          row[start].inRange = isWeekActive;
          row[start].start = isWeekActive;
          row[end].inRange = isWeekActive;
          row[end].end = isWeekActive;
        }
      }

      rows.firstDayPosition = firstDayPosition;

      return rows;
    }
  },

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (newVal && !oldVal) {
        this.rangeState.selecting = true;
        this.markRange(newVal);
      } else if (!newVal) {
        this.rangeState.selecting = false;
        this.markRange(newVal);
      } else {
        this.markRange();
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (newVal && !oldVal) {
        this.rangeState.selecting = false;
        this.markRange(newVal);
        this.$emit('pick', {
          minDate: this.minDate,
          maxDate: this.maxDate
        });
      }
    }
  },

  data: function data() {
    return {
      tableRows: [[], [], [], [], [], []]
    };
  },


  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.year === value.getFullYear() && this.month === value.getMonth() && Number(cell.text) === value.getDate();
    },
    getCellClasses: function getCellClasses(cell) {
      var _this = this;

      var selectionMode = this.selectionMode;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

      var classes = [];
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available');
        if (cell.type === 'today') {
          classes.push('today');
        }
      } else {
        classes.push(cell.type);
      }

      if (cell.type === 'normal' && defaultValue.some(function (date) {
        return _this.cellMatchesDate(cell, date);
      })) {
        classes.push('default');
      }

      if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
        classes.push('current');
      }

      if (cell.inRange && (cell.type === 'normal' || cell.type === 'today' || this.selectionMode === 'week')) {
        classes.push('in-range');

        if (cell.start) {
          classes.push('start-date');
        }

        if (cell.end) {
          classes.push('end-date');
        }
      }

      if (cell.disabled) {
        classes.push('disabled');
      }

      return classes.join(' ');
    },
    getDateOfCell: function getDateOfCell(row, column) {
      var offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;
      return (0, _util.nextDate)(this.startDate, offsetFromStart);
    },
    isWeekActive: function isWeekActive(cell) {
      if (this.selectionMode !== 'week') return false;
      var newDate = new Date(this.year, this.month, 1);
      var year = newDate.getFullYear();
      var month = newDate.getMonth();

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1);
        newDate.setFullYear(month === 0 ? year - 1 : year);
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1);
        newDate.setFullYear(month === 11 ? year + 1 : year);
      }

      newDate.setDate(parseInt(cell.text, 10));

      return (0, _util.getWeekNumber)(newDate) === (0, _util.getWeekNumber)(this.date);
    },
    markRange: function markRange(maxDate) {
      var startDate = this.startDate;
      if (!maxDate) {
        maxDate = this.maxDate;
      }

      var rows = this.rows;
      var minDate = this.minDate;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {
          if (this.showWeekNumber && j === 0) continue;

          var cell = row[j];
          var index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
          var time = (0, _util.nextDate)(startDate, index - this.offsetDay).getTime();

          cell.inRange = minDate && time >= clearHours(minDate) && time <= clearHours(maxDate);
          cell.start = minDate && time === clearHours(minDate.getTime());
          cell.end = maxDate && time === clearHours(maxDate.getTime());
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      this.$emit('changerange', {
        minDate: this.minDate,
        maxDate: this.maxDate,
        rangeState: this.rangeState
      });

      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var column = target.cellIndex;
      var row = target.parentNode.rowIndex - 1;
      var _rangeState = this.rangeState,
          oldRow = _rangeState.row,
          oldColumn = _rangeState.column;


      if (oldRow !== row || oldColumn !== column) {
        this.rangeState.row = row;
        this.rangeState.column = column;

        this.rangeState.endDate = this.getDateOfCell(row, column);
      }
    },
    handleClick: function handleClick(event) {
      var _this2 = this;

      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      if (target.tagName !== 'TD') return;
      if ((0, _dom.hasClass)(target, 'disabled') || (0, _dom.hasClass)(target, 'week')) return;

      var selectionMode = this.selectionMode;

      if (selectionMode === 'week') {
        target = target.parentNode.cells[1];
      }

      var year = Number(this.year);
      var month = Number(this.month);

      var cellIndex = target.cellIndex;
      var rowIndex = target.parentNode.rowIndex;

      var cell = this.rows[rowIndex - 1][cellIndex];
      var text = cell.text;
      var className = target.className;

      var newDate = new Date(year, month, 1);

      if (className.indexOf('prev') !== -1) {
        if (month === 0) {
          year = year - 1;
          month = 11;
        } else {
          month = month - 1;
        }
        newDate.setFullYear(year);
        newDate.setMonth(month);
      } else if (className.indexOf('next') !== -1) {
        if (month === 11) {
          year = year + 1;
          month = 0;
        } else {
          month = month + 1;
        }
        newDate.setFullYear(year);
        newDate.setMonth(month);
      }

      newDate.setDate(parseInt(text, 10));

      if (this.selectionMode === 'range') {
        if (this.minDate && this.maxDate) {
          var minDate = new Date(newDate.getTime());
          var maxDate = null;

          this.$emit('pick', { minDate: minDate, maxDate: maxDate }, false);
          this.rangeState.selecting = true;
          this.markRange(this.minDate);
          this.$nextTick(function () {
            _this2.handleMouseMove(event);
          });
        } else if (this.minDate && !this.maxDate) {
          if (newDate >= this.minDate) {
            var _maxDate = new Date(newDate.getTime());
            this.rangeState.selecting = false;

            this.$emit('pick', {
              minDate: this.minDate,
              maxDate: _maxDate
            });
          } else {
            var _minDate = new Date(newDate.getTime());

            this.$emit('pick', { minDate: _minDate, maxDate: this.maxDate }, false);
          }
        } else if (!this.minDate) {
          var _minDate2 = new Date(newDate.getTime());

          this.$emit('pick', { minDate: _minDate2, maxDate: this.maxDate }, false);
          this.rangeState.selecting = true;
          this.markRange(this.minDate);
        }
      } else if (selectionMode === 'day') {
        this.$emit('pick', newDate);
      } else if (selectionMode === 'week') {
        var weekNumber = (0, _util.getWeekNumber)(newDate);

        var value = newDate.getFullYear() + 'w' + weekNumber;
        this.$emit('pick', {
          year: newDate.getFullYear(),
          week: weekNumber,
          value: value,
          date: newDate
        });
      }
    }
  }
};

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-date-table",class:{ 'is-week-mode': _vm.selectionMode === 'week' },attrs:{"cellspacing":"0","cellpadding":"0"},on:{"click":_vm.handleClick,"mousemove":_vm.handleMouseMove}},[_c('tbody',[_c('tr',[(_vm.showWeekNumber)?_c('th',[_vm._v(_vm._s(_vm.t('el.datepicker.week')))]):_vm._e(),_vm._l((_vm.WEEKS),function(week){return _c('th',[_vm._v(_vm._s(_vm.t('el.datepicker.weeks.' + week)))])})],2),_vm._l((_vm.rows),function(row){return _c('tr',{staticClass:"el-date-table__row",class:{ current: _vm.isWeekActive(row[1]) }},_vm._l((row),function(cell){return _c('td',{class:_vm.getCellClasses(cell)},[_c('div',[_c('span',[_vm._v("\n          "+_vm._s(cell.text)+"\n        ")])])])}))})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-enter":_vm.handleEnter,"after-leave":_vm.handleLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-picker-panel el-date-picker el-popper",class:[{
      'has-sidebar': _vm.$slots.sidebar || _vm.shortcuts,
      'has-time': _vm.showTime
    }, _vm.popperClass]},[_c('div',{staticClass:"el-picker-panel__body-wrapper"},[_vm._t("sidebar"),(_vm.shortcuts)?_c('div',{staticClass:"el-picker-panel__sidebar"},_vm._l((_vm.shortcuts),function(shortcut){return _c('button',{staticClass:"el-picker-panel__shortcut",attrs:{"type":"button"},on:{"click":function($event){_vm.handleShortcutClick(shortcut)}}},[_vm._v(_vm._s(shortcut.text))])})):_vm._e(),_c('div',{staticClass:"el-picker-panel__body"},[(_vm.showTime)?_c('div',{staticClass:"el-date-picker__time-header"},[_c('span',{staticClass:"el-date-picker__editor-wrap"},[_c('el-input',{attrs:{"placeholder":_vm.t('el.datepicker.selectDate'),"value":_vm.visibleDate,"size":"small"},nativeOn:{"change":function($event){_vm.handleVisibleDateChange($event)}}})],1),_c('span',{staticClass:"el-date-picker__editor-wrap"},[_c('el-input',{ref:"input",attrs:{"placeholder":_vm.t('el.datepicker.selectTime'),"value":_vm.visibleTime,"size":"small"},on:{"focus":function($event){_vm.timePickerVisible = !_vm.timePickerVisible}},nativeOn:{"change":function($event){_vm.handleVisibleTimeChange($event)}}}),_c('time-picker',{ref:"timepicker",attrs:{"time-arrow-control":_vm.arrowControl,"visible":_vm.timePickerVisible},on:{"pick":_vm.handleTimePick,"mounted":_vm.proxyTimePickerDataProperties}})],1)]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView !== 'time'),expression:"currentView !== 'time'"}],staticClass:"el-date-picker__header",class:{ 'el-date-picker__header--bordered': _vm.currentView === 'year' || _vm.currentView === 'month' }},[_c('button',{staticClass:"el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.prevYear")},on:{"click":_vm.prevYear}}),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.prevMonth")},on:{"click":_vm.prevMonth}}),_c('span',{staticClass:"el-date-picker__header-label",attrs:{"role":"button"},on:{"click":_vm.showYearPicker}},[_vm._v(_vm._s(_vm.yearLabel))]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"el-date-picker__header-label",class:{ active: _vm.currentView === 'month' },attrs:{"role":"button"},on:{"click":_vm.showMonthPicker}},[_vm._v(_vm._s(_vm.t(("el.datepicker.month" + (_vm.month + 1)))))]),_c('button',{staticClass:"el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.nextYear")},on:{"click":_vm.nextYear}}),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.nextMonth")},on:{"click":_vm.nextMonth}})]),_c('div',{staticClass:"el-picker-panel__content"},[_c('date-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],attrs:{"selection-mode":_vm.selectionMode,"first-day-of-week":_vm.firstDayOfWeek,"value":new Date(_vm.value),"default-value":_vm.defaultValue ? new Date(_vm.defaultValue) : null,"date":_vm.date,"disabled-date":_vm.disabledDate},on:{"pick":_vm.handleDatePick}}),_c('year-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'year'),expression:"currentView === 'year'"}],attrs:{"value":new Date(_vm.value),"default-value":_vm.defaultValue ? new Date(_vm.defaultValue) : null,"date":_vm.date,"disabled-date":_vm.disabledDate},on:{"pick":_vm.handleYearPick}}),_c('month-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'month'),expression:"currentView === 'month'"}],attrs:{"value":new Date(_vm.value),"default-value":_vm.defaultValue ? new Date(_vm.defaultValue) : null,"date":_vm.date,"disabled-date":_vm.disabledDate},on:{"pick":_vm.handleMonthPick}})],1)])],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.footerVisible && _vm.currentView === 'date'),expression:"footerVisible && currentView === 'date'"}],staticClass:"el-picker-panel__footer"},[_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"size":"mini","type":"text"},on:{"click":_vm.changeToNow}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.now'))+"\n      ")]),_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"plain":"","size":"mini"},on:{"click":_vm.confirm}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.confirm'))+"\n      ")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51f33e72_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__ = __webpack_require__(216);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51f33e72_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(11);

var _locale = __webpack_require__(4);

var _locale2 = _interopRequireDefault(_locale);

var _time = __webpack_require__(30);

var _time2 = _interopRequireDefault(_time);

var _dateTable = __webpack_require__(47);

var _dateTable2 = _interopRequireDefault(_dateTable);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(15);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var advanceDate = function advanceDate(date, amount) {
  return new Date(new Date(date).getTime() + amount);
};

var calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), advanceDate(defaultValue, 24 * 60 * 60 * 1000)];
  } else {
    return [new Date(), advanceDate(Date.now(), 24 * 60 * 60 * 1000)];
  }
};

exports.default = {
  mixins: [_locale2.default],

  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting);
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + (this.leftDate.getMonth() + 1));
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + (this.rightDate.getMonth() + 1));
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    leftMonth: function leftMonth() {
      return this.leftDate.getMonth();
    },
    leftMonthDate: function leftMonthDate() {
      return this.leftDate.getDate();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear();
    },
    rightMonth: function rightMonth() {
      return this.rightDate.getMonth();
    },
    rightMonthDate: function rightMonthDate() {
      return this.rightDate.getDate();
    },
    minVisibleDate: function minVisibleDate() {
      return this.minDate ? (0, _util.formatDate)(this.minDate) : '';
    },
    maxVisibleDate: function maxVisibleDate() {
      return this.maxDate || this.minDate ? (0, _util.formatDate)(this.maxDate || this.minDate) : '';
    },
    minVisibleTime: function minVisibleTime() {
      return this.minDate ? (0, _util.formatDate)(this.minDate, 'HH:mm:ss') : '';
    },
    maxVisibleTime: function maxVisibleTime() {
      return this.maxDate || this.minDate ? (0, _util.formatDate)(this.maxDate || this.minDate, 'HH:mm:ss') : '';
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return this.format.replace('HH:mm', '').replace(':ss', '').trim();
      } else {
        return 'yyyy-MM-dd';
      }
    },
    timeFormat: function timeFormat() {
      if (this.format && this.format.indexOf('ss') === -1) {
        return 'HH:mm';
      } else {
        return 'HH:mm:ss';
      }
    },
    enableMonthArrow: function enableMonthArrow() {
      var nextMonth = (this.leftMonth + 1) % 12;
      var yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels && new Date(this.leftYear + yearOffset + '-' + (nextMonth + 1)) < new Date(this.rightYear + '-' + (this.rightMonth + 1));
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
    }
  },

  data: function data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: (0, _util.nextMonth)(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      showTime: false,
      shortcuts: '',
      visible: '',
      disabledDate: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: false,
      maxTimePickerVisible: false,
      format: '',
      arrowControl: false,
      unlinkPanels: false
    };
  },


  watch: {
    minDate: function minDate(val) {
      var _this = this;

      this.$nextTick(function () {
        if (_this.$refs.maxTimePicker && _this.maxDate && _this.maxDate < _this.minDate) {
          var format = 'HH:mm:ss';
          _this.$refs.maxTimePicker.selectableRange = [[(0, _util.parseDate)((0, _util.formatDate)(_this.minDate, format), format), (0, _util.parseDate)('23:59:59', format)]];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },
    maxDate: function maxDate(val) {
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },
    minTimePickerVisible: function minTimePickerVisible(val) {
      var _this2 = this;

      if (val) {
        this.$nextTick(function () {
          _this2.$refs.minTimePicker.date = _this2.minDate;
          _this2.$refs.minTimePicker.value = _this2.minDate;
          _this2.$refs.minTimePicker.adjustSpinners();
        });
      }
    },
    maxTimePickerVisible: function maxTimePickerVisible(val) {
      var _this3 = this;

      if (val) {
        this.$nextTick(function () {
          _this3.$refs.maxTimePicker.date = _this3.maxDate;
          _this3.$refs.maxTimePicker.value = _this3.maxDate;
          _this3.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = (0, _util.isDate)(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = (0, _util.isDate)(newVal[1]) ? new Date(newVal[1]) : null;
        // NOTE: currently, maxDate = minDate + 1 month
        //       should allow them to be set individually in the future
        if (this.minDate) {
          this.leftDate = this.minDate;
          this.rightDate = this.unlinkPanels && this.maxDate ? this.maxDate : (0, _util.nextMonth)(this.leftDate);
        } else {
          this.leftDate = calcDefaultValue(this.defaultValue)[0];
          this.rightDate = (0, _util.nextMonth)(this.leftDate);
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = calcDefaultValue(val),
            left = _calcDefaultValue[0],
            right = _calcDefaultValue[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels ? right : (0, _util.nextMonth)(this.leftDate);
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = calcDefaultValue(this.defaultValue)[0];
      this.rightDate = (0, _util.nextMonth)(this.leftDate);
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleDateInput: function handleDateInput(event, type) {
      var value = event.target.value;
      if (value.length !== this.dateFormat.length) return;
      var parsedValue = (0, _util.parseDate)(value, this.dateFormat);

      if (parsedValue) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(parsedValue))) {
          return;
        }
        if (type === 'min') {
          this.minDate = new Date(parsedValue);
          this.leftDate = new Date(parsedValue);
          this.rightDate = (0, _util.nextMonth)(this.leftDate);
        } else {
          this.maxDate = new Date(parsedValue);
          this.leftDate = (0, _util.prevMonth)(parsedValue);
          this.rightDate = new Date(parsedValue);
        }
      }
    },
    handleDateChange: function handleDateChange(event, type) {
      var value = event.target.value;
      var parsedValue = (0, _util.parseDate)(value, this.dateFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = (0, _util.modifyDate)(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
        } else {
          this.maxDate = (0, _util.modifyDate)(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
        }
      }
    },
    handleTimeChange: function handleTimeChange(event, type) {
      var value = event.target.value;
      var parsedValue = (0, _util.parseDate)(value, this.timeFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = (0, _util.modifyTime)(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
          this.$refs.minTimePicker.value = this.minDate;
          this.minTimePickerVisible = false;
        } else {
          this.maxDate = (0, _util.modifyTime)(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
          this.$refs.maxTimePicker.value = this.minDate;
          this.maxTimePickerVisible = false;
        }
      }
    },
    handleRangePick: function handleRangePick(val) {
      var _this4 = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.maxDate === val.maxDate && this.minDate === val.minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = val.maxDate;
      this.minDate = val.minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this4.maxDate = val.maxDate;
        _this4.minDate = val.minDate;
      }, 10);
      if (!close || this.showTime) return;
      this.handleConfirm();
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleMinTimePick: function handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = (0, _util.modifyTime)(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.minTimePickerVisible = visible;
      }

      if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },
    handleMaxTimePick: function handleMaxTimePick(value, visible, first) {
      if (this.maxDate && value) {
        this.maxDate = (0, _util.modifyTime)(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.maxTimePickerVisible = visible;
      }

      if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
        this.minDate = new Date(this.maxDate);
      }
    },
    leftPrevYear: function leftPrevYear() {
      this.leftDate = (0, _util.modifyDate)(this.leftDate, this.leftYear - 1, this.leftMonth, this.leftMonthDate);
      if (!this.unlinkPanels) {
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      }
    },
    leftNextYear: function leftNextYear() {
      this.leftDate = (0, _util.modifyDate)(this.leftDate, this.leftYear + 1, this.leftMonth, this.leftMonthDate);
    },
    leftPrevMonth: function leftPrevMonth() {
      this.leftDate = (0, _util.prevMonth)(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      }
    },
    leftNextMonth: function leftNextMonth() {
      this.leftDate = (0, _util.nextMonth)(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = (0, _util.modifyDate)(this.rightDate, this.rightYear - 1, this.rightMonth, this.rightMonthDate);
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = (0, _util.modifyDate)(this.leftDate, this.leftYear + 1, this.leftMonth, this.leftMonthDate);
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      } else {
        this.rightDate = (0, _util.modifyDate)(this.rightDate, this.rightYear + 1, this.rightMonth, this.rightMonthDate);
      }
    },
    rightPrevMonth: function rightPrevMonth() {
      this.rightDate = (0, _util.prevMonth)(this.rightDate);
    },
    rightNextMonth: function rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = (0, _util.nextMonth)(this.leftDate);
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      } else {
        this.rightDate = (0, _util.nextMonth)(this.rightDate);
      }
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.$emit('pick', [this.minDate, this.maxDate], visible);
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && (0, _util.isDate)(value[0]) && (0, _util.isDate)(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    }
  },

  components: { TimePicker: _time2.default, DateTable: _dateTable2.default, ElInput: _input2.default, ElButton: _button2.default }
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-picker-panel el-date-range-picker el-popper",class:[{
      'has-sidebar': _vm.$slots.sidebar || _vm.shortcuts,
      'has-time': _vm.showTime
    }, _vm.popperClass]},[_c('div',{staticClass:"el-picker-panel__body-wrapper"},[_vm._t("sidebar"),(_vm.shortcuts)?_c('div',{staticClass:"el-picker-panel__sidebar"},_vm._l((_vm.shortcuts),function(shortcut){return _c('button',{staticClass:"el-picker-panel__shortcut",attrs:{"type":"button"},on:{"click":function($event){_vm.handleShortcutClick(shortcut)}}},[_vm._v(_vm._s(shortcut.text))])})):_vm._e(),_c('div',{staticClass:"el-picker-panel__body"},[(_vm.showTime)?_c('div',{staticClass:"el-date-range-picker__time-header"},[_c('span',{staticClass:"el-date-range-picker__editors-wrap"},[_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{ref:"minInput",staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.startDate'),"value":_vm.minVisibleDate},nativeOn:{"input":function($event){_vm.handleDateInput($event, 'min')},"change":function($event){_vm.handleDateChange($event, 'min')}}})],1),_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.startTime'),"value":_vm.minVisibleTime},on:{"focus":function($event){_vm.minTimePickerVisible = !_vm.minTimePickerVisible}},nativeOn:{"change":function($event){_vm.handleTimeChange($event, 'min')}}}),_c('time-picker',{ref:"minTimePicker",attrs:{"time-arrow-control":_vm.arrowControl,"visible":_vm.minTimePickerVisible},on:{"pick":_vm.handleMinTimePick,"mounted":function($event){_vm.$refs.minTimePicker.format=_vm.timeFormat}}})],1)]),_c('span',{staticClass:"el-icon-arrow-right"}),_c('span',{staticClass:"el-date-range-picker__editors-wrap is-right"},[_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.endDate'),"value":_vm.maxVisibleDate,"readonly":!_vm.minDate},nativeOn:{"input":function($event){_vm.handleDateInput($event, 'max')},"change":function($event){_vm.handleDateChange($event, 'max')}}})],1),_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{ref:"maxInput",staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.endTime'),"value":_vm.maxVisibleTime,"readonly":!_vm.minDate},on:{"focus":function($event){_vm.minDate && (_vm.maxTimePickerVisible = !_vm.maxTimePickerVisible)}},nativeOn:{"change":function($event){_vm.handleTimeChange($event, 'max')}}}),_c('time-picker',{ref:"maxTimePicker",attrs:{"time-arrow-control":_vm.arrowControl,"visible":_vm.maxTimePickerVisible},on:{"pick":_vm.handleMaxTimePick,"mounted":function($event){_vm.$refs.maxTimePicker.format=_vm.timeFormat}}})],1)])]):_vm._e(),_c('div',{staticClass:"el-picker-panel__content el-date-range-picker__content is-left"},[_c('div',{staticClass:"el-date-range-picker__header"},[_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-left",attrs:{"type":"button"},on:{"click":_vm.leftPrevYear}}),_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-left",attrs:{"type":"button"},on:{"click":_vm.leftPrevMonth}}),(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-right",class:{ 'is-disabled': !_vm.enableYearArrow },attrs:{"type":"button","disabled":!_vm.enableYearArrow},on:{"click":_vm.leftNextYear}}):_vm._e(),(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-right",class:{ 'is-disabled': !_vm.enableMonthArrow },attrs:{"type":"button","disabled":!_vm.enableMonthArrow},on:{"click":_vm.leftNextMonth}}):_vm._e(),_c('div',[_vm._v(_vm._s(_vm.leftLabel))])]),_c('date-table',{attrs:{"selection-mode":"range","date":_vm.leftDate,"default-value":_vm.defaultValue,"min-date":_vm.minDate,"max-date":_vm.maxDate,"range-state":_vm.rangeState,"disabled-date":_vm.disabledDate,"first-day-of-week":_vm.firstDayOfWeek},on:{"changerange":_vm.handleChangeRange,"pick":_vm.handleRangePick}})],1),_c('div',{staticClass:"el-picker-panel__content el-date-range-picker__content is-right"},[_c('div',{staticClass:"el-date-range-picker__header"},[(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-left",class:{ 'is-disabled': !_vm.enableYearArrow },attrs:{"type":"button","disabled":!_vm.enableYearArrow},on:{"click":_vm.rightPrevYear}}):_vm._e(),(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-left",class:{ 'is-disabled': !_vm.enableMonthArrow },attrs:{"type":"button","disabled":!_vm.enableMonthArrow},on:{"click":_vm.rightPrevMonth}}):_vm._e(),_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-right",attrs:{"type":"button"},on:{"click":_vm.rightNextYear}}),_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-right",attrs:{"type":"button"},on:{"click":_vm.rightNextMonth}}),_c('div',[_vm._v(_vm._s(_vm.rightLabel))])]),_c('date-table',{attrs:{"selection-mode":"range","date":_vm.rightDate,"default-value":_vm.defaultValue,"min-date":_vm.minDate,"max-date":_vm.maxDate,"range-state":_vm.rangeState,"disabled-date":_vm.disabledDate,"first-day-of-week":_vm.firstDayOfWeek},on:{"changerange":_vm.handleChangeRange,"pick":_vm.handleRangePick}})],1)])],2),(_vm.showTime)?_c('div',{staticClass:"el-picker-panel__footer"},[_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"size":"mini","type":"text"},on:{"click":_vm.handleClear}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.clear'))+"\n      ")]),_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"plain":"","size":"mini","disabled":_vm.btnDisabled},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.confirm'))+"\n      ")])],1):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(2);

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (new Date() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = new Date();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66b1c70c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(29);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66b1c70c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _clickoutside = __webpack_require__(10);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _util = __webpack_require__(11);

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _focus = __webpack_require__(13);

var _focus2 = _interopRequireDefault(_focus);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _merge = __webpack_require__(9);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var NewPopper = {
  props: {
    appendToBody: _vuePopper2.default.props.appendToBody,
    offset: _vuePopper2.default.props.offset,
    boundariesPadding: _vuePopper2.default.props.boundariesPadding
  },
  methods: _vuePopper2.default.methods,
  data: function data() {
    return (0, _merge2.default)({ visibleArrow: true }, _vuePopper2.default.data);
  },

  beforeDestroy: _vuePopper2.default.beforeDestroy
};

var DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
};
var HAVE_TRIGGER_TYPES = ['date', 'datetime', 'time', 'time-select', 'week', 'month', 'year', 'daterange', 'timerange', 'datetimerange'];
var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
  return (0, _util.formatDate)(value, format);
};
var DATE_PARSER = function DATE_PARSER(text, format) {
  return (0, _util.parseDate)(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    var start = value[0];
    var end = value[1];

    if (start && end) {
      return [(0, _util.formatDate)(start, format), (0, _util.formatDate)(end, format)];
    }
  }
  return '';
};
var RANGE_PARSER = function RANGE_PARSER(array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }
  if (array.length === 2) {
    var range1 = array[0];
    var range2 = array[1];

    return [(0, _util.parseDate)(range1, format), (0, _util.parseDate)(range2, format)];
  }
  return [];
};
var TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      if (text === undefined || text === '') return null;
      return text;
    }
  },
  week: {
    formatter: function formatter(value, format) {
      var week = (0, _util.getWeekNumber)(value);
      var month = value.getMonth();
      var trueDate = new Date(value);
      if (week === 1 && month === 11) {
        trueDate.setHours(0, 0, 0, 0);
        trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
      }
      var date = (0, _util.formatDate)(trueDate, format);

      date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week);
      return date;
    },
    parser: function parser(text) {
      var array = (text || '').split('w');
      if (array.length === 2) {
        var year = Number(array[0]);
        var month = Number(array[1]);

        if (!isNaN(year) && !isNaN(month) && month < 54) {
          return text;
        }
      }
      return null;
    }
  },
  date: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  datetime: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  month: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  year: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  number: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      var result = Number(text);

      if (!isNaN(text)) {
        return result;
      } else {
        return null;
      }
    }
  }
};
var PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
};

var parseAsFormatAndType = function parseAsFormatAndType(value, customFormat, type) {
  var rangeSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';

  if (!value) return null;
  var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;
  var format = customFormat || DEFAULT_FORMATS[type];
  return parser(value, format, rangeSeparator);
};

var formatAsFormatAndType = function formatAsFormatAndType(value, customFormat, type) {
  if (!value) return null;
  var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;
  var format = customFormat || DEFAULT_FORMATS[type];
  return formatter(value, format);
};

// only considers date-picker's value: Date or [Date, Date]
var valueEquals = function valueEquals(a, b) {
  var aIsArray = a instanceof Array;
  var bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    return new Date(a[0]).getTime() === new Date(b[0]).getTime() && new Date(a[1]).getTime() === new Date(b[1]).getTime();
  }
  if (!aIsArray && !bIsArray) {
    return new Date(a).getTime() === new Date(b).getTime();
  }
  return false;
};

var isString = function isString(val) {
  return typeof val === 'string' || val instanceof String;
};

var validator = function validator(val) {
  // either: String, Array of String, null / undefined
  return val === null || val === undefined || isString(val) || Array.isArray(val) && val.length === 2 && val.every(isString);
};

exports.default = {
  mixins: [_emitter2.default, NewPopper, (0, _focus2.default)('reference')],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    name: {
      default: '',
      validator: validator
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator: validator
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean
  },

  components: { ElInput: _input2.default },

  directives: { Clickoutside: _clickoutside2.default },

  data: function data() {
    return {
      pickerVisible: false,
      showClose: false,
      userInput: null,
      valueOnOpen: null, // value when picker opens, used to determine whether to emit change
      unwatchPickerOptions: null
    };
  },


  watch: {
    pickerVisible: function pickerVisible(val) {
      if (this.readonly || this.disabled) return;
      if (val) {
        this.showPicker();
        this.valueOnOpen = this.value;
      } else {
        this.hidePicker();
        this.emitChange(this.value);
        // flush user input if it is parsable
        // this.displayValue here is not a typo, it merges text for both panels in range mode
        var parsedValue = this.parseString(this.displayValue);
        if (this.userInput && parsedValue && this.isValidValue(parsedValue)) {
          this.userInput = null;
        }
        this.dispatch('ElFormItem', 'el.form.blur');
        this.$emit('blur', this);
        this.blur();
      }
    },

    parsedValue: {
      immediate: true,
      handler: function handler(val) {
        if (this.picker) {
          this.picker.value = val;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      // NOTE: should eventually move to jsx style picker + panel ?
      if (this.picker) {
        this.picker.defaultValue = val;
      }
    }
  },

  computed: {
    ranged: function ranged() {
      return this.type.indexOf('range') > -1;
    },
    reference: function reference() {
      var reference = this.$refs.reference;
      return reference.$el || reference;
    },
    refInput: function refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },
    valueIsEmpty: function valueIsEmpty() {
      var val = this.value;
      if (Array.isArray(val)) {
        for (var i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else {
        if (val) {
          return false;
        }
      }
      return true;
    },
    triggerClass: function triggerClass() {
      return this.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date';
    },
    selectionMode: function selectionMode() {
      if (this.type === 'week') {
        return 'week';
      } else if (this.type === 'month') {
        return 'month';
      } else if (this.type === 'year') {
        return 'year';
      }

      return 'day';
    },
    haveTrigger: function haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },
    displayValue: function displayValue() {
      var formattedValue = formatAsFormatAndType(this.parsedValue, this.format, this.type, this.rangeSeparator);
      if (Array.isArray(this.userInput)) {
        return [this.userInput[0] || formattedValue && formattedValue[0] || '', this.userInput[1] || formattedValue && formattedValue[1] || ''];
      } else {
        return this.userInput !== null ? this.userInput : formattedValue || '';
      }
    },
    parsedValue: function parsedValue() {
      var isParsed = (0, _util.isDateObject)(this.value) || Array.isArray(this.value) && this.value.every(_util.isDateObject);
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(this.value, this.valueFormat, this.type, this.rangeSeparator) || this.value;
      } else {
        return this.value;
      }
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    pickerSize: function pickerSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  created: function created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;
  },


  methods: {
    blur: function blur() {
      this.refInput.forEach(function (input) {
        return input.blur();
      });
    },


    // {parse, formatTo} Value deals maps component value with internal Date
    parseValue: function parseValue(value) {
      var isParsed = (0, _util.isDateObject)(value) || Array.isArray(value) && value.every(_util.isDateObject);
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(value, this.valueFormat, this.type, this.rangeSeparator) || value;
      } else {
        return value;
      }
    },
    formatToValue: function formatToValue(date) {
      var isFormattable = (0, _util.isDateObject)(date) || Array.isArray(date) && date.every(_util.isDateObject);
      if (this.valueFormat && isFormattable) {
        return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
      } else {
        return date;
      }
    },


    // {parse, formatTo} String deals with user input
    parseString: function parseString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return parseAsFormatAndType(value, this.format, type);
    },
    formatToString: function formatToString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return formatAsFormatAndType(value, this.format, type);
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.readonly || this.disabled) return;
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },
    handleChange: function handleChange() {
      if (this.userInput) {
        var value = this.parseString(this.displayValue);
        if (value) {
          this.picker.value = value;
          if (this.isValidValue(value)) {
            this.emitInput(value);
            this.userInput = null;
          }
        }
      }
    },
    handleStartInput: function handleStartInput(event) {
      if (this.userInput) {
        this.userInput = [event.target.value, this.userInput[1]];
      } else {
        this.userInput = [event.target.value, null];
      }
    },
    handleEndInput: function handleEndInput(event) {
      if (this.userInput) {
        this.userInput = [this.userInput[0], event.target.value];
      } else {
        this.userInput = [null, event.target.value];
      }
    },
    handleStartChange: function handleStartChange(event) {
      var value = this.parseString(this.userInput && this.userInput[0]);
      if (value) {
        this.userInput = [this.formatToString(value), this.displayValue[1]];
        var newValue = [value, this.picker.value && this.picker.value[1]];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleEndChange: function handleEndChange(event) {
      var value = this.parseString(this.userInput && this.userInput[1]);
      if (value) {
        this.userInput = [this.displayValue[0], this.formatToString(value)];
        var newValue = [this.picker.value && this.picker.value[0], value];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleClickIcon: function handleClickIcon(event) {
      if (this.readonly || this.disabled) return;
      if (this.showClose) {
        event.stopPropagation();
        this.emitInput(null);
        this.emitChange(null);
        this.showClose = false;
        if (this.picker && typeof this.picker.handleClear === 'function') {
          this.picker.handleClear();
        }
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },
    handleClose: function handleClose() {
      this.pickerVisible = false;
    },
    handleFocus: function handleFocus() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    handleKeydown: function handleKeydown(event) {
      var _this = this;

      var keyCode = event.keyCode;

      // ESC
      if (keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      // Tab
      if (keyCode === 9) {
        if (!this.ranged) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
          event.stopPropagation();
        } else {
          // user may change focus between two input
          setTimeout(function () {
            if (_this.refInput.indexOf(document.activeElement) === -1) {
              _this.pickerVisible = false;
              _this.blur();
              event.stopPropagation();
            }
          }, 0);
        }
        return;
      }

      // Enter
      if (keyCode === 13 && this.displayValue) {
        var value = this.parseString(this.displayValue);
        if (this.isValidValue(value)) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
        }
        event.stopPropagation();
        return;
      }

      // if user is typing, do not let picker handle key input
      if (this.userInput) {
        event.stopPropagation();
        return;
      }

      // delegate other keys to panel
      if (this.picker && this.picker.handleKeydown) {
        this.picker.handleKeydown(event);
      }
    },
    handleRangeClick: function handleRangeClick() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    hidePicker: function hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },
    showPicker: function showPicker() {
      var _this2 = this;

      if (this.$isServer) return;
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;

      this.updatePopper();

      this.picker.value = this.parsedValue;
      this.picker.resetView && this.picker.resetView();

      this.$nextTick(function () {
        _this2.picker.adjustSpinners && _this2.picker.adjustSpinners();
      });
    },
    mountPicker: function mountPicker() {
      var _this3 = this;

      this.picker = new _vue2.default(this.panel).$mount();
      this.picker.defaultValue = this.defaultValue;
      this.picker.popperClass = this.popperClass;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
      this.picker.selectionMode = this.selectionMode;
      this.picker.unlinkPanels = this.unlinkPanels;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
      if (this.format) {
        this.picker.format = this.format;
      }

      var updateOptions = function updateOptions() {
        var options = _this3.pickerOptions;

        if (options && options.selectableRange) {
          (function () {
            var ranges = options.selectableRange;
            var parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
            var format = DEFAULT_FORMATS.timerange;

            ranges = Array.isArray(ranges) ? ranges : [ranges];
            _this3.picker.selectableRange = ranges.map(function (range) {
              return parser(range, format, _this3.rangeSeparator);
            });
          })();
        }

        for (var option in options) {
          if (options.hasOwnProperty(option) &&
          // 忽略 time-picker 的该配置项
          option !== 'selectableRange') {
            _this3.picker[option] = options[option];
          }
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', function () {
        return updateOptions();
      }, { deep: true });

      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', function () {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _this3.userInput = null;
        _this3.pickerVisible = _this3.picker.visible = visible;
        _this3.emitInput(date);
        _this3.picker.resetView && _this3.picker.resetView();
      });

      this.picker.$on('select-range', function (start, end, pos) {
        if (_this3.refInput.length === 0) return;
        if (!pos || pos === 'min') {
          _this3.refInput[0].setSelectionRange(start, end);
          _this3.refInput[0].focus();
        } else if (pos === 'max') {
          _this3.refInput[1].setSelectionRange(start, end);
          _this3.refInput[1].focus();
        }
      });
    },
    unmountPicker: function unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    },
    emitChange: function emitChange(val) {
      this.$emit('change', val);
      this.dispatch('ElFormItem', 'el.form.change', val);
      this.valueOnOpen = val;
    },
    emitInput: function emitInput(val) {
      var formatted = this.formatToValue(val);
      if (!valueEquals(this.value, formatted)) {
        this.$emit('input', formatted);
      }
    },
    isValidValue: function isValidValue(value) {
      if (!this.picker) {
        this.mountPicker();
      }
      if (this.picker.isValidValue) {
        return value && this.picker.isValidValue(value);
      } else {
        return true;
      }
    }
  }
};

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/date");

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.ranged)?_c('el-input',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],ref:"reference",staticClass:"el-date-editor",class:'el-date-editor--' + _vm.type,attrs:{"readonly":!_vm.editable || _vm.readonly,"disabled":_vm.disabled,"size":_vm.pickerSize,"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"value":_vm.displayValue,"validateEvent":false,"prefix-icon":_vm.triggerClass},on:{"focus":_vm.handleFocus,"input":function (value) { return _vm.userInput = value; }},nativeOn:{"keydown":function($event){_vm.handleKeydown($event)},"mouseenter":function($event){_vm.handleMouseEnter($event)},"mouseleave":function($event){_vm.showClose = false},"change":function($event){_vm.handleChange($event)}}},[(_vm.haveTrigger)?_c('i',{staticClass:"el-input__icon",class:{ 'el-icon-circle-close': _vm.showClose },attrs:{"slot":"suffix"},on:{"click":_vm.handleClickIcon},slot:"suffix"}):_vm._e()]):_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],ref:"reference",staticClass:"el-date-editor el-range-editor el-input__inner",class:[
    'el-date-editor--' + _vm.type,
    _vm.pickerSize ? ("el-range-editor--" + _vm.pickerSize) : '',
    _vm.disabled ? 'is-disabled' : '',
    _vm.pickerVisible ? 'is-active' : ''
  ],on:{"click":_vm.handleRangeClick,"mouseenter":_vm.handleMouseEnter,"mouseleave":function($event){_vm.showClose = false},"keydown":_vm.handleKeydown}},[_c('i',{class:['el-input__icon', 'el-range__icon', _vm.triggerClass]}),_c('input',{staticClass:"el-range-input",attrs:{"placeholder":_vm.startPlaceholder,"disabled":_vm.disabled,"id":_vm.id && _vm.id[0],"readonly":!_vm.editable || _vm.readonly,"name":_vm.name && _vm.name[0]},domProps:{"value":_vm.displayValue && _vm.displayValue[0]},on:{"input":_vm.handleStartInput,"change":_vm.handleStartChange,"focus":_vm.handleFocus}}),_c('span',{staticClass:"el-range-separator"},[_vm._v(_vm._s(_vm.rangeSeparator))]),_c('input',{staticClass:"el-range-input",attrs:{"placeholder":_vm.endPlaceholder,"disabled":_vm.disabled,"id":_vm.id && _vm.id[1],"readonly":!_vm.editable || _vm.readonly,"name":_vm.name && _vm.name[1]},domProps:{"value":_vm.displayValue && _vm.displayValue[1]},on:{"input":_vm.handleEndInput,"change":_vm.handleEndChange,"focus":_vm.handleFocus}}),(_vm.haveTrigger)?_c('i',{staticClass:"el-input__icon el-range__close-icon",class:{ 'el-icon-circle-close': _vm.showClose },on:{"click":_vm.handleClickIcon}}):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee915b14_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__ = __webpack_require__(43);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee915b14_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72da32d8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__ = __webpack_require__(42);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72da32d8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(11);

var _locale = __webpack_require__(4);

var _locale2 = _interopRequireDefault(_locale);

var _timeSpinner = __webpack_require__(31);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_locale2.default],

  components: {
    TimeSpinner: _timeSpinner2.default
  },

  props: {
    visible: Boolean,
    timeArrowControl: Boolean
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.oldValue = this.value;
        this.$nextTick(function () {
          return _this.$refs.spinner.emitSelectRange('hours');
        });
      } else {
        this.needInitAdjust = true;
      }
    },
    value: function value(newVal) {
      var _this2 = this;

      var date = void 0;
      if (newVal instanceof Date) {
        date = (0, _util.limitTimeRange)(newVal, this.selectableRange, this.format);
      } else if (!newVal) {
        date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }

      this.date = date;
      if (this.visible && this.needInitAdjust) {
        this.$nextTick(function (_) {
          return _this2.adjustSpinners();
        });
        this.needInitAdjust = false;
      }
    },
    selectableRange: function selectableRange(val) {
      this.$refs.spinner.selectableRange = val;
    },
    defaultValue: function defaultValue(val) {
      if (!(0, _util.isDate)(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    }
  },

  data: function data() {
    return {
      popperClass: '',
      format: 'HH:mm:ss',
      value: '',
      defaultValue: null,
      date: new Date(),
      oldValue: new Date(),
      selectableRange: [],
      selectionRange: [0, 2],
      disabled: false,
      arrowControl: false,
      needInitAdjust: true
    };
  },


  computed: {
    showSeconds: function showSeconds() {
      return (this.format || '').indexOf('ss') !== -1;
    },
    useArrow: function useArrow() {
      return this.arrowControl || this.timeArrowControl || false;
    },
    amPmMode: function amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A';
      if ((this.format || '').indexOf('a') !== -1) return 'a';
      return '';
    }
  },

  methods: {
    handleCancel: function handleCancel() {
      this.$emit('pick', this.oldValue, false);
    },
    handleChange: function handleChange(date) {
      // this.visible avoids edge cases, when use scrolls during panel closing animation
      if (this.visible) {
        this.date = (0, _util.clearMilliseconds)(date);
        // if date is out of range, do not emit
        if (this.isValidValue(this.date)) {
          this.$emit('pick', this.date, true);
        }
      }
    },
    setSelectionRange: function setSelectionRange(start, end) {
      this.$emit('select-range', start, end);
      this.selectionRange = [start, end];
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var first = arguments[1];

      if (first) return;
      var date = (0, _util.clearMilliseconds)((0, _util.limitTimeRange)(this.date, this.selectableRange, this.format));
      this.$emit('pick', date, visible, first);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        var step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        var _step = mapping[keyCode];
        this.$refs.spinner.scrollDown(_step);
        event.preventDefault();
        return;
      }
    },
    isValidValue: function isValidValue(date) {
      return (0, _util.timeWithinRange)(date, this.selectableRange, this.format);
    },
    adjustSpinners: function adjustSpinners() {
      return this.$refs.spinner.adjustSpinners();
    },
    changeSelectionRange: function changeSelectionRange(step) {
      var list = [0, 3].concat(this.showSeconds ? [6] : []);
      var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
      var index = list.indexOf(this.selectionRange[0]);
      var next = (index + step + list.length) % list.length;
      this.$refs.spinner.emitSelectRange(mapping[next]);
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      return _this3.handleConfirm(true, true);
    });
    this.$emit('mounted');
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
//
//
//
//
//

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(11);

var _scrollbar = __webpack_require__(18);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _repeatClick = __webpack_require__(23);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { ElScrollbar: _scrollbar2.default },

  directives: {
    repeatClick: _repeatClick2.default
  },

  props: {
    date: {},
    defaultValue: {}, // reserved for future use
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    }
  },

  computed: {
    hours: function hours() {
      return this.date.getHours();
    },
    minutes: function minutes() {
      return this.date.getMinutes();
    },
    seconds: function seconds() {
      return this.date.getSeconds();
    },
    hoursList: function hoursList() {
      return (0, _util.getRangeHours)(this.selectableRange);
    },
    arrowHourList: function arrowHourList() {
      var hours = this.hours;
      return [hours > 0 ? hours - 1 : undefined, hours, hours < 23 ? hours + 1 : undefined];
    },
    arrowMinuteList: function arrowMinuteList() {
      var minutes = this.minutes;
      return [minutes > 0 ? minutes - 1 : undefined, minutes, minutes < 59 ? minutes + 1 : undefined];
    },
    arrowSecondList: function arrowSecondList() {
      var seconds = this.seconds;
      return [seconds > 0 ? seconds - 1 : undefined, seconds, seconds < 59 ? seconds + 1 : undefined];
    }
  },

  data: function data() {
    return {
      selectableRange: [],
      currentScrollbar: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      !_this.arrowControl && _this.bindScrollEvent();
    });
  },


  methods: {
    increase: function increase() {
      this.scrollDown(1);
    },
    decrease: function decrease() {
      this.scrollDown(-1);
    },
    modifyDateField: function modifyDateField(type, value) {
      switch (type) {
        case 'hours':
          this.$emit('change', (0, _util.modifyTime)(this.date, value, this.minutes, this.seconds));break;
        case 'minutes':
          this.$emit('change', (0, _util.modifyTime)(this.date, this.hours, value, this.seconds));break;
        case 'seconds':
          this.$emit('change', (0, _util.modifyTime)(this.date, this.hours, this.minutes, value));break;
      }
    },
    handleClick: function handleClick(type, _ref) {
      var value = _ref.value,
          disabled = _ref.disabled;

      if (!disabled) {
        this.modifyDateField(type, value);
        this.emitSelectRange(type);
        this.adjustSpinner(type, value);
      }
    },
    emitSelectRange: function emitSelectRange(type) {
      if (type === 'hours') {
        this.$emit('select-range', 0, 2);
      } else if (type === 'minutes') {
        this.$emit('select-range', 3, 5);
      } else if (type === 'seconds') {
        this.$emit('select-range', 6, 8);
      }
      this.currentScrollbar = type;
    },
    bindScrollEvent: function bindScrollEvent() {
      var _this2 = this;

      var bindFuntion = function bindFuntion(type) {
        _this2.$refs[type].wrap.onscroll = function (e) {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
          _this2.handleScroll(type, e);
        };
      };
      bindFuntion('hours');
      bindFuntion('minutes');
      bindFuntion('seconds');
    },
    handleScroll: function handleScroll(type) {
      var value = Math.min(Math.floor((this.$refs[type].wrap.scrollTop - 80) / 32 + 3), type === 'hours' ? 23 : 59);
      this.modifyDateField(type, value);
    },


    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    adjustSpinners: function adjustSpinners() {
      this.adjustSpinner('hours', this.hours);
      this.adjustSpinner('minutes', this.minutes);
      this.adjustSpinner('seconds', this.seconds);
    },
    adjustCurrentSpinner: function adjustCurrentSpinner(type) {
      this.adjustSpinner(type, this[type]);
    },
    adjustSpinner: function adjustSpinner(type, value) {
      if (this.arrowControl) return;
      var el = this.$refs[type].wrap;
      if (el) {
        el.scrollTop = Math.max(0, (value - 2.5) * 32 + 80);
      }
    },
    scrollDown: function scrollDown(step) {
      if (!this.currentScrollbar) {
        this.emitSelectRange('hours');
      }

      var label = this.currentScrollbar;
      var hoursList = this.hoursList;
      var now = this[label];

      if (this.currentScrollbar === 'hours') {
        var total = Math.abs(step);
        step = step > 0 ? 1 : -1;
        var length = hoursList.length;
        while (length-- && total) {
          now = (now + step + hoursList.length) % hoursList.length;
          if (hoursList[now]) {
            continue;
          }
          total--;
        }
        if (hoursList[now]) return;
      } else {
        now = (now + step + 60) % 60;
      }

      this.modifyDateField(label, now);
      this.adjustSpinner(label, now);
    },
    amPm: function amPm(hour) {
      var shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
      if (!shouldShowAmPm) return '';
      var isCapital = this.amPmMode === 'A';
      var content = hour < 12 ? ' am' : ' pm';
      if (isCapital) content = content.toUpperCase();
      return content;
    }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-time-spinner",class:{ 'has-seconds': _vm.showSeconds }},[(!_vm.arrowControl)?[_c('el-scrollbar',{ref:"hours",staticClass:"el-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"el-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('hours')},"mousemove":function($event){_vm.adjustCurrentSpinner('hours')}}},_vm._l((_vm.hoursList),function(disabled,hour){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': hour === _vm.hours, 'disabled': disabled },on:{"click":function($event){_vm.handleClick('hours', { value: hour, disabled: disabled })}}},[_vm._v(_vm._s(('0' + (_vm.amPmMode ? (hour % 12 || 12) : hour )).slice(-2))+_vm._s(_vm.amPm(hour)))])})),_c('el-scrollbar',{ref:"minutes",staticClass:"el-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"el-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('minutes')},"mousemove":function($event){_vm.adjustCurrentSpinner('minutes')}}},_vm._l((60),function(minute,key){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': key === _vm.minutes },on:{"click":function($event){_vm.handleClick('minutes', { value: key, disabled: false })}}},[_vm._v(_vm._s(('0' + key).slice(-2)))])})),_c('el-scrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSeconds),expression:"showSeconds"}],ref:"seconds",staticClass:"el-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"el-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('seconds')},"mousemove":function($event){_vm.adjustCurrentSpinner('seconds')}}},_vm._l((60),function(second,key){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': key === _vm.seconds },on:{"click":function($event){_vm.handleClick('seconds', { value: key, disabled: false })}}},[_vm._v(_vm._s(('0' + key).slice(-2)))])}))]:_vm._e(),(_vm.arrowControl)?[_c('div',{staticClass:"el-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('hours')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-time-spinner__arrow el-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-time-spinner__arrow el-icon-arrow-down"}),_c('ul',{ref:"hours",staticClass:"el-time-spinner__list"},_vm._l((_vm.arrowHourList),function(hour){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': hour === _vm.hours, 'disabled': _vm.hoursList[hour] }},[_vm._v(_vm._s(hour === undefined ? '' : ('0' + (_vm.amPmMode ? (hour % 12 || 12) : hour )).slice(-2) + _vm.amPm(hour)))])}))]),_c('div',{staticClass:"el-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('minutes')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-time-spinner__arrow el-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-time-spinner__arrow el-icon-arrow-down"}),_c('ul',{ref:"minutes",staticClass:"el-time-spinner__list"},_vm._l((_vm.arrowMinuteList),function(minute){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': minute === _vm.minutes }},[_vm._v("\n          "+_vm._s(minute === undefined ? '' : ('0' + minute).slice(-2))+"\n        ")])}))]),(_vm.showSeconds)?_c('div',{staticClass:"el-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('seconds')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-time-spinner__arrow el-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-time-spinner__arrow el-icon-arrow-down"}),_c('ul',{ref:"seconds",staticClass:"el-time-spinner__list"},_vm._l((_vm.arrowSecondList),function(second){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': second === _vm.seconds }},[_vm._v("\n          "+_vm._s(second === undefined ? '' : ('0' + second).slice(-2))+"\n        ")])}))]):_vm._e()]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-time-panel el-popper",class:_vm.popperClass},[_c('div',{staticClass:"el-time-panel__content",class:{ 'has-seconds': _vm.showSeconds }},[_c('time-spinner',{ref:"spinner",attrs:{"arrow-control":_vm.useArrow,"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"date":_vm.date},on:{"change":_vm.handleChange,"select-range":_vm.setSelectionRange}})],1),_c('div',{staticClass:"el-time-panel__footer"},[_c('button',{staticClass:"el-time-panel__btn cancel",attrs:{"type":"button"},on:{"click":_vm.handleCancel}},[_vm._v(_vm._s(_vm.t('el.datepicker.cancel')))]),_c('button',{staticClass:"el-time-panel__btn",class:{confirm: !_vm.disabled},attrs:{"type":"button"},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.confirm')))])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dd30f6e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__ = __webpack_require__(212);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dd30f6e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/merge");

/***/ })

/******/ });