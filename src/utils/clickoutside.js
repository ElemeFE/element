/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
let handler;

export default {
  bind(el, binding, vnode) {
    const expression = binding.expression;
    handler = function(e) {
      if (vnode.context && !el.contains(e.target)) {
        vnode.context[expression]();
      }
    };
    document.addEventListener('click', handler);
  },

  unbind() {
    document.removeEventListener('click', handler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
