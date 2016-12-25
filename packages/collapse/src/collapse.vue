<template>
  <div class="el-collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElCollapse',

    componentName: 'ElCollapse',

    props: {
      accordion: Boolean,
      value: {
        type: [Array, String],
        default() {
          return [];
        }
      }
    },

    data() {
      return {
        activeNames: [].concat(this.value)
      };
    },

    watch: {
      value(value) {
        this.activeNames = [].concat(value);
      }
    },

    methods: {
      setActiveItems(activeNames) {
        this.activeNames = activeNames;
        this.$emit('input', this.accordion ? activeNames[0] : activeNames);
      },
      handleItemClick(item) {
        if (this.accordion) {
          this.setActiveItems([].concat(this.activeNames[0] === item.name ? '' : item.name));
        } else {
          let activeNames = this.activeNames.slice(0);
          let index = activeNames.indexOf(item.name);

          if (index > -1) {
            activeNames.splice(index, 1);
          } else {
            activeNames.push(item.name);
          }
          this.setActiveItems(activeNames);
        }
      }
    },

    created() {
      this.$on('item-click', this.handleItemClick);
    }
  };
</script>
