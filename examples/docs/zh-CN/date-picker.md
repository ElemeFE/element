<script>
  module.exports = {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
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

## DatePicker 日期选择器

用于选择或输入日期

###  选择日

以「日」为基本单位，基础的日期选择控件

:::demo 基本单位由`type`属性指定。快捷选项需配置`picker-options`对象中的`shortcuts`，禁用日期通过 `disabledDate` 设置，传入函数
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
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

###  其他日期单位

通过扩展基础的日期选择，可以选择周、月、年

:::demo
```html
<div class="block">
  <span class="demonstration">周</span>
  <el-date-picker
    v-model="value3"
    type="week"
    format="yyyy 第 WW 周"
    placeholder="选择周">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">月</span>
  <el-date-picker
    v-model="value4"
    type="month"
    placeholder="选择月">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">年</span>
  <el-date-picker
    v-model="value5"
    align="right"
    type="year"
    placeholder="选择年">
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

###  选择日期范围

可在一个选择器中便捷地选择一个时间范围

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      placeholder="选择日期范围"
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
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
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
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | true |
| size          | 输入框尺寸     | string          | large, small, mini  | — |
| placeholder | 占位内容 | string | — | — |
| type | 显示类型 | string | year/month/date/week/ datetime/datetimerange/daterange | date |
| format | 时间日期格式化 | string | 年 `yyyy`，月 `MM`，日 `dd`，小时 `HH`，分 `mm`，秒 `ss` | yyyy-MM-dd |
| align | 对齐方式 | string | left, center, right | left |
| popper-class | DatePicker 下拉框的类名 | string | — | — |
|picker-options | 当前时间日期选择器特有的选项参考下表 | object |  — | {} |
| range-separator | 选择范围时的分隔符 | string | - | ' - ' |
| default-value | 可选，DatePicker打开时默认显示的时间 | Date | 可被new Date()解析 | - |

### Picker Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[] | — | — |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | — | — |
| firstDayOfWeek | 周起始日 | Number | 1 到 7 | 7 |
| onPick | 选中日期后会执行的回调，只有当 `daterange` 或 `datetimerange` 才生效 | Function({ maxDate, minDate }) | - | - |

### Shortcuts
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | 标题文本 | string | — | — |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date()) | function | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------|--------|---------|
| change | 当 input 的值改变时触发，返回值和文本框一致 | 格式化后的值 |

