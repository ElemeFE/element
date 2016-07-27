## 基础用法
适用广泛的基础用法。

<el-pagination
  layout="prev, pager, next"
  :total="50">
</el-pagination>

```html
<el-pagination
  layout="prev, pager, next"
  :total="50">
</el-pagination>
```

## 小型分页
在空间有限的情况下，可以使用简单的小型分页。

<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>

```html
<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
```

## 复杂分页
能够承载复杂交互的分页，显示更多页码。

<el-pagination
  layout="prev, pager, next"
  :total="1000">
</el-pagination>

```html
<el-pagination
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
```

## 附加功能
在复杂分页的基础上，根据场景需要，可以添加其他功能模块。


<el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  layout="sizes, prev, pager, next, jumper, total"
  :total="1000">
</el-pagination>

```html
<el-pagination
  layout="sizes, prev, pager, next, jumper, total"
  :total="1000">
</el-pagination>
```

<script>
  module.exports = {
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

## API
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| small              |   小型分页样式     | Boolean |             | false |
| page-size              | 每页个数                                                   | Number |             | 10 |
| total | 总个数 | Number | | 0 |
| current-page | 当前页数 | Number | | 0|
| layout | 组件布局，子组件名用逗号分隔。| String | `prev`, `pager`, `next`, `jumper`, `slot`, `->`, `total` | 'prev, pager, next, jumper, slot, ->, total'  |
| page-sizes | 切换每页显示个数的子组件值 | Number[] | |  [10, 20, 30, 40, 50, 100] |
| size-change | pageSize 改变时会触发的事件 | Function | | |
| current-change | currentPage 改变时会触发的事件 | Function | | |

