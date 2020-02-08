<script>
const ORIGINAL_THEME = '#409EFF';
import { get as ajaxGet } from './ajax.js';
import { updateDomHeadStyle } from '../utils.js';

export default {
  data() {
    return {
      docs: '', // content of docs css
      theme: ORIGINAL_THEME,
      asyncCb: true
    };
  },
  methods: {
    updateDocStyle(e, cb) {
      const val = e.global['$--color-primary'] || ORIGINAL_THEME;
      const oldVal = this.theme;
      const getHandler = (variable, id) => {
        return () => {
          let newStyle = this.updateStyle(this[variable], ORIGINAL_THEME, val);
          updateDomHeadStyle(id, newStyle);
          this.asyncCb && cb();
        };
      };
      const docsHandler = getHandler('docs', 'docs-style');
      if (!this.docs) {
        const links = [].filter.call(document.querySelectorAll('link'), link => {
          return /docs\..+\.css/.test(link.href || '');
        });
        if (links[0]) {
          this.getCSSString(links[0].href, docsHandler, 'docs');
        } else {
          this.asyncCb = false;
        }
      } else {
        docsHandler();
      }
      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText;
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text);
        });
      styles.forEach(style => {
        const { innerText } = style;
        if (typeof innerText !== 'string') return;
        style.innerText = this.updateStyle(innerText, oldVal, val);
      });
      this.theme = val;
      !this.asyncCb && cb();
    },
    updateStyle(style, oldColor, newColor) {
      return style.replace(new RegExp(oldColor, 'ig'), newColor);
    },
    getCSSString(url, callback, variable) {
      ajaxGet(url).then((res) => {
        this[variable] = res;
        callback();
      });
    }
  }
};
</script>
