<template>
  <div
    class="el-progress"
    :class="[
      size ? 'el-progress--' + size : '',
      type ? 'el-progress--' + type : ''
    ]"
  >
    <div class="el-progress__bar" v-bind:style="barStyle"></div>
  </div>
</template>
<script>
  export default {
    name: 'ElProgress',
    props: {
      type: {
        type: String,
        default: 'blue'
      },
      size: String,
      percentage: {
        type: Number,
        default: 0,
        required: true
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
