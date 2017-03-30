import Vue from 'vue'
import { ElementUIComponent, ElementUIComponentSize } from './component'

import { ElAutocomplete } from './autocomplete'
import { ElButton } from './button'
import { ElButtonGroup } from './button-group'
import { ElCascader } from './cascader'
import { ElCheckbox } from './checkbox'
import { ElCheckboxGroup } from './checkbox-group'
import { ElCol } from './col'
import { ElIcon } from './icon'
import { ElInput } from './input'
import { ElInputNumber } from './input-number'
import { ElOption } from './option'
import { ElOptionGroup } from './option-group'
import { ElRadio } from './radio'
import { ElRadioButton } from './radio-button'
import { ElRadioGroup } from './radio-group'
import { ElRow } from './row'
import { ElSelect } from './select'
import { ElSlider } from './slider'
import { ElSwitch } from './switch'

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

  /** Row Layout Component */
  export class Row extends ElRow {}

  /** Radio Component */
  export class Radio extends ElRadio {}

  /** Radio Button Component */
  export class RadioButton extends ElRadioButton {}

  /** Radio Group Component */
  export class RadioGroup extends ElRadioGroup {}

  /** Dropdown Select Component */
  export class Select extends ElSelect {}

  /** Slider Component */
  export class Slider extends ElSlider {}

  /** Switch Component */
  export class Switch extends ElSwitch {}
}

export = ElementUI
