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
      }
    }
  }
</script>

## 基础使用

<div class="demo-box">
  <el-upload action="http://element.alpha.elenet.me/upload" :on-preview="handlePreview" :on-remove="handleRemove">
    <el-button size="small" type="primary">点击上传</el-button>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>

```html
<el-upload action="http://element.alpha.elenet.me/upload" :on-preview="handlePreview" :on-remove="handleRemove">
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

## 拖拽文件上传

<div class="demo-box">
  <el-upload
    action="http://element.alpha.elenet.me/upload"
    type="drag"
    :multiple="true"
    :on-preview="handlePreview"
    :on-remove="handleRemove">
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>

```html
<el-upload
  action="http://element.alpha.elenet.me/upload"
  type="drag"
  :multiple="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove">
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

## 图片缩略图模式

上传文件类型限制为只能上传图片，并可展示本地缩略图，该模式暂不支持多选

<div class="demo-box">
  <el-upload
    action="http://element.alpha.elenet.me/upload"
    type="drag"
    :thumbnail-mode="true"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
  >
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>

```html
<el-upload
  action="http://element.alpha.elenet.me/upload"
  type="drag"
  :thumbnail-mode="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
>
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

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| action | 必选参数, 上传的地址 | string | | |
| headers | 可选参数, 设置上传的请求头部 | object |  |  |
| multiple | 可选参数, 是否支持多选文件 | boolean | | |
| file | 可选参数, 上传的文件字段名 | string | | file |
| withCredentials | 支持发送 cooking 凭证信息 | boolean | | false |
| showUploadList | 是否显示已上传文件列表 | boolean | | true |
| type | 上传控件类型 | string | select,drag | select |
| accept | 可选参数, 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), 拖拽文件上传时不受此参数影响 | string |  |  |
| onPreview | 可选参数, 点击已上传的文件链接时的钩子 | function(file) |  |  |
| onRemove | 可选参数, 文件列表移除文件时的钩子 | function(file, fileList) |  |  |
| beforeUpload | 可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 | function(file) |  |  |
| thumbnailMode | 是否设置为图片模式，该模式下会显示图片缩略图 | boolean | | false |
| type | 上传控件类型 | string | select,drag | select |
