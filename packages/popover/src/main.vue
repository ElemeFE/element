<template>
  <span>
    <transition :name="transition" @after-leave="doDestroy">
      <div
        class="el-popover"
        ref="popper"
        v-show="showPopper"
        :style="{ width: width + 'px' }">
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>

<script>
import Popper from 'main/utils/vue-popper';
import Vue from 'vue';
import { on, off } from 'wind-dom/src/event';

Vue.directive('popover', {
  bind(el, binding, vnode) {
    vnode.context.$refs[binding.arg].$refs.reference = el;
  }
});

export default {
  name: 'el-popover',

  mixins: [Popper],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover'].indexOf(value) > -1
    },
    title: String,
    content: String,
    reference: {},
    width: {},
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    options: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    }
  },

  mounted() {
    setTimeout(() => {
      let _timer;
      const reference = this.reference || this.$refs.reference || this.$slots.reference[0].elm;

      this.$nextTick(() => {
        if (this.trigger === 'click') {
          on(reference, 'click', () => { this.showPopper = !this.showPopper; });
          on(document, 'click', (e) => {
            if (!this.$el ||
                !reference ||
                this.$el.contains(e.target) ||
                reference.contains(e.target)) return;
            this.showPopper = false;
          });
        } else if (this.trigger === 'hover') {
          on(reference, 'mouseenter', () => {
            this.showPopper = true;
            clearTimeout(_timer);
          });
          on(reference, 'mouseleave', () => {
            _timer = setTimeout(() => {
              this.showPopper = false;
            }, 200);
          });
        } else {
          if ([].slice.call(reference.children).length) {
            const children = reference.childNodes;

            for (let i = 0; i < children.length; i++) {
              if (children[i].nodeName === 'INPUT') {
                on(children[i], 'focus', () => { this.showPopper = true; });
                on(children[i], 'blur', () => { this.showPopper = false; });
                break;
              }
            }
          } else if (
              reference.nodeName === 'INPUT' ||
              reference.nodeName === 'TEXTAREA'
          ) {
            on(reference, 'focus', () => { this.showPopper = true; });
            on(reference, 'blur', () => { this.showPopper = false; });
          } else {
            on(reference, 'mousedown', () => { this.showPopper = true; });
            on(reference, 'mouseup', () => { this.showPopper = false; });
          }
        }
      });
    }, 100);
  },

  destroyed() {
    const reference = this.reference;

    off(reference, 'mouseup');
    off(reference, 'mousedown');
    off(reference, 'focus');
    off(reference, 'blur');
    off(reference, 'mouseleave');
    off(reference, 'mouseenter');
  }
};
</script>
