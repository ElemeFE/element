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
    background-color: #7f95e1;
  }
  .bg-green {
    background-color: #5dc376;
  }
  .bg-red {
    background-color: #ec5657;
  }
  .bg-brown {
    background-color: #ebb242;
  }
  .bg-smoke {
    color: #1e1e28;
    background-color: #f4f5f9;
  }

  .bg-success {
    background-color: #5dc376;
  }
  .bg-warning {
    background-color: #ebb242;
  }
  .bg-danger {
    background-color: #ec5657;
  }
  .bg-info {
    background-color: #7f95e1;
  }

  .bg-text-darkest {
    background-color: #1e1e28;
  }
  .bg-text-dark {
    background-color: #3f4557;
  }
  .bg-text-medium {
    background-color: #909090;
  }
  .bg-text-light {
    background-color: #cccccc;
  }
  .bg-text-white {
    color: #4A4E59;
    background-color: #ffffff;
  }

  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color
Element uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

### Main Color

The main color of Element is bright and friendly blue.

<tm-row :gutter="10">
  <tm-col :span="4">
    <div class="demo-color-box bg-blue">Blueberry<div class="value">#7f95e1</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-green">Mantis<div class="value">#5dc376</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-red">Sunset Orange<div class="value">#ec5657</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-brown">Meat Brown<div class="value">#ebb242</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-smoke">White Smoke<div class="value">#f4f5f9</div></div>
  </tm-col>
</tm-row>

### Text Color

Text colors are for text.

<tm-row :gutter="10">
  <tm-col :span="4">
    <div class="demo-color-box bg-text-darkest">Dark Gunmetal<div class="value">#1e1e28</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-text-dark">Davy's Grey<div class="value">#3f4557</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-text-medium">Taupe Gray<div class="value">#909090</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-text-light">Pastel Gray<div class="value">#cccccc</div></div>
  </tm-col>
  <tm-col :span="4">
    <div class="demo-color-box bg-text-white">White<div class="value">#ffffff</div></div>
  </tm-col>
</tm-row>
