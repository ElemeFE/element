### 运行开发环境即可查看demo
#### 接口类修改
1. tabs 组件可以自定义下划线的宽度 [demo](http://localhost:8080/#/zh-CN/component/tabs)

    Tabs Attributes

    参数 | 说明 | 类型 | 可选值 | 默认值
    ----|----|----|----|----
    active-bar-width | 激活条(下划线)的宽度 | number | -- | --

2. tabs 组件可以提示小红点  [demo](http://localhost:8080/#/zh-CN/component/tabs)

    Tab-pane Attributes

    参数 | 说明 | 类型 | 可选值 | 默认值
    ----|----|----|----|----
    has-notice | 是否显示提示（小红点） | boolean | -- | false

3. table checkbox 自动隐藏 [demo](http://localhost:8080/#/zh-CN/component/table)

    Table Attributes

    参数 | 说明 | 类型 | 可选值 | 默认值
    ----|----|----|----|----
    auto-checkbox | 多选模式下，设置为 true，正常显示 index，鼠标移到 index 上或有选中项， CheckBox 才展示出来  | boolean | -- | false


4. select 组件异步加载数据 loading 态 [demo](http://localhost:8080/#/zh-CN/component/select)

    Tab-pane Attributes

    参数 | 说明 | 类型 | 可选值 | 默认值
    ----|----|----|----|----
    loading-icon | 输入框右边显示一个转圈 | boolean | -- | false

5. InputNumber 组件支持小数位数限制[demo](http://localhost:8080/#/zh-CN/component/input-number)

    InpuNumber Attributes

    参数 | 说明 | 类型 | 可选值 | 默认值
    ----|----|----|----|----
    decimal | 小数位数限制 | number | — | null 


#### 优化类修改：
1. DatePicker清除按钮mouseenter位置改变
