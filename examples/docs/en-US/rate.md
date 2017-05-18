<style>
  .demo-rate .block {
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

  .demo-rate .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

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
    },
    mounted() {
      this.$nextTick(() => {
        let firstDemo = document.querySelector('.source');
        firstDemo.style.padding = '0';
      });
    }
  }
</script>

## Rate

Used for rating

### Basic usage

:::demo Rate divides rating scores into three levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them to reflect three levels using the `colors` attribute, and their two thresholds can be defined by `low-threshold` and `high-threshold`.

``` html
<div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Color for different levels</span>
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>
```
:::

### With text

Using text to indicate rating score

:::demo Add attribute `show-text` to display text at the right of Rate. You can assign texts for different scores using `texts`. `texts` is an array whose length should be equal to the max score `max`.

``` html
<el-rate
  v-model="value3"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>

<script>
  export default {
    data() {
      return {
        value3: null
      }
    }
  }
</script>
```
:::

### More icons

You can use different icons to distinguish different rate components.

:::demo You can customize icons for three different levels using `icon-classes`. In this example, we also use `void-icon-class` to set the icon if it is unselected.

``` html
<el-rate
  v-model="value4"
  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script>
  export default {
    data() {
      return {
        value4: null
      }
    }
  }
</script>
```
:::

### Read-only

Read-only Rate is for displaying rating score. Half star is supported.

:::demo Use attribute `disabled` to make the component read-only. Add `show-text` to display the rating score at the right side. Additionally, you can use attribute `text-template` to provide a text template. It must contain `{value}`, and `{value}` will be replaced with the rating score.

``` html
<el-rate
  v-model="value5"
  disabled
  show-text
  text-color="#ff9900"
  text-template="{value} points">
</el-rate>

<script>
  export default {
    data() {
      return {
        value5: 3.7
      }
    }
  }
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| max | max rating score | number | — | 5 |
| disabled | whether Rate is read-only | boolean | — | false |
| allow-half | whether picking half start is allowed | boolean | — | false |
| low-threshold | threshold value between low and medium level. The value itself will be included in low level | number | — | 2 |
| high-threshold | threshold value between medium and high level. The value itself will be included in high level | number | — | 4 |
| colors | color array for icons. It should have 3 elements, each of which corresponds with a score level  | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | color of unselected icons | string | — | #C6D1DE |
| disabled-void-color | color of unselected read-only icons | string | — | #EFF2F7 |
| icon-classes |  array of class names of icons. It should have 3 elements, each of which corresponds with a score level | array | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | class name of unselected icons | string | — | el-icon-star-off |
| disabled-void-icon-class | class name of unselected read-only icons | string | — | el-icon-star-on |
| show-text | whether to display texts | boolean | — | false |
| text-color | color of texts | string | — | #1F2D3D |
| texts | text array | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| text-template | text template when the component is read-only | string | — | {value} |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | Triggers when rate value is changed | value after changing |
