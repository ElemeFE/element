## Breadcrumb(パンくず)

現在のページの位置を表示し、ブラウザバックを容易にします。

### 基本的な使い方


:::demo `el-breadcrumb` では、`el-breadcrumb-item` はホームページから始まる各レベルを表すタグである。このコンポーネントは `String` 属性 `separator` を持ち、セパレータを決定する。デフォルト値は'/'である。

```html
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### アイコンセパレータ

:::demo `separator-class` を `iconfont` をセパレータとして使用するように設定します．

```html
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item>promotion management</el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### Breadcrumb(パンくず)属性
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | セパレータ文字 | string | — | / |
| separator-class | アイコンセパレータのクラス名 | string | — | - |

### Breadcrumb(パンくず)項目属性
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | リンクのターゲットルート、`vue-router` の `to` と同じ | string/object | — | — |
| replace | `true` の場合、ナビゲーションは履歴を残しません。 | boolean | — | false |





