# el-select
> A el-select component for Vue.js.

## dependencies
- vue-clickoutside

## Installation
```shell
npm i el-select -D
```

## Usage
```javascript
  import vue from 'Vue'

  // import component
  import Component from 'el-select'
  import 'el-select/lib/style.css'

  Vue.use(Component)
```

or
```javascript
import {
  ElSelect,
  ElOption,
  ElOptionGroup
} from 'el-select'

Vue.component('el-select', ElSelect)
Vue.component('el-option', ElOption)
Vue.component('el-option-group', ElOptionGroup)
```

## API

### el-elect

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| model              | 绑定值                                                   | string,  string[] |             |        |
| type              | 显示类型, search 会带搜索框，multiple 允许多选                                                  | string | normal, search, multiple | normal |
| placeholder        | 输入框占位文本                                           | string            |             |        |
| hint-placeholder        | 获取焦点后显示的占位文本                                           | string            |             |        |
| search-placeholder | 搜索框占位内容                                           | string            |             |        |
| search-model | 搜索结果绑定值                                           | string            |             |        |
| disabled           | 禁用                                                     | boolean           | true, false | false  |
| change       | 选中值后的回调函数, 返回当前选中的值                                                 | function           | |   ||

### el-option
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| label| 显示值，可选 | string|             |        |
| value| 真实值| string|             |        |
| remark| 额外信息，将显示在右边| string|             |        |
| disabled           | 禁用| boolean           | true, false | false  |

### el-option-group

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| hide-title        | 隐藏标题| boolean            |true, false |false|
| hide-list        | 隐藏列表| boolean            |true, false |false|
| title| 真实值| 分组标题|             |        |


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
