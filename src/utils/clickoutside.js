/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
const clickoutsideContext = '@@clickoutsideContext';

export default {
  bind(el, binding, vnode) {
    const documentHandler = function(e) {
      if (vnode.context && !el.contains(e.target)) {
        vnode.context[el[clickoutsideContext].methodName]();
      }
    };
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression
    };
    document.addEventListener('click', documentHandler);
  },

  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
  },

  unbind(el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
