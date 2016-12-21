# element-progress
> A element-progress component for Vue.js.

## Demo
http://element-component.github.io/element-progress

## Installation
```shell
npm i element-progress -D
```

## Usage
```javascript
import Vue from 'vue'
import ElProgress from 'element-progress'
import 'element-theme-default/dist/progress.css'

Vue.use(ElProgress)
```

or

```javascript
import Vue from 'vue'
import ElProgress from 'element-progress'

Vue.component('el-progress', ElProgress)
```

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number          |     0-100          |     0    |
| type          | 进度条类型           | string         | line/circle | line |
| stroke-width  | 进度条的宽度，单位 px | number          | — | 6 |
| text-inside  | 进度条显示文字内置在进度条内（只在 type=line 时可用） | Boolean | — | false |
| status  | 进度条当前状态 | string | success/exception | — |
| width  | 环形进度条画布宽度（只在 type=circle 时可用） | number |  | 126 |
| show-text  | 是否显示进度条文字内容 | boolean | — | true |


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
