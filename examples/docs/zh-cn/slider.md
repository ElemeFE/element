<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 0,
        value4: 0,
        value5: 0
      };
    }
  }
</script>

<style>
  .demo-box.demo-slider .source {
    padding: 0;
  }
  
  .demo-box.demo-slider .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;      
    }
  }
  
  .demo-box.demo-slider .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }
  
  .demo-box.demo-slider .demonstration + .el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>

## Slider 滑块

通过拖动滑块在一个固定区间内进行选择

### 基础用法

在拖动滑块时，显示当前值

:::demo 通过设置绑定值自定义滑块的初始值
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>  
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value2"></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50
      }
    }
  }
</script>
```
:::

### 离散值

选项可以是离散的

:::demo 改变`step`的值可以改变步长，通过设置`show-step`属性可以显示间断点
```html
<template>
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <el-slider
      v-model="value3"
      :step="10">
    </el-slider>  
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <el-slider
      v-model="value4"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value3: 0,
        value4: 0
      }
    }
  }
</script>
```
:::

### 带有输入框

通过输入框设置精确数值

:::demo 设置`show-input`属性会在右侧显示一个输入框
```html
<template>
  <div class="block">
    <el-slider
      v-model="value5"
      show-input>
    </el-slider>  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value5: 0
      }
    }
  }
</script>
```
:::

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| step | 步长 | number | — | 1 |
| show-input | 是否显示输入框 | boolean | — | false |
| show-stops | 是否显示间断点 | boolean | — | false |

## Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值改变时触发 | 改变后的值 |
