## セレクト

オプションが豊富な場合は、ドロップダウンメニューを使って表示し、希望するものをセレクトすることができます。

### 基本的な使い方

:::demo `v-model` は現在セレクトされている `el-option` の値である。

```html
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### オプションの無効化

:::demo オプションを無効にするには、`el-option` の `disabled` の値を `true` に設定する。

```html
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### オプションの無効化

コンポーネント全体を無効にします。

:::demo `el-select` の `disabled` を設定すると無効になります。
```html
<template>
  <el-select v-model="value" disabled placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### クリア可能なセレクト

セレクトはクリアアイコンでクリアできます。

:::demo `el-select` に `clearable` 属性を設定すると、クリアアイコンが表示されるようになる。なお、`clearable`はシングルセレクトの場合のみ有効である。
```html
<template>
  <el-select v-model="value" clearable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### 基本的な複数セレクト

複数セレクトは、セレクトされたオプションを表示するためにタグを使用します。

:::demo 複数モードを有効にするには、`el-select` に `multiple` 属性を設定する。この場合、`v-model` の値はセレクトされたオプションの配列となる。デフォルトでは、セレクトされたオプションはタグとして表示される。collapse-tags` 属性を用いることで、それらをテキストに折りたたむことができる。
```html
<template>
  <el-select v-model="value1" multiple placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  
  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value1: [],
        value2: []
      }
    }
  }
</script>
```
:::

### カスタムテンプレート

オプションのHTMLテンプレートをカスタマイズすることができます。

:::demo カスタマイズしたHTMLテンプレートを `el-option` のスロットに挿入します。

```html
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### グルーピング

グループのオプションを表示します。

:::demo オプションをグループ化するには `el-option-group` を用い、その `label` 属性はグループ名を表す。

```html
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### オプションフィルタリング

ご希望のオプションをフィルタリングすることができます。

:::demo `el-select` に `filterable` を追加すると、フィルタリングが可能になる。デフォルトでは、セレクト肢は `label` 属性に入力値が含まれるすべてのオプションを検索する。他のフィルタリング方法を使いたい場合は、`filter-method`を渡すことができる。`filter-method` は入力値が変更されたときに呼び出される `Function` であり、そのパラメータは現在の入力値である。
```html
<template>
  <el-select v-model="value" filterable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### リモート検索

サーバーからキーワードや検索データを入力します。

:::demo リモート検索を有効にするには `filterable` と `remote` を `true` を設定し、`remote-method` を渡す必要がある。`remote-method`は入力値が変化したときに呼び出される `Function` であり、そのパラメータは現在の入力値である。もし `el-option` が `v-for` ディレクティブでレンダリングされている場合は、`el-option` に `key` 属性を追加しなければならないことに注意してください。その値は、以下の例の `item.value` のように一意である必要があります。

```html
<template>
  <el-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
</script>
```
:::

### 新規アイテムの作成
セレクトオプションに含まれないアイテムを新規に作成してセレクトする
:::demo `allow-create`属性を使うことで、ユーザは入力ボックスに入力することで新しいアイテムを作成することができます。なお、`allow-create` が動作するためには、`filterable` が `true` でなければならない。この例では `default-first-option` も示している。この属性を `true` に設定すると、マウスや矢印キーで移動しなくても、エンターキーを押すことで現在のオプションリストの最初のオプションをセレクトすることができる。
```html
<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="Choose tags for your article">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
      }
    }
  }
</script>
```
:::

:::tip
セレクトされたバインディング値がオブジェクトの場合、そのユニークな ID キー名として `value-key` を割り当てるようにしてください。
:::

### 属性の選択
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | バインディング値 | boolean / string / number | — | — |
| multiple | 複数セレクトが有効かどうか | boolean | — | false |
| disabled | セレクトが無効になっているかどうか | boolean | — | false |
| value-key | 値がオブジェクトの場合に必要な、値の一意の ID キー名 | string | — | value |
| size | インプットサイズ | string | large/small/mini | — |
| clearable | セレクトクリア可能かどうか | boolean | — | false |
| collapse-tags | 複数セレクト時にタグをテキストに折りたたむかどうか | boolean | — | false |
| multiple-limit | `multiple` が `true` のときにユーザがセレクトできるオプションの最大数。0に設定した場合は無制限 | number | — | 0 |
| name | セレクト入力の名前属性 | string | — | — |
| autocomplete | セレクト入力のオートコンプリート属性 | string | — | off |
| auto-complete | 次期メジャーバージョンでは@DEPRECATED | string | — | off |
| placeholder | プレースホルダー | string | — | Select |
| filterable | セレクトがフィルタリング可能かどうか | boolean | — | false |
| allow-create | 新しいアイテムの作成を許可するかどうかを指定します。これを使うには、`filterable` がtrueでなければなりません。 | boolean | — | false |
| filter-method | カスタムフィルタ方式 | function | — | — |
| remote | オプションがサーバから読み込まれているかどうか | boolean | — | false |
| remote-method | カスタムリモート検索法 | function | — | — |
| loading | セレクトがサーバからデータをロードしているかどうか | boolean | — | false |
| loading-text | サーバからのデータ読み込み中に表示されるテキスト | string | — | Loading |
| no-match-text | フィルタリングクエリに一致するデータがない場合は、スロット `empty` を使用することもできます。 | string | — | No matching data |
| no-data-text | オプションがないときにテキストを表示するには、スロット `empty` を使うこともできます。 | string | — | No data |
| popper-class | custom class name for Select's dropdown | string | — | — |
| reserve-keyword | `multiple` と `filter` が真の場合、オプションを選択した後に現在のキーワードを予約するかどうか | boolean | — | false |
| default-first-option | エンターキーで最初にマッチするオプションを選択する。`filterable` または `remote`と一緒に使う | boolean | - | false |
| popper-append-to-body| ポッパーメニューをボディに追加するかどうか。ポッパーの位置が間違っている場合は、このプロップを false に設定してみてください。 | boolean | - | true |
| automatic-dropdown | ノンフィルターセレクトの場合、このプロップは、入力がフォーカスされたときにオプションメニューがポップアップするかどうかを決定します。 | boolean | - | false |

### イベントの選択
| Event Name | Description | Parameters |
|---------|---------|---------|
| change | 選択された値が変更されたときにトリガされます。 | current selected value |
| visible-change | ドロップダウンが表示/非表示になったときにトリガされます。 | true when it appears, and false otherwise |
| remove-tag | 複数のモードでタグが削除された場合のトリガー | removed tag value |
| clear | クリア可能な選択範囲内でクリアアイコンがクリックされたときにトリガーされます。 | — |
| blur | インプットがぼやけたときにトリガされます。 | (event: Event) |
| focus | インプットがフォーカスされたときにトリガされます。 | (event: Event) |

### セレクトスロット
| Name    | Description |
|---------|-------------|
|    —    | オプションコンポーネントリスト |
| prefix  | セレクトプレフィックスとしてのコンテンツ |
| empty  | オプションがない場合のコンテンツ |

### オプショングループの属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | グループの名前 | string | — | — |
| disabled | このグループのすべてのオプションを無効にするかどうか | boolean | — | false |

### オプション属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | オプションの値 | string/number/object | — | — |
| label | オプションのラベル、省略された場合は `value` と同じ | string/number | — | — |
| disabled | オプションが無効かどうか | boolean | — | false |

### 方法
| Method | Description | Parameters |
|------|--------|-------|
| focus | インプットコンポーネントにフォーカス | - |
| blur | インプットコンポーネントをぼかし、ドロップダウンを非表示にします。 | - |
