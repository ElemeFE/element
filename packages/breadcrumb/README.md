# element-breadcrumb
> A element-breadcrumb component for Vue.js.

## Demo
http://element-component.github.io/element-breadcrumb

## Installation
```shell
npm i element-breadcrumb -D
```

## Usage
```javascript
import Vue from 'vue'
import ElBreadcrumb from 'element-breadcrumb'
import 'element-theme-default/dist/breadcrumb.css'

Vue.use(ElBreadcrumb)
```

or

```javascript
import Vue from 'vue'
import { ElBreadcrumb } from 'element-breadcrumb'
import { ElBreadcrumbItem } from 'element-breadcrumb'

Vue.component('el-breadcrumb', ElBreadcrumb)
Vue.component('el-breadcrumb-item', ElBreadcrumbItem)
```

### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |

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
