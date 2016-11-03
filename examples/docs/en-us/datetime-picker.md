
## Date-time Picker

Select date and time in one picker.

###  Date-time

:::demo You can select date and time in one picker at the same time by setting `type` to `datetime`. The way to use shortcuts is the same as Date Picker.

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
            text: 'A week before',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

### Date and time ranges

:::demo You can select date and time ranges by set `type` to `datetimerange`.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value3"
      type="datetimerange"
      placeholder="Select time range"
      style="width:350px">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      placeholder="Select time range"
      align="right"
      style="width:350px">
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
            text: 'Last three months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: '',
        value4: ''
      };
    }
  };
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | Read only | boolean | — | false |
| placeholder | Placeholder | string | — | — |
| type | Date-time picker type | string | year/month/date/datetime/week | date |
| format | Date format | string | year `yyyy`, month `MM`, day `dd`, <br>hour `HH`, minute `mm`, second `ss` | yyyy-MM-dd |
| shortcuts | An array of shortcut options;<br>Configurations are in next table | object[] | — | — |

### Shortcuts
| Property      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | Title | string | — | — |
| onClick | Callback function after been clicked, parameter is vm. You can set the picker value by emit the 'pick' event.<br>E.g. vm.$emit('pick', new Date()) | function | — | — |
