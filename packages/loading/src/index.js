import Vue from 'vue';
import loadingVue from './loading.vue';
import merge from 'element-ui/src/utils/merge';

const LoadingConstructor = Vue.extend(loadingVue);

const defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

let originalPosition, originalOverflow;

LoadingConstructor.prototype.close = function() {
  if (this.fullscreen && originalOverflow !== 'hidden') {
    document.body.style.overflow = originalOverflow;
  }
  if (this.fullscreen || this.body) {
    document.body.style.position = originalPosition;
  } else {
    this.target.style.position = originalPosition;
  }
  this.$el &&
  this.$el.parentNode &&
  this.$el.parentNode.removeChild(this.$el);
  this.$destroy();
};

const addStyle = (options, parent, element) => {
  let maskStyle = {};
  if (options.fullscreen) {
    originalPosition = document.body.style.position;
    originalOverflow = document.body.style.overflow;
  } else if (options.body) {
    originalPosition = document.body.style.position;
    ['top', 'left'].forEach(property => {
      let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      maskStyle[property] = options.target.getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] +
        'px';
    });
    ['height', 'width'].forEach(property => {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
    });
  } else {
    originalPosition = parent.style.position;
  }
  Object.keys(maskStyle).forEach(property => {
    element.style[property] = maskStyle[property];
  });
};

const Loading = (options = {}) => {
  options = merge({}, defaults, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }

  let parent = options.body ? document.body : options.target;
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  addStyle(options, parent, instance.$el);
  if (originalPosition !== 'absolute') {
    parent.style.position = 'relative';
  }
  if (options.fullscreen && options.lock) {
    parent.style.overflow = 'hidden';
  }
  parent.appendChild(instance.$el);
  return instance;
};

export default Loading;
