<template>
  <div
    class="el-row"
    :style="style"
    :class="[
      justify !== 'start' ? 'is-justify-' + justify : '',
      align !== 'top' ? 'is-align-' + align : '',
      {
        'el-row--flex': type === 'flex'
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElRow',

    props: {
      gutter: Number,
      type: String,
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      }
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
