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
        value: '',
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
        value12: '',
        value13: [],
        dynamic: '',
        dynamicCurrentValue: null
      };
    }
  };
</script>

<style>
  .demo-block.demo-date-picker .source {
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

  .demo-date-picker .tm-date-editor + .demonstration {
    margin-top: 20px;
  }
</style>

## DatePicker

Use Date Picker for date input.

:::demo

```html
<tm-date-picker v-model="value" ref="compo" type="date" default-value="2018-3-4"/>
```

:::

Use `hide-year-header` attribute to hide the year selector in the header.

:::demo

```html
<tm-date-picker v-model="value" ref="compo" type="date" default-value="2018-3-4" hide-year-header/>
```

:::

Use slots `cell` to extend DatePicker's cell.

:::demo

```html
<tm-date-picker v-model="value" ref="compo" type="date" default-value="2018-3-4">
 /*
  * @typedef {Object} props
  *
  * @prop {string} text - date
  * @prop {number} row
  * @prop {number} column
  * @prop {'today'|'normal'|'prev-month'|'next-month'} type
  * @prop {boolean} start
  * @prop {boolean} end
  * @prop {boolean} inRange
  * @prop {boolean} disabled
  */
  <b slot="cell" slot-scope="props" style="color: red">
    +{{ props.text }}
  </b>
</tm-date-picker>

```

:::

Use slots `topBlock` and `bottomBlock` to extend DatePicker's popover.

:::demo

```html
<tm-date-picker v-model="value" ref="compo" type="date" default-value="2018-3-4">
    <div slot="topBlock" style="text-align: center;">
        DatePicker's TopBlock Slot
    </div>
    <div slot="bottomBlock" style="text-align: center;">
        DatePicker's BottomBlock Slot
    </div>
</tm-date-picker>

```

:::

Use inline.

:::demo

```html
<tm-date-picker v-model="value" ref="compo" type="date" inline default-value="2018-3-4">
  <template slot="cell" slot-scope="props">
    <b v-if="props.text % 2">{{ props.text }}</b>
    <template v-else>{{ props.text }}</template>
  </template>
</tm-date-picker>

```

:::

### DynamicPicker

Use DynamicPicker for date input.

:::demo

```html
<div>
    <span>Now selected type is: {{ dynamicCurrentValue }}</span>
    <br>
    <div>
        <tm-date-picker v-model="dynamic" ref="compo" type="dynamic" @typechange="value => dynamicCurrentValue = value" :disable-old-date="true" />
    </div>
</div>
```

:::

###  Enter Date

Basic date picker measured by 'day'.

:::demo The measurement is determined by the `type` attribute. You can enable quick options by creating a `picker-options` object with `shortcuts` property. The disabled date is set by `disabledDate`, which is a function.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <tm-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </tm-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <tm-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :picker-options="pickerOptions1">
    </tm-date-picker>

    <span class="demonstration">Picker with quick options with slot shortcut</span>
    <tm-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :picker-options="pickerOptions1">
      <div slot="shortcut-inner" slot-scope="data">
        {{data.text}}
        <tm-icon name="check" />
      </div>
    </tm-date-picker>

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
  <tm-date-picker
    v-model="value3"
    type="week"
    format="Week WW"
    placeholder="Pick a week">
  </tm-date-picker>
</div>
<div class="block">
  <span class="demonstration">Month</span>
  <tm-date-picker
    v-model="value4"
    type="month"
    placeholder="Pick a month">
  </tm-date-picker>
</div>
<div class="block">
  <span class="demonstration">Year</span>
  <tm-date-picker
    v-model="value5"
    type="year"
    placeholder="Pick a year">
  </tm-date-picker>
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
    <tm-date-picker
      v-model="value6"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </tm-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <tm-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :picker-options="pickerOptions2">
    </tm-date-picker>
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
    <tm-date-picker
      v-model="value8"
      type="date"
      placeholder="Pick a date"
      default-value="2010-10-01">
    </tm-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <tm-date-picker
      v-model="value9"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      default-value="2010-10-01">
    </tm-date-picker>
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

###  Date Formats
Use `format` to control displayed text's format in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object. Below are supported format strings, using UTC 2017-01-02 03:04:05 as an example:

:::warning
Pay attention to capitalization
:::

| format | meaning | note | example |
|------|------|------|------|------|
| `yyyy` | year | | 2017 |
| `M`  | month | no leading 0 | 1 |
| `MM` | month | | 01 |
| `MMM` | month name short | | January = Jan |
| `MMMM` | month name | | January |
| `d`  | day | no leading 0 | 2 |
| `dd` | day | | 02 |
| `ddd` | day name short | | Sunday = Sun |
| `dddd` | day name | | Sunday |
| `H`  | hour | 24-hour clock; no leading 0 | 3 |
| `HH` | hour | 24-hour clock | 03 |
| `h`  | hour | 12-hour clock; must be used with `A` or `a`; no leading 0 | 3 |
| `hh` | hour | 12-hour clock; must be used with `A` or `a` | 03 |
| `m`  | minute | no leading 0 | 4 |
| `mm` | minute | | 04 |
| `s`  | second | no leading 0 | 5 |
| `ss` | second | | 05 |
| `A`  | AM/PM | only for `format`, uppercased | AM |
| `a`  | am/pm | only for `format`, lowercased | am |
| `timestamp` | JS timestamp | only for `value-format`; binding value will be a `number` | 1483326245000 |

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value10 }}</div>
    <tm-date-picker
      v-model="value10"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </tm-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Use value-format</span>
    <div class="demonstration">Value: {{ value11 }}</div>
    <tm-date-picker
      v-model="value11"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </tm-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Timestamp</span>
    <div class="demonstration">Value：{{ value12 }}</div>
    <tm-date-picker
      v-model="value12"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="timestamp">
    </tm-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: '',
        value11: '',
        value12: ''
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
    <p>Component value：{{ value13 }}</p>
    <tm-date-picker
      v-model="value13"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="['00:00:00', '23:59:59']">
    </tm-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value13: []
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
| format | format of the displayed value in the input box | string | see [date formats](#/en-US/component/date-picker#date-formats) | yyyy-MM-dd |
| align | alignment | left/center/right | left |
| popper-class | custom class name for DatePicker's dropdown | string | — | — |
| picker-options | additional options, check the table below | object | — | {} |
| range-separator | range separator | string | — | '-' |
| default-value | optional, default date of the calendar | Date | anything accepted by `new Date()` | — |
| default-time | optional, the time value to use when selecting date range | string[] | Array with length 2, each item is a string like `12:00:00`. The first item for the start date and then second item for the end date | — |
| value-format | optional, format of binding value. If not specified, the binding value will be a Date object | string | see [date formats](#/en-US/component/date-picker#date-formats) | — |
| name | same as `name` in native input | string | — | — |
| unlink-panels | unlink two date-panels in range-picker | boolean | — | false |
| prefix-icon | Custom prefix icon class | string | — | tm-icon--date |
| clear-icon | Custom clear icon class | string | — | tm-icon--circle-close |
| disable-old-date | Disable select days before today | boolean | — | false |
| inline | Render calendar without popover | boolean | — | false |
| hide-year-header | Hide block with year select | boolean | — | false |

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
| clear | clear data | — |

### Slots and scopedSlots
| name | type | Description |
|------|--------|--------|-------|
| cell | scopedSlot | Extends cell with calendar date<br><br>`@typedef {Object} props`<br>`@prop {string} text - date`<br>`@prop {number} row`<br>`@prop {number} column`<br>`@prop {'today'|'normal'|'prev-month'|'next-month'} type`<br>`@prop {boolean} start`<br>`@prop {boolean} end`<br>`@prop {boolean} inRange`<br>`@prop {boolean} disabled` |
| shortcut-inner | scopedSlot | Extends shortcut-inner button |
| topBlock | slot | Extends top place of popover |
| bottomBlock | slot | Extends bottom place of popover |
