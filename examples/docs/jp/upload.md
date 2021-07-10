## アップロード

クリックまたはドラッグ＆ドロップでファイルをアップロード

### クリックしてファイルをアップロード

:::demo `slot` を用いてアップロードボタンの種類とテキストをカスタマイズする。最大アップロード数を制限するために `limit` と `on-exceed` を設定し、制限を超えたときの方法を指定します。さらに、`before-remove` フックでファイルの削除を中止することもできる。
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
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
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
      }
    }
  }
</script>
```
:::

### ユーザーアバターのアップロード

アップロードするファイルの形式やサイズを制限するには、`before-upload` フックを使う。

:::demo
```html
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
```
:::

### フォトウォール

fileListのスタイルを変更するには `list-type` を用いる。

:::demo
```html
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
```
:::

### カスタムファイルのサムネイル

デフォルトのサムネイルテンプレートを変更するには、`scoped-slot` を用いる。

:::demo
```html
<el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>
```
:::

### サムネイル付きFileList

:::demo
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
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

### ファイルリスト制御

`on-change` フック関数を使ってアップロードファイルの一覧を制御する

:::demo
```html
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    data() {
      return {
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
</script>
```
:::

### ドラッグしてアップロード

ファイルを特定の場所にドラッグしてアップロードすることができます。

:::demo
```html
<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
```
:::

### 手動アップロード

:::demo
```html
<el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">select file</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to server</el-button>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
<script>
  export default {
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      }
    }
  }
</script>
```
:::

### 属性
Attribute      | Description          | Type      | Accepted Values       | Default
----| ----| ----| ----| ----
action | 必須、リクエストURL | string | — | —
headers | リクエストヘッダ | object | — | —
multiple | 複数ファイルのアップロードが許可されているかどうか | boolean | — | —
data | リクエストの追加オプション | object | — | —
name | アップロードファイルのキー名 | string | — | file
with-credentials | クッキーを送信するかどうか | boolean | — |false
show-file-list | アップロードされたファイルリストを表示するかどうか | boolean | — | true
 drag | ドラッグ＆ドロップモードを有効にするかどうか | boolean | — | false
accept | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode` is `true` | string | — | —
on-preview | アップロードされたファイルをクリックした時のフック関数 | function(file) | — | —
on-remove | ファイル削除時のフック関数 | function(file, fileList) | — | —
on-success | アップロード成功時のフック関数 | function(response, file, fileList) | — | —
on-error | エラー時のフック関数 | function(err, file, fileList) | — | —
on-progress | 進捗時のフック関数 | function(event, file, fileList) | — | — |
on-change | ファイル選択時、アップロード成功時、アップロード失敗時のフック関数 | function(file, fileList) | — | — |
before-upload | フック関数を使用してアップロードする前に、アップロードするファイルをパラメータとしてアップロードすることができます。`false`を返すか、`Promise`を返した後に拒否された場合、アップロードは中止されます。 | function(file) | — | —
before-remove | フック関数を使用して、ファイルとファイルリストをパラメータとしてファイルを削除することができます。`false`を返すか、`Promise`を返した後に拒否された場合、削除は中止される。 | function(file, fileList) | — | — |
thumbnail-mode | サムネイルが表示されているかどうか | boolean | — | false
file-list | default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array | — | []
list-type | ファイルリストの型 | string | text/picture/picture-card | text |
auto-upload | ファイルを自動アップロードするかどうか | boolean | — | true |
http-request | デフォルトの xhr の動作をオーバーライドし、独自のアップロードファイルのリクエストを実装できるようにします。 | function | — | — |
disabled | アップロードを無効にするかどうか | boolean | — | false |
limit | アップロード可能な最大数 | number | — | — |
on-exceed | リミットを突破した時のフック関数 | function(files, fileList) | — | - |

### スロット
| Name | Description |
|------|--------|
| trigger | ファイルダイアログをトリガーする内容 |
| tip | tipsの内容 |

### メソッド
| Methods Name | Description | Parameters |
|---------- |-------- |---------- |
| clearFiles | アップロードされたファイルリストをクリアします (このメソッドは `before-upload` フックではサポートされていません)。 | — |
| abort      | アップロード要求の取り消し                    | （ file: fileList's item ） |
| submit     | ファイルリストを手動でアップロード            |  —                         |
