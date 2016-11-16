## Changelog

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
- Added props: `nodeKey` `emptyText` `checkStrictly` `defaultExpandAll` `autoExpandParent` `defaultCheckedKeys` `defaultExpandedKeys` and method: `setCheckedNodes` for Tree

### 1.0.0

*2016-11-9*

Element 1.0.0 released.
