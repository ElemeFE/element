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

## 可移除的标签

<div class="demo-box demo-tag">
  <el-tag
    v-for="tag in tags"
    :closable="true"
    :type="tag.type"
    :key="tag"
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
