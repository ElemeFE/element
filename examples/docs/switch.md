<style>
  .demo-box.demo-switch {
    .el-switch {
      display: block;
      margin: 20px 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true
      }
    }
  };
</script>

## 基本用法

Switch 组件提供了平滑的开关。

:::demo 只需要`el-switch`元素绑定`v-model`到一个变量即可完成状态改变，状态是一个`Boolean`。

```html
<el-switch v-model="value1"></el-switch>
```
:::

## 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用，此例中我们使用了`on-text`属性与`off-text`属性来设置开关旁的描述，`value`属性用于定义无需双向绑定情况的开关值。

```html
<el-switch disabled></el-switch>
<el-switch disabled :value="false"></el-switch>
<el-switch on-text="" off-text="" disabled></el-switch>
<el-switch on-text="" off-text="" disabled :value="false"></el-switch>
```
:::

## 自定义颜色

:::demo 使用`on-color`和`off-color`属性，可以自定义开关颜色。`on-icon-class`定义了开关时的图标，具体图标可以参见 Icon 组件文档，当设置了 Icon 后，text 值将被忽略。

```html
<el-switch on-color="#13ce66" off-color="#ff4949" v-model="value2"></el-switch>
<el-switch on-color="#13ce66" off-color="#ff4949" on-text="" off-text="" v-model="value3"></el-switch>
```
:::

## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | switch 的选中状态   | boolean    |               | true |
| disabled  | 是否禁用    | boolean   |  | false   |
| width  | switch 的宽度（像素）    | number   | | 58（有文字）/ 46（无文字） |
| on-icon-class  | switch 打开时所显示图标的类名    | string   | | |
| off-icon-class  | switch 关闭时所显示图标的类名    | string   | | |
| on-text  | switch 打开时的文字    | string   | | 'ON' |
| off-text  | switch 关闭时的文字    | string   | | 'OFF' |
| on-color  | switch 打开时的背景色    | string   | | |
| off-color  | switch 关闭时的背景色    | string   | | |
| name  | switch 对应的 name 属性    | string   | | |

## Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    |  |
