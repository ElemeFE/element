## Splitpanes 分割面板

这个组件可以分割一个空间为多个可以调整大小的面板。

### 基本用法

可以通过 `pane-size` 设置某一内含面板所占半分比，通过 `pane-max`设置某一内含面板所占最大半分比，通过 `pane-min` 设置某一内含面板所占最小半分比。

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### 纵向排布容器的分割面板

通过添加 `is-vertical` 可以分割一个纵向的空间。

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes" is-vertical>
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::



### 横纵面板组合使用

Splitpanes 可以嵌套实现组合的横向和纵向分割。

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20">
      <span>1</span>
    </el-pane>
    <el-pane>
      <el-splitpanes is-vertical>
        <el-pane>
          <span>2</span>
        </el-pane>
        <el-pane>
          <span>3</span>
        </el-pane>
        <el-pane>
          <span>4</span>
        </el-pane>
      </el-splitpanes>
    </el-pane>
    <el-pane>
      <span>5</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Splitpanes Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| is-expansive  | 为真时，拖拽分割条碰撞到临近分割条时，会继续向临近分割条方向挤压下一个面板的空间。否则最多只是压缩自己部分的空间  | Boolean   |  —  |  true |
| is-vertical  | 为真时，默认为纵向排布的容器的分割面板  | Boolean   |  —  |  false |
| has-leading-splitter  | 为真时，第一个面板会前会被加上双击可导致最大化的分隔条  | Boolean   |  —  |  false |
| has-dblclick-expansion  | 为真时，双击分割条会导致面板最大化  | Boolean   |  —  |  true |

### Pane Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| pane-size  | 面板非固定数值、被伸缩方向相对于所处外容器的初始宽度（高度）百分比  | Number   |  —  | - |
| pane-max | 面板非固定数值、被伸缩方向相对于所处外容器的最大宽度（高度）百分比   | Number   | -  |     100    |
| pane-min | 面板非固定数值、被伸缩方向相对于所处外容器的最小宽度（高度）百分比   | Number   | — |  0  |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| ready | 面板完成加载后的事件 | — |
| resize | 面板中任何的尺寸变化过程对应触发的事件 | — |
| resized | 面板中任何的尺寸变化完成时对应触发的事件 | — |
| pane-maximize | 双击分割条导致面板被最大化的事件 | — |
| pane-click | 面板非分割条部分被点击触发的事件 | — |
| splitter-click | 分割条部分被点击触发的事件 | — |
