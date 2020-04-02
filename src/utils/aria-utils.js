const Utils = {
  /**
   * @desc Set focus on descendant nodes until the first focusable element is
   *       found.
   * @param element
   *          DOM node for which to find the first focusable descendant.
   * @returns
   *  true if a focusable element is found and focus is set.
   */
  focusFirstDescendant(element) {
    if (!element) return false;
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      if (Utils.attemptFocus(child) || Utils.focusFirstDescendant(child)) {
        return true;
      }
    }
    return false;
  },
  /**
   * @desc Find the last descendant node that is focusable.
   * @param element
   *          DOM node for which to find the last focusable descendant.
   * @returns
   *  true if a focusable element is found and focus is set.
   */
  focusLastDescendant(element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
      var child = element.childNodes[i];
      if (Utils.attemptFocus(child) || Utils.focusLastDescendant(child)) {
        return true;
      }
    }
    return false;
  },
  /**
   * @desc Set Attempt to set focus on the current node.
   * @param element
   *          The node to attempt to focus on.
   * @returns
   *  true if element is focused.
   */
  attemptFocus(element) {
    if (!Utils.isFocusable(element)) {
      return false;
    }
    Utils.IgnoreUtilFocusChanges = true;
    try {
      element.focus();
    } catch (e) {
    }
    Utils.IgnoreUtilFocusChanges = false;
    return (document.activeElement === element);
  },

  isFocusable(element) {
    if (element.tabIndex > 0 || (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)) {
      return true;
    }

    if (element.disabled) {
      return false;
    }

    switch (element.nodeName) {
      case 'A':
        return !!element.href && element.rel !== 'ignore';
      case 'INPUT':
        return element.type !== 'hidden' && element.type !== 'file';
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
      default:
        return false;
    }
  },

  /**
   * 触发一个事件
   * mouseenter, mouseleave, mouseover, keyup, change, click 等
   * @param  {Element} elm
   * @param  {String} name
   * @param  {*} opts
   */
  triggerEvent(elm, name, ...opts) {
    let eventName;

    if (/^mouse|click/.test(name)) {
      eventName = 'MouseEvents';
    } else if (/^key/.test(name)) {
      eventName = 'KeyboardEvent';
    } else {
      eventName = 'HTMLEvents';
    }
    const evt = document.createEvent(eventName);

    evt.initEvent(name, ...opts);
    elm.dispatchEvent
      ? elm.dispatchEvent(evt)
      : elm.fireEvent('on' + name, evt);

    return elm;
  },

  keys: {
    tab: 9,
    enter: 13,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    esc: 27
  }
};

export default Utils;
