import Vue, { VNodeDirective, PluginObject } from "vue";

/** Regex directive definition */
export interface ElRegexDirective extends VNodeDirective {
  name: "regex";
  value: [String, Object];
}

export interface ElRegex {
  /** Install Regex directive into Vue */
  install(vue: typeof Vue): void;

  directive: PluginObject<never>;
}
