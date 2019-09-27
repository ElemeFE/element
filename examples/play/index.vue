<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button :plain="true" @click="open1">第一步</el-button>
    <el-button :plain="true" @click="open2">第二步</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    },
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多，恭喜你，这是一条成功消息，但是字很多恭喜你，这是一条成功消息，但是字很多恭喜你，这是一条成功消息，但是字很多恭喜你，这是一条成功消息，但是字很多恭喜你，这是一条成功消息，但是字很多恭喜你，这是一条成功消息，但是字很多',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  };
</script>
