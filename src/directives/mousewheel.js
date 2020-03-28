import normalizeWheel from 'normalize-wheel';

const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(normalizeWheel.getEventType(), function(event) {
      const normalized = normalizeWheel(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

export default {
  bind(el, binding) {
    mousewheel(el, binding.value);
  }
};
