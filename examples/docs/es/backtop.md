## Backtop

A button to back to top

### Basic usage

Scroll down to see the bottom-right button.
:::demo

```html
<template>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</template>
```

:::

### Customizations

Display area is 40px \* 40px.
:::demo

```html
<template>
  Scroll down to see the bottom-right button.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
</template>
```

:::

### Attributes

| Attribute         | Description                                                         | Type            | Accepted Values | Default |
| ----------------- | ------------------------------------------------------------------- | --------------- | --------------- | ------- |
| target            | the target to trigger scroll                                        | string          |                 |         |
| visibility-height | the button will not show until the scroll height reaches this value | number |                 | 200     |
| right             | right distance                                                      | number |                 | 40      |
| bottom            | bottom distance                                                     | number |                 | 40      |

### Events

| Event Name | Description         | Parameters  |
| ---------- | ------------------- | ----------- |
| click      | triggers when click | click event |
