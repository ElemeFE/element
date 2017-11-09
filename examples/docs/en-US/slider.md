<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0
      };
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
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

Drag the slider within a fixed range.

### Basic usage

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
  <div class="block">
    <span class="demonstration">Hide Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Format Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### Discrete values

The options can be discrete.

:::demo Set step size with the `step` attribute. You can display breakpoints by setting the `show-stops` attribute.

```html
<template>
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value6"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value7"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: 0,
        value7: 0
      }
    }
  }
</script>
```
:::

### Slider with input box

Set value via a input box.

:::demo Set the `show-input` attribute to display an input box on the right.

```html
<template>
  <div class="block">
    <el-slider
      v-model="value8"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0
      }
    }
  }
</script>
```
:::

### Range selection

Selecting a range of values is supported.

:::demo Setting the `range` attribute activates range mode, where the binding value is an array made up of two boundary values.
```html
<template>
  <div class="block">
    <el-slider
      v-model="value9"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value9: [4, 8]
      }
    }
  }
</script>
```
:::

### Vertical mode

:::demo Setting the `vertical` attribute to `true` enables vertical mode. In vertical mode, the `height` attribute is required.
```html
<template>
  <div class="block">
    <el-slider
      v-model="value10"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: 0
      }
    }
  }
</script>
```
:::

## Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| min | minimum value | number | — | 0 |
| max | maximum value | number | — | 100 |
| disabled | whether Slider is disabled | boolean | — | false |
| step | step size | number | — | 1 |
| show-input | whether to display an input box, works when `range` is false | boolean | — | false |
| show-input-controls | whether to display control buttons when `show-input` is true | boolean | — | true |
| show-stops | whether to display breakpoints | boolean | — | false |
| show-tooltip | whether to display tooltip value | boolean | — | true |
| format-tooltip | format to display tooltip value | function(value) | — | — |
| range | whether to select a range | boolean | — | false |
| vertical | vertical mode | boolean | — | false |
| height | Slider height, required in vertical mode | string | — | — |
| label | label for screen reader | string | — | — |
|debounce| debounce delay when typing, in milliseconds, works when `show-input` is true | number | — | 300 |

## Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released) | value after changing |

