<style>
  .demo-box {
    .el-date-editor + .el-date-editor {
      margin-left: 10px;
    }
  }
</style>

## TimePicker 时间选择器

 用于选择或输入日期

### 固定时间点

提供几个固定的时间点供用户选择

:::demo 使用 el-time-select 标签，分别通过`star`、`end`和`step`指定可选的起始时间、结束时间和步长
```html
<el-time-select
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value1: ''
      };
    }
  }
</script>
```
:::

### 任意时间点

可以选择任意时间

:::demo 使用 el-time-picker 标签，通过`selectableRange`限制可选时间范围
```html
<template>
  <el-time-picker
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
```
:::

### 固定时间范围

若先选择开始时间，则结束时间内备选项的状态会随之改变

:::demo
```html
<template>
  <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
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

### 任意时间范围

可选择任意的时间范围

:::demo 添加`is-range`属性即可选择时间范围
```html
<template>
  <el-time-picker
    is-range
    v-model="value3"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
:::

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: new Date(2016, 9, 10, 18, 40),
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        startTime: '',
        endTime: ''
      };
    }
  }
</script>

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size          | 输入框尺寸     | string          | medium / small / mini  | — |
| placeholder | 非范围选择时的占位内容 | string | — | — |
| start-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| end-placeholder | 范围选择时开始日期的占位内容 | string | — | — |
| value | 绑定值 | date(TimePicker) / string(TimeSelect) | — | — |
| align | 对齐方式 | string | left / center / right | left |
| popper-class | TimePicker 下拉框的类名 | string | — | — |
| picker-options | 当前时间日期选择器特有的选项参考下表 | object | — | {} |
| range-separator | 选择范围时的分隔符 | string | - | '-' |
| name | 原生属性 | string | — | — |

### Time Select Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | 开始时间 | string | — | 09:00 |
| end | 结束时间 | string | — | 18:00 |
| step | 间隔时间 | string | — | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | — | 00:00 |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | — | — |

### Time Picker Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | 可选时间段，例如`'18:30:00 - 20:30:00'`或者传入数组`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | — | — |
| format | 时间格式化(TimePicker) | string | 小时：`HH`，分：`mm`，秒：`ss` | 'HH:mm:ss' |

### Events
| 事件名 | 说明 | 参数 |
|---------|--------|---------|
| change | 当 input 的值改变时触发，返回值和文本框一致 | formatted value |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
