## スイッチ

スイッチは、2つの状態を切り替えるために使用されます。

### 基本的な使い方
:::demo `v-model` を `Boolean` 型変数にバインドする。`active-color`と`inactive-color`属性は、2つの状態の背景色を決定する。

```html
<el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### テキストの説明
:::demo テキストを表示するために `active-color` と `inactive-color` 属性を追加することができます。

```html
<el-switch
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### 拡張された値型

:::demo `active-value`と`inactive-value`を設定することができる。どちらも `Boolean`, `String` または `Number` 型の値を受け取る。

```html
<el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
</script>
```

:::

### 無効化

:::demo `disabled`属性を追加すると、スイッチを無効にすることができます。

```html
<el-switch
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
```
:::

### 属性

| Attribute      | Description          | Type      | Accepted Values       | Default |
|-----| ----| ----| ----|---- |
| value / v-model | バインディング値 | boolean / string / number | — | — |
| disabled | スイッチが無効になっているかどうか | boolean | — | false |
| width | スイッチの幅 | number | — | 40 |
| active-icon-class | `on` 状態のときに表示されるアイコンのクラス名で、`active-text` を上書きします。 | string | — | — |
| inactive-icon-class |`off` 状態のときに表示されるアイコンのクラス名で、`inactive-text` を上書きします。| string | — | — |
| active-text | `on` 状態のときに表示されるテキスト | string | — | — |
| inactive-text | `off` 状態のときに表示されるテキスト | string | — | — |
| active-value  | `on` 状態のときのスイッチの値 | boolean / string / number | — | true |
| inactive-value  | `off` 状態のときのスイッチの値 | boolean / string / number | — | false |
| active-color | `on` 状態のときの背景色 | string | — | #409EFF |
| inactive-color | `off` 状態のときの背景色 | string | — | #C0CCDA |
| name           | スイッチのインプット名 | string | — | — |
| validate-event | フォームバリデーションをトリガするかどうか | boolean | - | true |

### イベント

| Event Name | Description | Parameters |
| ---- | ----| ---- |
| change | 値が変わるとトリガー | value after changing |

### メソッド
| Method | Description | Parameters |
| ------|--------|------- |
| focus | スイッチコンポーネントにフォーカス | — |
