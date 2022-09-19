import Vue from 'vue';

let scrollBarWidth;
let scrollBarHeight;

export default function() {
  if (Vue.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.height = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  const heightNoScroll = outer.offsetHeight;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  const heightWidthScroll = inner.offsetHeight;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  scrollBarHeight = heightNoScroll - heightWidthScroll;

  return { scrollBarWidth, scrollBarHeight };
}
