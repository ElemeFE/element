/* Automatically generated by './build/bin/build-entry.js' */

import Pagination from '../packages/pagination/index.js';
import Dialog from '../packages/dialog/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import Dropdown from '../packages/dropdown/index.js';
import DropdownMenu from '../packages/dropdown-menu/index.js';
import DropdownItem from '../packages/dropdown-item/index.js';
import Menu from '../packages/menu/index.js';
import Submenu from '../packages/submenu/index.js';
import MenuItem from '../packages/menu-item/index.js';
import MenuItemGroup from '../packages/menu-item-group/index.js';
import Input from '../packages/input/index.js';
import InputNumber from '../packages/input-number/index.js';
import Radio from '../packages/radio/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import RadioButton from '../packages/radio-button/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxButton from '../packages/checkbox-button/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Select from '../packages/select/index.js';
import Option from '../packages/option/index.js';
import OptionGroup from '../packages/option-group/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Table from '../packages/table/index.js';
import TableColumn from '../packages/table-column/index.js';
import DatePicker from '../packages/date-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import TimePicker from '../packages/time-picker/index.js';
import Popover from '../packages/popover/index.js';
import Tooltip from '../packages/tooltip/index.js';
import MessageBox from '../packages/message-box/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import FormGroupItem from '../packages/form-group-item/index.js';
import Tabs from '../packages/tabs/index.js';
import TabPane from '../packages/tab-pane/index.js';
import Tag from '../packages/tag/index.js';
import Notification from '../packages/notification/index.js';
import Loading from '../packages/loading/index.js';
import Icon from '../packages/icon/index.js';
import Row from '../packages/row/index.js';
import Col from '../packages/col/index.js';
import Upload from '../packages/upload/index.js';
import Progress from '../packages/progress/index.js';
import Spinner from '../packages/spinner/index.js';
import Message from '../packages/message/index.js';
import Carousel from '../packages/carousel/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import CarouselItem from '../packages/carousel-item/index.js';
import Collapse from '../packages/collapse/index.js';
import CollapseItem from '../packages/collapse-item/index.js';
import Container from '../packages/container/index.js';
import Header from '../packages/header/index.js';
import Aside from '../packages/aside/index.js';
import Main from '../packages/main/index.js';
import Footer from '../packages/footer/index.js';
import Badge from '../packages/badge/index.js';
import TimeInfo from '../packages/time-info/index.js';
import EntityCounter from '../packages/entity-counter/index.js';
import PriceInfo from '../packages/price-info/index.js';
import Sidebar from '../packages/sidebar/index.js';
import NavBar from '../packages/nav-bar/index.js';
import Gallery from '../packages/gallery/index.js';
import Switch from '../packages/switch/index.js';
import ValueSwitcher from '../packages/value-switcher/index.js';
import DatePickerJoined from '../packages/date-picker-joined/index.js';
import CircularCountdown from '../packages/circular-countdown/index.js';
import AdvancedDatePicker from '../packages/advanced-date-picker/index.js';
import locale from 'tmconsulting-ui/src/locale';
import CollapseTransition from 'tmconsulting-ui/src/transitions/collapse-transition';
import VueTheMask from 'vue-the-mask';

import '../packages/theme-chalk/icons.js';
import 'svg-sprite-loader/runtime/sprite.build';

const components = [
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
  Form,
  FormItem,
  FormGroupItem,
  Tabs,
  TabPane,
  Tag,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Badge,
  TimeInfo,
  EntityCounter,
  PriceInfo,
  Sidebar,
  NavBar,
  Gallery,
  Switch,
  ValueSwitcher,
  DatePickerJoined,
  CircularCountdown,
  AdvancedDatePicker,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);
  Vue.use(VueTheMask);

  const ELEMENT = {};
  ELEMENT.size = opts.size || '';

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

  Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '1.3.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
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
  MessageBox,
  Form,
  FormItem,
  FormGroupItem,
  Tabs,
  TabPane,
  Tag,
  Notification,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Badge,
  TimeInfo,
  EntityCounter,
  PriceInfo,
  Sidebar,
  NavBar,
  Gallery,
  Switch,
  ValueSwitcher,
  DatePickerJoined,
  CircularCountdown,
  AdvancedDatePicker
};

module.exports.default = module.exports;
