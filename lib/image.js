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
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
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

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/types");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/throttle");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/image/src/main.vue?vue&type=template&id=44d84a7c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "el-image" },
    [
      _vm.loading
        ? _vm._t("placeholder", [
            _c("div", { staticClass: "el-image__placeholder" })
          ])
        : _vm.error
        ? _vm._t("error", [
            _c("div", { staticClass: "el-image__error" }, [
              _vm._v(_vm._s(_vm.t("el.image.error")))
            ])
          ])
        : _c(
            "img",
            _vm._g(
              _vm._b(
                {
                  staticClass: "el-image__inner",
                  class: { "el-image__inner--center": _vm.alignCenter },
                  style: _vm.imageStyle,
                  attrs: { src: _vm.src }
                },
                "img",
                _vm.$attrs,
                false
              ),
              _vm.$listeners
            )
          )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/image/src/main.vue?vue&type=template&id=44d84a7c&

// EXTERNAL MODULE: external "element-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "element-ui/lib/utils/dom"
var dom_ = __webpack_require__(2);

// EXTERNAL MODULE: external "element-ui/lib/utils/types"
var types_ = __webpack_require__(19);

// EXTERNAL MODULE: external "throttle-debounce/throttle"
var throttle_ = __webpack_require__(25);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/image/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var isSupportObjectFit = function isSupportObjectFit() {
  return document.documentElement.style.objectFit !== undefined;
};

var ObjectFit = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down'
};

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElImage',

  mixins: [locale_default.a],
  inheritAttrs: false,

  props: {
    src: String,
    fit: String,
    lazy: Boolean,
    scrollContainer: {}
  },

  data: function data() {
    return {
      loading: true,
      error: false,
      show: !this.lazy,
      imageWidth: 0,
      imageHeight: 0
    };
  },


  computed: {
    imageStyle: function imageStyle() {
      var fit = this.fit;

      if (!this.$isServer && fit) {
        return isSupportObjectFit() ? { 'object-fit': fit } : this.getImageStyle(fit);
      }
      return {};
    },
    alignCenter: function alignCenter() {
      return !this.$isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
    }
  },

  watch: {
    src: function src(val) {
      this.show && this.loadImage();
    },
    show: function show(val) {
      val && this.loadImage();
    }
  },

  mounted: function mounted() {
    if (this.lazy) {
      this.addLazyLoadListener();
    } else {
      this.loadImage();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.lazy && this.removeLazyLoadListener();
  },


  methods: {
    loadImage: function loadImage() {
      var _this = this;

      if (this.$isServer) return;

      // reset status
      this.loading = true;
      this.error = false;

      var img = new Image();
      img.onload = function (e) {
        return _this.handleLoad(e, img);
      };
      img.onerror = this.handleError.bind(this);

      // bind html attrs
      // so it can behave consistently
      Object.keys(this.$attrs).forEach(function (key) {
        var value = _this.$attrs[key];
        img.setAttribute(key, value);
      });
      img.src = this.src;
    },
    handleLoad: function handleLoad(e, img) {
      this.imageWidth = img.width;
      this.imageHeight = img.height;
      this.loading = false;
    },
    handleError: function handleError(e) {
      this.loading = false;
      this.error = true;
      this.$emit('error', e);
    },
    handleLazyLoad: function handleLazyLoad() {
      if (Object(dom_["isInContainer"])(this.$el, this._scrollContainer)) {
        this.show = true;
        this.removeLazyLoadListener();
      }
    },
    addLazyLoadListener: function addLazyLoadListener() {
      if (this.$isServer) return;

      var scrollContainer = this.scrollContainer;

      var _scrollContainer = null;

      if (Object(types_["isHtmlElement"])(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (Object(types_["isString"])(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = Object(dom_["getScrollContainer"])(this.$el);
      }

      if (_scrollContainer) {
        this._scrollContainer = _scrollContainer;
        this._lazyLoadHandler = throttle_default()(200, this.handleLazyLoad);
        Object(dom_["on"])(_scrollContainer, 'scroll', this._lazyLoadHandler);
        this.handleLazyLoad();
      }
    },
    removeLazyLoadListener: function removeLazyLoadListener() {
      var _scrollContainer = this._scrollContainer,
          _lazyLoadHandler = this._lazyLoadHandler;


      if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;

      Object(dom_["off"])(_scrollContainer, 'scroll', _lazyLoadHandler);
      this._scrollContainer = null;
      this._lazyLoadHandler = null;
    },

    /**
     * simulate object-fit behavior to compatible with IE11 and other browsers which not support object-fit
     */
    getImageStyle: function getImageStyle(fit) {
      var imageWidth = this.imageWidth,
          imageHeight = this.imageHeight;
      var _$el = this.$el,
          containerWidth = _$el.clientWidth,
          containerHeight = _$el.clientHeight;


      if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};

      var vertical = imageWidth / imageHeight < 1;

      if (fit === ObjectFit.SCALE_DOWN) {
        var isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
      }

      switch (fit) {
        case ObjectFit.NONE:
          return { width: 'auto', height: 'auto' };
        case ObjectFit.CONTAIN:
          return vertical ? { width: 'auto' } : { height: 'auto' };
        case ObjectFit.COVER:
          return vertical ? { height: 'auto' } : { width: 'auto' };
        default:
          return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/image/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/image/src/main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/image/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/image/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var packages_image = __webpack_exports__["default"] = (main);

/***/ })

/******/ });