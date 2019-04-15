<style lang="scss">
.component-preview {
  padding-right: 10px;
  padding-bottom: 30px;
  h4 {
    font-size: 18px;
    margin: 25px 0;
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
    <h4>Text</h4>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
  </div>
</template>

<script>
import { tintColor } from '../../color.js';

export default {
  methods: {
    tintColor(a, b) {
      return tintColor(a, b);
    },
    dataProxy(value) {
      return this[value.toLowerCase()];
    }
  },
  data() {
    return {
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
      black: '#000000'
    };
  }
};
</script>
