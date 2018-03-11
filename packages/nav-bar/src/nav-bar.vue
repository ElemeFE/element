<template>
  <div class="tm-nav-bar">
    <div class="tm-nav-bar__left">
      <div class="tm-nav-bar__title" v-if="title">{{ title }}</div>
      <slot name="left"></slot>
    </div>
    <div class="tm-nav-bar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TmNavBar',

    componentName: 'TmNavBar',

    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>
