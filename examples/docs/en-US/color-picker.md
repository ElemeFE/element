<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF'
      };
    },
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
      });
    },
  }
</script>

<style>
  .demo-color-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demo-color-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-color-picker .el-color-picker + .el-color-picker {
    margin-left: 20px;
  }
</style>

## ColorPicker

ColorPicker is a color selector supporting multiple color formats.

### Basic usage

:::demo ColorPicker requires a string typed variable to be bound to v-model.
```html
<div class="block">
  <span class="demonstration">With default value</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">With no default value</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
```
:::

### Alpha

:::demo ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.
```html
<el-color-picker v-model="color3" show-alpha></el-color-picker>

<script>
  export default {
    data() {
      return {
        color3: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
```
:::

### Sizes

:::demo
```html
<el-color-picker v-model="color4"></el-color-picker>
<el-color-picker v-model="color4" size="medium"></el-color-picker>
<el-color-picker v-model="color4" size="small"></el-color-picker>
<el-color-picker v-model="color4" size="mini"></el-color-picker>

<script>
  export default {
    data() {
      return {
        color4: '#409EFF'
      }
    }
  };
</script>
```
:::

### Attributes
| Attribute | Description | Type | Accepted Values | Default |
|---------- |-------- |---------- |-------------  |-------- |
| disabled | whether to disable the ColorPicker | boolean | — | false |
| size | size of ColorPicker | string | — | medium / small / mini |
| show-alpha | whether to display the alpha slider | boolean | — | false |
| color-format | color format of v-model | string | hsl / hsv / hex / rgb | hex (when show-alpha is false)/ rgb (when show-alpha is true) |
| popper-class | custom class name for ColorPicker's dropdown | string | — | — |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| change | triggers when input value changes | color value |
| active-change | triggers when the current active color changes | active color value |