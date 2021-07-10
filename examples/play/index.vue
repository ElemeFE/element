<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>


      <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
                  v-model="value1"
                  type="datetimerange"
                  format="yyyy-MM-dd HH"
                  placeholder="选择日期时间">
          </el-date-picker>
      </div>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
          value1:new Date()
      };
    }
  };
</script>
