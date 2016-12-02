export default {
  bind(el, binding, vnode) {
    el.addEventListener('click', _ => {
      vnode.context.$refs[binding.arg].showPopper = false;
    });
  }
};
