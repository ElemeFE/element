<style>
  .demo-box.demo-progress {
    .el-progress {
      margin-bottom: 30px;
    }
  }
</style>

## 基础使用

一个基础的进度条

<div class="demo-box demo-progress">
  <el-progress :percentage="50" size="large"></el-progress>
  <el-progress :percentage="50" type="green" size="large"></el-progress>
  <el-progress :percentage="50"></el-progress>
  <el-progress :percentage="50" type="green"></el-progress>
  <el-progress :percentage="50" size="small"></el-progress>
  <el-progress :percentage="50" type="green" size="small"></el-progress>
</div>

```html
<el-progress :percentage="50" size="large"></el-progress>
<el-progress :percentage="50" type="green" size="large"></el-progress>
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="50" type="green"></el-progress>
<el-progress :percentage="50" size="small"></el-progress>
<el-progress :percentage="50" type="green" size="small"></el-progress>
```

## 带条纹效果

<div class="demo-box demo-progress">
  <el-progress :percentage="50" type="blue-stripe" size="large"></el-progress>
  <el-progress :percentage="50" type="green-stripe" size="large"></el-progress>
</div>

```html
<el-progress :percentage="50" type="blue-stripe" size="large"></el-progress>
<el-progress :percentage="50" type="green-stripe" size="large"></el-progress>
```

## API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| percentage    | 百分比         | number          |                       |     0    |
| type          | 类型           | string         | blue,green,blue-stripe,green-stripe | blue |
| size          | 尺寸           | string          | large, small  |     |
