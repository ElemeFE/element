<template>
  <div>
    <el-button
      round
      type="primary"
      size="mini"
      style="background: #66b1ff;border-color: #66b1ff"
      @click.stop="showConfigurator"
    >{{getActionDisplayName("theme-editor")}}</el-button>
    <transition name="fade">
      <div v-show="visible" class="configurator" ref="configurator">
        <div 
          class="main-configurator"
          ref="mainConfigurator"
        >
          <div v-if="currentConfig">
            <main-panel
              :currentConfig="currentConfig"
              :defaultConfig="defaultConfig"
              :userConfig="userConfig"
              :globalValue="globalValue"
              @onChange="userConfigChange"
            ></main-panel>
          </div>
          <div v-if="init && !currentConfig" class="no-config">
            <img src="../../assets/images/theme-no-config.png" alt>
            <span v-if="pageCouldEdit">{{getActionDisplayName("no-config")}}</span>
            <span v-else>{{getActionDisplayName("no-need-config")}}</span>
          </div>
          <download-area></download-area>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.configurator {
  height: 100%;
  width: 24%;
  max-width: 400px;
  position: fixed;
  overflow-y: auto;
  top: 79px;
  right: 0;
  bottom: 0;
  background: #fff;
  color: #666;
  line-height: 24px;
  padding-right: 1%;
}
.configurator .main-configurator {
  height: 100%;
  overflow: auto;
  background: #F5F7FA;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.06);
  border-radius: 8px;
  width: 97%;
  box-sizing: border-box;
  margin: 0 .5% 0 5%;
}
.no-config {
  margin-top: 130px;
  text-align: center;
  img {
    width: 50%;
    display: block;
    margin: 0 auto;
  }
  span {
    margin-top: 10px;
    display: block;
    color: #909399;
    font-size: 14px;
  }
}
.fade-enter,.fade-leave-to {
    transform:translateX(100%);
}
.fade-enter-active ,.fade-leave-active {
    transition:all 0.3s ease;
}

@media (min-width: 1600px) {
  .configurator {
    padding-right: calc((100% - 1600px) / 2);
  }
}

</style>

<script>
import bus from '../../bus';
import { getVars, updateVars } from './utils/api.js';
import mainPanel from './main';
import {
  filterConfigType,
  filterGlobalValue,
  updateDomHeadStyle,
  getActionDisplayName
} from './utils/utils.js';
import DocStyle from './docStyle';
import Loading from './loading';
import Shortcut from './shortcut';
import DownloadArea from './download';

const ELEMENT_THEME_USER_CONFIG = 'ELEMENT_THEME_USER_CONFIG';

const DEFAULT_USER_CONFIG = {
  global: {},
  local: {}
};

