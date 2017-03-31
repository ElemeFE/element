import { Route } from 'vue-router'
import { ElementUIComponent } from './component'

/** Menu Item Component */
export declare class ElMenuItem extends ElementUIComponent {
  /** Unique identification */
  index: string

  /** Vue Router object */
  route: Route

  /** Is menu item disabled */
  disabled: boolean
}
