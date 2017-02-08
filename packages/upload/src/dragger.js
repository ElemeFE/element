import Cover from './cover';

export default {
  components: {
    Cover
  },
  data() {
    return {
      dragOver: false
    };
  },
  computed: {
    lastestFile() {
      return this.fileList[this.fileList.length - 1];
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
};
