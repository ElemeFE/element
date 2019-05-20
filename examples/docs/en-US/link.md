## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
  <el-link type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <el-link disabled>default</el-link>
  <el-link type="primary" disabled>primary</el-link>
  <el-link type="success" disabled>success</el-link>
  <el-link type="warning" disabled>warning</el-link>
  <el-link type="danger" disabled>danger</el-link>
  <el-link type="info" disabled>info</el-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <el-link :underline="false">Without Underline</el-link>
  <el-link>With Underline</el-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <el-link icon="el-icon-edit">Edit</el-link>
  <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
