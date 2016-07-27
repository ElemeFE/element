<style>
  .demo-box.demo-alert .el-alert {
    margin: 20px 0 0;
  }
</style>

## 基本用法

<div class="demo-box demo-alert">
  <el-alert title="成功提示的文案" type="success"></el-alert>
  <el-alert title="消息提示的文案" type="info"></el-alert>
  <el-alert title="警告提示的文案" type="warning"></el-alert>
  <el-alert title="错误提示的文案" type="error"></el-alert>
</div>

```html
<el-alert title="成功提示的文案" type="success"></el-alert>
<el-alert title="消息提示的文案" type="info"></el-alert>
<el-alert title="警告提示的文案" type="warning"></el-alert>
<el-alert title="错误提示的文案" type="error"></el-alert>
```

## 自定义关闭按钮

<div class="demo-box demo-alert">
  <el-alert title="成功提示的文案" type="success" close-text="知道了"></el-alert>
</div>

```html
<el-alert title="成功提示的文案" type="success" close-text="知道了"></el-alert>
```

## 带有 icon

<div class="demo-box demo-alert">
  <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
  <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
  <el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
  <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
</div>

```html
<el-alert title="成功提示的文案" type="success" show-icon></el-alert>
<el-alert title="消息提示的文案" type="info" show-icon></el-alert>
<el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
<el-alert title="错误提示的文案" type="error" show-icon></el-alert>
```

## 带有辅助性文字介绍

<div class="demo-box demo-alert">
  <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明"></el-alert>
</div>

```html
<el-alert
  title="成功提示的文案"
  type="success"
  description="文字说明文字说明文字说明文字说明文字说明文字说明">
</el-alert>
```

## 带有 icon 和辅助性文字介绍

<div class="demo-box demo-alert">
  <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
  <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
  <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
  <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
</div>

```html
<el-alert
  title="成功提示的文案"
  type="success"
  description="文字说明文字说明文字说明文字说明文字说明文字说明"
  show-icon>
</el-alert>

<el-alert
  title="消息提示的文案"
  type="info"
  description="文字说明文字说明文字说明文字说明文字说明文字说明"
  show-icon>
</el-alert>

<el-alert
  title="警告提示的文案"
  type="warning"
  description="文字说明文字说明文字说明文字说明文字说明文字说明"
  show-icon>
</el-alert>

<el-alert
  title="错误提示的文案"
  type="error"
  description="文字说明文字说明文字说明文字说明文字说明文字说明"
  show-icon>
</el-alert>
```

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题, 必选参数 | string | | |
| type | 主题 | string | 'success', 'warning', 'info', 'error' | 'info' |
| description | 说明文字 | string | | |
| closable | 是否可关闭 | boolean | | true |
| closeText | 关闭按钮自定义文本 | string | | |
| showIcon | 是否显示图标 | boolean | | false |
| onClose | 关闭时的回调函数 | function | | |
