## 更新日志

### 2.3.6

*2018-04-21*

- 修复 Tree 的 `allow-drop` 回调在使用 `type` 参数后的错误行为，#10821
- 修复可搜索的单选 Select 在 IE11 中无法输入搜索关键词的问题，#10822
- 修复单选 Select 在使用鼠标选中某个选项后错误地触发 `blur` 事件的问题，#10822

### 2.3.5

*2018-04-20*

- 修复 DatePicker 的 `type` 为 week 时面板错误高亮的问题，#10712
- 修复 InputNumber 初始值为 0 时输入框为空的问题，#10714
- 新增 Select 的 `automatic-dropdown` 属性，#10042（by @Seebiscuit）
- 修复 `disabled` 的 Rate 仍能通过键盘左右键改变组件值的问题，#10726（by @Richard-Choooou）
- 现在 DatePicker 的 `type` 属性可以接收 `'dates'`，用于选择多个日期，#10650（by @Mini256）
- 新增 Pagination 的 `prev-click` 和 `next-click` 事件，#10755
- 新增 Pagination 的 `pager-count` 属性，#10493（by @chongjohn716）
- 新增 `type` 作为 Tree 的 `allow-drop` 属性回调的第三个参数，#10792
- 改用 ResizeObserver 对元素的尺寸变化进行监测，#10779

### 2.3.4

*2018-04-12*

- 删除 SubMenu 在 TypeScript 类型声明中重复的 `showTimeout` 属性，#10566（by @kimond）
- 现在 Transfer 数据项的渲染支持通过 scoped slot 自定义，#10577
- 修复点击 Pagination 禁用的上一页、下一页按钮仍会触发 `current-change` 事件的问题，#10628
- 修复未绑定值的 Textarea 在 SSR 中会显示 `undefined` 的问题，#10630
- 修复 `type` 为 border-card 的 Tabs 中被禁用标签项的样式，#10640
- 新增 `$index` 作为 Table 的 `formatter` 属性回调的第四个参数，#10645
- 修复 TypeScript 类型声明未导出 CheckboxButton 的问题，#10666

### 2.3.3

*2018-04-04*

- 新增 Card 的 `shadow` 属性，#10418（by @YunYouJun）
- 修复 Badge 在 `value` 属性为 `0` 时不显示上标的问题，#10470
- 修复 Tree 节点拖拽相关的问题，#10474 #10494
- 新增 Autocomplete 的 `placement` 属性，#10475
- 现在 `default-time` 属性也可用于非范围选择的 DateTimePicker 了，#10321（by @RickMacTurk）
- 修复 TabItem 在浏览器失焦和隐藏后出现蓝色边框的问题，#10503
- 新增 SubMenu 的 `popper-append-to-body` 属性，#10515
- 现在非链接的 BreadcrumbItem 在 hover 时不再具有视觉反馈，#10551
- 调整 InputNumber `change` 事件的触发时机，使得在回调中能够取得最新的组件绑定值，#10553

### 2.3.2

*2018-03-29*

- 修复 Autocomplete 报错的问题，#10442

### 2.3.1

*2018-03-29*

- 修复 Input 的 `type` 属性未传递至原生 input 元素的问题，#10415
- 新增 Select 的 `blur` 方法，#10416

### 2.3.0 Diamond

*2018-03-28*

#### 新特性
- Table
  - 现在 TableColumn 的 `formatter` 属性可以是动态的，#10184（by @elfman）
  - 新增 `select-on-indeterminate` 属性，#9924（by @syn-zeta）
- Menu
  - 新增 `collapse-transition` 属性，#8809（by @limichange）
- Input
  - 新增 `select` 方法，#10229
  - 新增 `blur` 方法，#10356
- ColorPicker
  - 新增 `predefine` 属性，#10170（by @elfman）
- Tree
  - 新增 `draggable`、`allow-drop` 和 `allow-drag` 属性，以及 `node-drag-start`、`node-drag-enter`、`node-drag-leave`、`node-drag-over`、`node-drag-end` 和 `node-drop` 事件，#9251 #10372（by @elfman）
