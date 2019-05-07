<script>
  import bus from '../../bus';
  import { ACTION_USER_CONFIG_UPDATE } from '../../components/theme/constant.js';
  const varMap = [
    '$--font-size-extra-large',
    '$--font-size-large',
    '$--font-size-medium',
    '$--font-size-base',
    '$--font-size-small',
    '$--font-size-extra-small'
  ];
  const original = {
    'font_size_extra_large': '20px',
    'font_size_large': '18px',
    'font_size_medium': '16px',
    'font_size_base': '14px',
    'font_size_small': '13px',
    'font_size_extra_small': '12px'
  }
  export default {
    created() {
      bus.$on(ACTION_USER_CONFIG_UPDATE, this.setGlobal);
    },
    mounted() {
      this.setGlobal();
    },
    methods: {
      tintColor(color, tint) {
        return tintColor(color, tint);
      },
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global;
        }
      }
    },
    data() {
      return {
        global: {},
        'font_size_extra_large': '',
        'font_size_large': '',
        'font_size_medium': '',
        'font_size_base': '',
        'font_size_small': '',
        'font_size_extra_small': ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          varMap.forEach((v) => {
            const key = v.replace('$--', '').replace(/-/g, '_')
            if (value[v]) {
              this[key] = value[v]
            } else {
              this[key] = original[key]
            }
          });
        }
      }
    },
  }
</script>

## Typographie

Nous avons créé une convention de police d'écriture afin d'assurer la meilleur présentation possible sur toutes le plateformes.

### Police

<div class="demo-term-box">
<img src="../../assets/images/term-pingfang.png" alt="">
<img src="../../assets/images/term-hiragino.png" alt="">
<img src="../../assets/images/term-microsoft.png" alt="">
<img src="../../assets/images/term-sf.png" alt="">
<img src="../../assets/images/term-helvetica.png" alt="">
<img src="../../assets/images/term-arial.png" alt="">
</div>

### Convention des polices

<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>Level</td>
      <td>Font Size</td>
      <td class="color-dark-light">Demo</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_small }"
    >
      <td>Supplementary text</td>
      <td class="color-dark-light">{{font_size_extra_small}} Extra Small</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_small }"
    >
      <td>Body (small)</td>
      <td class="color-dark-light">{{font_size_small}} Small</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_base }"
    >
      <td>Body</td>
      <td class="color-dark-light">{{font_size_base}} Base</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_medium }"
    >
      <td >Small Title</td>
      <td class="color-dark-light">{{font_size_medium}} Medium</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_large }"
    >
      <td>Title</td>
      <td class="color-dark-light">{{font_size_large}} large</td>
      <td>Build with Element</td>
    </tr>
    <tr
    :style="{ fontSize: font_size_extra_large }"
    >
      <td>Main Title</td>
      <td class="color-dark-light">{{font_size_extra_large}} Extra large</td>
      <td>Build with Element</td>
    </tr>
  </tbody>
</table>

### Font Line Height

<div>
<img class="lineH-left" src="~examples/assets/images/typography.png" />
<ul class="lineH-right">
<li>line-height:1 <span>No line height</span></li>
<li>line-height:1.3 <span>Compact</span></li>
<li>line-height:1.5 <span>Regular</span></li>
<li>line-height:1.7 <span>Loose</span></li>
</ul>
</div>

### Font-family

```css
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```
