<template>
  <div :class='classes'>
    <span :class='slotClasses'>
      <slot></slot>
    </span>}
  </div>
</template>

<script>
export default {
  name: 'ElDivider',
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertica'].indexOf(value) > -1
    },
    orientation: {
      type: String,
      default: 'center',
      validator: value => ['left', 'right', 'center'].indexOf(value) > -1
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    },
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-with-text-${this.orientation}`]: this.hasSlot,
          [`${prefixCls}-dashed`]: !!this.dashed
        }
      ];
    },
    slotClasses() {
      return [
        `${prefixCls}-inner-text`,
      ];
    }
  }
};
</script>
