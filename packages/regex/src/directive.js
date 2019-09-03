import Vue from "vue";
import Inputmask from "inputmask";

const regexDirective = {};
regexDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;

  Vue.directive("loading", "regex", {
    bind: function(el, binding) {
      let value = binding.value;
      let elements = el.getElementsByTagName("input");
      if (typeof value === "undefined") return;

      if (typeof value === "string" || value instanceof RegExp) {
        let isRegexp = value instanceof RegExp;
        for (let element of elements) {
          Inputmask({
            regex: isRegexp ? value.source : value
          }).mask(element);
        }
      } else if (typeof value === "object") {
        for (let key in value) {
          for (let element of elements) {
            if (element.name !== key) continue;

            Inputmask({
              regex: value[key]
            }).mask(element);
          }
        }
      }
    }
  });
};

export default regexDirective;
