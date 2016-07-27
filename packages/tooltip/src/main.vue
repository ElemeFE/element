<template>
  <div
    class="el-tooltip"
    @mouseenter="visible = true"
    @mouseleave="visible = false">
    <div class="el-tooltip__rel" v-el:reference>
      <slot></slot>
    </div>

    <div
      class="el-tooltip__popper"
      :class="['is-' + effect]"
      v-el:popper
      v-show="!disabled && visible"
      :transition="transition">
      <slot name="content"><div v-text="content"></div></slot>
    </div>
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
