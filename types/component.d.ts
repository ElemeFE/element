import Vue from 'vue'

/** ElementUI component common definition */
export declare class ElementUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue)
}

export type ElementUIComponentSize = 'large' | 'small' | 'mini'

export type TextAlignment = 'left' | 'center' | 'right'
