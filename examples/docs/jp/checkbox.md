## Checkbox

複数の選択肢がある場合の選択肢グループ

### 基本的な使い方

checkbox単独で使用して2つの状態を切り替えることができます。

:::demo `el-checkbox` の `v-model` バインド変数)を定義する。デフォルト値は単一の `checkbox` の場合、 `Boolean` で、チェックを選択した場合は `true` になります。el-checkbox`タグ内の内容は、checkboxのボタンに続く説明文になります。

```html
<template>
  <!-- `checked` should be true or false -->
  <el-checkbox v-model="checked">Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### 無効状態

checkboxを無効にした状態。

:::demo `disabled` 属性を設定する。

```html
<template>
  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### Checkboxグループ

1つのグループに固定された複数のcheckboxに使用され、選択肢が選択されているかどうかをチェックして表示します。

:::demo `checkbox-group` 要素は `Array` としてバインドされた `v-model` を用いて複数のcheckboxを一つのグループにまとめて管理することができる。`el-checkbox` 要素の内部では、`label` がcheckboxの値である。このタグにコンテンツが入れ子になっていない場合、`label` はcheckboxのボタンに続く説明文としてレンダリングされます。`label` は配列の要素の値にも対応する。 指定された値が配列に存在する場合は選択され、その逆(指定されていない値は選択されない)も同様である。

```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="disabled" disabled></el-checkbox>
    <el-checkbox label="selected and disabled" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
```
:::

### 不確定

`不確定`プロパティは「すべてをチェックする」効果を加えるのに役立ちます。

:::demo

```html
<template>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
```
:::

### 最小/最大チェック項目

`min` と `max` プロパティは、チェックする項目の数を制限するのに役立つ。

:::demo

```html
<template>
  <el-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
</script>
```
:::

### ボタンスタイル

ボタンスタイルのcheckbox。

:::demo `EL-CHECKBOX` 要素を `EL-CHECKBOX-BUTTON` 要素に変更すればよい。また、`size` 属性も提供されています。
```html
<template>
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="medium">
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
</script>
```
:::

### 境界線をつける

:::demo `border`属性はcheckboxに境界線を追加することができます。
```html
<template>
  <div>
    <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
    <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox v-model="checked3" label="Option1" border size="medium"></el-checkbox>
    <el-checkbox v-model="checked4" label="Option2" border size="medium"></el-checkbox>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
</script>
```
:::

### Checkbox属性
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | バインディング値 | string / number / boolean | — | — |
| label     | `checkbox-group` の中で使われる場合のcheckboxの値   | string / number / boolean   |       —        |     —    |
| true-label | checkboxがチェックされている場合は、checkboxの値   | string / number    |       —        |     —    |
| false-label | checkboxがチェックされていない場合のcheckboxの値   | string / number    |      —         |     —    |
| disabled  | checkboxを無効にするかどうか   | boolean   |  — | false   |
| border  | checkboxの周りにボーダーを追加するかどうか  | boolean   | — | false   |
| size  | checkboxのサイズ、`border` がtrueの場合にのみ動作します。  | string  | medium / small / mini | — |
| name | ネイティブ 'name' 属性 | string    |      —         |     —    |
| checked  | checkboxがチェックされているかどうか  | boolean   |  — | false   |
| indeterminate  | ネイティブcheckboxの `indeterminate` と同じ | boolean   |  — | false   |

### Checkboxのイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkboxグループの属性
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | バインディング値 | array | — | — |
|size | checkboxのボタンや枠線の大きさ | string | medium / small / mini | — |
| disabled  | ネスティングcheckboxを無効にするかどうか | boolean   | — | false   |
| min     | checkboxの最小チェック数   | number    |       —        |     —    |
| max     | checkboxの最大チェック数   | number    |       —        |     —    |
|text-color | ボタンがアクティブなときのフォント色 | string   | — | #ffffff   |
|fill  | ボタンがアクティブなときの境界線と背景色 | string   | — | #409EFF   |

### Checkboxグループのイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkboxボタンの属性
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | `checkbox-group` の中で使われる場合のcheckboxの値 | string / number / boolean  |       —        |     —    |
| true-label | チェックされている場合の、checkboxの値 | string / number | — |     —    |
| false-label | チェックされていない場合の、checkboxの値 | string / number    |      —         |     —    |
| disabled  | checkboxを無効にするかどうか | boolean   |  — | false   |
| name | ネイティブ 'name' 属性 | string    |      —         |     —    |
| checked  | checkboxがチェックされているかどうか | boolean   |  — | false   |
