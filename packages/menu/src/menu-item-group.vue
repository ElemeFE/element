<script>
  module.exports = {
    name: 'el-menu-item-group',

    componentName: 'menu-item-group',

    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        paddingLeft: 20
      };
    },
    methods: {
      initPadding() {
        var parent = this.$parent;
        var level = 0;
        var componentTag = parent.$options._componentTag;

        while (componentTag !== 'el-menu') {
          if (componentTag === 'el-submenu') {
            level++;
          }
          parent = parent.$parent;
          componentTag = parent.$options._componentTag;
        }
        this.paddingLeft += level * 10;
      }
    },
    mounted() {
      this.initPadding();
    }
  };
</script>

<template>
  <li class="el-menu-item-group">
    <div class="el-menu-item-group__title" :style="{'padding-left': paddingLeft + 'px'}">{{title}}</div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
