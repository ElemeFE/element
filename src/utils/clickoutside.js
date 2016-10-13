import { on, off } from 'wind-dom/src/event';

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
      if (!vnode.context ||
        el.contains(e.target) ||
        !vnode.context.popperElm ||
        vnode.context.popperElm.contains(e.target)) return;
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName]();
      } else {
        el[clickoutsideContext].bindingFn();
      }
    };
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    on(document, 'click', documentHandler);
  },

  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },

  unbind(el) {
    off(document, 'click', el[clickoutsideContext].documentHandler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
