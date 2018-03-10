<template>
  <div class="tm-nav-bar">
    <div class="tm-nav-bar__left">
      <div class="tm-nav-bar__title">{{ title }}</div>
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

    componentName: 'TmNavBar'
  };
</script>
