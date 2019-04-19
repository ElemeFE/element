## Rate 评分

评分组件

### 基础用法

:::demo 评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用`colors`属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。
```html
<div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
```
:::

### 辅助文字

用辅助文字直接地表达对应分数

:::demo 为组件设置 `show-text` 属性会在右侧显示辅助文字。通过设置 `texts` 可以为每一个分值指定对应的辅助文字。`texts` 为一个数组，长度应等于最大值 `max`。
```html
<el-rate
  v-model="value"
  show-text>
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>
```
:::

### 其它 icon

当有多层评价时，可以用不同类型的 icon 区分评分层级

:::demo 设置`icon-classes`属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用`void-icon-class`指定了未选中时的图标类名。
```html
<el-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
</script>
```
:::

### 只读

只读的评分用来展示分数，允许出现半星

:::demo 为组件设置 `disabled` 属性表示组件为只读，支持小数分值。此时若设置 `show-score`，则会在右侧显示目前的分值。可以提供 `score-template` 作为显示模板，模板为一个包含了 `{value}` 的字符串，`{value}` 会被解析为分值。
```html
<el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: 3.7
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | number | — | 0 |
| max | 最大分值 | number | — | 5 |
| disabled | 是否为只读 | boolean | — | false |
| allow-half | 是否允许半选 | boolean | — | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中 | number | — | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | number | — | 4 |
| colors | icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | array/object | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | string | — | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | string | — | #EFF2F7 |
| icon-classes | icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名 | array/object | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | 未选中 icon 的类名 | string | — | el-icon-star-off |
| disabled-void-icon-class | 只读时未选中 icon 的类名 | string | — | el-icon-star-on |
| show-text | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | boolean | — | false |
| show-score | 是否显示当前分数，show-score 和 show-text 不能同时为真 | boolean | — | false |
| text-color | 辅助文字的颜色 | string | — | #1F2D3D |
| texts | 辅助文字数组 | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template | 分数显示模板 | string | — | {value} |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 分值改变时触发 | 改变后的分值 |

