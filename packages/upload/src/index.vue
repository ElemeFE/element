<script>
import UploadList from './upload-list';
import Upload from './upload';
import UploadDragger from './upload-dragger';
import IframeUpload from './iframe-upload';
import ElProgress from 'element-ui/packages/progress';

function noop() {}

export default {
  name: 'ElUpload',

  components: {
    ElProgress,
    UploadList,
    Upload,
    UploadDragger,
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
    dragger: Boolean,
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
    },
    autoUpload: {
      type: Boolean,
      default: true
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
          item.uid = item.uid || (Date.now() + this.tempIndex++);
          item.status = 'success';
          return item;
        });
      }
    }
  },

  methods: {
    handleStart(rawFile) {
      rawFile.uid = Date.now() + this.tempIndex++;
      let file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      };

      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error(err);
        return;
      }

      this.uploadFiles.push(file);
    },
    handleProgress(ev, rawFile) {
      var file = this.getFile(rawFile);
      this.onProgress(ev, file, this.uploadFiles);
      file.status = 'uploading';
      file.percentage = ev.percent || 0;
    },
    handleSuccess(res, rawFile) {
      var file = this.getFile(rawFile);

      if (file) {
        file.status = 'success';
        file.response = res;

        this.onSuccess(res, file, this.uploadFiles);
      }
    },
    handleError(err, response, rawFile) {
      var file = this.getFile(rawFile);
      var fileList = this.uploadFiles;

      file.status = 'fail';

      fileList.splice(fileList.indexOf(file), 1);

      this.onError(err, response, rawFile);
    },
    handleRemove(file) {
      var fileList = this.uploadFiles;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    },
    getFile(rawFile) {
      var fileList = this.uploadFiles;
      var target;
      fileList.every(item => {
        target = rawFile.uid === item.uid ? item : null;
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
    submit() {
      this.uploadFiles
        .filter(file => file.status === 'ready')
        .forEach(file => {
          this.$refs['upload-inner'].upload(file.raw, file);
        });
    }
  },

  render(h) {
    var uploadList;

    if (this.showUploadList && this.uploadFiles.length) {
      uploadList = (
        <UploadList
          files={this.uploadFiles}
          on-remove={this.handleRemove}
          on-preview={this.handlePreview}>
        </UploadList>
      );
    }

    var uploadData = {
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
        fileList: this.uploadFiles,
        autoUpload: this.autoUpload,
        'on-start': this.handleStart,
        'on-progress': this.handleProgress,
        'on-success': this.handleSuccess,
        'on-error': this.handleError,
        'on-preview': this.handlePreview,
        'on-remove': this.handleRemove
      },
      ref: 'upload-inner'
    };

    // var uploadComponent = (typeof FormData !== 'undefined' || this.$isServer)
    //     ? <upload {...props}>{this.$slots.default}</upload>
    //     : <iframeUpload {...props}>{this.$slots.default}</iframeUpload>;

    if (this.draggable) {
      return (
        <div>
          <upload {...uploadData}>{this.$slots.trigger || this.$slots.default}</upload>
          {this.$slots.tip}
          {uploadList}
        </div>
      );
    }

    return (
      <div>
        {uploadList}
        <upload {...uploadData}>{this.$slots.trigger || this.$slots.default}</upload>
        {this.$slots.default}
        {this.$slots.tip}
      </div>
    );
  }
};
</script>
