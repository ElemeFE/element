## Link 文字链接

文字超链接

### 基础用法
基础的文字链接用法。
:::demo
```html
<div>
  <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
  <el-link type="primary">主要链接</el-link>
  <el-link type="success">成功链接</el-link>
  <el-link type="warning">警告链接</el-link>
  <el-link type="danger">危险链接</el-link>
  <el-link type="info">信息链接</el-link>
  <el-link type="native">原生链接</el-link>
</div>
```
:::

### 路由跳转
使用 :to 参数指定跳转链接，见 router-link 的参数配置说明。
:::demo
```html
<div>
  <el-link to="/">跳转路由首页</el-link>
</div>
```
:::

### 禁用状态
文字链接不可用状态。
:::demo
```html
<div>
  <el-link disabled>默认链接</el-link>
  <el-link type="primary" disabled>主要链接</el-link>
  <el-link type="success" disabled>成功链接</el-link>
  <el-link type="warning" disabled>警告链接</el-link>
  <el-link type="danger" disabled>危险链接</el-link>
  <el-link type="info" disabled>信息链接</el-link>
  <el-link type="native" disabled>原生链接</el-link>
</div>
```
:::

### 下划线
文字链接下划线。
:::demo
```html
<div>
  <el-link :underline="false">无下划线</el-link>
  <el-link>有下划线</el-link>
</div>
```
:::

### 继承父级的字体大小
在与普通文本排在一行时有用，避免链接的字号与其他文字不一致
:::demo
```html
<div style="font-size: 12px">
  这是一个<el-link type="native" inherit-fs>链接</el-link>
</div>
```
:::

### 图标

带图标的文字链接可增强辨识度。
:::demo
```html
<div>
  <el-link icon="el-icon-edit">编辑</el-link>
  <el-link icon-right="el-icon-view">查看</el-link>
  <el-link icon="el-icon-eleme" />
</div>
```
:::

### Attributes

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| type           | 类型                      | string  | primary / success / warning / danger / info / native | default |
| underline      | 是否下划线                         | boolean | —                                 | true    |
| disabled       | 是否禁用状态                       | boolean | —                                 | false   |
| inherit-fs     | 是否继承父级的字号大小             | boolean | —                                 | false   |
| href           | 原生 href 属性                     | string  | —                                 | -       |
| to             | 跳转路由对象。注意如此参数非空会忽略 href 参数 | string / object | —             | -       |
| icon           | 图标类名                           | string  | —                                 | -       |
| icon-right     | 图标类名，追加到文字右边           | string  | —                                 | -       |
