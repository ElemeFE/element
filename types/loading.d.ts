import Vue, { VNodeDirective, PluginObject } from 'vue'

/** Options used in Loading service */
export interface LoadingServiceOptions {
  /** The DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node */
  target?: HTMLElement | string

  /** Whether to make the mask append to the body element */
  body?: boolean

  /** Whether to show the loading mask in fullscreen */
  fullscreen?: boolean

  /** Whether to disable scrolling on body */
  lock?: boolean

  /** Loading text that displays under the spinner */
  text?: string

  /** Class name of the custom spinner */
  spinner?: string

  /** Background color of the mask */
  background?: string

  /** Custom class name for Loading */
  customClass?: string
}

/** Loading Component */
export declare class ElLoadingComponent extends Vue {
  /** Close the Loading instance */
  close (): void
}

/** Loading directive definition */
export interface ElLoadingDirective extends VNodeDirective {
  name: 'loading',
  value: boolean,
  modifiers: {
    body: boolean,
    fullscreen: boolean
  }
}

/** Show animation while loading data */
export interface ElLoading {
  /** Install Loading directive into Vue */
  install (vue: typeof Vue): void

  /** If you do not have a specific DOM node to attach the Loading directive, or if you simply prefer not to use Loading as a directive, you can call this service with some configs to open a Loading instance. */
  service (options: LoadingServiceOptions): ElLoadingComponent

  directive: PluginObject<never>
}

declare module 'vue/types/vue' {
  interface Vue {
    /** If you do not have a specific DOM node to attach the Loading directive, or if you simply prefer not to use Loading as a directive, you can call this service with some configs to open a Loading instance. */
    $loading (options: LoadingServiceOptions): ElLoadingComponent
  }
}
