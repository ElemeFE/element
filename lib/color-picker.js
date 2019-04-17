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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/main.vue?vue&type=template&id=55c8ade7&
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
          value: _vm.hide,
          expression: "hide"
        }
      ],
      class: [
        "el-color-picker",
        _vm.colorDisabled ? "is-disabled" : "",
        _vm.colorSize ? "el-color-picker--" + _vm.colorSize : ""
      ]
    },
    [
      _vm.colorDisabled
        ? _c("div", { staticClass: "el-color-picker__mask" })
        : _vm._e(),
      _c(
        "div",
        {
          staticClass: "el-color-picker__trigger",
          on: { click: _vm.handleTrigger }
        },
        [
          _c(
            "span",
            {
              staticClass: "el-color-picker__color",
              class: { "is-alpha": _vm.showAlpha }
            },
            [
              _c("span", {
                staticClass: "el-color-picker__color-inner",
                style: {
                  backgroundColor: _vm.displayedColor
                }
              }),
              !_vm.value && !_vm.showPanelColor
                ? _c("span", {
                    staticClass: "el-color-picker__empty el-icon-close"
                  })
                : _vm._e()
            ]
          ),
          _c("span", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.value || _vm.showPanelColor,
                expression: "value || showPanelColor"
              }
            ],
            staticClass: "el-color-picker__icon el-icon-arrow-down"
          })
        ]
      ),
      _c("picker-dropdown", {
        ref: "dropdown",
        class: ["el-color-picker__panel", _vm.popperClass || ""],
        attrs: {
          color: _vm.color,
          "show-alpha": _vm.showAlpha,
          predefine: _vm.predefine
        },
        on: { pick: _vm.confirmValue, clear: _vm.clearValue },
        model: {
          value: _vm.showPicker,
          callback: function($$v) {
            _vm.showPicker = $$v
          },
          expression: "showPicker"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/main.vue?vue&type=template&id=55c8ade7&

// CONCATENATED MODULE: ./packages/color-picker/src/color.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hsv2hsl = function hsv2hsl(hue, sat, val) {
  return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
var isOnePointZero = function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};

var isPercentage = function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
};

// Take input from [0, n] and return it as [0, 1]
var bound01 = function bound01(value, max) {
  if (isOnePointZero(value)) value = '100%';

  var processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  // Automatically convert percentage into number
  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return value % max / parseFloat(max);
};

var INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

var toHex = function toHex(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;

  var hexOne = function hexOne(value) {
    value = Math.min(Math.round(value), 255);
    var high = Math.floor(value / 16);
    var low = value % 16;
    return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
  };

  if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

  return '#' + hexOne(r) + hexOne(g) + hexOne(b);
};

var HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

var parseHexChannel = function parseHexChannel(hex) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

var hsl2hsv = function hsl2hsv(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  var smin = sat;
  var lmin = Math.max(light, 0.01);
  var sv = void 0;
  var v = void 0;

  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (light + sat) / 2;
  sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
var rgb2hsv = function rgb2hsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = void 0,
      s = void 0;
  var v = max;

  var d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
};

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
var hsv2rgb = function hsv2rgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

var Color = function () {
  function Color(options) {
    _classCallCheck(this, Color);

    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;

    this.enableAlpha = false;
    this.format = 'hex';
    this.value = '';

    options = options || {};

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.doOnChange();
  }

  Color.prototype.set = function set(prop, value) {
    if (arguments.length === 1 && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
      for (var p in prop) {
        if (prop.hasOwnProperty(p)) {
          this.set(p, prop[p]);
        }
      }

      return;
    }

    this['_' + prop] = value;
    this.doOnChange();
  };

  Color.prototype.get = function get(prop) {
    return this['_' + prop];
  };

  Color.prototype.toRgb = function toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  };

  Color.prototype.fromString = function fromString(value) {
    var _this = this;

    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;

      this.doOnChange();
      return;
    }

    var fromHSV = function fromHSV(h, s, v) {
      _this._hue = Math.max(0, Math.min(360, h));
      _this._saturation = Math.max(0, Math.min(100, s));
      _this._value = Math.max(0, Math.min(100, v));

      _this.doOnChange();
    };

    if (value.indexOf('hsl') !== -1) {
      var parts = value.replace(/hsla|hsl|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        var _hsl2hsv = hsl2hsv(parts[0], parts[1], parts[2]),
            h = _hsl2hsv.h,
            s = _hsl2hsv.s,
            v = _hsl2hsv.v;

        fromHSV(h, s, v);
      }
    } else if (value.indexOf('hsv') !== -1) {
      var _parts = value.replace(/hsva|hsv|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (_parts.length === 4) {
        this._alpha = Math.floor(parseFloat(_parts[3]) * 100);
      } else if (_parts.length === 3) {
        this._alpha = 100;
      }
      if (_parts.length >= 3) {
        fromHSV(_parts[0], _parts[1], _parts[2]);
      }
    } else if (value.indexOf('rgb') !== -1) {
      var _parts2 = value.replace(/rgba|rgb|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (_parts2.length === 4) {
        this._alpha = Math.floor(parseFloat(_parts2[3]) * 100);
      } else if (_parts2.length === 3) {
        this._alpha = 100;
      }
      if (_parts2.length >= 3) {
        var _rgb2hsv = rgb2hsv(_parts2[0], _parts2[1], _parts2[2]),
            _h = _rgb2hsv.h,
            _s = _rgb2hsv.s,
            _v = _rgb2hsv.v;

        fromHSV(_h, _s, _v);
      }
    } else if (value.indexOf('#') !== -1) {
      var hex = value.replace('#', '').trim();
      if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) return;
      var r = void 0,
          g = void 0,
          b = void 0;

      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6 || hex.length === 8) {
        r = parseHexChannel(hex.substring(0, 2));
        g = parseHexChannel(hex.substring(2, 4));
        b = parseHexChannel(hex.substring(4, 6));
      }

      if (hex.length === 8) {
        this._alpha = Math.floor(parseHexChannel(hex.substring(6)) / 255 * 100);
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100;
      }

      var _rgb2hsv2 = rgb2hsv(r, g, b),
          _h2 = _rgb2hsv2.h,
          _s2 = _rgb2hsv2.s,
          _v2 = _rgb2hsv2.v;

      fromHSV(_h2, _s2, _v2);
    }
  };

  Color.prototype.compare = function compare(color) {
    return Math.abs(color._hue - this._hue) < 2 && Math.abs(color._saturation - this._saturation) < 1 && Math.abs(color._value - this._value) < 1 && Math.abs(color._alpha - this._alpha) < 1;
  };

  Color.prototype.doOnChange = function doOnChange() {
    var _hue = this._hue,
        _saturation = this._saturation,
        _value = this._value,
        _alpha = this._alpha,
        format = this.format;


    if (this.enableAlpha) {
      switch (format) {
        case 'hsl':
          var hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = 'hsla(' + _hue + ', ' + Math.round(hsl[1] * 100) + '%, ' + Math.round(hsl[2] * 100) + '%, ' + _alpha / 100 + ')';
          break;
        case 'hsv':
          this.value = 'hsva(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%, ' + _alpha / 100 + ')';
          break;
        default:
          var _hsv2rgb = hsv2rgb(_hue, _saturation, _value),
              r = _hsv2rgb.r,
              g = _hsv2rgb.g,
              b = _hsv2rgb.b;

          this.value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + _alpha / 100 + ')';
      }
    } else {
      switch (format) {
        case 'hsl':
          var _hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = 'hsl(' + _hue + ', ' + Math.round(_hsl[1] * 100) + '%, ' + Math.round(_hsl[2] * 100) + '%)';
          break;
        case 'hsv':
          this.value = 'hsv(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%)';
          break;
        case 'rgb':
          var _hsv2rgb2 = hsv2rgb(_hue, _saturation, _value),
              _r = _hsv2rgb2.r,
              _g = _hsv2rgb2.g,
              _b = _hsv2rgb2.b;

          this.value = 'rgb(' + _r + ', ' + _g + ', ' + _b + ')';
          break;
        default:
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
      }
    }
  };

  return Color;
}();

