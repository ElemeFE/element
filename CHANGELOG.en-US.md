## Changelog

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
