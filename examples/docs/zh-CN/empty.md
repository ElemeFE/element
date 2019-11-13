## Empty 空状态

空状态时的展示占位图。

### 何时使用

当目前没有数据时，用于显式的用户提示。

### 代码演示

:::demo

```html
<template>
  <el-empty />
</template>
```
:::

### 自定义

自定义图片、描述、附属内容。

:::demo

```html
<template>
  <el-empty
    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
  >
    <span slot="description"> Customize <a href="javascript:void(0)">Description</a> </span>
    <el-button type="primary">Create Now</el-button>
  </el-empty>
</template>
```
:::

### Attributes
| 参数 | 说明  | 类型  | 可选值 | 默认值 |
| --- | ------ | ---- | ----- | ---- |
| description | 自定义描述内容 | string \| v-slot | - | - |
| image       | 设置显示图片，为 string 时表示自定义图片地址 | string \| v-slot | - | false  |
