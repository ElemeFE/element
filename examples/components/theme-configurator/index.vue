<template>
  <div class="main-configurator">
    <main-panel
      v-if="defaultConfig"
      :currentConfig="currentConfig"
      :defaultConfig="defaultConfig"
      :userConfig="userConfig"
      :globalValue="globalValue"
      @onChange="userConfigChange"
    ></main-panel>
  </div>
</template>

<style lang="scss">
.main-configurator {
  height: 100%;
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

const ELEMENT_THEME_USER_CONFIG = 'ELEMENT_THEME_USER_CONFIG';

const DEFAULT_USER_CONFIG = {
  global: {},
  local: {}
};

export default {
  components: {
    mainPanel
  },
  data() {
    return {
      init: false,
      visible: true,
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
    }
  },
  mounted() {
    // this.checkLocalThemeConfig();
    this.showConfigurator();
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    showConfigurator() {
      this.visible = !this.visible;
      this.visible ? this.enableShortcut() : this.disableShortcut();
      if (this.init) return;
      this.$nextTick(() => {
        const loading = this.$loading({
          target: this.$refs.configurator
        });
        let defaultConfig;
        getVars()
          .then(res => {
            defaultConfig = res;
            ga('send', 'event', 'ThemeConfigurator', 'Init');
          })
          .catch(err => {
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
        const config = JSON.parse(
          localStorage.getItem(ELEMENT_THEME_USER_CONFIG)
        );
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
      this.currentConfig = this.defaultConfig.find(config => {
        return (
          config.name === 'button'
        );
      });
    },
    userConfigChange(e) {
      this.userConfigHistory.push(JSON.stringify(this.userConfig));
      this.userConfigRedoHistory = [];
      this.$set(
        this.userConfig[filterConfigType(this.currentConfig.name)],
        e.key,
        e.value
      );
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
      return updateVars(
        Object.assign({}, this.userConfig, { download: true }),
        xhr => {
          xhr.responseType = 'blob';
        }
      );
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
        .then(res => {
          this.applyStyle(res, time);
        })
        .catch(err => {
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
  }
};
</script>