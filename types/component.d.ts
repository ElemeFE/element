import Vue from 'vue'

/** ElementUI component common definition */
export declare class ElementUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue)
}

/** Component size definition for button, input, etc */
export type ElementUIComponentSize = 'large' | 'small' | 'mini'

/** Horizontal alignment */
export type ElementUIHorizontalAlignment = 'left' | 'center' | 'right'
