import defaultLang from 'element-ui/src/locale/lang/zh-cn';
import Vue from 'vue';
let lang = defaultLang;

export const $t = function(path, options) {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vuei18n === 'function') {
    return vuei18n.apply(this, [path, options]);
  }
  const array = path.split('.');
  let current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    var value = current[property];
    if (i === j - 1) return value;
    if (!value) return '';
    current = value;
  }
  return '';
};

export const use = function(l) {
  lang = l || lang;
};
export default { use, $t };
