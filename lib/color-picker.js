module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(88);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
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

/***/ 10:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = require("vue");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(89);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(90),
	  /* template */
	  __webpack_require__(105),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _color = __webpack_require__(91);

	var _color2 = _interopRequireDefault(_color);

	var _pickerDropdown = __webpack_require__(92);

	var _pickerDropdown2 = _interopRequireDefault(_pickerDropdown);

	var _clickoutside = __webpack_require__(10);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElColorPicker',

	  props: {
	    value: {
	      type: String
	    },
	    showAlpha: {
	      type: Boolean
	    },
	    colorFormat: {
	      type: String
	    }
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  computed: {
	    displayedColor: function displayedColor() {
	      if (!this.value && !this.showPanelColor) {
	        return 'transparent';
	      } else {
	        var _color$toRgb = this.color.toRgb(),
	            r = _color$toRgb.r,
	            g = _color$toRgb.g,
	            b = _color$toRgb.b;

	        return this.showAlpha ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + this.color.get('alpha') / 100 + ')' : 'rgb(' + r + ', ' + g + ', ' + b + ')';
	      }
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
	      this.$emit('active-change', val);
	    }
	  },

	  methods: {
	    confirmValue: function confirmValue(value) {
	      this.$emit('input', this.color.value);
	      this.$emit('change', this.color.value);
	      this.showPicker = false;
	    },
	    clearValue: function clearValue() {
	      this.$emit('input', null);
	      this.$emit('change', null);
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
	    var color = new _color2.default({
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
	    PickerDropdown: _pickerDropdown2.default
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

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

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
	      _this._hue = h;
	      _this._saturation = s;
	      _this._value = v;

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
	      var r = void 0,
	          g = void 0,
	          b = void 0;

	      if (hex.length === 3) {
	        r = parseHexChannel(hex[0] + hex[0]);
	        g = parseHexChannel(hex[1] + hex[1]);
	        b = parseHexChannel(hex[2] + hex[2]);
	      } else if (hex.length === 6) {
	        r = parseHexChannel(hex.substring(0, 2));
	        g = parseHexChannel(hex.substring(2, 4));
	        b = parseHexChannel(hex.substring(4));
	      }

	      var _rgb2hsv2 = rgb2hsv(r, g, b),
	          _h2 = _rgb2hsv2.h,
	          _s2 = _rgb2hsv2.s,
	          _v2 = _rgb2hsv2.v;

	      fromHSV(_h2, _s2, _v2);
	    }
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

	exports.default = Color;
	;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(93),
	  /* template */
	  __webpack_require__(104),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _svPanel = __webpack_require__(94);

	var _svPanel2 = _interopRequireDefault(_svPanel);

	var _hueSlider = __webpack_require__(98);

	var _hueSlider2 = _interopRequireDefault(_hueSlider);

	var _alphaSlider = __webpack_require__(101);

	var _alphaSlider2 = _interopRequireDefault(_alphaSlider);

	var _vuePopper = __webpack_require__(13);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _locale = __webpack_require__(61);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-color-picker-dropdown',

	  mixins: [_vuePopper2.default, _locale2.default],

	  components: {
	    SvPanel: _svPanel2.default,
	    HueSlider: _hueSlider2.default,
	    AlphaSlider: _alphaSlider2.default
	  },

	  props: {
	    color: {
	      required: true
	    },
	    showAlpha: Boolean
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

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(95),
	  /* template */
	  __webpack_require__(97),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _draggable = __webpack_require__(96);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
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

	      var _el$getBoundingClient = el.getBoundingClientRect(),
	          width = _el$getBoundingClient.width,
	          height = _el$getBoundingClient.height;

	      if (!height) height = width * 3 / 4;

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

	    (0, _draggable2.default)(this.$el, {
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

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (element, options) {
	  if (_vue2.default.prototype.$isServer) return;
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
	};

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isDragging = false;

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-color-svpanel",
	    style: ({
	      backgroundColor: _vm.background
	    })
	  }, [_c('div', {
	    staticClass: "el-color-svpanel__white"
	  }), _c('div', {
	    staticClass: "el-color-svpanel__black"
	  }), _c('div', {
	    staticClass: "el-color-svpanel__cursor",
	    style: ({
	      top: _vm.cursorTop + 'px',
	      left: _vm.cursorLeft + 'px'
	    })
	  }, [_c('div')])])
	},staticRenderFns: []}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(99),
	  /* template */
	  __webpack_require__(100),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _draggable = __webpack_require__(96);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
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

	    (0, _draggable2.default)(bar, dragConfig);
	    (0, _draggable2.default)(thumb, dragConfig);
	    this.update();
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

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-color-hue-slider",
	    class: {
	      'is-vertical': _vm.vertical
	    }
	  }, [_c('div', {
	    ref: "bar",
	    staticClass: "el-color-hue-slider__bar",
	    on: {
	      "click": _vm.handleClick
	    }
	  }), _c('div', {
	    ref: "thumb",
	    staticClass: "el-color-hue-slider__thumb",
	    style: ({
	      left: _vm.thumbLeft + 'px',
	      top: _vm.thumbTop + 'px'
	    })
	  })])
	},staticRenderFns: []}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(102),
	  /* template */
	  __webpack_require__(103),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _draggable = __webpack_require__(96);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
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

	    (0, _draggable2.default)(bar, dragConfig);
	    (0, _draggable2.default)(thumb, dragConfig);
	    this.update();
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

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-color-alpha-slider",
	    class: {
	      'is-vertical': _vm.vertical
	    }
	  }, [_c('div', {
	    ref: "bar",
	    staticClass: "el-color-alpha-slider__bar",
	    style: ({
	      background: _vm.background
	    }),
	    on: {
	      "click": _vm.handleClick
	    }
	  }), _c('div', {
	    ref: "thumb",
	    staticClass: "el-color-alpha-slider__thumb",
	    style: ({
	      left: _vm.thumbLeft + 'px',
	      top: _vm.thumbTop + 'px'
	    })
	  })])
	},staticRenderFns: []}

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    staticClass: "el-color-dropdown"
	  }, [_c('div', {
	    staticClass: "el-color-dropdown__main-wrapper"
	  }, [_c('hue-slider', {
	    ref: "hue",
	    staticStyle: {
	      "float": "right"
	    },
	    attrs: {
	      "color": _vm.color,
	      "vertical": ""
	    }
	  }), _c('sv-panel', {
	    ref: "sl",
	    attrs: {
	      "color": _vm.color
	    }
	  })], 1), (_vm.showAlpha) ? _c('alpha-slider', {
	    ref: "alpha",
	    attrs: {
	      "color": _vm.color
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: "el-color-dropdown__btns"
	  }, [_c('span', {
	    staticClass: "el-color-dropdown__value"
	  }, [_vm._v(_vm._s(_vm.currentColor))]), _c('a', {
	    staticClass: "el-color-dropdown__link-btn",
	    attrs: {
	      "href": "JavaScript:"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$emit('clear')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.colorpicker.clear')))]), _c('button', {
	    staticClass: "el-color-dropdown__btn",
	    on: {
	      "click": _vm.confirmValue
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.colorpicker.confirm')))])])], 1)])
	},staticRenderFns: []}

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.hide),
	      expression: "hide"
	    }],
	    staticClass: "el-color-picker"
	  }, [_c('div', {
	    staticClass: "el-color-picker__trigger",
	    on: {
	      "click": function($event) {
	        _vm.showPicker = !_vm.showPicker
	      }
	    }
	  }, [_c('span', {
	    staticClass: "el-color-picker__color",
	    class: {
	      'is-alpha': _vm.showAlpha
	    }
	  }, [_c('span', {
	    staticClass: "el-color-picker__color-inner",
	    style: ({
	      backgroundColor: _vm.displayedColor
	    })
	  }), (!_vm.value && !_vm.showPanelColor) ? _c('span', {
	    staticClass: "el-color-picker__empty el-icon-close"
	  }) : _vm._e()]), _c('span', {
	    staticClass: "el-color-picker__icon el-icon-caret-bottom"
	  })]), _c('picker-dropdown', {
	    ref: "dropdown",
	    staticClass: "el-color-picker__panel",
	    attrs: {
	      "color": _vm.color,
	      "show-alpha": _vm.showAlpha
	    },
	    on: {
	      "pick": _vm.confirmValue,
	      "clear": _vm.clearValue
	    },
	    model: {
	      value: (_vm.showPicker),
	      callback: function($$v) {
	        _vm.showPicker = $$v
	      },
	      expression: "showPicker"
	    }
	  })], 1)
	},staticRenderFns: []}

/***/ })

/******/ });