import Spinner from './spinner';
exports.install = Vue => {
  let toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = document.body.style.position;
          el.originalOverflow = document.body.style.overflow;

          ['top', 'right', 'bottom', 'left'].forEach(property => {
            el.maskStyle[property] = '0';
          });
          el.maskStyle.position = 'fixed';
          el.spinnerStyle.position = 'fixed';

          insertDom(document.body, el, binding);
        } else {
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

            ['top', 'right', 'bottom', 'left'].forEach(property => {
              el.maskStyle[property] = '0';
            });

            insertDom(el, el, binding);
          }
        }
      });
    } else {
      if (el.domVisible) {
        el.mask.style.display = 'none';
        el.spinner.style.display = 'none';
        el.domVisible = false;

        if (binding.modifiers.fullscreen) {
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

      Object.keys(directive.spinnerStyle).forEach(property => {
        directive.spinner.style[property] = directive.spinnerStyle[property];
      });

      if (directive.originalPosition !== 'absolute') {
        parent.style.position = 'relative';
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        parent.style.overflow = 'hidden';
      }
      directive.mask.style.display = 'block';
      directive.spinner.style.display = 'inline-block';
      directive.domVisible = true;

      parent.appendChild(directive.mask);
      directive.mask.appendChild(directive.spinner);
      directive.domInserted = true;
    }
  };

  Vue.directive('loading', {
    bind: function(el, binding) {
      el.mask = document.createElement('div');
      el.mask.className = 'el-loading-mask';
      el.maskStyle = {
        position: 'absolute',
        zIndex: '10000',
        backgroundColor: 'rgba(0, 0, 0, .65)',
        margin: '0'
      };

      el.spinner = (new Spinner()).el;
      el.spinnerStyle = {
        position: 'absolute'
      };
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
          el.mask.removeChild(el.spinner);
        } else {
          el.removeChild(el.mask);
          el.mask.removeChild(el.spinner);
        }
      }
    }
  });
};
