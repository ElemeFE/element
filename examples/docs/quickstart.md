## 快速上手

element 是一套 Vue.js 后台组件库，它能够帮助你更轻松更快速地开发后台项目。

### 安装

```bash
$ npm install element-ui@next -S
```

### 注册组件

引入整个 element

```javascript
import Vue from 'vue'
import Element from 'element-ui'

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

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
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
