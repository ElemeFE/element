# el-input
> A el-input component for Vue.js.

# Demo
http://element-component.github.io/el-input

# Installation
```shell
npm i el-input -D
```

# Usage
```javascript
import Vue from 'vue'
import ElInput from 'el-input'
import 'element-theme-default/dist/input.css'

Vue.use(ElInput)
```

or

```javascript
import Vue from 'vue'
import { ElInput } from 'el-input'

Vue.component('el-input', ElInput)
```

# Options

|     name    | description |     type    |   default   |
|-------------|-------------|-------------|-------------|
| model | 绑定值，需双向绑定 | string|number ||
| placeholder | 输入框占位文本 | string ||
| suggestion | 输入建议 | string[] ||
| disabled | 是否禁用 | boolean | false |
| cache | 是否需要缓存 | boolean | false |
| effect | 输入框效果，允许 text, number, special | string | text |

# Development
```shell
make dev

# test
make test

# build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
