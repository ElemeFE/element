import Vue, { PluginObject } from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

import { ElAlert } from './alert'
import { ElAside } from './aside'
import { ElAutocomplete } from './autocomplete'
import { ElBadge } from './badge'
import { ElBreadcrumb } from './breadcrumb'
import { ElBreadcrumbItem } from './breadcrumb-item'
import { ElButton } from './button'
import { ElButtonGroup } from './button-group'
import { ElCard } from './card'
import { ElCarousel } from './carousel'
import { ElCarouselItem } from './carousel-item'
import { ElCascader } from './cascader'
import { ElCheckbox } from './checkbox'
import { ElCheckboxButton } from './checkbox-button'
import { ElCheckboxGroup } from './checkbox-group'
import { ElCol } from './col'
import { ElCollapse } from './collapse'
import { ElCollapseItem } from './collapse-item'
import { ElColorPicker } from './color-picker'
import { ElContainer } from './container'
import { ElDatePicker } from './date-picker'
import { ElDialog } from './dialog'
import { ElDropdown } from './dropdown'
import { ElDropdownItem } from './dropdown-item'
import { ElDropdownMenu } from './dropdown-menu'
import { ElFooter } from './footer'
import { ElForm } from './form'
import { ElFormItem } from './form-item'
import { ElHeader } from './header'
import { ElInput } from './input'
import { ElInputNumber } from './input-number'
import { ElLoading } from './loading'
import { ElMain } from './main'
import { ElMenu } from './menu'
import { ElMenuItem } from './menu-item'
import { ElMenuItemGroup } from './menu-item-group'
import { ElMessage } from './message'
import { ElMessageBox } from './message-box'
import { ElNotification } from './notification'
import { ElOption } from './option'
import { ElOptionGroup } from './option-group'
import { ElPagination } from './pagination'
import { ElPopover } from './popover'
import { ElProgress } from './progress'
import { ElRate } from './rate'
import { ElRadio } from './radio'
import { ElRadioButton } from './radio-button'
import { ElRadioGroup } from './radio-group'
import { ElRow } from './row'
import { ElSelect } from './select'
import { ElSlider } from './slider'
import { ElStep } from './step'
import { ElSteps } from './steps'
import { ElSubmenu } from './submenu'
import { ElSwitch } from './switch'
import { ElTable } from './table'
import { ElTableColumn } from './table-column'
import { ElTag } from './tag'
import { ElTabs } from './tabs'
import { ElTabPane } from './tab-pane'
import { ElTimeline } from './timeline'
import { ElTimelineItem } from './timeline-item'
import { ElTimePicker } from './time-picker'
import { ElTimeSelect } from './time-select'
import { ElTooltip } from './tooltip'
import { ElTransfer } from './transfer'
import { ElTree } from './tree'
import { ElUpload } from './upload'
import { ElLink } from './link'
import { ElDivider } from './divider'
import { ElIcon } from './icon'
import { ElCalendar } from './calendar'
import { ElImage } from './image'
import { ElBacktop } from './backtop'
import { ElInfiniteScroll } from './infiniteScroll'
import { ElPageHeader } from './page-header'
import { ElAvatar } from './avatar'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment

/** Show animation while loading data */
export const Loading: ElLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: ElMessage

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: ElMessageBox

/** Displays a global notification message at the upper right corner of the page */
export const Notification: ElNotification

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Alert extends ElAlert {}

/** Aside Component */
export class Aside extends ElAside {}

/** Autocomplete Component */
export class Autocomplete extends ElAutocomplete {}

/** Bagde Component */
export class Badge extends ElBadge {}

/** Breadcrumb Component */
export class Breadcrumb extends ElBreadcrumb {}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends ElBreadcrumbItem {}

/** Button Component */
export class Button extends ElButton {}

/** Button Group Component */
export class ButtonGroup extends ElButtonGroup {}

/** Card Component */
export class Card extends ElCard {}

/** Cascader Component */
export class Cascader extends ElCascader {}

/** Carousel Component */
export class Carousel extends ElCarousel {}

/** Carousel Item Component */
export class CarouselItem extends ElCarouselItem {}

/** Checkbox Component */
export class Checkbox extends ElCheckbox {}

/** Checkbox Button Component */
export class CheckboxButton extends ElCheckboxButton {}

/** Checkbox Group Component */
export class CheckboxGroup extends ElCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends ElCol {}

/** Collapse Component */
export class Collapse extends ElCollapse {}

/** Collapse Item Component */
export class CollapseItem extends ElCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends ElColorPicker {}

/** Container Component */
export class Container extends ElContainer {}

/** Date Picker Component */
export class DatePicker extends ElDatePicker {}

/** Dialog Component */
export class Dialog extends ElDialog {}

/** Dropdown Component */
export class Dropdown extends ElDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends ElDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends ElDropdownMenu {}

/** Footer Component */
export class Footer extends ElFooter {}

/** Form Component */
export class Form extends ElForm {}

/** Form Item Component */
export class FormItem extends ElFormItem {}

/** Header Component */
export class Header extends ElHeader {}

/** Input Component */
export class Input extends ElInput {}

/** Input Number Component */
export class InputNumber extends ElInputNumber {}

/** Main Component */
export class Main extends ElMain {}

/** Menu that provides navigation for your website */
export class Menu extends ElMenu {}

/** Menu Item Component */
export class MenuItem extends ElMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends ElMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends ElOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends ElOptionGroup {}

/** Pagination Component */
export class Pagination extends ElPagination {}

/** Popover Component */
export class Popover extends ElPopover {}

/** Progress Component */
export class Progress extends ElProgress {}

/** Rate Component */
export class Rate extends ElRate {}

/** Radio Component */
export class Radio extends ElRadio {}

/** Radio Button Component */
export class RadioButton extends ElRadioButton {}

/** Radio Group Component */
export class RadioGroup extends ElRadioGroup {}

/** Row Layout Component */
export class Row extends ElRow {}

/** Dropdown Select Component */
export class Select extends ElSelect {}

/** Slider Component */
export class Slider extends ElSlider {}

/** Step Component */
export class Step extends ElStep {}

/** Steps Component */
export class Steps extends ElSteps {}

/** Submenu Component */
export class Submenu extends ElSubmenu {}

/** Switch Component */
export class Switch extends ElSwitch {}

/** Table Component */
export class Table extends ElTable {}

/** Table Column Component */
export class TableColumn extends ElTableColumn {}

/** Tabs Component */
export class Tabs extends ElTabs {}

/** Tab Pane Component */
export class TabPane extends ElTabPane {}

/** Tag Component */
export class Tag extends ElTag {}

/** Timeline Component */
export class Timeline extends ElTimeline {}

/** Timeline Item Component */
export class TimelineItem extends ElTimelineItem {}

/** TimePicker Component */
export class TimePicker extends ElTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends ElTimeSelect {}

/** Tooltip Component */
export class Tooltip extends ElTooltip {}

/** Transfer Component */
export class Transfer extends ElTransfer {}

/** Tree Component */
export class Tree extends ElTree {}

/** Upload Component */
export class Upload extends ElUpload {}

/** Divider Component */
export class Divider extends ElDivider {}

/** Link Component */
export class Link extends ElLink {}

/** Image Component */
export class Image extends ElImage {}

/** Icon Component */
export class Icon extends ElIcon {}

/** Calendar Component */
export class Calendar extends ElCalendar {}

/** Backtop Component */
export class Backtop extends ElBacktop {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<ElInfiniteScroll>;

/** PageHeader Component */
export class PageHeader extends ElPageHeader {}

/** Avatar Component */
export class Avatar extends ElAvatar {}
