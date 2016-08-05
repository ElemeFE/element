<template>
  <div
    class="el-tooltip"
    @mouseenter="showPopper = true"
    @mouseleave="showPopper = false">
    <div class="el-tooltip__rel" ref="reference">
      <slot></slot>
    </div>

    <transition :name="transition">
      <div
        class="el-tooltip__popper"
        :class="['is-' + effect]"
        ref="popper"
        v-show="!disabled && showPopper">
        <slot name="content"><div v-text="content"></div></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Popper from 'main/utils/vue-popper';

export default {
  name: 'el-tooltip',

  mixins: [Popper],

  props: {
    disabled: Boolean,
    effect: {
      type: String,
      default: 'dark'
    },
    content: String,
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
          boundariesPadding: 10,
          gpuAcceleration: false
        };
      }
    }
  }
};
</script>
