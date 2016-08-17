<script>
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    }
  }
</script>
<style>
  .demo-box.demo-button {
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      margin-bottom: 20px;

      .el-button + .el-button {
        margin-left: 0;
      }
    }
  }
</style>

## 基础用法

button组件默认提供7种主题，由`type`属性来定义，默认为`default`：

<div class="demo-box demo-button">
  <el-button>Default</el-button>
  <el-button type="primary">primary</el-button>
  <el-button type="success">success</el-button>
  <el-button type="warning">warning</el-button>
  <el-button type="danger">danger</el-button>
  <el-button type="info">info</el-button>
  <el-button type="text">text button</el-button>
</div>

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值：

<div class="demo-box demo-button">
  <el-button>Default</el-button>
  <el-button :disabled="true">disabled</el-button>
</div>

下面是他们的样例代码：

```html
<el-button>Default</el-button>
<el-button type="primary">primary</el-button>
<el-button type="success">success</el-button>
<el-button type="warning">warning</el-button>
<el-button type="danger">danger</el-button>
<el-button type="info">info</el-button>
<el-button type="text">text button</el-button>
<el-button :disabled="true">disabled</el-button>
```

## Plain Button

默认的`Default`主题，我们称之为朴素按钮(Plain Button)，朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。

设置`plain`属性，它接受一个`Boolean`。

注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text button`的样式。

你可以Hover在样例上进行预览：

<div class="demo-box demo-button">
  <el-button :plain="true">Default</el-button>
  <el-button :plain="true" type="success">success</el-button>
  <el-button :plain="true" type="warning">warning</el-button>
  <el-button :plain="true" type="danger">danger</el-button>
  <el-button :plain="true" :disabled="true">disabled</el-button>
</div>

```html
<el-button :plain="true">Default</el-button>
<el-button :plain="true" type="success">success</el-button>
<el-button :plain="true" type="warning">warning</el-button>
<el-button :plain="true" type="danger">danger</el-button>
<el-button :plain="true" :disabled="true">disabled</el-button>
```

## 尺寸

button组件提供除了默认值以外的三种尺寸：`large`、`small`、`mini`来满足不同的需求，通过设置`size`属性来配置它们。

<div class="demo-box demo-button">
  <el-button type="primary" size="large">large</el-button>
  <el-button type="primary">Default</el-button>
  <el-button type="primary" size="small">small</el-button>
  <el-button type="primary" size="mini">mini</el-button>
</div>

```html
<el-button type="primary" size="large">large</el-button>
<el-button type="primary">Default</el-button>
<el-button type="primary" size="small">small</el-button>
<el-button type="primary" size="mini">mini</el-button>
```

## Loading

button组件提供的`loading`属性可以方便的让你处理 loading 状态，它接受一个`Boolean`，要设置为 loading 状态，只要设置`loading`属性为`true`即可，下面是一个样例：

<div class="demo-box demo-button">
  <el-button type="primary" :loading="true">Button</el-button>
</div>

点击后变成 loading 状态的样例，尝试点击它：

<div class="demo-box demo-button">
  <el-button type="primary" :loading="isLoading" @click.native="isLoading = true">Button</el-button>
  <el-button type="primary" icon="search" :loading="isLoading2" @click.native="isLoading2 = true">Button</el-button>
</div>

```html
<el-button type="primary" :loading="true">Button</el-button>

<el-button type="primary" :loading="isLoading" @click.native="isLoading = true">Button</el-button>
<el-button type="primary" icon="search" :loading="isLoading2" @click.native="isLoading2 = true">Button</el-button>
```

## 图标按钮

理所当然的，Element也支持图标按钮，设置`icon`属性即可，icon的列表可以参考Element的icon组件，下面是简单的预览：

<div class="demo-box demo-button">
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="search">Search</el-button>
</div>

除此以外，你也可以设置在文字右边的icon，只要使用`i`标签即可，使用图标组件来实现它：

<div class="demo-box demo-button">
  <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
</div>

```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```

## 按钮组

如果你需要多个并列的按钮，按钮组可以帮你轻松的实现它，使用`<el-button-group>`标签来嵌套你的按钮即可。

<div class="demo-box demo-button">
  <el-button-group>
    <el-button>Button</el-button>
    <el-button>Button</el-button>
    <el-button>Button</el-button>
  </el-button-group>
  <div></div>
  <el-button-group>
    <el-button type="primary" icon="edit"></el-button>
    <el-button type="primary" icon="share"></el-button>
    <el-button type="primary" icon="delete"></el-button>
  </el-button-group>
</div>

```html
<el-button-group>
  <el-button>Button</el-button>
  <el-button>Button</el-button>
  <el-button>Button</el-button>
</el-button-group>
<div></div>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
```

## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |         |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |         |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |    |    |
