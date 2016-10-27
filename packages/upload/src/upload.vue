<template>
  <div class="el-upload__inner"
    :class="{
      'el-dragger': type === 'drag',
      'is-dragOver': dragOver,
      'is-showCover': showCover
    }"
    @click="handleClick"
    @drop.prevent="onDrop"
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false">
    <slot v-if="!showCover"></slot>
    <cover :image="lastestFile" :on-preview="onPreview" :on-remove="onRemove" v-else></cover>
    <input class="el-upload__input" type="file" ref="input" @change="handleChange" :multiple="multiple" :accept="accept">
  </div>
</template>

<script>
import ajax from './ajax';
import Cover from './cover';

export default {
  components: {
    Cover
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
    onPreview: {
      type: Function,
      default: function() {}
    },
    onRemove: {
      type: Function,
      default: function() {}
    }
  },

  data() {
    return {
      dragOver: false,
      mouseover: false
    };
  },

  computed: {
    lastestFile() {
      var fileList = this.$parent.fileList;
      return fileList[fileList.length - 1];
    },
    showCover() {
      var file = this.lastestFile;
      return this.thumbnailMode && file && file.status !== 'fail';
    },
    thumbnailMode() {
      return this.$parent.thumbnailMode;
    }
  },

  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleChange(ev) {
      const files = ev.target.files;

      if (!files) {
        return;
      }
      this.uploadFiles(files);
      this.$refs.input.value = null;
    },
    uploadFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) { postFiles = postFiles.slice(0, 1); }

      if (postFiles.length === 0) { return; }

      postFiles.forEach(file => {
        let isImage = this.isImage(file.type);

        if (this.thumbnailMode && !isImage) {
          return;
        } else {
          this.upload(file);
        }
      });
    },
    upload(file) {
      if (!this.beforeUpload) {
        return this.post(file);
      }

      const before = this.beforeUpload(file);
      if (before && before.then) {
        before.then(processedFile => {
          if (Object.prototype.toString.call(processedFile) === '[object File]') {
            this.post(processedFile);
          } else {
            this.post(file);
          }
        }, () => {
          // this.$emit('cancel', file);
        });
      } else if (before !== false) {
        this.post(file);
      } else {
        // this.$emit('cancel', file);
      }
    },
    post(file) {
      this.onStart(file);
      let formData = new FormData();
      formData.append(this.name, file);

      ajax(this.action, {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
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
      this.dragOver = false;
      this.uploadFiles(e.dataTransfer.files);
    },
    handleClick() {
      this.$refs.input.click();
    }
  }
};
</script>
