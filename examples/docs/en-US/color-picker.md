<script>
  export default {
    data() {
      return {
        color1: '#ff0',
        color2: null,
        color3: 'rgba(128, 33, 22, 0.8)',
        color4: null
      };
    }
  }
</script>

<style scoped>
  .demo-box.demo-color-picker .source {
    padding: 0;
  }

  .demo-box.demo-color-picker .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-box.demo-color-picker .demonstration {
    display: inline-block;
    font-size: 14px;
    width: 25%;
    color: #8492a6;
    line-height: 44px;
  }
</style>

## ColorPicker

ColorPicker is a color picker component that is used to solve the need to select a color in certain scenes.

### Color

:::demo ColorPicker usage is similar to DatePicker and requires v-model to bind a variable in a Vue instance. The bind variable's data type needs to be a string.
```html
<div class="block">
  <span class="demonstration">Default value</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">Empty</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<style>
</style>

<script>
  export default {
    data() {
      return {
        color1: '#ff0',
        color2: null
      }
    }
  };
</script>
```
:::

### Color and alpha

:::demo ColorPicker supports normal colors, also supports alpha-channel colors, through the show-alpha attribute to control whether to support the use of transparency.
```html
<div class="block">
  <span class="demonstration">Default value</span>
  <el-color-picker v-model="color3" show-alpha></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">Empty</span>
  <el-color-picker v-model="color4" show-alpha></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color3: 'rgba(128, 33, 22, 0.8)',
        color4: null
      }
    }
  };
</script>
```
:::

### Attributes
| Attribute | Description | Type | Accepted Values | Default |
|---------- |-------- |---------- |-------------  |-------- |
| show-alpha | Whether to display the alpha slider. | Boolean | — | false |
| color-format | Write the v-model's color format. In the case of show-alpha is true, the default value is rgb, otherwise hex. | string | hsl, hsv, hex, rgb | hex |