- Form
  - `validate` 方法新增第二个参数，包含未通过本次校验的表单项信息，#10279
  - 新增 `validate` 事件，#10351
- Progress
  - 新增 `color` 属性，#10352（by @YunYouJun）
- Button
  - 新增 `circle` 属性，#10359（by @YunYouJun）

#### 修复
- Form
  - 修复嵌套复合型 Input 时，FormItem 标签与输入框未对齐的问题，#10189
- Menu
  - 现在折叠状态的菜单项仅在传入 `title` slot 时才显示 Tooltip，#10193（by @PanJiaChen）
- Pagination
  - 修复 `current-change` 在未发生用户交互时错误触发的问题，#10247
- DatePicker
  - 现在时间日期选择器下拉面板中的值能够正确地从 `format` 属性中获取对应格式了，#10174（by @remizovvv）
- Upload
  - 现在拖拽上传会拦截不在 `accept` 属性范围内的文件，#10278

### 2.2.2

*2018-03-14*

- 新增 Input 的 `clear` 事件，#9988（by @blackmiaool）
- 现在 ColorPicker 的手动输入支持 `hsl`、`hsv` 和 `rgb` 格式了，#9991
- 修复 DatePicker 在清除初始值时不触发 `change` 事件的问题，#9986
- 现在 Rate 的图标类相关属性支持动态更新了，#10003
- 修复含有固定列的 Table 在设置 `max-height` 属性后有时不能及时更新布局高度的问题，#10034
- 现在 DatePicker 的范围选择支持先点选结束日期，再点选开始日期了，#8156（by @earlymeme）
- 新增 Pagination 的 `disabled` 属性，#10006
- 新增 Popover 的 `after-enter` 和 `after-leave` 事件，#10047
- 修复重置表单后，用户第一次改变 Select 的值时不触发校验的问题，#10105
- 修复 Table 的固定列在某些情况下宽度不正确的问题，#10130
- 修复调用 MessageBox 未传入 `title` 时，打开的 MessageBox 会继承上一个实例的 `title` 属性的问题，#10126（by @Pochodaydayup）
- 新增 Slider 的 `input-size` 属性，#10154
- 新增 Transfer 的 `left-check-change` 和 `right-check-change` 事件，#10156

### 2.2.1

*2018-03-02*

- 修复 Aside、Header 和 Footer 在某些布局中被压缩的问题，#9812
- 修复设置了 `height` 属性的 Table 在服务端渲染时无法加载的问题，#9876
- 修复可展开的 Table 在展开某一行后高度未重新计算的问题，#9848
- 修复在 DateTimePicker 中手动输入日期后不能正确触发 `change` 事件的问题，#9913
- 修复鼠标右键点击 Select 的输入框会展开选项的问题，#9894（by @openks）
- 新增 Slider 的 `tooltip-class` 属性，#9957
- 现在的 Select 在选中选项后仍然处于 focus 状态，#9857（by @Seebiscuit）
- 新增 Transfer 的 `target-order` 属性，#9960

### 2.2.0 Graphite

*2018-02-12*

#### 新特性
- Menu
  - SubMenu 新增 `popper-class` 和 `disabled` 属性，#9604 #9771
  - 现在水平模式下的 Menu 支持多级 SubMenu 了，#9741
- Tree
  - 新增 `node-contextmenu` 事件，#9678
  - 现在可以使用 scoped slot 自定义树节点的模板了，#9686
  - 新增 `getNode`、`remove`、`append`、`insertBefore`、`insertAfter`、`getCheckedKeys`、`getHalfCheckedNodes`、`getHalfCheckedKeys` 方法和 `check` 事件，#9718 #9730
- Transfer
  - 新增 `clearQuery` 方法，#9753
- Select
  - 新增 `popper-append-to-body` 属性，#9782

#### 修复
- Table
  - 修复点击可展开行的展开图标会触发 `row-click` 事件的问题，#9654
  - 修复某些情况下通过拖动改变列宽后，布局没有同步更新的问题，#9668
  - 修复合计行与固定列并存时的样式问题，#9667
- Container
  - 修复布局组件在 IE11 中无法自动填充可用空间的问题，#9655
- Loading
  - 修复在 `mounted` 中修改 `v-loading` 的值为 true 时不能正确显示 Loading 的问题，#9722
- Switch
  - 修复点击时会触发两次原生 click 事件的问题，#9760

### 2.1.0 Charcoal

*2018-01-31*

#### 新特性
- Cascader
  - 新增 `focus` 和 `blur` 事件，#9184（by @viewweiwu）
- Table
  - `filter-method` 方法加入第三个参数 `column`，#9196（by @liyanlong）
- DatePicker
  - 新增 `prefix-icon` 和 `clear-icon` 属性，#9237（by @AdamSGit）
  - 新增 `default-time` 属性，#9094（by @nighca）
  - `value-format` 属性增加对 `timestamp` 的支持，#9319（by @wacky6）
- InputNumber
  - 组件绑定变量的值支持 `undefined`，#9361
- Select
  - 新增 `auto-complete` 属性，#9388
- Form
  - 新增 `disabled` 属性，#9529
  - 新增 `validateOnRuleChange` 属性，#8141
- Notificaition
  - 新增 `closeAll` 方法，#9514

#### 修复
- InputNumber
  - 修复初始输入小数点时被重置的问题，#9116
- Dropdown
  - 修复当页面仅有水平滚动条时，某些浏览器下拉菜单定位错误的问题，#9138（by @banzhuanmei）
- Table
  - 修复带有固定列的 Table 在列数据变化后固定列的个数计算错误的问题，#9188（by @kolesoffac）
  - 修复多级表头最后一列的边框不能正确显示的问题，#9326
  - 修复在 Safari 浏览器中表头错位的问题，#9327
  - 修复带有展开行的表格在展开某一行后，当表格数据更新但 `row-key` 值不变时，该行会自动收起的问题，#9462
  - 修复在一些情况下不必要的多次渲染问题，#9426
  - 修复动态改变 TableColumn 的 `width` 属性时，其宽度计算错误的问题，#9426
- Loading
  - 修复某些情况下 Loading 不能被正确隐藏的问题，#9313
- DatePicker
  - 修复 `focus` 方法在范围选择时无效的问题，#9437
  - 修复当目前时刻处于不可选择的范围内时，点击面板上的「此刻」按钮仍能选中目前时刻的问题，#9470（by @wacky6）
  - 修复当在月选择面板中选中天数较少的月份时，日期面板呈现下一个月的问题，#9577（by @wacky6）
- Steps
  - 修复在 IE 11 中的样式问题，#9454

#### 非兼容性更新
- Menu
  - `collapse` 状态下的弹出菜单现在会插入至 body 元素，修复其位于 Aside 内时弹出菜单不可见的问题，#9263
- Table
  - 勾选多选表格的 checkbox 时不再同时触发 `row-click` 事件，#9467
- Loading
  - 非全屏 Loading 遮罩层的 `z-index` 修改为 2000；全屏 Loading 遮罩层的 `z-index` 值会随页面上的弹出组件动态更新，#9522
- Dropdown
  - `show-timeout` 和 `hide-timeout` 属性现在仅在 trigger 为 `hover` 时生效，#9573

### 2.0.11

*2018-01-08*

- 修复 Input 的 `prepend` 或 `append` slot 中 Select 的边框颜色错误，#9089
- 修复 Select 的 `remove-tag` 事件参数与文档不符的问题，#9090
- 新增 SubMenu 的 `show-timeout` 和 `hide-timeout` 属性，#8934（by @HugoLew）
- 修复按需引入 Table 时 `show-overflow-tooltip` 的 Tooltip 样式丢失的问题，#9130
- 修复 Table 在执行 `clearSort` 后点击对应列的排序图标无法正常排序的问题，#9100（by @zEmily）
- 捷克语的 i18n 配置文件由 `cz` 重命名为 `cs-CZ`，#9164

### 2.0.10

*2017-12-29*

