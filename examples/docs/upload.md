<style>
  .upload-tip {
    color: #8492a6;
    font-size: 12px;
    margin-top: 7px;
  }
  .demo-box {
    margin-bottom: 24px;
  }
</style>
<script>
  export default {
    methods: {
      handleChange(file, fileList, event) {
        console.log(file, fileList, event);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeUpload(file) {
        if (file.size > 40000000) {
          console.warn(file.name + ' is too large!');
          return false;
        }
        return true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSuccess(file, fileList) {
        console.log(file, fileList);
      },
      handleError(err, file, fileList) {
        console.log(err);
      }
    }
  }
</script>

## Upload 上传

通过点击或者拖拽上传文件

### 点击上传多个文件

::: demo 通过 slot 你可以传入自定义的上传按钮类型和文字提示。
```html
<el-upload
  action="http://jsonplaceholder.typicode.com/"
  :on-preview="handlePreview"
  :on-remove="handleRemove">
  <el-button size="small" type="primary">点击上传</el-button>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<script>
  export default {
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### 拖拽上传

可将文件拖入指定区域进行上传。

::: demo 将 `type` 属性指定为 'drag' 可以将上传控件变为支持拖拽的形式，并且你可以通过 `multiple` 属性来控制是否支持多选，`on-preview` 和 `on-remove` 是一个钩子函数，分别在点击上传后的文件链接和点击移除上传后的文件后被调用。
```html
<el-upload
  action="http://jsonplaceholder.typicode.com/"
  type="drag"
  :multiple="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleSuccess"
  :on-error="handleError"
>
  <i class="el-icon-upload"></i>
  <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<script>
  export default {
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### 上传单个图片

专门针对图片类型文件的上传，上传后在原位置显示缩略图。

::: demo `thumbnail-mode` 属性允许你将上传组件强制只允许图片上传，并支持展示上传文件的缩略图。
```html
<el-upload
  action="http://jsonplaceholder.typicode.com/"
  type="drag"
  :thumbnail-mode="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
>
  <i class="el-icon-upload"></i>
  <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<script>
  export default {
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### Upload Attribute

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| action | 必选参数, 上传的地址 | string | — | — |
| headers | 可选参数, 设置上传的请求头部 | object | — | — |
| multiple | 可选参数, 是否支持多选文件 | boolean | — | — |
| file | 可选参数, 上传的文件字段名 | string | — | file |
| with-credentials | 支持发送 cookie 凭证信息 | boolean | — | false |
| show-uploadList | 是否显示已上传文件列表 | boolean | — | true |
| type | 上传控件类型 | string | select,drag | select |
| accept | 可选参数, 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), 拖拽文件上传时不受此参数影响 | string | — | — |
| on-preview | 可选参数, 点击已上传的文件链接时的钩子 | function(file) | — | — |
| on-remove | 可选参数, 文件列表移除文件时的钩子 | function(file, fileList) | — | — |
| on-success | 可选参数, 文件上传成功时的钩子 | function(file, fileList) | — | — |
| on-error | 可选参数, 文件上传失败时的钩子 | function(err, file, fileList) | — | — |
| before-upload | 可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 | function(file) | — | — |
| thumbnail-mode | 是否设置为图片模式，该模式下会显示图片缩略图 | boolean | — | false |
