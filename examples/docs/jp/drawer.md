## Drawer

例えば、巨大なフォームを持っていたり、`terms & conditions` のようなものを表示するためのスペースが必要な場合、`Drawer` は `Dialog` とほぼ同じ API を持っていますが、ユーザーエクスペリエンスが異なります。

### 基本的な使い方

一時的にDrawerを多方向から呼び出す

:::demo `Drawer` には `Dialog` のように `visible` を設定して `Drawer` 自体の表示を制御する必要があります。`title` は名前付きスロットで、タイトルは `title` という属性を使って設定することもできます。デフォルトでは、`Drawer`はブラウザウィンドウの**30%**の大きさの**右隅から**左隅に向かって展開します。このデフォルトの動作を変更するには、`direction` と `size` 属性を設定します。このショーケースでは `before-close` API の使い方も紹介しました。さらに詳しく知りたい場合は Attributesセクションもご覧ください。

```html
<el-radio-group v-model="direction">
  <el-radio label="ltr">left to right</el-radio>
  <el-radio label="rtl">right to left</el-radio>
  <el-radio label="ttb">top to bottom</el-radio>
  <el-radio label="btt">bottom to top</el-radio>
</el-radio-group>

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>

<el-drawer
  title="I am the title"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <span>Hi, there!</span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
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

### タイトルなし

タイトルが不要になったら、引き出しからタイトルを外すことができます。

:::demo withHeader`属性を**false**に設定すると、タイトルを削除することができます。アクセスしやすいようにしたい場合は、`title`属性を設定してください。

```html
<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>

<el-drawer
  title="I am the title"
  :visible.sync="drawer"
  :with-header="false">
  <span>Hi there!</span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
</script>
```
:::

### カスタマイズコンテンツ

ダイアログと同様に、`Drawer`はあなたが望むように多くの多様なインタラクションを行うことができる。

:::demo

```html
<el-button type="text" @click="table = true">Open Drawer with nested table</el-button>
<el-button type="text" @click="dialog = true">Open Drawer with nested form</el-button>
<el-drawer
  title="I have a nested table inside!"
  :visible.sync="table"
  direction="rtl"
  size="50%">
   <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150"></el-table-column>
      <el-table-column property="name" label="Name" width="200"></el-table-column>
      <el-table-column property="address" label="Address"></el-table-column>
    </el-table>
</el-drawer>

<el-drawer
  title="I have a nested form inside!"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Area" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select activity area">
          <el-option label="Area1" value="shanghai"></el-option>
          <el-option label="Area2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button @click="cancelForm">Cancel</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? 'Submitting ...' : 'Submit' }}</el-button>
    </div>
  </div>
</el-drawer>

<script>
export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2016-05-02',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-04',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-01',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-03',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }],
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
      formLabelWidth: '80px',
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('Do you want to submit?')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // animation takes time
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>
```
:::

### 入れ子にしたDrawer

`Dialog` のように `Drawer` を複数のレイヤーで構成することもできる。
:::demo 異なるレイヤーに複数のDrawerが必要な場合は、`append-to-body` 属性を **true** に設定しなければなりません。

```html

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>

<el-drawer
  title="I'm outer Drawer"
  :visible.sync="drawer"
  size="50%">
  <div>
   <el-button @click="innerDrawer = true">Click me!</el-button>
   <el-drawer
     title="I'm inner Drawer"
     :append-to-body="true"
     :before-close="handleClose"
     :visible.sync="innerDrawer">
     <p>_(:зゝ∠)_</p>
   </el-drawer>
  </div>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('You still have unsaved data, proceed?')
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

Drawer内のコンテンツは遅延レンダリングされるべきであり、これはDrawer内のコンテンツが初期レンダリングのパフォーマンスに影響を与えないことを意味します。したがって、DOM の操作は `ref` を介して行うか、`open` イベントが発生した後に行うべきである。

:::

:::tip

Drawerは `destroyOnClose` というAPIを提供しています。これはフラグ変数であり、Drawerが閉じられた後にDrawer内の子コンテンツを破棄することを示します。Drawerが開くたびに `mounted` ライフサイクルを呼び出す必要がある場合にこのAPIを利用することができます。

:::

:::tip

Vuexストアで `visible` にバインドされた変数を管理している場合、`.sync` が正しく動作しません。この場合は、`.sync` 修飾子を削除し、Dialog の `open`, `close` イベントをリッスンし、Vuex ミューテーションをイベントハンドラでその変数の値を更新するよう、コミットします。

:::

### Drawer属性

| Parameter| Description | Type      | Acceptable Values                           | Defaults  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| append-to-body | DrawerがDocumentBody要素に挿入されている場合のコントロールは、ネストされたDrawerはこのパラメータを**true**に割り当てなければなりません。| boolean   | — | false |
| before-close | 設定されている場合は、終了処理を停止します。 | function(done), done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure | — | — |
| close-on-press-escape | ESC を押してDrawerを閉じることができるかどうかを示す。 | boolean | — | true |
| custom-class | Drawerの追加クラス名 | string | — | — |
| destroy-on-close | Drawerが閉じた後にChildrenが破壊されるべきかどうかを示す | boolean | - | false |
| modal | シャドウイングレイヤーを表示するか | boolean | — | true |
| modal-append-to-body | シャドウイングレイヤーをDocumentBody要素に挿入するかどうかを示す。 | boolean   | — | true |
| direction | Drawerの開き方向 | Direction | rtl / ltr / ttb / btt | rtl |
| show-close | Drawerの右上に閉じるボタンを表示するようにした | boolean | — | true |
| size | Drawerのサイズ, ドローワが水平モードの場合は幅プロパティ, そうでない場合は高さプロパティ, サイズが `number` 型の場合はピクセル単位でサイズを記述します; サイズが `string` 型の場合は `x%` 記法を用います, それ以外の場合はピクセル単位で解釈されます | number / string | - | '30%' |
| title | Drawerのタイトルは、スロットの名前を指定して設定することもできます。 | string | — | — |
| visible | Drawerを表示する場合は、`.sync` 記法もサポートします。 | boolean | — | false |
| wrapperClosable | シャドウイングレイヤーをクリックしてDrwerを閉じることができるかどうかを示します。 | boolean | - | true |
| withHeader | デフォルトは true で、withHeader が false に設定されている場合は `title attribute` と `title slot` の両方が動作しません。 | boolean | - | true |

### Drawerスロット

| Name | Description |
|------|--------|
| — | Drawerの内容 |
| title | Drawerタイトルセクション |

### Drawerメソッド

| Name | Description |
| ---- | ---  |
| closeDrawer | Drawerを閉じるには、このメソッドは `before-close` を呼び出す。 |

### Drawerイベント

| Event Name | Description | Parameter |
|---------- |-------- |---------- |
| open  | Drawerのオープニングアニメーションが始まる前にトリガーされます。  | — |
| opened  | Drawerのオープニングアニメーションが終わった後にトリガーされます。 | — |
| close  | Drawerのクロージングアニメーションが始まる前にトリガーされます。 | — |
| closed | Drawerのクロージングアニメーションが終わった後にトリガーされます。 | — |
