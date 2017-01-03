<script>
  import index from '.';
  import Upload from './upload';
  import IframeUpload from './iframe-upload';
  import UploadList from './upload-list';

  export default {
    name: 'ElUploadDragger',
    extends: index,
    components: {
      UploadList,
      Upload,
      IframeUpload
    },
    props: {
      draggable: {
        type: Boolean,
        default: true
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
        <div
          class={{
            'el-upload-dragger': true,
            'is-dragOver': this.dragOver
          }}
        >
          {uploadComponent}
          {this.$slots.tip}
          {uploadList}
        </div>
      );
    }
  };
</script>