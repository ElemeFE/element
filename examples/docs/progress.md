<style>
  .demo-box.demo-progress {
    .el-progress {
      margin-bottom: 30px;
    }
  }
</style>

## 基础使用

Progress 组件设置`percentage`属性即可，它接受`Number`类型，表示进度条对应的百分比，**必填**，必须在 0-100。

`type`属性决定了进度条的样式，提供四种：`green`，`green-stripe`，`blue`，`blue-stripe`，带`stripe`的表示条纹效果，不在范围内将会报错，默认为`blue`。

`size`属性决定了进度条的大小，可以设置：`large`、`small`或不设置。

下面是样例：

<div class="demo-box demo-progress">
  <el-progress :percentage="50"></el-progress>
  <el-progress :percentage="50" size="large"></el-progress>
  <el-progress :percentage="50" size="small"></el-progress>
  <el-progress :percentage="50" type="green"></el-progress>
  <el-progress :percentage="50" type="blue"></el-progress>
  <el-progress :percentage="50" type="blue-stripe" size="large"></el-progress>
  <el-progress :percentage="50" type="green-stripe" size="large"></el-progress>
</div>

```html
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="50" size="large"></el-progress>
<el-progress :percentage="50" size="small"></el-progress>
<el-progress :percentage="50" type="green"></el-progress>
<el-progress :percentage="50" type="blue"></el-progress>
<el-progress :percentage="50" type="blue-stripe" size="large"></el-progress>
<el-progress :percentage="50" type="green-stripe" size="large"></el-progress>
```

## Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number          |     0-100          |     0    |
| type          | 进度条样式           | string         | blue,green,blue-stripe,green-stripe | blue |
| size          | 进度条尺寸           | string          | large, small  |     |
