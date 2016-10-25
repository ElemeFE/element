import { on } from 'wind-dom/src/event';

const nodeList = [];
const ctx = '@@clickoutsideContext';
const isFn = function(obj) {
  return typeof obj === 'function';
};
on(document, 'click', e => {
  nodeList.forEach(node => node[ctx] && node[ctx].documentHandler(e));
});
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="visible">
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind(el, binding, vnode) {
    const id = nodeList.push(el) - 1;
    const documentHandler = function(e) {
      if (vnode.context[binding.expression] === false ||
        !vnode.context ||
        el.contains(e.target) ||
        (vnode.context.popperElm &&
        vnode.context.popperElm.contains(e.target))) return;

      if (isFn(el[ctx].bindingFn)) {
        el[ctx].bindingFn();
      } else {
        el[ctx].methodName();
      }
    };
    el[ctx] = {
      id,
      documentHandler,
      methodName: isFn(vnode.context[binding.expression])
        ? vnode.context[binding.expression]
        : function() {
          vnode.context[binding.expression] = false;
        },
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].methodName = isFn(vnode.context[binding.expression])
      ? vnode.context[binding.expression]
      : function() {
        vnode.context[binding.expression] = false;
      };
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        delete el[ctx];
        break;
      }
    }
  }
};
