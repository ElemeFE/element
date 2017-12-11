# element-datepicker


## Installation
```shell
npm i element-datepicker -S
```

## Usage

A:
```javascript
import Vue from 'vue'
import ElDatePicker from 'element-datepicker'

Vue.use(ElDatePicker)
```

B:
```javascript
import Vue from 'vue'
import { DatePicker, TimePicker, TimeSelect } from 'element-datepicker'

Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(TimeSelect.name, TimeSelect);
```

C:
```html
<script src="path/to/vue/dist/vue.js"></script>
<script src="path/to/el-datepicker/index.js"></script>
<script>
  Vue.use(ElDatePicker);
</script>
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | 完全只读 | boolean | — | false |
| disabled | 禁用 | boolean | - | false |
| editable | 文本框可输入 | boolean | - | true |
| size          | 输入框尺寸     | string          | large, small, mini  | — |
| placeholder | 占位内容 | string | — | — |
| type | 显示类型 | string | year/month/date/week/ datetime/datetimerange/daterange | date |
| format | 时间日期格式化 | string | 年 `yyyy`，月 `MM`，日 `dd`，小时 `HH`，分 `mm`，秒 `ss`，AM/PM `A` | yyyy-MM-dd |
| align | 对齐方式 | string | left, center, right | left |
|picker-options | 当前时间日期选择器特有的选项参考下表 | object |  — | {} |

### Picker Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[] | - | - |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | - | - |

### Shortcuts
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | 标题文本 | string | — | — |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date()) | function | — | — |

## License
MIT
