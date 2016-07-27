<script>
  module.exports = {
    data() {
      return {
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
        }
      };
    }
  };
</script>

## 日期点

###  日

以『日』为基本单位

<el-date-picker
  type="date"
  placeholder="选择日期">
</el-date-picker>

```html
<el-date-picker
  type="date"
  placeholder="选择日期">
</el-date-picker>
```

###  周

以『周』为基本单位

<el-date-picker
  type="week"
  format="yyyy 第 WW 周"
  placeholder="选择周">
</el-date-picker>

```html
<el-date-picker
  type="week"
  format="yyyy 第 WW 周"
  placeholder="选择周">
</el-date-picker>
```

###  月

以『月』为基本单位

<el-date-picker
  type="month"
  placeholder="选择月">
</el-date-picker>

```html
<el-date-picker
  type="month"
  placeholder="选择月">
</el-date-picker>
```

###  年

以『年』为基本单位

<el-date-picker
  type="year"
  placeholder="选择日期">
</el-date-picker>

```html
<el-date-picker
  type="year"
  placeholder="选择日期">
</el-date-picker>
```

###  含快捷选项

左侧区域可配置快捷选项，例如『今天』、『昨天』等

<el-date-picker
  type="date"
  placeholder="选择日期"
  :picker-options="pickerOptions1">
</el-date-picker>

```html
<el-date-picker
  type="date"
  placeholder="选择日期"
  :picker-options="pickerOptions1">
</el-date-picker>

<script>
  module.exports = {
    data() {
      return {
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
        }
      };
    }
  };
</script>
```

## 日期范围

###  日期范围

在一个选择器中选择

<el-date-picker
  type="daterange"
  placeholder="选择日期范围"
  style="width: 220px">
</el-date-picker>

```html
<el-date-picker
  type="daterange"
  placeholder="选择日期范围"
  style="width: 220px">
</el-date-picker>
```

###  含快捷选项

左侧区域可配置快捷选项，例如『最近一周』、『最近一个月』等

<el-date-picker
  type="daterange"
  placeholder="选择日期范围"
  :picker-options="pickerOptions2"
  style="width: 220px">
</el-date-picker>

```html
<el-date-picker
  type="daterange"
  placeholder="选择日期范围"
  :picker-options="pickerOptions2"
  style="width: 220px">
</el-date-picker>

<script>
  module.exports = {
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
        }
      };
    }
  };
</script>
```

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定值，需双向绑定 | String |   |  |
| readonly | 只读 | Boolean |  | false |
| placeholder | 占位内容 | String |  |  |
| type | 显示类型 | String | year, month, date, datetime, week | date |
| format | 时间日期格式化 | String | 年 `yyyy`, 月 `MM`, 日 `dd`, 小时 `HH`, 分 `mm`, 秒 `ss` | 'yyyy-MM-dd' |
| shortcuts | 快捷选项列表，配置信息查看下表 | Object[] | | |

### shortcuts
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text |  标题 | String | | |
| onClick | 选中后会调用函数，参数是 vm，设置值通过触发 'pick' 事件。例如 vm.$emit('pick', new Date()) | Function | | |
