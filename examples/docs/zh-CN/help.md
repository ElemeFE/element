## Help 帮助

包含着问号的 `el-tooltip`.

### 基本使用

它需要 `content` 属性.

:::demo 

```html
<el-help content="我是来帮你的"></el-help>
```

:::

### 出现位置和样式

它也接受 `placement` 和 `icon-style` 属性.

:::demo 

```html
<el-help content="我是来帮你的" placement="bottom" :icon-style="{ color:'#3f9eff' }"></el-help>
```
:::

### 与FormItem一起使用

`el-help` 也能和 `el-form-item` 一起使用.

:::demo `el-form-item` 可以通过 `help` 属性来插入包含着 `el-help` 在标签的后面.

```html
<el-form label-width="120px">
  <el-form-item label="名字" help="身份证上的名字">
    <el-input></el-input>
  </el-form-item>
</el-form>
```
:::

### Form-Item Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
|  content  | display content of tooltip | String   | — | — |
|  placement | position of Tooltip   | string    |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  top |
|  icon-style  | style of icon | Object   | — | — |