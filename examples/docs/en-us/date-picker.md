<script>
  module.exports = {
    data() {
      return {
        pickerOptions1: {
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
            text: 'One week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: 'The latest week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'The latest month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'The latest three months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '2016-08-10',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: ''
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

## Date Picker

Use Date Picker for date input.

###  Enter Date

It's a standard date picker component measured by 'day'.

:::demo the unit is determined by `type` attributes. You can enable quick options by creating an `picker-options` object with `shortcuts` property, The disabled date is set by `disabledDate`, Incoming function.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Enter date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Enter date"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
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
            text: 'One week agao',
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

### Additional Date Units

You can choose week, month or year by extending the standard date picker component.

:::demo

```html
<div class="block">
  <span class="demonstration">Week</span>
  <el-date-picker
    v-model="value3"
    type="week"
    format="yyyy the WW-th week"
    placeholder="Enter week">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Month</span>
  <el-date-picker
    v-model="value4"
    type="month"
    placeholder="Enter month">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Year</span>
  <el-date-picker
    v-model="value5"
    type="year"
    placeholder="Enter year">
  </el-date-picker>
</div>
```

:::

###  Enter Date Range

You can choose a date range in the picker.

:::demo

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      placeholder="Enter date range"
      style="width: 220px">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      placeholder="Enter date range"
      :picker-options="pickerOptions2"
      style="width: 220px">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: 'The latest week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'The latest month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'The latest three months',
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

### Attributes
| Attribute      | Description          | Type      | Options                          | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | Read only | boolean | — | false |
| placeholder | Placeholder | string | — | — |
| type | Date picker type | string | year/month/date/datetime/week | date |
| format | Date format | string | year `yyyy` month `MM` day `dd`，<br>hour `HH`, minute `mm`, second `ss` | yyyy-MM-dd |
| :picker-options | Quick options, it accepts a `picker-options` object with a `shortcuts` property<br>Check the table below for more information about shortcuts | object[] | — | — |
| align | Align | left, center, right | left |

### shortcuts
**Note:** shortcuts is a property of picker-options object. It's an array and contains objects with following properties.
| Property      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | Title | string | — | — |
| onClick | Callback function when click the option, input parameter is `vm`. <br> You can change the picker value by emit the `pick` event.<br> Example: `vm.$emit('pick', new Date())`| function | — | — |