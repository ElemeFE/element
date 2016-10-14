import { on } from 'wind-dom/src/event';

const nodeList = [];
on(document, 'click', e => {
  nodeList.forEach(node => node[clickoutsideContext].documentHandler(e));
});
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
    const id = nodeList.push(el) - 1;
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
      id,
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },

  unbind(el) {
    nodeList.splice(el[clickoutsideContext].id, 1);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
