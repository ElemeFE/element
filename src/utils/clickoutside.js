import { on } from 'wind-dom/src/event';

const nodeList = [];
const ctx = '@@clickoutsideContext';

on(document, 'click', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e));
});
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind(el, binding, vnode) {
    const id = nodeList.push(el) - 1;
    const documentHandler = function(e) {
      if (!vnode.context ||
        el.contains(e.target) ||
        (vnode.context.popperElm &&
        vnode.context.popperElm.contains(e.target))) return;

      if (binding.expression) {
        el[ctx].methodName &&
          vnode.context[el[ctx].methodName] &&
          vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
    el[ctx] = {
      id,
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding) {
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    nodeList.splice(el[ctx].id, 1);
    delete el[ctx];
  },

  install(Vue) {
    /* istanbul ignore next */
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
