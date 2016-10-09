# Breadcrumb

Display the location of current page, and go back to any previous page immediately.

---
## How to use


:::demo In `el-breadcrumb`, tag `el-breadcrumb-item` stands for every level that starts from homepage. This component has an attribute `separator`. it can be set to change the separator, it's value type can only be `String`, and default value is '/'.

```html
<el-breadcrumb separator="/">
  <el-breadcrumb-item>homepage</el-breadcrumb-item>
  <el-breadcrumb-item>promotion management</el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### Attributes
| Attribute      | Description          | Type      | Options                           | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | - | string | — | '/' |





