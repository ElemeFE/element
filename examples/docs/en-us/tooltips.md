# Tooltips 


Display prompt information for mouse hover.


---

##How to use

There are 9 ways to display your prompt information multi-formly. You could get it by the demo below.



:::demo 
Use attribute `content` to set the display content when hover. The attribute `placement` determines the position of the tooltip. Its value is `[oritation]-[Alignment]` with four oritations `top`,`left`, `right`,`bottom` and three alignments `start`,`end`, null, default alignment is null. 
Look at the code `placement="left-end"`,  with this code in tooltip component you will see the prompt information will display on the left to the element which you are hovering and bottom of the tooltip aligns with the bottom of the element which you are hovering.


```html
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
    
    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>

<div class="box">
  <div class="top">
    <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <el-button>top-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <el-button>top</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <el-button>top-end</el-button>
    </el-tooltip>
  </div>
  <div class="left">
    <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <el-button>left-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <el-button>left</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <el-button>left-end</el-button>
    </el-tooltip>
  </div>

  <div class="right">
    <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <el-button>right-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <el-button>right</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <el-button>right-end</el-button>
    </el-tooltip>
  </div>
  <div class="bottom">
    <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <el-button>bottom-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <el-button>bottom</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <el-button>bottom-end</el-button>
    </el-tooltip>
  </div>
</div>
```
:::


### Theme

Tooltip has two themes：`dark` and `light`。


:::demo 
Set `effect` to modify theme, default value is `dark`.

```html
<el-tooltip content="Top center" placement="top">
  <el-button>Dark</el-button>
</el-tooltip>
<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button>Light</el-button>
</el-tooltip>
```
:::



### More Content

Display multiple lines of text or set format of the text . 

:::demo 
Distribute task of the attribute `content` to the ‘Signature’ `slot`  as an alternative.
```html
<el-tooltip placement="top">
  <div slot="content">multiple lines<br/>second line</div>
  <el-button>Top center</el-button>
</el-tooltip>
```
:::

### Advanced Extensions

In addition to  basic usages, there are some attributes that allow you to customize your own ：

`transition` attribute allows you to customerize the animation in which the tooltip shows or hides , default value is `fade-in-linear`.

`disabled` attribute allows you disable the `tooltip` 's prompt function. You just only set it to `boolean` type with value `true`.

Actually it is an extension based on [Vue-popper](https://github.com/element-component/vue-popper), you can use any attribute that are allowed in  Vue-popper.

Of cause, component Tooltip is powerful. You can see API below.

:::demo
```html
<template>
  <el-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
    <el-button @click.native="disabled=true">click to close tooltip function</el-button>
  </el-tooltip>
</template>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
```
:::



### Attributes
| Attribute               | Description                                                     | Type              | Options      | Default |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  effect        |  themes authrozied  | String            | `dark`, `light`  | dark  |
|  content        | display content,  `slot#content` insert it into DOM by `slot#content` | String            | — | — |
|  placement        | position of Tooltip   | String           |  `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` |  bottom |
|  value(v-model)        |  status show or not | Boolean           | — |  false |
|  disabled       |  Tooltip work or not  | Boolean           | — |  false |
|  offset        |  offset of the position   | Number           | — |  0 |
|  transition     |  define gradient animation    | String             | — | `fade-in-linear` |
|  visible-arrow   |  display Tooltip arrow or not, more info  go to [Vue-popper](https://github.com/element-component/vue-popper) page | Boolean | — | true |
|  options        | [popper.js](https://popper.js.org/documentation.html) paramters | Object            | refer to [popper.js](https://popper.js.org/documentation.html) doc | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| openDelay | show in delay, unit is millisecond | Number | — | 0 |