- 修复了 Table 在固定列和合计行并存时的高度计算错误的问题，#9026
- 修复了 Table 样式 SCSS 文件错误编译的问题，#9028
- 现在 DatePicker 的 `change` 事件只会在 `value` 真正改变的时候触发，#9029（by @remizovvv）
- 新增 Input 的 `tabindex` 属性，#9041（by @dicklwm）

### 2.0.9🎄

*2017-12-24*

- 新增 Upload 的 `before-remove` 钩子方法，#8788（by @firesh）
- 修复 FormItem 的 `error` 属性初始值无效的问题，#8840
- 通过指令调用的 Loading 现在支持以 `element-loading-custom-class` 属性的方式设置自定义类名，#8826（by @earlymeme）
- 修复 CarouselItem 为异步获取时被隐藏的问题，#8921
- 新增 Tree 的 `renderAfterExpand` 属性，#8972

### 2.0.8

*2017-12-12*

- 新增西班牙语文档
- 修复 `show-timeout` 对点击触发的 Dropdown 无效的问题，#8734（by @presidenten）
- 修复 Form 对于 `trigger` 为 blur 的校验规则触发时机有误的问题，#8776
- 修复 DatePicker 在范围选择时 blur 事件触发时机有误的问题，#8784
- TimePicker 的 `format` 新增对 AM/PM 的支持，#8620（by @firesh）

### 2.0.7

*2017-11-29*

- 修复禁用文字按钮的样式问题，#8570

### 2.0.6

*2017-11-29*

- 修复 Table 排序图标的样式问题，#8405
- 修复 `trigger` 为 manual 的 Popover 的触发问题，#8467
- 新增 Autocomplete 的 `prefix-icon` 和 `suffix-icon` 属性，#8446（by @liyanlong）
- 新增 Cascader 的 `separator` 属性，#8501
- 新增 Input 的 `clearable` 属性，#8509（by @lbogdan）
- 新增 Pagination 的 `background` 属性，#8553

### 2.0.5

*2017-11-17*

- 修复上个版本引入的 Popover、Tree、Breadcrumb、Cascader 的 bug，#8188 #8217 #8283
- 修复 clickoutside 指令的内存泄露问题，#8168 #8225（by @badpunman @STLighter）
- 修复默认尺寸的多选 Select 在清空选项后输入框高度不随之更新的问题，#8317（by @luciy）
- 新增 Select 的 `collapse-tags` 属性，用于在多选时以文字代替 Tag，避免组件高度的增大，#8190
- 修复被隐藏的 Table 会造成 CPU 占用持续增加的问题，#8351
- 开放 Table 的 `doLayout` 方法，用于重新计算 Table 的布局，#8351

### 2.0.4

*2017-11-10*

- 提升 Cascader、Dropdown、Message、Notification、Popover、Tooltip、Tree 的可访问性
- 修复当视口变窄时 Container 无法同步更新其宽度的问题，#8042
- 修复 Tree 的 `updateKeyChildren` 在删除子节点时的行为错误，#8100
- 修复带有边框的 CheckboxButton 在 Form 中高度错误的问题，#8100
- 修复 Menu 在解析自定义颜色时的错误，#8153（by @zhouyixiang）

### 2.0.3

*2017-11-03*

- 修复范围选择的 DatePicker `editable` 和 `readonly` 属性无法正常工作的问题，#7922
- 修复嵌套的 Tabs 的样式错误，#7941
- 修复纵向 Steps 中最后一个 Step 的样式错误，#7980
- 修复 Pagination 的 `current-change` 事件触发时机错误的问题，#7995
- 修复由于 Menu 使用了未注册的 Tooltip 造成其在按需引入时报错的问题，#7995

### 2.0.2

*2017-10-31*

- 在 InputNumber 的加减按钮上单击鼠标右键不再触发值的改变，#7817
- Form 的 `validate` 方法现在能够正确地在异步校验完成后执行回调了，#7774（by @Allenice）
- 修复 DatePicker 的范围选择在内核为 Chromium 53-57 的浏览器中无法使用的问题，#7838
- 修复 `list-type` 为 picture-card 的 Upload 预览和删除图标丢失的问题，#7857
- 新增 TableColumn 的 `sort-by` 属性，#7828（by @wangfengming）
- 修复周模式下的 DatePicker 在选择某年第一周可能会显示为前一年第一周的问题，#7860（by @hh23485）
- 修复垂直模式的 Steps 中图标宽度的样式错误，#7891
- 增大了 Tree 中展开箭头的点击热区，#7891

### 2.0.1

*2017-10-28*

- 修复 RadioButton 和 CheckboxButton 的样式问题，#7793
- 修复 TimePicker 在某些情况下无法滚动的问题，#7811
- 修复部分组件在按需引入时样式不完整的问题，#7811

### 2.0.0 Carbon

*2017-10-27*

#### 新特性
- 综合
  - 新增 `theme-chalk` 主题
  - 增强以下组件的可访问性：Alert、AutoComplete、Breadcrumb、Button、Checkbox、Collapse、Input、InputNumber、Menu、Progress、Radio、Rate、Slider、Switch 和 Upload
  - 新增布局组件 Container、Header、Aside、Main 和 Footer
  - 新增 TypeScript 类型声明
  - 重绘了全部图标，并新增了部分图标
  - 新增了一系列基于断点的工具类，用于当视口尺寸满足一定条件时隐藏元素
  - 新增全局配置组件尺寸的功能。在引入 Element 时，配置 `size` 字段可以改变所有组件的默认尺寸
- Button
  - 新增 `round` 属性，用于圆角按钮 #6643
- TimeSelect
  - 可以用 `Up`、`Down` 导航，用 `Enter` 选中时间 #6023
- TimePicker
  - 可以用方向键导航，用 `Enter` 选中时间 #6050
  - 新增 `start-placeholder` 和 `end-placeholder`，用于设置范围选择时两个输入框的占位符 #7169
  - 新增 `arrow-control` 属性，提供另一种交互形式，#7438
- Tree
  - 子节点在首次被展开之前不进行渲染 #6257
  - 新增 `check-descendants` 属性，设置 `lazy` 模式下勾选节点时，是否完全展开整个子树 #6235
- Tag
  - 新增 `size` 属性 #7203
- Datepicker
  - type 为 `datetimerange` 时可以使用 `timeFormat` 格式化时间选择器 #6052
  - 新增 `start-placeholder` 和 `end-placeholder`，用于设置范围选择时两个输入框的占位符 #7169
  - 新增 `value-format` 属性，支持对绑定值的格式进行自定义，#7367
  - 新增 `unlink-panels` 属性，用于在选择日期范围时取消两个日期面板之间的联动
- MessageBox
  - 新增 `closeOnHashChange` 属性 #6043
  - 新增 `center` 属性，提供居中布局 #7029
  - 新增 `roundButton` 属性，使得内部按钮为圆角按钮 #7029
  - 新增 `dangerouslyUseHTMLString` 属性，使得 `message` 支持传入 HTML 字符串<sup>*</sup> #6043
  - 新增 `inputType` 属性，用户指定内部输入框的类型，#7651
- Dialog
  - 新增 `width`、`fullscreen`、`append-to-body` 属性，支持嵌套使用
  - 新增 `center` 属性，提供居中布局 #7042
  - 新增 `focus-after-closed`、`focus-after-open`属性，支持无障碍访问 #6511
- ColorPicker
  - 增加手动输入色值的支持 #6167
  - 新增 `size` 属性，用于控制组件的大小 #7026
  - 新增 `disabled` 属性，用于禁用组件 #7026
  - 新增 `popper-class` 属性，#7351
- Message
  - 图标部分使用 icon 代替图片，从而支持通过 CSS 修改图标背景色 #6207
  - 新增 `dangerouslyUseHTMLString` 属性，使得 `message` 属性支持传入 HTML 字符串<sup>*</sup> #6207
  - 新增 `center` 属性，提供居中布局 #6875
