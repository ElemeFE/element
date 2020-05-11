import { DirectiveOptions, PluginObject, VNodeDirective } from 'vue'

export interface ElInfiniteScrollDirective extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}

export type ElInfiniteScroll = PluginObject<ElInfiniteScrollDirective> & DirectiveOptions
