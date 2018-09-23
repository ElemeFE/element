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

## Affix 固钉

将元素钉在固定位置，常用于顶部菜单或者侧边菜单

### 基本

:::demo 最简单的用法
```html
<template>
  <el-affix :target="getTarget">
    <el-button type="primary">固定在顶部</el-button>
  </el-affix>
</template>
<script>
  export default {
    methods: {
      getRef() {
        const el = document.getElementsByClassName('page-component__scroll el-scrollbar')[0];
        console.log(el);
        return el;
      }
    }
  }
</script>
```
:::

### 设置偏移量

:::demo 设置距离顶部达到指定距离时触发
```html
<el-affix :offset="200">
  <el-button type="primary">固定距离顶部200px的位置</el-button>
</el-affix>
```
:::


### Attributes

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| offset-top    | 距离窗口顶部达到指定偏移量后触发   | Number |    0     |
| offset-bottom | 距离窗口底部达到指定偏移量后触发   | Number |    -     |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 在固定状态发生改变时触发   | 固定则为true，否则为false |