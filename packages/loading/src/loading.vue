<template>
  <div class="el-loading-mask" :class="[customClass, { 'is-fullscreen': fullscreen }]">
    <div class="el-loading-spinner">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none"/>
      </svg>
      <p v-if="text" class="el-loading-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        fullscreen: true,
        customClass: ''
      };
    }
  };
</script>