## Affix 固钉

将页面元素钉在可视范围。


### 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
页面可视范围过小时，慎用此功能以免遮挡页面内容。


### 基本使用

:::demo
```html

<template>
  <div>
    <el-affix :offsetTop="this.top">
      <el-button type="primary" @click="()=>{this.top += 10}">Affix top</el-button>
    </el-affix>
    <br />
    <el-affix :offsetBottom="this.bottom">
      <el-button type="primary" @click="()=>{this.bottom += 10}">Affix bottom</el-button>
    </el-affix>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        top: 10,
        bottom: 10,
      };
    },
  };
</script>

```
:::

#### 固定状态改变的回调

可以获得是否固定的状态。

:::demo
```html
<template>
  <el-affix :offsetTop="120" @change="change">
    <el-button>120px to affix top</el-button>
  </el-affix>
</template>
<script>
  export default {
    methods: {
      change(affixed) {
        console.log(affixed);
      },
    },
  };
</script>
```
:::

#### 设定滚动容器

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

:::demo
```html
<template>
  <div style="height: 100px; overflow-y: scroll;" ref="container">
    <div style="padding-top: 60px;height: 300px;background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');">
      <el-affix :target="() => this.$refs.container">
        <el-button type="primary">
          Fixed at the top of container
        </el-button>
      </el-affix>
    </div>
  </div>
</template>


```
:::

### API

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |

#### 事件

| 事件名称 | 说明                         | 回调参数          |
| -------- | ---------------------------- | ----------------- |
| change   | 固定状态改变时触发的回调函数 | Function(affixed) |

**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

```html
<el-affix :style="{ position: 'absolute', top: y, left: x}">
  ...
</el-affix>
```
