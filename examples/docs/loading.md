<style>
  .el-loading-demo {
    border: solid 1px #999;
    padding: 10px;
    text-align: center;

    p {
      font-size: 30px;
      color: #999;
      margin: 10px 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false,
        fullscreenLoading: false,
        tableLoading: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },

    methods: {
      loadTable() {
        this.tableLoading = true;
        setTimeout(() => {
          this.tableLoading = false;
        }, 2000);
      },

      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      }
    }
  }
</script>

## 基本用法

在 Loading 组件中，Element 准备了自定义命令`v-loading`，只需要绑定`Boolean`即可，默认状况下，Loading 遮罩会插入到绑定元素的子节点。

<el-button :plain="true" @click.native="loading = !loading">打开 / 关闭 loading</el-button>

<div v-loading="loading" class="el-loading-demo">
  <p>点击上面的按钮，本区域显示 loading 遮罩</p>
</div>

```html
<el-button :plain="true" @click.native="loading = !loading">打开 / 关闭 loading</el-button>

<div v-loading="loading" class="el-loading-demo">
  <p>点击上面的按钮，本区域显示 loading 遮罩</p>
</div>
```

## 修饰符

Loading 遮罩默认插入至绑定了 `v-loading` 指令的元素上。通过添加 `body` 修饰符，可以使遮罩插入至 DOM 中的 body 上。

<el-button :plain="true" @click.native="loading2 = !loading2">打开 / 关闭 loading</el-button>

<div v-loading.body="loading2" class="el-loading-demo">
  <p>点击上面的按钮，本区域显示 loading 遮罩</p>
</div>

```html
<el-button :plain="true" @click.native="loading2 = !loading2">打开 / 关闭 loading</el-button>

<div v-loading.body="loading2" class="el-loading-demo">
  <p>点击上面的按钮，本区域显示 loading 遮罩</p>
</div>
```

当需要全屏遮罩时，可使用 `fullscreen` 修饰符（此时遮罩会插入至 body 上）

<el-button :plain="true" @click.native="openFullScreen" v-loading.fullscreen="fullscreenLoading">打开全屏 loading</el-button>

```html
<template>
  <el-button
    :plain="true"
    @click.native="openFullScreen"
    v-loading.fullscreen="fullscreenLoading">
    打开全屏 loading
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    }
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      }
    }
  }
</script>
```
