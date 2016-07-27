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

<p>通过与 button 一致的 type 属性来指定菜单按钮类型。</p>

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

可以通过将`icon-separate`属性设为`false`来呈现不带独立按钮的下拉菜单。

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

## 文字类型下拉菜单

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

## 尺寸

<div class="demo-box">
  <el-dropdown text="下拉菜单" type="primary" size="large">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <li class="divider">选项四</el-dropdown-item>
  </el-dropdown><el-dropdown text="下拉菜单" type="primary">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown><el-dropdown text="下拉菜单" type="primary" size="small">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown><el-dropdown text="下拉菜单" type="primary" size="mini">
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
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>
```

## API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| text          | 菜单按钮文本      | string          |                       |         |
| type          | 菜单按钮类型，同 button    | string  |                       |         |
| trigger       | 触发下拉菜单的方式    | string  |    hover,click  |  hover |
| icon-separate | 独立的下拉菜单按钮 | boolean         | true, false           | false   |
| size          | 菜单按钮尺寸，同 button     | string          | large, small, mini  |     |
| menu-align    | 菜单水平对齐方向     | string          | start, end  | end |
