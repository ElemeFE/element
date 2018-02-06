import Vue from 'vue'
import { TmUIComponent, TmUIComponentSize, TmUIHorizontalAlignment } from './component'

import { TmAside} from './aside'
import { TmAutocomplete } from './autocomplete'
import { TmButton } from './button'
import { TmButtonGroup } from './button-group'
import { TmCarousel } from './carousel'
import { TmCarouselItem } from './carousel-item'
import { TmCheckbox } from './checkbox'
import { TmCheckboxGroup } from './checkbox-group'
import { TmCol } from './col'
import { TmCollapse } from './collapse'
import { TmCollapseItem } from './collapse-item'
import { TmContainer } from './container'
import { TmDatePicker } from './date-picker'
import { TmDialog } from './dialog'
import { TmDropdown } from './dropdown'
import { TmDropdownItem } from './dropdown-item'
import { TmDropdownMenu } from './dropdown-menu'
import { TmFooter } from './footer'
import { TmForm } from './form'
import { TmFormItem } from './form-item'
import { TmHeader } from './header'
import { TmInput } from './input'
import { TmInputNumber } from './input-number'
import { TmLoading } from './loading'
import { TmMain } from './main'
import { TmMenu } from './menu'
import { TmMenuItem } from './menu-item'
import { TmMenuItemGroup } from './menu-item-group'
import { TmMessage } from './message'
import { TmMessageBox } from './message-box'
import { TmNotification } from './notification'
import { TmOption } from './option'
import { TmOptionGroup } from './option-group'
import { TmPagination } from './pagination'
import { TmPopover } from './popover'
import { TmProgress } from './progress'
import { TmRadio } from './radio'
import { TmRadioButton } from './radio-button'
import { TmRadioGroup } from './radio-group'
import { TmRow } from './row'
import { TmSelect } from './select'
import { TmSubmenu } from './submenu'
import { TmTable } from './table'
import { TmTableColumn } from './table-column'
import { TmTag } from './tag'
import { TmTabs } from './tabs'
import { TmTabPane } from './tab-pane'
import { TmTimePicker } from './time-picker'
import { TmTimeSelect } from './time-select'
import { TmTooltip } from './tooltip'
import { TmUpload } from './upload'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of tm-ui */
export const version: string

/**
 * Install all tm-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(TmUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** TmUI component common definition */
export type Component = TmUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = TmUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = TmUIHorizontalAlignment

/** Show animation while loading data */
export const Loading: TmLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: TmMessage

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: TmMessageBox

/** Displays a global notification message at the upper right corner of the page */
export const Notification: TmNotification

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Aside Component */
export class Aside extends TmAside {}

/** Autocomplete Component */
export class Autocomplete extends TmAutocomplete {}

/** Button Component */
export class Button extends TmButton {}

/** Button Group Component */
export class ButtonGroup extends TmButtonGroup {}

/** Carousel Component */
export class Carousel extends TmCarousel {}

/** Carousel Item Component */
export class CarouselItem extends TmCarouselItem {}

/** Checkbox Component */
export class Checkbox extends TmCheckbox {}

/** Checkbox Group Component */
export class CheckboxGroup extends TmCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends TmCol {}

/** Collapse Component */
export class Collapse extends TmCollapse {}

/** Collapse Item Component */
export class CollapseItem extends TmCollapseItem {}

/** Container Component */
export class Container extends TmContainer {}

/** Date Picker Component */
export class DatePicker extends TmDatePicker {}

/** Dialog Component */
export class Dialog extends TmDialog {}

/** Dropdown Component */
export class Dropdown extends TmDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends TmDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends TmDropdownMenu {}

/** Footer Component */
export class Footer extends TmFooter {}

/** Form Component */
export class Form extends TmForm {}

/** Form Item Component */
export class FormItem extends TmFormItem {}

/** Header Component */
export class Header extends TmHeader {}

/** Input Component */
export class Input extends TmInput {}

/** Input Number Component */
export class InputNumber extends TmInputNumber {}

/** Main Component */
export class Main extends TmMain {}

/** Menu that provides navigation for your website */
export class Menu extends TmMenu {}

/** Menu Item Component */
export class MenuItem extends TmMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends TmMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends TmOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends TmOptionGroup {}

/** Pagination Component */
export class Pagination extends TmPagination {}

/** Popover Component */
export class Popover extends TmPopover {}

/** Progress Component */
export class Progress extends TmProgress {}

/** Radio Component */
export class Radio extends TmRadio {}

/** Radio Button Component */
export class RadioButton extends TmRadioButton {}

/** Radio Group Component */
export class RadioGroup extends TmRadioGroup {}

/** Row Layout Component */
export class Row extends TmRow {}

/** Dropdown Select Component */
export class Select extends TmSelect {}

/** Submenu Component */
export class Submenu extends TmSubmenu {}

/** Table Component */
export class Table extends TmTable {}

/** Table Column Component */
export class TableColumn extends TmTableColumn {}

/** Tabs Component */
export class Tabs extends TmTabs {}

/** Tab Pane Component */
export class TabPane extends TmTabPane {}

/** Tag Component */
export class Tag extends TmTag {}

/** TimePicker Component */
export class TimePicker extends TmTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends TmTimeSelect {}

/** Tooltip Component */
export class Tooltip extends TmTooltip {}

/** Upload Component */
export class Upload extends TmUpload {}
