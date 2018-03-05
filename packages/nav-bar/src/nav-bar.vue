<template>
  <div class="tm-nav-bar">
    <div class="tm-nav-bar__title">{{ title }}</div>
    <div class="tm-nav-bar__right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {

    name: 'TmNavBar',

    componentName: 'TmNavBar',

    props: {
      title: String
    }

  };
</script>
