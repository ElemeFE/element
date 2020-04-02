import Vue from 'vue';
import { noop } from './util';

const isServer = Vue.prototype.$isServer;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

export function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

export const on = (function() {
  if (!isServer) {
    return function(element, event, handler) {
      // TODO: Do we really want to ignore these errors?
      if (element && event && handler) {
        // Supported IE9+
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return noop;
  }
})();

export const off = (function() {
  if (!isServer) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return noop;
  }
})();

export function once(el, event, fn) {
  function listener() {
    fn.apply(this, arguments);
    off(el, event, listener);
  }
  on(el, event, listener);
}

// Supported in IE10+
export function hasClass(el, cls) {
  return el.classList.contains(cls);
}

export function addClass(el, cls) {
  el.classList.add(cls);
}

export function removeClass(el, cls) {
  el.classList.remove(cls);
}

export function getStyle(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

export function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    element.style[styleName] = value;
  }
}

export function isScroll(el, vertical) {
  if (isServer) return;

  const determinedDirection = vertical != null;
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
}

export function getScrollContainer(el, vertical) {
  if (isServer) return;

  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
}

export function isInContainer(el, container) {
  if (isServer || !el || !container) return false;

  const elRect = el.getBoundingClientRect();
  let containerRect;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right;
};
