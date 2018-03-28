export default {
  bind(el, binding, vnode) {
    // vue中 v-popover:argument 和 v-popover="variate|| expression"得到的binding数据是不同的。后者可以指向动态popver组件，可以极大的增强popover指令的灵活程度。
    const _ref = binding.expression ? binding.value : binding.arg;
    vnode.context.$refs[_ref].$refs.reference = el;
  }
};
