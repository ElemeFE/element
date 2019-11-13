## LrContainer 左右布局容器

相对于上面的布局容器，该组件主要针对左右两侧布局，对滚动条样式进行了优化.

### 基础用法

:::demo
```html
  <el-lr-container
    aside-width='100'
    aside-height='200px'
    main-height='200px'
    >
    <template slot='aside'>
      <div style="height:300px;">aside</div>
    </template>
    <template slot="main">
      <div style="height:300px;">main</div>
    </template>
  </el-lr-container>
```
:::

### 带有边框

:::demo
```html
  <el-lr-container
    aside-width='100'
    aside-height='200px'
    main-height='200px'
    border
    >
    <template slot='aside'>
      <div style="height:300px;">aside</div>
    </template>
    <template slot="main">
      <div style="height:300px;">main</div>
    </template>
  </el-lr-container>
```
:::

### Attributes
| 参数      |   说明    |  类型     | 可选值       | 默认值   |
|---------- | -------- |---------- |-------------  |-------- |
| aside-height |左侧边栏高度。height 为 number 类型时，单位为px； | string/number   |  —  |  —  |
| aside-width | 左侧边栏宽度。同上 | string/number   |  —  |  —  |
| main-height | 右侧边栏高度。同上 | string/number   |  —  |  —  |