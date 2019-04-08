<template>
  <div class="action-area">
    <div class="action-area-main">
    <div class="action-button">
      <el-button type="warning" @click.stop="onReset">{{getActionDisplayName("reset-theme")}}</el-button>
    </div>
    <div class="action-button">
      <el-button 
        type="primary" 
        :loading=downloading
        style="background: #66b1ff;border-color: #66b1ff"
        @click.stop="onDownload">
        {{getActionDisplayName("download-theme")}}
      </el-button>
      </div>
    </div>
  </div>
</template>
<style>
.action-area { 
  width: 24%;
  max-width: 400px;
  position: fixed;
  right: 0;
  bottom: 0;
  padding-right: 1%;
}
@media (min-width: 1600px) {
  .action-area {
    padding-right: calc((100% - 1600px) / 2);
  }
}
.action-area-main {
  opacity: .95;
  background: #F5F7FA;
  height: 70px;
  bottom: 0;
  width: 97%;
  box-sizing: border-box;
  margin: 0 .5% 0 5%;
}
.action-button {
  width: 50%;
  text-align: center;
  display: inline-block;
  padding-top: 15px;
}
</style>
<script>
import { getActionDisplayName } from './utils/utils.js';
export default {
  data() {
    return {
      downloading: false
    };
  },
  methods: {
    onReset() {
      this.$parent.onReset();
    },
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    onDownload() {
      this.downloading = true;
      this.$parent.onDownload()
        .then()
        .catch((err) => {
          this.$parent.onError(err);
        })
        .then(() => {
          this.downloading = false;
        });
      ga('send', 'event', 'ThemeConfigurator', 'Download');
    }
  }
};
</script>