- Notification
  - 新增 `position` 属性，用于配置 Notification 出现的位置 #6231
  - 新增 `dangerouslyUseHTMLString` 属性，使得 `message` 属性支持传入 HTML 字符串<sup>*</sup> #6231
  - 新增 `showClose` 属性，用于隐藏关闭按钮 #6402
- Rate
  - 新增 `show-score` 属性，控制是否在右侧显示当前分数 #6295
- Tabs
  - 新增 `tab-position` 属性，控制选项面板内容显示的上、下、左、右四个方向 #6096
- Radio
  - 增加 `border` 属性和 `size` 属性 #6690
- Checkbox
  - 增加 `border` 属性和 `size` 属性 #6690
- Alert
  - 新增 `center` 属性，提供居中布局 #6876
- Menu
  - 新增 `background-color`、`text-color` 和 `active-text-color` 属性，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色 #7064
  - 新增 `open` 和 `close` 方法，支持手动打开和关闭 SubMenu，#7412
- Form
  - 新增 `inline-message` 属性，设置后校验信息会以行内样式显示 #7032
  - 新增 `status-icon` 属性，用于在输入框中显示校验结果反馈图标 #7032
  - Form 和 FormItem 新增 `size` 属性，用于控制表单内组件的尺寸，#7428
  - `validate` 方法在不传入 callback 的情况下返回 promise，#7405
  - 新增 `clearValidate` 方法，用于清空所有表单项的验证信息，#7623
- Input
  - 新增 `suffix`、`prefix` 的 slot，以及 `suffixIcon`、`prefixIcon` 属性，用于给输入框内部增加前置和后置内容 #7032
- Breadcrumb
  - 新增 `separator-class` 属性，可使用图标作为分隔符 #7203
- Steps
  - 新增 `simple` 属性，用于开启简洁风格的步骤条 #7274
- Pagination
  - 新增 `prev-text` 和 `next-text` 属性，用于自定义上一页和下一页的文本 #7005
- Loading
  - 配置对象新增 `spinner` 和 `background` 字段，支持自定义加载图标和背景色，#7390
- Autocomplete
  - 新增 `debounce` 属性，#7413
- Upload
  - 新增 `limit` 和 `on-exceed` 属性，支持对上传文件的个数进行限制，#7405
- DateTimePicker
  - 新增 `time-arrow-control` 属性，用于开启时间选择器的 `arrow-control`，#7438
- Layout
  - 新增断点 `xl`，适用于宽度大于 1920px 的视口
- Table
  - 新增 `span-method` 属性，用于合并行或列
  - 新增 `clearSort` 方法，用于清空排序状态
  - 新增 `clearFilter` 方法，用于清空过滤状态
  - 对于可展开行，当该行展开时会获得一个 `.expanded` 类名，方便自定义样式
  - 新增 `size` 属性，用于控制表格尺寸
  - 新增 `toggleRowExpansion` 方法，用于手动展开或关闭行
  - 新增 `cell-class-name` 属性，用于指定单元格的类名
  - 新增 `cell-style` 属性，用于指定单元格的样式
  - 新增 `header-row-class-name` 属性，用于指定表头行的类名
  - 新增 `header-row-style` 属性，用于指定表头行的样式
  - 新增 `header-cell-class-name` 属性，用于指定表头单元格的类名
  - 新增 `header-cell-style` 属性，用于指定表头单元格的样式
  - TableColumn 的 `prop` 属性支持 `object[key]` 格式
  - TableColumn 新增 `index` 属性，用于自定义索引值
- Select
  - 新增 `reserve-keyword` 属性，用于在选择某个选项后保留当前的搜索关键词

#### 修复
- DatePicker
  - 选择周数时，`v-model` 结果返回该周第二天的问题 #6038
  - 在 `daterange` 类型中，第一次的输入会被清空的问题 #6021
- DateTimePicker
  - 和 TimePicker 相互影响的问题 #6090
  - 选择时间小时和秒可超出限制的问题 #6076
- TimePicker
  - 失去焦点时无法正确改变 `v-model` 值的问题 #6023
