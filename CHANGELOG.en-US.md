## Changelog

### 2.0.0-rc.1

*2017-10-25*

#### New features
- Form
  - Added `clearValidate` method for clearing validating results for all form items, #7623
- MessageBox
  - Added `inputType` attribute to assign type for the inner input box, #7651
- Table
  - Added `size` attribute
  - Added `toggleRowExpansion` method to expand or collapse expandable rows programmatically
  - Added `cell-class-name` attribute to assign class name for cells
  - Added `cell-style` attribute to style cells
  - Added `header-row-class-name` attribute to assign class name for header rows
  - Added `header-row-style` attribute to style header rows
  - Added `header-cell-class-name` attribute to assign class name for header cells
  - Added `header-cell-style` attribute to style header cells
  - TableColumn's `prop` attribute now accepts `object[key]` notations
  - Added `index` attribute for TableColumn to customize row indices

#### Fixes
- Table
  - Fixed a dynamic `max-height` bug
  - Fixed some style calculation errors

#### Breaking changes
- Autocomplete
  - Removed `props` attribute. Now you can use `value-key` attribute to designate key name of the input suggestion
object for display
- Table
  - `append` slot is moved outside the `tbody` element to avoid multiple rendering
  - `expand` event is renamed to `expand-change`
  - The params of `row-class-name` and `row-style` method is now an object

### 2.0.0-beta.1

*2017-10-20*

#### New features
- General
  - Added TypeScript typings
  - All existing icons are redesigned. Some new icons are added.
  - To help you migrate from Element 1.x, we added some console warnings against deprecated APIs. When you use a removed or renamed attribute or event in your project, you'll get a warning like this:
  ```
  [Element Migrating][ElSwitch][Attribute]: on-color is renamed to active-color.
  ```
  - Added a series of breakpoint-based utility classes that hide elements when the viewport size meets certain conditions
- Layout
  - Added a new breakpoint `xl` for viewport wider than 1920px
- Table
  - Added `span-method` attribute for merging cells
  - Added `clearSort` method to clear sorting programmatically
  - Added `clearFilter` method to clear filter programmatically
  - For expandable rows, when a row is expanded, a `.expanded` class will be added to its class list, so that you can customize its styles
- DatePicker
  - Added `unlink-panels` attribute to unlink the two date panels when selecting a date range
- Select
  - Added `reserve-keyword` attribute for reserving current search keyword after selecting an option

#### Fixes
- Table
  - Now `header-align` of TableColumn works properly
  - Fixed a bug that Table remains hiding when its parent element appears from `display: none`
  - Fixed Table expanding its width when its parent element has `display: flex`
  - Fixed a bug that fixed columns of a Table with `append` slot would disappear when data is dynamically fetched
  - Fixed `expand-row-keys` attribute not working with initial value
  - Fixed filter failing when `data` updates
  - Fixed a calculation error of fixed columns layout with grouped headers

#### Breaking changes
- Switch
  - Attributes starting with `on-*` will be parsed to events in JSX, making all `on-*` attributes of Switch not
able to work in JSX. So `on-*` attributes are renamed to `active-*`, and accordingly `off-*` attributes are renamed to `inactive-*`. This change affects the following attributes: `on-icon-class`, `off-icon-class`, `on-text`, `off-text`, `on-color`, `off-color`, `on-value`, `off-value`
- Table
  - `sort-method` now aligns with `Array.sort`. It should return a number instead of a boolean

### 2.0.0-alpha.3

*2017-10-16*

#### New features
- General
- Configure component sizes globally. Now when you import Element, you can add a global config object with a `size` prop to configure default sizes for all components. For fully import:
```JS
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })
```
For partial import:
```JS
import Vue from 'vue'
import { Button } from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Button)
```
With the above config, the default size of all components that have `size` attribute will be 'small'.
- Loading
- Now you can customize spinner icon and background color with `spinner` and `background` prop, #7390
- Autocomplete
- Added `debounce` attribute, #7413
- Upload
- Added `limit` and `on-exceed` attributes to limit the amount of files, #7405
- Menu
- Added `open` and `close` methods to open and close SubMenu programmatically, #7412
- DatePicker
- Added `value-format` attribute to customize the format of the binding value, #7367
- TimePicker
- Added `arrow-control` attribute to spin the time with arrows #7438
- DateTimePicker
- Added `time-arrow-control` attribute to activate `arrow-control` of the nesting TimePicker, #7438
- Form
- Form and Form-item now have a `size` attribute. Inner components will inherit this size if not specified on themselves, #7428
- `validate` method will now return a promise if the callback is omitted, #7405

#### Fixes
- Fixed the console warning `Injection "elFormItem" not found` of some components

#### Breaking changes
- The params of DatePicker's `change` event is now the binding value itself. Its format is controlled by `value-format`
- Input's `change` event now behaves like the native input element, which triggers only on blur or pressing enter. If you need to respond to user input in real time, you can use `input` event.
- Only compatible with Vue 2.5.2 and beyond

### 2.0.0-alpha.2

*2017-10-05*

- Updated the primary color of `theme-chalk`, #7351
- Fixed console error when using Dropdown, #7322
- Fixed console error when using Menu, #7321
- Added `popper-class` attribute for ColorPicker, #7351
- Now Button's `disabled` attribute works correctly, #7352

