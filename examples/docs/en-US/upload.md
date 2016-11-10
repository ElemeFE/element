## Upload


Upload your files by `click` or `drag` event

### Click to upload files

Add `slot` attribute to customize the type of upload button and text hints.

:::demo

```html
<el-upload
  action="http://jsonplaceholder.typicode.com/"
  :on-preview="handlePreview"
  :on-remove="handleRemove">
  <el-button size="small" type="primary">click to upload</el-button>
  <div class="el-upload__tip" slot="tip">only jpg/png allowed,and the size must be less than 500kb</div>
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

### Drag to upload

You can drag your file to certain field to upload it.

Specifying the `type` attribute as `drag` will change the upload control to a drag-and-drop style. Additionally, you can use the `multiple` attribute to control whether multiple-selections are supported or not. And `on-preview` and `on-remove` are hook functions that will be called after clicked on the uploaded file link and after clicked to remove the uploaded file, respectively.

:::demo

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
  <div class="el-dragger__text">drag file to here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">only jpg/png allowed,and the size must be less than 500kb</div>
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

### Upload single image

This mode is specifically for uploading image, and the thumbnail will display in origin place.

`thumbnail-mode` attribute allows you to force the upload content to image only, and can display the thumbnail of the uploaded image.

:::demo

```html
<el-upload
  action="http://jsonplaceholder.typicode.com/"
  type="drag"
  :thumbnail-mode="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
>
  <i class="el-icon-upload"></i>
  <div class="el-dragger__text">drag file to here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">only jpg/png allowed,and the size must be less than 500kb</div>
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

### Attributes

Attribute| Description | Type | options | Default
----| ----| ----| ----| ----
action | required, the location you upload to | string | --- |---
headers | optional, set request headers | object | --- | ---
multiple | optional, whether multiple-selections are supported or not| boolean | --- | ---
file | optional, The field name of the uploaded file | string | --- | ---
with-credentials | send cookies or not | boolean | --- | ---
show-uploadList | show the uploaded file list or not | boolean | --- |---
type | the type of upload control | string | select, drag | select
accept | optional, limits the type of upload file, but if the upload type is `drag`, you can upload all the file types | string | --- | ---
on-preview | optional, hook function when click the uploaded files | function(file) | --- | ---
on-remove | optional, hook function when remove the files | function(file, fileList) | --- | ---
on-success | optional, hook function when upload files successfully | function(file, fileList) | --- | ---
on-error | optional, hook function when some errors occured | function(err, file, fileList) | --- | ---
before-upload | optional, hook function before upload the file, the parameter is the file that uploaded, if the hook function return `false` or `Promise` value, it will end upload progress | function(file) | --- | ---
thumbnail-mode | whether image mode is set or not, the image mode will display the picture thumbnails | boolean | --- | false


