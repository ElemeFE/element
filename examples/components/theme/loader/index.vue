<script>
import bus from '../../../bus.js';
import Loading from './loading';
import DocStyle from './docStyle';
import { updateVars } from './api.js';
import { updateDomHeadStyle } from '../utils.js';
import {
  ACTION_APPLY_THEME,
  ACTION_DOWNLOAD_THEME
} from '../constant.js';

export default {
  mixins: [Loading, DocStyle],
  mounted() {
    bus.$on(ACTION_APPLY_THEME, val => {
      this.userConfig = val;
      this.onAction();
    });
    bus.$on(ACTION_DOWNLOAD_THEME, val => {
      this.onDownload(val);
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
    onDownload(themeConfig) {
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
      ga('send', 'event', 'ThemeConfigurator', 'Download');
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
      bus.$emit('user-theme-config-update', this.userConfig);
      this.updateDocStyle(this.userConfig, cb);
    },
    checkLocalThemeConfig() {
      try {
        if (this.hasLocalConfig) {
          // this.$message(getActionDisplayName('load-local-theme-config'));
          this.onAction();
          return;
        }
        const config = JSON.parse(
          // localStorage.getItem(ELEMENT_THEME_USER_CONFIG)
        );
        if (config && config.global) {
          this.userConfig = config;
          this.hasLocalConfig = true;
          this.showConfigurator();
        }
      } catch (e) {
        // bad local config
      }
    }
  }
};
</script>