## クイックスタート

このパートでは、webpackプロジェクトでElementを用いた開発プロセスを説明します。

### vue-cli@3を使う

私達はvue-cli@3のために [Element plugin](https://github.com/ElementUI/vue-cli-plugin-element) 提供しており, 簡単に Elementベースのプロジェクトを構築出来ます。

### スターターキットを使う

私達は一般的なツール[project template](https://github.com/ElementUI/element-starter)を提供しています。 また、Laravelユーザーのために [template](https://github.com/ElementUI/element-in-laravel-starter) があります。 直接ダウンロードして使うことが出来ます。

これらのツールを使いたくない場合は、以下の記事を御覧ください。

### Elementをインポートする

Elementを完全にインポートすることも、必要なものだけをインポートすることもできます。完全なインポートから始めましょう。

#### 完全にインポートした場合

main.js:

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

上記のコードは完全にElementをインポートします。CSSファイルは個別にインポートする必要があることを注意してください。

#### オンデマンド

[babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) を用いて、 必要な分のコンポーネントをインポートし、プロジェクトをより小さくすることが出来ます。

はじめに、babel-plugin-componentをインストール:

```bash
npm install babel-plugin-component -D
```

つぎに .babelrc を編集します:

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

次に、ボタンとセレクトが必要な場合、main.jsを編集します:

```javascript
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* or
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

全ての例 (コンポーネントリストのリファレンスは [components.json](https://github.com/ElemeFE/element/blob/master/components.json) を御覧ください)

```javascript
import Vue from 'vue';
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
  Spinner,
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
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
```

### グローバルコンフィグ

Elenentをインポートする際、グローバルコンフィグオブジェクトを定義出来ます。現時点では2つのプロパティ: `size` と `zIndex` があります。 プロパティ `size` はすべてのコンポーネントのデフォルトサイズ、プロパティ `zIndex` はモーダルボックスの初期の z-index (デフォルト: 2000) を設定します。

Elementを完全にインポート：

```js
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
```

Elementを部分的にインポート：

```js
import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

上記の設定では、size属性を持つすべてのコンポーネントのデフォルトのサイズは `small`、モーダルボックスのデフォルト値 `z-index` は3000となります。

### コーディングを始めましょう

プロジェクトに Vue と Element を実装したので、いよいよコードを書く時が来ました。使用方法については、各コンポーネントのドキュメントを参照してください。

### Nuxt.jsを使う

[Nuxt.js](https://nuxtjs.org/) を使ってプロジェクトを立ち上げることも出来ます:

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
