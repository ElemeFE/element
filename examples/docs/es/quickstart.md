## Inicio rápido

Esta sección te guía en el proceso de usar Element con webpack en un proyecto.

### Usa la plantilla de Kit de inicio

Proveemos una plantilla general [project template](https://github.com/ElementUI/element-starter). Para los usuarios de Laravel, también tenemos [template](https://github.com/ElementUI/element-in-laravel-starter). Puedes descargarlas y agregarlas directamente también.

Si prefiere no utilizarlas, lee las siguientes secciones de este documento.

### Usando vue-cli

Podemos empezar un proyecto utilizando [vue-cli](https://github.com/vuejs/vue-cli):

```shell
> npm i -g vue-cli
> mkdir my-project && cd my-project
> vue init webpack
> npm i && npm i element-ui
```

### Importando Element

Puede importar Element completamente o solamente importar lo que necesite. Comencemos importando todo.

#### Importando todo

In main.js:
```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
El código anterior importa Element completamente. Nótese que el archivo CSS necesita ser incluido por separado.

#### En demanda

Con la ayuda de [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.

Primero, instale babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Luego edite .babelrc:
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]
}
```

Luego, si necesita Button y Select, edite main.js:

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

Ejemplo completo (Referencia completa de componentes [components.json](https://github.com/ElemeFE/element/blob/master/components.json))

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
  CheckboxButton,
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
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
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
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
```

### Configuración global
Cuando importa Element, puede definir un objeto global de configuración. Por ahora este elemento solo contiene una propiedad: `size`, que define el tamaño por defecto de todos los componentes:

Importando Element completamente：
```JS
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })
```

Importando Element parcialmente：
```JS
import Vue from 'vue'
import { Button } from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Button)
```
Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo `size` será `small`.

### Empiece ya!
Ahora ha incorporado Vue y Element a su proyecto y es el momento para comenzar a programar. Inicie el modo de desarrollo:

```bash
npm run dev
```

Build:

```bash
npm run build
```
Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.