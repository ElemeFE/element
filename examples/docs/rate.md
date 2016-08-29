<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      };
    }
  }
</script>
<style>
  .demo-box.demo-rate {
    margin: 20px 0;
  }
</style>

## Rate 评分

评分组件
 
### 基础用法

适用广泛的基础用法

:::demo
``` html
<el-rate v-model="value1"></el-rate>
```
:::

### 区分颜色

利用颜色对分数及情感倾向进行分级

:::demo 分数可以被分为三个等级，对应的两个阈值可分别通过 `low-threshold` 和 `high-threshold` 设定。
``` html
<el-rate
  v-model="value2"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>
```
:::

### 辅助文字

用辅助文字直接地表达对应分数

:::demo 为组件设置 `show-text` 属性会在右侧显示辅助文字。通过设置 `texts` 可以为每一个分值指定对应的辅助文字。`texts` 为一个数组，长度应等于最大值 `max`。
``` html
<el-rate
  v-model="value3"
  show-text>
</el-rate>
```
:::

### 其他 icon

:::demo 当有多层评价时，可以用不同类型的 icon 区分评分层级
``` html
<el-rate
  v-model="value4"
  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>
```
:::

### 只读

只读的评分用来展示分数，允许出现半星

:::demo 为组件设置 `disabled` 属性表示组件为只读，支持小数分值。此时若设置 `show-text`，则会在右侧显示目前的分值。可以提供 `text-template` 作为显示模板，模板为一个包含了 `{value}` 的字符串，`{value}` 会被解析为分值。
``` html
<el-rate
  v-model="value5"
  disabled
  show-text
  text-color="#ff9900"
  text-template="{value} 分">
</el-rate>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| max | 最大分值 | Number | - | 5 |
| disabled | 是否为只读 | Boolean | - | false |
| allow-half | 是否允许半选 | Boolean | - | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中 | Number | - | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | Number | - | 4 |
| colors | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 | Array | - | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | String | - | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | String | - | #EFF2F7 |
| icon-classes | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名 | Array | - | ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'] |
| void-icon-class | 未选中 icon 的类名 | String | - | el-icon-star-off |
| disabled-void-icon-class | 只读时未选中 icon 的类名 | String | - | el-icon-star-on |
| show-text | 是否显示辅助文字 | Boolean | - | false |
| text-color | 辅助文字的颜色 | String | - | 1F2D3D |
| texts | 辅助文字数组 | Array | - | ['极差', '失望', '一般', '满意', '惊喜'] |
| text-template | 只读时的辅助文字模板 | String | - | {value} |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 分值改变时触发 | 改变后的分值 |

