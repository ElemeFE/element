<template>
  <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script>
  import ImgPlaceholder from './img-placeholder';

  export default {
    name: 'ElSkeletonItem',
    props: {
      variant: {
        type: String,
        default: 'text'
      }
    },
    components: {
      [ImgPlaceholder.name]: ImgPlaceholder
    }
  };
</script>