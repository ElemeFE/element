<template>
  <div
    class="el-popover"
    v-el:popper
    v-show="visible"
    :transition="transition"
    :style="{ width: width + 'px' }">
    <div class="el-popover__title" v-if="title" v-text="title"></div>
    <slot>{{ content }}</slot>
  </div>
</template>

<script>
import Popper from 'main/utils/vue-popper';
import Vue from 'vue';
import { on, off } from 'wind-dom/src/event';

Vue.directive('popover', {
  update() {
    this.vm.$nextTick(() => {
      this.vm.$refs[this.arg].reference = this.el;
    });
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
    reference: {
      default: 'body'
    },
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

  ready() {
    let _timer;

    this.$nextTick(() => {
      if (this.trigger === 'click') {
        on(this.reference, 'click', () => { this.visible = !this.visible; });
        on(document, 'click', (e) => {
          if (!this.$el ||
              !this.reference ||
              this.$el.contains(e.target) ||
              this.reference.contains(e.target)) return;
          this.visible = false;
        });
      } else if (this.trigger === 'hover') {
        on(this.reference, 'mouseenter', () => {
          this.visible = true;
          clearTimeout(_timer);
        });
        on(this.reference, 'mouseleave', () => {
          _timer = setTimeout(() => {
            this.visible = false;
          }, 200);
        });
      } else {
        if (this.reference.hasChildNodes()) {
          const children = this.reference.childNodes;

          for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName === 'INPUT') {
              on(children[i], 'focus', () => { this.visible = true; });
              on(children[i], 'blur', () => { this.visible = false; });
              break;
            }
          }
        } else if (
            this.reference.nodeName === 'INPUT' ||
            this.reference.nodeName === 'TEXTAREA'
          ) {
          on(this.reference, 'focus', () => { this.visible = true; });
          on(this.reference, 'blur', () => { this.visible = false; });
        } else {
          on(this.reference, 'mousedown', () => { this.visible = true; });
          on(this.reference, 'mouseup', () => { this.visible = false; });
        }
      }
    });
  },

  destroyed() {
    off(this.reference, 'mouseup');
    off(this.reference, 'mousedown');
    off(this.reference, 'focus');
    off(this.reference, 'blur');
    off(this.reference, 'mouseleave');
    off(this.reference, 'mouseenter');
  }
};
</script>
