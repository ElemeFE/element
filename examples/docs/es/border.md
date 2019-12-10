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

## Border

Estandarizamos los bordes que se pueden utilizar en botones, tarjetas, pop-ups y otros componentes.

### Border

Hay pocos estilos de borde para elegir.

<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">Name</td>
      <td class="text">Thickness</td>
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

Hay pocos estilos de radio para elegir.

<el-row :gutter="12" class="demo-radius">
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">No Radius</div>
    <div class="value">border-radius: 0px</div>
    <div class="radius"></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Small Radius</div>
    <div class="value">border-radius: {{borderRadiusSmall}}</div>
    <div 
      class="radius" 
      :style="{ borderRadius: borderRadiusSmall }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Large Radius</div>
    <div class="value">border-radius: {{borderRadiusBase}}</div>
    <div 
      class="radius"
      :style="{ borderRadius: borderRadiusBase }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Round Radius</div>
    <div class="value">border-radius: 30px</div>
    <div class="radius radius-30"></div>
  </el-col>
</el-row>

### Shadow

Hay pocos estilos de sombra para elegir.

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowBase }"
></div>
<span class="demo-shadow-text">Basic Shadow box-shadow: {{boxShadowBase}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLight }"
></div>
<span class="demo-shadow-text">Light Shadow box-shadow: {{boxShadowLight}}</span>
