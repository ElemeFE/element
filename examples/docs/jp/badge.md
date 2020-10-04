## Badge

ボタンやアイコンの数字やステータスマーク

### 基本的な使い方

新しいメッセージの量を表示します。

:::demo 量は `value` で定義します。`value` は `Number` または `String` を受け入れる。

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

### 最大値

最大値をカスタマイズすることができます。

:::demo 最大値はプロパティ `max` で定義され `Number` である。value` が `Number` である場合にのみ動作することに注意すること。

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

### カスタマイズ

数字以外のテキスト内容を表示します。

:::demo `value` が `String` の場合、カスタマイズしたテキストを表示することができる。

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

### 小さな赤い点

注目すべきコンテンツには、赤い点を使ってマークをつけましょう。

:::demo 属性 `is-dot` を用いる。`Boolean` である。

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

### 属性
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 表示値   | string, number  |          —            |    —    |
| max           | 最大値を超えると '{max}+' を表示します。`value` が `Number` の場合にのみ動作します。   | number  |         —              |     —    |
| is-dot        | 小さな点が表示されている場合 | boolean   |    —           |  false  |
| hidden        | かくしbadge    | boolean         |          —            |  false  |
| type          | ボタンタイプ     | string          | primary / success / warning / danger / info |   —  |