export default {
  components: {
    mainPanel,
    DownloadArea
  },
  data() {
    return {
      init: false,
      visible: false,
      defaultConfig: null,
      currentConfig: null,
      userConfig: {
        global: {},
        local: {}
      },
      lastApply: 0,
      userConfigHistory: [],
      userConfigRedoHistory: [],
      hasLocalConfig: false
    };
  },
  mixins: [DocStyle, Loading, Shortcut],
  computed: {
    globalValue() {
      return filterGlobalValue(this.defaultConfig, this.userConfig);
    },
    pageCouldEdit() {
      const noNeedEdit = ['installation', 'quickstart', 'i18n', 'custom-theme', 'transition'];
      const lastPath = this.$route.path.split('/').slice(-1).pop();
      return noNeedEdit.indexOf(lastPath) < 0;
    }
  },
  mounted() {
    this.checkLocalThemeConfig();
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    showConfigurator() {
      this.visible = !this.visible;
      this.visible ? this.enableShortcut() : this.disableShortcut();
      bus.$emit('user-theme-config-visible', this.visible);
      window.userThemeConfigVisible = Boolean(this.visible);
      if (this.init) return;
      this.$nextTick(() => {
        const loading = this.$loading({
          target: this.$refs.configurator
        });
        let defaultConfig;
        getVars()
          .then((res) => {
            defaultConfig = res;
            ga('send', 'event', 'ThemeConfigurator', 'Init');
          })
          .catch((err) => {
            this.onError(err);
          })
          .then(() => {
            setTimeout(() => {
              if (defaultConfig) {
                this.defaultConfig = defaultConfig;
                this.filterCurrentConfig();
                this.init = true;
                this.checkLocalThemeConfig();
              }
              loading.close();
            }, 300); // action after transition
          });
      });
    },
    checkLocalThemeConfig() {
      try {
        if (this.hasLocalConfig) {
          this.$message(getActionDisplayName('load-local-theme-config'));
          this.onAction();
          return;
        }
        const config = JSON.parse(localStorage.getItem(ELEMENT_THEME_USER_CONFIG));
        if (config && config.global) {
          this.userConfig = config;
          this.hasLocalConfig = true;
          this.showConfigurator();
        }
      } catch (e) {
        // bad local config
      }
    },
    filterCurrentConfig() {
      this.currentConfig = this.defaultConfig.find((config) => {
        return config.name === this.$route.path.split('/').pop().toLowerCase().replace('-', '');
      });
    },
    userConfigChange(e) {
      this.userConfigHistory.push(JSON.stringify(this.userConfig));
      this.userConfigRedoHistory = [];
      this.$set(this.userConfig[filterConfigType(this.currentConfig.name)], e.key, e.value);
      this.onAction();
    },
    applyStyle(res, time) {
      if (time < this.lastApply) return;
      this.updateDocs(() => {
        updateDomHeadStyle('chalk-style', res);
      });
      this.lastApply = time;
    },
    onDownload() {
      return updateVars(Object.assign({}, this.userConfig, {download: true}), (xhr) => {
        xhr.responseType = 'blob';
      });
    },
    onReset() {
      this.userConfig = {
        global: {},
        local: {}
      };
      this.onAction();
    },
    onAction() {
      this.triggerComponentLoading(true);
      const time = +new Date();
      const currentConfigString = JSON.stringify(this.userConfig);
      if (JSON.stringify(DEFAULT_USER_CONFIG) === currentConfigString) {
        localStorage.removeItem(ELEMENT_THEME_USER_CONFIG);
      } else {
        localStorage.setItem(ELEMENT_THEME_USER_CONFIG, currentConfigString);
      }
      updateVars(this.userConfig)
        .then((res) => {
          this.applyStyle(res, time);
        })
        .catch((err) => {
          this.onError(err);
        })
        .then(() => {
          this.triggerComponentLoading(false);
        });
    },
    onError(err) {
      let message;
      try {
        message = JSON.parse(err).message;
      } catch (e) {
        message = err;
      }
      this.$message.error(message);
    },
    triggerComponentLoading(val) {
      bus.$emit('user-theme-config-loading', val);
    },
    updateDocs(cb) {
      window.userThemeConfig = JSON.parse(JSON.stringify(this.userConfig));
      bus.$emit('user-theme-config-update', this.userConfig);
      this.updateDocStyle(this.userConfig, cb);
    },
    undo() {
      if (this.userConfigHistory.length > 0) {
        this.userConfigRedoHistory.push(JSON.stringify(this.userConfig));
        this.userConfig = JSON.parse(this.userConfigHistory.pop());
        this.onAction();
      }
    },
    redo() {
      if (this.userConfigRedoHistory.length > 0) {
        this.userConfigHistory.push(JSON.stringify(this.userConfig));
        this.userConfig = JSON.parse(this.userConfigRedoHistory.shift());
        this.onAction();
      }
    }
  },
  watch: {
    '$route.path'() {
      this.defaultConfig && this.filterCurrentConfig();
      if (!this.$refs.mainConfigurator) return;
      this.$nextTick(() => {
        this.$refs.mainConfigurator.scrollTop = 0;
      });

    }
  }
};
</script>