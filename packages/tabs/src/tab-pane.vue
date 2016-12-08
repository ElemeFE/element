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
        counter: 0,
        transition: '',
        paneStyle: {
          position: 'relative'
        },
        isClosable: null,
        index: ''
      };
    },

    created() {
      const propsData = this.$options.propsData;
      if (propsData && typeof propsData.closable !== 'undefined') {
        this.isClosable = propsData.closable === '' || propsData.closable;
      } else {
        this.isClosable = this.$parent.closable;
      }
      if (!this.index) {
        this.index = this.$parent.$children.indexOf(this) + 1 + '';
      }
      if (this.$parent.panes) {
        this.$parent.panes.push(this);
      }
    },

    computed: {
      show() {
        return this.$parent.currentName === this.index;
      }
    },

    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      const panes = this.$parent.panes;
      if (panes) {
        panes.splice(this, panes.indexOf(this));
      }
    },

    watch: {
      name: {
        immediate: true,
        handler(val) {
          this.index = val;
        }
      },
      closable(val) {
        this.isClosable = val;
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
