<template>
  <div>
    <el-table
      :data="tableData3"
      border
      style="width: 100%"
      :coloum-input-filter="true"
      @selection-change="handleSelectionChange"
      @column-filter-change="handleFilterChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
      inline-template
      prop="name"
      label="姓名"
      width="180">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ row.name }}</p>
          <p>住址: {{ row.address }}</p>
          <div slot="reference">
            {{ row.name }}
          </div>
        </el-popover>
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address"
        :context="_self"
        inline-template
        show-overflow-tooltip>
        <div>
          <el-input v-model="row.address"></el-input>
        </div>
      </el-table-column>
      <el-table-column
        :context="_self"
        inline-template
        :filter-method="actionFilterMethod"
        label="操作">
        <div>
          <el-button
            size="small"
            @click="handleEdit($index, row)">
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete($index, row)">
            删除
          </el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
</style>

<script type="text/ecmascript-6">
  export default {
    methods: {
      handleSelectionChange() {
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      actionFilterMethod(value, row) {
        return row.name.indexOf(value) > -1;
      },
      handleFilterChange(filters) {
        console.log(filters);
      }
    },

    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'a',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: 'b',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: 'c',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: 'ab',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: 'bc',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: 'dc',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: 'eee',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      };
    }
  };
</script>
