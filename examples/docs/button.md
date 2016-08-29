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

## Button 按钮
常用的操作按钮

### 基础用法

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<el-button>Default</el-button>
<el-button type="primary">primary</el-button>
<el-button type="success">success</el-button>
<el-button type="warning">warning</el-button>
<el-button type="danger">danger</el-button>
<el-button type="info">info</el-button>
<el-button type="text">text button</el-button>
```
:::

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-button :disabled="true">disabled</el-button>
```
:::

### Plain Button
默认的`Default`主题，我们称之为朴素按钮(Plain Button)，你可以 hover 在样例上进行预览。

:::demo 朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。设置`plain`属性，它接受一个`Boolean`。注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text button`的样式。

```html
<el-button :plain="true">Default</el-button>
<el-button :plain="true" type="success">success</el-button>
<el-button :plain="true" type="warning">warning</el-button>
<el-button :plain="true" type="danger">danger</el-button>
<el-button :plain="true" :disabled="true">disabled</el-button>
```
:::

### 尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<el-button type="primary" size="large">large</el-button>
<el-button type="primary">Default</el-button>
<el-button type="primary" size="small">small</el-button>
<el-button type="primary" size="mini">mini</el-button>
```
:::

### Loading

可以方便的处理 loading 状态，点击下面的按钮预览效果。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<el-button type="primary" :loading="true">Button</el-button>

<el-button type="primary" :loading="isLoading" @click.native="isLoading = true">Button</el-button>
<el-button type="primary" icon="search" :loading="isLoading2" @click.native="isLoading2 = true">Button</el-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```
:::

### 按钮组

如果你需要多个并列的按钮，按钮组可以帮你轻松的实现它。

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

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
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |         |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |         |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |    |    |
