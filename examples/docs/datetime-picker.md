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
        },
        value1: '',
        value2: '',
        value3: new Date(),
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: '',
        value16: ''
      };
    }
  };
</script>

## 日期和时间点

###  日期和时间点的选择（一）

在两个选择器中选择日期与时间。

<div class="demo-box">
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期">
  </el-date-picker>
  <el-time-picker
    v-model="value1"
    placeholder="选择时间">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="value"
  type="date"
  placeholder="选择日期">
</el-date-picker>
<el-time-picker
  v-model="value"
  placeholder="选择时间">
</el-time-picker>
```

###  日期和时间点的选择（二）

在一个选择器中选择日期与时间。

<div class="demo-box">
  <el-date-picker
    v-model="value2"
    type="datetime"
    placeholder="选择日期时间">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="value"
  type="datetime"
  placeholder="选择日期时间">
</el-date-picker>
```

###  含快捷选项（一）

左侧区域可配置快捷选项，例如『今天』、『昨天』等。

<div class="demo-box">
  <el-date-picker
   v-model="value3"
    type="date"
    :picker-options="pickerOptions1"
    placeholder="选择日期">
  </el-date-picker>
  <el-time-picker
   v-model="value3"
    placeholder="选择时间">
  </el-time-picker>
</div>

```html
<el-date-picker
  v-model="value"
  type="date"
  placeholder="选择日期"
 :picker-options="pickerOptions1">
</el-date-picker>
<el-time-picker
  v-model="value"
  placeholder="选择时间">
</el-time-picker>

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
        value: new Date()
      };
    }
  };
</script>
```

###  含快捷选项（二）

左侧区域可配置快捷选项，例如『今天』、『昨天』等。

<div class="demo-box">
  <el-date-picker
    v-model="value4"
    type="datetime"
    placeholder="选择日期时间"
    :picker-options="pickerOptions1">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="value"
  type="datetime"
  placeholder="选择日期时间"
  :picker-options="pickerOptions1"
  style="width: 300px;">
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
        },
        value: ''
      };
    }
  };
</script>
```

## 日期和时间范围

###  日期和时间范围的选择（一）

在两个选择器中选择。

<div class="demo-box">
  <el-date-picker
    v-model="value5"
    type="datetime"
    placeholder="选择开始时间">
  </el-date-picker>
  <el-date-picker
    v-model="value6"
    type="datetime"
    placeholder="选择结束时间">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="startTime"
  type="datetime"
  placeholder="选择开始时间">
</el-date-picker>
<el-date-picker
  v-model="endTime"
  type="datetime"
  placeholder="选择结束时间">
</el-date-picker>
```

###  日期和时间范围的选择（二）

在一个选择器中选择。

<div class="demo-box">
  <el-date-picker
    v-model="value7"
    type="datetimerange"
    placeholder="选择时间范围"
    style="width:340px">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="value"
  type="datetimerange"
  placeholder="选择时间范围"
  style="width:340px">
</el-date-picker>
```

###  含快捷选项

左侧区域可配置快捷选项，例如『最近一周』、『最近一个月』等。

<div class="demo-box">
  <el-date-picker
    v-model="value8"
    type="datetimerange"
    :picker-options="pickerOptions2"
    placeholder="选择时间范围"
    style="width:340px">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="value"
  type="datetimerange"
  :picker-options="pickerOptions2"
  placeholder="选择时间范围"
  style="width:340px">
</el-date-picker>

<script>
  module.exports = {
    data() {
      return {
        value: '',
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

###  日期范围和时间范围选择

在两个选择器中分别选择日期范围和时间范围。

<div class="demo-box">
  <el-date-picker
    v-model="value9"
    type="daterange"
    placeholder="选择日期范围"
    style="width:220px">
  </el-date-picker>
  <el-time-picker
    v-model="value10"
    is-range
    placeholder="选择时间范围">
  </el-time-picker>
</div>

```html
<el-date-picker
  v-model="date"
  type="daterange"
  placeholder="选择日期范围"
  style="width:220px">
</el-date-picker>
<el-time-picker
  v-model="time"
  is-range
  placeholder="选择时间范围">
</el-time-picker>
```

## 环比时间
选择两个时间作为限制条件，以得到统计量在这两个时间段的环比数据。

###  周环比

<div class="demo-box">
  <el-date-picker
    v-model="value11"
    type="week"
    placeholder="选择开始周">
  </el-date-picker>
  <el-date-picker
    v-model="value12"
    type="week"
    placeholder="选择结束周">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="startWeek"
  type="week"
  placeholder="选择开始周">
</el-date-picker>
<el-date-picker
  v-model="endWeek"
  type="week"
  placeholder="选择结束周">
</el-date-picker>
```

###  月环比

<div class="demo-box">
  <el-date-picker
    v-model="value13"
    type="month"
    placeholder="选择开始月">
  </el-date-picker>
  <el-date-picker
    v-model="value14"
    type="month"
    placeholder="选择结束月">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="startMonth"
  type="month"
  placeholder="选择开始月">
</el-date-picker>
<el-date-picker
  v-model="endMonth"
  type="month"
  placeholder="选择结束月">
</el-date-picker>
```

###  年环比

<div class="demo-box">
  <el-date-picker
    v-model="value15"
    type="year"
    placeholder="选择开始年">
  </el-date-picker>
  <el-date-picker
    v-model="value16"
    type="year"
    placeholder="选择结束年">
  </el-date-picker>
</div>

```html
<el-date-picker
  v-model="startYear"
  type="year"
  placeholder="选择开始年">
</el-date-picker>
<el-date-picker
  v-model="endYear"
  type="year"
  placeholder="选择结束年">
</el-date-picker>
```

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定值，需双向绑定 | String |   |  |
| format | 时间日期格式化 | String | 年 `yyyy`, 月 `MM`, 日 `dd`, 小时 `HH`, 分 `mm`, 秒 `ss` | 'yyyy-MM-dd' |
| type | 显示类型 | String | year, month, date, datetime, week | date |
| readonly | 只读 | Boolean |  | false |
| placeholder | 占位内容 | String |  |  |
| shortcuts | 快捷选项列表，配置信息查看下表 | Object[] | | |


### shortcuts
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text |  标题 | String | | |
| onClick | 选中后会调用函数，参数是 vm，设置值通过触发 'pick' 事件。例如 vm.$emit('pick', new Date()) | Function | | |


