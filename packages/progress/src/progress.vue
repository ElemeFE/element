<template>
  <div
    class="el-progress"
    :class="[
      size ? 'el-progress--' + size : '',
      type ? 'el-progress--' + type : ''
    ]"
  >
    <div class="el-progress__bar" :style="barStyle"></div>
  </div>
</template>
<script>
  export default {
    name: 'ElProgress',
    props: {
      type: {
        type: String,
        default: 'blue',
        validator: val => ['blue', 'blue-stripe', 'green', 'green-stripe'].indexOf(val) > -1
      },
      size: {
        type: String,
        validator: val => !val || ['large', 'small'].indexOf(val) > -1
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      }
    },
    computed: {
      barStyle() {
        var style = {};
        style.width = this.percentage + '%';
        return style;
      }
    }
  };
</script>
