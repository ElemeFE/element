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
import bus from '../../bus.js';
import { getVars } from './utils/api.js';
import mainPanel from './main';
import {
  filterConfigType,
  filterGlobalValue,
  getActionDisplayName
} from './utils/utils.js';
import Shortcut from './shortcut';
import {
  ACTION_APPLY_THEME
} from '../theme/constant.js';

export default {
  props: {
    themeConfig: Object
  },
  components: {
    mainPanel
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
    this.showConfigurator();
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    showConfigurator() {
      // this.visible ? this.enableShortcut() : this.disableShortcut();
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
      this.userConfig = {
        global: {},
        local: {}
      };
      this.onAction();
    },
    onAction() {
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
    }
  },
  watch: {
    selectedComponent: {
      handler() {
        this.filterCurrentConfig();
      }
    },
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