## Popover

### 基本的な使い方

Tooltipと同様に、Popoverも `Vue-popper` で構築されています。そのため、重複する属性については、Tooltipのドキュメントを参照してください。

:::demo `trigger` 属性は、popoverがどのようにトリガーされるかを定義するために使用されます: `hover`, `click`, `focus`, `manual`。それは、`slot="reference"` という名前のスロットを使うか、`v-popover` ディレクティブを使って popover の `ref` に設定するかです。

```html
<template>
  <el-popover
    placement="top-start"
    title="Title"
    width="200"
    trigger="hover"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Hover to activate</el-button>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Click to activate</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    width="200"
    trigger="focus"
    content="this is content, this is content, this is content">
  </el-popover>
  <el-button v-popover:popover>Focus to activate</el-button>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">Manual to activate</el-button>
  </el-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
```
:::

### 入れ子になっている情報

popoverの中には、他のコンポーネントを入れ子にすることができます。以下はネストされたテーブルの例です。

:::demo `content`属性をデフォルトの`slot`に置き換えています。

```html
<el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Click to activate</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
```
:::

### 入れ子になった操作

もちろん、他の操作をネストすることもできます。ダイアログを使うよりも軽量です。

:::demo
```html
<el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
    <el-button type="primary" size="mini" @click="visible = false">confirm</el-button>
  </div>
  <el-button slot="reference">Delete</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | popoverがどのようにトリガーされるか | string  | click/focus/hover/manual |    click    |
|  title              | popoverのタイトル | string | — | — |
|  content        |  popoverコンテンツ、デフォルトの `slot` で置き換えることができます。    | string            | — | — |
|  width        |  popover幅  | string, number            | — | Min width 150px |
|  placement        |  popover配置  | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  popoverが無効になっているかどうか  | boolean    | — |  false |
|  value / v-model        |  popoverが表示されているかどうか  | Boolean           | — |  false |
|  offset        |  popoverオフセット  | number           | — |  0 |
|  transition     |  popoverトランジションアニメーション      | string             | — | el-fade-in-linear |
|  visible-arrow   |  ツールチップの矢印が表示されているかどうかを指定します。詳細については [Vue-popper](https://github.com/element-component/vue-popper) | boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) のためのパラメータ | object            | please refer to [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: 'body', gpuAcceleration: false }` |
|  popper-class        |  popover用カスタムクラス名 | string | — | — |
|  open-delay        | `trigger` がホバーされたときに表示されるまでの遅延時間(ミリ秒単位) | number | — | — |
|  close-delay        | `trigger` がホバーされたときに消えるまでの遅延時間(ミリ秒単位) | number | — | 200 |
|  tabindex          | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) のpopover | number | — | 0 |

### スロット
| Name | Description |
| --- | --- |
| — | popoverのテキストコンテンツ |
| reference | popoverをトリガーするHTML要素 |

### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| show | popoverが表示されたときにトリガー | — |
| after-enter | 入力トランジションの終了時にトリガされます。 | — |
| hide | popoverが非表示になったときにトリガー | — |
| after-leave | 離脱トランジション終了時のトリガー | — |
