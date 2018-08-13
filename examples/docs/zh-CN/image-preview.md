## ImagePreview 图片预览
用于图片的预览组件

<script>
export default {
  methods: {
    open() {
      this.$imagePreview({
        url: "https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667",
        height: 400,
        width: '60%',
        maxZoomValue: 3,
        mixZoomValue: 0.4,
        zoomValue: 0.2
      })
    }
  }
}
</script>

### 基础用法

:::demo 文本示例

```html
<template>
  <el-button @click="open">打开</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$imagePreview({
          url: "https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667",
          height: 400,
          width: '60%',
          maxZoomValue: 3,
          mixZoomValue: 0.4,
          zoomValue: 0.2
        })
      }
    }
  }
</script>
```
:::

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| url | 预览图片的url | string | — | — |
| height | 预览窗口的高度 | number | — | 400 |
| width | 预览窗口的宽度 | string | — | 60% |
| maxZoomValue | 预览图片最大可放大的倍数 | number | — | 2 |
| minZoomValue | 预览图片最小可缩小的倍数 | number | — | 0.4 |
| zoomValue | 每次滚动鼠标滚轮以及按下缩放按钮的图片缩放基数 | number | — | 0.2 |
| onClose | 当预览窗口关闭时的回调函数 | function | — | — |

### Functions
调用 `this.$imagePreview` 会返回当前 imagePreview 的实例，实例可以使用以下方法。

| 方法名     | 说明          | 参数类型 |
|---------- |-------------- |-----------|
| closePreview | 关闭当前窗口 |—|
| zoomIn | 放大预览的图片,如果传入了参数，则在当前的缩放值下累加，否则按照默认值累加 | number |
| zoomOut | 缩小预览的图片,如果传入了参数，则在当前的缩放值下累减，否则按照默认值累减 | number |
| zoomTo | 直接缩放到指定的值,如果超出设定的范围，则取边界值 | number |
| rotateImage | 旋转图像，如果传入了参数，则旋转到指定的角度，否者默认旋转90度 | number |


