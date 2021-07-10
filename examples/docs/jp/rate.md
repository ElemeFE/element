## レート

レーティングに使用

### 基本的な使い方

:::demo レートはレーティングスコアをいくつかのレベルに分割し、異なる背景色を使うことでこれらのレベルを区別することができます。デフォルトでは背景色は同じですが、`colors`属性を用いて3つのレベルを反映させるために3つの要素を持つ配列を割り当てることができ、2つのしきい値は`low-threshold`と`high-threshold`で定義することができます。または、2つのレベル間のしきい値をキー、値を対応する色とするオブジェクトで割り当てることができます。

```html
<div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Color for different levels</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
```
:::

### テキスト付き

評価点を示すためのテキストの使用

:::demo 属性 `show-text` を追加して、Rateの右にテキストを表示するようにします。テキストは `texts` を使って異なるスコアに割り当てることができます。`texts` は配列で、長さが最大スコアの `max` と等しくなければなりません。

```html
<el-rate
  v-model="value"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>
```
:::

### その他のアイコン

異なるレートコンポーネントを区別するために、異なるアイコンを使用することができます。

:::demo `icon-classes` には3つの要素を持つ配列か、2つのレベルの間のしきい値をキー、値を対応するアイコンクラスとするオブジェクトを渡すことで、アイコンをカスタマイズすることができます。この例では、非選択時にアイコンを設定するために `void-icon-class` を利用しています。

```html
<el-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
</script>
```
:::

### 読み取り専用

読み取り専用 Rateはレーティングスコアを表示するためのものです。半分星に対応しています。

:::demo 属性 `disabled` を用いてコンポーネントを読み取り専用にする。右側にレーティングスコアを表示するために `show-score` を追加します。さらに、属性 `score-template` を用いてスコアのテンプレートを提供することもできます。これは `{value}` を含んでいなければならず、`{value}` はレーティングスコアに置き換えられます。

```html
<el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value} points">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: 3.7
      }
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | バインディング値 | number | — | 0 |
| max | 最大レーティングスコア | number | — | 5 |
| disabled | レートが読み取り専用かどうか | boolean | — | false |
| allow-half | ピッキングハーフスタートが許可されているか | boolean | — | false |
| low-threshold | 低レベルと中レベルの間のしきい値。値自体は、低レベルに含まれる | number | — | 2 |
| high-threshold | 中レベルと高レベルの間のしきい値。値自体は、中レベルに含まれる | number | — | 4 |
| colors | アイコンの色を指定します。配列の場合は 3 つの要素を持ち、それぞれがスコアレベルに対応していなければなりません。 オブジェクトの場合は、キーは 2 つのレベル間のしきい値で、値は対応する色でなければなりません。 | array/object | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 非選択アイコンの色 | string | — | #C6D1DE |
| disabled-void-color | 非選択時の読み取り専用アイコンの色 | string | — | #EFF2F7 |
| icon-classes | アイコンのクラス名を指定します。arrayの場合は3つの要素を持ち、それぞれがスコアレベルに対応していなければなりませんが、objectの場合は2つのレベル間の閾値がキーとなり、その値が対応するアイコンクラスとなります。 | array/object | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | 非選択アイコンのクラス名 | string | — | el-icon-starオブジェクト
| disabled-void-icon-class | 非選択時読み取り専用アイコンのクラス名 | string | — | el-icon-star-on |
| show-text | テキスト表示の有無 | boolean | — | false |
| show-score | 現在のスコアを表示するかどうか。show-score と show-text は同時にtrueにすることはできません。 | boolean | — | false |
| text-color | テキストの色 | string | — | #1F2D3D |
| texts | テキストの配列 | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template | スコアテンプレート | string | — | {value} |

### イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | レート値が変更されたときにトリガ | value after changing |
