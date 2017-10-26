# element-upload
> A element-upload component for Vue.js.

## Demo
http://element-component.github.io/element-upload

## Installation
```shell
npm i element-upload -D
```

## Usage
```javascript
import Vue from 'vue'
import ElUpload from 'element-upload'
import 'element-theme-chalk/dist/upload.css'

Vue.use(ElUpload)
```

or

```javascript
import Vue from 'vue'
import ElUpload from 'element-upload'

Vue.component('el-upload', ElUpload)
```

### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| action | 必选参数, 上传的地址 | string | — | — |
| headers | 可选参数, 设置上传的请求头部 | object | — | — |
| multiple | 可选参数, 是否支持多选文件 | boolean | — | — |
| data | 可选参数, 上传时附带的额外参数 | object | — | — |
| name | 可选参数, 上传的文件字段名 | string | — | file |
| with-credentials | 支持发送 cookie 凭证信息 | boolean | — | false |
| show-file-list | 是否显示已上传文件列表 | boolean | — | true |
| type | 上传控件类型 | string | select,drag | select |
| accept | 可选参数, 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效）| string | — | — |
| on-preview | 可选参数, 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据 | function(file) | — | — |
| on-remove | 可选参数, 文件列表移除文件时的钩子 | function(file, fileList) | — | — |
| on-success | 可选参数, 文件上传成功时的钩子 | function(response, file, fileList) | — | — |
| on-error | 可选参数, 文件上传失败时的钩子 | function(err, response, file) | — | — |
| before-upload | 可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 | function(file) | — | — |
| thumbnail-mode | 是否设置为图片模式，该模式下会显示图片缩略图 | boolean | — | false |
| default-file-list | 默认已上传的文件列表, 例如: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}] | array | — | [] |

### Methods
| 方法名      | 说明          | 参数 |
|---------- |-------------- | - |
| clearFiles | 清空已上传的文件列表 | — |

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
