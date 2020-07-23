## Affix 图钉

使用图钉可以将元素钉在某个位置，使其不随页面的滚动而滚动。常用于侧边栏菜单或者顶部菜单。

### 基础用法

基础的用法

:::demo
```html
<template>
  <el-affix :target="getTarget">
    <el-button type="primary">固定在顶部</el-button>
  </el-affix>
</template>
<script>
  export default {
    methods: {
      getTarget() {
        const el = window.document.getElementsByClassName('page-component__scroll el-scrollbar')[0].children[0];
        return el;
      }
    }
  }
</script>
```
:::

### 设置偏移量

设置距离顶部达到指定距离时触发

:::demo
```html
<template>
  <el-affix :offset-top="100" :target="getTarget">
    <el-button type="primary">固定距离顶部100px的位置</el-button>
  </el-affix>
</template>
<script>
  export default {
    methods: {
      getTarget() {
        const el = window.document.getElementsByClassName('page-component__scroll el-scrollbar')[0].children[0];
        return el;
      }
    }
  }
</script>
```
:::

### 底部固定

设置距离底部达到指定距离时触发

:::demo
```html
<template>
  <el-affix :offset-bottom="100" :target="getTarget">
    <el-button type="primary">固定距离底部100px的位置</el-button>
  </el-affix>
</template>
<script>
  export default {
    methods: {
      getTarget() {
        const el = window.document.getElementsByClassName('page-component__scroll el-scrollbar')[0].children[0];
        return el;
      }
    }
  }
</script>
```
:::


### Attributes

| 参数          | 说明                              | 类型   | 可选值 | 默认值 |
|---------------|----------------|-----------------|--------|----------------|
| offset-top    | 距离窗口顶部达到指定偏移量后触发    | Number |  —  |    0     |
| offset-bottom | 距离窗口底部达到指定偏移量后触发    | Number |  —  |    -     |
| target        | 设置 Affix 相对于哪个元素进行固定，并监听其滚动事件，值为一个返回对应 DOM 元素的函数 | Function |  —  | () => window   |
| targets       | 设置 Affix 需要额外监听其滚动事件的元素，值为一个返回对应 DOM 元素数组的函数        | Function |  —  | () => [window] |
| use-capture   | addEventListener 原生的 useCapture 选项    | Boolean |  —  | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| change | 在固定状态发生改变时触发   | 固定则为true，否则为false |