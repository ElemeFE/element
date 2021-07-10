現在のページの状態を保持したまま、ユーザーに情報を提供します。

### 基本的な使い方

dialog はdialogボックスをポップアップ表示します。

:::demo `visible` 属性に `Boolean` を設定し、それが `true` のときにdialogを表示します。dialogは `body` と `footer` の2つの部分からなり、後者は `footer` という名前の `スロット` を必要とします。オプションの `title` 属性 (デフォルトでは空) はタイトルを定義するためのものです。最後に、この例では `before-close` がどのように使われるかを示します。

```html
<el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::

:::tip
`before-close` はユーザが閉じるアイコンか背景をクリックしたときにのみ動作します。footerer` という名前のスロットにdialogを閉じるボタンがある場合、ボタンのクリックイベントハンドラに `before-close` と同じように `before-close` を追加することができます。
:::

### カスタマイズ

dialog の内容は何でも構いません、テーブルやフォームであっても構いません。この例では、要素テーブルとフォームを dialog で使う方法を示しています。

:::demo

```html
<!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Name" width="200"></el-table-column>
    <el-table-column property="address" label="Address"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
```
:::

### ネストされたdialog
あるdialogが他のdialogにネストになっている場合は `append-to-body` が必要です。
:::demo  通常、ネストになったdialogを使うことはお勧めしません。複数のdialogをページ上でレンダリングしたい場合は、単にそれらをフラットにして隣接することができます。dialogを別のdialogの中に入れ子にしなければならない場合は、入れ子にしたdialogの `append-to-body` を true に設定すると、親ノードではなくボディに追加され、両方のdialogが正しくレンダリングされます。
```html
<template>
  <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>
  
  <el-dialog title="Outer Dialog" :visible.sync="outerVisible">
    <el-dialog
        width="30%"
        title="Inner Dialog"
        :visible.sync="innerVisible"
        append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Cancel</el-button>
      <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
```
:::

### 中央揃えコンテンツ
dialogの内容を中央揃えにすることができます。

:::demo `center` を `true` に設定すると、dialogのヘッダとフッタを水平方向に中央揃えにします。`center`はDialogのヘッダとフッタにのみ影響します。dialogのボディは何でもいいので、中央揃えにすると見栄えが悪くなることがあります。ボディも中央揃えにしたい場合は、CSSを書く必要があります。

```html
<el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

<el-dialog
  title="Warning"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
```
:::

:::tip
dialogの内容は遅延的にレンダリングされます。つまり、デフォルトのスロットは最初に開かれるまで DOM にレンダリングされません。したがって、DOM の操作を行ったり `ref` を使ってコンポーネントにアクセスする必要がある場合は、`open` イベントコールバックで行います。
:::


:::tip
Vuexストアで `visible` にバインドされた変数を管理している場合、`.sync` が正しく動作しません。この場合は、`.sync` モディファイアを削除し、Dialog の `open`, `close` イベントをリッスンし、Vuex のミューテーションをコミットして、イベントハンドラでその変数の値を更新してください。
:::

### 属性

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | dialogの可視性、.sync 修飾子をサポートしています。 | boolean | — | false |
| title     | dialogのタイトルを指定します。名前付きスロットで渡すこともできます (次のテーブルを参照してください)。 | string    | — | — |
| width     | dialogの幅 | string    | — | 50% |
| fullscreen     | dialogが全画面を占めるかどうか | boolean    | — | false |
| top      | dialogCSSの `margin-top` の値 | string    | — | 15vh |
| modal     | マスクが表示されているかどうか | boolean   | — | true |
| modal-append-to-body     | モーダルを ボディ要素に追加するかどうかを指定します。false の場合、モーダルはdialogの親要素に追加されます。 | boolean   | — | true |
| append-to-body     | dialog自身をボディに追加するかどうかを指定します。入れ子になったdialogは、この属性を `true` に設定しなければなりません。 | boolean   | — | false |
| lock-scroll     | dialog表示中にボディのスクロールを無効にするかどうか | boolean   | — | true |
| custom-class      | dialog用のカスタムクラス名 | string    | — | — |
| close-on-click-modal | マスクをクリックしてdialogを閉じることができるかどうか | boolean    | — | true |
| close-on-press-escape | ESC を押してdialogを閉じることができるかどうか | boolean    | — | true |
| show-close | 閉じるボタンを表示するかどうか | boolean    | — | true |
| before-close | コールバックを使用することで、dialogが閉じるのを防ぐことができます。 | function(done)，done is used to close the Dialog | — | — |
| center | ヘッダーとフッターを中央に配置するかどうか | boolean | — | false |
| destroy-on-close | dialogを閉じたときにdialog内の要素を破棄する   | boolean | — | false |

### スロット

| Name | Description |
|------|--------|
| — | dialogの内容 |
| title | dialogタイトルの内容 |
| footer | dialogフッターの内容 |

### イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| open | dialogが開いたときにトリガーされます。 | — |
| opened | dialogのオープニングアニメーションが終了したときにトリガーされます。 | — |
| close | dialogが閉じたときにトリガーされます。 | — |
| closed | dialog終了アニメーションの終了時にトリガーされます。 | — |
