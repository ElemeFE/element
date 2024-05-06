import normalizeWheel from 'normalize-wheel';

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const onMousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    element.$mousewheelFn = function(event) {
      const normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
    };
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', element.$mousewheelFn);
  }
};

const offMousewheel = function(el) {
  if (el && el.removeEventListener) {
    el.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', el.$mousewheelFn);
    el.$mousewheelFn = null;
  };
};

export default {
  bind(el, binding) {
    onMousewheel(el, binding.value);
  },
  unbind(el) {
    offMousewheel(el);
  }
};
