import Pagination from '@packages/pagination';
import Dialog from '@packages/dialog';
import Autocomplete from '@packages/autocomplete';
import Dropdown from '@packages/dropdown';
import DropdownMenu from '@packages/dropdown-menu';
import DropdownItem from '@packages/dropdown-item';
import Menu from '@packages/menu';
import Submenu from '@packages/submenu';
import MenuItem from '@packages/menu-item';
import MenuItemGroup from '@packages/menu-item-group';
import Input from '@packages/input';
import InputNumber from '@packages/input-number';
import Radio from '@packages/radio';
import RadioGroup from '@packages/radio-group';
import RadioButton from '@packages/radio-button';
import Checkbox from '@packages/checkbox';
import CheckboxButton from '@packages/checkbox-button';
import CheckboxGroup from '@packages/checkbox-group';
import Switch from '@packages/switch';
import Select from '@packages/select';
import Option from '@packages/option';
import OptionGroup from '@packages/option-group';
import Button from '@packages/button';
import ButtonGroup from '@packages/button-group';
import Table from '@packages/table';
import TableColumn from '@packages/table-column';
import DatePicker from '@packages/date-picker';
import TimeSelect from '@packages/time-select';
import TimePicker from '@packages/time-picker';
import Popover from '@packages/popover';
import Tooltip from '@packages/tooltip';
import MessageBox from '@packages/message-box';
import Breadcrumb from '@packages/breadcrumb';
import BreadcrumbItem from '@packages/breadcrumb-item';
import Form from '@packages/form';
import FormItem from '@packages/form-item';
import Tabs from '@packages/tabs';
import TabPane from '@packages/tab-pane';
import Tag from '@packages/tag';
import Tree from '@packages/tree';
import Alert from '@packages/alert';
import Notification from '@packages/notification';
import Slider from '@packages/slider';
import Loading from '@packages/loading';
import Icon from '@packages/icon';
import Row from '@packages/row';
import Col from '@packages/col';
import Upload from '@packages/upload';
import Progress from '@packages/progress';
import Spinner from '@packages/spinner';
import Message from '@packages/message';
import Badge from '@packages/badge';
import Card from '@packages/card';
import Rate from '@packages/rate';
import Steps from '@packages/steps';
import Step from '@packages/step';
import Carousel from '@packages/carousel';
import Scrollbar from '@packages/scrollbar';
import CarouselItem from '@packages/carousel-item';
import Collapse from '@packages/collapse';
import CollapseItem from '@packages/collapse-item';
import Cascader from '@packages/cascader';
import ColorPicker from '@packages/color-picker';
import Transfer from '@packages/transfer';
import Container from '@packages/container';
import Header from '@packages/header';
import Aside from '@packages/aside';
import Main from '@packages/main';
import Footer from '@packages/footer';
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

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
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  CollapseTransition
];

import '@packages/theme-chalk/src/index.scss'

export default ({
  Vue
}) => {
  components.forEach(component => {
    Vue.use(component);
  });
}