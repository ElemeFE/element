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
      mouseover: false,
      domain: '',
      file: null,
      disabled: false
    };
  },

  computed: {
    lastestFile() {
      var uploadedFiles = this.$parent.uploadedFiles;
      return uploadedFiles[uploadedFiles.length - 1];
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
    resetIframe() {
      const iframeNode = this.getIframeNode();
      let win = iframeNode.contentWindow;
      let doc = win.document;

      doc.open('text/html', 'replace');
      doc.write(this.getIframeHTML(this.domain));
      doc.close();
    },
    getIframeHTML(domain) {
      let domainScript = '';
      if (domain) {
        domainScript = `<script>document.domain="${domain}";<` + '/script>';
      }
      return `
      <!DOCTYPE html>
      <html>
      <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      ${domainScript}
      </head>
      <body>
      </body>
      </html>
      `;
    },
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleClick() {
      if (!this.disabled) {
        this.$refs.input.click();
      }
    },
    handleChange(ev) {
      const files = ev.target.files;
      this.file = files;

      this.onStart(files);

      const formNode = this.getFormNode();
      const dataSpan = this.getFormDataNode();
      let data = this.data;
      if (typeof data === 'function') {
        data = data(files);
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
    onLoad() {
      let response;
      const eventFile = this.file;
      if (!eventFile) { return; }
      try {
        const doc = this.getIframeDocument();
        const script = doc.getElementsByTagName('script')[0];
        if (script && script.parentNode === doc.body) {
          doc.body.removeChild(script);
        }
        response = doc.body.innerHTML;
        this.onSuccess(response, eventFile);
      } catch (err) {
        console.log(err);
        console.warn(false, 'cross domain error for Upload');
        this.onError(err, eventFile);
      }
      this.resetIframe();
      this.disabled = false;
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
    getIframeNode() {
      return this.$refs.iframe;
    },

    getIframeDocument() {
      return this.getIframeNode().contentDocument;
    },

    getFormNode() {
      return this.$refs.form;
    },

    getFormDataNode() {
      return this.$refs.data;
    }
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
          ref="iframe"
          on-load={this.onLoad}
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
            multiple={this.multiple}
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
