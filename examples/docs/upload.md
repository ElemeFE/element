<style>
  .upload-tip {
    color: #8492a6;
    font-size: 12px;
    margin-top: 7px;
  }
  .demo-box {
    margin-bottom: 24px;
  }
  .el-draggeer__uploaded-image__btns {
    margin-top: 45px;
    color: #fff;
    font-size: 14px;

    & .btn {
      display: inline-block;

      & span {
        opacity: 0;
        transition: opacity .15s linear;
      }

      &:not(:first-child) {
        margin-left: 35px;
      }

      &:hover span {
        opacity: 1;
      }
    }
    & i {
      display: block;
      font-size: 26px;
      margin-bottom: 5px;
    }
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
      }
    }
  }
</script>

## 基础使用

<div class="demo-box">
  <el-upload action="http://127.0.0.1:9000/upload" @filechange="handleChange" @fileremove="handleRemove">
    <el-button size="small" type="primary">点击上传</el-button>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>

```html
<el-upload action="http://127.0.0.1:9000/upload" @filechange="handleChange" @fileremove="handleRemove">
  <el-button size="small" type="primary">点击上传</el-button>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
```

## 拖拽文件上传

<div class="demo-box">
  <el-upload action="http://127.0.0.1:9000/upload" type="drag" :multiple="true">
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>

```html
<el-upload action="http://127.0.0.1:9000/upload" type="drag" :multiple="true">
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
```

## 图片缩略图模式

上传文件类型限制为只能上传图片，并可展示本地缩略图，该模式暂不支持多选

<div class="demo-box">
  <el-upload action="http://127.0.0.1:9000/upload" type="drag" mode="image">
    <div class="el-draggeer__uploaded-image__btns" slot="interact">
      <span class="btn"><i class="el-icon-share"></i><span>分享图片</span></span>
      <span class="btn"><i class="el-icon-delete"></i><span>删除</span></span>
    </div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>

```html
<el-upload action="http://127.0.0.1:9000/upload" type="drag" mode="image">
  <div class="el-draggeer__uploaded-image__btns" slot="interact">
    <span class="btn"><i class="el-icon-share"></i><span>分享图片</span></span>
    <span class="btn"><i class="el-icon-delete"></i><span>删除</span></span>
  </div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
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
| filechange | 可选参数, 上传文件改变时的回调 | function(file, fileList, event) |  |  |
| fileremove | 可选参数, 文件列表移除文件时的回调 | function(file, fileList) |  |  |
| type | 上传控件类型 | string | select,drag | select |
