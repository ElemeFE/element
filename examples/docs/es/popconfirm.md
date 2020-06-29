## Popconfirm 

A simple confirmation dialog of an element click action.

### Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is avaliable in Popconfirm, `content` will be ignored.
```html
<template>
<el-popconfirm
  title="Are you sure to delete this?"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
</template>
````
:::

### Customise
You can customise Popconfirm like:
:::demo
```html
<template>
<el-popconfirm
  confirmButtonText='OK'
  cancelButtonText='No, Thanks'
  icon="el-icon-info"
  iconColor="red"
  title="Are you sure to delete this?"
  @on-confirm="confirm"
  @on-cancel="cancel"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
</template>
<script>
  export default {
    methods: {
      confirm() {
         this.$message({
              type: 'info',
              message: `confirm`
            });
      },
      cancel() {
         this.$message({
              type: 'info',
              message: `cancel`
            });
      }
    }
  }
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | Title | String | — | — |
|  confirmButtonText              | Confirm button text | String | — | — |
|  cancelButtonText              | Cancel button text | String | — | — |
|  confirmButtonType              | Confirm button type | String | — | Primary |
|  cancelButtonType              | Cancel button type | String | — | Text |
|  icon              | Icon | String | — | el-icon-question |
|  iconColor              | Icon color | String | — | #f90 |
|  hideIcon              | is hide Icon | Boolean | — | false |

### Slot
| Name | Description |
|--- | ---|
| reference | HTML element that triggers Popconfirm |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| on-confirm | triggers when click confirm button | — |
| on-cancel | triggers when click cancel button | — |