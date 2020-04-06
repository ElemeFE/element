## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<el-badge :value="12" class="item">
  <el-button size="small">默认</el-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <el-button size="small">主要</el-button>
</el-badge>
<el-badge :value="1" class="item" type="success">
  <el-button size="small">成功</el-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <el-button size="small">警告</el-button>
</el-badge>
<el-badge :value="3" class="item" type="danger">
  <el-button size="small">危险</el-button>
</el-badge>
<el-badge :value="4" class="item" type="info">
  <el-button size="small">信息</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      评论
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      回复
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 最大值
可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`。需要注意的是，只有当`value`为`Number`时，它才会生效。

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 按 K 和 W 显示
还有一种控制长度的方式，超过（包括） `1000` 显示 `nK+`，超过 `10000` 显示 `nW+`

:::demo
```html
<el-badge :value="2000" use-kw class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="30000" use-kw class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```html
<el-badge value="new" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

```html
<el-badge is-dot class="item">数据查询</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| value        | 显示值           | string, number  |          —            |    —    |
| max          | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| use-kw       | 大于等于 1000 显示 nK+，大于等于 10000 显示 nW+，设置该属性后会忽略 max 属性，要求 value 是 Number 类型 |
boolean | — | false |
| is-dot       | 小圆点           | boolean         |         —             |  false  |
| hidden       | 隐藏 badge       | boolean         |         —             |  false  |
| type         | 类型，默认配色同 danger | string   | default / primary / success / warning / danger / info | default |