### 2.0.0-alpha.1

*2017-09-30*

#### New features
- General
- A new theme: `theme-chalk`
- Accessibility of the following components are improved: Alert, AutoComplete, Breadcrumb, Button, Checkbox, Collapse, Input, InputNumber, Menu, Progress, Radio, Rate, Slider, Switch, Upload
- Layout components: Container, Header, Aside, Main, Footer
- Button
- Added `round` attribute. It's used for round-cornered Buttons #6643
- TimeSelect
- Now can be navigated by `Up` and `Down`, and hitting `Enter` selects the time #6023
- TimePicker
- Now can be navigated by arrow keys, and hitting `Enter` selects the time #6050
- Added `start-placeholder` and `end-placeholder`. They're placeholders for the two input boxes in range mode #7169
- Tree
- Now child nodes don't render before the first expand #6257
- Added `check-descendants` attribute. It determines if child nodes are checked when checking their parent node
in `lazy` mode #6235
- Tag
- Added `size` attribute #7203
- Datepicker
- Now `timeFormat` can format the TimePicker when type is set to `datetimerange` #6052
- Added `start-placeholder` and `end-placeholder`. They're placeholders for the two input boxes in range mode #7169
- MessageBox
- Added `closeOnHashChange` attribute #6043
- Added `center` attribute so that the content can be centered #7029
- Added `roundButton` attribute to display round Buttons #7029
- Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6043
- Dialog
- Added `width`、`fullscreen`、`append-to-body` attributes. Now Dialog can be nested
- Added `center` attribute so that the content can be centered #7042
- Added `focus-after-closed`、`focus-after-open` to improve accessibility #6511
- ColorPicker
- Now you can type colors in the input box #6167
- Added `size` and `disabled` attributes #7026
- Message
- Now color of the icons can be overridden by CSS #6207
- Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6207
- Added `center` attribute so that the content can be centered #6875
- Notification
- Added `position` attribute to configure where Notification pops up #6231
- Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6231
- Added `showClose` attribute to hide the close button #6402
- Rate
- Added `show-score` attribute to determine if current score is displayed #6295
- Tabs
- Added `tab-position` attribute #6096
- Radio
- Improved accessibility #6101
- Added `border` and `size` attributes #6690
- Checkbox
- Added `border` and `size` attributes #6690
- Alert
- Added `center` attribute so that the content can be centered #6876
- Menu
- Added `background-color`, `text-color` and `active-text-color` attributes #7064
- Form
- Added `inline-message` attribute to determine if the validation message is displayed in inline style #7032
- Added `status-icon` attribute to display a feedback icon when validated #7032
- Input
- Added `suffix` and `prefix` named slots, `suffixIcon` and `prefixIcon` attributes to add contents inside the input box #7032
- Breadcrumb
- Added `separator-class` attribute to support icons as item separators #7203
- Steps
- Added `simple` attribute to activate simple-styled Steps #7274
- Pagination
- Added `prev-text` and `next-text` attributes to customize texts of prev page and next page #7005

#### Bug fixes
- DatePicker
- Fixed `v-model` returning the second day of the selected week in week mode #6038
- Fixed the first input being cleared in `daterange` type #6021
- DateTimePicker
- Fixed DateTimePicker and TimePicker affecting each other when picked #6090
- Fixed hour and second can be beyond limit when selecting time #6076
- TimePicker
- Fixed `v-model` not update correctly when blurred #6023
- Dialog
- Fixed texts having blurry edges when opening and closing nesting dropdowns #6088
- Select
- Improved performance. Now Vue dev-tool won't crash when a large number of Selects are destroyed #6151

#### Breaking changes
- General
- Removed `theme-default`
- `change` event of form components and `current-change` event of Pagination now only trigger on user interaction
- `size` attribute of Button and form components can no longer be set to `large`. Now they accept `medium`, `small` and `mini`
- To facilitate the use of third-party icons, `icon` attribute of Button and Steps, `prefix-icon` and `suffix-icon` attributes of Input now require a full class name
- Dialog
- Removed `size` attribute. Now the size of Dialog can be configured by `width` and `fullscreen`
- Now the visibility of Dialog cannot be controlled by `v-model`
- Rate
- `text-template` is renamed to `score-template`
- Dropdown
- `menu-align` is renamed to `placement`. Now it supports more positions
- Transfer
- `footer-format` is renamed to `format`
- Switch
- `on-text` and `off-text` attributes now don't have default values
- Tag
- `type` attribute now accepts `success`, `info`, `warning` and `danger`
- `close-transition` is renamed to `disable-transitions`
- Menu
- Removed `theme` attribute. The color of Menu can be configured using `background-color`, `text-color` and `active-text-color`
- Input
- Removed `icon` attribute. Now the suffix icon can be configured using `suffix-icon` attribute or `suffix` named slot
- Removed `on-icon-click` attribute and `click` event. Now to add click handler on icons, please use named slots
- Autocomplete
- Removed `icon` and `on-icon-click` attributes. Now the icons can be configured using `prefix` or `suffix` named slot
- Removed `custom-item` attribute. Now the template of input suggestions can be customized using `scoped slot`
- Table
- Removed support for customizing column template using `inline-template`
- Steps
- Removed `center` attribute
- Now the Steps will fill its parent container by default

##
<i><sup>*</sup> Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.</i>