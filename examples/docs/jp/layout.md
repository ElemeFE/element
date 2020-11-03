## レイアウト

24カラムを基本レイアウトで、簡単、素早く作れます。

### ベーシックレイアウト

カラムを用いて、ベーシックグリッドレイアウトを作ります。

:::demo `row` と `col` を使えば、`span` 属性を使って簡単にレイアウトを操作することができます。
```html
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### カラム間隔

カラム間隔もサポートされてます。

:::demo 行にはカラム間の間隔を指定するための `gutter` 属性があり、デフォルト値は0です。
```html
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### ハイブリッドレイアウト

基本の1/24カラムを組み合わせて、より複雑なハイブリッドレイアウトを形成できます。

:::demo
```html
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### カラムオフセット

オフセットを指定することができます。

:::demo Colの`offset`属性の値を設定することで、カラムのオフセット数を指定することができます。

```html
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### 配置

フレックスレイアウトを使用して、列の配置を柔軟に行うことができます。

:::demo `type` 属性に `flex` を設定することでフレックスレイアウトを有効にし、`justify` 属性に start, center, end, space-between, space-around を設定することで子要素のレイアウトを定義することができます。
```html
<el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="end">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### レスポンシブレイアウト

Bootstrapのレスポンシブデザインを例にとると、xs, sm, md, lg, xlの5つのブレイクポイントがプリセットされています。

:::demo
```html
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::

### 要素を隠すためのユーティリティクラス

さらに、Element は、特定の条件下で要素を隠すための一連のクラスを提供します。これらのクラスは、任意の DOM 要素やカスタムコンポーネントに追加することができます。これらのクラスを使用するには、以下のCSSファイルをインポートする必要があります。

```js
import 'element-ui/lib/theme-chalk/display.css';
```

クラス:
- `hidden-xs-only` - xs ビューポートのとき、非表示にする
- `hidden-sm-only` - sm ビューポートのとき、非表示にする
- `hidden-sm-and-down` - sm ビューポート以下のとき、非表示にする
- `hidden-sm-and-up` - sm ビューポート以上のとき、非表示にする
- `hidden-md-only` - md ビューポートのとき、非表示にする
- `hidden-md-and-down` - md ビューポート以下のとき、非表示にする
- `hidden-md-and-up` - md ビューポート以上のとき、非表示にする
- `hidden-lg-only` - lg ビューポートのとき、非表示にする
- `hidden-lg-and-down` - lg ビューポート以下のとき、非表示にする
- `hidden-lg-and-up` - lg ビューポート以上のとき、非表示にする
- `hidden-xl-only` - xl ビューポートのとき、非表示にする

### 行属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | グリッド間隔 | number | — | 0 |
| type | レイアウトモード、フレックスを使用することができます、モダンなブラウザで動作します。 | string | — | — |
| justify | フレックスレイアウトの水平配置 | string | start/end/center/space-around/space-between | start |
| align | フレックスレイアウトの垂直配置 | string | top/middle/bottom | top |
| tag | カスタムエレメントタグ | string | * | div |

### 列属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | グリッドスパンの列数 | number | — | 24 |
| offset | 左辺のグリッドのスペースの数 | number | — | 0 |
| push |  グリッドが右に移動する列数 | number | — | 0 |
| pull |  グリッドが左に移動する列数 | number | — | 0 |
| xs | `<768px` レスポンシブ列または列propsオブジェクト | number/object (e.g. {span: 4, offset: 4}) | — | — |
| sm | `≥768px` レスポンシブ列または列propsオブジェクト | number/object (e.g. {span: 4, offset: 4}) | — | — |
| md | `≥992px` レスポンシブ列または列propsオブジェクト | number/object (e.g. {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` レスポンシブ列または列propsオブジェクト | number/object (e.g. {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` レスポンシブ列または列propsオブジェクト | number/object (e.g. {span: 4, offset: 4}) | — | — |
| tag | カスタムエレメントタグ | string | * | div |


