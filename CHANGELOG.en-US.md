## Changelog

### 2.0.8

*2017-12-12*

- Added Spanish documentation
- Fixed `show-timeout` of Dropdown not working when trigger is click, #8734 (by @presidenten)
- Fixed Form validation timing for rules whose trigger is blur, #8776
- Fixed blur event of ranged DatePicker, #8784
- `format` of TimePicker now supports AM/PM, #8620 (by @firesh)

### 2.0.7

*2017-11-29*

- Fixed disabled text button style, #8570

### 2.0.6

*2017-11-29*

- Fixed style bug of Table's sorting icons, #8405
- Fixed trigger mechanism for Popover when its `trigger` is manual, #8467
- Added `prefix-icon` and `suffix-icon` attributes for Autocomplete, #8446 (by @liyanlong)
- Added `separator` attribute for Cascader, #8501
- Added `clearable` attribute for Input, #8509 (by @lbogdan)
- Added `background` attribute for Pagination, #8553

### 2.0.5

*2017-11-17*

- Fixed Popover, Tree, Breadcrumb and Cascader regression in 2.0.4, #8188 #8217 #8283
- Fixed memory leak of clickoutside directive, #8168 #8225 (by @badpunman @STLighter)
- Fixed multiple Select height when its value is cleared, #8317 (by @luciy)
- Added `collapse-tags` attribute for multiple Select to replace tags with one line of text, #8190
- Fixed high CPU consumption caused by hidden Table, #8351
- Now you can use `doLayout` method of Table to update its layout, #8351

### 2.0.4

*2017-11-10*

- Improved accessibility for Cascader, Dropdown, Message, Notification, Popover, Tooltip and Tree
- Fixed Container resize when the width of viewport decreases, #8042
- Fixed Tree's `updateKeyChildren` incorrectly deleting child nodes, #8100
- Fixed bordered CheckboxButton's height when nested in a Form, #8100
- Fixed Menu's parsing error for custom colors, #8153 (by @zhouyixiang)

### 2.0.3

*2017-11-03*

- Fixed `editable` and `readonly` attributes for ranged DatePicker, #7922
- Fixed style error of nested Tabs, #7941
- Fixed style error of the last Step of vertical Steps, #7980
- Fixed trigger timing of `current-change` event for Pagination, #7995
- Fixed unregistered Tooltip in Menu, #7995

### 2.0.2

*2017-10-31*

- Now right-clicking the buttons of InputNumber won't change its value, #7817
- `validate` method of Form can now wait for asynchronous validations before executing its callback, #7774 (by @Allenice)
- Fixed range selection of DatePicker not working in Chromium 53-57 browsers, #7838
- Fixed missing preview and delete icons of Upload when its `list-type` is picture-card, #7857
- Added `sort-by` attribute for TableColumn, #7828 (by @wangfengming)
- Fixed DatePicker sometimes displaying wrong year number when selecting the first week in week mode, #7860 (by @hh23485)
- Fixed icon style error of vertical Steps, #7891
- The hot area for node arrows in Tree is expanded, #7891

### 2.0.1

*2017-10-28*

- Fixed style error of RadioButton and CheckboxButton, #7793
- Fixed TimePicker not respond to mouse scroll in some conditions, #7811
- Fixed incomplete styles of some components when imported on demand, #7811

### 2.0.0 Carbon

*2017-10-27*

#### New features
- General
  - A new theme: `theme-chalk`
  - Accessibility of the following components are improved: Alert, AutoComplete, Breadcrumb, Button, Checkbox, Collapse, Input, InputNumber, Menu, Progress, Radio, Rate, Slider, Switch, Upload
  - Added TypeScript typings
  - All existing icons are redesigned. Some new icons are added
  - Added a series of breakpoint-based utility classes that hide elements when the viewport size meets certain conditions
  - Added layout components: Container, Header, Aside, Main, Footer
  - Now you can configure component sizes globally. When importing Element, you can add a global config object with a `size` prop to configure default sizes for all components.
- Button
  - Added `round` attribute. It's used for round-cornered Buttons #6643
- TimeSelect
  - Now can be navigated by `Up` and `Down`, and hitting `Enter` selects the time #6023
- TimePicker
  - Now can be navigated by arrow keys, and hitting `Enter` selects the time #6050
  - Added `start-placeholder` and `end-placeholder`. They're placeholders for the two input boxes in range mode #7169
  - Added `arrow-control` attribute to spin the time with arrows #7438
- Tree
  - Now child nodes don't render before the first expand #6257
  - Added `check-descendants` attribute. It determines if child nodes are checked when checking their parent node in `lazy` mode #6235
- Tag
  - Added `size` attribute #7203
- Datepicker
  - Now `timeFormat` can format the TimePicker when type is set to `datetimerange` #6052
  - Added `start-placeholder` and `end-placeholder`. They're placeholders for the two input boxes in range mode #7169
  - Added `value-format` attribute to customize the format of the binding value, #7367
  - Added `unlink-panels` attribute to unlink the two date panels when selecting a date range
