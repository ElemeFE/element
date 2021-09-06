<template>
  <div style="margin: 20px;">
    <el-table
        :data="tableData"
        height="400px"
        border
        ref="table"
    >
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column prop="" width="" label="操作">
        <template slot-scope="{row}">
          <el-button size="mini" type="success" @click="handleClick">添加</el-button>
          <div v-if="showText">
            我是添加的内容<br>
            我是添加的内容<br>
            我是添加的内容<br>
            我是添加的内容<br>
            我是添加的内容<br>
            我是添加的内容<br>
            我是添加的内容<br>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // domHeight: '',
      showText: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
        tag: '公司'
      }]
    };
  },
  mounted() {
    this.init()
  },
  computed:{
    domHeight() {
      return document.querySelector('.el-table__body').offsetHeight;
    }
  },
  methods: {
    init() {
      // this.domHeight = document.querySelector('.el-table__body').offsetHeight;
    },
    handleClick(row) {
      this.showText = !this.showText
      this.$refs['table'].updateScrollY()
    }
  }
};
</script>
