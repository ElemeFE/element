const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg;
  const popper = vnode.context.$refs[_ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};

export default {
  bind(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
};
