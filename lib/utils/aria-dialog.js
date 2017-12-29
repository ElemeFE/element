'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ariaUtils = require('./aria-utils');

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @constructor
 * @desc Dialog object providing modal focus management.
 *
 * Assumptions: The element serving as the dialog container is present in the
 * DOM and hidden. The dialog container has role='dialog'.
 *
 * @param dialogId
 *          The ID of the element serving as the dialog container.
 * @param focusAfterClosed
 *          Either the DOM node or the ID of the DOM node to focus when the
 *          dialog closes.
 * @param focusFirst
 *          Optional parameter containing either the DOM node or the ID of the
 *          DOM node to focus when the dialog opens. If not specified, the
 *          first focusable element in the dialog will receive focus.
 */
var aria = aria || {};
var tabEvent;

aria.Dialog = function (dialog, focusAfterClosed, focusFirst) {
  var _this = this;

  this.dialogNode = dialog;
  if (this.dialogNode === null || this.dialogNode.getAttribute('role') !== 'dialog') {
    throw new Error('Dialog() requires a DOM element with ARIA role of dialog.');
  }

  if (typeof focusAfterClosed === 'string') {
    this.focusAfterClosed = document.getElementById(focusAfterClosed);
  } else if ((typeof focusAfterClosed === 'undefined' ? 'undefined' : _typeof(focusAfterClosed)) === 'object') {
    this.focusAfterClosed = focusAfterClosed;
  } else {
    this.focusAfterClosed = null;
  }

  if (typeof focusFirst === 'string') {
    this.focusFirst = document.getElementById(focusFirst);
  } else if ((typeof focusFirst === 'undefined' ? 'undefined' : _typeof(focusFirst)) === 'object') {
    this.focusFirst = focusFirst;
  } else {
    this.focusFirst = null;
  }

  if (this.focusFirst) {
    this.focusFirst.focus();
  } else {
    _ariaUtils2.default.focusFirstDescendant(this.dialogNode);
  }

  this.lastFocus = document.activeElement;
  tabEvent = function tabEvent(e) {
    _this.trapFocus(e);
  };
  this.addListeners();
};

aria.Dialog.prototype.addListeners = function () {
  document.addEventListener('focus', tabEvent, true);
};

aria.Dialog.prototype.removeListeners = function () {
  document.removeEventListener('focus', tabEvent, true);
};

aria.Dialog.prototype.closeDialog = function () {
  var _this2 = this;

  this.removeListeners();
  if (this.focusAfterClosed) {
    setTimeout(function () {
      _this2.focusAfterClosed.focus();
    });
  }
};

aria.Dialog.prototype.trapFocus = function (event) {
  if (_ariaUtils2.default.IgnoreUtilFocusChanges) {
    return;
  }
  if (this.dialogNode.contains(event.target)) {
    this.lastFocus = event.target;
  } else {
    _ariaUtils2.default.focusFirstDescendant(this.dialogNode);
    if (this.lastFocus === document.activeElement) {
      _ariaUtils2.default.focusLastDescendant(this.dialogNode);
    }
    this.lastFocus = document.activeElement;
  }
};

exports.default = aria.Dialog;