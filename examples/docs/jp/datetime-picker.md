## DateTimePicker

1つのピッカーで日時を選択します。

:::tip
DateTimePickerはDatePickerとTimePickerから派生したものです。`pickerOptions`やその他の属性についての詳しい説明は、DatePickerとTimePickerを参照してください。
:::

###  日付と時間

:::demo `type`を`datetime`に設定することで、1つのピッカーで日付と時刻を同時に選択することができます。ショートカットの使い方は日付ピッカーと同じです。

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
```
:::

### 日付と時間の範囲

:::demo `type`を`datetimerange`に設定することで、日付と時間の範囲を選択することができる。

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
```
:::

###  開始日と終了日のデフォルトの時間値

:::demo 日付パネルで `datetimerange` 型の日付範囲を選択した場合、開始日と終了日のデフォルト値として `00:00:00` が用いられる。これは `default-time` 属性で制御することができる。`default-time`は最大2つの文字列の配列を受け付ける。1つ目の項目は開始日の時刻を制御し、2つ目の項目は終了日の時刻を制御する。
```html
<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | バインディング値 | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly | DatePicker が読み取り専用かどうか | boolean | — | false |
| disabled | DatePicker が無効かどうか | boolean | — | false |
| editable | DatePicker が編集可能かどうか | boolean | — | true |
| clearable | クリアボタンを表示するかどうか | boolean | — | true |
|size | インプットサイズ | string | large/small/mini | — |
| placeholder | 非範囲モード時のプレースホルダ | string | — | — |
| start-placeholder | 範囲モードでの開始日のプレースホルダ | string | — | — |
| end-placeholder | 範囲終了日のプレースホルダ | string | — | — |
| time-arrow-control | 矢印ボタンで時間を選ぶかどうか | boolean | — | false |
| type | ピッカーのタイプ | string | year/month/date/datetime/ week/datetimerange/daterange | date |
| format | インプットボックスの表示値のフォーマット | string | see [date formats](#/en-US/component/date-picker#date-formats) | yyyy-MM-dd HH:mm:ss |
| align | アライメント | left/center/right | left |
| popper-class | DateTimePickerのドロップダウンのカスタムクラス名 | string | — | — |
| picker-options | 追加のオプションについては、以下の表を参照してください。 | object | — | {} |
| range-separator | レンジセパレータ | string | - | '-' |
| default-value | オプション、カレンダーのデフォルトの日付 | Date | anything accepted by `new Date()` | — |
| default-time | 日付を選択した後のデフォルトの時刻の値 | non-range: string / range: string[] | non-range: a string like `12:00:00`, range: array of two strings, and the first item is for the start date and second for the end date. `00:00:00` will be used if not specified | — |
| value-format | オプションで、バインディング値のフォーマットを指定します。指定しない場合、バインディング値は Date オブジェクトになります。 | string | see [date formats](#/en-US/component/date-picker#date-formats) | — |
| name | ネイティブインプットの `name` と同じ | string | — | — |
| unlink-panels | レンジピッカーで2つのデータパネルのリンクを解除する | boolean | — | false |
| prefix-icon | カスタムプレフィックスアイコンクラス | string | — | el-icon-date |
| clear-icon | カスタムクリアアイコンクラス | string | — | el-icon-circle-close |

### ピッカーオプション
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | a { text, onClick } object array to set shortcut options, check the table below | object[] | — | — |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| cellClassName | set custom className | Function(Date) | — | — |
| firstDayOfWeek | first day of week | Number | 1 to 7 | 7 |

### ショートカット
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | title of the shortcut | string | — | — |
| onClick | callback function, triggers when the shortcut is clicked, with the `vm` as its parameter. You can change the picker value by emitting the `pick` event. Example: `vm.$emit('pick', new Date())`| function | — | — |

### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### メソッド
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |
