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
      overflow: auto;
      background: #f5f7fa;
      border: 1px solid #ebeef5;
      border-radius: 5px;
      margin-bottom: 20px;
      &.fixed {
        position: fixed;
        width: 285px;
      }
    }
  }
}
</style>
<template>
  <div class="page-container page-theme-preview" ref="themePreview">
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
      <section class="editor" :style="{top: `${editorTop}px`, height: `${editorHeight}px`}" :class="{'fixed': isFixed}">
        <theme-configurator
          :isOfficial="isOfficial"
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
  loadPreviewFromLocal,
  loadUserThemeFromLocal,
  saveUserThemeToLocal
} from '../../components/theme/localstorage';
import {
  getThemeConfigObject
} from '../../components/theme/utils';
import {
  ACTION_APPLY_THEME
} from '../../components/theme/constant.js';
import throttle from 'throttle-debounce/throttle';

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
      userTheme: [],
      editorTop: 0,
      editorHeight: 1000,
      isFixed: false
    };
  },
  computed: {
    isOfficial() {
      return this.previewConfig.type === 'official';
    }
  },
  created() {
    this.throttledHandleScroll = throttle(10, true, index => {
      this.handleScroll(index);
    });
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
      if (this.isOfficial) {
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
    },
    handleScroll() {
      const rect = this.$refs.themePreview.getBoundingClientRect();
      let offsetTop = rect.top;
      let offsetBottom = rect.bottom;
      const calHeight = this.editorHeight + 25 + 20;
      if (offsetTop < 0) {
        this.isFixed = true;
        if (offsetBottom < calHeight) {
          this.editorTop = 25 - calHeight + offsetBottom;
        } else {
          this.editorTop = 25;
        }
      } else {
        this.isFixed = false;
        this.editorTop = 0;
      }
    }
  },
  mounted() {
    this.editorHeight = window.innerHeight - 40;
    window.addEventListener('scroll', this.throttledHandleScroll);
    this.userTheme = loadUserThemeFromLocal();
    const previewConfig = loadPreviewFromLocal();
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
