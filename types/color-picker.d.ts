import { ElementUIComponent } from './component'

export type ColorFormat = 'hsl' | 'hsv' | 'hex' | 'rgb'

/** ColorPicker Component */
export declare class ElColorPicker extends ElementUIComponent {
  /** Whether to display the alpha slider */
  showAlpha: boolean

  /** Color format of v-model */
  colorFormat: ColorFormat
}
