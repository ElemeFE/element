## Help

A question icon wrapped by the `el-tooltip`.

### Basic Usage

It requires the `content` attribute.

:::demo 

```html
<el-help content="I am here to help you"></el-help>
```

:::

### Placement And Style

It also accepts both `placement` and `icon-style` as attributes.

:::demo 

```html
<el-help content="I am here to help you" placement="bottom" :icon-style="{ color:'#3f9eff' }"></el-help>
```
:::

### Implemented With Form Item

It is also implemented with the `el-form-item`.

:::demo Specifying the `help` attribute in the `el-form-item` will insert `el-help` in the back of the label.

```html
<el-form label-width="120px">
  <el-form-item label="Name" help="Your name on the ID card">
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