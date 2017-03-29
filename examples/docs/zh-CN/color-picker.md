<script>
  export default {
    data() {
      return {
        color1: '#20a0ff',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)'
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
    float: left;
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
</style>

## ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

### 基础用法

:::demo 使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。
```html
<div class="block">
  <span class="demonstration">有默认值</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">无默认值</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#20a0ff',
        color2: null
      }
    }
  };
</script>
```
:::

### 选择透明度

:::demo ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过`show-alpha`属性即可控制是否支持透明度的选择。
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

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| show-alpha | 是否支持透明度选择 | boolean | — | false |
| color-format | 写入 v-model 的颜色的格式 | string | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发 | 当前值 |