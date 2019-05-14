## Backtop 回到顶部

返回页面顶部的操作按钮

### 基础用法
滑动页面即可看到右下方的按钮。
:::demo
```html
<template>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</template>
```
:::

### 自定义显示内容
显示区域被固定为40px * 40px的区域, 其中的内容可支持自定义。
:::demo
```html
<template>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" bottom="100">
    <div style="{
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    }">UP</div>
  </el-backtop>
</template>
```
:::

### Attributes

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| target         | 触发滚动的对象          |     `String, HTMLDivElement`  | `document.documentElement` | `document.documentElement` |
| trigger-height | 滚动高度达到此参数值才出现`BackTop`   | `String`, `Number`  | 200   | 200   |
| right          |  控制其显示位置, 距离页面右边距     |    `String`, `Number`| 40   |40   |
| bottom         | 控制其显示位置, 距离页面底部距离       |`String`, `Number` |  40   |40   |

### Events

| 事件名        | 说明                     | 回调参数   |
| -------      | -------                | -------    |
| click        | 点击按钮的回调函数         | (e:event)  |
