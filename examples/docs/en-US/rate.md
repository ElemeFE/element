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
        firstDemo.style.display = 'flex';
      });
    }
  }
</script>
<style>
  .demo-rate .block {
    display: inline-block;
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
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

## Rate

Rate component
 
### How to use

:::demo This component separate rate into three different levels and add colors to different rate (there is no color by default). Add colors by attribute `colors`. And using `low-threshold` and `high-threshold` to set thrasholds between different levels  

``` html
<div class="block">
  <span class="demonstration">no color by default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">color for different levels</span>
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
</div>
```
:::

### Help Text

Using help text to indicate the rate

:::demo Add attribute `show-text` to the component to display help text at the right side. The help texts for each rate can be defined by `texts`. `texts` is array, its length should be `max`.

``` html
<el-rate
  v-model="value3"
  show-text>
</el-rate>
```
:::

### Additional Icon

You can use different icons to distinguish different rate components.

:::demo You can customize the icons for different level by attribute `icon-classes`. Following example also uses `void-icon-class` to set the icon when rate is empty.

``` html
<el-rate
  v-model="value4"
  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>
```
:::

### Read-only

Only display the rate and allow to set half star.

:::demo Use attribute `disabled` to make the component read-only. Meanwhile, add `show-text` to display the rate value at the right side. Additionally, you can use attribute `text-template` to create a template, it contains a string `{value}`, and `{value}` will be converted to rate value.

``` html
<el-rate
  v-model="value5"
  disabled
  show-text
  text-color="#ff9900"
  text-template="{value}">
</el-rate>
```
:::

### Attributes
| Attribute      | Description    | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| max | Max rate | number | — | 5 |
| disabled | Read-only | boolean | — | false |
| allow-half | Allow set half star or not | boolean | — | false |
| low-threshold | Threshold value for low and medium level，this is value itself will be in low level | number | — | 2 |
| high-threshold | Threshold value for medium and high level，this is value itself will be in high level | number | — | 4 |
| colors | Color array for icon, it should contain 3 colors, each one for a level | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | Color of unselected icon | string | — | #C6D1DE |
| disabled-void-color | Color of unselected read-only icon | string | — | #EFF2F7 |
| icon-classes |  Array of class names of icon, it should contain 3 elements，each of them is associated with a rate level | array | — | ['el-icon-star-on', 'el-icon-star-on',<br>'el-icon-star-on'] |
| void-icon-class | The class name of unselected icon | string | — | el-icon-star-off |
| disabled-void-icon-class | The class name of unselected read-only icon | string | — | el-icon-star-on |
| show-text | Display help text or not | boolean | — | false |
| text-color | Color of help text | string | — | 1F2D3D |
| texts | Help text array | array | — | ['Bad', 'Disappoint', 'Normal', 'Satisfy', 'Surprise'] |
| text-template | Help text template when the component is read-only| string | — | {value} |

### Events
| Event      | Description    | Callback      |
|---------- |-------- |---------- |
| change | Trigerred when rate value is changed | value after changing |
