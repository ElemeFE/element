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
    background-color: #13CE66;
  }
  .bg-warning {
    background-color: #f7ba2a;
  }
  .bg-danger {
    background-color: #ff4949;
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

## Color
Element uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

### Main Color

The main color of Element is bright and friendly blue.

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-blue">Blue<div class="value">#409EFF</div></div>
  </el-col>
</el-row>

### Secondary Color

Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)

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

### Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">Primary Text<div class="value">#2D2F33</div></div>
      <div class="demo-color-box bg-text-regular">Regular Text<div class="value">#5A5E66</div></div>
      <div class="demo-color-box bg-text-secondary">Secondary Text<div class="value">#878D99</div></div>
      <div class="demo-color-box bg-text-placeholder">Placeholder Text<div class="value">#B4BCCC</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">Base Border<div class="value">#D8DCE5</div></div>
      <div class="demo-color-box bg-border-light">Light Border<div class="value">#DFE4ED</div></div>
      <div class="demo-color-box bg-border-lighter">Lighter Border<div class="value">#E6EBF5</div></div>
      <div class="demo-color-box bg-border-extra-light">Extra Light Border<div class="value">#EDF2FC</div></div>
    </div>
  </el-col>
</el-row>