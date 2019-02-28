<script>
  import bus from '../../bus';
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
      bus.$on('user-theme-config-update', this.setGlobal);
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

<style>
.demo-border .text {
  width: 15%;
}
.demo-border .line {
  width: 70%;
}
.demo-border .line div{
  width: 100%;
  height: 0;
  border: 1px solid #EEE;
}
.demo-border .line .dashed{ 
  border: 2px dashed #EEE;
}
.demo-shadow {
  height: 100px;
  width: 50%;
  border: 1px solid #eee;
}
.demo-shadow-text {
  line-height: 50px;
  color: #666;
  font-size: 14px;
}
.demo-radius .title{
  color: #666;
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value{
  color: #333;
  font-size: 16px;
  margin: 10px 0;
}
.demo-radius .radius {
  height: 60px;
  width: 70%;
  border: 1px solid #D7DAE2;
  border-radius: 0;
  margin-top: 20px;
}
.demo-radius .radius-30 {
  border-radius: 30px;
}
</style>

## Border

We standardize the borders that can be used in buttons, cards, pop-ups and other components.

### Border

There are few border styles to choose.

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

There are few radius styles to choose.

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

There are few shaodw styles to choose.

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowBase }"
></div>
<span class="demo-shadow-text">Basic Shaodw box-shadow: {{boxShadowBase}}</span>

<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLight }"
></div>
<span class="demo-shadow-text">Light Shadow box-shadow: {{boxShadowLight}}</span>
