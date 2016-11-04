<script>
  module.exports = {
    name: 'el-tab-pane',

    props: {
      label: {
        type: String,
        required: true
      },
      name: String
    },

    data() {
      return {
        counter: 0,
        transition: '',
        paneStyle: {
          position: 'relative'
        },
        index: ''
      };
    },

    created() {
      if (!this.index) {
        this.index = this.$parent.$children.indexOf(this) + 1 + '';
      }
    },

    computed: {
      show() {
        return this.$parent.currentName === this.index;
      }
    },

    destroyed() {
      if (this.$el) {
        this.$el.remove();
      }
    },

    watch: {
      name: {
        immediate: true,
        handler(val) {
          this.index = val;
        }
      },
      '$parent.currentName'(newValue, oldValue) {
        if (this.index === newValue) {
          this.transition = newValue > oldValue ? 'slideInRight' : 'slideInLeft';
        }
        if (this.index === oldValue) {
          this.transition = oldValue > newValue ? 'slideInRight' : 'slideInLeft';
        }
      }
    }
  };
</script>
<template>
  <div class="el-tab-pane" v-show="show && $slots.default">
    <slot></slot>
  </div>
</template>
