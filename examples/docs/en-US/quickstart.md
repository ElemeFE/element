## Quick start

This part walks you through the process of using Element in a webpack project.

### Use Starter Kit

We provide a general [project template](https://github.com/ElementUI/element-starter) for you. For those who are familiar with [cooking](https://github.com/ElementUI/element-cooking-starter) or [Laravel](https://github.com/ElementUI/element-in-laravel-starter), we also provide corresponding templates, and you can download and use them as well.

If you prefer not to use them, please read the following.

### Config files

Create a new project, and its structure should be
```text
|- src/  --------------------- source code
    |- App.vue
    |- main.js  -------------- entry
|- .babelrc  ----------------- babel config
|- index.html  --------------- HTML template
|- package.json  ------------- npm config
|- README.md  ---------------- readme
|- webpack.config.js  -------- webpack config
```

Typical configurations for these config files are:

**.babelrc**
```json
{
  "presets": ["vue-app"]
}
```

<br>

**package.json**
```json
{
  "name": "element-starter",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --port 8086",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "dependencies": {
    "element-ui": "^1.0.0",
    "vue": "^2.1.6"
  },
  "devDependencies": {
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-preset-vue-app": "^1.2.0",
    "cross-env": "^1.0.6",
    "css-loader": "^0.23.1",
    "file-loader": "^0.8.5",
    "style-loader": "^0.13.1",
    "vue-loader": "^9.8.0",
    "webpack": "beta",
    "webpack-dev-server": "beta"
  }
}
```

<br>

**webpack.config.js**
```javascript
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
```

### Import Element

You can import Element entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:
```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
The above imports Element entirely. Note that CSS file needs to be imported separately.

#### On demand

With the help of [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First, install babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Then edit .babelrc:
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```

Next, if you need Button and Select, edit main.js:

```javascript
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
/* or
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```

Full example (Component list reference [components.json](https://github.com/ElemeFE/element/blob/dev/components.json))

```javascript
import Vue from 'vue'
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Loading,
  MessageBox,
  Message
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(Scrollbar)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
```

### Start coding

Now you have implemented Vue and Element to your project, and it's time to write your code. Start development mode:

```bash
# visit localhost:8086
npm run dev
```

Build:

```bash
npm run build
```
Please refer to each component's documentation to learn how to use them.
