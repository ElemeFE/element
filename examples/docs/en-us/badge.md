<style>
  .demo-badge.demo-box .el-dropdown {
    vertical-align: middle;
  }
</style>

## Badge

A number or status mark on button and icon.

### How to use

Display the number of new messages.

:::demo defines a property `value`,it can accept value typed with `Number` or `String`.

```html
<el-badge :value="12" class="item">
  <el-button size="small">comment</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">reply</el-button>
</el-badge>

<el-dropdown text="click me" type="text" :icon-separate="false" trigger="click">
  <el-dropdown-item class="clearfix">
    comment
    <el-badge class="mark" :value="12" />
  </el-dropdown-item>
  <el-dropdown-item class="clearfix">
    reply
    <el-badge class="mark" :value="3" />
  </el-dropdown-item>
</el-dropdown>
```
:::

### Max value

You can customize the max value.

::: demo The max value is defined by property `max`,it can be set with `Number` type,and you should notice that it can only work with `value` is `Number` type.

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">comment</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">reply</el-button>
</el-badge>
```
:::

### Customizations

Display text content other than numbers.

:::demo When `value` is defined as `String` type,it can display customized text.

```html
<el-badge value="new" class="item">
  <el-button size="small">comment</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">reply</el-button>
</el-badge>
```
:::

### Little red dot

Use a red dot to mark content that need to be noticed.

:::demo Use attribute `is-dot`,it can be set with `Boolean` type.

```html
<el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="share" type="primary"></el-button>
</el-badge>
```
:::

<style scoped>
  .share-button {
    width: 36px;
    padding: 10px;
  }

  .mark {
    margin-top: 8px;
    line-height: 1;
    float: right;
  }

  .clearfix {
    @utils-clearfix;
  }

  .item {
    margin-right: 40px;
  }
</style>

### Attributes
| Attribute          | Description            | Type            | Options                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | Display value      | string, number          |          —             |    —     |
| max          |  Maximum value, shows '{max}+' if exceeded,  value is Number type   | number  |         —              |     —    |
| is-dot       | little dot    | boolean  |  —  |  false |