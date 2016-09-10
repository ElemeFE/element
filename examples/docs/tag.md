<script>
  export default {
    data() {
      return {
        tags: [
          { key: 1, name: '标签一', type: '' },
          { key: 2, name: '标签二', type: 'gray' },
          { key: 5, name: '标签三', type: 'primary' },
          { key: 3, name: '标签四', type: 'success' },
          { key: 4, name: '标签五', type: 'warning' },
          { key: 6, name: '标签六', type: 'danger' }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      }
    }
  }
</script>

<style>
  .demo-box.demo-tag {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
  }
</style>

## Tag 标签

用于标记和选择。

### 基础用法

:::demo 由`type`属性来定义，该属性可选填。

```html
<el-tag>标签一</el-tag>
<el-tag type="gray">标签二</el-tag>
<el-tag type="primary">标签三</el-tag>
<el-tag type="success">标签四</el-tag>
<el-tag type="warning">标签五</el-tag>
<el-tag type="danger">标签六</el-tag>
```
:::

### 可移除标签

:::demo 设置`closable`属性来定义一个可移除的标签，接受一个`Boolean`，设置为`true`即可。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`close-transition`属性，它接受一个`Boolean`，true 为关闭。设置`close`事件可以处理关闭后的回调函数。

```html
<el-tag
  v-for="tag in tags"
  :closable="true"
  :type="tag.type"
  :key="tag"
  :close-transition="false"
  @close="handleClose(tag)"
>
{{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { key: 1, name: '标签一', type: '' },
          { key: 2, name: '标签二', type: 'gray' },
          { key: 5, name: '标签三', type: 'primary' },
          { key: 3, name: '标签四', type: 'success' },
          { key: 4, name: '标签五', type: 'warning' },
          { key: 6, name: '标签六', type: 'danger' }
        ]
      };
    },
    methods: {
      handleClose(tag) {
        this.tags.$remove(tag);
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | 'primary', 'gray', 'success', 'warning', 'danger' | — |
| closable | 是否可关闭 | boolean | — | false |
| close-transition | 是否禁用关闭时的渐变动画 | boolean | — | false |
| hit | 是否有边框描边 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭tag时触发的事件 | — |
