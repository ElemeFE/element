## 快速上手

Element UI 是一套 Vue.js 后台组件库，它能够帮助你更轻松更快速地开发后台项目。

### 安装

```bash
$ npm install element-ui@next -S
```

### 注册组件

引入整个 Element UI

```javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
```

或者只引入你需要的组件

**使用 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)**

```javascript
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

将会被翻译成

```javascript
import Select from 'element-ui/lib/select';
import 'element-ui/lib/theme-default/select.css';
import Button from 'element-ui/lib/button';
import 'element-ui/lib/theme-default/button.css';

Vue.component(Select.name, Select);
Vue.component(Button.name, Button);
```

### babel-plugin-component

配置 .babelrc

```json
{
  "plugins": ["xxx", ["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```


### 通过标签全局引入

这里用 unpkg cdn 做示范。请先引入 Vue 再引入组件，加载完成后会自动注册，参考 [示例](https://codepen.io/anon/pen/ozYpNA)。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="//unpkg.com/element-ui@1.0.0-rc.4/lib/theme-default/index.css">

<!-- body -->

<!-- 引入组件库 -->
<script src="//unpkg.com/vue@2.0.0-rc.6/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@1.0.0-rc.4/lib/index.js"></script>
```
