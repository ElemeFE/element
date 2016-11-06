import defaultLang from 'element-ui/src/locale/lang/zh-cn';
import Vue from 'vue';
import deepmerge from 'deepmerge';
import Format from './format';

const format = Format(Vue);
let lang = defaultLang;
let merged = false;

export const $t = function(path, options) {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vuei18n === 'function') {
    if (!merged) {
      merged = true;
      Vue.locale(Vue.config.lang, deepmerge(lang, Vue.locale(Vue.config.lang), { clone: true }));
    }
    return vuei18n.apply(this, [path, options]);
  }
  const array = path.split('.');
  let current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    var value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

export const use = function(l) {
  lang = l || lang;
};
export default { use, $t };
