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
/******/ 	return __webpack_require__(__webpack_require__.s = 410);
/******/ })
/************************************************************************/
/******/ ({

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _slideout = __webpack_require__(411);

var _slideout2 = _interopRequireDefault(_slideout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_slideout2.default.install = function (Vue) {
  Vue.component(_slideout2.default.name, _slideout2.default);
};

exports.default = _slideout2.default;

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var Slideout = __webpack_require__(412);

exports.default = {
  name: 'ElSlideout',
  data: function data() {
    return {
      slideout: null
    };
  },

  props: {
    panel: { default: '#panel' },
    menu: { default: '#menu' },
    padding: { default: 256 },
    tolerance: { default: 70 },
    touch: { default: true },
    easing: { default: 'ease' },
    side: { default: 'left' },
    duration: { default: 300 },
    toggleSelectors: {
      default: function _default() {
        return [];
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.slideout = new Slideout({
      'panel': document.querySelector(this.panel),
      'menu': document.querySelector(this.menu),
      'padding': this.padding,
      'tolerance': this.tolerance,
      'touch': this.touch,
      'easing': this.easing,
      'side': this.side,
      'duration': this.duration
    });
    this.toggleSelectors.forEach(function (selector) {
      document.querySelector(selector).addEventListener('click', function () {
        _this.slideout.toggle();
      });
    });
    var events = ['beforeclose', 'close', 'beforeopen', 'open', 'translatestart', 'translate', 'translateend'];
    events.forEach(function (event) {
      _this.slideout.on(event, function (data) {
        _this.$emit('on-' + event, data);
      });
      _this.slideout.once(event, function (data) {
        _this.$emit('once-' + event, data);
      });
    });
  },
  render: function render(h) {
    return h('div', this.$slots.default);
  }
};

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = require("slideout");

/***/ })

/******/ });