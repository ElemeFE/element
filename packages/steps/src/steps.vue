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
    space: Number,
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
    }
  },

  mounted() {
    this.steps.forEach((child, index) => {
      child.index = index;
    });
  }
};
</script>
