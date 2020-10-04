## メッセージボックス

システムのメッセージボックスをシミュレートしたモーダルボックスのセットで、主にアラート情報、オペレーション確認、プロンプトメッセージを表示します。
:::tip
メッセージボックスはシステムの `alert`, `confirm`, `prompt` のシミュレーションを提供するように設計されていますので、内容はシンプルなものになっています。より複雑な内容の場合は、ダイアログを使ってください。
:::

### アラート

アラートは、ユーザーが確認するまでユーザーの操作を中断します。

:::demo `$alert` メソッドを呼び出してアラートを開きます。これはシステムの `alert` をシミュレートしたものであり、ESCを押したりボックスの外をクリックしたりして閉じることはできません。この例では、`message` と `title` の2つのパラメータを受け取っている。ボックスが閉じられると `Promise` オブジェクトが返され、さらなる処理が行われます。ターゲットブラウザが `Promise` をサポートしているかどうかわからない場合は、この例のようにサードパーティのポリフィルをインポートするか、コールバックを使用してください。
```html
<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
```
:::

### 確認

確認は、ユーザーに確認を求めるために使用します。

:::demo `$confirm`メソッドを呼び出すと、システムの `confirm` をシミュレートしてconfirmを開くことができる。また、リテラルオブジェクトである第三の属性 `options` を渡すことで、メッセージボックスを高度にカスタマイズすることができます。属性 `type` はメッセージの種類を示し、その値には `success`, `error`, `info`, `warning` を指定することができる。2番目の属性 `title` は `string` でなければならず、`object` の場合は `options` として扱われることに注意してください。ここでは、さらなる処理を行うために `Promise` を用いる。

```html
<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      }
    }
  }
</script>
```

:::

### プロンプト

プロンプトは、ユーザーの入力が必要な場合に使用されます。

:::demo プロンプトを開くために `$prompt` メソッドを呼び出すと、システムの `prompt` をシミュレートする。パラメータ `inputPattern` を使って独自の RegExp パターンを指定することができる。バリデーションの方法を指定するには `inputValidator` を使い、`Boolean` または `String` を返します。`false` または `String` を返す場合は検証に失敗したことを意味し、返された文字列が `inputErrorMessage` として使用されます。さらに、`inputPlaceholder` パラメータで入力ボックスのプレースホルダをカスタマイズすることもできます。

```html
<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      }
    }
  }
</script>
```
:::

### カスタマイズ

様々なコンテンツを表示するようにカスタマイズ可能

:::demo 上記の3つのメソッドは `$msgbox` メソッドのリパッケージです。この例では、`showCancelButton` 属性を使って `$msgbox` メソッドを直接呼び出しています。また、`cancelButtonClass` を使ってカスタムスタイルを追加したり、`cancelButtonText` を使ってボタンのテキストをカスタマイズしたりすることもできます (確認ボタンにもこれらのフィールドがあります。) この例では `beforeClose` 属性も使用しています。これはメソッドであり、MessageBoxインスタンスが閉じられるときにトリガされ、その実行によってインスタンスの閉じを停止します。このメソッドには3つのパラメータがあります。パラメータは `action`, `instance`, `done` の3つです。これを使うことで、閉じる前にインスタンスを操作することができます。例えば、確認ボタンの `loading` を有効にしたり、`done` メソッドを呼び出して MessageBox インスタンスを閉じたりすることができます (`beforeClose` 内で `done` が呼び出されなかった場合、インスタンスは閉じられません)。

```html
<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }
</script>
```
:::

:::tip
MessageBoxの内容は `VNode` にすることができ、カスタムコンポーネントを渡すことができます。MessageBoxを開くとき、Vueは新しい `VNode` と古い `VNode` を比較し、UIを効率的に更新する方法を考え出します。この場合、MessageBoxが開くたびに `VNode` に一意のキーを追加することができます。[例](https://jsfiddle.net/zhiyang/ezmhq2ef)。
:::

### HTML文字列を使用する

`message` は HTML 文字列をサポートしています。

:::demo `dangerouslyUseHTMLString` を true に設定すると、`message` は HTML 文字列として扱われます。

```html
<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script>
```
:::

:::warning
`message`プロパティはHTML文字列をサポートしていますが、任意のHTMLを動的にレンダリングすると[XSS攻撃](https://en.wikipedia.org/wiki/Cross-site_scripting)につながりやすく、非常に危険です。したがって、`dangerouslyUseHTMLString`がオンの場合は、`message`の内容が信頼できるものであることを確認し、**決して**ユーザが提供したコンテンツに`message`を代入しないようにしてください。
:::

### キャンセルとクローズを区別する

場合によっては、キャンセルボタンをクリックするのと閉じるボタンをクリックするのでは意味が異なる場合があります。

:::demo デフォルトでは、ユーザがメッセージボックスをキャンセル(キャンセルボタンをクリック)して閉じる(閉じるボタンまたはマスクレイヤーをクリック、ESCキーを押す)と、Promiseのリジェクトコールバックと `callback` のパラメータは 'cancel' になります。distinguishCancelAndClose` が true に設定されている場合、上記の二つの操作のパラメータはそれぞれ 'cancel' と 'close' である。

```html
<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
          distinguishCancelAndClose: true,
          confirmButtonText: 'Save',
          cancelButtonText: 'Discard Changes'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: 'Changes saved. Proceeding to a new route.'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? 'Changes discarded. Proceeding to a new route.'
                : 'Stay in the current route'
            })
          });
      }
    }
  }
