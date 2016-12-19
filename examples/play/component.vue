<template>
  <div>
    <p>{{visible}}</p>
    <el-button>Test</el-button>
    <el-table :data="tableData">
      <el-table-column label="title">
        <template scope="props">
          <span>{{ props.row }}</span>
          <button @click="visible = !visible">click</button>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="value">
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
</style>

<script type="text/babel">
  export default {
    methods: {
      handleClick() {
        console.log(123);
      }
    },

    data() {
      return {
        visible: false,
        tableData: [
          { title: 'ahh', value: 1 },
          { title: 'ggg', value: 1 }
        ]
      };
    }
  };
</script>
