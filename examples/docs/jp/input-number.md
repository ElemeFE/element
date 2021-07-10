## 数値入力

カスタマイズ可能な範囲で数値を入力します。

### 基本的な使い方

:::demo `<el-input-number>` 要素の `v-model` に変数をバインドすれば設定完了です。

```html
<template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>
```
:::

### 無効化

:::demo `disabled` 属性には `boolean` を渡し、値が `true` の場合はコンポーネントを無効にする。値を範囲内で制御したい場合は、`min` 属性を追加して最小値を設定し、`max` 属性を追加して最大値を設定することができる。デフォルトでは、最小値は `0` である。

```html
<template>
  <el-input-number v-model="num" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```
:::

### ステップ

インクリメンタルステップを定義できます。

:::demo ステップを設定するために `step` 属性を追加する。

```html
<template>
  <el-input-number v-model="num" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
</script>
```
:::

### 厳密なステップ

:::demo `step-strictly` 属性は `boolean` を受け付ける。この属性が `true` の場合、入力値は step の倍数にしかならない。

```html
<template>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
</script>
```
:::

### 精度

:::demo 入力値の精度を設定するために `precision` 属性を追加する。

```html
<template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```

:::

:::tip
精度 `precision` の値は非負整数でなければならず、`step` の小数点以下であってはならない。
:::

### サイズ

追加のサイズを設定するには、属性 `size` で `medium`, `small`, `mini` を使用します。

:::demo

```html
<template>
  <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
</script>
```
:::

### 位置制御

:::demo コントロールボタンの位置を決めるには `controls-position` を設定します。
```html
<template>
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### 属性

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|----| ----| ---| ----| -----|
|value / v-model | バインディング値| number | — | 0 |
|min | 最小許容値 | number | — | `-Infinity` |
|max | 最大許容値 | number | — | `Infinity` |
|step | インクリメンタルステップ | number | — | 1 |
|step-strictly | 入力値がステップの倍数でなければならないかどうか | boolean | — | false |
|precision | 入力値精度 | number | — | — |
|size | コンポーネントのサイズ | string | large/small| — |
|disabled| コンポーネントが無効化されているかどうか | boolean | — | false |
|controls| コントロールボタンを有効にするかどうか | boolean | — | true |
|controls-position | 操作ボタンの位置 | string | right | - |
|name | ネイティブ入力の `name` と同じ | string | — | — |
|label | ラベルテキスト | string | — | — |
|placeholder | インプット内のプレースホルダー | string | - | - |

### イベント

| Event Name | Description | Parameters |
|----| ---- | -----|
|change | 値が変更されたときにトリガされる | currentValue, oldValue |
| blur | インプットがぼやけときにトリガされる | (event: Event) |
| focus | インプットがフォーカスされたときにトリガされる | (event: Event) |

### 方法
| Method | Description | Parameters |
|------|--------|-------|
| focus | インプットコンポーネントにフォーカス | - |
| select | インプット要素のテキストを選択 | — |

