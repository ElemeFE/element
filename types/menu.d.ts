import { ElementUIComponent } from './component'

export type MenuDisplayMode = 'horizontal' | 'vertical'
export type MenuTheme = 'light' | 'dark'

/** Menu that provides navigation for your website */
export declare class ElMenu extends ElementUIComponent {
  /** Menu display mode */
  mode: MenuDisplayMode

  /** Whether the menu is collapsed (available only in vertical mode) */
  collapse: boolean

  /** Background color of Menu (hex format) */
  backgroundColor: string

  /** Text color of Menu (hex format) */
  textColor: string

  /** Text color of currently active menu item (hex format) */
  activeTextColor: string

  /** Index of currently active menu */
  defaultActive: string

  /** Array that contains keys of currently active sub-menus */
  defaultOpeneds: string[]

  /** Whether only one sub-menu can be active */
  uniqueOpened: boolean

  /** How sub-menus are triggered, only works when mode is 'horizontal' */
  menuTrigger: string

  /** Whether vue-router mode is activated. If true, index will be used as 'path' to activate the route action */
  router: boolean
}
