## 更新日志

### 1.0.0-rc.6

*2016-10-11*

- 修复 Tabs 切换后 Tab-panel 被销毁的问题
- 修复 TimePicker 错误的隐藏面板
- 修复 Table Cell 的样式, #204
- 修复 Menu default-active 属性不能为空的问题, #200
- 修复 Menu unique-opened 开启后无法展开子菜单的问题, #200
- 为 Notification 和 Message 的不同 type 添加独立的调用方法
- 为 Message Box 和 Dialog 添加 lockScroll 属性，用于定义是否在弹框出现时将 body 滚动锁定
- 新增 Input textarea 类型的 rows, autosize 属性
- 为 Tree 添加 getCheckedNodes 方法和 node-click、check-change 回调
- 新增 DatePicker 禁用日期功能 #253
- 修复 多选可搜索的 Select 下拉选项自动展开的问题
- 为 Dialog 添加 top 属性
- 修复 Menu 组件垂直模式下开启 router 属性会立刻跳转的问题 #295
- Checkbox change 事件现在只能被人为的交互操作所触发
- 新增 Checkbox checked 属性
- 修复 Select 远程搜索时使用键盘选择选项无法更新 v-model 的问题

#### 非兼容性更新

- Dropdown 组件重构，现在可以以更加的灵活方便的形式来自定义触发下拉的元素，以及可以定义下菜单的样式

### 1.0.0-rc.5

*2016-09-30*

- 修复 Table 头部不同步的问题
- 修复 Menu 组件 default-active 绑定动态值无法更新的问题
- 新增特性 Menu 组件中若选中子菜单项现在会自动展开所有父级菜单
- 修复 vue-popper 引入 popper 路径错误
- 修复 DatePicker 初始值是合法时间类型但无法设置成功的问题
- 修复 Pagination 的图标没有正确切换样式, #163
- 修复 Row 组件 align 属性不生效的问题
- 修复 Tabs 关闭标签页时对应 Tab-panel 没有移除的问题
- 新增 Menu 组件中 MenuItem 的 route 属性

#### 非兼容性更新
- Menu 组件的 `unique-opend` 属性修正为 `unique-opened`

### 1.0.0-rc.4

*2016-09-21*

- 修复 Select 多选时选项变为空数组后 placeholder 不出现的问题
- 修复 Time Picker 时间选择可滚动
- 修复 Tooltip 有时会错位的问题
- 修复 丢失的组件 css 文件
- 修复 Table 在 Safari 下边框没对齐
- 修复 TimePicker 图标样式被默认图标样式覆盖
- 修复 在 mounted 钩子函数中改变 Select 绑定值不生效的问题
- 修复 在多个依次出现的 Dialog 或 Message Box 全部关闭后页面有几率不可滚动的问题
- 修复 Table 初次渲染时宽度重新计算 #78
- 新增 时间、日期选择器增加 align 属性，可设置对齐方式
- 新增 TableColumn 的 align 属性
- 新增 autocomplete 的 select 事件

#### 非兼容性更新
- Select 组件样式的 `display` 属性默认值修改为 `block`

### 1.0.0-rc.3

*2016-09-09*

- 修复 Slider 存在输入框时，输入框与 Slider 的值不同步的问题
- 修复 Steps 样式
- 修复 无法安装的问题

### 1.0.0-rc.2

*2016-09-09*

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
- 修复 Pagination 包含 sizes 子组件时 page-size 无效的问题
- 优化 增加打包成 commonjs 且不压缩的文件，默认引入 commonjs

#### 非兼容性更新
- Menu 组件 `mode` 属性默认值修改为 `vertical`
- Progress 组件升级，增加环形进度条的类型，以及增加了诸多属性，详细请查阅文档
- Popover 现在可以通过 slot 指定 reference

### 1.0.0-rc.1

*2016-08-30*

Element 1.0.0-rc.1 发布
