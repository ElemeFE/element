<script>
  module.exports = {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
        pickerOptions2: {
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
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: []
      };
    }
  };
</script>

<style>
  .demo-block.demo-date-picker .source {
    padding: 0;
    display: flex;
  }

  .demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

  .demo-date-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## DatePicker

Use Date Picker for date input.

###  Enter Date

Basic date picker measured by 'day'.

:::demo The measurement is determined by the `type` attribute. You can enable quick options by creating a `picker-options` object with `shortcuts` property. The disabled date is set by `disabledDate`, which is a function.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
      };
    }
  };
</script>
```

:::

### Other measurements

You can choose week, month or year by extending the standard date picker component.

:::demo

```html
<div class="block">
  <span class="demonstration">Week</span>
  <el-date-picker
    v-model="value3"
    type="week"
    format="Week WW"
    placeholder="Pick a week">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Month</span>
  <el-date-picker
    v-model="value4"
    type="month"
    placeholder="Pick a month">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Year</span>
  <el-date-picker
    v-model="value5"
    type="year"
    placeholder="Pick a year">
  </el-date-picker>
</div>

<script>
  export default {
    data() {
      return {
        value3: '',
        value4: '',
        value5: ''
      };
    }
  };
</script>
```

:::

###  Date Range

Picking a date range is supported.

:::demo When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the `unlink-panels` attribute.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :picker-options="pickerOptions2">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
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
        value6: '',
        value7: ''
      };
    }
  };
</script>
```

:::

###  Default Value

If user hasn't picked a date, shows today's calendar by default. You can use `default-value` to set another date. Its value should be parsable by `new Date()`.

If type is `daterange`, `default-value` sets the left side calendar.

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value8"
      type="date"
      placeholder="Pick a date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value9"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: '',
        value9: ''
      };
    }
  };
</script>
```
:::

###  Default time for start date and end date

When picking a date range, you can assign the time part for start date and end date.

:::demo By default, the time part of start date and end date are both `00:00:00`. Setting `default-time` can change their time respectively. It accepts an array of up to two strings with the format of `12:00:00`. The first string sets the time for the start date, and the second for the end date.
```html
<template>
  <div class="block">
    <p>Component value：{{ value12 }}</p>
    <el-date-picker
      v-model="value12"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value12: []
      };
    }
  };
</script>
```
:::

###  Formatted Value

By default, DatePicker emits `Date` object. You can use `value-format` to designate the format of emitted value, it accepts the same format string of `format` attribute.

:::warning
This feature is at alpha stage. Feedback welcome.
:::

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value10 }}</div>
    <el-date-picker
      v-model="value10"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Emits formatted date</span>
    <div class="demonstration">Value: {{ value11 }}</div>
    <el-date-picker
      v-model="value11"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: '',
        value11: '',
      };
    }
  };
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | whether DatePicker is read only | boolean | — | false |
| disabled | whether DatePicker is disabled | boolean | — | false |
| size | size of Input | string | large/small/mini | — |
| editable | whether the input is editable | boolean | — | true |
| clearable | Whether to show clear button | boolean | — | true |
| placeholder | placeholder in non-range mode | string | — | — |
| start-placeholder | placeholder for the start date in range mode | string | — | — |
| end-placeholder | placeholder for the end date in range mode | string | — | — |
| type | type of the picker | string | year/month/date/datetime/ week/datetimerange/daterange | date |
| format | format of the displayed value in the input box | string | year `yyyy`, month `MM`, day `dd`, hour `HH`, minute `mm`, second `ss`, AM/PM `A` | yyyy-MM-dd |
| align | alignment | left/center/right | left |
| popper-class | custom class name for DatePicker's dropdown | string | — | — |
| picker-options | additional options, check the table below | object | — | {} |
| range-separator | range separator | string | — | '-' |
| default-value | optional, default date of the calendar | Date | anything accepted by `new Date()` | — |
| default-time | optional, the time value to use when selecting date range | string[] | Array with length 2, each item is a string like `12:00:00`. The first item for the start date and then second item for the end date | — |
| value-format | optional, format of binding value. If not specified, the binding value will be a Date object | string | year `yyyy`, month `MM`, day `dd`, hour `HH`, minute `mm`, second `ss`, AM/PM `A` | — |
| name | same as `name` in native input | string | — | — |
| unlink-panels | unlink two date-panels in range-picker | boolean | — | false |
| prefix-icon | Custom prefix icon class | string | — | el-icon-date |
| clear-icon | Custom clear icon class | string | — | el-icon-circle-close |

### Picker Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | a { text, onClick } object array to set shortcut options, check the table below | object[] | — | — |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| firstDayOfWeek | first day of week | Number | 1 to 7 | 7 |
| onPick | a callback that triggers when the selected date is changed. Only for `daterange` and `datetimerange`. | Function({ maxDate, minDate }) | - | - |

### shortcuts
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | title of the shortcut | string | — | — |
| onClick | callback function, triggers when the shortcut is clicked, with the `vm` as its parameter. You can change the picker value by emitting the `pick` event. Example: `vm.$emit('pick', new Date())`| function | — | — |


### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when user confirms the value | component's binding value |
| blur | triggers when Input blurs | component instance |
| focus | triggers when Input focuses | component instance |

### Methods
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |
