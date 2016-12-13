<script>
  export default {
    data() {
      return {};
    }
  }
</script>

## Collapse 折叠面板
可以折叠/展开的内容区域。

### 基础用法

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。
```html
<el-collapse>
  <el-collapse-panel title="This is panel title 1" name="1">
    <p>{text}</p>
  </el-collapse-panel>
  <el-collapse-panel title="This is panel title 2" name="2">
    <p>{text}</p>
  </el-collapse-panel>
  <el-collapse-panel title="This is panel title 3" name="3">
    <p>{text}</p>
  </el-collapse-panel>
</el-collapse>
```
:::