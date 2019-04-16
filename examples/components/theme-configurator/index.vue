<template>
  <div class="main-configurator" ref='configurator'>
    <el-select v-model="selectedComponent">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
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
import { getVars } from './utils/api.js';
import mainPanel from './main';
import {
  filterConfigType,
  filterGlobalValue,
  getActionDisplayName
} from './utils/utils.js';
import Shortcut from './shortcut';

const ELEMENT_THEME_USER_CONFIG = 'ELEMENT_THEME_USER_CONFIG1';

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
      hasLocalConfig: false,
      selectedComponent: 'color',
      selectOptions: []
    };
  },
  mixins: [Shortcut],
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
                this.setSelectOption();
                this.filterCurrentConfig();
                this.init = true;
                this.checkLocalThemeConfig();
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
      this.userConfig = {
        global: {},
        local: {}
      };
      this.onAction();
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
    selectedComponent: {
      handler() {
        this.filterCurrentConfig();
      }
    }
  }
};
</script>