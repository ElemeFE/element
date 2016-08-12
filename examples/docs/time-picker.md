<style>
  .demo-box {
    .el-date-editor + .el-date-editor {
      margin-left: 10px;
    }
  }
</style>

## 固定时间点
提供几个固定的时间点供用户选择。
<div class="demo-box">
  <el-time-select
    v-model="value1"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间">
  </el-time-select>
</div>

```html
<el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>
```

## 任意时间点
可以选择任意时间。

<div class="demo-box">
  <el-time-picker
    v-model="value2"
    placeholder="任意时间点">
  </el-time-picker>
</div>

```html
<el-time-picker
  v-model="value"
  placeholder="任意时间点">
</el-time-picker>
```

### 通用 - 手动输入规则
<div class="demo-box">
  <el-time-picker
    v-model="value3"
    placeholder="任意时间点">
  </el-time-picker>
</div>

```html
<el-time-picker
  v-model="value"
  placeholder="任意时间点">
</el-time-picker>
```

### 通用 - 限制时间范围

<div class="demo-box">
  <el-time-picker
    v-model="value4"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
</div>

```html
<el-time-picker
  v-model="value"
  :picker-options="{
    selectableRange: '18:30:00 - 20:30:00'
  }"
  placeholder="任意时间点">
</el-time-picker>
```


## 固定时间范围

### 先选择开始时间
先选择开始时间,结束时间内备选项的状态会随之改变。

<div class="demo-box">
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
</div>

```html
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
```

### 先选择结束时间
开始时间的备选项不随结束时间的选择改变。

<div class="demo-box">
  <el-time-select
    placeholder="起始时间"
    v-model="startTime2"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime2"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime2
    }">
  </el-time-select>
</div>

```html
<el-time-select
  placeholder="起始时间"
  v-model="startTime2"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }">
</el-time-select>
<el-time-select
  placeholder="结束时间"
  v-model="endTime2"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30',
    minTime: startTime2
  }">
</el-time-select>
```

## 任意时间范围
可选择任意的时间范围。

<div class="demo-box">
  <el-time-picker
    is-range
    v-model="value5"
    placeholder="选择时间范围">
  </el-time-picker>
</div>

```html
<el-time-picker
  is-range
  v-model="value"
  placeholder="选择时间范围">
</el-time-picker>
```

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        startTime: '',
        endTime: '',
        startTime2: '',
        endTime2: ''
      };
    }
  }
</script>

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定值，需双向绑定 | String |   |  |
| readonly | 只读 | Boolean |  | false |
| placeholder | 占位内容 | String |  |  |
| format | 时间格式化 | String | 小时: `HH`, 分`mm`, 秒`ss` | 'HH:mm:ss' |
| picker-options | 当前时间日期选择器特有的选项，参考下表 | Object | | {} |

### time-select Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| start | 开始时间 | String |  |09:00 |
| end | 结束时间 | String |  |18:00 |
| step | 间隔时间 | String |  | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | String |  | 00:00 |

### time-picker Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| selectableRange | 可选时间段，例如 `18:30:00 - 20:30:00`，或者传入数组 `['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | String, Array |  |  |

