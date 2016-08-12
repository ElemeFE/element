<template>
  <div
    class="el-col"
    :class="[
      'el-col-' + span,
      offset ? 'el-col-offset-' + offset : '',
      pull ? 'el-col-pull-' + pull : '',
      push ? 'el-col-push-' + push : ''
    ]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElCol',

    props: {
      span: {
        type: Number,
        required: true
      },
      offset: Number,
      pull: Number,
      push: Number
    },

    computed: {
      gutter() {
        return this.$parent.gutter;
      },

      style() {
        var ret = {};

        if (this.gutter) {
          ret.paddingLeft = this.gutter / 2 + 'px';
          ret.paddingRight = ret.paddingLeft;
        }

        return ret;
      }
    }
  };
</script>
