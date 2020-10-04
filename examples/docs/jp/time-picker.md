## タイムピッカー

時間インプットにはタイムピッカーを使用します。

### 固定タイムピッカー

ユーザーが選択できる固定時間のリストを提供する。

:::demo `el-time-select` ラベルを使用し、開始時刻、終了時刻、タイムステップを `start`, `end`, `step` で指定します。`
```html
<el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
```
:::

### 任意のタイムピッカー

任意の時間を選ぶことができます。

:::demo ラベルに `el-time-picker` を用い、`selectableRange` を指定することで時間範囲を制限することができます。デフォルトでは、マウスホイールをスクロールして時間を選ぶことができますが、代わりに `arrow-control` 属性が設定されている場合は矢印を使って時間を選ぶこともできます。

```html
<template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
```
:::

### 固定時間範囲

開始時間が最初に選ばれた場合は、それに応じて終了時間が変更されます。

:::demo
```html
<template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="End time"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
```
:::

### 任意の時間範囲

任意の時間範囲を選択することができます。

:::demo 範囲を指定するには、`is-range` 属性を追加する。また、範囲モードでは `arrow-control` がサポートされている。
```html
<template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | バインディング値 | date(TimePicker) / string(TimeSelect) | - | - |
| readonly | タイムピッカーが読み取り専用かどうか | boolean | — | false |
| disabled | タイムピッカーが無効になっているかどうか | boolean | — | false |
| editable | 入力が編集可能かどうか | boolean | — | true |
| clearable | クリアボタンを表示するかどうか | boolean | — | true |
| size | 入力のサイズ | string | medium / small / mini | — |
| placeholder | 非範囲モード時のプレースホルダ | string | — | — |
| start-placeholder | 範囲モードの開始時刻のプレースホルダ | string | — | — |
| end-placeholder | 範囲モード終了時のプレースホルダ | string | — | — |
| is-range | 時間範囲を選択するかどうか、`<el-time-picker>` でのみ動作します。 | boolean | — | false |
| arrow-control | 矢印ボタンを使って時間を選択するかどうか、`<el-time-picker>` でのみ動作します。 | boolean | — | false |
| align | 整列 | left / center / right | left |
| popper-class | タイムピッカーのドロップダウンのカスタムクラス名 | string | — | — |
| picker-options | 追加のオプション、下のテーブルを参照してください。 | object | — | {} |
| range-separator | 範囲セパレータ | string | - | '-' |
| default-value | オプション、カレンダーのデフォルトの日付 | Date for TimePicker, string for TimeSelect | anything accepted by `new Date()` for TimePicker, selectable value for TimeSelect | — |
| value-format | オプションで、タイムピッカーの場合のみ、バインディング値のフォーマットを指定します。指定しない場合、バインディング値は Date オブジェクトになります。 | string | see [date formats](#/en-US/component/date-picker#date-formats) | — |
| name | ネイティブ入力の `name` と同じ | string | — | — |
| prefix-icon | カスタムプレフィックスアイコンクラス | string | — | el-icon-time |
| clear-icon | カスタムクリアアイコンクラス | string | — | el-icon-circle-close |

### 時間選択オプション
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | 開始時刻 | string | — | 09:00 |
| end | 終了時刻 | string | — | 18:00 |
| step | タイムステップ | string | — | 00:30 |
| minTime | 最低時間、それ以前の時間は無効化されます。 | string | — | 00:00 |
| maxTime | 最大時間、この時間以降は無効化されます。 | string | — | — |

### タイムピッカーのオプション
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | 利用可能な時間範囲、例えば `'18:30:00 - 20:30:00'`または`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']`など。 | string / array | — | — |
| format | ピッカー形式 | string | hour `HH`, minute `mm`, second `ss`, AM/PM `A` | HH:mm:ss |


### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | ユーザーが値を確認したときにトリガされます。 | component's binding value |
| blur | インプットがぼやけたときされます | component instance |
| focus | 入力がフォーカスされているときにトリガされます。 | component instance |

### 方法
| Method | Description | Parameters |
| ---- | ---- | ---- |
| focus | インプットコンポーネントにフォーカス | - |
