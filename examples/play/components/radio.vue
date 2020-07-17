<template>
  <el-radio v-model="radio" label="1" @change="radioChange">备选项</el-radio>
  <el-radio v-model="radio" label="2" @change="radioChange">备选项</el-radio>
  <el-radio v-model="radio" label='3' @change="radioChange">禁选项</el-radio>

  <el-row>
    <el-radio-group v-model="radioGroup" @change="groupChange">
      <el-radio label="3">备选项</el-radio>
      <el-radio label="6">备选项</el-radio>
      <el-radio label="9">备选项</el-radio>
    </el-radio-group>
  </el-row>

  <div>
    <el-radio-group v-model="radio1" @change="radioButtonGroupChange">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="medium">
      <el-radio-button label="上海" ></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京" disabled ></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" disabled size="mini">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1',
        radioGroup: '3',

        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    },
    methods: {
      radioChange (val) {
        console.log(val);
      },
      groupChange (val) {
        console.log(val);
      },
      radioButtonGroupChange(val) {
        console.log(val)
      }
    }
  }
</script>