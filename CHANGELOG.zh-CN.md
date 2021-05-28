## 更新日志

### 2.15.2

*2021-05-28*

#### Bug 修复

- Image
  - 修复 z-index 增加 keydown 事件 添加 stopPropagation (#20859 by @cs1707)
- Input
  - 修复 password cursor 展示 (#20870 by @cs1707)
  - 修复 password icon 在 edge 下的展示 (#20902 by @cs1707)
- Carousel
  - 修复 interval 和 scale bug (#20931 by @cs1707)
- Cascader
  - 修复 delete tag bug (#20939 by @cs1707)
- Drawer
  - 支持 overflow auto (#20948 by @cs1707)
- 其他
  - 修复 isFunction (#20912 by @cs1707)

### 2.15.1

*2021-02-23*

#### Bug 修复

- Drawer
  - 修复 Drawer bug (by @cs1707)
- Image
  - 修复 image object fit ratio 在 IE 下的 bug  (#19583 by @charlie0228)
- Cascader
  - 修复 cascader panel active path (#20730 by @cs1707)
- Calendar 
  - 修复 calendar 国际化 bug (#20758 by @iamkun)
- ColorPicker
  - 修复 bugs (by @UxieVerity)

#### 优化

- Doc
  - 更新 Axure 设计资源 v2.1.0 (by @iamkun)

### 2.15.0

*2021-01-15*

#### Bug 修复

- Select
  - 修复 placeholder 国际化 bug (#17644 by @nzh63)
- Popconfirm
  - 修复 Popconfirm 国际化 bug by @iamkun
- Drawer
  - 修复 focus bug (#20626 by @cs1707)
- Image
  - 图片预览优化 (#20652 by @cs1707)

#### 优化

- Doc
  - 更新法语文档 datetime-picker.md (#20543 by @lonk)
  - 更新 Progress 组件文档 (#20641 by @cs1707)

### 2.14.1

*2020-11-11*

#### Bug 修复

- Popover
  - 兼容 Vue 2.6 新 v-slot 语法 (#20424 by @iamkun)

#### 优化

- I18n
  - 更新阿拉伯语翻译 (#20202 by @elkattan)
  - 更新维吾尔语翻译 (#20177 by @IlhamTahir)

### 2.14.0

*2020-10-29*

#### 非兼容性更新

- Popconfirm
  - 事件名称修改为 `confirm`, `cancel` (#20240 by @hugiron)

#### Bug 修复

- Progress
  - 修复参数错误的问题 (#19985 by @Caaalabash)

#### 优化

- I18n
  - 更新俄语翻译 (#19451 by @yangirov)
  - 更新高棉语翻译 (#20077 by @Sovai)
  - 更新乌克兰语翻译 (#20344 by @MammutAlex)

### 2.13.2

*2020-05-18*

#### Bug 修复

- Autocomplete
  - 修复 'change event' 错误 (#19200 by @sxzz)
- Image
  - 更新错误状态 (#19194 by @lhx6538665)

#### 优化

- I18n
  - 更新 ru-RU popconfirm 翻译 (#19220 by @Opppex)
  - 更新 vi 翻译 (#19244 by @quangln2810)
  - 更新 Catalan 和 Spanish 翻译 (#19296 by @Ismaaa)
  - 更新 Indonesia 翻译 (#19320) by @therour)
  - 更新 Brazilian Portuguese 翻译 (#19374 by @diegomengarda)


### 2.13.1

*2020-04-13*

#### 新特性
- Autocomplete
  - 添加 change 事件 (#17913 by @sxzz)

#### Bug 修复

- Autocomplete
  - 修复类型为 textarea 时建议错误问题 (#18478 by @Roojay)
- Carousel
  - 修复 console.warn 文案拼写错误 (#18264 by @IceFox)
- Image
  - 修复当 preview-src-list 属性不包含 src 时图片预览大图展示为空的问题 (#18975) (#19130 by @luckyCao)
  - 修复第二次图片预览时快捷键失效问题 (#18983) (#19156 by @luckyCao)
  - 修复 preview-src-list 为空时点击图片会给 body 添加 overflow: scroll 的问题 (#18967 by @inooNgt)
- Transfer
  - 修复和 Form 组件一起使用时错误的行高问题 (#18917 by @Hanx)
- InputNumber
  - 正确计算 inputNumberDisabled (#18439 by @ashuser-pendo)
- Chore
  - 更新首页文案 (#19155 by @iamkun)
- Doc
  - 更新 Popconfirm 文档 (#18324 by @iamkun)
  - 修复 step-strictly 文档拼写问题 (#18705 by @dream2023)
  - 修复 Steps 组件文档问题 (#17555 by @haoranyu)

### 2.13.0

*2019-11-26*

#### 新特性

- Popconfirm
  - 新增 Popconfirm 组件 (#17548 by @iamkun)

#### Bug fixes

- BackTop
  - 平滑过渡动画 (by @lon)
- DatePicker
  - 修复选择最小日期的 bug (#17191 by @smk0621)
- Select
  - 修复测试用例  (by @msidolphin)
- Tree
  - 增加 font-size 样式 (#17094 by @spengjie)
- Table
  - 头部可自定义 (#17291 by @ziyoung)
  - 更新头部样式 (#17284 by @ziyoung)
  - 修复时候 filter 之后高度问题 (#17348 by @ziyoung)
  - 修复 row-style 失效的 bug (#17002 by @a631807682)
  - 修复头部消失的 bug (#17341 by @ziyoung)
- Calendar
  - 导入 el-button 和 el-button-group (#17376 by @masongzhi)
- MessageBox
  - 修复图表位置 (#17410 by @nullptru)
- TimePicker
  - 滚动后设置正确的位置 (#16868 by @mattheyan)
- Message
  - 修复关闭的 offsetHeight（#17564） (#17852 by @gzwgq222)
- Form
  - ValidateField 的回调应为可选项 (#17314 by @CarterLi)
- Cascader
  - 修复 TypeScript 3.7 的兼容问题 (#17881 by @CarterLi)
- Menu
  - 修复 NavigationDuplicated 在 vue-router@^3.1.0 的报错 (#17269 by @iamkun)
- Dropdown
  - 更新类型文件 (#17550 by @iamkun)
- Progress
  - 增加 strokeLinecap 属性 (#17552 by @iamkun)
- InfiniteScroll
  - 跳过不可见元素触发 (#17553 by @iamkun)
- Image
  - 优化用户体验 (#16985 by @luckyCao)
  - 优化大图片展示问题 (#16796 by @luckyCao)
- Drawer 
  - 修复 drawer-append-to-body 失效的 bug (#16953 by @JeremyWuuuuu)
- Select
  - 修复空 tag 的 bug (17199 by @luckyCao)
- Scrollbar
  - 修复 FireFox 双滚动条的 bug (#18091 by @iamkun)
  
#### Optimization

- I18n
  - 更新 sv-SE.js (#17926 by @FOLLGAD)
  - 更新 avatar 组件法语文档 (#17762 by @blombard)
- Docs
  - 修复 time-select 文档错误 (#17250 by @wacky6)
  - 修复 Drawer 文档错误 (#17122 by @haoranyu)
  - 更新 Spanish changelog 2.12.0 (#17364 by @Gonzalo2310)
  - 修复 Changelog 文档错误 (#17874 by @renlixin)
  - 修复 Loading 示例 (#17862 by @MBearo)
  - 增加 input event 相关文档 (#18061 by @zhouxinyong)
  - 移除 Input repeat change event 相关文档 (#18085 by @zhouxinyong)

### 2.12.0

*2019-08-29*

#### 新特性

- Popover
  - 添加 close-delay 属性 (#16671 by @LachlanStuart)
- Theme
  - 增加 Chrome 插件: Element Theme Extension (#16686 by @iamkun)
- Icon
  - 支持 font-display 属性的配置 (#16805 by @iamfaizalandyka)

#### Bug fixes

- Table
  - 在表头拖拽后阻止 click 事件的触发 (#16850 by @ziyoung)
  - 修复表头 display 为 none 造成浏览器崩溃的问题 (#16956 by @luckyCao)
  - 修复没有数据的时表格高度问题 (#16861 by @ziyoung)
  - 调用 toggleExpansion 不再抛出异常 (#16304 by @yyjjqq94)
  - 挂载时不再触发 sort-change 事件 (#17113 by @a631807682)
  - 修复 setCurrentRow 方法不生效的问题 (#16879 by @ziyoung)
  - 修复当数据异步加载时，expand-row-keys 不生效的问题 (#16899 by @ziyoung)
  - 把 toggleAllSelection 设置为 Table 示例的属性 (#17137 by @ziyoung)
- Tree
  - 修复文字与复选框之间的距离 (#16799 by @Hazlank)
- Tabs
  - 修复 TabItem 位置不正确的问题 (#16520 by @victorting)
  - 修复高亮的 Tab 不在可视区的问题 (#17033 by @nullptru)
- Calendar
  - 修复日期的显示问题 (#16772 by @ubitoffee)
  - 修复在夏令时的显示问题 (#17208 by @iamkun)
- Cascader
  - 修复 CascaderPanel 的显示问题 (#16716 by @zhangHongEn)
  - 禁用状态下，关闭按钮不显示 (#16224 by @yyjjqq94)
- Input
  - 修复韩语输入问题 (#15069 by @MoonHyuk)
  - 触发清除按钮的点击事件 (#16576 by @a631807682)
- Select
  - 过滤时，不收起下拉框 (#17205 by @luckyCao)
- Transfer
  - 修复样式问题 (#17206 by @iamkun)
- Dialog
  - 添加 SCSS 变量 (#16365 by @haoranyu)
- RadioGroup
  - is 指定时，不产生非法的 HTML 片段 (#17070 by @nullptru)
- Divider
  - 支持自定义类 (#17078 by @island205)
- Carousel
  - 修复 change 的触发时机 (#16705 by @iamkun)
- Notification
  - 不修改传入的 option (#16704 by @iamkun)
- DatePicker
  - 给 picker-option 添加 className 属性 (#16632 by @iamkun)
- DateTimePicker
  - 修复时间选择滚动条的问题 (#16854 by @jesse-li)

#### Optimization

- Checkbox
  - 提高可访问性 (#16575 by @tylertrotter)
- Docs
  - 更新 changelog (#16773 by @SimonaliaChen)
  - 更新贡献指南 (#14800 by @sinchang)
  - 修复 Drawer 文档中的拼写错误 (#16848 by @winkay)
  - 更新自定义主题 (#16983 by @iamkun)
  - 新增 Esperanto 翻译 (#16955 by @maxkoryukov)
  - 更新 input-number 文档 (#16316 by @luckyCao)
  - 更新 Spanish 文档 (#16961 #16548 by @Gonzalo2310)
- I18n
  - 更新加泰罗尼亚语翻译 (#14722 by @oscaralbareda)
  - 更新阿拉伯语翻译 (#16653 by @l3op)
- Test
  - 修复拼写错误 (#16672 by @boomler)
  - 优化 image 的单元测试 (#16847 by @a631807682)
- Types
  - 修复 httprequest 的类型 (#16633 by @luckyCao)

### 2.11.1

*2019-07-26*

#### Bug 修复

- Image
  - 修复 Image 组件 SSR 兼容性 (#16737 by @luckyCao)
- Chore
  - 更新 dart-sass 的兼容性 (#16744 by @LewisChennnnn)

### 2.11.0

*2019-07-25*

#### 新特性

- Drawer
  - 新增抽屉组件 (#16577 by @JeremyWuuuuu)

#### Bug 修复

- Checkbox
  - 修复 CSS 样式问题 (#16006 by @Hazlank)
- Tree
  - 更新类型定义为泛类型 (#15934 by @JeremyWuuuuu)
  - 修复设置节点 isCurrent 的为 false 的问题 (#15870 by @kkkisme)
- Dropdown
  - 更新 split-button 默认颜色 (#15931 by @JuniorTour)
- Cascader
  - 修复一级菜单更新问题 (#16399 by @luckyCao)
  - 懒加载时设默认值 (#16420 by @luckyCao)
  - 修复当节点值重复时的显示问题 (#15935 by @junyiz)
  - 对外暴露 getCheckedNodes 和修复 options 改变会影响选中的问题 (#16709 by @SimonaliaChen)
- Calendar
  - 更新显示正确的 header 的逻辑 (#16354 by @ziyoung)
- Submenu
  - 修复 append-to-body 问题 (#16289 by @a631807682)
- Table 
  - 修复 tree table 数据更新问题 (#16481 by @island205)
- Select
  - 修复内存泄漏问题 (#16463 by @island205)
- InfiniteScroll
  - 更新命名和说明 (#16698 by @iamkun)
- Avatar
  - 修复图片不居中的问题 (#16489 by @luckyCao)
- Dialog
  - 增加 destroyOnClose 属性 (#16455 by @ziyoung)
- Image
  - 增加大图预览 (#16333 by @luckyCao)

#### 优化

- Docs
  - 修复 dropdown 示例 (#16193 by @webxmsj)
  - 修正笔误 (#15971 by @howiefh)
- I18n
  - 更新泰文翻译 (#16689 by @ponkrit)
- Chore
  - 更新基础 API 地址 (#16607 by @iamkun)
  - 增加 Form 的主题 token (#16699 by @iamkun)
  - 更新统计 (#16609 by @iamkun)
  - 修复文档锚点问题 (#16692 by @iamkun)

### 2.10.1

*2019-07-02*

#### Bug 修复

- Table
  - 排序 icon 问题修复 (#15439 by @bezany)
  - 修复 `append` slot 存在时布局错位问题 (#16332 by @ziyoung)
  - 修复 `showOverflowTooltip` 更新无效的问题 (#16295 by @a631807682)
  - 修复 `FilterPanel` 中 `Scrollbar` 未注册问题  (#16246 by @ziyoung)
- Chore
  - 更新版本号，修复文档问题 (#16233 by @ziyoung)
  - 修复英文首页样式问题 (#16254 by @iamkun)

#### 优化

- Tag
  - 兼容 IE (#16334 by @ziyoung)
- Chore
  - 更新钉钉3群二维码 (#16236 by @iamkun)
- Doc
  - 更新主题编辑器文档 (#16244 by @iamkun)

### 2.10.0

*2019-06-25*

#### 新特性

- I18n
  - 支持乌兹别克语 (#15796 by @ogabek96)
- Calendar
  - 支持 `first-day-of-week` 配置 (#16047 by @ziyoung)
- Avatar
  - 新增 `Avatar` 组件 (#16144 by @luckyCao)
- Upload:
  - 支持自定义缩略图模版 (#13192 by @victorzhuk)


#### Bug 修复

- Tree
  - 当 `currentKey` 为 `null` 时取消对树节点的高亮 (#15668 by @yyjjqq94)
  - 修复多实例共享数据的问题 #15538 (#15615 by @VanMess)
- Upload
  - 更新 `fileList` 的类型定义 (#15716 by @underfin)
- Table
  - 修复加载 icon 不显示的问题 (#15868 by @ziyoung)
  - 修复复杂表格中 hover 行背景色问题 (#15504 by @cnlon)
  - 修复 `current-row-key` 和选择事件的问题 (#15983 by @ziyoung)
  - `height` 属性接受更多单位 (#16013 by @ziyoung)
  - 修复 `reserve-selection` 无效的问题 (#16135 by @ziyoung)
- Menu
  - 修复 `popper-append-to-body` 设置后，子菜单无法收起的问题 (#15391 by @PanJiaChen)
- Select
  - 修复 `initialInputHeight` 问题 (#15989 by @yyjjqq94)
  - 修复输入中文时 `default-first-option` 的行为问题 (#15431 by @VanMess)
  - `import` 重复 (#16215 by @lengband)
- Message
  - 类型定义中添加 `offset` 属性 (#16027 by @matjaz)
- Timeline
  - 修复逆序问题 (#16091 by @ziyoung)
- Slider
  - 补充 `input` 事件文档 (#15588 by @VanMess)
- InfiniteScroll
  - 更新包名 (#16125 by @iamkun)
- MessageBox
  - 修复 `distinguishCancelAndClose` 行为与文档不符的问题 (#15438 by @qingdengyue)
- PopupManager
  - 修复无法复写 `z-index` 的问题 (#15738 by @luckyCao)
- Docs
  - 删除不必要的内容 (#16194 by @Alexeykhr)
  - 更正 `Divider` 属性类型 (#15889 by @haoranyu)
- Chore
  - 更新测试 API 地址 (#15807 by @iamkun)

#### 优化

- Tree
  -优化循环性能 (#15699 by @KingJeason)
- Theme
  - 更新 GA 打点，修改页底地址链接到主题编辑器 (#16007 by @island205)
- Badge
  - 更新类型定义 (#16198 by @iamkun)
- Avatar
  - 更新主题变量配置 (#16202 by @luckyCao)
- I18n
  - 更新葡萄牙语 (#15776 by @gigioSouza)
  - 更新波斯语 (#15881 by @pamenary)
- Docs
  - 补充入门文档中的组件列表 (#16063 by @pape2016)
  - 更新法语文档 (#16208 by @blombard)
  - 为 `Alert` 添加 默认插槽文档 (#15444 by @Alexeykhr)
  - 更新西班牙语文档 (#15840 by @Gonzalo2310)
  - 更新法语文档中的拼写错误 (#15837 by @blombard)
  - 更新 2.9.2 西班牙文档 (#16185 by @Gonzalo2310)

#### 非兼容性更新

- Form
  - 移除输入框的成功状态 (#16159 by @ziyoung)

### 2.9.2

*2019-06-21*

#### Bug 修复

- Chore
  - 修复 TS 定义文件 (#15805 by @NateScarlet)

### 2.9.1

*2019-05-30*

#### 新特性

- Table
  - Tree Table 支持 tree-props，default-expand-all，expand-row-keys 属性, toggle-row-expansion 方法，expand-change 事件 (#15709 by @ziyoung)

#### Bug 修复

- Table
  - 修复了一些问题 (#15709 by @ziyoung)
- Theme
  - 更新接口域名 (#15784 by @iamkun)

#### 优化

- Chore
  - 更新 InfiniteScroll 组件定义文件 (#15794 by @iamkun)

### 2.9.0

*2019-05-30*

#### 新特性

- Backtop
  - 新增 Backtop 组件 (#15541 by @iamkun)
- PageHeader
  - 新增 PageHeader 组件 (#15714 by @ziyoung)
- InfiniteScroll
  - 新增 InfiniteScroll 指令 (#15567 by @iamkun)
- Cascader
  - 新增多选模式和 filter-method 方法 (#15611 by @SimonaliaChen)
- Message
  - 信息依次展示 (#15639 by @island205)
- Tag
  - 新增 effect 属性 (#15725 by @SimonaliaChen)
- Tabs
  - 卡片模式下标题左对齐 (#15695 by @luckyCao)
- DatePicker
  - 支持字符串常量 (#15525 by island205)
- Image
  - 支持 attrs 和 listeners (#15578 by @VanMess)
- Theme
  - 新增 popup 背景配置 (#15412 by @iamkun)
- Chore
  - 更新文档首页 (#15682 by @iamkun)

#### Bug 修复

- Table
  - 修复排序条件为空时的排序问题 (#15012 by @joelxr)
- Image
  - 修复 ssr 问题和 object-fit 的兼容性 (#15346 by @SimonaliaChen)
- Input
  - 修复 show-word-count 样式问题 (#15359 by @lvjiaxuan)
  - 修复删除图标样式 (#15354 by @YiiGuxing)
- Calendar
  - 修复星期展示错误 (#15399 by @qingdengyue)
  - 修复十月展示问题 (#15394 by @qingdengyue)
- Tabs
  - 修复 padding 问题 (#15461 by @SimonaliaChen)
- Tag
  - 修复阻止冒泡问题 (#15150 by @infjer)
- Form
  - 修复 form-item 的高度错误 (#15457 by @SimonaliaChen)
  - 修复 resetFields 问题 (15181 by @luckyCao)
- Tooltip
  - 修复自定义 tabindex 不生效问题 (#15619 by @SimonaliaChen)
- Link
  - 修复图标 class 问题 (#15752 by @iamkun)
- Select
  - 回滚清除时，设置 value 为 null 的修改 (#15447 by @iamkun)
- Loading
  - 修复 Dom 不更新的问题 (#15123 by @FAKER-A)
- Switch
  - 修复事件重复触发问题 (#15178 by @FAKER-A)
- Slider
  - 修复点击时样式问题 (#15561 by @luckyCao)
- Radio
  - 修复 value 不更新的问题 (#14809 by @OverTree)
- Form
  - 修复 resetFields 问题 (15181 by @luckyCao)
- Chore
  - 更新依赖 (#15324 by ziyoung)
- Type
  - 修复 Loading 定义文件 (#15635 by @iamkun)
  - 修复 Icon 定义文件 (#15634 by @iamkun)
  - 修复 Link 定义文件 (#15402 by @iamkun)

#### 优化

- Cascader
  - 重构 (#15611 by @SimonaliaChen)
- Chore
  - 更新新建组件的脚本 (by @iamkun)
- Docs
  - 重新命名文档变量 (#15185 by @liupl)
  - 更新 Image 组件文档 (#15423 by @haoranyu)
  - 修复 Form 组件文档错误 (#15228 by @SHERlocked93)

### 2.8.2

*2019-04-25*

#### Bug 修复

- Icon
  - 更新 icon (#15272 by @iamkun)
- 文档
  - 修复 Form 与 Input 文档样式 (#15273 by @ziyoung)

### 2.8.1

*2019-04-25*

#### Bug 修复

- Icon
  - 更新 Select 与 Cascader 的 icon (#15264 by @SimonaliaChen)
  - 更新 icon (#15258 by @iamkun)

#### 优化

- Chore
  - 更新构建脚本 (#15267 by @ziyoung)
- Docs
  - 修复 link 的样式 (#15265 by @iamkun)
- 其他
  - migrating 配置兼容驼峰名称 (#15260 by @SimonaliaChen)

### 2.8.0

*2019-04-25*

#### 新特性

- Divider
  - 新增 Divider 组件 (#15055 by @island205)
- Rate
  - 支持通过对象自定义 colors 与 icon-classes 属性 (#15051 by @SimonaliaChen)
- Link
  - 新增 Link 组件 (#15052 by @iamkun)
- Calendar
  - 新增 Calendar 组件 (#14908 by @ziyoung)
- Icon
  - 新增图标 (#15214 by @iamkun)
- Alert
  - 新增高饱和度主题 (#15041 by @island205)
- Image
  - 新增 Image 组件 (#15117 by @SimonaliaChen)
- Collapse
  - CollapseItem 支持禁用 (#15076 by @ziyoung)
- Carousel
  - 新增 direction 属性，支持垂直方向切换 (#15122 by @ziyoung)
- Pagination
  - 新增 hide-on-single-page 属性 (#15096 by @ziyoung)
- Slider
  - 新增 marks 属性 (#15133 by @luckyCao)
- Input
  - 新增 show-word-count 属性 (#15075 by @luckyCao)
- InputNumber
  - 新增 step-strictly 属性 (#15050 by @luckyCao)
- Tooltip, Dropdown, Popover
  - 新增 tabindex 属性 (#15167 by @ziyoung)

#### Bug 修复

- Notification
  - 修复标题不换行的问题 (#15008 by @iamkun)
- Form
  - 修复动态表单校验规则不生效的问题 (#14985 by @luckyCao)
  - 修复 label 的样式 (#14969 by @ziyoung)
  - 当 required 为 true 时，显示星号 (#15144 by @ziyoung)
- Pagination
  - 修复 slot 未更新的问题 (#14711 by @lucyhao)
- Table
  - 修复懒加载时加载数据的 bug (#15101 by @ziyoung)
  - 在合并单元格时，修复单元格的宽度计算不正确的问题 (#15196 by @ziyoung)
  - 提升表格的性能 (#14868 by @ziyoung)
  - 初始化时不再触发 sort-change 事件 (#14625 by @PeanutWatson)
  - 让 height 与 max-height 属性的行为保持一致 (#14660 by @arthurdenner)
- Dialog
  - 修复内容不换行的问题 (#15027 by @iamkun)
- Alert
  - 更新 typescript 定义文件 (#15186 by @ziyoung)
- Tabs
  - Fix issue where Promise rejection was hitting application (#14816 by @ffxsam)
  - slot 改变时，重新渲染 (#15238 by @ziyoung)
- Message
  - 修复 typescript 定义文件 (#14968 by @agoni1212)
- Select
  - 修复当 value 为 undefined 或者 null 的报错 (#15022 by @luckyCao)
- Tree
  - 当前节点被删除后，选中的节点也应该删除 (#14604 by @sinchang)
  - 提升性能 (#14881 by @ChenZhuoSteve)
- Dropdown
  - 修复样式 (#14907 by @doing123)
- Slider
  - 修复可访问性问题 (#14792 by @erezsob)
- Menu
  - 如果 defaultIndex 不存在，activeIndex 应该为空 (#14074 by @hoythan)
- Directive
  - RepeatClick: 使用 Date.now 提升性能 (#14776 by @pavelmash)
- Upload
  - 修复 Upload 的背景颜色 (#15039 by @iamkun)
- Theme
  - 添加无圆角变量 (#15256 by @iamkun)

#### 优化

- Chore
  - 更新中文 changelog (#14965 by @iamkun)
  - 当 demo 描述为空时，不再显示 (#15014 by @ziyoung)
  - 显示 DevServer 的信息 (#15028 by @iamkun)
  - 修复 2.6 changelog 的 bug (#15026 by @iamkun)
  - 更新构建脚本 (#14821 by @abc3660170)
  - 本次开发时支持热更新 (#15221 by @SimonaliaChen)
  - 本地开发时，加载 sourcemap (#15087 by @ibufu)
Docs
  - 重命名 demo 中的变量 (#14602 #15003 #15094 #15105 by @liupl)
  - 修复 upload 文档中的错误 (#15023 by @iamkun)
  - 更新 Form 文档 (#15040 by @iamkun)
  - 更新 Tabs 文档 (#15053 by @iamkun)
  - 使用 eleme.cn 作为新域名 (#15139 by @ziyoung)
  - 修复 Image 组件的路由名 (#15194 by @iamkun)
  - 删除多余的法语翻译 (#15207 by @iamkun)

#### 非兼容性更新

- Rate
  - 禁用情况下，显示小位数 (#15089 by @haoranyu)
- Select
  - 过滤情况下，placeholder 为选中选项的 label (#14989 by @ibufu)

### 2.7.2

*2019-04-03*

#### 修复

- Form
  - 修复 `label-width` 为 `auto` 的样式 (#14955 by @ziyoung)

#### 优化
- Docs
  - 修复文档内图片链接错误 (#14957 by @iamkun)
- Chore
  - 修复发布时 mkdir 异常 (#14952 by @iamkun)

### 2.7.1

*2019-04-03*

#### 修复

- Select
  - 清空时设置 value 为 null (#14322 by @aaronfulkerson)
- Input
  - 当类型改变时更新 DOM (#14889 by @wacky6)
- Table
  - 修复当有展开列时 `defaultExpandAll` 的行为 (#14935 by @ziyoung)
- Dialog
  - 可以设置背景色 (#14939 by @ziyoung)
- Form
  - `label-width` 支持自动宽度 (#14944 by @ziyoung)

#### 优化
- Docs
  - 更新西班牙语文档 (#14913 by @Gonzalo2310)
  - 新增组件自动生成法语文档 (#14924 by @ziyoung)
  - 更新 Tabs 文档 (#14938 by @ziyoung)

### 2.7.0

*2019-03-28*

#### 新特性

- Table
  - 增加对树形结构数据的支持 (#14632 by @ziyoung)

#### 修复

- Tabs
  - 阴影样式使用全局主颜色 (#14558 by @Richard-Choooou)
  - 当 label 改变时触发更新 (#14496 by @akki-jat)
- Table
  - Table footer 与 body 的对齐一致 (#14730 by @ziyoung)
- NavMenu
  - 修复点击 el-submenu 多次触发 childMenu 问题 (#14443 by @PanJiaChen)
- Dropdown
  - 兼容 Vue 2.6 新 v-slot 语法 (#14832 by @ziyoung)
- ColorPicker
  - 修复十六进制颜色字符串解析问题 (#14793 by @iamkun)
- Tree
  - 恢复 pr #13349 (#14847 by @ziyoung)
- Tooltip
  - 当初始值为 true 时默认显示 (#14826 by @ziyoung)
- Docs
  - 更新 Cascader 文档 (#14442 by @panhezeng)
- Style
  - 修复媒体查询 sm-only, md-only, lg-only 问题 (#14611 by @sinchang)

#### 优化

- Chore
  - 增加网页描述信息 (#14802 by @iamkun)

### 2.6.3

*2019-03-21*

#### 修复

- 修复 Cascader 文档页的样式 (#14789 by @ziyoung)
- 移除 Cascader 中多余的 DOM 操作 (#14788 by @ziyoung)
- DateRange 支持夏令时 (#14562 by @wacky6)

### 2.6.2

*2019-03-21*

#### 新特性

- DatePicker
  - 支持 monthrange 类型 (#14487 by @zxyRealm)
- i18n
  - 添加 Croatian 语言包 (#14360 by @danijelh)
- Docs
  - 更新 2.6.1 法语文档，修复笔误 (#14555 by @smalesys)
  - 更新法语翻译 (#14643 by @smalesys)

#### 修复

- Input
  - Fix regression (#14572 by @wacky6)
- DatePicker
  - 修复 first-day-of-week 的计算 (#14523 by @sinchang)
  - 修复 WeekPicker value-format 的问题 (#13754 by @wacky6)
- Steps
  - 修复 #14502 (#14596 by @sinchang)
  - 修复简单模式下的样式 (#14610 by @sinchang)
- Docs
  - 重命名 Table 文档中的变量 (#14587 by @likwotsing)
  - 添加法语文档索引 (#14565 by @iamkun)
  - 修复 TimePicker 文档页的样式 (#14579 by @ziyoung)
  - 重命名 Upload 文档中的变量 (#14593 by @liupl)
  - 在 Form 文档中 添加的 async-validator 文档 (#14694 by @iamkun)
  - 修复 Tooltip 文档的 bug (#14748 by @iamkun)
  - 修复笔误 (#14751 by @2bj)
  - 修复 Switch 在移动端 Webkit 浏览器的高亮问题 (#14703 by @VladG0r)

#### 优化

- Chore:
  - 更新 ci 构建脚本 (#14600 by @ziyoung)
  - 更新谷歌统计 (#14560 by @iamkun)
  - 添加更多谷歌统计事件 (#14633 by @iamkun)
  - 更新聊天组信息 (#14741 by @iamkun)
  - 升级测试依赖 (#14735 by @wacky6)
  - 升级 gulp (#14745 by @ziyoung)
  - 使用 codepen 显示 demo，修复文档中的错误 (#14747 by @ziyoung)

### 2.6.1

*2019-03-03*

#### 修复

- **不再指定 node 版本** (by @iamkun in #14546)
- 调整 `deloy-faas.sh` 中的文档目录 (by @ziyoung in #14553)
- 调整 2.6.0 中 changelog 日期样式 (by @island205 in #14547)
- 修复拼写错误 (by @wack6 in #14552)

### 2.6.0

*2019-03-01*

#### 新特性
- Timeline
  - 添加 Timeline 组件 (by @jikkai in #14248)
- DropdownItem
  - `el-dropdown-item` 支持添加 icon (by @gabrielboliveira in #14088)
- Input
  - 添加 `show-password` 属性，支持配置显示密码按钮 (by @phshy0607 in #13966)
- Select
  - 添加 slot `empty` (by @elfman in #13785)
- Autocomplete
  - 添加 `highlight-first-item` 属性，控制是否默认突出显示远程搜索建议中的第一项 (by @YamenSharaf in #14269)
- I18n
  - 添加亚美尼亚语支持 (by @hamletbarsamyan in #14214)
- Docs
  - 新增法语文档 (by @smalesys in #12153, #14418, #14434)

#### 优化
- Alert
  - 组件对通过 slot 传入的 description 也应用默认样式类 (by @iamkun in #14488)
- InputNumber
  -移除多余的 `parseFloat` (by @JuniorTour in #14172)
- Menu
  - 支持 `el-menu-item` 不添加 index (by @georgyfarniev in #13298)
- Table
  - 移除无用的 DOM 操作 (by @elfman in #13643)
- Upload
  - 代码优化 (by @elfman in #13973)
- Popup
  - 移除无用代码 (by @KAionro in #14413)
- Docs
  - 添加更多文档说明如何贡献代码 (by @island205 in #14355)
  - 添加 `el-input` 是受控组件的警示 (by @wacky6 in #14463)
  - 优化 Table 的文档 (by @luguokong in #14329)
  - 更新 Input 文档 (by @iamkun in #14437)
  - 优化自定义主题文档 (by @wangguohao in #14297)
  - 为 Icon 文档添加 hover 效果 (by @tuxinghuan in #14295)
- Build
  - 压缩 Element 文档站的 JS 和 CSS 文件 (by @iamkun in #14430)
  - 优化 Webpack 打包速度，从6分钟优化到1分多 (by @hetech in #14484)
  - 添加 CLI 工具，选择版本号 (by @hetech in #14354)
- 使用 Stale 来管理过时（暂定1年）的 Issue 和 PR (by @island205 in #14392)

#### 问题修复
- Menu
  - 修复浏览器标签切换引起的 focus 问题 (by @liupl in #13976)
- MessageBox
  - 修复 TS 定义 (by @NateScarlet in #14278)
- ScrollBar
  - 修复点击鼠标右键导致拖动的问题 (by @xifeiwu in #14196)
- Switch
  - 添加 `validate-event` 属性，设置改变 Switch 状态时是否触发表单的校验 (by @hetech in #14426)
- Table
  - 修复多 Table 实例共享 `toggleAllSelection` 方法，造成无法切换问题 (by @letanure in #14075)
- Tabs & Dropdown
  - 修复样式问题 (by @hetech in #14452)
- Tree
  - 与 Table 统一占位文样式 (by @ColinCll in #14331)
- Docs
  - 修复 DatetimePicker 文档问题 (by @iamkun in #14290)
  - 修复 DatePicker 文档拼写问题 (by @helmut in #14481)
  - 修复分页组件文档样式问题 (by @liuchuzhang in #14451)

#### 非兼容性更新
- Table
  - 修复 row 事件的参数顺序 (by @jikkai in #12086)

### 2.5.4

*2019-02-01*

#### 修复

- 构建: 修复 `.babelrc` 配置问题——导致 Tree 等组件没有动画 (by @island205 in #14282)

### 2.5.3

*2019-01-31*

#### 优化

- 优化 Message 的代码 (by @vok123 in #14029)
- 移除 gh-pages (by @ziyoung in #14266)
- 添加 IssueHunt 的链接 (by @island205 in #14261)

#### 修复

- 修复 UMD 包在服务器端运行出错的问题 (by @island205 in #14242)
- 修复 Tabbar 高亮时的样式 (by @iamkun in #14240)
- 修复 Table 示例代码的错误 (by @xunmeng in #14253)

### 2.5.2

*2019-01-27*

#### 优化
- 文档:
  - 2.5.1 版本西班牙语文档更新 (by @Gonzalo2310 in #14231)

#### 修复
- 构建:
  - 删除 umd 模块 `lib/index.js` 中本没有的注释 (by @island205 in #14233)
  - 修复 nuxt.js 中关于 `export` 关键字的报错 (by @island205 in #14232)
  - 修复发布 2.5.1 过程中的错误 (by @iamkun in #14228)

### 2.5.1

*2019-01-26*

#### 优化
- DatePicker：添加月、年高亮的样式（by @Debiancc in #14211）
- 更新 2.5.0 changelog （by @wacky6 in #14217）


#### 修复
- 修复升级 Webpack 4 产生的问题，无法具名 `import` 组件，`ELEMENT.locale()` 调用报错。（by @island205 in #14220）
- 恢复 2.4.11 文档 (by @iamkun in #14222)


### 2.5.0

*2019-01-25*

#### 新特性
- DatePicker
  - 新增 `validate-event` 属性 (by @ziyoung in #13531)
- DateTimePicker
  - `pickerOptions` 支持 `selectableRange` 选项 (by @eeeeeeeason)
- Tag
  - 新增 `click` 事件 (by @licdream in #14106)
- I18n
  - 新增 柯尔克孜语 (Kyrgyz) (by @zzjframework in #14174)

#### 优化
- 升级到 webpack@4 (by @jikkai in #14173)
- Input
  - 简化内部实现，遵循单向数据流；修复若干相关 Bug (by @wacky6 in #13471)
- 更新 Axure 文件，增加新组件 (by @ziyoung in #13773)

#### 修复
- Autocomplete
  - 修正下拉框最后一行显示不完整的问题 (by @ziyoung in #13597)
  - 修正下拉框箭头 (by @liuchuzhang in #13762)
- Carousel
  - 组件销毁时释放内部 Timer (by @elfman in #13820)
- Cascader
  - 移除已废弃的计算属性的 cache 属性 (by @iamkun in #13737)
  - 修正 TypeScript 中 CascaderOption 类型定义 (by @NateScarlet in #13613)
  - 修正图标覆盖文字的问题 (by @ziyoung in #13596)
- Checkbox
  - 改进显示样式 (by @PanJiaChen)
- DatePicker
  - 修正 TimeSpinner 中缺失的 v-for `key` 属性 (by @Ende93 in #13547)
  - 修正周选择器在跨年时的高亮行为 (by @suyi91 in #13883)
- Input
  - 修复 textarea 时的 DOM 节点引用 (by @laomu1988 @island205 in #13803)
- Pagination
  - 输入框的值不会小于 1 (by @elfman in #13727)
- Popover
  - 修正 hover 的触发行为 (by @goldengecko in #13104)
  - 修正弹出框的内存泄漏 (by @qpxtWhite in #13988)
- Radio
  - 改进显示样式 (by @ohhoney1)
- Table
  - 改进点击排序箭头时的行为 (by @ohhoney1 in #12890)
  - 修正 IE10+ 中 “暂无数据” 提示的垂直布局 (by @imzjy in #13638)
  - 修正文档中 `index` 的类型说明 (by @ilovefafa in #13628)
  - 修正多级表头使用 `fixed` 属性时，表尾合计行的显示样式 (by @luckyCao in #13914)
- Tabs
  - 修正自动滚动 (by @iamkun in #13696)
  - 通过面板名称查找面板 (by @iamkun in #13705)
  - 使用 `paneName` 计算面板样式 (by @iamkun in #13733)
- Tree
  - 修正 `showCheckbox` 不能影响子节点的问题 (by @KidneyFlower)
  - 更新文档和 TypeScript 定义 (by @ziyoung in #13540)
- Upload
  - `list-type` 改变时，保留 `url` 属性 (by @elfman in #13771)
- Slider
  - 修正源代码缩进 (by @wacky6 in #13955)
- I18n
  - 补充加泰罗尼亚语 (Catalan) 翻译 (by @jaumesala)
  - 补充俄语 (Russian) 翻译 (by @justlp in #13658)
  - 补充芬兰语 (Finnish) 翻译 (by @jenkrisu in #14137)
- Doc
  - 更新西班牙语文档至 2.4.11 (by @Gonzalo2310 in #13522)
- 其它
  - 移除多余的构建脚本 (by @ziyoung)
  - 修正文档超链接 (by @iamkun in #13753)
  - 修正文档中不一致的大小写 (by @wonderjar)
  - 增加钉钉群的二维码 (by @iamkun in #13957)
  - .gitignore 增加 yarn 日志文件 (by @mimimi in #13922)
  - 移除赞助商 多态 (by @island205 in #14156)
  - Update readme qr code src (by @iamkun in #13960)
  - 更新 CDN 链接，修正错别字 (by @ziyoung)

### 2.4.11

*2018-11-21*

- 撤销 pr #13296，修复点击 Menu 外部导致 Submenu 收起的问题，#13478
- 调整小屏幕（xs）媒体查询断点，#13468 （by @alekoshen712）

### 2.4.10

*2018-11-16*

- 修复多次点击 Select 才显示下拉列表的问题，#13268
- Form 禁用时不显示 Input 的 clear 图标，#13208
- 调整 Select，Progress，Autocomplete，Tooltip，Collaspe，TimePicker 的样式，#13188 (by @porcelainHeart) #13210 #13266 #13257 #13290 #13347 (by @PanJiaChen)
- Carousel 组件新增 `loop` 属性，#13217
- Table 的 data 改变时，高亮行会继续保留，#13200
- Table 的 header slot 可以接收参数，#13263
- Table 的 `clearFilter` 方法支持参数，#13176
- Table 单元格内没有内容时不再创建 Tooltip，#13152 (by @rongxingsun)
- ColorPicker 面板的输入框内容可以正常显示了，#13278
- 在拖拽时，ColorPicker 不再触发表单校验，#13299
- InputNumber 新增 `select` 方法，#13286 (by @st-sloth)
- Autocomplete 新增 `clear` 事件，#12171(by arthurdenner) #13326
- 可以通过点击 Menu 外部来关闭 Menu，#13296
- Form 的 `validateField` 方法可以接收参数，#13319
- Cascader 新增 `visible-change` 事件，#13415
- DatePicker 新增 range-separator slot， #13272 (by @milworm)
- Tree 新增 `iconClass` 与 `currentNodeKey` 属性，#13337 #13197 (by @isnifer)
- Progress 的 `status` 添加了 text #13198 (by @ali-master)
- 修复 Tree 的 `defaultCheckedKeys` 导致显示的错误，#13349 (by @dive2Pro)

### 2.4.9

*2018-10-26*

- Form 组件 clearValidate 方法参数支持字符串，#12990 （by @codinglobster）
- Badge 新增 type 属性，#12991
- 用户可以使用 scoped-slot 来自定义表头，#13012（by @ivanseidel）
- 修复 IE 下 Select 输入框不能输入的问题，#13034（by @GaliMU）
- Select 多选时，选项不换行，#12329 （by @akki-jat）
- Select 下拉列表展开后，箭头图标也可以正确显示，#12353（by @firesh）
- 修复 Select 的 size 属性不生效的问题，#13070
- 多选时可以清除 Select 已选中的值，#13049（by @ZSkycat）
- 修复最后一个 TabNav 不能删除的问题，#13039
- 修复 TabNav 中 label 显示不正确的问题，#13178
- Alert 新增 title slot，#13082（by @Kingwl）
- 修复 Table 中的 tooltip 内容不正确的问题，#13159（by @elfman）
- 优化 Upload 文件列表删除时的动画，#12987
- 当 InputNumber 控制按钮不显示时，调整了边距，#13052

### 2.4.8

- Switch 聚焦时不显示轮廓，#12771
- 修复 Dropdown 在 ButtonGroup 中样式问题，#12819 （by @bluejfox）
- Dialog 新增 opened 事件，#12828
- 修复 TabNav 显示顺序不正确的问题，#12846
- 修复 Tabs 没有滑动到选中 tab 的问题，#12948
- 修复 Tree 节点在拖拽时标识符不显示的问题，#12854
- Form 的 validate 事件参数中包含了校验的信息，#12860 （by @YamenSharaf）
- 修复 DatePicker 没有校验用户输入时间的合法性问题，#12898
- 修复 Table 表头的 `render-header`属性不生效的问题，#12914

### 2.4.7

*2018-09-14*

- 修复 DatePicker 未触发表单检验的问题，#12328，#12348
- 修复 DatePicker 多选时报错的问题，#12347
- 修复 DatePicker 选择时间时 spinner 位置不正确的问题，#12415 （by @rang-ali）
- 修复 Datepicker 输入框自动填充的问题，#12521 （by @abdallanayer）
- 修复 Cascader 中 Input 未高亮的问题，#12341
- 修复 Tabpane 顺序不正确的问题，#12346
- 修复 ColorPicker 取色光标位置不正确的问题，#12376 （by @cnwhy）
- 调整 Submenu 的样式，#12457
- 修复 Submenu 选中后没有高亮的问题，#12479
- 修复 Cascader 选择值不正确的问题，#12508 （by @huangjinqiang）
- 修复 Pagination 输入框值不正确的问题，#12525
- 调整 Pagination 触发事件的顺序，#12530
- 修复 Table 的 filter 不显示的问题，#12539
- 修复 Tree 无法删除节点的问题，#12684
- 修复 Select 在单选时 Input 高度变化的问题，#12719
- 修复 Form 在嵌套时 label 显示不正确的问题，#12748
- 新增 Input 的 autocomplete 属性，废弃 auto-complete 属性，#12514 （by @axetroy）
- 新增 Form 的 slot-scope 展示表单校验信息，#12715 （by @YamenSharaf）

### 2.4.6

*2018-08-09*

- 修复 Table 的 filter 初始值为空数组时不显示筛选图标的问题，#12165
- 修复 Menu 在更改 `collapse` 时不保存菜单激活状态的问题，#12178 (by @elfman)
- 修复 Cascader 未转义特殊字符的问题，#12248
- 修复禁用的 RadioButton 在点击时显示 box-shadow 的问题，#12262
- 修复 Select 初始值为 `undefined` 时方向键失效的问题，#12322
- 修复 Select 多选时输入的关键字消失的问题，#12304
- 修复 Select 多选时查询函数没有去抖的问题，#12181
- 修复 Dialog 在全屏显示时宽度不正确的问题，#12203
- 修复 Main 在 IE 下的显示不正确的问题，#12237
- 修复 Input 触发两次表单校验的问题，#12260
- 修复 Tree 在懒加载时添加节点导致节点消失的问题，#12256
- 修复 Tree 节点在拖拽后无法删除的问题，#12279
- 修复 Popover 在 InputNumber 聚焦时不显示的问题，#12284
- 添加 Autocomplete 的 popper-append-to-body 属性，#12241
- 添加 Pagination 的 `page-size` 属性 `sync` 修饰符的支持，#12281

### 2.4.5

*2018-07-26*

- 修复 Table 设置 `class-name` 对 `expand` 列不生效的问题，#12006
- 新增 Table 的 `toggleAllSelection` 方法，#12047
- 修复 Input 包含 Select 时，suffix 插槽位置显示不正确的问题，#12108
- 修复 Option 的 `line-height` 无法设置的问题，#12120
- 修复初始值为 `null` 的 TimeSelect 在执行 `resetField` 后无法再赋值的问题，#12010
- 修复 Tree 组件中不响应方向键以外 keydown 事件的问题，#12008
- 修复 Tree 在懒加载情况下选中父节点的问题，#12106
- Tree 的 `getCheckedNodes` 方法新增 `includeHalfChecked` 参数，#12014

### 2.4.4

*2018-07-13*

- 修复重置表单后触发 Select 组件校验问题，#11837
- 修复 Input 组件 `suffix` 与 `append` 共存时样式错乱问题，#11951
- 修复可清空的只读 Input 仍会显示清空图标的问题，#11967
- 修复 Tree 节点禁用时仍可以选中的问题，#11847
- 修复 Tree `default-checked-keys` 属性不生效的问题，#11971
- 修复 Tree 在过滤节点时下 `empty-text` 不显示的问题，#11971
- 修复 Table 的 `empty-text` 过长时的位置样式问题，#11965
- 修复 Table 的 `current-row-key` 设置为 `null` 时高亮行不清除的问题，#11866
- 修复当 `filters` 为空数组时显示过滤器下拉列表的问题，#11864
- 修复 Radio 的 label 不阻止事件冒泡的问题，#11912

### 2.4.3

*2018-07-03*

- 修复当自定义 Tree 节点高度时，`allow-drop` 不能正常工作的问题，#11797
- 现在 Form 的 `clearValidate` 方法支持传入参数，指定需要清空校验结果的 FormItem，#11821
- 新增 MessageBox 的 `distinguishCancelAndClose` 属性，#11831

### 2.4.2

*2018-06-26*

- 修复 Table 的 `class-name` 和 `label-class-name` 属性不支持动态更新的问题，#11626
- 修复 Table 在 `highlight-current-row` 为 `false` 时点击行也会触发高亮的问题，#11691 #11563
- 修复 ButtonGroup 中只有一个 `round` 或 `circle` 的 Button 时的样式错误，#11605
- 修复在某些情况下 Pagination 的条目数选择器的样式错误，#11622
- 修复 Menu 的 `collapse` 属性变化后无法使用 `open` 方法的问题，#11646
- Tabs 的 `before-leave` 钩子添加了 `activeName` 和 `oldActiveName` 参数，#11713
- 修复 Cascader 关闭后的聚焦问题，#11588
- 修复 Cascader 在 `change-on-select` 状态下点击选项不关闭的问题，#11623
- 现在通过代码改变 Select 的值后会触发表单校验，与 Input 行为一致，#11672

### 2.4.1

*2018-06-08*

- 移除 Autocomplete 的重复类型声明，#11388
- 修复嵌套在 Form 内的 Select 在 FireFox 浏览器中下拉箭头错位的问题，#11427
- 修复 Select 的初始值为 `null` 时仍然显示清除图标的问题，#11460
- 修复禁用的 Radio 在点击时显示 box-shadow 的问题，#11462
- 新增 MessageBox 的 `iconClass` 属性，#11499
- 新增 Tabs 的 `stretch` 属性，#11476
- 修复 Tabs 开启 `lazy` 时渲染顺序异常的问题，#11461
- 修复 Table 展开行时无法保留选中行样式的问题，#11464
- 修复 Tabs 调用 `before-leave` 并返回 Promise 的时候，Tabs 会存在 focus 状态的问题，#11386
- 修复 Popover 禁用状态下创建弹出框的问题，#11426
- 修复 Tree 在懒加载状态下添加新节点造成无限循环的问题，#11430 （by @wangjingf）
- 新增 Dialog 的 `closed` 事件，#11490

### 2.4.0 Fullerene

*2018-05-28*

#### 新特性
- 综合
  - 使用原生 webpack 作为构建和打包工具，#11216
  - 可以全局配置弹出层的初始 z-index，#11257
- Autocomplete
  - 新增 `hide-loading` 属性，#11260
- Button
  - 现在圆形按钮也支持通过 `size` 属性改变其尺寸了，#11275
- InputNumber
  - 新增 `precision` 属性，#11281
- Tabs
  - 新增 `before-leave` 钩子，#11259
  - 新增 `lazy` 属性，#11167（by @Kingwl）
- Table
  - 新增 `sort` 方法，支持手动排序，#11311

#### 修复
- Input
  - 修复使用中文输入法快速输入文字时会导致视图重新渲染的问题，#11235（by @STLighter）
- Popover
  - 修复当触发元素为 Radio 或 Checkbox 时控制台报错的问题，#11265
- Breadcrumb
  - 修复 `to` 属性不支持动态更新的问题，#11286
- Upload
  - 修复在 `beforeUpload` 方法返回的 Promise 中 resolve 一个 File 时控制台报错的问题，#11297（by @qusiba）
- Tooltip
  - 修复内容为空时箭头错位的问题，#11335
- Autocomplete
  - 修复在快速删除搜索内容后输入建议不正确的问题，#11323
- ColorPicker
  - 修复关闭选色器时触发 `active-change` 事件的问题，#11304
- Table
  - 修复筛选列表过长导致样式超出的问题，#11314
  - 修复排序后导致无法正常显示选中行样式的问题，#11348
- Checkbox
  - 修复单个 Checkbox 不支持表单验证的问题，#11271
- Radio
  - 修复通过空格可以选中被禁用的 Radio 的问题，#11303
- MessageBox
  - 修复连续打开两个 MessageBox 时 `el-popup-parent--hidden` 无法移除的问题，#11371

### 2.3.9

*2018-05-18*

- 修复当 TableColumn 的 `prop` 属性指定的字段在数据源中不存在时，鼠标移入该列单元格会报错的问题，#11137
- 弹出类组件的 `lockScroll` 属性不再为父元素添加内联样式，而是添加相应类名，#11114
- 修复 Progress 在 `status` 为 exception 时图标不显示的问题，#11172
- 修复可搜索的 Cascader 在输入关键词后，选项的 `disabled` 属性失效的问题，#11185
- 修复可展开的 Table 在展开某一行后更新数据源会造成该行无法收起的问题，#11186
- Tree 的 `setCurrentKey` 方法支持传入 `null`，可取消当前高亮的节点，#11205

### 2.3.8

*2018-05-11*

- 修复 `type` 为 dates 的 DatePicker 在选择非当前月的日期后，面板会跳转至当前月的问题，#10973
- 修复可清空的只读 Input 仍会显示清空图标的问题，#10912
- 修复范围选择的 DatePicker 在未改变值的情况下关闭下拉面板仍会触发 `change` 事件的问题，#11017
- 修复 Select 在有分组选项时不能正确通过键盘导航的问题，#11058
- 新增 Select 的 `prefix` 具名 slot，#11063
- 新增 FormItem 的 `clearValidate` 方法，#11076
- 新增 Tree 的 `checkOnClickNode` 属性，#11111

### 2.3.7

*2018-04-29*

- 修复 Table 在由于筛选而使原有的滚动条消失后表头各列宽度未及时更新的问题，#10834
- 修复可清空的 Input 在初始值为 `null` 时仍然显示清空图标的问题，#10912
- 修复在通过代码改变 ColorPicker 的绑定值后错误地触发 `active-change` 事件的问题，#10903（by @zhangbobell）
- 修复可搜索的 Select 在备选项均被禁用时，通过键盘导航会造成无限循环的问题，#10945

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
