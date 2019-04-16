<style lang="scss">
.page-theme-preview {
  padding-top: 25px;
  .display {
    width: 75%;
    display: inline-block;
    vertical-align: top;
    h3 {
      font-size: 24px;
      margin: 0 0 20px 0;
    }
  }
  .side {
    display: inline-block;
    width: 25%;
    .editor {
      background: #f5f7fa;
      border: 1px solid #ebeef5;
      border-radius: 5px;
      margin-bottom: 20px;
    }
  }
}
</style>
<template>
  <div class="page-container page-theme-preview">
    <section class="display">
      <el-button type="text" icon="el-icon-back" @click="navBack">
        返回
      </el-button>
      <h3>{{previewConfig.name}}</h3>
      <basic-tokens-preview>
      </basic-tokens-preview>
      <components-preview>
      </components-preview>
    </section>
    <aside class="side">
      <section class="editor">
        <theme-configurator
          :themeConfig="themeConfig"
          :onUserConfigUpdate="onUserConfigUpdate"
        >
        </theme-configurator>
      </section>
    </aside>
  </div>
</template>
<script>
import bus from '../../bus.js';
import ThemeConfigurator from '../../components/theme-configurator';
import ComponentsPreview from '../../components/theme/components-preview';
import BasicTokensPreview from '../../components/theme/basic-tokens-preview';
import {
  loadPreviewToLocal,
  loadUserThemeToLocal,
  saveUserThemeToLocal
} from '../../components/theme/localstorage';
import {
  getThemeConfigObject
} from '../../components/theme/utils';
import {
  ACTION_APPLY_THEME
} from '../../components/theme/constant.js';

const maxUserTheme = 8;

export default {
  components: {
    ThemeConfigurator,
    BasicTokensPreview,
    ComponentsPreview
  },
  data() {
    return {
      previewConfig: {},
      themeConfig: {},
      userTheme: []
    };
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    getNewUserThemeName(originName) {
      let n = 1;
      let name;
      while (true) {
        name = `${originName}-${n}`;
        if (this.userTheme.filter(theme => (theme.name === name)).length === 0) {
          break;
        }
        n += 1;
      }
      return name;
    },
    onUserConfigUpdate(userConfig) {
      const themeConfig = JSON.stringify(userConfig);
      const { type, name } = this.previewConfig;
      if (type === 'official') {
        if (this.userTheme.length >= maxUserTheme) {
          this.$message.error('Max user theme 8');
          return;
        }
        const autoUserName = this.getNewUserThemeName(name);
        this.previewConfig.name = autoUserName;
        this.previewConfig.type = 'user';
        this.userTheme.push({
          update: Date.now(),
          name: autoUserName,
          theme: themeConfig
        });
        saveUserThemeToLocal(this.userTheme);
        return;
      }
      if (type === 'user') {
        this.userTheme.forEach((config) => {
          if (config.name === name) {
            config.update = Date.now();
            config.theme = themeConfig;
          }
        });
        saveUserThemeToLocal(this.userTheme);
      }
    }
  },
  mounted() {
    this.userTheme = loadUserThemeToLocal();
    const previewConfig = loadPreviewToLocal();
    const pageRefer = this.$route.params.refer;
    if (!previewConfig || !pageRefer) {
      this.$alert('No preview config', 'No preview config', {
        confirmButtonText: 'OK',
        callback: action => {
          const newPath = this.$route.path.replace('/preview', '');
          this.$router.replace(newPath);
        }
      });
      return;
    }
    this.previewConfig = previewConfig;
    const themeConfig = getThemeConfigObject(previewConfig.theme);
    if (themeConfig) {
      this.themeConfig = themeConfig;
      bus.$emit(ACTION_APPLY_THEME, themeConfig);
    }
  }
};
</script>