/* harmony default export */ var src_color = (Color);
;
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/picker-dropdown.vue?vue&type=template&id=06601625&
var picker_dropdownvue_type_template_id_06601625_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "el-zoom-in-top" }, on: { "after-leave": _vm.doDestroy } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showPopper,
              expression: "showPopper"
            }
          ],
          staticClass: "el-color-dropdown"
        },
        [
          _c(
            "div",
            { staticClass: "el-color-dropdown__main-wrapper" },
            [
              _c("hue-slider", {
                ref: "hue",
                staticStyle: { float: "right" },
                attrs: { color: _vm.color, vertical: "" }
              }),
              _c("sv-panel", { ref: "sl", attrs: { color: _vm.color } })
            ],
            1
          ),
          _vm.showAlpha
            ? _c("alpha-slider", { ref: "alpha", attrs: { color: _vm.color } })
            : _vm._e(),
          _vm.predefine
            ? _c("predefine", {
                attrs: { color: _vm.color, colors: _vm.predefine }
              })
            : _vm._e(),
          _c(
            "div",
            { staticClass: "el-color-dropdown__btns" },
            [
              _c(
                "span",
                { staticClass: "el-color-dropdown__value" },
                [
                  _c("el-input", {
                    attrs: { "validate-event": false, size: "mini" },
                    on: { blur: _vm.handleConfirm },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.handleConfirm($event)
                      }
                    },
                    model: {
                      value: _vm.customInput,
                      callback: function($$v) {
                        _vm.customInput = $$v
                      },
                      expression: "customInput"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-button",
                {
                  staticClass: "el-color-dropdown__link-btn",
                  attrs: { size: "mini", type: "text" },
                  on: {
                    click: function($event) {
                      _vm.$emit("clear")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("el.colorpicker.clear")) +
                      "\n      "
                  )
                ]
              ),
              _c(
                "el-button",
                {
                  staticClass: "el-color-dropdown__btn",
                  attrs: { plain: "", size: "mini" },
                  on: { click: _vm.confirmValue }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("el.colorpicker.confirm")) +
                      "\n      "
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var picker_dropdownvue_type_template_id_06601625_staticRenderFns = []
picker_dropdownvue_type_template_id_06601625_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/picker-dropdown.vue?vue&type=template&id=06601625&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/sv-panel.vue?vue&type=template&id=d8583596&
var sv_panelvue_type_template_id_d8583596_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-color-svpanel",
      style: {
        backgroundColor: _vm.background
      }
    },
    [
      _c("div", { staticClass: "el-color-svpanel__white" }),
      _c("div", { staticClass: "el-color-svpanel__black" }),
      _c(
        "div",
        {
          staticClass: "el-color-svpanel__cursor",
          style: {
            top: _vm.cursorTop + "px",
            left: _vm.cursorLeft + "px"
          }
        },
        [_c("div")]
      )
    ]
  )
}
var sv_panelvue_type_template_id_d8583596_staticRenderFns = []
sv_panelvue_type_template_id_d8583596_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/sv-panel.vue?vue&type=template&id=d8583596&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(6);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./packages/color-picker/src/draggable.js

var isDragging = false;

/* harmony default export */ var draggable = (function (element, options) {
  if (external_vue_default.a.prototype.$isServer) return;
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(event);
    }
  };
  var upFn = function upFn(event) {
    document.removeEventListener('mousemove', moveFn);
    document.removeEventListener('mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };
  element.addEventListener('mousedown', function (event) {
    if (isDragging) return;
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };

    document.addEventListener('mousemove', moveFn);
    document.addEventListener('mouseup', upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/sv-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var sv_panelvue_type_script_lang_js_ = ({
  name: 'el-sl-panel',

  props: {
    color: {
      required: true
    }
  },

  computed: {
    colorValue: function colorValue() {
      var hue = this.color.get('hue');
      var value = this.color.get('value');
      return { hue: hue, value: value };
    }
  },

  watch: {
    colorValue: function colorValue() {
      this.update();
    }
  },

  methods: {
    update: function update() {
      var saturation = this.color.get('saturation');
      var value = this.color.get('value');

      var el = this.$el;
      var width = el.clientWidth,
          height = el.clientHeight;


      this.cursorLeft = saturation * width / 100;
      this.cursorTop = (100 - value) * height / 100;

      this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
    },
    handleDrag: function handleDrag(event) {
      var el = this.$el;
      var rect = el.getBoundingClientRect();

      var left = event.clientX - rect.left;
      var top = event.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);

      top = Math.max(0, top);
      top = Math.min(top, rect.height);

      this.cursorLeft = left;
      this.cursorTop = top;
      this.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      });
    }
  },

  mounted: function mounted() {
    var _this = this;

    draggable(this.$el, {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    });

    this.update();
  },
  data: function data() {
    return {
      cursorTop: 0,
      cursorLeft: 0,
      background: 'hsl(0, 100%, 50%)'
    };
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/sv-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sv_panelvue_type_script_lang_js_ = (sv_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/color-picker/src/components/sv-panel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_sv_panelvue_type_script_lang_js_,
  sv_panelvue_type_template_id_d8583596_render,
  sv_panelvue_type_template_id_d8583596_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/color-picker/src/components/sv-panel.vue"
/* harmony default export */ var sv_panel = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/hue-slider.vue?vue&type=template&id=5cdc43b1&
var hue_slidervue_type_template_id_5cdc43b1_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-color-hue-slider",
      class: { "is-vertical": _vm.vertical }
    },
    [
      _c("div", {
        ref: "bar",
        staticClass: "el-color-hue-slider__bar",
        on: { click: _vm.handleClick }
      }),
      _c("div", {
        ref: "thumb",
        staticClass: "el-color-hue-slider__thumb",
        style: {
          left: _vm.thumbLeft + "px",
          top: _vm.thumbTop + "px"
        }
      })
    ]
  )
}
var hue_slidervue_type_template_id_5cdc43b1_staticRenderFns = []
hue_slidervue_type_template_id_5cdc43b1_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/hue-slider.vue?vue&type=template&id=5cdc43b1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/hue-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var hue_slidervue_type_script_lang_js_ = ({
  name: 'el-color-hue-slider',

  props: {
    color: {
      required: true
    },

    vertical: Boolean
  },

  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0
    };
  },


  computed: {
    hueValue: function hueValue() {
      var hue = this.color.get('hue');
      return hue;
    }
  },

  watch: {
    hueValue: function hueValue() {
      this.update();
    }
  },

  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;

      var hue = void 0;

      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);
        left = Math.max(thumb.offsetWidth / 2, left);

        hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
      } else {
        var top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);
        top = Math.max(thumb.offsetHeight / 2, top);

        hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
      }

      this.color.set('hue', hue);
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
    }
  },

  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        bar = _$refs.bar,
        thumb = _$refs.thumb;


    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };

    draggable(bar, dragConfig);
    draggable(thumb, dragConfig);
    this.update();
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/hue-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_hue_slidervue_type_script_lang_js_ = (hue_slidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/hue-slider.vue





/* normalize component */

var hue_slider_component = Object(componentNormalizer["a" /* default */])(
  components_hue_slidervue_type_script_lang_js_,
  hue_slidervue_type_template_id_5cdc43b1_render,
  hue_slidervue_type_template_id_5cdc43b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var hue_slider_api; }
hue_slider_component.options.__file = "packages/color-picker/src/components/hue-slider.vue"
/* harmony default export */ var hue_slider = (hue_slider_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/alpha-slider.vue?vue&type=template&id=068c66cb&
var alpha_slidervue_type_template_id_068c66cb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-color-alpha-slider",
      class: { "is-vertical": _vm.vertical }
    },
    [
      _c("div", {
        ref: "bar",
        staticClass: "el-color-alpha-slider__bar",
        style: {
          background: _vm.background
        },
        on: { click: _vm.handleClick }
      }),
      _c("div", {
        ref: "thumb",
        staticClass: "el-color-alpha-slider__thumb",
        style: {
          left: _vm.thumbLeft + "px",
          top: _vm.thumbTop + "px"
        }
      })
    ]
  )
}
var alpha_slidervue_type_template_id_068c66cb_staticRenderFns = []
alpha_slidervue_type_template_id_068c66cb_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/alpha-slider.vue?vue&type=template&id=068c66cb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/alpha-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var alpha_slidervue_type_script_lang_js_ = ({
  name: 'el-color-alpha-slider',

  props: {
    color: {
      required: true
    },
    vertical: Boolean
  },

  watch: {
    'color._alpha': function color_alpha() {
      this.update();
    },
    'color.value': function colorValue() {
      this.update();
    }
  },

  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;


      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.max(thumb.offsetWidth / 2, left);
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);

        this.color.set('alpha', Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
      } else {
        var top = event.clientY - rect.top;
        top = Math.max(thumb.offsetHeight / 2, top);
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);

        this.color.set('alpha', Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
      }
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var alpha = this.color._alpha;

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var alpha = this.color._alpha;

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
    },
    getBackground: function getBackground() {
      if (this.color && this.color.value) {
        var _color$toRgb = this.color.toRgb(),
            r = _color$toRgb.r,
            g = _color$toRgb.g,
            b = _color$toRgb.b;

        return 'linear-gradient(to right, rgba(' + r + ', ' + g + ', ' + b + ', 0) 0%, rgba(' + r + ', ' + g + ', ' + b + ', 1) 100%)';
      }
      return null;
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
      this.background = this.getBackground();
    }
  },

  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0,
      background: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        bar = _$refs.bar,
        thumb = _$refs.thumb;


    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };

    draggable(bar, dragConfig);
    draggable(thumb, dragConfig);
    this.update();
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/alpha-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_alpha_slidervue_type_script_lang_js_ = (alpha_slidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/alpha-slider.vue





/* normalize component */

var alpha_slider_component = Object(componentNormalizer["a" /* default */])(
  components_alpha_slidervue_type_script_lang_js_,
  alpha_slidervue_type_template_id_068c66cb_render,
  alpha_slidervue_type_template_id_068c66cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var alpha_slider_api; }
alpha_slider_component.options.__file = "packages/color-picker/src/components/alpha-slider.vue"
/* harmony default export */ var alpha_slider = (alpha_slider_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/predefine.vue?vue&type=template&id=06e03093&
var predefinevue_type_template_id_06e03093_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-color-predefine" }, [
    _c(
      "div",
      { staticClass: "el-color-predefine__colors" },
      _vm._l(_vm.rgbaColors, function(item, index) {
        return _c(
          "div",
          {
            key: _vm.colors[index],
            staticClass: "el-color-predefine__color-selector",
            class: { selected: item.selected, "is-alpha": item._alpha < 100 },
            on: {
              click: function($event) {
                _vm.handleSelect(index)
              }
            }
          },
          [_c("div", { style: { "background-color": item.value } })]
        )
      }),
      0
    )
  ])
}
var predefinevue_type_template_id_06e03093_staticRenderFns = []
predefinevue_type_template_id_06e03093_render._withStripped = true


