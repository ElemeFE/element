import { ElementUIComponent } from './component'
import { IconClickEventHandler } from './input'

export interface FetchSuggestionsCallback {
  /**
   * Callback function used in fetch-suggestions function
   *
   * @param data Suggestions to use
   */
  (data: any[]): void
}

export interface FetchSuggestions {
  /**
   * The function passed into the fetch-suggestions property
   *
   * @param queryString Current value of the text input
   * @param callback Callback function used to indicate that suggestions have completely fetched
   */
  (queryString: string, callback: FetchSuggestionsCallback): void
}

/** Autocomplete Component */
export declare class ElAutocomplete extends ElementUIComponent {
  /** The placeholder of Autocomplete */
  placeholder: string

  /** Whether Autocomplete is disabled */
  disabled: boolean

  /** Binding value */
  value: string

  /** Debounce delay when typing */
  debounce: number

  /** Name for the inner native input */
  name: string

  /** Key name of the input suggestion object for display */
  valueKey: string

  /** Whether to emit select event on enter when there is no autocomplete match */
  selectWhenUnmatched: boolean

  /** A method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete */
  fetchSuggestions: FetchSuggestions

  /** Custom class name for autocomplete's dropdown */
  popperClass: string

  /** Whether show suggestions when input focus */
  triggerOnFocus: boolean
}
