## ラジオ

複数の選択肢の中から1つを選択することができます。

### 基本的な使い方

ラジオにはあまり多くのオプションを持たせてはいけません。多くのオプションを持つなら代わりにSelectコンポーネントを使用します。

:::demo radioコンポーネントの作成は簡単で、Radioの `v-model` に変数をバインドするだけです。これは選択したラジオの `label` の値に等しくなります。ラベルの型は `String`, `Number`, `Boolean` のいずれかです。
```html
<template>
  <el-radio v-model="radio" label="1">Option A</el-radio>
  <el-radio v-model="radio" label="2">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 無効化

ラジオを無効にするには `disabled` 属性を用います。

:::demo `disabled`属性を追加する必要があります。
```html
<template>
  <el-radio disabled v-model="radio" label="disabled">Option A</el-radio>
  <el-radio disabled v-model="radio" label="selected and disabled">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### ラジオボタングループ

相互に関連し、排他的なオプションから一つのボタンを選択するのに適しています。

:::demo `el-radio-group` と `el-radio` を組み合わせてラジオグループを表示する。el-radio-group` 要素の `v-model` を変数にバインドし、ラベルの値を `el-radio` に設定する。また、現在の値をパラメータとした `change` イベントも提供する。

```html
<el-radio-group v-model="radio">
  <el-radio :label="3">Option A</el-radio>
  <el-radio :label="6">Option B</el-radio>
  <el-radio :label="9">Option C</el-radio>
</el-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### ボタンスタイル

ボタンスタイルのラジオ。

:::demo `el-radio` 要素を `el-radio-button` 要素に変更すればよい。また、`size`属性も用意している。
```html
<template>
  <div>
    <el-radio-group v-model="radio1">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="medium">
      <el-radio-button label="New York" ></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington" disabled ></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" disabled size="mini">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
```
:::

### ボーダーを付ける

:::demo `border` 属性はラジオにボーダーをつけます。
```html
<template>
  <div>
    <el-radio v-model="radio1" label="1" border>Option A</el-radio>
    <el-radio v-model="radio1" label="2" border>Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio v-model="radio2" label="1" border size="medium">Option A</el-radio>
    <el-radio v-model="radio2" label="2" border size="medium">Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border disabled>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" size="mini" disabled>
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### ラジオ属性

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
value / v-model | バインド値 | string / number / boolean | — | —
label | ラジオの値 | string / number / boolean | — | —
disabled | ラジオが無効になっているかどうか | boolean | — | false
border  | ラジオの周りにボーダーを追加するかどうか  | boolean   | — | false
size  | ラジオのサイズ、`border` が真の場合のみ動作します。  | string  | medium / small / mini | —
name | ネイティブ 'name' 属性 | string    |      —         |     —

### ラジオイベント

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | バウンド値が変更された場合にトリガされます。 | 選択されたラジオのラベル値  |

### ラジオグループ属性

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
value / v-model | バインディング値 | string / number / boolean | — | —
size | ラジオボタンのボーダーもしくはラジオボタンの大きさ | string | medium / small / mini | —
disabled  | ネストしたラジオが無効になっているかどうか | boolean   | — | false
text-color | ボタンがアクティブなときのフォント色 | string   | — | #ffffff   |
fill  | ボタンがアクティブなときの境界線と背景色 | string   | — | #409EFF   |

### ラジオグループイベント

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | バウンド値が変更された場合にトリガされます。 | 選択されたラジオのラベル値 |

### ラジオボタン属性

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | ラジオの値 | string / number | — | —
disabled | ラジオが無効かどうか | boolean | — | false
name | ネイティブ 'name' 属性 | string    |      —         |     —
