<script>
  module.exports = {
    name: 'el-menu-item',

    componentName: 'menu-item',

    props: {
      index: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      indexPath() {
        var path = [this.index];
        var parent = this.$parent;
        while (parent.$options._componentTag !== 'el-menu') {
          if (parent.index) {
            path.unshift(parent.index);
          }
          parent = parent.$parent;
        }
        return path;
      },
      rootMenu() {
        var parent = this.$parent;
        while (parent.$options._componentTag !== 'el-menu') {
          parent = parent.$parent;
        }
        return parent;
      },
      active() {
        return this.index === this.rootMenu.activeIndex;
      }
    },
    methods: {
      handleClick() {
        this.rootMenu.handleSelect(this.index, this.indexPath);
      }
    },
    mounted() {
    }
  };
</script>

<template>
  <li class="el-menu-item"
    @click="handleClick"
    :class="{
      'is-active': active,
      'is-disabled': disabled
    }">
    <slot></slot>
  </li>
</template>
