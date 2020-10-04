## Calendar

日付を表示します。

### 基本的なこと

:::demo 現在表示されている月を指定するために `value` を設定する。`value` が指定されない場合は現在の月を表示する。`value` は双方向のバインディングをサポートする。
```html
<el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
```
:::

### カスタムコンテンツ

:::demo `scoped-slot` に `dateCell` という名前を設定することで、calendarセルに表示する内容をカスタマイズすることができる。`scoped-slot`では、日付(現在のセルの日付)とデータ(type, isSelected, day属性を含む)を取得することができます。詳細は以下のAPIドキュメントを参照のこと。
```html
<el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
```
:::

### レンジ

:::demo calendarの表示範囲を指定するために `range` 属性を設定する。開始時刻は月曜日、終了時刻は日曜日でなければならず、期間は2ヶ月を超えてはならない。
```html
<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
```
:::

### 属性
| Attribute       | Description        | Type      | Accepted Values       | Default  |
|-----------------|------------------- |---------- |---------------------- |--------- |
| value / v-model | バインディング値      | Date/string/number | —            | —        |
| range           | 開始時刻と終了時刻を含む時間範囲。開始時間は週の開始日、終了時間は週の終了日でなければならず、時間幅は2ヶ月を超えることはできません。 | Array  | —  | —  |
| first-day-of-week | 週の最初の日| Number    | 1 to 7                |  1       |

### デートセルスコープスロット
| Attribute       | Description   | Type      | Accepted Values       | Default  |
|-----------------|-------------- |---------- |---------------------- |--------- |
| date            | セルが表す日付  | Date      | —                     | —        |
| data            | {type, isSelected, day}.  `type` は日付が属する月を示し、オプションの値は前月、現在の月、次の月です。`isSelected` は日付が選択されているかどうかを示す。`day`はyyyy-MM-dd形式でフォーマットされた日付です。    | Object      | —           | —      |
