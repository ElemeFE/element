## Badge 标记
出现在按钮、图标旁的数字或状态标记

### 基础用法
Badge 组件可以在右上角展示标记，最常见的用法是用于展示消息数。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<el-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<el-dropdown text="点我查看" type="text" :icon-separate="false" trigger="click">
  <el-dropdown-item class="clearfix">
    评论
    <el-badge class="mark" :value="12" />
  </el-dropdown-item>
  <el-dropdown-item class="clearfix">
    回复
    <el-badge class="mark" :value="3" />
  </el-dropdown-item>
</el-dropdown>
```
:::

### 最大值
为了方便使用，Badge 组件可以自定义显示的最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
```
:::

### 自定义内容

下面是两个样例，它们可以启发你在适时的情况使用 Badge：

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```html
<el-badge value="new" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
```
:::

### 小红点

可以使 Badge 组件显示为一个小红点，来提醒用户需要关注的内容，此时设置其他属性均无效。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

```html
<el-badge is-dot class="item">数据查询</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="share" type="primary"></el-button>
</el-badge>
```
:::

<style scoped>
  .share-button {
    width: 36px;
    padding: 10px;
  }

  .mark {
    margin-top: 8px;
    line-height: 1;
    float: right;
  }

  .clearfix {
    @utils-clearfix;
  }

  .item {
    margin-right: 40px;
  }
</style>

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值      | string, number          |          —             |    —     |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点    | boolean  |  —  |  false |
