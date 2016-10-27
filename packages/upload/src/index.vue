<script>
import UploadList from './upload-list';
import Upload from './upload';
import IframeUpload from './iframe-upload';
import ElProgress from 'element-ui/packages/progress';

function noop() {
}

export default {
  name: 'el-upload',

  components: {
    ElProgress,
    UploadList,
    Upload,
    IframeUpload
  },

  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    data: Object,
    multiple: Boolean,
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: Boolean,
    thumbnailMode: Boolean,
    showUploadList: {
      type: Boolean,
      default: true
    },
    accept: String,
    type: {
      type: String,
      default: 'select'
    },
    beforeUpload: Function,
    onRemove: {
      type: Function,
      default: noop
    },
    onChange: {
      type: Function,
      default: noop
    },
    onPreview: {
      type: Function,
      default: noop
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    }
  },

  data() {
    return {
      fileList: [],
      dragOver: false,
      draging: false,
      tempIndex: 1
    };
  },

  methods: {
    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      let _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      };

      if (this.thumbnailMode) {
        try {
          _file.url = URL.createObjectURL(file);
        } catch (err) {
          console.log(err);
          return;
        }
      }

      this.fileList.push(_file);
    },
    handleProgress(ev, file) {
      var _file = this.getFile(file);
      _file.percentage = ev.percent || 0;
    },
    handleSuccess(res, file) {
      var _file = this.getFile(file);

      if (_file) {
        _file.status = 'finished';
        _file.response = res;

        this.onSuccess(_file, this.fileList);

        setTimeout(() => {
          _file.showProgress = false;
        }, 1000);
      }
    },
    handleError(err, file) {
      var _file = this.getFile(file);
      var fileList = this.fileList;

      _file.status = 'fail';

      fileList.splice(fileList.indexOf(_file), 1);

      this.onError(err, _file, fileList);
    },
    handleRemove(file) {
      var fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    },
    getFile(file) {
      var fileList = this.fileList;
      var target;
      fileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    handlePreview(file) {
      if (file.status === 'finished') {
        this.onPreview(file);
      }
    },
    clearFiles() {
      this.fileList = [];
    }
  },

  render(h) {
    var uploadList;

    if (this.showUploadList && !this.thumbnailMode && this.fileList.length) {
      uploadList = (
        <UploadList
          files={this.fileList}
          on-remove={this.handleRemove}
          on-preview={this.handlePreview}>
        </UploadList>
      );
    }

    var props = {
      props: {
        type: this.type,
        action: this.action,
        multiple: this.multiple,
        'before-upload': this.beforeUpload,
        'with-credentials': this.withCredentials,
        headers: this.headers,
        name: this.name,
        data: this.data,
        accept: this.thumbnailMode ? 'image/*' : this.accept,
        'on-start': this.handleStart,
        'on-progress': this.handleProgress,
        'on-success': this.handleSuccess,
        'on-error': this.handleError,
        'on-preview': this.handlePreview,
        'on-remove': this.handleRemove
      }
    };

    var uploadComponent = typeof FormData !== 'undefined'
      ? <upload {...props}>{this.$slots.default}</upload>
      : <iframeUpload {...props}>{this.$slots.default}</iframeUpload>;

    if (this.type === 'select') {
      return (
        <div class="el-upload">
          {uploadList}
          {uploadComponent}
          {this.$slots.tip}
        </div>
      );
    }

    if (this.type === 'drag') {
      return (
        <div class="el-upload">
          {uploadComponent}
          {this.$slots.tip}
          {uploadList}
        </div>
      );
    }
  }
};
</script>
