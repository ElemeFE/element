<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
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
## Upload

Upload files by clicking or drag-and-drop

### Click to upload files

:::demo Customize upload button type and text using `slot`.
```html
<el-upload
  action="//jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :default-file-list="fileList">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
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

You can drag your file to a certain area to upload it.

:::demo Specifying the `type` attribute as `drag` will change the upload control to a drag-and-drop style. Additionally, you can use the `multiple` attribute to control whether uploading multiple files is permitted. `on-preview` and `on-remove` are hook functions that will be called after clicking on the uploaded file link and after clicking to remove the uploaded file, respectively.
```html
<el-upload
  action="//jsonplaceholder.typicode.com/posts/"
  type="drag"
  :multiple="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleSuccess"
  :on-error="handleError"
  :default-file-list="fileList"
>
  <i class="el-icon-upload"></i>
  <div class="el-dragger__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
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

### Upload single image

This mode is specifically for image uploading, and the thumbnail will display in the origin place.

:::demo `thumbnail-mode` attribute allows you to force the upload content to image only, and can display the thumbnail of the uploaded image.
```html
<el-upload
  action="//jsonplaceholder.typicode.com/posts/"
  type="drag"
  :thumbnail-mode="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :default-file-list="fileList"
>
  <i class="el-icon-upload"></i>
  <div class="el-dragger__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
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
Attribute      | Description          | Type      | Accepted Values       | Default
----| ----| ----| ----| ----
action | required, request URL | string | — | —
headers | request headers | object | — | —
multiple | whether uploading multiple files is permitted | boolean | — | —
data | additions options of request | object | — | —
name | key name for uploaded file | string | — | file
with-credentials | whether cookies are sent | boolean | — |false
show-upload-list | whether to show the uploaded file list | boolean | — | true
type | type of Upload | string | select/drag | select
accept | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode` is `true` | string | — | —
on-preview | hook function when clicking the uploaded files | function(file) | — | —
on-remove | hook function when files are removed | function(file, fileList) | — | —
on-success | hook function when uploaded successfully | function(response, file, fileList) | — | —
on-error | hook function when some errors occurs | function(err, response, file) | — | —
before-upload | hook function before uploading with the file to be uploaded as its parameter. If `false` or a `Promise` is returned, uploading will be aborted | function(file) | — | —
thumbnail-mode | whether thumbnail is displayed | boolean | — | false
default-file-list | default uploaded files, i.e: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}] | array | — | []

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| clearFiles | clear the uploaded file list | — |
