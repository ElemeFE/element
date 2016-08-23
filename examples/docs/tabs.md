<script>
  export default {
    data() {
      return {
        tabs: [{
          title: '选项卡一',
          content: '选项卡一内容'
        },{
          title: '选项卡二',
          content: '选项卡二内容'
        },{
          title: '选项卡三',
          content: '选项卡三内容'
        },{
          title: '选项卡四',
          content: '选项卡四内容'
        }],
        activeName: '3',
        activeName2: ''
      }
    },
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style>
  .el-tabs {
    margin-bottom: 30px;
  }
</style>

## 基础使用

<div>
  <el-tabs :active-name="activeName">
    <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
    <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
    <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
    <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
  </el-tabs>
</div>

```html
<el-tabs :active-name="activeName">
  <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
  <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
  <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
  <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
</el-tabs>
```

## 标签风格

<div>
  <el-tabs type="card">
    <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
    <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
    <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
    <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
  </el-tabs>
</div>

```html
<el-tabs type="card">
  <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
  <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
  <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
  <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
</el-tabs>
```

## 可关闭的标签

<div>
  <el-tabs type="card" :closable="true" @tab-remove="handleRemove" @tab-click="handleClick">
    <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
    <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
    <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
    <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
  </el-tabs>
</div>
{{activeName2}}

```html
<el-tabs type="card" :closable="true" @tab-remove="handleRemove" @tab-click="handleClick">
  <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
  <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
  <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
  <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
</el-tabs>
```

## 卡片风格

<div>
  <el-tabs type="border-card">
    <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
    <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
    <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
    <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
  </el-tabs>
</div>

```html
<el-tabs type="border-card">
  <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
  <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
  <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
  <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
</el-tabs>
```

## TABS API
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 风格类型   | string   | card, border-card  |         |
| closable  | 真实值   | boolean   | true, false |  false  |
| activeName  | 当前选中面板的 name  | string   |    |    |
| tab-click  | tab 被点击的钩子  | string   |    |    |
| tab-remove  | tab 被删除的钩子  | string   |    |    |

## TAB-PANE API
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   |  |         |
| name       | 与选项卡 activeName 对应的标识符   | string   |  |  该选项卡在选项卡中的 name 值，如第一个选项卡则为'1'  |
