# element-form
> A element-form component for Vue.js.

## Demo
http://element-component.github.io/element-form

## Installation
```shell
npm i element-form -D
```

## Usage
```javascript
import Vue from 'vue'
import ElForm from 'element-form'
import 'element-theme-default/dist/form.css'

Vue.use(ElForm)
```

or

```javascript
import Vue from 'vue'
import { ElForm, ElFormItem } from 'element-form'

Vue.component('el-form', ElForm)
Vue.component('el-form-item', ElForm)
```

### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| inline    | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置 | string |  right/left/top            | right |
| label-width | 表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |

### Form Methods

| 方法名      | 说明          |
|---------- |-------------- |
| validate(cb) | 对整个表单进行校验的方法 |
| validateField(prop, cb) | 对部分表单字段进行校验的方法 |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 |

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px' | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | bolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |

## Development
```shell
make dev

## test
make test

## build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
