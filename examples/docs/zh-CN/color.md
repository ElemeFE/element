<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import { ACTION_USER_CONFIG_UPDATE } from '../../components/theme/constant.js';
  const varMap = {
    'primary': '$--color-primary',
    'success': '$--color-success',
    'warning': '$--color-warning',
    'danger': '$--color-danger',
    'info': '$--color-info',
    'white': '$--color-white',
    'black': '$--color-black',
    'textPrimary': '$--color-text-primary',
    'textRegular': '$--color-text-regular',
    'textSecondary': '$--color-text-secondary',
    'textPlaceholder': '$--color-text-placeholder',
    'borderBase': '$--border-color-base',
    'borderLight': '$--border-color-light',
    'borderLighter': '$--border-color-lighter',
    'borderExtraLight': '$--border-color-extra-light'
  };
  const original = {
    primary: '#409EFF',
    success: '#67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    white: '#FFFFFF',
    black: '#000000',
    textPrimary: '#303133',
    textRegular: '#606266',
    textSecondary: '#909399',
    textPlaceholder: '#C0C4CC',
    borderBase: '#DCDFE6',
    borderLight: '#E4E7ED',
    borderLighter: '#EBEEF5',
    borderExtraLight: '#F2F6FC'
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
        primary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
        white: '',
        black: '',
        textPrimary: '',
        textRegular: '',
        textSecondary: '',
        textPlaceholder: '',
        borderBase: '',
        borderLight: '',
        borderLighter: '',
        borderExtraLight: ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          Object.keys(original).forEach((o) => {
            if (value[varMap[o]]) {
              this[o] = value[varMap[o]]
            } else {
              this[o] = original[o]
            }
          });
        }
      }
    },
  }
</script>

## Color 色彩

Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Element 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="10" :xs="{span: 12}">
    <div class="demo-color-box" :style="{ background: primary }">Brand Color
      <div class="value">#409EFF</div>
      <div class="bg-color-sub" :style="{ background: tintColor(primary, 0.9) }">
        <div
          class="bg-blue-sub-item"
          v-for="(item, key) in Array(8)"
          :key="key"
          :style="{ background: tintColor(primary, (key + 1) / 10) }"
        ></div>
      </div>
    </div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: success }"
    >Success<div class="value">#67C23A</div>
      <div 
        class="bg-color-sub"
      >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(success, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: warning }"
    >Warning<div class="value">#E6A23C</div>
      <div 
          class="bg-color-sub"
        >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(warning, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: danger }"
    >Danger<div class="value">#F56C6C</div>
      <div 
          class="bg-color-sub"
        >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(danger, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: info }"
    >Info<div class="value">#909399</div>
      <div 
          class="bg-color-sub"
        >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(info, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
</el-row>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textPrimary }"
      >主要文字<div class="value">{{textPrimary}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textRegular }"
      >
      常规文字<div class="value">{{textRegular}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textSecondary }"
      >次要文字<div class="value">{{textSecondary}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textPlaceholder }"
      >占位文字<div class="value">{{textPlaceholder}}</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderBase }"
      >一级边框<div class="value">{{borderBase}}</div></div>
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderLight }"
      >二级边框<div class="value">{{borderLight}}</div></div>
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderLighter }"
      >三级边框<div class="value">{{borderLighter}}</div></div>
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderExtraLight }"
      >四级边框<div class="value">{{borderExtraLight}}</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div 
      class="demo-color-box demo-color-box-other"
      :style="{ background: black }"
      >基础黑色<div class="value">{{black}}</div></div>
      <div
      class="demo-color-box demo-color-box-other"
      :style="{ background: white, color: '#303133', border: '1px solid #eee' }"
      >基础白色<div class="value">{{white}}</div></div>
      <div class="demo-color-box demo-color-box-other bg-transparent">透明<div class="value">Transparent</div>
      </div>
    </div>
  </el-col>
</el-row>
