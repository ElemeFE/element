<template>
  <div
    class="el-loading-spinner"
    :class="{ 'is-full-screen': fullScreen }">
    <svg class="circular" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none"/>
    </svg>
    <p v-if="text" class="el-loading-text">{{ text }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        fullScreen: false
      };
    }
  };
</script>