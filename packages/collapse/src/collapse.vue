<template>
  <div class="el-collapse" role="tablist" aria-multiselectable="true">
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
        type: [Array, String, Number],
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

    provide() {
      return {
        collapse: this
      };
    },

    watch: {
      value(value) {
        this.activeNames = [].concat(value);
      }
    },

    methods: {
      setActiveNames(activeNames) {
        activeNames = [].concat(activeNames);
        let value = this.accordion ? activeNames[0] : activeNames;
        this.activeNames = activeNames;
        // 改变v-model的值
        this.$emit('input', value);
        // 当前激活面板改变时触发
        // (如果是手风琴模式，参数 activeNames 类型为string，否则为array)
        this.$emit('change', value);
      },
      handleItemClick(item) {
        // 是否是手风琴
        if (this.accordion) {
          this.setActiveNames(
            (this.activeNames[0] || this.activeNames[0] === 0) &&
            this.activeNames[0] === item.name
              ? '' : item.name
          );
        } else {
          let activeNames = this.activeNames.slice(0);
          let index = activeNames.indexOf(item.name);

          if (index > -1) {
            activeNames.splice(index, 1);
          } else {
            activeNames.push(item.name);
          }
          this.setActiveNames(activeNames);
        }
      }
    },

    created() {
      this.$on('item-click', this.handleItemClick);
    }
  };
</script>
