<template>
  <span class="el-upload__inner" :style="{ position: 'relative', zIndex: 0 }">
    <iframe v-el:iframe @load="onLoad" v-bind:style="iframeStyle"></iframe>
    <slot></slot>
  </span>
</template>

<script>
import ajax from './ajax';
import ElProgress from 'packages/progress/index.js';

export default {
  components: {
    ElProgress
  },

  data() {
    return {
      uploading: false,
      percentage: 0,
      uploadedFiles: [],
      filename: '',
      success: false,
      iframeStyle: {
        position: 'absolute',
        top: 0,
        opacity: 0,
        filter: 'alpha(opacity=0)',
        left: 0,
        zIndex: 9999
      }
    };
  },

  methods: {
    handleChange(ev) {
      const files = ev.target.files;

      if (this.uploading || !files) {
        return;
      }

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
          // file.uid = uid();
          this.upload(file);
        }
        if (this.multiple) {
          this.onStart(postFiles);
        } else {
          this.onStart(postFiles[0]);
        }
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
    onLoad() {

    },
    onStart(files) {
      this.filename = files.name;
    },
    onProgress(ev, file) {
      console.log(ev.percent);
      this.percentage = ev.percent;
    },
    onSuccess(res, file) {
      setTimeout(() => {
        this.uploadedFiles.push(file);
        this.reset();
      }, 1000);
      console.log(res);
    },
    onError(err, file) {
      this.reset();
      console.log(err);
    },
    reset() {
      this.uploading = false;
      this.percent = 0;
      this.filename = '';
    }
  },

  ready() {
  }
};
</script>
