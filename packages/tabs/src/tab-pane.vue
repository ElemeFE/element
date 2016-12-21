<template>
  <div class="el-tab-pane">
    <div class="el-tab-pane__content" v-show="active">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  module.exports = {
    name: 'el-tab-pane',

    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean
    },

    data() {
      return {
        index: null
      };
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        return this.$parent.currentName === (this.name || this.index);
      }
    },

    created() {
      this.$parent.$forceUpdate();
    },

    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },

    watch: {
      label() {
        this.$parent.$forceUpdate();
      }
    }
  };
</script>
