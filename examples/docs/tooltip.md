## 基础用法
鼠标 hover 的时候显示,可选择提示出现的位置。

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }
  }
</style>

<div class="box">
  <div class="top">
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <el-button>上边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <el-button>上右</el-button>
    </el-tooltip>
  </div>
  <div class="left">
    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
      <el-button>左上</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
      <el-button>左边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
      <el-button>左下</el-button>
    </el-tooltip>
  </div>

  <div class="right">
    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <el-button>右上</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <el-button>右边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <el-button>右下</el-button>
    </el-tooltip>
  </div>
  <div class="bottom">
    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <el-button>下左</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <el-button>下边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
      <el-button>下右</el-button>
    </el-tooltip>
  </div>
</div>

## 适用于不同情景

<div>
  <el-tooltip content="Top center" placement="top">
    <el-button>Top center</el-button>
  </el-tooltip>
</div>


<div>
  <el-tooltip content="Bottom center" placement="bottom" effect="light">
    <el-button>Bottom center</el-button>
  </el-tooltip>
</div>

## API
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  effect        |  默认提供的样式  | String            | `dark`, `light`  | dark  |
|  content        |  显示的内容  | String            |  |  |
|  placement        |  出现位置  | String           |  `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` |  bottom |
|  visible        |  初始状态是否可见  | Boolean           |  |  false |
|  disabled       |  控制是否不可见  | Boolean           |  |  false |
|  options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | { boundariesElement: 'body' } |