- MessageBox
  - Added `closeOnHashChange` attribute #6043
  - Added `center` attribute so that the content can be centered #7029
  - Added `roundButton` attribute to display round Buttons #7029
  - Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6043
  - Added `inputType` attribute to assign type for the inner input box, #7651
- Dialog
  - Added `width`、`fullscreen`、`append-to-body` attributes. Now Dialog can be nested
  - Added `center` attribute so that the content can be centered #7042
  - Added `focus-after-closed`、`focus-after-open` to improve accessibility #6511
- ColorPicker
  - Now you can type colors in the input box #6167
  - Added `size` and `disabled` attributes #7026
  - Added `popper-class` attribute #7351
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
  - Added `border` and `size` attributes #6690
- Checkbox
  - Added `border` and `size` attributes #6690
- Alert
  - Added `center` attribute so that the content can be centered #6876
- Menu
  - Added `background-color`, `text-color` and `active-text-color` attributes #7064
  - Added `open` and `close` methods to open and close SubMenu programmatically, #7412
- Form
  - Added `inline-message` attribute to determine if the validation message is displayed in inline style #7032
  - Added `status-icon` attribute to display a feedback icon when validated #7032
  - Form and FormItem now have a `size` attribute. Inner components will inherit this size if not specified on themselves, #7428
  - `validate` method will now return a promise if the callback is omitted, #7405
  - Added `clearValidate` method for clearing validating results for all form items, #7623
- Input
  - Added `suffix` and `prefix` named slots, `suffixIcon` and `prefixIcon` attributes to add contents inside the input box #7032
- Breadcrumb
  - Added `separator-class` attribute to support icons as item separators #7203
- Steps
  - Added `simple` attribute to activate simple-styled Steps #7274
- Pagination
  - Added `prev-text` and `next-text` attributes to customize texts of previous page and next page #7005
- Loading
  - Now you can customize spinner icon and background color with `spinner` and `background` prop, #7390
- Autocomplete
  - Added `debounce` attribute, #7413
- Upload
  - Added `limit` and `on-exceed` attributes to limit the amount of files, #7405
- DateTimePicker
  - Added `time-arrow-control` attribute to activate `arrow-control` of the nesting TimePicker, #7438
- Layout
  - Added a new breakpoint `xl` for viewport wider than 1920px
- Table
  - Added `span-method` attribute for merging cells
  - Added `clearSort` method to clear sorting programmatically
  - Added `clearFilter` method to clear filter programmatically
  - For expandable rows, when a row is expanded, a `.expanded` class will be added to its class list, so that you can customize its style
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
- Select
  - Added `reserve-keyword` attribute for reserving current search keyword after selecting an option

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
- Table
  - Fixed a bug that Table remains hiding when its parent element appears from `display: none`
  - Fixed Table expanding its width when its parent element has `display: flex`
  - Fixed a bug that fixed columns of a Table with `append` slot would disappear when data is dynamically fetched
  - Fixed `expand-row-keys` attribute not working with initial value
  - Fixed filter failing when `data` updates
  - Fixed a calculation error of fixed columns layout with grouped headers
  - Fixed a dynamic `max-height` bug
  - Fixed some style calculation errors

#### Breaking changes
- General
  - Removed `theme-default`
  - Compatible with Vue 2.5.2+ and IE 10+
  - `change` event of form components and `current-change` event of Pagination now only trigger on user interaction
  - `size` attribute of Button and form components now accept `medium`, `small` and `mini`
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
  - Attributes starting with `on-*` will be parsed to events in JSX, making all `on-*` attributes of Switch not
  able to work in JSX. So `on-*` attributes are renamed to `active-*`, and accordingly `off-*` attributes are renamed to `inactive-*`. This change affects the following attributes: `on-icon-class`, `off-icon-class`, `on-text`, `off-text`, `on-color`, `off-color`, `on-value`, `off-value`
  - `active-text` and `inactive-text` attributes now don't have default values
- Tag
  - `type` attribute now accepts `success`, `info`, `warning` and `danger`
- Menu
  - Removed `theme` attribute. The color of Menu can be configured using `background-color`, `text-color` and `active-text-color`
- Input
  - Removed `icon` attribute. Now the suffix icon can be configured using `suffix-icon` attribute or `suffix` named slot
  - Removed `on-icon-click` attribute and `click` event. Now to add click handler on icons, please use named slots
  - `change` event now behaves like the native input element, which triggers only on blur or pressing enter. If you need to respond to user input in real time, you can use `input` event.
- Autocomplete
  - Removed `custom-item` attribute. Now the template of input suggestions can be customized using `scoped slot`
  - Removed `props` attribute. Now you can use `value-key` attribute to designate key name of the input suggestion object for display
- Steps
  - Removed `center` attribute
  - Now the Steps will fill its parent container by default
- DatePicker
  - The params of DatePicker's `change` event is now the binding value itself. Its format is controlled by `value-format`
- Table
  - Removed support for customizing column template using `inline-template`
  - `sort-method` now aligns with `Array.sort`. It should return a number instead of a boolean
  - `append` slot is moved outside the `tbody` element to avoid multiple rendering
  - `expand` event is renamed to `expand-change`
  - The params of `row-class-name` and `row-style` method is now an object

##
<i><sup>*</sup> Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.</i>