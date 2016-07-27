## 更新日志

### 0.2.0

`2016-07-29`

- 增加 grid 相关组件
- form-item 增加 required 属性

*非兼容性更新*

- progress 的 percentage 属性值范围从 0～1 改变为 1~100.

### 0.1.9

`2016-07-12`

- 增加 menu 组件

*非兼容性更新*

- 使用了新的图标集，原有的某些图标可能不存在了

### 0.1.8

`2016-07-07`

- dropdown 和 tooltip 首次出现闪动问题

### 0.1.7

`2016-07-06`

- dropdown 增加触发下拉菜单方式的参数
- 修正若干组件的样式问题和浏览器兼容问题
- 修复 popper.js 产生的过多 scroll 事件绑定
- 在 radio-group 里增加 radio-button 类型
- 为 select 添加 singleCancelable 选项

### 0.1.6

`2016-06-30`
- dropdown-menu 改为动态创建
- 修复 textarea 缺失 model 参数的 bug
- 修复 pagination 和 input-group 在 safari 下的样式问题

### 0.1.5

`2016-06-29`
- 为 MessageBox 和 Notification 注册全局方法
- button 的 loading 状态时改为不触发 hover 和点击等操作
- input组件 增加 maxlength 和 minlength 属性支持

### 0.1.4

`2016-06-29`

- 增加 Tabs、Form、MessageBox、Alert、Notification、Slider 组件
- dropdown menu 现在是直接插入到 body 节点下，并且修正了自适应宽度的 bug
- dropdown item 点击后关闭 dropdown menu
- radio 绑定值增加 Number 类型支持
- 增加 radio-group 组件
- 增加 checkbox-group 组件
- Select 组件 API 更新，现在的用法和原生 select 标签更加相似

