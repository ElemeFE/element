<template>
  <div class="dialog d-popup-center"
    v-if="rendered"
    v-show="visible"
    :transition="transition">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Popup from 'vue-popup';
  import 'vue-popup/lib/popup.css';

  export default {
    mixins: [Popup],

    props: {
      showClose: {
        type: Boolean,
        default: true
      },
      showModal: {
        type: Boolean,
        default: true
      },
      modal: {
        default: true
      },
      closeOnClickModal: {
        default: true
      }
    },

    methods: {
      willClose() {
        this.visible = false;
      }
    }
  };
</script>

<style lang="css">
  .dialog {
    position: fixed;

    img {
      width: 60vw;
    }
  }
  .app__main .d-modal {
    margin: 0;
  }
</style>