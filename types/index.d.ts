import Vue from 'vue'
import { ElementUIComponent } from './component'

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

  // TS cannot merge imported class with namespace, so declare subclasses instead
  export class Col extends ElCol {}
  export class Icon extends ElIcon {}
  export class Row extends ElRow {}
}

export = ElementUI
