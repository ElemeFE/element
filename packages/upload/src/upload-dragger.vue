<template>
  <div
    class="el-upload-dragger"
    :class="{
      'is-dragOver': dragOver
    }"
    @drop.prevent="onDrop"
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElUploadDrag',

    data() {
      return {
        dragOver: false
      };
    },
    methods: {
      onDrop(e) {
        this.dragOver = false;
        this.$emit('file', e.dataTransfer.files);
      }
    }
  };
</script>