- Dialog
  - 当含有下拉框时，下拉框的打开和关闭会造成文字虚晃的问题 #6088
- Select
  - 提升性能，修复组件销毁时可能导致 Vue dev-tool 卡死的问题 #6151
- Table
  - 修复 Table 在父元素从 `display: none` 变成其他状态时会隐藏的问题
  - 修复 Table 在父元素为 `display: flex` 时可能出现的宽度逐渐变大的问题
  - 修复 `append` 具名 slot 和固定列并存时，动态获取表格数据会导致固定列消失的问题
  - 修复 `expand-row-keys` 属性初始化无效的问题
  - 修复 `data` 改变时过滤条件失效的问题
  - 修复多级表头时固定列隐藏情况计算错误的问题
  - 修复 `max-height` 变更后无法恢复的问题
  - 修复一些样式上的计算错误

#### 非兼容性更新
- 综合
  - 移除 `theme-default`
  - 最低兼容 Vue 2.5.2 和 IE 10
  - 表单组件的 `change` 事件和 Pagination 的 `current-change` 事件现在仅响应用户交互
  - Button 和表单组件的 `size` 属性现在可接受 `medium`、`small` 和 `mini`
  - 为了方便使用第三方图标，Button 的 `icon` 属性、Input 的 `prefix-icon` 和 `suffix-icon` 属性、Steps 的 `icon` 属性现在需要传入完整的图标类名
- Dialog
  - 移除 `size` 属性。现在 Dialog 的尺寸由 `width` 和 `fullscreen` 控制
  - 移除通过 `v-model` 控制 Dialog 显示和隐藏的功能
- Rate
  - `text-template` 属性更名为 `score-template`
- Dropdown
  - `menu-align` 属性变更为 `placement`，增加更多方位属性
- Transfer
  - `footer-format` 属性更名为 `format`
- Switch
  - 由于 `on-*` 属性在 JSX 中会被识别为事件，导致 Switch 所有 `on-*` 属性在 JSX 中无法正常工作，所以 `on-*` 属性更名为 `active-*`，对应地，`off-*` 属性更名为 `inactive-*`。受到影响的属性有：`on-icon-class`、`off-icon-class`、`on-text`、`off-text`、`on-color`、`off-color`、`on-value`、`off-value`
  - `active-text` 和 `inactive-text` 属性不再有默认值
- Tag
  - `type` 属性现在支持 `success`、`info`、`warning` 和 `danger` 四个值
- Menu
  - 移除 `theme` 属性。现在通过 `background-color`、`text-color` 和 `active-text-color` 属性进行颜色的自定义
- Input
  - 移除 `icon` 属性。现在通过 `suffix-icon` 属性或者 `suffix` 具名 slot 来加入尾部图标
  - 移除 `on-icon-click` 属性和 `click` 事件。现在如果需要为输入框中的图标添加点击事件，请以具名 slot 的方式添加图标
  - `change` 事件现在仅在输入框失去焦点或用户按下回车时触发，与原生 input 元素一致。如果需要实时响应用户的输入，可以使用 `input` 事件
- Autocomplete
  - 移除 `custom-item` 属性。现在通过 `scoped slot` 自定义输入建议列表项的内容
  - 移除 `props` 属性，现在使用 `value-key` 属性指定输入建议对象中用于显示的键名
- Steps
  - 移除 `center` 属性
  - 现在步骤条将默认充满父容器
- DatePicker
  - `change` 事件参数现在为组件的绑定值，格式由 `value-format` 控制
- Table
  - 移除通过 `inline-template` 自定义列模板的功能
  - `sort-method` 现在和 `Array.sort` 保持一致的逻辑，要求返回一个数字
  - 将 `append` slot 移至 `tbody` 元素以外，以保证其只被渲染一次
  - `expand` 事件更名为 `expand-change`，以保证 API 的命名一致性
  - `row-class-name` 和 `row-style` 的函数参数改为对象，以保证 API 的一致性

##
<i><sup>*</sup> 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此请在 `dangerouslyUseHTMLString` 打开的情况下，确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。</i>