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
        activeKey: '3',
        activeKey2: ''
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
  <el-tabs :active-key="activeKey">
    <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
    <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
    <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
    <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
  </el-tabs>
</div>

```html
<el-tabs :active-key="activeKey">
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
  <el-tabs type="card" :closable="true">
    <el-tab-pane label="选项卡一">选项卡一内容</el-tab-pane>
    <el-tab-pane label="选项卡二">选项卡二内容</el-tab-pane>
    <el-tab-pane label="选项卡三">选项卡三内容</el-tab-pane>
    <el-tab-pane label="选项卡四">选项卡四内容</el-tab-pane>
  </el-tabs>
</div>
{{activeKey2}}

```html
<el-tabs type="card" :closable="true">
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
| defaultActiveKey  | 如果没有设置 activeKey, 则使用该值 | string    |     | 第一个面板  |
| activeKey  | 当前选中面板的key  | string   |    |    |
| tab.click  | tab 被点击的回调  | string   |    |    |
| tab.remove  | tab 被删除的回调  | string   |    |    |

## TAB-PANE API
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   |  |         |
| key       | 与选项卡activeKey对应的标识符   | string   |  |  该选项卡在选项卡中的index值，如第一个选项卡则为'1'  |
