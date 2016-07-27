<template>
  <div class="el-col"
    :class="[
      'el-col-' + span,
      offset ? 'el-col-offset-' + offset : '',
      pull ? 'el-col-pull-' + pull : '',
      push ? 'el-col-push-' + push : ''
    ]"
    v-bind:style="style"
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
      offset: {
        type: Number
      },
      pull: {
        type: Number
      },
      push: {
        type: Number
      }
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
    },

    data() {
      return {
      };
    }
  };
</script>
