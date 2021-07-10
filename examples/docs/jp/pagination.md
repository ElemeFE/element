## ページネーション

データが多すぎて1ページに表示できない場合は、ページネーションを使用します。

### 基本的な使い方

:::demo カンマで区切って表示したいページネーション要素を `layout` に設定します。ページネーション要素は以下の通りです。prev` (前のページに移動するボタン)、`next` (次のページに移動するボタン)、`pager` (ページリスト)、`jumper` (入力へのジャンプ)、`total` (アイテムの合計数)、`size` (ページサイズを決定するための選択)、そして`->` (このシンボル以降のすべての要素が右に引っ張られる)です。
```html
<div class="block">
  <span class="demonstration">When you have few pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">When you have more than 7 pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
```
:::

### ページャー数

:::demo デフォルトでは、ページネーションは7ページを超えると余分なページャーボタンを折りたたむようになっています。これは `pager-count` 属性で設定できます。
```html
<el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
```
:::

### 背景色のあるボタン

:::demo `background`属性を設定すると、ボタンの背景色が設定されます。
```html
<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
```
:::

### 小さなページネーション

スペースが限られている場合は、小さなページネーションを使用します。

:::demo `small` 属性を `true` に設定するだけで、ページネーションが小さくなります。
```html
<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
```
:::

### その他の要素

シナリオに基づいてモジュールを追加します。

:::demo この例は完全なユースケースです。ページサイズの変更と現在のページの変更を扱うために `size-change` と `current-change` イベントを利用しています。例えば、`[100, 200, 300, 400]`は4つのオプションを持つことを示しています。例えば、`[100, 200, 300, 400]` は select に 4 つのオプションがあることを示します。

```html
<template>
  <div class="block">
    <span class="demonstration">Total item count</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Change page size</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump to</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">All combined</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
```
:::

### 1ページしかない場合はページネーションを隠す

ページが1ページしかない場合は、`hide-on-single-page` 属性を設定してページネーションを隠す。

:::demo
```html
<div>
 <el-switch v-model="value">
 </el-switch>
 <el-pagination
  :hide-on-single-page="value"
  :total="5"
  layout="prev, pager, next">
</el-pagination>
</div>

<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| small              |   小さなページネーションの有無    | boolean |      —       | false |
| background | ボタンに背景色があるかどうか | boolean | — | false |
| page-size              | 各ページの項目数.sync 修飾子をサポートしています。  | number |      —       | 10 |
| total | 総項目数 | number | — | — |
| page-count | ページ数の合計を指定します。`total`か`page-count`のいずれかを設定するとページが表示されます。もし `page-sizes`が必要な場合は`total`が必要です。 | number | — | — |
| pager-count | ページャーの数を指定します。ページ数の合計がこの値を超えるとページネーションが崩れます。 | number | odd number between 5 and 21 | 7 |
| current-page | 現在のページ番号 .sync 修飾子をサポートしています。 | number | — | 1 |
| layout | ページネーションのレイアウト、カンマで区切られた要素 | string | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total'  |
| page-sizes | ページあたりの項目数のオプション | number[] | — |  [10, 20, 30, 40, 50, 100] |
| popper-class | ページサイズセレクトドロップダウンのカスタムクラス名 | string | — | — |
| prev-text | 前ボタンのテキスト | string | — | — |
| next-text | 次のボタン用テキスト | string | — | — |
| disabled | ページネーションが無効になっているかどうか | boolean | — | false |
| hide-on-single-page | 1ページしかないときに非表示にするかどうか | boolean | — | - |

### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| size-change | `page-size` が変更されたときにトリガされる | the new page size |
| current-change | `current-page` が変更されたときにトリガされる | the new current page |
| prev-click | 前ボタンがクリックされ、現在のページが変更されたときに発生します。 | the new current page |
| next-click | 次ボタンがクリックされ、現在のページが変更されたときに発生します。 | the new current page |

### スロット
| Name | Description |
| --- | --- |
| — | カスタムコンテンツ。利用するためには`layout`で`slot`を宣言する必要があります。 |
