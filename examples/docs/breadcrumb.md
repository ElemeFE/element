## Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面

### 基础使用

Breadcrumb，面包屑导航，用于提供给用户一个回溯到首页的路径，最后一级即为当前位置。

:::demo 在`el-breadcrumb`中使用`el-breadcrumb-item`标签表示从首页开始的每一级。Element 提供了一个`separator`属性，在`el-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

```html
<el-breadcrumb separator="//">
  <el-breadcrumb-item>Home</el-breadcrumb-item>
  <el-breadcrumb-item>Page 1</el-breadcrumb-item>
  <el-breadcrumb-item>Page 1-2</el-breadcrumb-item>
  <el-breadcrumb-item>Page 1-2-1</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |
