## Changelog

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
