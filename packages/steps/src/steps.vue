<template>
  <div class="el-steps" :class="['is-' + direction]"><slot></slot></div>
</template>

<script>
export default {
  name: 'el-steps',

  props: {
    space: Number,
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
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
      steps: []
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
