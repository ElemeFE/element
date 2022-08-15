<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"   :clearable="true"></el-input>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :selectedColor="selectedColor"
      >

      </el-option>
    </el-select>
    <el-progress :percentage="50" :textColor="textColor" :defineBackColor="defineBackColor"></el-progress>
    <el-progress :percentage="50" type="circle" ></el-progress>
    <el-progress :percentage="50" type="dashboard"></el-progress>
    <el-input
  type="textarea"
  autosize
  :clearable="true"
  placeholder="请输入内容"
  v-model="textarea1"
  >
</el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
        value:"",
        options:[{
          value:"选项1",
          label:"黄金糕"
        },
        {
          value:"选项2",
          label:"双皮奶"
        },
        {
          value:"选项3",
          label:"蚵仔煎"
        },
        {
          value:"选项4",
          label:"龙须面"
        }
      ],
      selectedColor:"#36ac9c",
      num:1,
      defineBackColor:"#ddd",
      textColor:"blue",
      textarea1:""
      };
    },
    methods:{
      handleChange(value){
        console.log(value)
      }
    }
  };
</script>
