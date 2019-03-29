## Calendar calendar

显示日期

### 基本

:::demo 设置 `value` 来指定当前显示的月份。如果 `value` 未指定则显示当月。`value` 支持 `v-model` 双向绑定。
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

### 自定义内容

:::demo 通过设置名为 `dateCell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。在 `scoped-slot` 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。
```html
<el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <div>
      当前的日期是 {{ data.day }}，{{ data.isSelected ? '' : '没'}}有被选中
    </div>
  </template>
</el-calendar>
```
:::

### 自定义范围

:::demo 设置 `range` 属性指定日历的显示范围。开始时间必须是周一，结束时间必须是周日，且两者必须在一个月内。
<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
:::

### Attributes
| 参数             | 说明          | 类型      | 可选值        | 默认值  |
|-----------------|-------------- |---------- |------------ |-------- |
| value / v-model | 绑定值         | Date/string/number | —  | —      |
| range           | 时间范围       | Array     | —           | —      |

### dateCell scoped slot 参数
| 参数             | 说明          | 类型      | 可选值        | 默认值  |
|-----------------|-------------- |---------- |------------ |-------- |
| date            | 单元格代表的日期 | Date      | —           | —      |
| data            | { type, isSelected, day}，type 的可选择有 prev-month，current-month，next-month, isSelected 标明日期是否被选中，day 是格式化的日期，格式为 yyyy-MM-dd    | Object      | —           | —      |
