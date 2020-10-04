## アイコン

Elementは、共通のアイコンのセットを提供します。

### 基本的な使い方

クラス名に `el-icon-iconName` を代入するだけで使えます。

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">Search</el-button>

```
:::

### アイコン

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
