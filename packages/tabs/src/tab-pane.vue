<script>
  module.exports = {
    name: 'el-tab-pane',

    props: {
      label: {
        type: String,
        required: true
      },
      key: {
        type: String
      }
    },

    data() {
      return {
        counter: 0,
        transition: '',
        paneStyle: {
          position: 'relative'
        }
      };
    },

    created() {
      if (!this.key) {
        this.key = this.$parent.$children.indexOf(this) + 1 + '';
      }
    },

    events: {
    },

    computed: {
      show() {
        return this.$parent.activeKey === this.key;
      }
    },

    watch: {
      '$parent.activeKey'(newValue, oldValue) {
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
  <div class="el-tab-pane" v-if="show">
    <slot></slot>
  </div>
</template>
