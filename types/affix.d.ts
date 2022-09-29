import { ElementUIComponent } from './component'

/** Affix Component */
export declare class ElAffix extends ElementUIComponent {

  offsetTop?: number

  offsetBottom?: number

  target?: () => Window | HTMLElement | null

  targets?: () => Window[] | HTMLElement[] | null

  useCapture?: boolean

}
