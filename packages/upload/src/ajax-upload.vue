<template>
  <div class="el-upload__inner"
    @click="$els.input.click();"
    @drop.prevent="onDrop"
    @dragOver.prevent
  >
    <slot></slot>
    <template v-if="$parent.type === 'drag'">
      <i class="el-icon-upload"></i>
      <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
    </template>
    <input class="el-upload__input" type="file" v-el:input @change="handleChange" :multiple="multiple" :accept="accept">
  </div>
</template>

<script>
import ajax from './ajax';

export default {
  props: {
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: true,
    multiple: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function
  },

  data() {
    return {
    };
  },

  computed: {
    uploading: {
      get() {
        return this.$parent.uploading;
      },
      set(value) {
        this.$parent.uploading = value;
      }
    },
    mode() {
      return this.$parent.mode;
    }
  },

  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleChange(ev) {
      const files = ev.target.files;

      if (this.uploading || !files) {
        return;
      }
      this.$dispatch('filechange', files, this.$parent.uploadedFiles, ev);
      this.uploading = true;
      this.uploadFiles(files);
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
      }
      const len = postFiles.length;
      if (len > 0) {
        for (let i = 0; i < len; i++) {
          const file = postFiles[i];
          let isImage = this.isImage(file.type);
          // file.uid = uid();
          if (this.mode === 'image' && !isImage) {
            continue;
          }
          this.upload(file);
        }
        this.onStart(postFiles);
      }
    },
    upload(file) {
      if (!this.beforeUpload) {
        return this.post(file);
      }

      const before = this.beforeUpload(file);
      if (before && before.then) {
        before.then((processedFile) => {
          if (Object.prototype.toString.call(processedFile) === '[object File]') {
            this.post(processedFile);
          } else {
            this.post(file);
          }
        }, () => {
          this.reset();
        });
      } else if (before !== false) {
        this.post(file);
      } else {
        this.reset();
      }
    },
    post(file) {
      let formData = new FormData();
      formData.append(this.name, file);

      ajax(this.action, {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        filename: this.name,
        onProgress: e => {
          this.onProgress(e, file);
        },
        onSuccess: res => {
          this.onSuccess(res, file);
        },
        onError: err => {
          this.onError(err, file);
        }
      });
    },
    onDrop(e) {
      const files = e.dataTransfer.files;
      this.uploadFiles(files);
    }
  },

  ready() {
  }
};
</script>
