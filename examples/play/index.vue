<template>
  <div>
    <div 
      style="width: 400px;height: 400px" 
      v-loading="loading" 
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)">
    </div>
    <el-button @click="clickMe">狂点我</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      };
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    methods: {
      clickMe() {
        this.loading = true
      }
    },
  };
</script>
