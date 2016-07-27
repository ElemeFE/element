<script>
  /**
   * group
   * @module components/basic/group
   * @desc 显示分组的布局样式
   * @param {string} [title] - 显示标题
   */
  export default {
    name: 'el-group',

    props: {
      title: String
    }
  };
</script>

<template>
  <div class="element-group">
    <label
      class="element-group__label"
      v-text="title"></label>
    <div class="element-group__option">
      <slot></slot>
    </div>
  </div>
</template>
