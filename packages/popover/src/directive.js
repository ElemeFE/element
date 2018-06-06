const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg;
  const popper = vnode.context.$refs[_ref];
  const isArray = Array.isArray(popper);
  if (popper && !isArray) {
    popper.$refs.reference = el;
  } else if (isArray) {
    popper[0].$refs.reference = el;
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
