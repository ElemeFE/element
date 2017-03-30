import Vue from 'vue'
import { ElementUIComponent, ElementUIComponentSize } from './component'

import { ElButton } from './button'
import { ElButtonGroup } from './button-group'
import { ElCol } from './col'
import { ElIcon } from './icon'
import { ElRow } from './row'

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

  /** Button Component */
  export class Button extends ElButton {}

  /** Button Group Component */
  export class ButtonGroup extends ElButtonGroup {}

  /** Colunm Layout Component */
  export class Col extends ElCol {}

  /** Icon Component */
  export class Icon extends ElIcon {}

  /** Row Layout Component */
  export class Row extends ElRow {}
}

export = ElementUI
