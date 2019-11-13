## TabsDotted 点分tab标签

本组件是对 `el-tabs` 进行扩展，新增`type="dotted"`类型。tips：`el-tabs` 所有的属性和方法在该组件同样适用。

### 基础用法

:::demo 

```html
<template>
  <el-tabs-dotted tab-position="top" type="dotted" @tab-click="doClick">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs-dotted>
</template>
<script>
  export default {
    methods: {
      doClick(v) {
        console.log(v)
      }
    }
  }
</script>
```
:::


### TabsDotted Attributes
|   参数   |    说明    |   类型    |   可选值   |   默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 风格类型   | string   | card/border-card/dotted  |     —    |
| tab-position | 选项卡所在位置 | string  |  top/right/bottom/left --- type="dotted"只支持top/bottom |  top |

:::tip
说明：其他属性和方法请参考 `Tabs`组件
:::