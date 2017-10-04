<template>
  <el-color-picker
    class="theme-picker"
    popper-class="theme-picker-dropdown"
    v-model="theme"></el-color-picker>
</template>

<style>
  .theme-picker {
    height: 80px;
    display: inline-block;
    @utils-vertical-center;
  }

  .theme-picker .el-color-picker__trigger {
    vertical-align: middle;
  }
  
  .theme-picker-dropdown .el-color-dropdown__link-btn {
    display: none;
  }
</style>

<script>
  import { version } from 'main/index.js';

  const ORIGINAL_THEME = '#409EFF';
  export default {
    data() {
      return {
        chalk: '',
        theme: ORIGINAL_THEME
      };
    },

    watch: {
      theme(val, oldVal) {
        if (typeof val !== 'string') return;
        const themeCluster = this.getThemeCluster(val.replace('#', ''));
        const originalCluster = this.getThemeCluster(oldVal.replace('#', ''));
        const handler = () => {
          const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''));
          let newStyle = this.updateStyle(this.chalk, originalCluster, themeCluster);

          let styleTag = document.getElementById('theme-style');
          if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.setAttribute('id', 'theme-style');
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };

        if (!this.chalk) {
          this.getChalkString(handler);
        } else {
          handler();
        }

        const styles = [].slice.call(document.querySelectorAll('style'))
          .filter(style => {
            const text = style.innerText;
            return new RegExp(oldVal).test(text) && !/Chalk Variables/.test(text);
          });
        styles.forEach(style => {
          const { innerText } = style;
          if (typeof innerText !== 'string') return;
          style.innerText = this.updateStyle(innerText, originalCluster, themeCluster);
        });
      }
    },

    methods: {
      updateStyle(style, oldCluster, newCluster) {
        let newStyle = style;
        oldCluster.forEach((color, index) => {
          newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index]);
        });
        return newStyle;
      },

      getChalkString(callback) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this.chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '');
            callback();
          }
        };
        xhr.open('GET', `https://unpkg.com/element-ui@${ version }/lib/theme-chalk/index.css`);
        xhr.send();
      },

      getThemeCluster(theme) {
        const tintColor = (color, tint) => {
          let red = parseInt(color.slice(0, 2), 16);
          let green = parseInt(color.slice(2, 4), 16);
          let blue = parseInt(color.slice(4, 6), 16);

          if (tint === 0) { // when primary color is in its rgb space
            return [red, green, blue].join(',');
          } else {
            red += Math.round(tint * (255 - red));
            green += Math.round(tint * (255 - green));
            blue += Math.round(tint * (255 - blue));

            red = red.toString(16);
            green = green.toString(16);
            blue = blue.toString(16);

            return `#${ red }${ green }${ blue }`;
          }
        };

        const clusters = [theme];
        for (let i = 0; i <= 9; i++) {
          clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
        }
        return clusters;
      }
    }
  };
</script>