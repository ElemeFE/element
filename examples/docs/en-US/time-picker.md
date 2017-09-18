<style>
  .demo-box {
    .el-date-editor + .el-date-editor {
      margin-left: 10px;
    }
  }
</style>

## TimePicker

Use Time Picker for time input.

### Fixed time picker

Provide a list of fixed time for users to choose.

:::demo Use `el-time-select` label, then assign start time, end time and time step with `start`, `end` and `step`.
```html
<el-time-select
  v-model="value1"
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
        value1: ''
      };
    }
  }
</script>
```
:::

### Arbitrary time picker

Can pick an arbitrary time.

:::demo Use `el-time-picker` label, and you can limit the time range by using `selectableRange`.

```html
<template>
  <el-time-picker
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
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
```
:::

### Fixed time range

If start time is picked at first, then the end time will change accordingly.

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

### Arbitrary time range

Can pick an arbitrary time range.

:::demo We can pick a time range by adding an `is-range` attribute.
```html
<template>
  <el-time-picker
    is-range
    v-model="value3"
    placeholder="Pick a time range">
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
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | whether DatePicker is read only | boolean | — | false |
| disabled | whether DatePicker is disabled | boolean | — | false |
| editable | whether the input is editable | boolean | — | true |
| clearable | Whether to show clear button | boolean | — | true |
| size | size of Input | string | large/small/mini | — |
| placeholder | placeholder | string | — | — |
| value | value of the picker | date for Time Picker, and string for Time Select | hour `HH`, minute `mm`, second `ss` | HH:mm:ss |
| align | alignment | left/center/right | left |
| popper-class | custom class name for TimePicker's dropdown | string | — | — |
| picker-options | additional options, check the table below | object | — | {} |

### Time Select Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | start time | string | — | 09:00 |
| end | end time | string | — | 18:00 |
| step | time step | string | — | 00:30 |
| minTime | minimum time, any time before this time will be disabled | string | — | 00:00 |
| maxTime | maximum time, any time after this time will be disabled | string | — | — |

### Time Picker Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | available time range, e.g.`'18:30:00 - 20:30:00'`or`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string/array | — | — |
| format | format of the picker | string | hour `HH`, minute `mm`, second `ss` | HH:mm:ss |


### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when input value changes | formatted value |

