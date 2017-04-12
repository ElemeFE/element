<template>
  <div
    class="el-upload-dragger"
    :class="{
      'is-dragover': dragover
    }"
    @drop.prevent="onDrop"
    @dragover.prevent="dragover = true"
    @dragleave.prevent="dragover = false"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElUploadDrag',

    data() {
      return {
        dragover: false
      };
    },
    methods: {
      onDrop(e) {
        this.dragover = false;
        this.$emit('file', e.dataTransfer.files);
      }
    }
  };
</script>