</script>
```
:::

### 中央に配置されたコンテンツ
メッセージボックスの内容を中央揃えにすることができます。

:::demo `center` を `true` に設定すると、コンテンツを中央に配置します。

```html
<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
      }
    }
  }
</script>
```
:::

### グローバルメソッド

Elementが完全にインポートされている場合、Vue.prototypeに以下のグローバルメソッドが追加されます。Vue.prototypeには、`$msgbox`, `$alert`, `$confirm`, `$prompt` というグローバルメソッドが追加されます。そのため、Vueのインスタンスでは、このページで行ったように `MessageBox` を呼び出すことができます。パラメータは以下の通りです。
- `$msgbox(options)`
- `$alert(message, title, options)` もしくは `$alert(message, options)`
- `$confirm(message, title, options)` もしくは `$confirm(message, options)`
- `$prompt(message, title, options)` もしくは `$prompt(message, options)`

### ローカルインポート

オンデマンドで `MessageBox` をインポートしたい場合:

```javascript
import { MessageBox } from 'element-ui';
```

対応するメソッドは以下の通り: 対応するメソッドは `MessageBox`, `MessageBox.alert`, `MessageBox.confirm`, `MessageBox.prompt` である。パラメータは上記と同じである。

### オプション

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | メッセージボックスのタイトル | string | — | — |
| message | メッセージボックスの内容 | string | — | — |
| dangerouslyUseHTMLString | `message` を HTML 文字列として扱うかどうか | boolean | — | false |
| type | アイコン表示に使用されるメッセージタイプ | string | success / info / warning / error | — |
| iconClass | カスタムアイコンのクラス、 `type` をオーバーライドします。 | string | — | — |
| customClass | メッセージボックスのカスタムクラス名 | string | — | — |
| callback | Promise を好まない場合、メッセージボックス を閉じるコールバック | function(action), where action can be 'confirm', 'cancel' or 'close', and `instance` is the MessageBox instance. You can access to that instance's attributes and methods | — | — |
| showClose | メッセージボックスのクローズアイコンを表示するかどうか | boolean | — | true |
| beforeClose | コールバックは メッセージボックスコンポーネントを閉じる前に呼び出され、メッセージボックスコンポーネントが閉じるのを防ぎます。 | function(action, instance, done), where `action` can be 'confirm', 'cancel' or 'close'; `instance` is the MessageBox instance, and you can access to that instance's attributes and methods; `done` is for closing the instance | — | — |
| distinguishCancelAndClose | メッセージボックスのキャンセルと終了を区別するかどうか | boolean | — | false |
| lockScroll | メッセージボックスがプロンプトを出したときにボディスクロールをロックするかどうか | boolean | — | true |
| showCancelButton | キャンセルボタンを表示するかどうか | boolean | — | false (true when called with confirm and prompt) |
| showConfirmButton | 確認ボタンを表示するかどうか | boolean | — | true |
| cancelButtonText | キャンセルボタンのテキスト内容 | string | — | Cancel |
| confirmButtonText | 確認ボタンのテキスト内容 | string | — | OK |
| cancelButtonClass | キャンセルボタンのカスタムクラス名 | string | — | — |
| confirmButtonClass | 確認ボタンのカスタムクラス名 | string | — | — |
| closeOnClickModal | マスクをクリックしてメッセージボックスを閉じることができるかどうか | boolean | — | true (false when called with alert) |
| closeOnPressEscape | ESC を押してメッセージボックスを閉じることができるかどうか | boolean | — | true (false when called with alert) |
| closeOnHashChange | ハッシュが変更された場合にメッセージボックスを閉じるかどうか | boolean | — | true |
| showInput | インプットを表示するかどうか | boolean | — | false (true when called with prompt) |
| inputPlaceholder | インプットのプレースホルダー | string | — | — |
| inputType | インプットのタイプ | string | — | text |
| inputValue | インプット初期値 | string | — | — |
| inputPattern | インプットの正規表現 | regexp | — | — |
| inputValidator | インプットの検証関数です。ブール値か文字列を返す必要があります。文字列が返された場合、それは inputErrorMessage に代入されます。 | function | — | — |
| inputErrorMessage | バリデーション失敗時のエラーメッセージ | string | — | Illegal input |
| center | コンテンツを中央に配置するかどうか | boolean | — | false |
| roundButton | 丸いボタンを使うかどうか | boolean | — | false |
