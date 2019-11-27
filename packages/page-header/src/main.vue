<template>
  <div class="el-page-header">
    <div class="el-page-header__left" @click="$emit('back')">
      <i class="el-icon-back"></i>
      <div class="el-page-header__title">
        <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
      </div>
    </div>
    <div class="el-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import Locale from 'element-ui/src/mixins/locale';
export default {
  name: 'ElPageHeader',

  mixins: [Locale],

  props: {
    title: String,
    content: String
  }
};
</script>
