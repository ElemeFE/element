import Vue from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

import { ElAutocomplete } from './autocomplete'
import { ElButton } from './button'
import { ElButtonGroup } from './button-group'
import { ElCascader } from './cascader'
import { ElCheckbox } from './checkbox'
import { ElCheckboxGroup } from './checkbox-group'
import { ElCol } from './col'
import { ElColorPicker } from './color-picker'
import { ElDatePicker } from './date-picker'
import { ElForm } from './form'
import { ElFormItem } from './form-item'
import { ElIcon } from './icon'
import { ElInput } from './input'
import { ElInputNumber } from './input-number'
import { ElOption } from './option'
import { ElOptionGroup } from './option-group'
import { ElPagination } from './pagination'
import { ElProgress } from './progress'
import { ElRate } from './rate'
import { ElRadio } from './radio'
import { ElRadioButton } from './radio-button'
import { ElRadioGroup } from './radio-group'
import { ElRow } from './row'
import { ElSelect } from './select'
import { ElSlider } from './slider'
import { ElSwitch } from './switch'
import { ElTable } from './table'
import { ElTableColumn } from './table-column'
import { ElTag } from './tag'
import { ElTimePicker } from './time-picker'
import { ElTooltip } from './tooltip'
import { ElTree } from './tree'
import { ElUpload } from './upload'

declare namespace ElementUI {
  export interface InstallationOptions {
    locale: any,
    i18n: any
  }

  /**
   * Install all element-ui components into Vue.
   * Please do not invoke this method directly.
   * Call `Vue.use(ElementUI)` to install.
   **/
  export function install (vue: typeof Vue, options: ElementUI.InstallationOptions)

  /** ElementUI component common definition */
  export type Component = ElementUIComponent

  /** Component size definition for button, input, etc */
  export type ComponentSize = ElementUIComponentSize

  /** Horizontal alignment */
  export type HorizontalAlignment = ElementUIHorizontalAlignment

  // TS cannot merge imported class with namespace, so declare subclasses instead

  /** Autocomplete Component */
  export class Autocomplete extends ElAutocomplete {}

  /** Button Component */
  export class Button extends ElButton {}

  /** Button Group Component */
  export class ButtonGroup extends ElButtonGroup {}

  /** Cascader Component */
  export class Cascader extends ElCascader {}

  /** Checkbox Component */
  export class Checkbox extends ElCheckbox {}

  /** Checkbox Group Component */
  export class CheckboxGroup extends ElCheckboxGroup {}

  /** Colunm Layout Component */
  export class Col extends ElCol {}

  /** Color Picker Component */
  export class ColorPicker extends ElColorPicker {}

  /** Date Picker Component */
  export class DatePicker extends ElDatePicker {}

  /** Form Component */
  export class Form extends ElForm {}

  /** Form Item Component */
  export class FormItem extends ElFormItem {}

  /** Icon Component */
  export class Icon extends ElIcon {}

  /** Input Component */
  export class Input extends ElInput {}

  /** Input Number Component */
  export class InputNumber extends ElInputNumber {}

  /** Dropdown Select Option Component */
  export class Option extends ElOption {}

  /** Dropdown Select Option Group Component */
  export class OptionGroup extends ElOptionGroup {}

  /** Pagination Component */
  export class Pagination extends ElPagination {}

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

  /** Switch Component */
  export class Switch extends ElSwitch {}

  /** Table Component */
  export class Table extends ElTable {}

  /** Table Column Component */
  export class TableColumn extends ElTableColumn {}

  /** Tag Component */
  export class Tag extends ElTag {}

  /** Time Picker and Time Select Component */
  export class TimePicker extends ElTimePicker {}

  /** Tooltip Component */
  export class Tooltip extends ElTooltip {}

  /** Tree Component */
  export class Tree extends ElTree {}

  /** Upload Component */
  export class Upload extends ElUpload {}
}

export = ElementUI
