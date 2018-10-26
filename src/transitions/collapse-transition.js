import { addClass, removeClass } from 'element-ui/src/utils/dom';
import merge from 'element-ui/src/utils/merge';

export default {
  name: 'ElCollapseTransition',
  data() {
    return {
      event: {
        beforeEnter: el => {
          addClass(el, 'collapse-transition');
          if (!el.dataset) el.dataset = {};

          el.dataset.oldPaddingTop = el.style.paddingTop;
          el.dataset.oldPaddingBottom = el.style.paddingBottom;

          el.style.height = '0';
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
          this.$emit('before-enter', el);
        },
        enter: el => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
          }

          el.style.overflow = 'hidden';
          this.$emit('enter', el);
        },
        afterEnter: el => {
          // for safari: remove class then reset height is necessary
          removeClass(el, 'collapse-transition');
          el.style.height = '';
          el.style.overflow = el.dataset.oldOverflow;
          this.$emit('after-enter', el);
        },
        beforeLeave: el => {
          if (!el.dataset) el.dataset = {};
          el.dataset.oldPaddingTop = el.style.paddingTop;
          el.dataset.oldPaddingBottom = el.style.paddingBottom;
          el.dataset.oldOverflow = el.style.overflow;

          el.style.height = el.scrollHeight + 'px';
          el.style.overflow = 'hidden';
          this.$emit('before-leave', el);
        },
        leave: el => {
          if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            addClass(el, 'collapse-transition');
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
          }
          this.$emit('leave', el);
        },
        afterLeave: el => {
          removeClass(el, 'collapse-transition');
          el.style.height = '';
          el.style.overflow = el.dataset.oldOverflow;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          this.$emit('after-leave', el);
        }
      }
    };
  },
  render(h) {
    const data = {on: merge({}, this.$listeners, this.event)};
    return h('transition', data, this.$slots.default);
  }
};
