<template>
  <div class="el-upload__inner"
    :class="{
      'el-dragger': type === 'drag',
      'is-dragOver': dragOver,
      'is-hover': mouseover,
      'is-showImage': showThumbnail
    }"
    @click="$refs.input.click()"
    @drop.prevent="onDrop"
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false"
    @mouseenter="mouseover = true"
    @mouseleave="mouseover = false"
  >
    <slot></slot>
    <template v-if="type === 'drag' && !showThumbnail">
      <i class="el-icon-upload"></i>
      <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
    </template>
    <template v-if="thumbnailMode">
      <transition name="fade-in">
        <el-progress
          class="el-dragger__progress"
          v-if="lastestFile.showProgress"
          size="large"
          :percentage="lastestFile.percentage"
          :type="lastestFile.status === 'finished' ? 'green' : 'blue'">
        </el-progress>
      </transition>
      <div class="el-dragger__uploaded-image" v-if="lastestFile.status === 'finished'" @click.stop>
        <img :src="lastestFile.url">
        <transition name="fade-in">
          <div v-show="mouseover" class="el-dragger__uploaded-image__interact">
            <div class="el-draggeer__uploaded-image__btns">
              <span class="btn" @click="$refs.input.click()"><i class="el-icon-upload"></i><span>继续上传</span></span>
              <span class="btn" @click="onPreview(lastestFile)"><i class="el-icon-search"></i><span>查看图片</span></span>
              <span class="btn" @click="onRemove(lastestFile)"><i class="el-icon-delete"></i><span>删除</span></span>
            </div>
          </div>
        </transition>
        <transition name="md-fade-top">
          <h4 v-show="mouseover" class="el-dragger__uploaded-image__title">{{lastestFile.name}}</h4>
        </transition>
      </div>
    </template>
    <input class="el-upload__input" type="file" ref="input" @change="handleChange" :multiple="multiple" :accept="accept">
  </div>
</template>

<script>
import ajax from './ajax';

export default {
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
      var uploadedFiles = this.$parent.uploadedFiles;
      return uploadedFiles.length > 0 ? uploadedFiles[uploadedFiles.length - 1] : {};
    },
    showThumbnail() {
      var file = this.lastestFile;
      return this.thumbnailMode && file.status && file.status !== 'fail';
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
    }
  }
};
</script>
