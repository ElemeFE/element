<template>
  <div
    class="el-upload-dragger"
    :class="{
      'is-dragOver': dragOver,
      'is-showCover': showCover
    }"
    @click="handleClick"
    @drop.prevent="onDrop"
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false"
  >
    <slot v-if="!showCover"></slot>
    <cover :image="lastestFile" :on-preview="onPreview" :on-remove="onRemove" v-else></cover>
    <input class="el-upload__input" type="file" ref="input" @change="handleChange" :multiple="multiple" :accept="accept">
  </div>
</template>
<script>
  import Upload from './upload';
  import IframeUpload from './iframe-upload';
  import Cover from './cover';

  export default {
    name: 'ElUploadDragger',

    extends: Upload,

    components: {
      IframeUpload,
      Cover
    },
    data() {
      return {
        dragOver: false
      };
    },
    props: {
      draggable: {
        type: Boolean,
        default: true
      }
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
      onDrop(e) {
        this.dragOver = false;
        this.uploadFiles(e.dataTransfer.files);
      }
    }
    // render(h) {
    //   let {
    //     dragover
    //   } = this;

    //   let content = this.showCover
    //     ? <cover image={this.lastestFile} on-preview={this.onPreview} on-remove={this.onRemove}></cover>
    //     : this.$slots.default
    //   return (
    //     <div
    //       class={{
    //         'el-upload-dragger': true,
    //         'is-dragOver': this.dragOver,
    //         'is-showCover': this.showCover
    //       }}
    //       @drop.prevent="onDrop"
    //       @dragover.prevent="dragOver = true"
    //       @dragleave.prevent="dragOver = false"
    //     >
    //       {content}
    //       <input class="el-upload__input" type="file" ref="input" on-change={this.handleChange} multiple={this.multiple} accept={this.accept} />
    //     </div>
    //   );
    // }
  };
</script>