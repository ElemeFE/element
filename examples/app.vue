<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
  import { use } from 'main/locale';
  import zhLocale from 'main/locale/lang/zh-CN';
  import enLocale from 'main/locale/lang/en';
  import esLocale from 'main/locale/lang/es';

  const lang = location.hash.replace('#', '').split('/')[1] || 'zh-CN';
  const localize = lang => {
    switch (lang) {
      case 'zh-CN':
        use(zhLocale);
        break;
      case 'es':
        use(esLocale);
        break;
      default:
        use(enLocale);
    }
  };
  localize(lang);

  export default {
    name: 'app',

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },

    watch: {
      lang(val) {
        if (val === 'zh-CN') {
          this.suggestJump();
        }
        localize(val);
      }
    },

    methods: {
      suggestJump() {
        if (process.env.NODE_ENV !== 'production') return;

        const href = location.href;
        const preferGithub = localStorage.getItem('PREFER_GITHUB');
        if (href.indexOf('element-cn') > -1 || href.indexOf('element.faas') > -1 || preferGithub) return;
        setTimeout(() => {
          if (this.lang !== 'zh-CN') return;
          this.$confirm('建议大陆用户访问部署在国内的站点，是否跳转？', '提示')
            .then(() => {
              location.href = location.href
                .replace('https:', 'http:')
                .replace('element.', 'element-cn.');
            })
            .catch(() => {
              localStorage.setItem('PREFER_GITHUB', 'true');
            });
        }, 1000);
      }
    },

    mounted() {
      localize(this.lang);
      if (this.lang === 'zh-CN') {
        this.suggestJump();
      }
    }
  };
</script>

<style>
  @import 'highlight.js/styles/color-brewer.css';
  @import 'assets/styles/common.css';
  @import 'assets/styles/fonts/style.css';
</style>
