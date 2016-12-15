# element-tag
> A element-tag component for Vue.js.

## Demo
http://element-component.github.io/element-tag

## Installation
```shell
npm i element-tag -D
```

## Usage
```javascript
import Vue from 'vue'
import ElTag from 'element-tag'
import 'element-theme-default/dist/tag.css'

Vue.use(ElTag)
```

or

```javascript
import Vue from 'vue'
import ElTag from 'element-tag'

Vue.component('el-tag', ElTag)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | primary/gray/success/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| close-transition | 是否禁用关闭时的渐变动画 | boolean | — | false |
| hit | 是否有边框描边 | boolean | — | false |
| color | 背景色 | string | — | — |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭tag时触发的事件 | — |

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
