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
        key: ''
      };
    },

    created() {
      if (!this.key) {
        this.key = this.$parent.$children.indexOf(this) + 1 + '';
      }
    },

    computed: {
      show() {
        return this.$parent.currentName === this.key;
      }
    },

    destroyed() {
      this.$el.remove();
    },

    watch: {
      name: {
        immediate: true,
        handler(val) {
          this.key = val;
        }
      },
      '$parent.currentName'(newValue, oldValue) {
        if (this.key === newValue) {
          this.transition = newValue > oldValue ? 'slideInRight' : 'slideInLeft';
        }
        if (this.key === oldValue) {
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
