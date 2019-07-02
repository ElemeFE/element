<script>
import bus from '../../../bus.js';
import Loading from './loading';
import DocStyle from './docStyle';
import { updateVars } from './api.js';
import { updateDomHeadStyle } from '../utils.js';
import {
  ACTION_APPLY_THEME,
  ACTION_DOWNLOAD_THEME,
  ACTION_USER_CONFIG_UPDATE
} from '../constant.js';
import {
  loadUserThemeFromLocal,
  loadPreviewFromLocal
} from '../localstorage.js';
import { getActionDisplayName } from '../../theme-configurator/utils/utils';

export default {
  mixins: [Loading, DocStyle],
  mounted() {
    this.checkLocalThemeConfig();
    bus.$on(ACTION_APPLY_THEME, val => {
      this.userConfig = val;
      this.onAction();
    });
    bus.$on(ACTION_DOWNLOAD_THEME, (themeConfig, themeName) => {
      this.onDownload(themeConfig, themeName);
    });
  },
  data() {
    return {
      userConfig: {},
      lastApply: 0
    };
  },
  methods: {
    applyStyle(res, time) {
      if (time < this.lastApply) return;
      this.updateDocs(() => {
        updateDomHeadStyle('chalk-style', res);
      });
      this.lastApply = time;
    },
    onDownload(themeConfig, themeName) {
      this.triggertProgressBar(true);
      updateVars(
        Object.assign({}, themeConfig, { download: true }),
        xhr => {
          xhr.responseType = 'blob';
        }
      ).then()
        .catch((err) => {
          this.onError(err);
        })
        .then(() => {
          this.triggertProgressBar(false);
        });
      ga('send', 'event', 'ThemeConfigurator', 'Download', themeName);
    },
    onAction() {
      this.triggertProgressBar(true);
      const time = +new Date();
      updateVars(this.userConfig)
        .then(res => {
          this.applyStyle(res, time);
        })
        .catch(err => {
          this.onError(err);
        })
        .then(() => {
          this.triggertProgressBar(false);
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
    triggertProgressBar(isLoading) {
      bus.$emit('user-theme-config-loading', isLoading);
    },
    updateDocs(cb) {
      window.userThemeConfig = JSON.parse(JSON.stringify(this.userConfig));
      bus.$emit(ACTION_USER_CONFIG_UPDATE, this.userConfig);
      this.updateDocStyle(this.userConfig, cb);
    },
    checkLocalThemeConfig() {
      // load user local theme
      const previewConfig = loadPreviewFromLocal();
      if (previewConfig.type === 'user') {
        const userConfig = loadUserThemeFromLocal();
        this.$message(getActionDisplayName('load-local-theme-config'));
        const config = userConfig.filter(theme => (theme.name === previewConfig.name));
        if (config && config[0]) {
          this.userConfig = JSON.parse(config[0].theme);
          this.onAction();
        }
      }
    }
  }
};
</script>