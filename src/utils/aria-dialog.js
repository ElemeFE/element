import Utils from './aria-utils';

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

aria.Dialog = function(dialog, focusAfterClosed, focusFirst) {
  this.dialogNode = dialog;
  if (this.dialogNode === null || this.dialogNode.getAttribute('role') !== 'dialog') {
    throw new Error('Dialog() requires a DOM element with ARIA role of dialog.');
  }

  if (typeof focusAfterClosed === 'string') {
    this.focusAfterClosed = document.getElementById(focusAfterClosed);
  } else if (typeof focusAfterClosed === 'object') {
    this.focusAfterClosed = focusAfterClosed;
  } else {
    this.focusAfterClosed = null;
  }

  if (typeof focusFirst === 'string') {
    this.focusFirst = document.getElementById(focusFirst);
  } else if (typeof focusFirst === 'object') {
    this.focusFirst = focusFirst;
  } else {
    this.focusFirst = null;
  }

  if (this.focusFirst) {
    this.focusFirst.focus();
  } else {
    Utils.focusFirstDescendant(this.dialogNode);
  }

  this.lastFocus = document.activeElement;
  tabEvent = (e) => {
    this.trapFocus(e);
  };
  this.addListeners();
};

aria.Dialog.prototype.addListeners = function() {
  document.addEventListener('focus', tabEvent, true);
};

aria.Dialog.prototype.removeListeners = function() {
  document.removeEventListener('focus', tabEvent, true);
};

aria.Dialog.prototype.closeDialog = function() {
  this.removeListeners();
  if (this.focusAfterClosed) {
    setTimeout(() => {
      this.focusAfterClosed.focus();
    });
  }
};

aria.Dialog.prototype.trapFocus = function(event) {
  if (Utils.IgnoreUtilFocusChanges) {
    return;
  }
  if (this.dialogNode.contains(event.target)) {
    this.lastFocus = event.target;
  } else {
    Utils.focusFirstDescendant(this.dialogNode);
    if (this.lastFocus === document.activeElement) {
      Utils.focusLastDescendant(this.dialogNode);
    }
    this.lastFocus = document.activeElement;
  }
};

export default aria.Dialog;
