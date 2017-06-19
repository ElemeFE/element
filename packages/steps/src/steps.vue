<template>
  <div
    class="el-steps"
    :class="['is-' + direction, center ? 'is-center' : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElSteps',

  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    center: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  },

  data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },

  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },

    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
      if (this.center) {
        const len = steps.length;
        this.$nextTick(() => {
          this.stepOffset = steps[len - 1].$el.getBoundingClientRect().width / (len - 1);
        });
      }
    }
  }
};
</script>
