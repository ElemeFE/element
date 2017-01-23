<template>
  <span>
    <transition :name="transition" @after-leave="doDestroy">
      <div
        class="el-popover"
        :class="[popperClass]"
        ref="popper"
        v-show="!disabled && showPopper"
        :style="{ width: width + 'px' }">
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>

<script>
import Popper from 'element-ui/src/utils/vue-popper';
import { on, off } from 'element-ui/src/utils/dom';

export default {
  name: 'ElPopover',

  mixins: [Popper],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    }
  },

  watch: {
    showPopper(newVal, oldVal) {
      newVal ? this.$emit('show') : this.$emit('hide');
    }
  },

  mounted() {
    let reference = this.reference || this.$refs.reference;
    const popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    if (this.trigger === 'click') {
      on(reference, 'click', () => { this.showPopper = !this.showPopper; });
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popper, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      let found = false;

      if ([].slice.call(reference.children).length) {
        const children = reference.childNodes;
        const len = children.length;
        for (let i = 0; i < len; i++) {
          if (children[i].nodeName === 'INPUT' ||
              children[i].nodeName === 'TEXTAREA') {
            on(children[i], 'focus', () => { this.showPopper = true; });
            on(children[i], 'blur', () => { this.showPopper = false; });
            found = true;
            break;
          }
        }
      }
      if (found) return;
      if (reference.nodeName === 'INPUT' ||
        reference.nodeName === 'TEXTAREA') {
        on(reference, 'focus', () => { this.showPopper = true; });
        on(reference, 'blur', () => { this.showPopper = false; });
      } else {
        on(reference, 'mousedown', () => { this.showPopper = true; });
        on(reference, 'mouseup', () => { this.showPopper = false; });
      }
    }
  },

  methods: {
    handleMouseEnter() {
      this.showPopper = true;
      clearTimeout(this._timer);
    },
    handleMouseLeave() {
      this._timer = setTimeout(() => {
        this.showPopper = false;
      }, 200);
    },
    handleDocumentClick(e) {
      let reference = this.reference || this.$refs.reference;
      const popper = this.popper || this.$refs.popper;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return;
      this.showPopper = false;
    }
  },

  destroyed() {
    const reference = this.reference;

    off(reference, 'mouseup');
    off(reference, 'mousedown');
    off(reference, 'focus');
    off(reference, 'blur');
    off(reference, 'mouseleave');
    off(reference, 'mouseenter');
    off(document, 'click', this.handleDocumentClick);
  }
};
</script>
