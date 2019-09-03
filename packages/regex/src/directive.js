import Inputmask from 'inputmask';

const regexDirective = {};
regexDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;

  const checkMask = function(element, value) {
    let isRegexp = value instanceof RegExp;
    Inputmask({
      regex: isRegexp ? value.source : value
    }).mask(element);
  };

  Vue.directive('regex', {
    bind: function(el, binding) {
      let value = binding.value;
      let elements = el.getElementsByTagName('input');
      if (typeof value === 'undefined') return;

      if (typeof value === 'string' || value instanceof RegExp) {
        for (let element of elements) {
          checkMask(element, value);
        }
      } else if (typeof value === 'object') {
        for (let key in value) {
          for (let element of elements) {
            if (element.name !== key) continue;
            checkMask(element, value[key]);
          }
        }
      }
    }
  });
};

export default regexDirective;
