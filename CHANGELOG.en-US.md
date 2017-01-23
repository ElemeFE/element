## Changelog

### 1.1.6

*2017-01-23*

- Fixed `customClass` of MessageBox affecting follow-up instances, #2472
- Fixed style issue of Select after being activated when located in a non-default-activated tab pane inside Tabs, #2466
- Fixed style missing issue for some components when imported on demand
- Fixed disabled filterable multiple Select still showing dropdown when clicked on a certain area, #2540
- Restored returning to original sorting in sortable Table columns, #2491
- Added `reset.css` in `theme-default`, #2378
- Added `range-separator` attribute for DatePicker, #2579
- Published individual component packages: Table, DatePicker, Loading, Upload and Carousel
- Add Finnish (@groenroos)

### 1.1.5

*2017-01-17*

- Fixed Menu not activating corresponding menu item after router switching in router mode, #2451
- Fixed `value` attribute of Collapse not supporting `Number` typed value, #2455

### 1.1.4

*2017-01-16*

- Fixed Input Number triggering `change` event when bound value is changed programmatically, #2329
- Fixed Menu not responding to `$router` changing in router mode, #2391
- Fixed Menu and Tree expanding state malfunctioning when clicked multiple times quickly, #2354
- Fixed `change` event triggering mechanism of Input Number and Checkbox Group, now they do not fire when bound value is changed programmatically
- Added `on-icon-click` attribute for Input, #2414
- Added `disabled` attribute for Radio Group, #2411
- Added `accordion` attribute for Tree, #2408
- Added `show-message` attribute for Form, #2356
- Fixed sort clicking area of Table, updated default sorting related APIs, #2309 #2405 (by @njleonzhang)
- Fixed `firstDayOfWeek` not working in ranged typed of DatePicker, #2353
- Fixed DatePicker displaying 1970 when initial value is null, #2388
- Fixed `filteredValue` attribute for Table, #2348
- Fixed scrollable Table's style with empty data, #2396
- Added `beforeClose` attribute for MessageBox, #2204
- Fixed filterable Select not showing dropdown when triangle icon is clicked, #2389

Breaking change
- The `default-sort-prop` and `default-sort-order` attributes added in 1.1.3 are now merged into an object-typed attribute

### 1.1.3

*2017-01-09*

- Fixed DatePicker not firing change event when cleared for the first time upon page load, #2167
- Fixed DatePicker year calculating error when choosing the next year, #2152
- Added `default-sort-prop` and `default-sort-order` attributes for Table, #2182 (by @njleonzhang)
- Fixed filterable Select filtering other options with initial value, #2196
- Added custom i18n processing, making Element compatible with i18n plugins other than `vue-i18n`, #2129
- Added `resize` attribute for Input, #2263 (by @Kingwl)
- Fixed Autocomplete not hiding dropdown when blurred, #2247
- Fixed style issues with nested Tabs, #2212 (by @Kingwl)
- Fixed Tabs' tab bar locating error when non-first item is initially activated, #2192

### 1.1.2

*2016-12-30*

- Fixed `sortable` and `fixed` attribute of Table not working in Vue 2.1.7+
- Fixed Input Number not resetting on blur when input with illegal values, #2098
- Removed `title` scoped slot of Collapse, and added `title` named slot, #2100
- Fixed range selection in TimePicker not working issue
- Fixed Tabs' active tab switching when a non-active tab is removed, #2106
- Fixed console error reporting when navigating Select with arrow keys, #2120
- Fixed incorrect validation timing of filterable Select in Form, #2120

### 1.1.1

*2016-12-29*

- Fixed compatibility issue with latest Vue due to compilation

### 1.1.0 Helium

*2016-12-29*

