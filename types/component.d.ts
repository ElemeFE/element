import Vue from 'vue'

/** TmUI component common definition */
export declare class TmUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type TmUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type TmUIHorizontalAlignment = 'left' | 'center' | 'right'
