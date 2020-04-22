import { ElementUIComponent } from './component'

/** Button type */
export type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

/** Link Component */
export declare class ElLink extends ElementUIComponent {
  /** Link type */
  type: LinkType

  /** Disable the link */
  disabled: boolean

  /** Link underline */
  underline: boolean

  /** Link icon, accepts an icon name of Element icon component */
  icon: string

  /** Link icon on the right of content */
  iconRight: string

  /** Link href */
  href: string

  /** Link target */
  target: string

  /** @see RouterLink.to */
  to: string | object
}
