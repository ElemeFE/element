<style>
  .demo-box.demo-switch {
    .el-switch {
      margin: 20px 20px 20px 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    }
  };
</script>

## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`on-color`属性与`off-color`属性来设置开关的背景色。

```html
<el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### 文字描述

:::demo 使用`on-text`属性与`off-text`属性来设置开关的文字描述。

```html
<el-switch
  v-model="value3"
  on-text="按月付费"
  off-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  on-color="#13ce66"
  off-color="#ff4949"
  on-text="按月付费"
  off-text="按年付费">
</el-switch>

<script>
  export default {
    data() {
      return {
        value3: true,
        value4: true
      }
    }
  };
</script>
```
:::

### 扩展的 value 类型

:::demo 设置`on-value`和`off-value`属性，接受`Boolean`, `String`或`Number`类型的值。

```html
<el-tooltip :content="'Switch value: ' + value5" placement="top">
  <el-switch
    v-model="value5"
    on-color="#13ce66"
    off-color="#ff4949"
    on-value="100"
    off-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value5: '100'
      }
    }
  };
</script>
```

:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。


```html
<el-switch
  v-model="value6"
  disabled>
</el-switch>
<el-switch
  v-model="value7"
  disabled>
</el-switch>
<script>
  export default {
    data() {
      return {
        value6: true,
        value7: false
      }
    }
  };
</script>
```
:::


### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| width  | switch 的宽度（像素）    | number   | — | 40 |
| on-icon-class  | switch 打开时所显示图标的类名，设置此项会忽略 `on-text`    | string   | — | — |
| off-icon-class  | switch 关闭时所显示图标的类名，设置此项会忽略 `off-text`    | string   | — | — |
| on-text  | switch 打开时的文字描述    | string   | — | — |
| off-text  | switch 关闭时的文字描述    | string   | — | — |
| on-value  | switch 打开时的值    | boolean / string / number | — | true |
| off-value  | switch 关闭时的值    | boolean / string / number | — | false |
| on-color  | switch 打开时的背景色    | string   | — | #409EFF |
| off-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name  | switch 对应的 name 属性    | string   | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |
