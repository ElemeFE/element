<template>
  <span class="el-spinner">
    <svg class="el-spinner-inner" viewBox="0 0 50 50" v-bind:style="{ width: radius/2 + 'px', height: radius/2 + 'px' }">
      <circle class="path" cx="25" cy="25" r="20" fill="none" :stroke="strokeColor" :stroke-width="strokeWidth"></circle>
    </svg>
  </span>
</template>
<script>
  export default {
    name: 'ElSpinner',
    props: {
      type: String,
      radius: {
        type: Number,
        default: 100
      },
      strokeWidth: {
        type: Number,
        default: 5
      },
      strokeColor: {
        type: String,
        default: '#efefef'
      }
    }
  };
</script>
