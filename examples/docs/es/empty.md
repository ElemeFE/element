## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<el-empty description="descrição"></el-empty>
```
:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<el-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-empty>
```
:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<el-empty :image-size="200"></el-empty>
```
:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo
```html
<el-empty>
  <el-button type="primary">Button</el-button>
</el-empty>
```
:::

### Empty Attributes
| Attribute       | Description      | Type         | Acceptable Value    | Default Value   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| image          | image URL       | string  |          —             |    —     |
| image-size    | image size (width)  | number | — |    —  |
| description  | description    | string  |    —  |  — |

### Empty Slots

| Name | Description |
|------|--------|
| default | Custom bottom content  |
| image | Custom image     |
| description | Custom description     |
