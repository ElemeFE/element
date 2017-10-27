import { ElementUIComponent } from './component'

export type CarouselIndicatorTrigger = 'hover' | 'click'
export type CarouselIndicatorPosition = 'outside' | 'none'
export type CarouselArrowVisibility = 'always' | 'hover' | 'never'
export type CarouselType = 'card'

/** Loop a series of images or texts in a limited space */
export declare class ElCarousel extends ElementUIComponent {
  /** Height of the carousel */
  height: number

  /** Index of the initially active slide (starting from 0) */
  initialIndex: number

  /** How indicators are triggered */
  trigger: CarouselIndicatorTrigger

  /** Whether automatically loop the slides */
  autoplay: boolean

  /** Interval of the auto loop, in milliseconds */
  interval: number

  /** Position of the indicators */
  indicatorPosition: CarouselIndicatorPosition

  /** When arrows are shown */
  arrow: CarouselArrowVisibility

  /** Type of the Carousel */
  type: CarouselType

  /**
   * Manually switch slide by index
   *
   * @param index Index of the slide to be switched to (starting from 0)
   */
  setActiveItem (index: number): void

  /**
   * Manually switch slide by carousel item's name
   *
   * @param name The name of the corresponding `el-carousel-item`
   */
  setActiveItem (name: string): void

  /** Switch to the previous slide */
  prev (): void

  /** Switch to the next slide */
  next (): void
}