// CONCATENATED MODULE: ./packages/color-picker/src/components/predefine.vue?vue&type=template&id=06e03093&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/predefine.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var predefinevue_type_script_lang_js_ = ({
  props: {
    colors: { type: Array, required: true },
    color: { required: true }
  },
  data: function data() {
    return {
      rgbaColors: this.parseColors(this.colors, this.color)
    };
  },

  methods: {
    handleSelect: function handleSelect(index) {
      this.color.fromString(this.colors[index]);
    },
    parseColors: function parseColors(colors, color) {
      return colors.map(function (value) {
        var c = new src_color();
        c.enableAlpha = true;
        c.format = 'rgba';
        c.fromString(value);
        c.selected = c.value === color.value;
        return c;
      });
    }
  },
  watch: {
    '$parent.currentColor': function $parentCurrentColor(val) {
      var color = new src_color();
      color.fromString(val);

      this.rgbaColors.forEach(function (item) {
        item.selected = color.compare(item);
      });
    },
    colors: function colors(newVal) {
      this.rgbaColors = this.parseColors(newVal, this.color);
    },
    color: function color(newVal) {
      this.rgbaColors = this.parseColors(this.colors, newVal);
    }
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/predefine.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_predefinevue_type_script_lang_js_ = (predefinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/predefine.vue





/* normalize component */

var predefine_component = Object(componentNormalizer["a" /* default */])(
  components_predefinevue_type_script_lang_js_,
  predefinevue_type_template_id_06e03093_render,
  predefinevue_type_template_id_06e03093_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var predefine_api; }
predefine_component.options.__file = "packages/color-picker/src/components/predefine.vue"
/* harmony default export */ var predefine = (predefine_component.exports);
// EXTERNAL MODULE: external "element-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(5);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(7);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui/lib/input"
var input_ = __webpack_require__(9);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "element-ui/lib/button"
var button_ = __webpack_require__(16);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/components/picker-dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var picker_dropdownvue_type_script_lang_js_ = ({
  name: 'el-color-picker-dropdown',

  mixins: [vue_popper_default.a, locale_default.a],

  components: {
    SvPanel: sv_panel,
    HueSlider: hue_slider,
    AlphaSlider: alpha_slider,
    ElInput: input_default.a,
    ElButton: button_default.a,
    Predefine: predefine
  },

  props: {
    color: {
      required: true
    },
    showAlpha: Boolean,
    predefine: Array
  },

  data: function data() {
    return {
      customInput: ''
    };
  },


  computed: {
    currentColor: function currentColor() {
      var parent = this.$parent;
      return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
    }
  },

  methods: {
    confirmValue: function confirmValue() {
      this.$emit('pick');
    },
    handleConfirm: function handleConfirm() {
      this.color.fromString(this.customInput);
    }
  },

  mounted: function mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$el;
  },


  watch: {
    showPopper: function showPopper(val) {
      var _this = this;

      if (val === true) {
        this.$nextTick(function () {
          var _$refs = _this.$refs,
              sl = _$refs.sl,
              hue = _$refs.hue,
              alpha = _$refs.alpha;

          sl && sl.update();
          hue && hue.update();
          alpha && alpha.update();
        });
      }
    },


    currentColor: {
      immediate: true,
      handler: function handler(val) {
        this.customInput = val;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/components/picker-dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_picker_dropdownvue_type_script_lang_js_ = (picker_dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/components/picker-dropdown.vue





/* normalize component */

var picker_dropdown_component = Object(componentNormalizer["a" /* default */])(
  components_picker_dropdownvue_type_script_lang_js_,
  picker_dropdownvue_type_template_id_06601625_render,
  picker_dropdownvue_type_template_id_06601625_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var picker_dropdown_api; }
picker_dropdown_component.options.__file = "packages/color-picker/src/components/picker-dropdown.vue"
/* harmony default export */ var picker_dropdown = (picker_dropdown_component.exports);
// EXTERNAL MODULE: external "element-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(11);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// EXTERNAL MODULE: external "element-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(3);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/color-picker/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ElColorPicker',

  mixins: [emitter_default.a],

  props: {
    value: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: String,
    popperClass: String,
    predefine: Array
  },

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  directives: { Clickoutside: clickoutside_default.a },

  computed: {
    displayedColor: function displayedColor() {
      if (!this.value && !this.showPanelColor) {
        return 'transparent';
      }

      return this.displayedRgb(this.color, this.showAlpha);
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    colorSize: function colorSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    colorDisabled: function colorDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  watch: {
    value: function value(val) {
      if (!val) {
        this.showPanelColor = false;
      } else if (val && val !== this.color.value) {
        this.color.fromString(val);
      }
    },

    color: {
      deep: true,
      handler: function handler() {
        this.showPanelColor = true;
      }
    },
    displayedColor: function displayedColor(val) {
      if (!this.showPicker) return;
      var currentValueColor = new src_color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat
      });
      currentValueColor.fromString(this.value);

      var currentValueColorRgb = this.displayedRgb(currentValueColor, this.showAlpha);
      if (val !== currentValueColorRgb) {
        this.$emit('active-change', val);
      }
    }
  },

  methods: {
    handleTrigger: function handleTrigger() {
      if (this.colorDisabled) return;
      this.showPicker = !this.showPicker;
    },
    confirmValue: function confirmValue() {
      var value = this.color.value;
      this.$emit('input', value);
      this.$emit('change', value);
      this.dispatch('ElFormItem', 'el.form.change', value);
      this.showPicker = false;
    },
    clearValue: function clearValue() {
      this.$emit('input', null);
      this.$emit('change', null);
      if (this.value !== null) {
        this.dispatch('ElFormItem', 'el.form.change', null);
      }
      this.showPanelColor = false;
      this.showPicker = false;
      this.resetColor();
    },
    hide: function hide() {
      this.showPicker = false;
      this.resetColor();
    },
    resetColor: function resetColor() {
      var _this = this;

      this.$nextTick(function (_) {
        if (_this.value) {
          _this.color.fromString(_this.value);
        } else {
          _this.showPanelColor = false;
        }
      });
    },
    displayedRgb: function displayedRgb(color, showAlpha) {
      if (!(color instanceof src_color)) {
        throw Error('color should be instance of Color Class');
      }

      var _color$toRgb = color.toRgb(),
          r = _color$toRgb.r,
          g = _color$toRgb.g,
          b = _color$toRgb.b;

      return showAlpha ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + color.get('alpha') / 100 + ')' : 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  },

  mounted: function mounted() {
    var value = this.value;
    if (value) {
      this.color.fromString(value);
    }
    this.popperElm = this.$refs.dropdown.$el;
  },
  data: function data() {
    var color = new src_color({
      enableAlpha: this.showAlpha,
      format: this.colorFormat
    });

    return {
      color: color,
      showPicker: false,
      showPanelColor: false
    };
  },


  components: {
    PickerDropdown: picker_dropdown
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue





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
main_component.options.__file = "packages/color-picker/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/color-picker/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var color_picker = __webpack_exports__["default"] = (main);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ })

/******/ });