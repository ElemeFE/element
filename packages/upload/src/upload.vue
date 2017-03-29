<script>
import ajax from './ajax';
import UploadDragger from './upload-dragger.vue';

export default {
  components: {
    UploadDragger
  },
  props: {
    type: String,
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    data: Object,
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    drag: Boolean,
    onPreview: {
      type: Function,
      default: function() {}
    },
    onRemove: {
      type: Function,
      default: function() {}
    },
    fileList: Array,
    autoUpload: Boolean,
    listType: String,
    httpRequest: Function
  },

  data() {
    return {
      mouseover: false
    };
  },

  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleChange(ev) {
      const files = ev.target.files;

      if (!files) return;
      this.uploadFiles(files);
      this.$refs.input.value = null;
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) { postFiles = postFiles.slice(0, 1); }

      if (postFiles.length === 0) { return; }

      postFiles.forEach(rawFile => {
        this.onStart(rawFile);
        if (this.autoUpload) this.upload(rawFile);
      });
    },
    upload(rawFile, file) {
      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then(processedFile => {
          if (Object.prototype.toString.call(processedFile) === '[object File]') {
            this.post(processedFile);
          } else {
            this.post(rawFile);
          }
        }, () => {
          this.onRemove(rawFile, true);
        });
      } else if (before !== false) {
        this.post(rawFile);
      } else {
        this.onRemove(rawFile, true);
      }
    },
    post(rawFile) {
      const request = this.httpRequest || ajax;
      request({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.onProgress(e, rawFile);
        },
        onSuccess: res => {
          this.onSuccess(res, rawFile);
        },
        onError: err => {
          this.onError(err, rawFile);
        }
      });
    },
    handleClick() {
      this.$refs.input.click();
    }
  },

  render(h) {
    let {
      handleClick,
      drag,
      handleChange,
      multiple,
      accept,
      listType,
      uploadFiles
    } = this;
    const data = {
      class: {
        'el-upload': true
      },
      on: {
        click: handleClick
      }
    };
    data.class[`el-upload--${listType}`] = true;
    return (
      <div {...data}>
        {
          drag
          ? <upload-dragger on-file={uploadFiles}>{this.$slots.default}</upload-dragger>
          : this.$slots.default
        }
        <input class="el-upload__input" type="file" ref="input" on-change={handleChange} multiple={multiple} accept={accept}></input>
      </div>
    );
  }
};
</script>
