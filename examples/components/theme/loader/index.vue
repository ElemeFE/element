<script>
import bus from '../../../bus.js';
import Loading from './loading';
import DocStyle from './docStyle';
import { updateVars } from './api.js';
import { updateDomHeadStyle } from '../utils.js';

export default {
  mixins: [Loading, DocStyle],
  mounted() {
    bus.$on('applyNewStyleFromServer', val => {
      this.userConfig = val;
      this.onAction();
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
      // window.userThemeConfig = JSON.parse(JSON.stringify(this.userConfig));
      // bus.$emit('user-theme-config-update', this.userConfig);
      this.updateDocStyle(this.userConfig, cb);
    }
  }
};
</script>