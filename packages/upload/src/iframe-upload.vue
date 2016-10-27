<script>
import Cover from './cover';

export default {
  components: {
    Cover
  },
  props: {
    type: String,
    data: {},
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: Boolean,
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
      mouseover: false,
      domain: '',
      file: null,
      disabled: false
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
    handleClick() {
      if (!this.disabled) {
        this.$refs.input.click();
      }
    },
    handleChange(ev) {
      const file = ev.target.files[0];
      this.file = file;
      this.onStart(file);

      const formNode = this.getFormNode();
      const dataSpan = this.getFormDataNode();
      let data = this.data;
      if (typeof data === 'function') {
        data = data(file);
      }
      const inputs = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          inputs.push(`<input name="${key}" value="${data[key]}"/>`);
        }
      }
      dataSpan.innerHTML = inputs.join('');
      formNode.submit();
      dataSpan.innerHTML = '';
      this.disabled = true;
    },
    getFormNode() {
      return this.$refs.form;
    },
    getFormDataNode() {
      return this.$refs.data;
    },
    onDrop(e) {
      e.preventDefault();
      this.dragOver = false;
      this.uploadFiles(e.dataTransfer.files);
    },
    handleDragover(e) {
      e.preventDefault();
      this.onDrop = true;
    },
    handleDragleave(e) {
      e.preventDefault();
      this.onDrop = false;
    },
    onload(e) {
      this.disabled = false;
    }
  },

  mounted() {
    window.addEventListener('message', (event) => {
      var targetOrigin = new URL(this.action).origin;
      if (event.origin !== targetOrigin) {
        return false;
      }
      var response = event.data;
      if (response.result === 'success') {
        this.onSuccess(response, this.file);
      } else if (response.result === 'failed') {
        this.onSuccess(response, this.file);
      }
    }, false);
  },

  render(h) {
    var cover = <cover image={this.lastestFile} onPreview={this.onPreview} onRemove={this.onRemove}></cover>;
    var frameName = 'frame-' + Date.now();
    return (
      <div
        class={{
          'el-upload__inner': true,
          'el-dragger': this.type === 'drag',
          'is-dragOver': this.dragOver,
          'is-showCover': this.showCover
        }}
        on-click={this.handleClick}
        nativeOn-drop={this.onDrop}
        nativeOn-dragover={this.handleDragover}
        nativeOn-dragleave={this.handleDragleave}
      >
        <iframe
          on-load={this.onload}
          ref="iframe"
          name={frameName}
        >
        </iframe>
        <form ref="form" action={this.action} target={frameName} enctype="multipart/form-data" method="POST">
          <input
            class="el-upload__input"
            type="file"
            ref="input"
            name="file"
            on-change={this.handleChange}
            accept={this.accept}>
          </input>
          <input type="hidden" name="documentDomain" value={document.domain} />
          <span ref="data"></span>
         </form>
        {!this.showCover ? this.$slots.default : cover}
      </div>
    );
  }
};
</script>
