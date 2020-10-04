## トランスファー

### 基本的な使い方
:::demo データは `data` 属性を用いて転送に渡されます。データはオブジェクトの配列である必要があり、各オブジェクトは以下の属性を持つ必要があります。`key` はデータ項目の識別情報、`label` は表示されるテキスト、`disabled` はデータ項目が無効かどうかを示す。ターゲットリスト内の項目は `v-model` にバインドされた変数と同期しており、その変数の値はターゲット項目のキーの配列となる。したがって、ターゲットリストを初期状態で空にしたくない場合は、`v-model`を配列で初期化することができる。
```html
<template>
  <el-transfer
    v-model="value"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
  };
</script>
```
:::

### フィルタリング可能

データ項目の検索やフィルタリングができます。

:::demo フィルタモードを有効にするには、`filterable` 属性を `true` に設定する。デフォルトでは、`label` に検索キーワードが含まれている場合は検索結果に含まれる。また、`filter-method` 属性を用いて独自のフィルタメソッドを実装することもできる。これはメソッドを受け取り、キーワードが変更されるたびに検索キーワードと各データ項目をそれに渡す。あるデータ項目については、そのメソッドが真を返した場合、そのデータが検索結果リストに含まれる。
```html
<template>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    v-model="value"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
        }
      };
    }
  };
</script>
```
:::

### カスタマイズ可能

リストのタイトル、ボタンのテキスト、データ項目のレンダリング機能、リストフッターのステータステキストの確認、リストフッターの内容をカスタマイズすることができます。

:::demo `title`, `button-texts`, `render-content`, `format` を使って、リストのタイトル、ボタンのテキスト、データ項目のレンダリング機能、リストヘッダのステータステキストのチェックをそれぞれカスタマイズします。さらに、スコープ付きスロットを使ってデータ項目をカスタマイズすることもできます。リストのフッターの内容には、2つの名前付きスロットが用意されています。`左フッター`と`右フッター`です。さらに、いくつかの項目を最初にチェックしたい場合は、`left-default-checked` と `right-default-checked` を使うことができます。最後に、この例では `change` イベントのデモを行います。このデモはJSX構文をサポートしていないので、jsfiddleでは実行できないことに注意してください。実際のプロジェクトでは、関連する依存関係が正しく設定されていれば `render-content` は動作します。
```html
<template>
  <p style="text-align: center; margin: 0 0 20px">Customize data items using render-content</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['To left', 'To right']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
    </el-transfer>
    <p style="text-align: center; margin: 50px 0 20px">Customize data items using scoped slot</p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value4"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['To left', 'To right']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
        <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
        <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
      </el-transfer>
    </div>
  </div>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
</script>
```
:::

### プロップのエイリアス

デフォルトでは、Transferはデータ項目の中から `key`, `label`, `disabled` を探します。データ項目に異なるキー名がある場合、`props` 属性を使ってエイリアスを定義することができます。
:::demo この例のデータ項目には `key` や `label` がなく、代わりに `value` と `desc` があります。そのため、`key`と`label`にエイリアスを設定する必要があります。
```html
<template>
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    }
  };
</script>
```
:::

### 属性
| Attribute | Description | Type  | Accepted Values | Default |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | バインディング値 | array | — | — |
| data | データソース | array[{ key, label, disabled }] | — | [ ] |
| filterable | 転送がフィルタリング可能かどうか | boolean | — | false |
| filter-placeholder | フィルタ入力のプレースホルダ | string | — | Enter keyword |
| filter-method | カスタムフィルタメソッド | function | — | — |
| target-order | ターゲットリストの要素の順序を指定します。`original` に設定されている場合、要素はデータソースと同じ順序を保ちます。`push` に設定すると、新しく追加された要素はボトムに押し出されます。`unshift` に設定すると、新たに追加された要素はトップに挿入される。 | string | original / push / unshift | original |
| titles | カスタムリストタイトル | array | — | ['List 1', 'List 2'] |
| button-texts | カスタムボタンテキスト | array | — | [ ] |
| render-content | データ項目のカスタムレンダリング関数 | function(h, option) | — | — |
| format | リストヘッダの状態を確認するためのテキスト | object{noChecked, hasChecked} | — | { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' } |
| props | データソース用のプロップエイリアス | object{key, label, disabled} | — | — |
| left-default-checked | 左リストの初期チェックデータ項目のキー配列 | array | — | [ ] |
| right-default-checked | 右リストの初期チェックデータ項目のキー配列 | array | — | [ ] |

### スロット
| Name | Description |
|------|--------|
| left-footer | 左リストフッターの内容 |
| right-footer | 右リストフッターの内容 |

### スコープされたスロット
| Name | Description |
|------|--------|
| — | データ項目のカスタムコンテンツ。スコープパラメータは { オプション } です。 |

### メソッド
| Method | Description | Parameters |
| ---- | ---- | ---- |
| clearQuery | 特定のパネルのフィルタキーワードをクリア | 'left' / 'right' |

### イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | 右側のリストでデータ項目が変更された場合にトリガーされる | key array of current data items in the right list, transfer direction (left or right), moved item keys |
| left-check-change | エンドユーザーが左リストのデータ項目のチェック状態を変更した場合にトリガーされます。 | key array of currently checked items, key array of items whose checked state have changed |
| right-check-change | エンドユーザーが右のリスト内の任意のデータ項目のチェック状態を変更した場合にトリガーされます。 | key array of currently checked items, key array of items whose checked state have changed |
