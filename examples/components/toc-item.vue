<template>
  <li class="item">
    <a
      class="toc__link"
      :class="{ 'active': active === item.id }"
      :href="'#' + encodeURIComponent(item.heading)"
      v-text="item.heading">
    </a>
    <ol
      class="group"
      v-if="item.children"
      v-show="active >= item.id && active <= (item.id + item.children.length || 0)">
      <el-toc-item
        :item="sub"
        class="item"
        :active="active"
        v-for="sub in item.children">
      </el-toc-item>
    </ol>
  </li>
</template>

<script>
  /**
   * 浮动在右边的目录子项
   */
  export default {
    name: 'el-toc-item',

    props: {
      item: Object,
      active: Number
    },

    methods: {
      encodeURIComponent(source) {
        return encodeURIComponent(source);
      }
    }
  };
</script>

<style lang="css">
  a {
    color: inherit;
    text-decoration: none;
  }
</style>
