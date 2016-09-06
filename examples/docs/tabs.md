<script>
  export default {
    data() {
      return {
        tabs: [{
          title: '选项卡一',
          content: '选项卡一内容'
        },{
          title: '选项卡二',
          content: '选项卡二内容'
        },{
          title: '选项卡三',
          content: '选项卡三内容'
        },{
          title: '选项卡四',
          content: '选项卡四内容'
        }],
        activeName: 'two',
        activeName2: ''
      }
    },
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style>
  .el-tabs {
    margin-bottom: 30px;
  }
</style>
## Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，只需要使用`el-tabs`和子元素`el-tab-pane`即可，在两个元素中，我们分别提供了一系列的属性来方便使用，`el-tab-pane`中`label`决定了选项卡标题，标签内部写入内容即可。在下例中我们在`el-tabs`中设置了`active-name`属性，接受一个`String`值，表明选中的选项卡，在`el-tab-pane`中可以设置对应的`name`属性，如果没有设置`name`，则默认值为顺序的`1`/`2`/`3`/`4`。例子选中选项卡2，如果不设置`name`，将`active-name`设为`2`，可以达成相同效果。

```html
<template>
  <el-tabs :active-name="activeName">
    <el-tab-pane label="选项卡一"></el-tab-pane>
    <el-tab-pane name="two" label="选项卡二"></el-tab-pane>
    <el-tab-pane label="选项卡三"></el-tab-pane>
    <el-tab-pane label="选项卡四"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'two'
      };
    }
  };
</script>
```
:::

### 选项卡样式

选项卡样式的标签页。

:::demo 只需要设置`type`属性即可，如果需要标签风格，将其设置为`card`。

```html
<template>
  <el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove">
    <el-tab-pane label="选项卡一"></el-tab-pane>
    <el-tab-pane label="选项卡二"></el-tab-pane>
    <el-tab-pane label="选项卡三"></el-tab-pane>
    <el-tab-pane label="选项卡四"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab) {
        console.log(tab);
      }
    }
  };
</script>
```
:::

### 可关闭

可以关闭标签页

:::demo 在`el-tabs`中设置`closable`属性，接受一个`Boolean`，设置为`true`时为可关闭。

```html
<template>
  <el-tabs type="card" :closable="true" @tab-click="handleClick" @tab-remove="handleRemove">
    <el-tab-pane label="选项卡一"></el-tab-pane>
    <el-tab-pane label="选项卡二"></el-tab-pane>
    <el-tab-pane label="选项卡三"></el-tab-pane>
    <el-tab-pane label="选项卡四"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab) {
        console.log(tab);
      }
    }
  };
</script>
```
:::

### 卡片化

卡片化的标签页。

:::demo 将`type`设置为`border-card`。
```html
<el-tabs type="border-card">
  <el-tab-pane label="选项卡一"></el-tab-pane>
  <el-tab-pane label="选项卡二"></el-tab-pane>
  <el-tab-pane label="选项卡三"></el-tab-pane>
  <el-tab-pane label="选项卡四"></el-tab-pane>
</el-tabs>
```
:::

### Tabs Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 风格类型   | string   | card, border-card  |     —    |
| closable  | 标签是否可关闭   | boolean   | true, false |  false  |
| active-name  | 选中选项卡的 name  | string   |  —  |  —  |

### Tabs Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| tab-click  | tab 被选中的钩子 | 被选中的标签 tab |
| tab-remove  | tab 被删除的钩子  | 被删除的标签 tab |

### Tab-pane Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   | — |    —     |
| name       | 与选项卡 activeName 对应的标识符，表示选项卡别名   | string   | — |  该选项卡在选项卡中的 name 值，如第一个选项卡则为'1'  |
