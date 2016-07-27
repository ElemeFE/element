<style>
  .demo-box.demo-switch {
    .el-switch {
      display: block;
      margin: 20px 0;
    }
  }
</style>

## 基本用法

<div class="demo-box demo-switch">
  <el-switch></el-switch>
</div>

```html
<el-switch></el-switch>
```

## 禁用状态

<div class="demo-box demo-switch">
  <el-switch disabled></el-switch>
  <el-switch disabled :value="false"></el-switch>
  <el-switch on-text="" off-text="" disabled></el-switch>
  <el-switch on-text="" off-text="" disabled :value="false"></el-switch>
</div>

```html
<el-switch disabled></el-switch>
<el-switch disabled :value="false"></el-switch>
<el-switch on-text="" off-text="" disabled></el-switch>
<el-switch on-text="" off-text="" disabled :value="false"></el-switch>
```

## 自定义颜色

<div class="demo-box demo-switch">
  <el-switch on-color="#13ce66" off-color="#ff4949"></el-switch>
  <el-switch on-color="#13ce66" off-color="#ff4949" on-text="" off-text=""></el-switch>
</div>

```html
<el-switch on-color="#13ce66" off-color="#ff4949"></el-switch>
<el-switch on-color="#13ce66" off-color="#ff4949" on-text="" off-text=""></el-switch>
```

## API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | switch 的选中状态   | boolean    |               | true |
| disabled  | 禁用    | boolean   | true, false   | false   |
| width  | switch 的宽度（像素）    | number   | | 58（有文字）/ 46（无文字） |
| on-icon-class  | switch 打开时所显示图标的类名    | string   | | |
| off-icon-class  | switch 关闭时所显示图标的类名    | string   | | |
| on-text  | switch 打开时的文字    | string   | | 'ON' |
| off-text  | switch 关闭时的文字    | string   | | 'OFF' |
| on-color  | switch 打开时的背景色    | string   | | |
| off-color  | switch 关闭时的背景色    | string   | | |
| name  | 对应 input 的 name 属性    | string   | | |

