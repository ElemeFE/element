import Vue from 'vue';
import { addClass, removeClass } from 'element-ui/src/utils/dom';
let Mask = Vue.extend(require('./loading.vue'));

exports.install = Vue => {
  if (Vue.prototype.$isServer) return;
  let toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = document.body.style.position;
          el.originalOverflow = document.body.style.overflow;

          addClass(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          removeClass(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = document.body.style.position;

            ['top', 'left'].forEach(property => {
              let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
            });
            ['height', 'width'].forEach(property => {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = el.style.position;
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      if (el.domVisible) {
        el.mask.style.display = 'none';
        el.domVisible = false;

        if (binding.modifiers.fullscreen && el.originalOverflow !== 'hidden') {
          document.body.style.overflow = el.originalOverflow;
        }
        if (binding.modifiers.fullscreen || binding.modifiers.body) {
          document.body.style.position = el.originalPosition;
        } else {
          el.style.position = el.originalPosition;
        }
      }
    }
  };
  let insertDom = (parent, directive, binding) => {
    if (!directive.domVisible) {
      Object.keys(directive.maskStyle).forEach(property => {
        directive.mask.style[property] = directive.maskStyle[property];
      });

      if (directive.originalPosition !== 'absolute') {
        parent.style.position = 'relative';
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        parent.style.overflow = 'hidden';
      }
      directive.mask.style.display = 'block';
      directive.domVisible = true;

      parent.appendChild(directive.mask);
      directive.domInserted = true;
    }
  };

  Vue.directive('loading', {
    bind: function(el, binding) {
      let mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: el.getAttribute('element-loading-text'),
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.mask = mask.$el;
      el.maskStyle = {};

      toggleLoading(el, binding);
    },

    update: function(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function(el, binding) {
      if (el.domInserted) {
        if (binding.modifiers.fullscreen || binding.modifiers.body) {
          document.body.removeChild(el.mask);
        } else {
          el.mask &&
          el.mask.parentNode &&
          el.mask.parentNode.removeChild(el.mask);
        }
      }
    }
  });
};
