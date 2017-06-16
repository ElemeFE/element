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

	module.exports = __webpack_require__(362);


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

/***/ 60:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _src = __webpack_require__(363);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_src2.default.install = function (Vue) {
	  Vue.component(_src2.default.name, _src2.default);
	};

	exports.default = _src2.default;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(364),
	  /* template */
	  null,
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _uploadList = __webpack_require__(365);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _upload = __webpack_require__(369);

	var _upload2 = _interopRequireDefault(_upload);

	var _iframeUpload = __webpack_require__(375);

	var _iframeUpload2 = _interopRequireDefault(_iframeUpload);

	var _progress = __webpack_require__(367);

	var _progress2 = _interopRequireDefault(_progress);

	var _migrating = __webpack_require__(377);

	var _migrating2 = _interopRequireDefault(_migrating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	exports.default = {
	  name: 'ElUpload',

	  mixins: [_migrating2.default],

	  components: {
	    ElProgress: _progress2.default,
	    UploadList: _uploadList2.default,
	    Upload: _upload2.default,
	    IframeUpload: _iframeUpload2.default
	  },

	  provide: {
	    uploader: undefined
	  },

	  props: {
	    action: {
	      type: String,
	      required: true
	    },
	    headers: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    data: Object,
	    multiple: Boolean,
	    name: {
	      type: String,
	      default: 'file'
	    },
	    drag: Boolean,
	    dragger: Boolean,
	    withCredentials: Boolean,
	    showFileList: {
	      type: Boolean,
	      default: true
	    },
	    accept: String,
	    type: {
	      type: String,
	      default: 'select'
	    },
	    beforeUpload: Function,
	    onRemove: {
	      type: Function,
	      default: noop
	    },
	    onChange: {
	      type: Function,
	      default: noop
	    },
	    onPreview: {
	      type: Function
	    },
	    onSuccess: {
	      type: Function,
	      default: noop
	    },
	    onProgress: {
	      type: Function,
	      default: noop
	    },
	    onError: {
	      type: Function,
	      default: noop
	    },
	    fileList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    autoUpload: {
	      type: Boolean,
	      default: true
	    },
	    listType: {
	      type: String,
	      default: 'text' // text,picture,picture-card
	    },
	    httpRequest: Function,
	    disabled: Boolean
	  },

	  data: function data() {
	    return {
	      uploadFiles: [],
	      dragOver: false,
	      draging: false,
	      tempIndex: 1
	    };
	  },


	  watch: {
	    fileList: {
	      immediate: true,
	      handler: function handler(fileList) {
	        var _this = this;

	        this.uploadFiles = fileList.map(function (item) {
	          item.uid = item.uid || Date.now() + _this.tempIndex++;
	          item.status = 'success';
	          return item;
	        });
	      }
	    }
	  },

	  methods: {
	    handleStart: function handleStart(rawFile) {
	      rawFile.uid = Date.now() + this.tempIndex++;
	      var file = {
	        status: 'ready',
	        name: rawFile.name,
	        size: rawFile.size,
	        percentage: 0,
	        uid: rawFile.uid,
	        raw: rawFile
	      };

	      try {
	        file.url = URL.createObjectURL(rawFile);
	      } catch (err) {
	        console.error(err);
	        return;
	      }

	      this.uploadFiles.push(file);
	      this.onChange(file, this.uploadFiles);
	    },
	    handleProgress: function handleProgress(ev, rawFile) {
	      var file = this.getFile(rawFile);
	      this.onProgress(ev, file, this.uploadFiles);
	      file.status = 'uploading';
	      file.percentage = ev.percent || 0;
	    },
	    handleSuccess: function handleSuccess(res, rawFile) {
	      var file = this.getFile(rawFile);

	      if (file) {
	        file.status = 'success';
	        file.response = res;

	        this.onSuccess(res, file, this.uploadFiles);
	        this.onChange(file, this.uploadFiles);
	      }
	    },
	    handleError: function handleError(err, rawFile) {
	      var file = this.getFile(rawFile);
	      var fileList = this.uploadFiles;

	      file.status = 'fail';

	      fileList.splice(fileList.indexOf(file), 1);

	      this.onError(err, file, this.uploadFiles);
	      this.onChange(file, this.uploadFiles);
	    },
	    handleRemove: function handleRemove(file, raw) {
	      if (raw) {
	        file = this.getFile(raw);
	      }
	      this.abort(file);
	      var fileList = this.uploadFiles;
	      fileList.splice(fileList.indexOf(file), 1);
	      this.onRemove(file, fileList);
	    },
	    getFile: function getFile(rawFile) {
	      var fileList = this.uploadFiles;
	      var target;
	      fileList.every(function (item) {
	        target = rawFile.uid === item.uid ? item : null;
	        return !target;
	      });
	      return target;
	    },
	    abort: function abort(file) {
	      this.$refs['upload-inner'].abort(file);
	    },
	    clearFiles: function clearFiles() {
	      this.uploadFiles = [];
	    },
	    submit: function submit() {
	      var _this2 = this;

	      this.uploadFiles.filter(function (file) {
	        return file.status === 'ready';
	      }).forEach(function (file) {
	        _this2.$refs['upload-inner'].upload(file.raw);
	      });
	    },
	    getMigratingConfig: function getMigratingConfig() {
	      return {
	        props: {
	          'default-file-list': 'default-file-list is renamed to file-list.',
	          'show-upload-list': 'show-upload-list is renamed to show-file-list.',
	          'thumbnail-mode': 'thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan'
	        }
	      };
	    }
	  },

	  render: function render(h) {
	    var uploadList;

	    if (this.showFileList) {
	      uploadList = h(
	        _uploadList2.default,
	        {
	          attrs: {
	            listType: this.listType,
	            files: this.uploadFiles,

	            handlePreview: this.onPreview },
	          on: {
	            'remove': this.handleRemove
	          }
	        },
	        []
	      );
	    }

	    var uploadData = {
	      props: {
	        type: this.type,
	        drag: this.drag,
	        action: this.action,
	        multiple: this.multiple,
	        'before-upload': this.beforeUpload,
	        'with-credentials': this.withCredentials,
	        headers: this.headers,
	        name: this.name,
	        data: this.data,
	        accept: this.accept,
	        fileList: this.uploadFiles,
	        autoUpload: this.autoUpload,
	        listType: this.listType,
	        disabled: this.disabled,
	        'on-start': this.handleStart,
	        'on-progress': this.handleProgress,
	        'on-success': this.handleSuccess,
	        'on-error': this.handleError,
	        'on-preview': this.onPreview,
	        'on-remove': this.handleRemove,
	        'http-request': this.httpRequest
	      },
	      ref: 'upload-inner'
	    };

	    var trigger = this.$slots.trigger || this.$slots.default;
	    var uploadComponent = typeof FormData !== 'undefined' || this.$isServer ? h(
	      'upload',
	      uploadData,
	      [trigger]
	    ) : h(
	      'iframeUpload',
	      uploadData,
	      [trigger]
	    );

	    return h(
	      'div',
	      null,
	      [this.listType === 'picture-card' ? uploadList : '', this.$slots.trigger ? [uploadComponent, this.$slots.default] : uploadComponent, this.$slots.tip, this.listType !== 'picture-card' ? uploadList : '']
	    );
	  }
	};

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(366),
	  /* template */
	  __webpack_require__(368),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _locale = __webpack_require__(60);

	var _locale2 = _interopRequireDefault(_locale);

	var _progress = __webpack_require__(367);

	var _progress2 = _interopRequireDefault(_progress);

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

	exports.default = {
	  mixins: [_locale2.default],

	  components: { ElProgress: _progress2.default },

	  props: {
	    files: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    handlePreview: Function,
	    listType: String
	  },
	  methods: {
	    parsePercentage: function parsePercentage(val) {
	      return parseInt(val, 10);
	    },
	    handleClick: function handleClick(file) {
	      this.handlePreview && this.handlePreview(file);
	    }
	  }
	};

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/progress");

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition-group', {
	    class: ['el-upload-list', 'el-upload-list--' + _vm.listType],
	    attrs: {
	      "tag": "ul",
	      "name": "el-list"
	    }
	  }, _vm._l((_vm.files), function(file) {
	    return _c('li', {
	      key: file,
	      class: ['el-upload-list__item', 'is-' + file.status]
	    }, [(file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(_vm.listType) > -1) ? _c('img', {
	      staticClass: "el-upload-list__item-thumbnail",
	      attrs: {
	        "src": file.url,
	        "alt": ""
	      }
	    }) : _vm._e(), _c('a', {
	      staticClass: "el-upload-list__item-name",
	      on: {
	        "click": function($event) {
	          _vm.handleClick(file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-document"
	    }), _vm._v(_vm._s(file.name) + "\n    ")]), (file.status !== 'uploading') ? _c('label', {
	      staticClass: "el-upload-list__item-status-label"
	    }, [_c('i', {
	      class: {
	        'el-icon-upload-success': true,
	        'el-icon-circle-check': _vm.listType === 'text',
	          'el-icon-check': ['picture-card', 'picture'].indexOf(_vm.listType) > -1
	      }
	    }), _c('i', {
	      staticClass: "el-icon-close",
	      on: {
	        "click": function($event) {
	          _vm.$emit('remove', file)
	        }
	      }
	    })]) : _vm._e(), (file.status === 'uploading') ? _c('el-progress', {
	      attrs: {
	        "type": _vm.listType === 'picture-card' ? 'circle' : 'line',
	        "stroke-width": _vm.listType === 'picture-card' ? 6 : 2,
	        "percentage": _vm.parsePercentage(file.percentage)
	      }
	    }) : _vm._e(), (_vm.listType === 'picture-card') ? _c('span', {
	      staticClass: "el-upload-list__item-actions"
	    }, [(_vm.handlePreview && _vm.listType === 'picture-card') ? _c('span', {
	      staticClass: "el-upload-list__item-preview",
	      on: {
	        "click": function($event) {
	          _vm.handlePreview(file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-view"
	    })]) : _vm._e(), _c('span', {
	      staticClass: "el-upload-list__item-delete",
	      on: {
	        "click": function($event) {
	          _vm.$emit('remove', file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-delete2"
	    })])]) : _vm._e()], 1)
	  }))
	},staticRenderFns: []}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(370),
	  /* template */
	  null,
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ajax = __webpack_require__(371);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _uploadDragger = __webpack_require__(372);

	var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  inject: ['uploader'],
	  components: {
	    UploadDragger: _uploadDragger2.default
	  },
	  props: {
	    type: String,
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    data: Object,
	    headers: Object,
	    withCredentials: Boolean,
	    multiple: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    drag: Boolean,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    },
	    fileList: Array,
	    autoUpload: Boolean,
	    listType: String,
	    httpRequest: {
	      type: Function,
	      default: _ajax2.default
	    },
	    disabled: Boolean
	  },

	  data: function data() {
	    return {
	      mouseover: false,
	      reqs: {}
	    };
	  },


	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleChange: function handleChange(ev) {
	      var files = ev.target.files;

	      if (!files) return;
	      this.uploadFiles(files);
	      this.$refs.input.value = null;
	    },
	    uploadFiles: function uploadFiles(files) {
	      var _this = this;

	      var postFiles = Array.prototype.slice.call(files);
	      if (!this.multiple) {
	        postFiles = postFiles.slice(0, 1);
	      }

	      if (postFiles.length === 0) {
	        return;
	      }

	      postFiles.forEach(function (rawFile) {
	        _this.onStart(rawFile);
	        if (_this.autoUpload) _this.upload(rawFile);
	      });
	    },
	    upload: function upload(rawFile, file) {
	      var _this2 = this;

	      if (!this.beforeUpload) {
	        return this.post(rawFile);
	      }

	      var before = this.beforeUpload(rawFile);
	      if (before && before.then) {
	        before.then(function (processedFile) {
	          if (Object.prototype.toString.call(processedFile) === '[object File]') {
	            _this2.post(processedFile);
	          } else {
	            _this2.post(rawFile);
	          }
	        }, function () {
	          _this2.onRemove(rawFile, true);
	        });
	      } else if (before !== false) {
	        this.post(rawFile);
	      } else {
	        this.onRemove(rawFile, true);
	      }
	    },
	    abort: function abort(file) {
	      var reqs = this.reqs;

	      if (file) {
	        var uid = file;
	        if (file.uid) uid = file.uid;
	        if (reqs[uid]) {
	          reqs[uid].abort();
	        }
	      } else {
	        Object.keys(reqs).forEach(function (uid) {
	          if (reqs[uid]) reqs[uid].abort();
	          delete reqs[uid];
	        });
	      }
	    },
	    post: function post(rawFile) {
	      var _this3 = this;

	      var uid = rawFile.uid;

	      var options = {
	        headers: this.headers,
	        withCredentials: this.withCredentials,
	        file: rawFile,
	        data: this.data,
	        filename: this.name,
	        action: this.action,
	        onProgress: function onProgress(e) {
	          _this3.onProgress(e, rawFile);
	        },
	        onSuccess: function onSuccess(res) {
	          _this3.onSuccess(res, rawFile);
	          delete _this3.reqs[uid];
	        },
	        onError: function onError(err) {
	          _this3.onError(err, rawFile);
	          delete _this3.reqs[uid];
	        }
	      };
	      var req = this.httpRequest(options);
	      this.reqs[uid] = req;
	      if (req && req.then) {
	        req.then(options.onSuccess, options.onError);
	      }
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.$refs.input.click();
	      }
	    }
	  },

	  render: function render(h) {
	    var handleClick = this.handleClick,
	        drag = this.drag,
	        name = this.name,
	        handleChange = this.handleChange,
	        multiple = this.multiple,
	        accept = this.accept,
	        listType = this.listType,
	        uploadFiles = this.uploadFiles,
	        disabled = this.disabled;

	    var data = {
	      class: {
	        'el-upload': true
	      },
	      on: {
	        click: handleClick
	      }
	    };
	    data.class['el-upload--' + listType] = true;
	    return h(
	      'div',
	      data,
	      [drag ? h(
	        'upload-dragger',
	        {
	          attrs: { disabled: disabled },
	          on: {
	            'file': uploadFiles
	          }
	        },
	        [this.$slots.default]
	      ) : this.$slots.default, h(
	        'input',
	        { 'class': 'el-upload__input', attrs: { type: 'file', name: name, multiple: multiple, accept: accept },
	          ref: 'input', on: {
	            'change': handleChange
	          }
	        },
	        []
	      )]
	    );
	  }
	};

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = upload;
	function getError(action, option, xhr) {
	  var msg = void 0;
	  if (xhr.response) {
	    msg = xhr.status + ' ' + (xhr.response.error || xhr.response);
	  } else if (xhr.responseText) {
	    msg = xhr.status + ' ' + xhr.responseText;
	  } else {
	    msg = 'fail to post ' + action + ' ' + xhr.status;
	  }

	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }

	  var xhr = new XMLHttpRequest();
	  var action = option.action;

	  if (xhr.upload) {
	    xhr.upload.onprogress = function progress(e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();

	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }

	  formData.append(option.filename, option.file);

	  xhr.onerror = function error(e) {
	    option.onError(e);
	  };

	  xhr.onload = function onload() {
	    if (xhr.status < 200 || xhr.status >= 300) {
	      return option.onError(getError(action, option, xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };

	  xhr.open('post', action, true);

	  if (option.withCredentials && 'withCredentials' in xhr) {
	    xhr.withCredentials = true;
	  }

	  var headers = option.headers || {};

	  for (var item in headers) {
	    if (headers.hasOwnProperty(item) && headers[item] !== null) {
	      xhr.setRequestHeader(item, headers[item]);
	    }
	  }
	  xhr.send(formData);
	  return xhr;
	}

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(373),
	  /* template */
	  __webpack_require__(374),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 373:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
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
	  name: 'ElUploadDrag',
	  props: {
	    disabled: Boolean
	  },
	  data: function data() {
	    return {
	      dragover: false
	    };
	  },

	  methods: {
	    onDragover: function onDragover() {
	      if (!this.disabled) {
	        this.dragover = true;
	      }
	    },
	    onDrop: function onDrop(e) {
	      if (!this.disabled) {
	        this.dragover = false;
	        this.$emit('file', e.dataTransfer.files);
	      }
	    }
	  }
	};

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-upload-dragger",
	    class: {
	      'is-dragover': _vm.dragover
	    },
	    on: {
	      "drop": function($event) {
	        $event.preventDefault();
	        _vm.onDrop($event)
	      },
	      "dragover": function($event) {
	        $event.preventDefault();
	        _vm.onDragover($event)
	      },
	      "dragleave": function($event) {
	        $event.preventDefault();
	        _vm.dragover = false
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(376),
	  /* template */
	  null,
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _uploadDragger = __webpack_require__(372);

	var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    UploadDragger: _uploadDragger2.default
	  },
	  props: {
	    type: String,
	    data: {},
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    withCredentials: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    },
	    drag: Boolean,
	    listType: String,
	    disabled: Boolean
	  },

	  data: function data() {
	    return {
	      mouseover: false,
	      domain: '',
	      file: null,
	      submitting: false
	    };
	  },


	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.$refs.input.click();
	      }
	    },
	    handleChange: function handleChange(ev) {
	      var file = ev.target.value;
	      if (file) {
	        this.uploadFiles(file);
	      }
	    },
	    uploadFiles: function uploadFiles(file) {
	      if (this.submitting) return;
	      this.submitting = true;
	      this.file = file;
	      this.onStart(file);

	      var formNode = this.getFormNode();
	      var dataSpan = this.getFormDataNode();
	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data(file);
	      }
	      var inputs = [];
	      for (var key in data) {
	        if (data.hasOwnProperty(key)) {
	          inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
	        }
	      }
	      dataSpan.innerHTML = inputs.join('');
	      formNode.submit();
	      dataSpan.innerHTML = '';
	    },
	    getFormNode: function getFormNode() {
	      return this.$refs.form;
	    },
	    getFormDataNode: function getFormDataNode() {
	      return this.$refs.data;
	    }
	  },

	  created: function created() {
	    this.frameName = 'frame-' + Date.now();
	  },
	  mounted: function mounted() {
	    var self = this;
	    !this.$isServer && window.addEventListener('message', function (event) {
	      if (!self.file) return;
	      var targetOrigin = new URL(self.action).origin;
	      if (event.origin !== targetOrigin) return;
	      var response = event.data;
	      if (response.result === 'success') {
	        self.onSuccess(response, self.file);
	      } else if (response.result === 'failed') {
	        self.onError(response, self.file);
	      }
	      self.submitting = false;
	      self.file = null;
	    }, false);
	  },
	  render: function render(h) {
	    var drag = this.drag,
	        uploadFiles = this.uploadFiles,
	        listType = this.listType,
	        frameName = this.frameName,
	        disabled = this.disabled;

	    var oClass = { 'el-upload': true };
	    oClass['el-upload--' + listType] = true;

	    return h(
	      'div',
	      {
	        'class': oClass,
	        on: {
	          'click': this.handleClick
	        },
	        nativeOn: {
	          'drop': this.onDrop,
	          'dragover': this.handleDragover,
	          'dragleave': this.handleDragleave
	        }
	      },
	      [h(
	        'iframe',
	        {
	          on: {
	            'load': this.onload
	          },

	          ref: 'iframe',
	          attrs: { name: frameName
	          }
	        },
	        []
	      ), h(
	        'form',
	        { ref: 'form', attrs: { action: this.action, target: frameName, enctype: 'multipart/form-data', method: 'POST' }
	        },
	        [h(
	          'input',
	          {
	            'class': 'el-upload__input',
	            attrs: { type: 'file',

	              name: 'file',

	              accept: this.accept },
	            ref: 'input', on: {
	              'change': this.handleChange
	            }
	          },
	          []
	        ), h(
	          'input',
	          {
	            attrs: { type: 'hidden', name: 'documentDomain', value: this.$isServer ? '' : document.domain }
	          },
	          []
	        ), h(
	          'span',
	          { ref: 'data' },
	          []
	        )]
	      ), drag ? h(
	        'upload-dragger',
	        {
	          on: {
	            'file': uploadFiles
	          },
	          attrs: { disabled: disabled }
	        },
	        [this.$slots.default]
	      ) : this.$slots.default]
	    );
	  }
	};

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

	module.exports = require("element-ui/lib/mixins/migrating");

/***/ })

/******/ });