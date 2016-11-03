## Time Picker

Used to pick a time.

### Fixed time picker

Provide a list of fixed time for users to choose.

:::demo Use `el-time-select` label, assign start time, end time and time step with `start`, `end` and `step`.
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
```
:::

### Arbitrary time picker

Can pick an arbitrary time.

:::demo Use `el-time-picker` label, can limit the time range by using `selectableRange`.

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

If start time has been picked at first, then the end time will change accordingly.

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
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | Read only | boolean | — | false |
| placeholder | Placeholder | string | — | — |
| format | Time format | string | hour: `HH`, minute: `mm`, second: `ss` | 'HH:mm:ss' |
| picker-options | Current time picker options, refer to the following table | object | — | {} |

### Time Select Options
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | Start time | string | — | 09:00 |
| end | End time | string | — | 18:00 |
| step | Time step | string | — | 00:30 |
| minTime | Minimum time, any time before this time will be unavailable | string | — | 00:00 |

### Time Picker Options
| Attribute      | Description          | Type      | Options                           | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | Available time range，e.g.<br>`'18:30:00 - 20:30:00'`<br>or pass an array<br>`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string/array | — | — |
