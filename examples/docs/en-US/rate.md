## Rate

Used for rating

### Basic usage

:::demo Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the `colors` attribute, and their two thresholds can be defined by `low-threshold` and `high-threshold`, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.

```html
<div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Color for different levels</span>
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
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
```
:::

### With text

Using text to indicate rating score

:::demo Add attribute `show-text` to display text at the right of Rate. You can assign texts for different scores using `texts`. `texts` is an array whose length should be equal to the max score `max`.

```html
<el-rate
  v-model="value"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
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

### More icons

You can use different icons to distinguish different rate components.

:::demo You can customize icons by passing `icon-classes` an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon class. In this example, we also use `void-icon-class` to set the icon if it is unselected.

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
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
</script>
```
:::

### Read-only

Read-only Rate is for displaying rating score. Half star is supported.

:::demo Use attribute `disabled` to make the component read-only. Add `show-score` to display the rating score at the right side. Additionally, you can use attribute `score-template` to provide a score template. It must contain `{value}`, and `{value}` will be replaced with the rating score.

```html
<el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value} points">
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
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | binding value | number | — | 0 |
| max | max rating score | number | — | 5 |
| disabled | whether Rate is read-only | boolean | — | false |
| allow-half | whether picking half start is allowed | boolean | — | false |
| low-threshold | threshold value between low and medium level. The value itself will be included in low level | number | — | 2 |
| high-threshold | threshold value between medium and high level. The value itself will be included in high level | number | — | 4 |
| colors | colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color | array/object | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | color of unselected icons | string | — | #C6D1DE |
| disabled-void-color | color of unselected read-only icons | string | — | #EFF2F7 |
| icon-classes | class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class | array/object | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | class name of unselected icons | string | — | el-icon-star-off |
| disabled-void-icon-class | class name of unselected read-only icons | string | — | el-icon-star-on |
| show-text | whether to display texts | boolean | — | false |
| show-score | whether to display current score. show-score and show-text cannot be true at the same time | boolean | — | false |
| text-color | color of texts | string | — | #1F2D3D |
| texts | text array | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template | score template | string | — | {value} |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | Triggers when rate value is changed | value after changing |
