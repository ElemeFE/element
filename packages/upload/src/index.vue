<script>
import UploadList from './upload-list';
import Upload from './upload';
import IframeUpload from './iframe-upload';
import ElProgress from 'element-ui/packages/progress';

function noop() {
}

export default {
  name: 'ElUpload',

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
    draggable: Boolean,
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
    onProgress: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    fileList: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      uploadFiles: [],
      dragOver: false,
      draging: false,
      tempIndex: 1
    };
  },

  watch: {
    fileList: {
      immediate: true,
      handler(fileList) {
        this.uploadFiles = fileList.map(item => {
          if (!item.uid) {
            item.uid = Date.now() + this.tempIndex++;
          }
          return item;
        });
      }
    },
    uploadFiles(value, oldValue) {
      // console.log(value, oldValue);
    }
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

      try {
        _file.url = URL.createObjectURL(file);
      } catch (err) {
        console.error(err);
        return;
      }

      this.uploadFiles.push(_file);
    },
    handleProgress(ev, file) {
      var _file = this.getFile(file);
      this.onProgress(ev, _file, this.uploadFiles);
      _file.percentage = ev.percent || 0;
    },
    handleSuccess(res, file) {
      var _file = this.getFile(file);

      if (_file) {
        _file.status = 'finished';
        _file.response = res;

        this.onSuccess(res, _file, this.uploadFiles);

        setTimeout(() => {
          _file.showProgress = false;
        }, 1000);
      }
    },
    handleError(err, response, file) {
      var _file = this.getFile(file);
      var fileList = this.uploadFiles;

      _file.status = 'fail';

      fileList.splice(fileList.indexOf(_file), 1);

      this.onError(err, response, file);
    },
    handleRemove(file) {
      var fileList = this.uploadFiles;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    },
    getFile(file) {
      var fileList = this.uploadFiles;
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
      this.uploadFiles = [];
    },
    initDraggable() {
      const target = this.$el;
      const _this = this;
      target.addEventListener('dragover', event => {
        event.preventDefault();
        _this.draggable = true;
      });
      target.addEventListener('drop', event => {
        event.preventDefault();
        _this.draggable = false;
      });
      target.addEventListener('dragleave', event => {
        event.preventDefault();
        _this.draggable = false;
      });
    }
  },

  mounted() {
    if (this.draggable) {
      this.initDraggable();
    }
  },

  render(h) {
    var uploadList;

    if (this.showUploadList && !this.thumbnailMode && this.uploadFiles.length) {
      uploadList = (
        <UploadList
          files={this.uploadFiles}
          on-remove={this.handleRemove}
          on-preview={this.handlePreview}>
        </UploadList>
      );
    }

    var props = {
      props: {
        type: this.type,
        draggable: this.draggable,
        action: this.action,
        multiple: this.multiple,
        'before-upload': this.beforeUpload,
        'with-credentials': this.withCredentials,
        headers: this.headers,
        name: this.name,
        data: this.data,
        accept: this.thumbnailMode ? 'image/gif, image/png, image/jpeg, image/bmp, image/webp' : this.accept,
        'on-start': this.handleStart,
        'on-progress': this.handleProgress,
        'on-success': this.handleSuccess,
        'on-error': this.handleError,
        'on-preview': this.handlePreview,
        'on-remove': this.handleRemove
      },
      ref: 'upload-inner'
    };

    var uploadComponent = (typeof FormData !== 'undefined' || this.$isServer)
        ? <upload {...props}>{this.$slots.default}</upload>
        : <iframeUpload {...props}>{this.$slots.default}</iframeUpload>;

    return (
      <div class="el-upload">
        {uploadList}
        {uploadComponent}
        {this.$slots.tip}
      </div>
    );

    // if (this.type === 'drag') {
    //   return (
    //     <div class="el-upload">
    //       {uploadComponent}
    //       {this.$slots.tip}
    //       {uploadList}
    //     </div>
    //   );
    // }
  }
};
</script>
