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

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`true-color`属性与`false-color`属性来设置开关的背景色。

```html
<el-switch
  v-model="value2"
  true-color="#13ce66"
  false-color="#ff4949">
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

:::demo 使用`true-text`属性与`false-text`属性来设置开关的文字描述。

```html
<el-switch
  v-model="value3"
  true-text="按月付费"
  false-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  true-color="#13ce66"
  false-color="#ff4949"
  true-text="按月付费"
  false-text="按年付费">
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

:::demo 设置`true-value`和`false-value`属性，接受`Boolean`, `String`或`Number`类型的值。

```html
<el-tooltip :content="'Switch value: ' + value5" placement="top">
  <el-switch
    v-model="value5"
    true-color="#13ce66"
    false-color="#ff4949"
    true-value="100"
    false-value="0">
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
| true-icon-class  | switch 打开时所显示图标的类名，设置此项会忽略 `true-text`    | string   | — | — |
| false-icon-class  | switch 关闭时所显示图标的类名，设置此项会忽略 `false-text`    | string   | — | — |
| true-text  | switch 打开时的文字描述    | string   | — | — |
| false-text  | switch 关闭时的文字描述    | string   | — | — |
| true-value  | switch 打开时的值    | boolean / string / number | — | true |
| false-value  | switch 关闭时的值    | boolean / string / number | — | false |
| true-color  | switch 打开时的背景色    | string   | — | #409EFF |
| false-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name  | switch 对应的 name 属性    | string   | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 Switch 获取焦点 | - |