import { ElementUIComponent } from './component'

/** Horizontal alignment of flex layout */
export type HorizontalAlignment = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

/** vertical alignment of flex layout */
export type VertialAlignment = 'top' | 'middle' | 'bottom'

/** Row Layout Component */
export declare class ElRow extends ElementUIComponent {
  /** Grid spacing */
  gutter: number

  /** Layout mode. You can use flex. Works in modern browsers */
  type: string

  /** Horizontal alignment of flex layout */
  justify: HorizontalAlignment

  /** Vertical alignment of flex layout */
  align: VertialAlignment

  /** Custom element tag */
  tag: string
}
