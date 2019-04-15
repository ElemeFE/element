<style lang="scss">
.component-preview {
  padding-right: 10px;
  padding-bottom: 30px;
  h4 {
    font-size: 18px;
    margin: 25px 0;
  }
  .heading>div{
    margin-bottom: 15px;
  }
  .title {
    font-size: 18px;
    font-weight:400;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Color</h4>
    <el-row :gutter="12">
      <el-col :span="4" v-for="(color, key) in colorLine1" :key="key">
        <div class="demo-color-box" :style="{ background: dataProxy(color) }">
          {{color}}
          <div class="value">{{dataProxy(color)}}</div>
          <div class="bg-color-sub">
            <div
              class="bg-success-sub-item"
              v-for="(item, key) in Array(2)"
              :key="key"
              :style="{ background: tintColor(dataProxy(color), (key + 8) / 10) }"
            ></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="4">
        <div class="demo-color-box demo-color-box-other" :style="{ background: textPrimary }">
          Primary Text
          <div class="value">{{textPrimary}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="demo-color-box demo-color-box-other" :style="{ background: textRegular }">
          Regular Text
          <div class="value">{{textRegular}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="demo-color-box demo-color-box-other" :style="{ background: textSecondary }">
          Secondary Text
          <div class="value">{{textSecondary}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="demo-color-box demo-color-box-other" :style="{ background: textPlaceholder }">
          Placeholder
          <div class="value">{{textPlaceholder}}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="4">
        <div
          class="demo-color-box demo-color-box-other demo-color-box-lite"
          :style="{ background: borderBase }"
        >
          Border Base
          <div class="value">{{borderBase}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          class="demo-color-box demo-color-box-other demo-color-box-lite"
          :style="{ background: borderLight }"
        >
          Border Light
          <div class="value">{{borderLight}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          class="demo-color-box demo-color-box-other demo-color-box-lite"
          :style="{ background: borderLighter }"
        >
          Border Lighter
          <div class="value">{{borderLighter}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          class="demo-color-box demo-color-box-other demo-color-box-lite"
          :style="{ background: borderExtraLight }"
        >
          Border Extralight
          <div class="value">{{borderExtraLight}}</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="4">
        <div class="demo-color-box demo-color-box-other" :style="{ background: black }">
          Background B
          <div class="value">{{black}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          class="demo-color-box demo-color-box-other"
          :style="{ background: white, color: '#303133', border: '1px solid #eee' }"
        >
          Background W
          <div class="value">{{white}}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="demo-color-box demo-color-box-other bg-transparent">
          Background
          <div class="value">Transparent</div>
        </div>
      </el-col>
    </el-row>
    <h4>Typography</h4>
    <el-row :gutter="12">
      <el-col :span="6" class="heading">
        <div :style="{ fontSize: font_size_extra_large }">Heading1</div>
        <div :style="{ fontSize: font_size_large }">Heading2</div>
        <div :style="{ fontSize: font_size_medium }">Heading3</div>
        <div :style="{ fontSize: font_size_base }">Heading4</div>
        <div :style="{ fontSize: font_size_small }">Heading5</div>
        <div :style="{ fontSize: font_size_extra_small }">Heading6</div>
      </el-col>
      <el-col :span="8">
        <div class="title">Example body text</div>
        <p :style="{ fontSize: font_size_base }">With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users, and there will be many who might even use the same layouts. If MySpace layouts are chosen well, then you can enhance your profile a great deal. This will help you get more contacts as well. But because of the demand, there will be the need to find unique layouts.</p>
      </el-col>
      <el-col :span="8">
        <div class="title">Example small text</div>
        <p :style="{ fontSize: font_size_small }" >Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch with the central office via their notebooks. At home, we rely on our desktops and notebooks to do our shopping, to entertain us, and to keep us abreast of world events. We may not see our email servers, but we count on them to deliver our email whenever and wherever we want it. Computer hardware weaves itself through the fabric of our lives.</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bus from '../../bus';
import { tintColor } from '../../color.js';

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
  'borderExtraLight': '$--border-color-extra-light',
  'font_size_extra_large': '$--font-size-extra-large',
  'font_size_large': '$--font-size-large',
  'font_size_medium': '$--font-size-medium',
  'font_size_base': '$--font-size-base',
  'font_size_small': '$--font-size-small',
  'font_size_extra_small': '$--font-size-extra-small'
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
  borderExtraLight: '#F2F6FC',
  'font_size_extra_large': '20px',
  'font_size_large': '18px',
  'font_size_medium': '16px',
  'font_size_base': '14px',
  'font_size_small': '13px',
  'font_size_extra_small': '12px'
};

export default {
  created() {
    bus.$on('user-theme-config-update', this.setGlobal);
  },
  mounted() {
    this.setGlobal();
  },
  methods: {
    tintColor(a, b) {
      return tintColor(a, b);
    },
    dataProxy(value) {
      return this[value.toLowerCase()];
    },
    setGlobal() {
      if (window.userThemeConfig) {
        this.global = window.userThemeConfig.global;
      }
    }
  },
  watch: {
    global: {
      immediate: true,
      handler(value) {
        Object.keys(original).forEach((o) => {
          if (value[varMap[o]]) {
            this[o] = value[varMap[o]];
          } else {
            this[o] = original[o];
          }
        });
      }
    }
  },
  data() {
    return {
      global: {},
      colorLine1: ['Primary', 'Success', 'Warning', 'Danger', 'Info'],
      primary: '#409EFF',
      success: '#67C23A',
      warning: '#E6A23C',
      danger: '#F56C6C',
      info: '#909399',
      textPrimary: '#303133',
      textRegular: '#606266',
      textSecondary: '#909399',
      textPlaceholder: '#C0C4CC',
      borderBase: '#DCDFE6',
      borderLight: '#E4E7ED',
      borderLighter: '#EBEEF5',
      borderExtraLight: '#F2F6FC',
      white: '#FFFFFF',
      black: '#000000',
      'font_size_extra_large': '20px',
      'font_size_large': '18px',
      'font_size_medium': '16px',
      'font_size_base': '14px',
      'font_size_small': '13px',
      'font_size_extra_small': '12px'
    };
  }
};
</script>
