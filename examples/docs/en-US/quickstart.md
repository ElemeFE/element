## Quickstart

Element UI is a background components library that help you develop your background projects faster and easier.

### Install

```bash
$ npm install element-ui@next --save
```

### Register components

Import all element-ui components

```javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// use Vue.use to register a plugin
Vue.use(element)
```

Or just import some components you need
  
use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)


```javascript
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
And it will be converted to 

```javascript
import Select from 'element-ui/lib/select';
import 'element-ui/lib/theme-default/select.css';
import Button from 'element-ui/lib/button';
import 'element-ui/lib/theme-default/button.css';

Vue.component(Select.name, Select);
Vue.component(Button.name, Button);
```

### Use babel-plugin-component

Configure `.bablerc`

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

### Import components by \<style\> and \<script\> tags

Be careful, **import vue.js before element**, just like if you want to use a jquery-plugin, first of all, you must import jquery.

This is a [demo](https://codepen.io/QingWei-Li/pen/ozYpNA) about how to use it by cdn, and we use unpkg cdn in this case. 

```html
<!-- import style -->
<link rel="stylesheet" href="//unpkg.com/element-ui@1.0.0-rc.4/lib/theme-default/index.css">

<!-- body -->

<!--import script -->
<!-- you need import Vue.js before import element -->
<script src="//unpkg.com/vue@2.0.0-rc.6/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@1.0.0-rc.4/lib/index.js"></script>
```