New features:
- Two brand new components: Carousel and Collapse
- SSR supported
- Scrollbars' style inside components is upgraded
- Table now supports custom templates via [scoped slots](http://vuejs.org/v2/guide/components.html#Scoped-Slots); the good old `inline-template` is still compatible, but it's no longer recommended and is likely to be removed in the future
- Table now supports expandable rows
- DatePicker now supports specifying the first day of week
- TimeSelect now supports `maxTime`
- Autocomplete now supports `popper-class`
- To customize template of Tab-Pane, now you can use the `slot` named `label`

Fixes:
- `change` event of DatePicker incorrectly triggering multiple times, #2070
- Width shaking of tab-pane while initializing, #1883

Breaking changes:
- Only compatible with Vue 2.1.6 and beyond
- Parameters of Form validateField() methods are updated
- Alert's render-content attribute is removed, and now you can pass your custom template via default slot
- The box models of Input and Select are updated from `block` to `inline-block`
- The box model of Tabs is updated from `inline-block` to `block`, and Tab-Pane's `label-content` attribute is removed
- The dropdown of Autocomplete now inserts directly to `<body>`, not `<el-autocomplete>` any more

### 1.0.9

*2016-12-27*

- Fixed DatePicker incorrectly triggering input event, #1834
- Fixed Tree reporting `event is undefined` error in Firefox, #1945
- Added `change` event for DatePicker, whose parameter is the formatted value, #1841
- Added `header-align` attribute for Table, #1424
- Fixed single select Table's highlight style not removing when data is removed, #1890
- Fixed filterable Select lagging issue with more options, #1933
- Fixed multiple disabled Select not disabling removing selected options issue, #2001
- Fixed Col style not working in `xs`, #2011
- Added `value` attribute for Tab, #2008
- Fixed InputNumber `change` event incorrectly firing multiple times in some conditions, #1999
- Added `clearable` attribute for DatePicker, #1994
- Fixed Form always passing validation in async mode, #1936

### 1.0.8

*2016-12-20*

- Fixed nested Popup from event bubbling, #1677
- Fixed the issue that datetimerange-typed DatePicker can not select time, #1758
- Fixed `change` event not firing correctly of Slider, #1809
- Fixed Loading's spinner splitting while animating in some conditions, #1786
- Added `loading-text`, `no-data-text`, `no-match-text` properties and `visible-change` event for Select, #1849
- Added `popper-class` property for DatePicker, Select and Tooltip, #1806
- Added `expand-on-click-node`, `current-node-key` properties and `current-change` event for Tree, #1805 #1807
- Added the third parameter `column` for Table's `row-click` event, #1808
- Fixed an error when pages with Checkbox switching routes due to `computed` property being cached, #1860
- Added the tab instance as a parameter for TabPanel's `label-content` render function, #1857
- Added infinite submenus support for NavMenu in vertical mode, #1851
- Updated Checkbox so that it works without a binding value, #1818
- Added `onProgress` hook for Progress, #1782
- Fixed Tab not updating active bar with dynamic label, #1761
- Added `filter-change` event for Table, and `column-key` property for TableColumn, #1876
- Added `hide-on-click` property for Dropdown, #1879

### 1.0.7

*2016-12-14*

- Fixed DatePicker dropdown appears when hovering on the clear button
- Fixed DatePicker displays a wrong date when its initial value is null
- Added `row-contextmenu` event and `max-height` attribute for Table, #1663 #1674
- Added `customClass` attribute for MessageBox, #1707
- Added `iconClass` and `customClass` attributes for Message and Notification, #1671
- Added empty slot for Table, #1737
- Added old value as a second parameter in change event for InputNumber

### 1.0.6

*2016-12-09*

- Added `disabled` attribute for Tabs, #1620
- Added `size` attribute for DatePicker input, #1440
- Fixed `datetimerange` DatePicker's panel not showing correct date if initial value is present, #1129
- Fixed DatePicker display error when switching year, #1607
- Fixed DatePicker not triggering clickoutside when its icon is clicked, #1604
- Fixed TimePicker not refreshing value after clicking the clear button, #1583
- Fixed remote filterable Select display error when its value is an object, #1593
- Fixed Select's clear button still working bug when it's `disabled`, #1619
- Fixed Switch's background color error when its `disabled` attribute is dynamically changed, #1627
- Fixed some style bugs of Table

### 1.0.5

*2016-12-06*

- Fixed Select with async options and binding value displaying value instead of label, #1537
- Fixed Select reports an error when initial binding value is an empty object, #1533
- Fixed remote filtering Select not showing dropdown in some conditions, #1531
- Fixed Slider sometimes drifting a small distance after releasing dragging, #1546
- Fixed Steps style in IE9, #1543
- Added Upload generating URL for all file types, #1530
- Fixed TimeSelect style, removed flexbox, #1335

### 1.0.4

*2016-12-02*

- Added `controls` attribute for Input Number, #1473
- Fixed Checkbox Group and Radio Group async issue, #1511 #1514
- Added `offset` attribute for Notification, #1419
- Fixed Slider's value not accurate issue when dragging rapidly, #1458
- Fixed Slider incorrectly showing multiple decimal digits issue, #1450
- Fixed Select's binding value and displayed value not in sync in some conditions
- Added `multiple-limit` and `allow-create` attributes for Select
- Fixed Tree leaf nodes' triangle icon not disappear when expanded, #1438
- Fixed Tree's view not updating issue after fetching child nodes' data, #1439
- Fixed some Table's style issues in windows system, #1464 #1507
- Fixed Table's first column's label not showing issue when grouping table head is used with fixed columns, #1451
- Added `row-dblclick` event for Table, #1362

### 1.0.3

*2016-11-28*

- Fixed `currentPage` of Pagination not working in some cases, #1336
- Fixed `month` and `disabledDate` DatePicker's view not refreshing issue when switching year, #1158
- Fixed `readonly` DatePicker clear button not disabled issue, #1238
- Fixed Slider not working when binding value is `NaN` or `step` is smaller than 1, #1239 #1282
- Added multi-header for Table, #1312
- Added `rowStyle` for Table, #1348
- Fixed some attributes of TableColumn can not dynamically assigned issue, #1314
- Added `filter-node-method` attribute and `filter` method for Tree, #1257
- Added `getCheckedKeys` and `setCheckedKeys` methods for Tree, #1254
- Added deep nesting support for Checkbox/Radio inside Checkbox/Radio Group, #1152
- Fixed Popper not triggering destroy issue when keep-alive, #1359
- Added object deep validation for Form, #1363
- Added `append` and `prepend` for Autocomplete, #1369
- Added dynamic `pageSizes` support for Pagination, #1372
- Added custom style API for checked buttons in Radio Button, #1380
- Added assigning title via slot for Menu Group, #1382
- Fixed DatePicker year switching bug, #1385
- Added uploaded file list API for Upload, #1393
- Added multi-type support for `label` attribute of Checkbox, #1400
- Added `setChecked` method for Tree, #1422

### 1.0.2

*2016-11-18*

- Added `context` for Table to specify which context to access inside of table columns, #1161
- Added multiple languages
- Fixed language's dynamic switching issue, #1160
- Added `render-content` for Alert, #568
- Added styles for focused Button, #982
- Fixed `change` triggering timing in Switch, #1162
- Fixed TimeSelect being disabled when start time is set to `00:00`, #676
- Added `show-header` attribute and `header-click` method for Table, #1195
- Improved `height` attribute for Table when set to a string, #1195
- Fixed `selection-change` of Table not triggering in some cases, #1198
- Fixed Table's fixed columns not disappear when `fixed` attribute is dynamically changed, #1182

### 1.0.1

*2016-11-16*

- Fixed Pagination improperly triggering multiple `current-change` events
- Fixed Switch style when nested in a Form, #967
- Fixed Loading locks scroll of `body` in specific scenarios, #968
- `span` of Col is no longer a required attribute, and its default value is `24` if omitted
- Added `disabled` and `editable` attribute for DatePicker, #976
- Fixed DatePicker readonly with native behavior, #976
- Added `close` method for Message and Notification to manually close an instance
- Added clear value feature for DatePicker, #759
- Fixed Form reports an error when resetting a Date typed field, #937
- Fixed Table render error using vue-loader 9.9.0
- Added `align-center` attribute for Step, #994
- Fixed Upload missing Progress component, #1013
- Layout now supports responsive layout
- Added `show-close` for Dialog
- Fixed an error when `vue-i18n` is imported but not configured, #973
- Fixed DatePicker not refresh view with an initial value, #1050
- Fixed DiatePicker not refresh year when switched in month picker, #1070
- Added $loading service
- Added `manual` trigger in Popover
- Added props: `nodeKey`, `emptyText`, `checkStrictly`, `defaultExpandAll`, `autoExpandParent`, `defaultCheckedKeys`, `defaultExpandedKeys` and method: `setCheckedNodes` for Tree

### 1.0.0

*2016-11-9*

Element 1.0.0 released.
