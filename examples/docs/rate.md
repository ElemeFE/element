<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.6
      };
    }
  }
</script>
<style>
  .demo-box.demo-rate {
    margin: 20px 0;
  }
</style>
## 基础用法

<div class="demo-box demo-rate">
  <el-rate v-model="value1"></el-rate>
</div>

``` html
<el-rate v-model="value1"></el-rate>
```

## 区分颜色

利用颜色对分数及情感倾向进行分级。分数可以被分为三个等级，对应的两个阈值可分别通过 `low-threshold` 和 `high-threshold` 设定。

<div class="demo-box demo-rate">
  <el-rate v-model="value2" multi-color></el-rate>
</div>

``` html
<el-rate v-model="value2" multi-color></el-rate>
```

## 辅助文字

为组件设置 `show-text` 属性会在右侧显示辅助文字。通过设置 `texts` 可以为每一个分值指定对应的辅助文字。`texts` 为一个数组，长度应等于最大值 `max`。

<div class="demo-box demo-rate">
  <el-rate v-model="value3" show-text></el-rate>
</div>

``` html
<el-rate v-model="value3" show-text></el-rate>
```

## 其他 icon

<div class="demo-box demo-rate">
  <el-rate v-model="value4" smiley></el-rate>
</div>

``` html
<el-rate v-model="value4" smiley></el-rate>
```

## 只读
为组件设置 `disabled` 属性表示组件为只读，支持小数分值。此时若设置 `show-text`，则会在右侧显示目前的分值。可以提供 `text-template` 作为显示模板，模板为一个包含了 `{value}` 的字符串，`{value}` 会被解析为分值。

<div class="demo-box demo-rate">
  <el-rate v-model="value5" disabled show-text text-template="{value} 分"></el-rate>
</div>

``` html
<el-rate v-model="value5" disabled show-text text-template="{value} 分"></el-rate>
```
## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model | 绑定值 | Number | | 0 |
| max | 最大分值 | Number | | 5 |
| multi-color | 是否根据分数等级区分颜色 | Boolean | | false |
| lowThreshold | 低分和中等分数的界限值，值本身被划分在低分中 | Number | | 2 |
| highThreshold | 高分和中等分数的界限值，值本身被划分在高分中 | Number | | 4 |
| smiley | 是否使用 smiley icon | Boolean | | false |
| disabled | 是否为只读 | Boolean | | false |
| show-text | 是否显示辅助文字 | Boolean | | false |
| texts | 辅助文字数组 | Array | | ['极差', '失望', '一般', '满意', '惊喜'] |
| text-template | 只读时的辅助文字模板 | String | | '{value}' |

## Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 分值改变时触发 | 改变后的分值 |

