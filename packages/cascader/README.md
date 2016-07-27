# el-cascader
> A el-cascader component for Vue.js.

## Installation
```shell
npm i el-cascader -D
```

## Usage
```javascript
import Vue from 'vue'
import ElCascader from 'el-cascader'
import 'theme-default/dist/cascader.css'

Vue.use(ElCascader)
```

or

```javascript
import Vue from 'vue'
import { ElCascader } from 'el-cascader'

Vue.component('el-cascader', ElCascader)
```


## Options

### el-cascader

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|model| 绑定值| string | | |
|placeholder| 占位符| string | | | |


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
