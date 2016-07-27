# Element
> UI Elements for admin page.

## Demo/Docs
https://element-component.github.io/element

## Usages
```shell
npm i element-ui -S
```

## Quick Start
use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

``` javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, ElSelect)
Vue.component(Button.name, Button)
```

(roughly) to

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element)

// or
import Select from 'element-ui/lib/select';
import Select from 'element-ui/lib/theme-default/select.css';
import Button from 'element-ui/lib/button';
import Button from 'element-ui/lib/theme-default/button.css';

Vue.component(Select.name, ElSelect)
Vue.component(Button.name, Button)
```

## babel-plugin-component
.babelrc
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

## LICENSE
MIT

