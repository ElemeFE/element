<template>
  <div class="main-configurator" ref='configurator'>
    <action-panel
      :selectOptions="selectOptions"
      :userConfigHistory="userConfigHistory"
      :userConfigRedoHistory="userConfigRedoHistory"
      :onUndo="undo"
      :onRedo="redo"
      :isOfficial="isOfficial"
      @select="onSelectChange"
    ></action-panel>
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
  display: flex;
  flex-direction: column;
}
</style>

<script>
import bus from '../../bus.js';
import { getVars } from '../theme/loader/api.js';
import mainPanel from './main';
import actionPanel from './action';
import {
  filterConfigType,
  filterGlobalValue,
  getActionDisplayName
} from './utils/utils.js';
import Shortcut from './shortcut';
import {
  ACTION_APPLY_THEME,
  ACTION_DOWNLOAD_THEME,
  ACTION_COMPONECT_SELECT
} from '../theme/constant.js';

export default {
  props: {
    themeConfig: Object,
    previewConfig: Object,
    isOfficial: Boolean,
    onUserConfigUpdate: Function
  },
  components: {
    mainPanel,
    actionPanel
  },
  data() {
    return {
      init: false,
      defaultConfig: null,
      currentConfig: null,
      userConfig: {
        global: {},
        local: {}
      },
      userConfigHistory: [],
      userConfigRedoHistory: [],
      hasLocalConfig: false,
      selectOptions: [],
      selectedComponent: 'color'
    };
  },
  mixins: [Shortcut],
  computed: {
    globalValue() {
      return filterGlobalValue(this.defaultConfig, this.userConfig);
    }
  },
  mounted() {
    ga('send', 'event', 'ThemeConfigurator', 'Init');
    this.showConfigurator();
    this.enableShortcut();
  },
  beforeDestroy() {
    this.disableShortcut();
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    showConfigurator() {
      if (this.init) return;
      this.$nextTick(() => {
        const loading = this.$loading({
          target: this.$refs.configurator
        });
        let defaultConfig;
        getVars()
          .then(res => {
            defaultConfig = res;
          })
          .catch(err => {
            this.onError && this.onError(err);
          })
          .then(() => {
            setTimeout(() => {
              if (defaultConfig) {
                this.defaultConfig = defaultConfig;
                this.setSelectOption();
                this.filterCurrentConfig();
                this.init = true;
              }
              loading.close();
            }, 300); // action after transition
          });
      });
    },
    setSelectOption() {
      this.selectOptions = this.defaultConfig.map((config) => ({
        label: config.name.charAt(0).toUpperCase() + config.name.slice(1),
        value: config.name
      })).sort((a, b) => {
        const A = a.label;
        const B = b.label;
        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
      });
    },
    filterCurrentConfig() {
      this.currentConfig = this.defaultConfig.find(config => {
        return (
          config.name === this.selectedComponent
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
    onReset() {
      this.userConfigRedoHistory = [];
      this.userConfigHistory = [];
      this.userConfig = {
        global: {},
        local: {}
      };
      this.onAction();
    },
    onDownload() {
      bus.$emit(ACTION_DOWNLOAD_THEME, this.userConfig, this.previewConfig.name);
    },
    onAction() {
      this.onUserConfigUpdate(this.userConfig);
      bus.$emit(ACTION_APPLY_THEME, this.userConfig);
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
    },
    onSelectChange(val) {
      bus.$emit(ACTION_COMPONECT_SELECT, val);
      this.selectedComponent = val;
      this.filterCurrentConfig();
    }
  },
  watch: {
    themeConfig: {
      handler(val, oldVal) {
        if (!oldVal.globnal) {
          this.userConfig = val;
        }
      }
    }
  }
};
</script>