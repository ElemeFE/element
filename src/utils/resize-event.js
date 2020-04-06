import ResizeObserver from 'resize-observer-polyfill';
import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

/* istanbul ignore next */
/** @param {ResizeObserverEntry[]} entries */
function resizeHandler(entries) {
  entries.forEach(entry => {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => fn());
    }
  });
}

/* istanbul ignore next */
/**
 * @param {Element} element
 * @param {() => void} fn
 **/
export function addResizeListener(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
}

/* istanbul ignore next */
/**
 * @param {Element} element
 * @param {() => void} fn
 **/
export function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
}
