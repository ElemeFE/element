<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;

    & .value {
      font-size: 12px;
      opacity: 0.69;
      line-height: 24px;
    }
  }
  .demo-color-box-group {
    .demo-color-box {
      border-radius: 0;
    }
    .demo-color-box:first-child {
      border-radius: 4px 4px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .bg-blue {
    background-color: #409EFF;
  }

  .bg-success {
    background-color: #67C23A;
  }
  .bg-warning {
    background-color: #EB9E05;
  }
  .bg-danger {
    background-color: #FA5555;
  }
  .bg-info {
    background-color: #878D99;
  }

  .bg-text-primary {
    background-color: #2d2f33;
  }
  .bg-text-regular {
    background-color: #5a5e66;
  }
  .bg-text-secondary {
    background-color: #878d99;
  }
  .bg-text-placeholder {
    background-color: #b4bccc;
  }

  .bg-border-base {
    background-color: #d8dce5;
  }
  .bg-border-light {
    background-color: #dfe4ed;
  }
  .bg-border-lighter {
    background-color: #e6ebf5;
  }
  .bg-border-extra-light {
    background-color: #edf2fc;
  }

  [class*=" bg-border-"] {
    color: #5a5e66;
  }
</style>

## Color 色彩

Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Element 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-blue">Blue<div class="value">#409EFF</div></div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-success">Success<div class="value">#67C23A</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-warning">Warning<div class="value">#EB9E05</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-danger">Danger<div class="value">#FA5555</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-info">Info<div class="value">#878D99</div></div>
  </el-col>
</el-row>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">主要文字<div class="value">#2D2F33</div></div>
      <div class="demo-color-box bg-text-regular">常规文字<div class="value">#5A5E66</div></div>
      <div class="demo-color-box bg-text-secondary">次要文字<div class="value">#878D99</div></div>
      <div class="demo-color-box bg-text-placeholder">占位文字<div class="value">#B4BCCC</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">一级边框<div class="value">#D8DCE5</div></div>
      <div class="demo-color-box bg-border-light">二级边框<div class="value">#DFE4ED</div></div>
      <div class="demo-color-box bg-border-lighter">三级边框<div class="value">#E6EBF5</div></div>
      <div class="demo-color-box bg-border-extra-light">四级边框<div class="value">#EDF2FC</div></div>
    </div>
  </el-col>
</el-row>
