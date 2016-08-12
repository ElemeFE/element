<template>
  <div class="el-row" :style="style">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElRow',

    props: {
      gutter: Number
    },

    computed: {
      style() {
        var ret = {};

        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }

        return ret;
      }
    }
  };
</script>
