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
        el.instance.$on('after-leave', _ => {
          el.domVisible = false;
          if (binding.modifiers.fullscreen && el.originalOverflow !== 'hidden') {
            document.body.style.overflow = el.originalOverflow;
          }
          if (binding.modifiers.fullscreen || binding.modifiers.body) {
            document.body.style.position = el.originalPosition;
          } else {
            el.style.position = el.originalPosition;
          }
        });
        el.instance.visible = false;
      }
    }
  };
  let insertDom = (parent, el, binding) => {
    if (!el.domVisible) {
      Object.keys(el.maskStyle).forEach(property => {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute') {
        parent.style.position = 'relative';
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        parent.style.overflow = 'hidden';
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(() => {
        el.instance.visible = true;
      });
      el.domInserted = true;
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
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      toggleLoading(el, binding);
    },

    update: function(el, binding) {
      el.instance.setText(el.getAttribute('element-loading-text'));
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
