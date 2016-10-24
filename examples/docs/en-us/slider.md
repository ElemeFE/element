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

## Slider 

Select within a fixed interval by dragging the slider.

### How to use

The current value is displayed when the slider is being dragged.

:::demo Customize the initial value of the slider by setting the binding value.

```html
<template>
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>  
  </div>
  <div class="block">
    <span class="demonstration">Customized initial value</span>
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

### Discrete value

The options can be discrete.

:::demo Change the value of `step` to change the step size. You can display breakpoints by setting the `show-step` attribute.

```html
<template>
  <div class="block">
    <span class="demonstration">Breakpoints are not displayed</span>
    <el-slider
      v-model="value3"
      :step="10">
    </el-slider>  
  </div>
  <div class="block">
    <span class="demonstration">Displays the breakpoints</span>
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

### Slide with input box

Set the exact value via the input box.

:::demo Set the `show-input` attribute to display an inputbox on the right.

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
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| min | The minimum value | number | — | 0 |
| max | The maximum value | number | — | 100 |
| step | Step size | number | — | 1 |
| show-input | Whether to display the input box | boolean | — | false |
| show-stops | Whether to display breakpoints | boolean | — | false |

## Events
| Event      | Description    | Callback      |
|---------- |-------- |---------- |
| change | Triggered when the value changes | the Value after the change |

