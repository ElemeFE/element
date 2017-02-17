<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 42,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: [4, 8]
      };
    }
  }
</script>

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
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value3" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 42
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
      v-model="value4"
      :step="10">
    </el-slider>  
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value5"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value4: 0,
        value5: 0
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
      v-model="value6"
      show-input>
    </el-slider>  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: 0
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
      v-model="value7"
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
        value7: [4, 8]
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
| range | whether to select a range | boolean | — | false |

## Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released) | value after changing |

