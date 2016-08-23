<style>
  .demo-box {
    .el-dropdown {
      vertical-align: top;

      & .el-button-group {
        margin-bottom: 0;
      }
      & + .el-dropdown {
        margin-left: 15px;
      }
    }
  }
</style>

<script>
  export default {
    methods: {
      handleMainClick() {
        alert('click main button');
      }
    }
  }
</script>

## 基础用法

Dropdown 组件只需要`el-dropdown`和它的子元素`el-dropdown-item`即可生成对应的下拉菜单，通过`text`属性来设置按钮文字。

默认条件下，他又一个主要按钮和一个下拉按钮组成，`el-dropdown`中的主要按钮同样可以设置点击事件，只要使用`mainclick`事件即可。

默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

<div class="demo-box">
  <el-dropdown text="主要按钮" type="primary" @mainclick="handleMainClick()">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item>选项四 哈哈哈哈</el-dropdown-item>
  </el-dropdown>
</div>

```html
<el-dropdown text="主要按钮" type="primary" @mainclick="handleMainClick()">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item>选项四</el-dropdown-item>
</el-dropdown>
```

## 不带独立按钮的下拉菜单

如果不需要默认的主要按钮与下拉按钮的组合，可以通过设置`icon-separate`属性来呈现不带独立按钮的下拉菜单，它接受一个`Boolean`，设置为`false`即可。

在下例中，可以看到，在选项三和选项四中插入了一条分割线，要达成这个效果很简单，只需要在选项四中设置`class`为`divider`。

<el-dropdown text="下拉菜单" type="primary" :icon-separate="false">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>

```html
<el-dropdown text="下拉菜单" type="primary" :icon-separate="false">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
```

## 通过点击触发下拉

默认通过 Hover 即可出现下拉菜单，如果有需求，可以改成 click ，只要在`trigger`属性设置为`click`即可。

<div class="demo-box">
  <el-dropdown text="主要按钮" type="primary" trigger="click">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item>选项四 哈哈哈哈</el-dropdown-item>
  </el-dropdown>
  <el-dropdown text="下拉菜单" type="primary" :icon-separate="false" trigger="click">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
</div>

```html
<el-dropdown text="主要按钮" type="primary" trigger="click">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item>选项四</el-dropdown-item>
</el-dropdown>
<el-dropdown text="下拉菜单" type="primary" :icon-separate="false" trigger="click">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
```

## 按钮样式

除了上述属性以外，由于本质还是按钮，`el-dropdown`同样拥有 Button 组件的相关属性：`type`和`size`，关于这点，可以参考 Button 组件的对应文档，下两例说明了相应字段的功能：

<div class="demo-box">
  <el-dropdown text="下拉菜单" type="text" :icon-separate="false">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
</div>

```html
<el-dropdown text="下拉菜单" type="text" :icon-separate="false">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <li class="divider">选项四</el-dropdown-item>
</el-dropdown>
```

<div class="demo-box">
  <el-dropdown text="下拉菜单" type="primary" size="large">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <li class="divider">选项四</el-dropdown-item>
  </el-dropdown>
  <el-dropdown text="下拉菜单" type="primary">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
  <el-dropdown text="下拉菜单" type="primary" size="small">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
  <el-dropdown text="下拉菜单" type="primary" size="mini">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
</div>

```html
<el-dropdown text="下拉菜单" type="primary" size="large">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <li class="divider">选项四</el-dropdown-item>
</el-dropdown>
<el-dropdown text="下拉菜单" type="primary">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
<el-dropdown text="下拉菜单" type="primary" size="small">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
<el-dropdown text="下拉菜单" type="primary" size="mini">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
```

## 对齐方式

下拉菜单的对齐方式有两种：`start`与`end`，在下例中演示了它们的区别，你可以通过设置`menu-align`来选择一种对齐方式，默认为`end`：

<div class="demo-box">
  <el-dropdown text="下拉菜单 end" type="primary" menu-align="end">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>

  <el-dropdown text="下拉菜单 start" type="primary" menu-align="start">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
</div>

```html
<el-dropdown text="下拉菜单 end" type="primary" menu-align="end">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>

<el-dropdown text="下拉菜单 start" type="primary" menu-align="start">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
```

## Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| text          | 菜单按钮文本      | string          |                       |         |
| type          | 菜单按钮类型，同 Button 组件   | string  |                       |         |
| trigger       | 触发下拉菜单的方式    | string  |    hover,click  |  hover |
| icon-separate | 独立的下拉菜单按钮 | boolean         |            | false   |
| size          | 菜单按钮尺寸，同 Button 组件     | string          | large, small, mini  |     |
| menu-align    | 菜单水平对齐方向     | string          | start, end  | end |
