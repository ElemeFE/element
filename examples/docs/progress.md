<style>
  .demo-box.demo-progress {
    .el-progress {
      margin-bottom: 30px;
    }
  }
</style>

## Progress 进度条
用于展示操作进度，告知用户当前状态和预期

### 基础使用

:::demo Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。`type`属性决定了进度条的样式，带`stripe`的表示条纹效果，不在范围内将会报错，默认为`blue`。`size`属性决定了进度条的大小。

```html
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="50" size="large"></el-progress>
<el-progress :percentage="50" size="small"></el-progress>
<el-progress :percentage="50" type="green"></el-progress>
<el-progress :percentage="50" type="blue"></el-progress>
<el-progress :percentage="50" type="blue-stripe" size="large"></el-progress>
<el-progress :percentage="50" type="green-stripe" size="large"></el-progress>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number          |     0-100          |     0    |
| type          | 进度条样式           | string         | blue,green,blue-stripe,green-stripe | blue |
| size          | 进度条尺寸           | string          | large, small  |     |
