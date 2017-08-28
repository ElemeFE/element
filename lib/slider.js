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

	module.exports = __webpack_require__(272);


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

/***/ 14:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(273);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(274),
	  /* template */
	  __webpack_require__(280),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _inputNumber = __webpack_require__(275);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _button = __webpack_require__(276);

	var _button2 = _interopRequireDefault(_button);

	var _emitter = __webpack_require__(14);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSlider',

	  mixins: [_emitter2.default],

	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    value: {
	      type: [Number, Array],
	      default: 0
	    },
	    showInput: {
	      type: Boolean,
	      default: false
	    },
	    showInputControls: {
	      type: Boolean,
	      default: true
	    },
	    showStops: {
	      type: Boolean,
	      default: false
	    },
	    showTooltip: {
	      type: Boolean,
	      default: true
	    },
	    formatTooltip: Function,
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    range: {
	      type: Boolean,
	      default: false
	    },
	    vertical: {
	      type: Boolean,
	      default: false
	    },
	    height: {
	      type: String
	    }
	  },

	  components: {
	    ElInputNumber: _inputNumber2.default,
	    SliderButton: _button2.default
	  },

	  data: function data() {
	    return {
	      firstValue: null,
	      secondValue: null,
	      oldValue: null,
	      dragging: false,
	      sliderSize: 1
	    };
	  },


	  watch: {
	    value: function value(val, oldVal) {
	      if (this.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every(function (item, index) {
	        return item === oldVal[index];
	      })) {
	        return;
	      }
	      this.setValues();
	    },
	    dragging: function dragging(val) {
	      if (!val) {
	        this.setValues();
	      }
	    },
	    firstValue: function firstValue(val) {
	      if (this.range) {
	        this.$emit('input', [this.minValue, this.maxValue]);
	      } else {
	        this.$emit('input', val);
	      }
	    },
	    secondValue: function secondValue() {
	      if (this.range) {
	        this.$emit('input', [this.minValue, this.maxValue]);
	      }
	    },
	    min: function min() {
	      this.setValues();
	    },
	    max: function max() {
	      this.setValues();
	    }
	  },

	  methods: {
	    valueChanged: function valueChanged() {
	      var _this = this;

	      if (this.range) {
	        return ![this.minValue, this.maxValue].every(function (item, index) {
	          return item === _this.oldValue[index];
	        });
	      } else {
	        return this.value !== this.oldValue;
	      }
	    },
	    setValues: function setValues() {
	      var val = this.value;
	      if (this.range && Array.isArray(val)) {
	        if (val[1] < this.min) {
	          this.$emit('input', [this.min, this.min]);
	        } else if (val[0] > this.max) {
	          this.$emit('input', [this.max, this.max]);
	        } else if (val[0] < this.min) {
	          this.$emit('input', [this.min, val[1]]);
	        } else if (val[1] > this.max) {
	          this.$emit('input', [val[0], this.max]);
	        } else {
	          this.firstValue = val[0];
	          this.secondValue = val[1];
	          if (this.valueChanged()) {
	            this.$emit('change', [this.minValue, this.maxValue]);
	            this.dispatch('ElFormItem', 'el.form.change', [this.minValue, this.maxValue]);
	            this.oldValue = val.slice();
	          }
	        }
	      } else if (!this.range && typeof val === 'number' && !isNaN(val)) {
	        if (val < this.min) {
	          this.$emit('input', this.min);
	        } else if (val > this.max) {
	          this.$emit('input', this.max);
	        } else {
	          this.firstValue = val;
	          if (this.valueChanged()) {
	            this.$emit('change', val);
	            this.dispatch('ElFormItem', 'el.form.change', val);
	            this.oldValue = val;
	          }
	        }
	      }
	    },
	    setPosition: function setPosition(percent) {
	      var targetValue = this.min + percent * (this.max - this.min) / 100;
	      if (!this.range) {
	        this.$refs.button1.setPosition(percent);
	        return;
	      }
	      var button = void 0;
	      if (Math.abs(this.minValue - targetValue) < Math.abs(this.maxValue - targetValue)) {
	        button = this.firstValue < this.secondValue ? 'button1' : 'button2';
	      } else {
	        button = this.firstValue > this.secondValue ? 'button1' : 'button2';
	      }
	      this.$refs[button].setPosition(percent);
	    },
	    onSliderClick: function onSliderClick(event) {
	      if (this.disabled || this.dragging) return;
	      this.resetSize();
	      if (this.vertical) {
	        var sliderOffsetBottom = this.$refs.slider.getBoundingClientRect().bottom;
	        this.setPosition((sliderOffsetBottom - event.clientY) / this.sliderSize * 100);
	      } else {
	        var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
	        this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
	      }
	    },
	    resetSize: function resetSize() {
	      if (this.$refs.slider) {
	        this.sliderSize = this.$refs.slider['client' + (this.vertical ? 'Height' : 'Width')];
	      }
	    }
	  },

	  computed: {
	    stops: function stops() {
	      var _this2 = this;

	      if (this.step === 0) {
	        ("production") !== 'production' && console.warn('[Element Warn][Slider]step should not be 0.');
	        return [];
	      }
	      var stopCount = (this.max - this.min) / this.step;
	      var stepWidth = 100 * this.step / (this.max - this.min);
	      var result = [];
	      for (var i = 1; i < stopCount; i++) {
	        result.push(i * stepWidth);
	      }
	      if (this.range) {
	        return result.filter(function (step) {
	          return step < 100 * (_this2.minValue - _this2.min) / (_this2.max - _this2.min) || step > 100 * (_this2.maxValue - _this2.min) / (_this2.max - _this2.min);
	        });
	      } else {
	        return result.filter(function (step) {
	          return step > 100 * (_this2.firstValue - _this2.min) / (_this2.max - _this2.min);
	        });
	      }
	    },
	    minValue: function minValue() {
	      return Math.min(this.firstValue, this.secondValue);
	    },
	    maxValue: function maxValue() {
	      return Math.max(this.firstValue, this.secondValue);
	    },
	    barSize: function barSize() {
	      return this.range ? 100 * (this.maxValue - this.minValue) / (this.max - this.min) + '%' : 100 * (this.firstValue - this.min) / (this.max - this.min) + '%';
	    },
	    barStart: function barStart() {
	      return this.range ? 100 * (this.minValue - this.min) / (this.max - this.min) + '%' : '0%';
	    },
	    precision: function precision() {
	      var precisions = [this.min, this.max, this.step].map(function (item) {
	        var decimal = ('' + item).split('.')[1];
	        return decimal ? decimal.length : 0;
	      });
	      return Math.max.apply(null, precisions);
	    },
	    runwayStyle: function runwayStyle() {
	      return this.vertical ? { height: this.height } : {};
	    },
	    barStyle: function barStyle() {
	      return this.vertical ? {
	        height: this.barSize,
	        bottom: this.barStart
	      } : {
	        width: this.barSize,
	        left: this.barStart
	      };
	    }
	  },

	  mounted: function mounted() {
	    if (this.range) {
	      if (Array.isArray(this.value)) {
	        this.firstValue = Math.max(this.min, this.value[0]);
	        this.secondValue = Math.min(this.max, this.value[1]);
	      } else {
	        this.firstValue = this.min;
	        this.secondValue = this.max;
	      }
	      this.oldValue = [this.firstValue, this.secondValue];
	    } else {
	      if (typeof this.value !== 'number' || isNaN(this.value)) {
	        this.firstValue = this.min;
	      } else {
	        this.firstValue = Math.min(this.max, Math.max(this.min, this.value));
	      }
	      this.oldValue = this.firstValue;
	    }
	    this.resetSize();
	    window.addEventListener('resize', this.resetSize);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('resize', this.resetSize);
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

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/input-number");

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(277),
	  /* template */
	  __webpack_require__(279),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _tooltip = __webpack_require__(278);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSliderButton',

	  components: {
	    ElTooltip: _tooltip2.default
	  },

	  props: {
	    value: {
	      type: Number,
	      default: 0
	    },
	    vertical: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      hovering: false,
	      dragging: false,
	      startX: 0,
	      currentX: 0,
	      startY: 0,
	      currentY: 0,
	      startPosition: 0,
	      newPosition: null,
	      oldValue: this.value
	    };
	  },


	  computed: {
	    disabled: function disabled() {
	      return this.$parent.disabled;
	    },
	    max: function max() {
	      return this.$parent.max;
	    },
	    min: function min() {
	      return this.$parent.min;
	    },
	    step: function step() {
	      return this.$parent.step;
	    },
	    showTooltip: function showTooltip() {
	      return this.$parent.showTooltip;
	    },
	    precision: function precision() {
	      return this.$parent.precision;
	    },
	    currentPosition: function currentPosition() {
	      return (this.value - this.min) / (this.max - this.min) * 100 + '%';
	    },
	    enableFormat: function enableFormat() {
	      return this.$parent.formatTooltip instanceof Function;
	    },
	    formatValue: function formatValue() {
	      return this.enableFormat && this.$parent.formatTooltip(this.value) || this.value;
	    },
	    wrapperStyle: function wrapperStyle() {
	      return this.vertical ? { bottom: this.currentPosition } : { left: this.currentPosition };
	    }
	  },

	  watch: {
	    dragging: function dragging(val) {
	      this.$parent.dragging = val;
	    }
	  },

	  methods: {
	    displayTooltip: function displayTooltip() {
	      this.$refs.tooltip && (this.$refs.tooltip.showPopper = true);
	    },
	    hideTooltip: function hideTooltip() {
	      this.$refs.tooltip && (this.$refs.tooltip.showPopper = false);
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      this.hovering = true;
	      this.displayTooltip();
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hovering = false;
	      this.hideTooltip();
	    },
	    onButtonDown: function onButtonDown(event) {
	      if (this.disabled) return;
	      event.preventDefault();
	      this.onDragStart(event);
	      window.addEventListener('mousemove', this.onDragging);
	      window.addEventListener('mouseup', this.onDragEnd);
	      window.addEventListener('contextmenu', this.onDragEnd);
	    },
	    onDragStart: function onDragStart(event) {
	      this.dragging = true;
	      if (this.vertical) {
	        this.startY = event.clientY;
	      } else {
	        this.startX = event.clientX;
	      }
	      this.startPosition = parseFloat(this.currentPosition);
	    },
	    onDragging: function onDragging(event) {
	      if (this.dragging) {
	        this.displayTooltip();
	        this.$parent.resetSize();
	        var diff = 0;
	        if (this.vertical) {
	          this.currentY = event.clientY;
	          diff = (this.startY - this.currentY) / this.$parent.sliderSize * 100;
	        } else {
	          this.currentX = event.clientX;
	          diff = (this.currentX - this.startX) / this.$parent.sliderSize * 100;
	        }
	        this.newPosition = this.startPosition + diff;
	        this.setPosition(this.newPosition);
	      }
	    },
	    onDragEnd: function onDragEnd() {
	      var _this = this;

	      if (this.dragging) {
	        /*
	         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
	         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
	         */
	        setTimeout(function () {
	          _this.dragging = false;
	          _this.hideTooltip();
	          _this.setPosition(_this.newPosition);
	        }, 0);
	        window.removeEventListener('mousemove', this.onDragging);
	        window.removeEventListener('mouseup', this.onDragEnd);
	        window.removeEventListener('contextmenu', this.onDragEnd);
	      }
	    },
	    setPosition: function setPosition(newPosition) {
	      if (newPosition === null) return;
	      if (newPosition < 0) {
	        newPosition = 0;
	      } else if (newPosition > 100) {
	        newPosition = 100;
	      }
	      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	      var steps = Math.round(newPosition / lengthPerStep);
	      var value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
	      value = parseFloat(value.toFixed(this.precision));
	      this.$emit('input', value);
	      this.$refs.tooltip && this.$refs.tooltip.updatePopper();
	      if (!this.dragging && this.value !== this.oldValue) {
	        this.oldValue = this.value;
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

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/tooltip");

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "button",
	    staticClass: "el-slider__button-wrapper",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    },
	    style: (_vm.wrapperStyle),
	    on: {
	      "mouseenter": _vm.handleMouseEnter,
	      "mouseleave": _vm.handleMouseLeave,
	      "mousedown": _vm.onButtonDown
	    }
	  }, [_c('el-tooltip', {
	    ref: "tooltip",
	    attrs: {
	      "placement": "top",
	      "disabled": !_vm.showTooltip
	    }
	  }, [_c('span', {
	    slot: "content"
	  }, [_vm._v(_vm._s(_vm.formatValue))]), _c('div', {
	    staticClass: "el-slider__button",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    }
	  })])], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-slider",
	    class: {
	      'is-vertical': _vm.vertical, 'el-slider--with-input': _vm.showInput
	    }
	  }, [(_vm.showInput && !_vm.range) ? _c('el-input-number', {
	    ref: "input",
	    staticClass: "el-slider__input",
	    attrs: {
	      "step": _vm.step,
	      "disabled": _vm.disabled,
	      "controls": _vm.showInputControls,
	      "min": _vm.min,
	      "max": _vm.max,
	      "size": "small"
	    },
	    model: {
	      value: (_vm.firstValue),
	      callback: function($$v) {
	        _vm.firstValue = $$v
	      },
	      expression: "firstValue"
	    }
	  }) : _vm._e(), _c('div', {
	    ref: "slider",
	    staticClass: "el-slider__runway",
	    class: {
	      'show-input': _vm.showInput, 'disabled': _vm.disabled
	    },
	    style: (_vm.runwayStyle),
	    on: {
	      "click": _vm.onSliderClick
	    }
	  }, [_c('div', {
	    staticClass: "el-slider__bar",
	    style: (_vm.barStyle)
	  }), _c('slider-button', {
	    ref: "button1",
	    attrs: {
	      "vertical": _vm.vertical
	    },
	    model: {
	      value: (_vm.firstValue),
	      callback: function($$v) {
	        _vm.firstValue = $$v
	      },
	      expression: "firstValue"
	    }
	  }), (_vm.range) ? _c('slider-button', {
	    ref: "button2",
	    attrs: {
	      "vertical": _vm.vertical
	    },
	    model: {
	      value: (_vm.secondValue),
	      callback: function($$v) {
	        _vm.secondValue = $$v
	      },
	      expression: "secondValue"
	    }
	  }) : _vm._e(), _vm._l((_vm.stops), function(item) {
	    return (_vm.showStops) ? _c('div', {
	      staticClass: "el-slider__stop",
	      style: (_vm.vertical ? {
	        'bottom': item + '%'
	      } : {
	        'left': item + '%'
	      })
	    }) : _vm._e()
	  })], 2)], 1)
	},staticRenderFns: []}

/***/ })

/******/ });