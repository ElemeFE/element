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

ColorPicker 是一个颜色选择器，该组件是用来解决某些场景下需要选择颜色的需求。

### 选择颜色

:::demo ColorPicker 用法与 DatePicker 类似，需要使用 v-model 来与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。
```html
<div class="block">
  <span class="demonstration">有默认值</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">无默认值</span>
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

### 选择颜色和透明度

:::demo ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过 show-alpha 属性即可控制是否支持透明度的使用。
```html
<div class="block">
  <span class="demonstration">有默认值</span>
  <el-color-picker v-model="color3" show-alpha></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">无默认值</span>
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
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| show-alpha | 是否显示透明度 Slider。 | Boolean | — | false |
| color-format | 写入 v-model 的颜色的格式。在 show-alpha 为 true 的情况下，默认值为 rgb，否则为 hex。 | string | hsl, hsv, hex, rgb | hex |