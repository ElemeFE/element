## 更新日志

### 1.0.0-rc.2

*2016-09-07*

- 修复 Upload 上传的问题，并增加上传成功和失败的钩子函数
- Button 组件增加 `nativeType` 属性，用于组件内 `<button>` 标签的原生 `type` 属性，默认值为 `button`
- 修复 Table 自定义模板中渲染静态数据错误
- 修复 Table 中被固定列的高度不与其他列的高度协调的问题
- 修复 Time Picker 的 `picker-options` 属性
- 修复一些组件图标丢失的问题
- 修复 远程搜索的 Select 在 Form 中的显示问题
- 修复 Input Number 输入小数和非数字值时的问题
- 修复 Select 选中 value 为 0 的值时绑定值不更新的问题
- 修复 Tree 取消选择某节点后，其同级节点均被取消的问题
- 修复 Upload 的 headers 属性设置无效
- 优化 增加打包成 commonjs 且不压缩的文件，默认引入 commonjs

#### 非兼容性更新
- Menu 组件 `mode` 属性默认值修改为 `vertical`
- Progress 组件升级，增加环形进度条的类型，以及增加了诸多属性，详细请查阅文档。
- Popover 现在可以通过 slot 指定 reference。

### 1.0.0-rc.1

*2016-08-30*

Element 1.0.0-rc.1 发布。
