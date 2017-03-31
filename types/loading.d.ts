import Vue, { VNodeDirective } from 'vue'

/** Options used in Loading service */
export interface LoadingServiceOptions {
  /** The DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node */
  target: HTMLElement | string

  /** Whether to make the mask append to the body element */
  body?: boolean

  /** Whether to show the loading mask in fullscreen */
  fullscreen?: boolean

  /** Whether to disable scrolling on body */
  lock?: boolean

  /** Loading text that displays under the spinner */
  text?: string

  /** Custom class name for Loading */
  customClass?: string
}

/** Loading Component */
export declare class ElLoadingComponent extends Vue {
  /** Close the Loading instance */
  close ()
}

/** Loading directive definition */
export declare interface ElLoadingDirective extends VNodeDirective {
  name: 'loading',
  value: boolean,
  modifiers: {
    body: boolean,
    fullscreen: boolean
  }
}

/** Show animation while loading data */
export declare interface ElLoading {
  /** Install Loading directive into Vue */
  install (vue: typeof Vue)

  // TODO: add description
  service (options: LoadingServiceOptions): ElLoadingComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    // TODO: add description
    $loading (options: LoadingServiceOptions): ElLoadingComponent
  }
}
