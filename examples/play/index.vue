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
    <p >
      <label @click="nativeclick">
        <el-switch v-model="val1" @change="log" @input="log"/>
        label wrapping switch
      </label>
    </p>
    <p>
      <el-switch id="switch" v-model="val2" @change="log" @input="log"/>
      <label for="switch">label next to switch</label>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        val1: true,
        val2: true,
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
      },
      log($event) {
        console.log($event)
      },
      nativeclick() {
        console.log('native')
      }
    },
  };
</script>
