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

	module.exports = __webpack_require__(305);


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

/***/ 45:
/***/ (function(module, exports) {

	module.exports = require("throttle-debounce/throttle");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = require("vue");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/popup");

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/util");

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/utils/scrollbar-width");

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _table = __webpack_require__(306);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_table2.default.install = function (Vue) {
	  Vue.component(_table2.default.name, _table2.default);
	};

	exports.default = _table2.default;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

	function injectStyle (ssrContext) {
	  __webpack_require__(307)
	}
	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(312),
	  /* template */
	  __webpack_require__(326),
	  /* styles */
	  injectStyle,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(308);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(310)("e900bd2e", content, true);

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(309)();
	// imports


	// module
	exports.push([module.id, "\n.v-table-filter {\n  width: 100%;\n  overflow: hidden;\n}\n.v-fixed-table-filter {\n  position: absolute;\n  left: 0;\n  top: 40px;\n  z-index: 3;\n}\n", ""]);

	// exports


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(311)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(313);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _throttle = __webpack_require__(45);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _resizeEvent = __webpack_require__(46);

	var _locale = __webpack_require__(61);

	var _locale2 = _interopRequireDefault(_locale);

	var _tableStore = __webpack_require__(314);

	var _tableStore2 = _interopRequireDefault(_tableStore);

	var _tableLayout = __webpack_require__(316);

	var _tableLayout2 = _interopRequireDefault(_tableLayout);

	var _tableBody = __webpack_require__(317);

	var _tableBody2 = _interopRequireDefault(_tableBody);

	var _tableHeader = __webpack_require__(318);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	var _tableFilter = __webpack_require__(324);

	var _tableFilter2 = _interopRequireDefault(_tableFilter);

	var _tableFooter = __webpack_require__(325);

	var _tableFooter2 = _interopRequireDefault(_tableFooter);

	var _util = __webpack_require__(315);

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

	var tableIdSeed = 1;
	var lazy = void 0;

	exports.default = {
	  name: 'ElTable',

	  mixins: [_locale2.default],

	  props: {
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

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

	    highlightCurrentRow: Boolean,

	    currentRowKey: [String, Number],

	    emptyText: String,

	    expandRowKeys: Array,

	    defaultExpandAll: Boolean,

	    defaultSort: Object,

	    tooltipEffect: String,

	    filterHead: Array, // 自定义 props

	    hasListMenu: Boolean, // 左侧是否有操作

	    filterArray: Array, // 被过滤掉的字段

	    advanced: Boolean // 是否开启高级筛选
	  },

	  components: {
	    TableHeader: _tableHeader2.default,
	    TableFooter: _tableFooter2.default,
	    TableBody: _tableBody2.default,
	    TableFilter: _tableFilter2.default,
	    ElCheckbox: _checkbox2.default
	  },

	  methods: {
	    setCurrentRow: function setCurrentRow(row) {
	      this.store.commit('setCurrentRow', row);
	    },
	    toggleRowSelection: function toggleRowSelection(row, selected) {
	      this.store.toggleRowSelection(row, selected);
	      this.store.updateAllSelected();
	    },
	    clearSelection: function clearSelection() {
	      this.store.clearSelection();
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.store.commit('setHoverRow', null);
	      if (this.hoverState) this.hoverState = null;
	    },
	    updateScrollY: function updateScrollY() {
	      this.layout.updateScrollY();
	    },
	    bindEvents: function bindEvents() {
	      var _this = this;

	      var _$refs = this.$refs,
	          headerWrapper = _$refs.headerWrapper,
	          footerWrapper = _$refs.footerWrapper,
	          filterWrapper = _$refs.filterWrapper;

	      var refs = this.$refs;
	      this.bodyWrapper.addEventListener('scroll', function () {
	        if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
	        if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
	        if (filterWrapper) filterWrapper.scrollLeft = this.scrollLeft;
	        if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
	        if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
	      });

	      var scrollBodyWrapper = function scrollBodyWrapper(event) {
	        var deltaX = event.deltaX;

	        if (deltaX > 0) {
	          _this.bodyWrapper.scrollLeft += 10;
	        } else {
	          _this.bodyWrapper.scrollLeft -= 10;
	        }
	      };
	      if (headerWrapper) {
	        (0, _util.mousewheel)(headerWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
	      }
	      if (footerWrapper) {
	        (0, _util.mousewheel)(footerWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
	      }
	      if (filterWrapper) {
	        (0, _util.mousewheel)(filterWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
	      }

	      if (this.fit) {
	        this.windowResizeListener = (0, _throttle2.default)(50, function () {
	          if (_this.$ready) _this.doLayout();
	        });
	        (0, _resizeEvent.addResizeListener)(this.$el, this.windowResizeListener);
	      }
	    },
	    doLayout: function doLayout() {
	      var _this2 = this;

	      this.store.updateColumns();
	      this.layout.update();
	      this.updateScrollY();
	      this.$nextTick(function () {
	        if (_this2.height) {
	          _this2.layout.setHeight(_this2.height);
	        } else if (_this2.maxHeight) {
	          _this2.layout.setMaxHeight(_this2.maxHeight);
	        } else if (_this2.shouldUpdateHeight) {
	          _this2.layout.updateHeight();
	        }
	      });
	    }
	  },

	  created: function created() {
	    var _this3 = this;

	    this.tableId = 'el-table_' + tableIdSeed + '_';
	    this.debouncedLayout = (0, _debounce2.default)(50, function () {
	      return _this3.doLayout();
	    });
	  },


	  computed: {
	    bodyWrapper: function bodyWrapper() {
	      return this.$refs.bodyWrapper;
	    },
	    shouldUpdateHeight: function shouldUpdateHeight() {
	      return typeof this.height === 'number' || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
	    },
	    selection: function selection() {
	      return this.store.states.selection;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    },
	    tableData: function tableData() {
	      return this.store.states.data;
	    },
	    fixedColumns: function fixedColumns() {
	      return this.store.states.fixedColumns;
	    },
	    rightFixedColumns: function rightFixedColumns() {
	      return this.store.states.rightFixedColumns;
	    },
	    bodyHeight: function bodyHeight() {
	      var style = {};

	      if (this.height) {
	        // 根据筛选开关状态来动态改变table内容的高度
	        if (this.advanced) {
	          style = {
	            height: this.layout.bodyHeight ? this.layout.bodyHeight - 40 + 'px' : ''
	          };
	        } else {
	          style = {
	            height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
	          };
	        }
	      } else if (this.maxHeight) {
	        style = {
	          'max-height': (this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight) + 'px'
	        };
	      }

	      return style;
	    },
	    bodyWidth: function bodyWidth() {
	      var _layout = this.layout,
	          bodyWidth = _layout.bodyWidth,
	          scrollY = _layout.scrollY,
	          gutterWidth = _layout.gutterWidth;

	      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
	    },
	    fixedHeight: function fixedHeight() {
	      var style = {};

	      if (this.maxHeight) {
	        style = {
	          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
	        };
	      } else {
	        style = {
	          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
	        };
	      }

	      return style;
	    },


	    // 固定列样式
	    fixedStyle: function fixedStyle() {
	      var style = {};
	      var n = this.advanced ? 40 : 0;

	      if (this.height) {
	        style = {
	          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight - n + 'px' : '',
	          top: this.layout.headerHeight + n + 'px'
	        };
	      } else if (this.maxHeight) {
	        var maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

	        if (this.showHeader) {
	          maxHeight -= this.layout.headerHeight;
	        }

	        style = {
	          'max-height': maxHeight + 'px'
	        };
	      }

	      return style;
	    },


	    // 如果左侧有操作按钮，则向该数组开头插入一个空字符串
	    newFilterHead: function newFilterHead() {
	      var _this4 = this;

	      // 筛选过滤
	      var arr = this.filterHead.filter(function (item) {
	        return _this4.filterArray.indexOf(item.attr) === -1;
	      });
	      if (this.hasListMenu) {
	        var a = [''];
	        return a.concat(arr);
	      } else {
	        return arr;
	      }
	    }
	  },

	  watch: {
	    height: function height(value) {
	      var _this5 = this;

	      this.layout.setHeight(value);

	      // 监测table是否有纵向滚动条
	      clearTimeout(lazy);
	      lazy = setTimeout(function () {
	        var tbHeight = _this5.$refs.tableBody.$el.offsetHeight;
	        if (tbHeight > value) {
	          _this5.fixedMinHeight = {
	            'min-height': value - 1 + 'px'
	          };
	        } else {
	          _this5.fixedMinHeight = {
	            'min-height': 0
	          };
	        }
	      }, 50);
	    },
	    currentRowKey: function currentRowKey(newVal) {
	      this.store.setCurrentRowKey(newVal);
	    },


	    data: {
	      immediate: true,
	      handler: function handler(val) {
	        this.store.commit('setData', val);
	        if (this.$ready) this.doLayout();
	      }
	    },

	    expandRowKeys: function expandRowKeys(newVal) {
	      this.store.setExpandRowKeys(newVal);
	    },


	    // 由于showSummary的条件是异步绑定的，所以导致this.$refs.footerWrapper 无法被获取，这里重新执行绑定事件
	    showSummary: function showSummary(bol) {
	      var _this6 = this;

	      if (bol) {
	        this.$nextTick(function () {
	          _this6.bindEvents();
	        });
	      }
	    }
	  },

	  destroyed: function destroyed() {
	    if (this.windowResizeListener) (0, _resizeEvent.removeResizeListener)(this.$el, this.windowResizeListener);
	  },
	  mounted: function mounted() {
	    var _this7 = this;

	    this.bindEvents();
	    this.doLayout();

	    // init filters
	    this.store.states.columns.forEach(function (column) {
	      if (column.filteredValue && column.filteredValue.length) {
	        _this7.store.commit('filterChange', {
	          column: column,
	          values: column.filteredValue,
	          silent: true
	        });
	      }
	    });

	    this.$ready = true;
	  },
	  data: function data() {
	    var store = new _tableStore2.default(this, {
	      rowKey: this.rowKey,
	      defaultExpandAll: this.defaultExpandAll
	    });
	    var layout = new _tableLayout2.default({
	      store: store,
	      table: this,
	      fit: this.fit,
	      showHeader: this.showHeader
	    });
	    return {
	      store: store,
	      layout: layout,
	      renderExpanded: null,
	      resizeProxyVisible: false,
	      // 兼容滚动条bug
	      fixedMinHeight: {
	        'min-height': 0
	      }
	    };
	  }
	};

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/checkbox");

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _util = __webpack_require__(315);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sortData = function sortData(data, states) {
	  var sortingColumn = states.sortingColumn;
	  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
	    return data;
	  }
	  return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod);
	};

	var getKeysMap = function getKeysMap(array, rowKey) {
	  var arrayMap = {};
	  (array || []).forEach(function (row, index) {
	    arrayMap[(0, _util.getRowIdentity)(row, rowKey)] = { row: row, index: index };
	  });
	  return arrayMap;
	};

	var toggleRowSelection = function toggleRowSelection(states, row, selected) {
	  var changed = false;
	  var selection = states.selection;
	  var index = selection.indexOf(row);
	  if (typeof selected === 'undefined') {
	    if (index === -1) {
	      selection.push(row);
	      changed = true;
	    } else {
	      selection.splice(index, 1);
	      changed = true;
	    }
	  } else {
	    if (selected && index === -1) {
	      selection.push(row);
	      changed = true;
	    } else if (!selected && index > -1) {
	      selection.splice(index, 1);
	      changed = true;
	    }
	  }

	  return changed;
	};

	var TableStore = function TableStore(table) {
	  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!table) {
	    throw new Error('Table is required.');
	  }
	  this.table = table;

	  this.states = {
	    rowKey: null,
	    _columns: [],
	    originColumns: [],
	    columns: [],
	    fixedColumns: [],
	    rightFixedColumns: [],
	    isComplex: false,
	    _data: null,
	    filteredData: null,
	    data: null,
	    sortingColumn: null,
	    sortProp: null,
	    sortOrder: null,
	    isAllSelected: false,
	    selection: [],
	    reserveSelection: false,
	    selectable: null,
	    currentRow: null,
	    hoverRow: null,
	    filters: {},
	    expandRows: [],
	    defaultExpandAll: false
	  };

	  for (var prop in initialState) {
	    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
	      this.states[prop] = initialState[prop];
	    }
	  }
	};

	TableStore.prototype.mutations = {
	  setData: function setData(states, data) {
	    var _this = this;

	    var dataInstanceChanged = states._data !== data;
	    states._data = data;
	    states.data = sortData(data || [], states);

	    // states.data.forEach((item) => {
	    //   if (!item.$extra) {
	    //     Object.defineProperty(item, '$extra', {
	    //       value: {},
	    //       enumerable: false
	    //     });
	    //   }
	    // });

	    this.updateCurrentRow();

	    if (!states.reserveSelection) {
	      if (dataInstanceChanged) {
	        this.clearSelection();
	      } else {
	        this.cleanSelection();
	      }
	      this.updateAllSelected();
	    } else {
	      var rowKey = states.rowKey;
	      if (rowKey) {
	        var selection = states.selection;
	        var selectedMap = getKeysMap(selection, rowKey);

	        states.data.forEach(function (row) {
	          var rowId = (0, _util.getRowIdentity)(row, rowKey);
	          var rowInfo = selectedMap[rowId];
	          if (rowInfo) {
	            selection[rowInfo.index] = row;
	          }
	        });

	        this.updateAllSelected();
	      } else {
	        console.warn('WARN: rowKey is required when reserve-selection is enabled.');
	      }
	    }

	    var defaultExpandAll = states.defaultExpandAll;
	    if (defaultExpandAll) {
	      this.states.expandRows = (states.data || []).slice(0);
	    }

	    _vue2.default.nextTick(function () {
	      return _this.table.updateScrollY();
	    });
	  },
	  changeSortCondition: function changeSortCondition(states) {
	    var _this2 = this;

	    states.data = sortData(states.filteredData || states._data || [], states);

	    this.table.$emit('sort-change', {
	      column: this.states.sortingColumn,
	      prop: this.states.sortProp,
	      order: this.states.sortOrder
	    });

	    _vue2.default.nextTick(function () {
	      return _this2.table.updateScrollY();
	    });
	  },
	  filterChange: function filterChange(states, options) {
	    var _this3 = this;

	    var column = options.column,
	        values = options.values,
	        silent = options.silent;

	    if (values && !Array.isArray(values)) {
	      values = [values];
	    }

	    var prop = column.property;
	    var filters = {};

	    if (prop) {
	      states.filters[column.id] = values;
	      filters[column.columnKey || column.id] = values;
	    }

	    var data = states._data;

	    Object.keys(states.filters).forEach(function (columnId) {
	      var values = states.filters[columnId];
	      if (!values || values.length === 0) return;
	      var column = (0, _util.getColumnById)(_this3.states, columnId);
	      if (column && column.filterMethod) {
	        data = data.filter(function (row) {
	          return values.some(function (value) {
	            return column.filterMethod.call(null, value, row);
	          });
	        });
	      }
	    });

	    states.filteredData = data;
	    states.data = sortData(data, states);

	    if (!silent) {
	      this.table.$emit('filter-change', filters);
	    }

	    _vue2.default.nextTick(function () {
	      return _this3.table.updateScrollY();
	    });
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

	    this.updateColumns(); // hack for dynamics insert column
	    this.scheduleLayout();
	  },
	  removeColumn: function removeColumn(states, column) {
	    var _columns = states._columns;
	    if (_columns) {
	      _columns.splice(_columns.indexOf(column), 1);
	    }

	    this.updateColumns(); // hack for dynamics remove column
	    this.scheduleLayout();
	  },
	  setHoverRow: function setHoverRow(states, row) {
	    states.hoverRow = row;
	  },
	  setCurrentRow: function setCurrentRow(states, row) {
	    var oldCurrentRow = states.currentRow;
	    states.currentRow = row;

	    if (oldCurrentRow !== row) {
	      this.table.$emit('current-change', row, oldCurrentRow);
	    }
	  },
	  rowSelectedChanged: function rowSelectedChanged(states, row) {
	    var changed = toggleRowSelection(states, row);
	    var selection = states.selection;

	    if (changed) {
	      var table = this.table;
	      table.$emit('selection-change', selection);
	      table.$emit('select', selection, row);
	    }

	    this.updateAllSelected();
	  },


	  toggleRowExpanded: function toggleRowExpanded(states, row, expanded) {
	    var expandRows = states.expandRows;
	    if (typeof expanded !== 'undefined') {
	      var index = expandRows.indexOf(row);
	      if (expanded) {
	        if (index === -1) expandRows.push(row);
	      } else {
	        if (index !== -1) expandRows.splice(index, 1);
	      }
	    } else {
	      var _index = expandRows.indexOf(row);
	      if (_index === -1) {
	        expandRows.push(row);
	      } else {
	        expandRows.splice(_index, 1);
	      }
	    }
	    this.table.$emit('expand', row, expandRows.indexOf(row) !== -1);
	  },

	  toggleAllSelection: (0, _debounce2.default)(10, function (states) {
	    var data = states.data || [];
	    var value = !states.isAllSelected;
	    var selection = this.states.selection;
	    var selectionChanged = false;

	    data.forEach(function (item, index) {
	      if (states.selectable) {
	        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
	          selectionChanged = true;
	        }
	      } else {
	        if (toggleRowSelection(states, item, value)) {
	          selectionChanged = true;
	        }
	      }
	    });

	    var table = this.table;
	    if (selectionChanged) {
	      table.$emit('selection-change', selection);
	    }
	    table.$emit('select-all', selection);
	    states.isAllSelected = value;
	  })
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

	TableStore.prototype.updateColumns = function () {
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
	  states.originColumns = [].concat(states.fixedColumns).concat(_columns.filter(function (column) {
	    return !column.fixed;
	  })).concat(states.rightFixedColumns);
	  states.columns = doFlattenColumns(states.originColumns);
	  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
	};

	TableStore.prototype.isSelected = function (row) {
	  return (this.states.selection || []).indexOf(row) > -1;
	};

	TableStore.prototype.clearSelection = function () {
	  var states = this.states;
	  states.isAllSelected = false;
	  var oldSelection = states.selection;
	  states.selection = [];
	  if (oldSelection.length > 0) {
	    this.table.$emit('selection-change', states.selection);
	  }
	};

	TableStore.prototype.setExpandRowKeys = function (rowKeys) {
	  var expandRows = [];
	  var data = this.states.data;
	  var rowKey = this.states.rowKey;
	  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
	  var keysMap = getKeysMap(data, rowKey);
	  rowKeys.forEach(function (key) {
	    var info = keysMap[key];
	    if (info) {
	      expandRows.push(info.row);
	    }
	  });

	  this.states.expandRows = expandRows;
	};

	TableStore.prototype.toggleRowSelection = function (row, selected) {
	  var changed = toggleRowSelection(this.states, row, selected);
	  if (changed) {
	    this.table.$emit('selection-change', this.states.selection);
	  }
	};

	TableStore.prototype.cleanSelection = function () {
	  var selection = this.states.selection || [];
	  var data = this.states.data;
	  var rowKey = this.states.rowKey;
	  var deleted = void 0;
	  if (rowKey) {
	    deleted = [];
	    var selectedMap = getKeysMap(selection, rowKey);
	    var dataMap = getKeysMap(data, rowKey);
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

	  deleted.forEach(function (deletedItem) {
	    selection.splice(selection.indexOf(deletedItem), 1);
	  });

	  if (deleted.length) {
	    this.table.$emit('selection-change', selection);
	  }
	};

	TableStore.prototype.updateAllSelected = function () {
	  var states = this.states;
	  var selection = states.selection,
	      rowKey = states.rowKey,
	      selectable = states.selectable,
	      data = states.data;

	  if (!data || data.length === 0) {
	    states.isAllSelected = false;
	    return;
	  }

	  var selectedMap = void 0;
	  if (rowKey) {
	    selectedMap = getKeysMap(states.selection, rowKey);
	  }

	  var isSelected = function isSelected(row) {
	    if (selectedMap) {
	      return !!selectedMap[(0, _util.getRowIdentity)(row, rowKey)];
	    } else {
	      return selection.indexOf(row) !== -1;
	    }
	  };

	  var isAllSelected = true;
	  var selectedCount = 0;
	  for (var i = 0, j = data.length; i < j; i++) {
	    var item = data[i];
	    if (selectable) {
	      var isRowSelectable = selectable.call(null, item, i);
	      if (isRowSelectable) {
	        if (!isSelected(item)) {
	          isAllSelected = false;
	          break;
	        } else {
	          selectedCount++;
	        }
	      }
	    } else {
	      if (!isSelected(item)) {
	        isAllSelected = false;
	        break;
	      } else {
	        selectedCount++;
	      }
	    }
	  }

	  if (selectedCount === 0) isAllSelected = false;

	  states.isAllSelected = isAllSelected;
	};

	TableStore.prototype.scheduleLayout = function () {
	  this.table.debouncedLayout();
	};

	TableStore.prototype.setCurrentRowKey = function (key) {
	  var states = this.states;
	  var rowKey = states.rowKey;
	  if (!rowKey) throw new Error('[Table] row-key should not be empty.');
	  var data = states.data || [];
	  var keysMap = getKeysMap(data, rowKey);
	  var info = keysMap[key];
	  if (info) {
	    states.currentRow = info.row;
	  }
	};

	TableStore.prototype.updateCurrentRow = function () {
	  var states = this.states;
	  var table = this.table;
	  var data = states.data || [];
	  var oldCurrentRow = states.currentRow;

	  if (data.indexOf(oldCurrentRow) === -1) {
	    states.currentRow = null;

	    if (states.currentRow !== oldCurrentRow) {
	      table.$emit('current-change', null, oldCurrentRow);
	    }
	  }
	};

	TableStore.prototype.commit = function (name) {
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

	exports.default = TableStore;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getRowIdentity = exports.mousewheel = exports.getColumnByCell = exports.getColumnById = exports.orderBy = exports.getCell = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(219);

	var getCell = exports.getCell = function getCell(event) {
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

	var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod) {
	  if (typeof reverse === 'string') {
	    reverse = reverse === 'descending' ? -1 : 1;
	  }
	  if (!sortKey) {
	    return array;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;

	  // sort on a copy to avoid mutating original array
	  return array.slice().sort(sortMethod ? function (a, b) {
	    return sortMethod(a, b) ? order : -order;
	  } : function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? (0, _util.getValueByPath)(a, sortKey) : a;
	    b = isObject(b) ? (0, _util.getValueByPath)(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	};

	var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
	  var column = null;
	  table.columns.forEach(function (item) {
	    if (item.id === columnId) {
	      column = item;
	    }
	  });
	  return column;
	};

	var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
	  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
	  if (matches) {
	    return getColumnById(table, matches[0]);
	  }
	  return null;
	};

	var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	var mousewheel = exports.mousewheel = function mousewheel(element, callback) {
	  if (element && element.addEventListener) {
	    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback);
	  }
	};

	var getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
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

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _scrollbarWidth = __webpack_require__(261);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableLayout = function () {
	  function TableLayout(options) {
	    _classCallCheck(this, TableLayout);

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
	    this.footerHeight = 44; // Table Footer Height
	    this.viewportHeight = null; // Table Height - Scroll Bar Height
	    this.bodyHeight = null; // Table Height - Table Header Height
	    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
	    this.gutterWidth = (0, _scrollbarWidth2.default)();

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
	    if (typeof height !== 'string' && typeof height !== 'number') return;
	    var bodyWrapper = this.table.bodyWrapper;
	    if (this.table.$el && bodyWrapper) {
	      var body = bodyWrapper.querySelector('.el-table__body');
	      this.scrollY = body.offsetHeight > bodyWrapper.offsetHeight;
	    }
	  };

	  TableLayout.prototype.setHeight = function setHeight(value) {
	    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

	    var el = this.table.$el;
	    if (typeof value === 'string' && /^\d+$/.test(value)) {
	      value = Number(value);
	    }

	    this.height = value;

	    if (!el) return;
	    if (typeof value === 'number') {
	      el.style[prop] = value + 'px';

	      this.updateHeight();
	    } else if (typeof value === 'string') {
	      if (value === '') {
	        el.style[prop] = '';
	      }
	      this.updateHeight();
	    }
	  };

	  TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
	    return this.setHeight(value, 'max-height');
	  };

	  TableLayout.prototype.updateHeight = function updateHeight() {
	    var height = this.tableHeight = this.table.$el.clientHeight;
	    var noData = !this.table.data || this.table.data.length === 0;
	    var _table$$refs = this.table.$refs,
	        headerWrapper = _table$$refs.headerWrapper,
	        footerWrapper = _table$$refs.footerWrapper;

	    var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
	    if (this.showHeader && !headerWrapper) return;
	    if (!this.showHeader) {
	      this.headerHeight = 0;
	      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
	        this.bodyHeight = height - footerHeight + (footerWrapper ? 1 : 0);
	      }
	      this.fixedBodyHeight = this.scrollX ? height - this.gutterWidth : height;
	    } else {
	      var headerHeight = this.headerHeight = headerWrapper.offsetHeight;
	      var bodyHeight = height - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
	      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
	        this.bodyHeight = bodyHeight;
	      }
	      this.fixedBodyHeight = this.scrollX ? bodyHeight - this.gutterWidth : bodyHeight;
	    }
	    this.viewportHeight = this.scrollX ? height - (noData ? 0 : this.gutterWidth) : height;
	  };

	  TableLayout.prototype.update = function update() {
	    var fit = this.fit;
	    var columns = this.table.columns;
	    var bodyWidth = this.table.$el.clientWidth;
	    var bodyMinWidth = 0;

	    var flattenColumns = [];
	    columns.forEach(function (column) {
	      if (column.isColumnGroup) {
	        flattenColumns.push.apply(flattenColumns, column.columns);
	      } else {
	        flattenColumns.push(column);
	      }
	    });

	    var flexColumns = flattenColumns.filter(function (column) {
	      return typeof column.width !== 'number';
	    });

	    if (flexColumns.length > 0 && fit) {
	      flattenColumns.forEach(function (column) {
	        bodyMinWidth += column.width || column.minWidth || 80;
	      });

	      if (bodyMinWidth < bodyWidth - this.gutterWidth) {
	        // DON'T HAVE SCROLL BAR
	        this.scrollX = false;

	        var totalFlexWidth = bodyWidth - this.gutterWidth - bodyMinWidth;

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
	        fixedWidth += column.realWidth;
	      });

	      this.fixedWidth = fixedWidth;
	    }

	    var rightFixedColumns = this.store.states.rightFixedColumns;
	    if (rightFixedColumns.length > 0) {
	      var rightFixedWidth = 0;
	      rightFixedColumns.forEach(function (column) {
	        rightFixedWidth += column.realWidth;
	      });

	      this.rightFixedWidth = rightFixedWidth;
	    }
	  };

	  return TableLayout;
	}();

	exports.default = TableLayout;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _util = __webpack_require__(315);

	var _dom = __webpack_require__(123);

	var _checkbox = __webpack_require__(313);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    ElCheckbox: _checkbox2.default
	  },

	  props: {
	    store: {
	      required: true
	    },
	    stripe: Boolean,
	    context: {},
	    layout: {
	      required: true
	    },
	    rowClassName: [String, Function],
	    rowStyle: [Object, Function],
	    fixed: String,
	    highlight: Boolean
	  },

	  render: function render(h) {
	    var _this = this;

	    var columnsHidden = this.columns.map(function (column, index) {
	      return _this.isColumnHidden(index);
	    });
	    return h(
	      'table',
	      {
	        'class': 'el-table__body',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'colgroup',
	        null,
	        [this._l(this.columns, function (column) {
	          return h(
	            'col',
	            {
	              attrs: {
	                name: column.id,
	                width: column.realWidth || column.width
	              }
	            },
	            []
	          );
	        })]
	      ), h(
	        'tbody',
	        null,
	        [this._l(this.data, function (row, $index) {
	          return [h(
	            'tr',
	            {
	              style: _this.rowStyle ? _this.getRowStyle(row, $index) : null,
	              key: _this.table.rowKey ? _this.getKeyOfRow(row, $index) : $index,
	              on: {
	                'dblclick': function dblclick($event) {
	                  return _this.handleDoubleClick($event, row);
	                },
	                'click': function click($event) {
	                  return _this.handleClick($event, row);
	                },
	                'contextmenu': function contextmenu($event) {
	                  return _this.handleContextMenu($event, row);
	                },
	                'mouseenter': function mouseenter(_) {
	                  return _this.handleMouseEnter($index);
	                },
	                'mouseleave': function mouseleave(_) {
	                  return _this.handleMouseLeave();
	                }
	              },

	              'class': [_this.getRowClass(row, $index)] },
	            [_this._l(_this.columns, function (column, cellIndex) {
	              return h(
	                'td',
	                {
	                  'class': [column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden' : ''],
	                  on: {
	                    'mouseenter': function mouseenter($event) {
	                      return _this.handleCellMouseEnter($event, row);
	                    },
	                    'mouseleave': _this.handleCellMouseLeave
	                  }
	                },
	                [column.renderCell.call(_this._renderProxy, h, { row: row, column: column, $index: $index, store: _this.store, _self: _this.context || _this.table.$vnode.context }, columnsHidden[cellIndex])]
	              );
	            }), !_this.fixed && _this.layout.scrollY && _this.layout.gutterWidth ? h(
	              'td',
	              { 'class': 'gutter' },
	              []
	            ) : '']
	          ), _this.store.states.expandRows.indexOf(row) > -1 ? h(
	            'tr',
	            null,
	            [h(
	              'td',
	              {
	                attrs: { colspan: _this.columns.length },
	                'class': 'el-table__expanded-cell' },
	              [_this.table.renderExpanded ? _this.table.renderExpanded(h, { row: row, $index: $index, store: _this.store }) : '']
	            )]
	          ) : ''];
	        }).concat(this._self.$parent.$slots.append).concat(h(
	          'el-tooltip',
	          {
	            attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
	            ref: 'tooltip' },
	          []
	        ))]
	      )]
	    );
	  },


	  watch: {
	    'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
	      if (!this.store.states.isComplex) return;
	      var el = this.$el;
	      if (!el) return;
	      var rows = el.querySelectorAll('tbody > tr.el-table__row');
	      var oldRow = rows[oldVal];
	      var newRow = rows[newVal];
	      if (oldRow) {
	        (0, _dom.removeClass)(oldRow, 'hover-row');
	      }
	      if (newRow) {
	        (0, _dom.addClass)(newRow, 'hover-row');
	      }
	    },
	    'store.states.currentRow': function storeStatesCurrentRow(newVal, oldVal) {
	      if (!this.highlight) return;
	      var el = this.$el;
	      if (!el) return;
	      var data = this.store.states.data;
	      var rows = el.querySelectorAll('tbody > tr.el-table__row');
	      var oldRow = rows[data.indexOf(oldVal)];
	      var newRow = rows[data.indexOf(newVal)];
	      if (oldRow) {
	        (0, _dom.removeClass)(oldRow, 'current-row');
	      } else if (rows) {
	        [].forEach.call(rows, function (row) {
	          return (0, _dom.removeClass)(row, 'current-row');
	        });
	      }
	      if (newRow) {
	        (0, _dom.addClass)(newRow, 'current-row');
	      }
	    }
	  },

	  computed: {
	    table: function table() {
	      return this.$parent;
	    },
	    data: function data() {
	      return this.store.states.data;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    }
	  },

	  data: function data() {
	    return {
	      tooltipContent: ''
	    };
	  },
	  created: function created() {
	    this.activateTooltip = (0, _debounce2.default)(50, function (tooltip) {
	      return tooltip.handleShowPopper();
	    });
	  },


	  methods: {
	    getKeyOfRow: function getKeyOfRow(row, index) {
	      var rowKey = this.table.rowKey;
	      if (rowKey) {
	        return (0, _util.getRowIdentity)(row, rowKey);
	      }
	      return index;
	    },
	    isColumnHidden: function isColumnHidden(index) {
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        return index < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    },
	    getRowStyle: function getRowStyle(row, index) {
	      var rowStyle = this.rowStyle;
	      if (typeof rowStyle === 'function') {
	        return rowStyle.call(null, row, index);
	      }
	      return rowStyle;
	    },
	    getRowClass: function getRowClass(row, index) {
	      var classes = ['el-table__row'];

	      if (this.stripe && index % 2 === 1) {
	        classes.push('el-table__row--striped');
	      }
	      var rowClassName = this.rowClassName;
	      if (typeof rowClassName === 'string') {
	        classes.push(rowClassName);
	      } else if (typeof rowClassName === 'function') {
	        classes.push(rowClassName.call(null, row, index) || '');
	      }

	      return classes.join(' ');
	    },
	    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
	      var table = this.table;
	      var cell = (0, _util.getCell)(event);

	      if (cell) {
	        var column = (0, _util.getColumnByCell)(table, cell);
	        var hoverState = table.hoverState = { cell: cell, column: column, row: row };
	        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
	      }

	      // 判断是否text-overflow, 如果是就显示tooltip
	      var cellChild = event.target.querySelector('.cell');

	      if ((0, _dom.hasClass)(cellChild, 'el-tooltip') && cellChild.scrollWidth > cellChild.offsetWidth) {
	        var tooltip = this.$refs.tooltip;

	        this.tooltipContent = cell.innerText;
	        tooltip.referenceElm = cell;
	        tooltip.$refs.popper.style.display = 'none';
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
	      var cell = (0, _util.getCell)(event);
	      if (!cell) return;

	      var oldHoverState = this.table.hoverState;
	      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
	    },
	    handleMouseEnter: function handleMouseEnter(index) {
	      this.store.commit('setHoverRow', index);
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.store.commit('setHoverRow', null);
	    },
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
	      var cell = (0, _util.getCell)(event);
	      var column = void 0;
	      if (cell) {
	        column = (0, _util.getColumnByCell)(table, cell);
	        if (column) {
	          table.$emit('cell-' + name, row, column, cell, event);
	        }
	      }
	      table.$emit('row-' + name, row, event, column);
	    },
	    handleExpandClick: function handleExpandClick(row) {
	      this.store.commit('toggleRowExpanded', row);
	    }
	  }
	};
	// import ElTooltip from 'element-ui/packages/tooltip';

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _dom = __webpack_require__(123);

	var _checkbox = __webpack_require__(313);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(270);

	var _tag2 = _interopRequireDefault(_tag);

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	var _filterPanel = __webpack_require__(319);

	var _filterPanel2 = _interopRequireDefault(_filterPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	exports.default = {
	  name: 'ElTableHeader',

	  render: function render(h) {
	    var _this = this;

	    var originColumns = this.store.states.originColumns;
	    var columnRows = convertToRows(originColumns, this.columns);

	    return h(
	      'table',
	      {
	        'class': 'el-table__header',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'colgroup',
	        null,
	        [this._l(this.columns, function (column) {
	          return h(
	            'col',
	            {
	              attrs: {
	                name: column.id,
	                width: column.realWidth || column.width
	              }
	            },
	            []
	          );
	        }), !this.fixed && this.layout.gutterWidth ? h(
	          'col',
	          {
	            attrs: { name: 'gutter', width: this.layout.scrollY ? this.layout.gutterWidth : '' }
	          },
	          []
	        ) : '']
	      ), h(
	        'thead',
	        null,
	        [this._l(columnRows, function (columns, rowIndex) {
	          return h(
	            'tr',
	            null,
	            [_this._l(columns, function (column, cellIndex) {
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
	                    }
	                  },

	                  'class': [column.id, column.order, column.headerAlign, column.className || '', rowIndex === 0 && _this.isCellHidden(cellIndex, columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] },
	                [h(
	                  'div',
	                  { 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
	                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
	                    'span',
	                    { 'class': 'caret-wrapper', on: {
	                        'click': function click($event) {
	                          return _this.handleSortClick($event, column);
	                        }
	                      }
	                    },
	                    [h(
	                      'i',
	                      { 'class': 'sort-caret ascending', on: {
	                          'click': function click($event) {
	                            return _this.handleSortClick($event, column, 'ascending');
	                          }
	                        }
	                      },
	                      []
	                    ), h(
	                      'i',
	                      { 'class': 'sort-caret descending', on: {
	                          'click': function click($event) {
	                            return _this.handleSortClick($event, column, 'descending');
	                          }
	                        }
	                      },
	                      []
	                    )]
	                  ) : '', column.filterable ? h(
	                    'span',
	                    { 'class': 'el-table__column-filter-trigger', on: {
	                        'click': function click($event) {
	                          return _this.handleFilterClick($event, column);
	                        }
	                      }
	                    },
	                    [h(
	                      'i',
	                      { 'class': ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] },
	                      []
	                    )]
	                  ) : '']
	                )]
	              );
	            }), !_this.fixed && _this.layout.gutterWidth ? h(
	              'th',
	              { 'class': 'gutter', style: { width: _this.layout.scrollY ? _this.layout.gutterWidth + 'px' : '0' } },
	              []
	            ) : '']
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
	    layout: {
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
	    ElCheckbox: _checkbox2.default,
	    ElTag: _tag2.default
	  },

	  computed: {
	    isAllSelected: function isAllSelected() {
	      return this.store.states.isAllSelected;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    }
	  },

	  created: function created() {
	    this.filterPanels = {};
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    if (this.defaultSort.prop) {
	      var states = this.store.states;
	      states.sortProp = this.defaultSort.prop;
	      states.sortOrder = this.defaultSort.order || 'ascending';
	      this.$nextTick(function (_) {
	        for (var i = 0, length = _this2.columns.length; i < length; i++) {
	          var column = _this2.columns[i];
	          if (column.property === states.sortProp) {
	            column.order = states.sortOrder;
	            states.sortingColumn = column;
	            break;
	          }
	        }

	        if (states.sortingColumn) {
	          _this2.store.commit('changeSortCondition');
	        }
	      });
	    }
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
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        var before = 0;
	        for (var i = 0; i < index; i++) {
	          before += columns[i].colSpan;
	        }
	        return before < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    },
	    toggleAllSelection: function toggleAllSelection() {
	      this.store.commit('toggleAllSelection');
	    },
	    handleFilterClick: function handleFilterClick(event, column) {
	      event.stopPropagation();
	      var target = event.target;
	      var cell = target.parentNode;
	      var table = this.$parent;

	      var filterPanel = this.filterPanels[column.id];

	      if (filterPanel && column.filterOpened) {
	        filterPanel.showPopper = false;
	        return;
	      }

	      if (!filterPanel) {
	        filterPanel = new _vue2.default(_filterPanel2.default);
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
	      } else if (column.filters && !column.sortable) {
	        this.handleFilterClick(event, column);
	      }

	      this.$parent.$emit('header-click', column, event);
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

	        (0, _dom.addClass)(columnEl, 'noclick');

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
	            (0, _dom.removeClass)(columnEl, 'noclick');
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
	          this.draggingColumn = column;
	        } else if (!this.dragging) {
	          bodyStyle.cursor = '';
	          this.draggingColumn = null;
	        }
	      }
	    },
	    handleMouseOut: function handleMouseOut() {
	      if (this.$isServer) return;
	      document.body.style.cursor = '';
	    },
	    toggleOrder: function toggleOrder(order) {
	      return !order ? 'ascending' : order === 'ascending' ? 'descending' : null;
	    },
	    handleSortClick: function handleSortClick(event, column, givenOrder) {
	      event.stopPropagation();
	      var order = givenOrder || this.toggleOrder(column.order);

	      var target = event.target;
	      while (target && target.tagName !== 'TH') {
	        target = target.parentNode;
	      }

	      if (target && target.tagName === 'TH') {
	        if ((0, _dom.hasClass)(target, 'noclick')) {
	          (0, _dom.removeClass)(target, 'noclick');
	          return;
	        }
	      }

	      if (!column.sortable) return;

	      var states = this.store.states;
	      var sortProp = states.sortProp;
	      var sortOrder = void 0;
	      var sortingColumn = states.sortingColumn;

	      if (sortingColumn !== column) {
	        if (sortingColumn) {
	          sortingColumn.order = null;
	        }
	        states.sortingColumn = column;
	        sortProp = column.property;
	      }

	      if (!order) {
	        sortOrder = column.order = null;
	        states.sortingColumn = null;
	        sortProp = null;
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
	};

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(320),
	  /* template */
	  __webpack_require__(323),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(13);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _popup = __webpack_require__(138);

	var _locale = __webpack_require__(61);

	var _locale2 = _interopRequireDefault(_locale);

	var _clickoutside = __webpack_require__(10);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _dropdown = __webpack_require__(321);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _checkbox = __webpack_require__(313);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkboxGroup = __webpack_require__(322);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElTableFilterPanel',

	  mixins: [_vuePopper2.default, _locale2.default],

	  directives: {
	    Clickoutside: _clickoutside2.default
	  },

	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElCheckboxGroup: _checkboxGroup2.default
	  },

	  props: {
	    placement: {
	      type: String,
	      default: 'bottom-end'
	    }
	  },

	  customRender: function customRender(h) {
	    return h(
	      'div',
	      { 'class': 'el-table-filter' },
	      [h(
	        'div',
	        { 'class': 'el-table-filter__content' },
	        []
	      ), h(
	        'div',
	        { 'class': 'el-table-filter__bottom' },
	        [h(
	          'button',
	          {
	            on: {
	              'click': this.handleConfirm
	            }
	          },
	          [this.t('el.table.confirmFilter')]
	        ), h(
	          'button',
	          {
	            on: {
	              'click': this.handleReset
	            }
	          },
	          [this.t('el.table.resetFilter')]
	        )]
	      )]
	    );
	  },


	  methods: {
	    isActive: function isActive(filter) {
	      return filter.value === this.filterValue;
	    },
	    handleOutsideClick: function handleOutsideClick() {
	      this.showPopper = false;
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
	    var _this = this;

	    this.popperElm = this.$el;
	    this.referenceElm = this.cell;
	    this.table.bodyWrapper.addEventListener('scroll', function () {
	      _this.updatePopper();
	    });

	    this.$watch('showPopper', function (value) {
	      if (_this.column) _this.column.filterOpened = value;
	      if (value) {
	        _dropdown2.default.open(_this);
	      } else {
	        _dropdown2.default.close(_this);
	      }
	    });
	  },

	  watch: {
	    showPopper: function showPopper(val) {
	      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < _popup.PopupManager.zIndex) {
	        this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
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
	//
	//
	//
	//
	//
	//
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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dropdowns = [];

	!_vue2.default.prototype.$isServer && document.addEventListener('click', function (event) {
	  dropdowns.forEach(function (dropdown) {
	    var target = event.target;
	    if (!dropdown || !dropdown.$el) return;
	    if (target === dropdown.$el || dropdown.$el.contains(target)) {
	      return;
	    }
	    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
	  });
	});

	exports.default = {
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
	};

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/checkbox-group");

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    }
	  }, [(_vm.multiple) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    staticClass: "el-table-filter"
	  }, [_c('div', {
	    staticClass: "el-table-filter__content"
	  }, [_c('el-checkbox-group', {
	    staticClass: "el-table-filter__checkbox-group",
	    model: {
	      value: (_vm.filteredValue),
	      callback: function($$v) {
	        _vm.filteredValue = $$v
	      },
	      expression: "filteredValue"
	    }
	  }, _vm._l((_vm.filters), function(filter) {
	    return _c('el-checkbox', {
	      key: filter.value,
	      attrs: {
	        "label": filter.value
	      }
	    }, [_vm._v(_vm._s(filter.text))])
	  }))], 1), _c('div', {
	    staticClass: "el-table-filter__bottom"
	  }, [_c('button', {
	    class: {
	      'is-disabled': _vm.filteredValue.length === 0
	    },
	    attrs: {
	      "disabled": _vm.filteredValue.length === 0
	    },
	    on: {
	      "click": _vm.handleConfirm
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.table.confirmFilter')))]), _c('button', {
	    on: {
	      "click": _vm.handleReset
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]) : _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    staticClass: "el-table-filter"
	  }, [_c('ul', {
	    staticClass: "el-table-filter__list"
	  }, [_c('li', {
	    staticClass: "el-table-filter__list-item",
	    class: {
	      'is-active': !_vm.filterValue
	    },
	    on: {
	      "click": function($event) {
	        _vm.handleSelect(null)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]), _vm._l((_vm.filters), function(filter) {
	    return _c('li', {
	      key: filter.value,
	      staticClass: "el-table-filter__list-item",
	      class: {
	        'is-active': _vm.isActive(filter)
	      },
	      attrs: {
	        "label": filter.value
	      },
	      on: {
	        "click": function($event) {
	          _vm.handleSelect(filter.value)
	        }
	      }
	    }, [_vm._v(_vm._s(filter.text))])
	  })], 2)])])
	},staticRenderFns: []}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _name$render$props$da;

	var _dom = __webpack_require__(123);

	var _checkbox = __webpack_require__(313);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(270);

	var _tag2 = _interopRequireDefault(_tag);

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	var _filterPanel = __webpack_require__(319);

	var _filterPanel2 = _interopRequireDefault(_filterPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	function MySlot(props) {
	  return 'div', {
	    class: 'cell'
	  }, this.$slots.default;
	};

	exports.default = (_name$render$props$da = {
	  name: 'ElTableFilter',

	  render: function render(h) {
	    var _this = this;

	    var originColumns = this.store.states.originColumns;
	    var columnRows = convertToRows(originColumns, this.columns);

	    return h('table', {
	      class: 'el-table__header',
	      attrs: {
	        cellspacing: 0,
	        cellpadding: 0,
	        border: 0
	      }
	    }, [h('colgroup', this.columns.map(function (column) {
	      return h('col', {
	        attrs: {
	          name: column.id,
	          width: column.realWidth || column.width
	        }
	      });
	    })), h('tbody', [h('tr', this.newFilterData.map(function (filter) {
	      if (filter.searchItem) {
	        return h('td', [h('div', {
	          class: 'cell'
	        }, [_this.$scopedSlots.filter({
	          item: filter
	        })])]);
	      } else {
	        return h('td');
	      }
	    }))])]);
	  },


	  props: {
	    fixed: String,
	    store: {
	      required: true
	    },
	    layout: {
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
	    },
	    filterData: Array
	  },

	  data: function data() {
	    return {
	      str: ''
	    };
	  },


	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElTag: _tag2.default
	  },

	  computed: {
	    isAllSelected: function isAllSelected() {
	      return this.store.states.isAllSelected;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    },
	    newFilterData: function newFilterData() {
	      var arr = [{}];
	      return arr.concat(this.filterData);
	    }
	  },

	  created: function created() {
	    this.filterPanels = {};
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    if (this.defaultSort.prop) {
	      var states = this.store.states;
	      states.sortProp = this.defaultSort.prop;
	      states.sortOrder = this.defaultSort.order || 'ascending';
	      this.$nextTick(function (_) {
	        for (var i = 0, length = _this2.columns.length; i < length; i++) {
	          var column = _this2.columns[i];
	          if (column.property === states.sortProp) {
	            column.order = states.sortOrder;
	            states.sortingColumn = column;
	            break;
	          }
	        }

	        if (states.sortingColumn) {
	          _this2.store.commit('changeSortCondition');
	        }
	      });
	    }
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
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        var before = 0;
	        for (var i = 0; i < index; i++) {
	          before += columns[i].colSpan;
	        }
	        return before < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    },
	    toggleAllSelection: function toggleAllSelection() {
	      this.store.commit('toggleAllSelection');
	    },
	    handleFilterClick: function handleFilterClick(event, column) {
	      event.stopPropagation();
	      var target = event.target;
	      var cell = target.parentNode;
	      var table = this.$parent;

	      var filterPanel = this.filterPanels[column.id];

	      if (filterPanel && column.filterOpened) {
	        filterPanel.showPopper = false;
	        return;
	      }

	      if (!filterPanel) {
	        filterPanel = new _vue2.default(_filterPanel2.default);
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
	      } else if (column.filters && !column.sortable) {
	        this.handleFilterClick(event, column);
	      }

	      this.$parent.$emit('header-click', column, event);
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

	        (0, _dom.addClass)(columnEl, 'noclick');

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
	            (0, _dom.removeClass)(columnEl, 'noclick');
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
	          this.draggingColumn = column;
	        } else if (!this.dragging) {
	          bodyStyle.cursor = '';
	          this.draggingColumn = null;
	        }
	      }
	    },
	    handleMouseOut: function handleMouseOut() {
	      if (this.$isServer) return;
	      document.body.style.cursor = '';
	    },
	    toggleOrder: function toggleOrder(order) {
	      return !order ? 'ascending' : order === 'ascending' ? 'descending' : null;
	    },
	    handleSortClick: function handleSortClick(event, column, givenOrder) {
	      event.stopPropagation();
	      var order = givenOrder || this.toggleOrder(column.order);

	      var target = event.target;
	      while (target && target.tagName !== 'TH') {
	        target = target.parentNode;
	      }

	      if (target && target.tagName === 'TH') {
	        if ((0, _dom.hasClass)(target, 'noclick')) {
	          (0, _dom.removeClass)(target, 'noclick');
	          return;
	        }
	      }

	      if (!column.sortable) return;

	      var states = this.store.states;
	      var sortProp = states.sortProp;
	      var sortOrder = void 0;
	      var sortingColumn = states.sortingColumn;

	      if (sortingColumn !== column) {
	        if (sortingColumn) {
	          sortingColumn.order = null;
	        }
	        states.sortingColumn = column;
	        sortProp = column.property;
	      }

	      if (!order) {
	        sortOrder = column.order = null;
	        states.sortingColumn = null;
	        sortProp = null;
	      } else {
	        sortOrder = column.order = order;
	      }

	      states.sortProp = sortProp;
	      states.sortOrder = sortOrder;

	      this.store.commit('changeSortCondition');
	    }
	  }

	}, _name$render$props$da['data'] = function data() {
	  return {
	    draggingColumn: null,
	    dragging: false,
	    dragState: {}
	  };
	}, _name$render$props$da);

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElTableFooter',

	  render: function render(h) {
	    var _this = this;

	    var sums = [];
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
	            return parseFloat((prev + curr).toFixed(precision));
	          } else {
	            return prev;
	          }
	        }, 0);
	      } else {
	        sums[index] = '';
	      }
	    });

	    return h(
	      'table',
	      {
	        'class': 'el-table__footer',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'colgroup',
	        null,
	        [this._l(this.columns, function (column) {
	          return h(
	            'col',
	            {
	              attrs: {
	                name: column.id,
	                width: column.realWidth || column.width
	              }
	            },
	            []
	          );
	        }), !this.fixed && this.layout.gutterWidth ? h(
	          'col',
	          {
	            attrs: { name: 'gutter', width: this.layout.scrollY ? this.layout.gutterWidth : '' }
	          },
	          []
	        ) : '']
	      ), h(
	        'tbody',
	        null,
	        [h(
	          'tr',
	          null,
	          [this._l(this.columns, function (column, cellIndex) {
	            return h(
	              'td',
	              {
	                attrs: {
	                  colspan: column.colSpan,
	                  rowspan: column.rowSpan
	                },
	                'class': [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] },
	              [h(
	                'el-tooltip',
	                {
	                  attrs: { effect: _this.table.tooltipEffect, placement: 'top', content: _this.summaryMethod ? _this.summaryMethod({ columns: _this.columns, data: _this.store.states.data })[cellIndex] : sums[cellIndex] },
	                  ref: 'tooltip' },
	                [h(
	                  'div',
	                  { 'class': ['cell', column.labelClassName] },
	                  [_this.summaryMethod ? _this.summaryMethod({ columns: _this.columns, data: _this.store.states.data })[cellIndex] : sums[cellIndex]]
	                )]
	              )]
	            );
	          }), !this.fixed && this.layout.gutterWidth ? h(
	            'td',
	            { 'class': 'gutter', style: { width: this.layout.scrollY ? this.layout.gutterWidth + 'px' : '0' } },
	            []
	          ) : '']
	        )]
	      )]
	    );
	  },


	  props: {
	    fixed: String,
	    store: {
	      required: true
	    },
	    layout: {
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

	  computed: {
	    table: function table() {
	      return this.$parent;
	    },
	    isAllSelected: function isAllSelected() {
	      return this.store.states.isAllSelected;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    }
	  },

	  methods: {
	    isCellHidden: function isCellHidden(index, columns) {
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        var before = 0;
	        for (var i = 0; i < index; i++) {
	          before += columns[i].colSpan;
	        }
	        return before < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    }
	  }
	};

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-table",
	    class: {
	      'el-table--fit': _vm.fit,
	      'el-table--striped': _vm.stripe,
	      'el-table--border': _vm.border,
	      'el-table--fluid-height': _vm.maxHeight,
	      'el-table--enable-row-hover': !_vm.store.states.isComplex,
	        'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
	    },
	    on: {
	      "mouseleave": function($event) {
	        _vm.handleMouseLeave($event)
	      }
	    }
	  }, [_c('div', {
	    ref: "hiddenColumns",
	    staticClass: "hidden-columns"
	  }, [_vm._t("default")], 2), (_vm.showHeader) ? _c('div', {
	    ref: "headerWrapper",
	    staticClass: "el-table__header-wrapper"
	  }, [_c('table-header', {
	    style: ({
	      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border,
	      "default-sort": _vm.defaultSort
	    }
	  })], 1) : _vm._e(), _c('div', {
	    ref: "filterWrapper",
	    staticClass: "v-table-filter"
	  }, [(_vm.advanced) ? _c('table-filter', {
	    style: ({
	      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border,
	      "filter-data": _vm.newFilterHead,
	      "default-sort": _vm.defaultSort
	    },
	    scopedSlots: _vm._u([{
	      key: "filter",
	      fn: function(props) {
	        return [_vm._t("table-filter", null, {
	          item: props.item
	        })]
	      }
	    }])
	  }) : _vm._e()], 1), _c('div', {
	    ref: "bodyWrapper",
	    staticClass: "el-table__body-wrapper",
	    style: ([_vm.bodyHeight]),
	    attrs: {
	      "id": "bodyWrapper"
	    }
	  }, [_c('table-body', {
	    ref: "tableBody",
	    style: ({
	      width: _vm.bodyWidth
	    }),
	    attrs: {
	      "context": _vm.context,
	      "store": _vm.store,
	      "stripe": _vm.stripe,
	      "layout": _vm.layout,
	      "row-class-name": _vm.rowClassName,
	      "row-style": _vm.rowStyle,
	      "highlight": _vm.highlightCurrentRow
	    }
	  }), (!_vm.data || _vm.data.length === 0) ? _c('div', {
	    staticClass: "el-table__empty-block"
	  }, [_c('span', {
	    staticClass: "el-table__empty-text"
	  }, [_vm._t("empty", [_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])], 2)]) : _vm._e()], 1), (_vm.showSummary) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.data && _vm.data.length > 0),
	      expression: "data && data.length > 0"
	    }],
	    ref: "footerWrapper",
	    staticClass: "el-table__footer-wrapper"
	  }, [_c('table-footer', {
	    style: ({
	      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border,
	      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
	      "summary-method": _vm.summaryMethod,
	      "default-sort": _vm.defaultSort
	    }
	  })], 1) : _vm._e(), (_vm.fixedColumns.length > 0) ? _c('div', {
	    ref: "fixedWrapper",
	    staticClass: "el-table__fixed",
	    style: ([{
	        width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	      },
	      _vm.fixedHeight,
	      _vm.fixedMinHeight
	    ])
	  }, [(_vm.showHeader) ? _c('div', {
	    ref: "fixedHeaderWrapper",
	    staticClass: "el-table__fixed-header-wrapper"
	  }, [_c('table-header', {
	    style: ({
	      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "border": _vm.border,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e(), _c('div', {
	    ref: "fixedFilterWrapper",
	    staticClass: "v-fixed-table-filter"
	  }, [(_vm.advanced) ? _c('table-filter', {
	    style: ({
	      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border,
	      "filter-data": _vm.newFilterHead,
	      "default-sort": _vm.defaultSort
	    }
	  }) : _vm._e()], 1), _c('div', {
	    ref: "fixedBodyWrapper",
	    staticClass: "el-table__fixed-body-wrapper",
	    style: (_vm.fixedStyle)
	  }, [_c('table-body', {
	    style: ({
	      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "store": _vm.store,
	      "stripe": _vm.stripe,
	      "layout": _vm.layout,
	      "highlight": _vm.highlightCurrentRow,
	      "row-class-name": _vm.rowClassName,
	      "row-style": _vm.rowStyle
	    }
	  })], 1), (_vm.showSummary) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.data && _vm.data.length > 0),
	      expression: "data && data.length > 0"
	    }],
	    ref: "fixedFooterWrapper",
	    staticClass: "el-table__fixed-footer-wrapper"
	  }, [_c('table-footer', {
	    style: ({
	      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "border": _vm.border,
	      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
	      "summary-method": _vm.summaryMethod,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e()]) : _vm._e(), (_vm.rightFixedColumns.length > 0) ? _c('div', {
	    ref: "rightFixedWrapper",
	    staticClass: "el-table__fixed-right",
	    style: ([{
	        width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	      },
	      {
	        right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 1)) + 'px' : ''
	      },
	      _vm.fixedHeight,
	      _vm.fixedMinHeight
	    ])
	  }, [(_vm.showHeader) ? _c('div', {
	    ref: "rightFixedHeaderWrapper",
	    staticClass: "el-table__fixed-header-wrapper"
	  }, [_c('table-header', {
	    style: ({
	      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "right",
	      "border": _vm.border,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e(), _c('div', {
	    ref: "rightFixedBodyWrapper",
	    staticClass: "el-table__fixed-body-wrapper",
	    style: (_vm.fixedStyle)
	  }, [_c('table-body', {
	    style: ({
	      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "right",
	      "store": _vm.store,
	      "stripe": _vm.stripe,
	      "layout": _vm.layout,
	      "row-class-name": _vm.rowClassName,
	      "row-style": _vm.rowStyle,
	      "highlight": _vm.highlightCurrentRow
	    }
	  })], 1), (_vm.showSummary) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.data && _vm.data.length > 0),
	      expression: "data && data.length > 0"
	    }],
	    ref: "rightFixedFooterWrapper",
	    staticClass: "el-table__fixed-footer-wrapper"
	  }, [_c('table-footer', {
	    style: ({
	      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "right",
	      "border": _vm.border,
	      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
	      "summary-method": _vm.summaryMethod,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e()]) : _vm._e(), (_vm.rightFixedColumns.length > 0) ? _c('div', {
	    staticClass: "el-table__fixed-right-patch",
	    style: ({
	      width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0',
	      height: _vm.layout.headerHeight + 'px'
	    })
	  }) : _vm._e(), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.resizeProxyVisible),
	      expression: "resizeProxyVisible"
	    }],
	    ref: "resizeProxy",
	    staticClass: "el-table__column-resize-proxy"
	  })])
	},staticRenderFns: []}

/***/ })

/******/ });