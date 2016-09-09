## Pagination 分页

当数据量过多时，使用分页分解数据。

### 基础用法

:::demo 设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。`prev`表示上一页，`next`为上一页，`pager`表示页码列表，除此以外还提供了`jumper`和`total`，`size`和特殊的布局符号`->`，`->`后的元素会靠右显示，`jumper`表示跳页元素，`total`表示显示页码总数，`size`用于设置每页显示的页码数量。
```html
<div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</div>
```
:::

### 小型分页

在空间有限的情况下，可以使用简单的小型分页。

:::demo 只需要一个`small`属性，它接受一个`Boolean`，默认为`false`，设为`true`即可启用。
```html
<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
```
:::

### 附加功能

根据场景需要，可以添加其他功能模块。

:::demo 此例是一个完整的用例，使用了`sizechange`和`currentchange`事件来处理页码大小和当前页变动时候触发的事件。`page-sizes`接受一个整型数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]`表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。

```html
<template>
  <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
```
:::
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let firstDemo = demos[0];
        let lastDemo = demos[demos.length - 1];
        firstDemo.classList.add('first');
        lastDemo.classList.add('last');
      });
    }
  }
</script>
<style>
  .demo-pagination .source.first {
    padding: 0;
    display: flex;
  }

  .demo-pagination .first .block {
    display: inline-block;
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

  .demo-pagination .first .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-pagination .source.last {
    padding: 0;
  }

  .demo-pagination .last .block {
    padding: 30px 24px;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;      
    }
  }

  .demo-pagination .last .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-pagination .last .demonstration + .el-pagination {
    float: right;
    width: 70%;
    margin: 5px 20px 0 0;
  }
</style>


### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| small              |   是否使用小型分页样式     | Boolean |      —       | false |
| page-size              | 每页显示条目个数                                                   | Number |      —       | 10 |
| total | 总条目数 | Number | — | 0 |
| current-page | 当前页数 | Number | — | 0|
| layout | 组件布局，子组件名用逗号分隔。| String | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total` | 'prev, pager, next, jumper, ->, total'  |
| page-sizes | 每页显示个数选择器的选项设置 | Number[] | — |  [10, 20, 30, 40, 50, 100] |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| sizechange | pageSize 改变时会触发 | 每页条数`size` |
| currentchange | currentPage 改变时会触发 | 当前页`currentPage` |
