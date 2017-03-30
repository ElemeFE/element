import Vue from 'vue'

declare namespace ElementUI {
  export interface InstallationOptions {
    locale: any,
    i18n: any
  }

  export function install (vue: typeof Vue, options: ElementUI.InstallationOptions)
}

export = ElementUI
