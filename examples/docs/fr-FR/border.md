<script>
  import bus from '../../bus';
  import { ACTION_USER_CONFIG_UPDATE } from '../../components/theme/constant.js';
  const varMap = {
    '$--box-shadow-light': 'boxShadowLight',
    '$--box-shadow-base': 'boxShadowBase',
    '$--border-radius-base': 'borderRadiusBase',
    '$--border-radius-small': 'borderRadiusSmall'
  };
  const original = {
    boxShadowLight: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
    boxShadowBase: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
    borderRadiusBase: '4px',
    borderRadiusSmall: '2px'
  }
  export default {
    created() {
      bus.$on(ACTION_USER_CONFIG_UPDATE, this.setGlobal);
    },
    mounted() {
      this.setGlobal();
    },
    methods: {
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global;
        }
      }
    },
    data() {
      return {
        global: {},
        boxShadowLight: '',
        boxShadowBase: '',
        borderRadiusBase: '',
        borderRadiusSmall: ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          Object.keys(varMap).forEach((c) => {
            if (value[c]) {
              this[varMap[c]] = value[c]
            } else {
              this[varMap[c]] = original[varMap[c]]
            }
          });
        }
      }
    }
  }
</script>

## Bordure

Nous normalisons l'apparence des bordures qui peuvent être utilisées pour les boutons, les cartes, les pop-ups et d'autres composants.

### Bordure

Il y a plusieurs styles de bordure que vous pouvez choisir.

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">Nom</td>
      <td class="text">Épaisseur</td>
      <td class="line">Demo</td>
    </tr>
    <tr>
      <td class="text">Solid</td>
      <td class="text">1px</td>
      <td class="line">
        <div></div>
      </td>
    </tr>
    <tr>
      <td class="text">Dashed</td>
      <td class="text">2px</td>
      <td class="line">
        <div class="dashed"></div>
      </td>
    </tr>
  </tbody>
</table>

### Radius

Il y a plusieurs styles de radius que vous pouvez choisir.

<el-row :gutter="12" class="demo-radius">
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Pas de radius</div>
    <div class="value">border-radius: 0px</div>
    <div class="radius"></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Petit radius</div>
    <div class="value">border-radius: {{borderRadiusSmall}}</div>
    <div
      class="radius"
      :style="{ borderRadius: borderRadiusSmall }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Grand radius</div>
    <div class="value">border-radius: {{borderRadiusBase}}</div>
    <div
      class="radius"
      :style="{ borderRadius: borderRadiusBase }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Radius rond</div>
    <div class="value">border-radius: 30px</div>
    <div class="radius radius-30"></div>
  </el-col>
</el-row>

### Ombres

Il y a plusieurs styles d'ombres que vous pouvez choisir.

<div
class="demo-shadow"
:style="{ boxShadow: boxShadowBase }"
></div>
<span class="demo-shadow-text">Ombre de base, box-shadow: {{boxShadowBase}}</span>

<div
class="demo-shadow"
:style="{ boxShadow: boxShadowLight }"
></div>
<span class="demo-shadow-text">Ombre légère, box-shadow: {{boxShadowLight}}</span>
