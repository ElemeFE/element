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

## 基础使用

Tag 组件提供了六种主题，由`type`属性来定义，该属性可选填：

<div class="demo-box demo-tag">
  <el-tag>标签一</el-tag>
  <el-tag type="gray">标签二</el-tag>
  <el-tag type="primary">标签三</el-tag>
  <el-tag type="success">标签四</el-tag>
  <el-tag type="warning">标签五</el-tag>
  <el-tag type="danger">标签六</el-tag>
</div>

```html
<el-tag>标签一</el-tag>
<el-tag type="gray">标签二</el-tag>
<el-tag type="primary">标签三</el-tag>
<el-tag type="success">标签四</el-tag>
<el-tag type="warning">标签五</el-tag>
<el-tag type="danger">标签六</el-tag>
```

## 描边

`hit`属性可以设置描边，接受一个`Boolean`，默认为`false`。

借此可以定义 hover 时的效果，下面是一个`hit`为`true`时的效果：

<div class="demo-box demo-tag">
  <el-tag type="primary" :hit="true">标签</el-tag>
</div>

```html
<el-tag type="primary" :hit="true">标签</el-tag>
```

## 可移除的标签

设置`closable`属性来定义一个可移除的标签，接受一个`Boolean`，设置为`true`即可。

此外，默认的标签移除时会附带渐变动画，如果不想使用，可以设置`close-transition`属性，它接受一个`Boolean`，true 为关闭。

设置`close`事件可以处理关闭后的回调函数。

下面是一个综合应用他们的样例：

<div class="demo-box demo-tag">
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
</div>

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

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | 'primary', 'gray', 'success', 'warning', 'error' |  |
| closable | 是否可关闭 | boolean | | false |
| close-transition | 是否禁用关闭时的渐变动画 | boolean | | false |
| hit | 是否有边框描边 | boolean | | false |


## Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭tag时触发的事件 |  |
