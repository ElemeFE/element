<template>
  <div class="el-page-header">
    <div class="el-page-header__left" @click="$emit('back')">
      <i class="el-icon-back"></i>
      <div class="el-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="el-page-header__subtitle">
      <slot name="subTitle">{{ subTitle }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElPageHeader',

  props: {
    title: {
      type: String,
      default: '返回'
    },
    subTitle: String
  }
};
</script>
