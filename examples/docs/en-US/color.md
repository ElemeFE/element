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
  .bg-blue-light {
    background-color: #58b7ff;
  }
  .bg-blue,
  .bg-info {
    background-color: #20a0ff;
  }
  .bg-blue-dark {
    background-color: #1d8ce0;
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

  .bg-black {
    background-color: #1f2d3d;
  }
  .bg-black-light {
    background-color: #324057;
  }
  .bg-black-lighter {
    background-color: #475669;
  }

  .bg-silver {
    background-color: #8492a6;
  }
  .bg-silver-light {
    background-color: #99a9bf;
  }
  .bg-silver-lighter {
    background-color: #c0ccda;
  }

  .bg-gray {
    background-color: #d3dce6;
  }
  .bg-gray-light {
    background-color: #e5e9f2;
  }
  .bg-gray-lighter {
    background-color: #eff2f7;
  }

  .bg-white-dark {
    background-color: #f9fafc;
  }

  .color-gray {
    color: #5e6d82;
  }
</style>

## Color
Element uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

### Main Color

The main color of Element is bright and friendly blue.

<el-row :gutter="12">
  <el-col :span="8">
    <div class="demo-color-box bg-blue-light">Light Blue<div class="value">#58B7FF</div></div>
  </el-col>
  <el-col :span="8">
    <div class="demo-color-box bg-blue">Blue<div class="value">#20A0FF</div></div>
  </el-col>
  <el-col :span="8">
    <div class="demo-color-box bg-blue-dark">Dark Blue<div class="value">#1D8CE0</div></div>
  </el-col>
</el-row>

### Secondary Color

Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-info">Blue<div class="value">#20A0FF</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-success">Success<div class="value">#13CE66</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-warning">Warning<div class="value">#F7BA2A</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-danger">Danger<div class="value">#FF4949</div></div>
  </el-col>
</el-row>

### Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-black">Black<div class="value">#1F2D3D</div></div>
      <div class="demo-color-box bg-black-light">Light Black<div class="value">#324057</div></div>
      <div class="demo-color-box bg-black-lighter">Extra Light Black<div class="value">#475669</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-silver">Silver<div class="value">#8492A6</div></div>
      <div class="demo-color-box bg-silver-light">Light Silver<div class="value">#99A9BF</div></div>
      <div class="demo-color-box bg-silver-lighter">Extra Light Silver<div class="value">#C0CCDA</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box color-gray bg-gray">Gray<div class="value">#D3DCE6</div></div>
      <div class="demo-color-box color-gray bg-gray-light">Light Gray<div class="value">#E5E9F2</div></div>
      <div class="demo-color-box color-gray bg-gray-lighter">Extra Light Gray<div class="value">#EFF2F7</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group" style="border: 1px solid #e0e6ed;border-radius: 4px;">
      <div class="demo-color-box color-gray bg-white-dark">Dark White<div class="value">#F9FAFC</div></div>
      <div class="demo-color-box color-gray bg-white">White<div class="value">#FFFFFF</div></div>
    </div>
  </el-col>
</el-row>