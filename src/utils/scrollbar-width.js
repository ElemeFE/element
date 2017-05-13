import Vue from 'vue';

let scrollBarWidth;

export default function() {
  if (Vue.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  const styles = {
    width: '100px',
    height: '100px',
    overflowY: 'scroll',
    visibility: 'hidden',
    position: 'absolute',
    top: '-9999px'
  };
  outer.className = 'el-scrollbar__wrap';
  let i = '';
  for (i in styles) outer.style[i] = styles[i];
  document.body.appendChild(outer);
  const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};
