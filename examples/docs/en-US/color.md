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
    background-color: #5E82FC;
  }
  .bg-green {
    background-color: #7DCB46;
  }
  .bg-red {
    background-color: #EC5657;
  }
  .bg-brown {
    background-color: #EBB242;
  }
  .bg-smoke {
    color: #4A4E59;
    background-color: #F4F5F9;
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
    background-color: #909399;
  }

  .bg-text-darkest {
    background-color: #1E1E28;
  }
  .bg-text-dark {
    background-color: #4A4E59;
  }
  .bg-text-medium {
    background-color: #909090;
  }
  .bg-text-light {
    background-color: #CCCCCC;
  }
  .bg-text-white {
    color: #4A4E59;
    background-color: #FFFFFF;
  }

  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color
Element uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

### Main Color

The main color of Element is bright and friendly blue.

<el-row :gutter="10">
  <el-col :span="4">
    <div class="demo-color-box bg-blue">Blueberry<div class="value">#5E82FC</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-green">Mantis<div class="value">#7DCB46</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-red">Sunset Orange<div class="value">#EC5657</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-brown">Meat Brown<div class="value">#EBB242</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-smoke">White Smoke<div class="value">#F4F5F9</div></div>
  </el-col>
</el-row>

### Text Color

Text colors are for text.

<el-row :gutter="10">
  <el-col :span="4">
    <div class="demo-color-box bg-text-darkest">Dark Gunmetal<div class="value">#1E1E28</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-text-dark">Davy's Grey<div class="value">#4A4E59</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-text-medium">Taupe Gray<div class="value">#909090</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-text-light">Pastel Gray<div class="value">#CCCCCC</div></div>
  </el-col>
  <el-col :span="4">
    <div class="demo-color-box bg-text-white">White<div class="value">#FFFFFF</div></div>
  </el-col>
</el-row>