## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<el-badge :value="12" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <el-button size="small">replies</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      comments
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      replies
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<el-badge value="new" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
