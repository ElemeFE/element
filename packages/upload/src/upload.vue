<template>
  <div class="el-upload">
    <!-- 选择类型 -->
    <template v-if="type === 'select'">
      <ul class="el-upload__files" v-show="showUploadList && uploadedFiles.length > 0" transition="slide-in-bottom">
        <li class="el-upload__file" v-for="file in uploadedFiles" transition="slide-in-bottom">
          <i class="el-icon-document"></i>{{file.name}}
          <i class="el-icon-check" v-show="file.status === 'success'"></i>
          <span class="el-upload__btn-delete" @click="removeFile(file)" v-show="file.status === 'finished'">删除</span>
          <el-progress
            v-if="file.status === 'success' || file.status === 'uploading'"
            size="small"
            :percentage="file.percentage"
            :type="file.status === 'success' ? 'green' : 'blue'">
          </el-progress>
        </li>
      </ul>
      <component :is="uploadComponent"
        :action="action",
        :multiple="multiple",
        :with-credentials="withCredentials",
        :name="name",
        :accept="accept",
        :on-start="onStart",
        :on-progress="onProgress",
        :on-success="onSuccess",
        :on-error="onError"
      >
        <slot></slot>
      </component>
      <slot name="tip"></slot>
    </template>

    <!-- 拖拽类型 -->
    <template v-if="type === 'drag'">
      <div class="el-dragger"
        :class="{
          'is-dragOver': dragOver,
          'is-draging': draging,
          'is-hover': mouseover,
          'is-showImage': showImageBlock
        }"
        @drop.prevent="dragOver = false"
        @dragOver.prevent="dragOver = true"
        @dragLeave.prevent="dragOver = false"
        @mouseenter="mouseover = true"
        @mouseleave="mouseover = false"
      >
        <el-progress
          class="el-dragger__progress"
          v-if="mode === 'image' && (image.status === 'success' || image.status === 'uploading')"
          size="large"
          :percentage="image.percentage"
          :type="image.status === 'success' ? 'green' : 'blue'">
        </el-progress>
        <div class="el-dragger__uploaded-image"
          v-if="mode === 'image' && image.status === 'finished'"
          transition="slide-in-bottom"
        >
          <img :src="image.url">
          <div v-show="mouseover" class="el-dragger__uploaded-image__interact" transition="fade-in">
            <slot name="interact"></slot>
          </div>
          <h4 v-show="mouseover" class="el-dragger__uploaded-image__title" transition="slide-in-bottom">{{image.name}}</h4>
        </div>
        <component :is="uploadComponent"
          :action="action",
          :multiple="multiple",
          :with-credentials="withCredentials",
          :name="name",
          :accept="accept",
          :on-start="onStart",
          :on-progress="onProgress",
          :on-success="onSuccess",
          :on-error="onError"
        >
          <slot></slot>
        </component>
      </div>

      <slot name="tip" class="el-dragger__tip"></slot>

      <ul class="el-upload__files"
        v-if="mode !== 'image' && showUploadList"
        v-show="uploadedFiles.length > 0"
        transition="slide-in-bottom"
      >
        <li class="el-upload__file" v-for="file in uploadedFiles" transition="slide-in-bottom">
          <i class="el-icon-document"></i>{{file.name}}
          <i class="el-icon-check" v-show="file.status === 'success'"></i>
          <span class="el-upload__btn-delete" @click="removeFile(file)" v-show="file.status === 'finished'">删除</span>
          <el-progress
            v-if="file.status === 'success' || file.status === 'uploading'"
            size="small"
            :percentage="file.percentage"
            :type="file.status === 'success' ? 'green' : 'blue'">
          </el-progress>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import AjaxUpload from './ajax-upload';
import IframeUpload from './iframe-upload';
import ElProgress from 'packages/progress/index.js';

export default {
  name: 'el-upload',

  // extends: typeof FormData !== 'undefined' ? ajaxUpload : iframeUpload,
  // extends: iframeUpload,

  components: {
    ElProgress,
    AjaxUpload,
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
        return {
          // 'Access-Control-Request-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
          // 'Access-Control-Request-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
        };
      }
    },
    multiple: false,
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    accept: String,
    type: {
      type: String,
      default: 'select'
    },
    mode: String
  },

  data() {
    return {
      uploading: false,
      percentage: 0,
      uploadedFiles: [],
      filename: '',
      success: false,
      dragOver: false,
      draging: false,
      mouseover: false,
      tempIndex: 1
    };
  },

  computed: {
    uploadComponent() {
      return typeof FormData !== 'undefined' ? 'AjaxUpload' : 'IframeUpload';
    },
    image() {
      return this.uploadedFiles.length > 0 ? this.uploadedFiles[this.uploadedFiles.length - 1] : {};
    },
    showImageBlock() {
      return this.mode === 'image' && this.image.status && this.image.status !== 'fail';
    }
  },

  ready() {
    if (this.mode === 'image') {
      this.accept = 'image/*';
    }
  },

  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    removeFile(file) {
      this.uploadedFiles.$remove(file);
      this.$dispatch('fileremove', file, this.uploadedFiles);
    },
    onStart(files) {
      files.forEach(file => {
        let isImage = this.isImage(file.type);
        let uid = Date.now() + this.tempIndex++;
        let _file = {
          status: 'uploading',
          name: file.name,
          size: file.size,
          percentage: 0,
          uid: uid
        };
        if (this.mode === 'image') {
          if (!isImage) {
            this.tempIndex--;
            return;
          } else {
            _file.url = URL.createObjectURL(file);
          }
        }

        this.uploadedFiles.push(_file);

        file.index = this.uploadedFiles.length - 1;
      });
    },
    onProgress(ev, file) {
      this.uploadedFiles[file.index].percentage = ev.percent;
    },
    onSuccess(res, file) {
      var _file = this.uploadedFiles[file.index];

      _file.status = 'success';
      setTimeout(() => {
        _file.status = 'finished';
        this.reset();
      }, 1000);
    },
    onError(err, file) {
      var _file = this.uploadedFiles[file.index];

      _file.status = 'finished';
      this.uploadedFiles.$remove(_file);
      this.reset();
      console.log(err);
    },
    reset() {
      this.uploading = false;
      this.percent = 0;
      this.filename = '';
    }
  }
};
</script>
