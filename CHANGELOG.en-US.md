## Changelog

### 1.0.1

*2016-XX-XX*

- Fixed Pagination improperly triggering multiple `current-change` events
- Fixed Switch style when nested in a Form, #967
- Fixed Loading locks scroll of `body` in specific scenarios, #968
- `span` of Col is no longer a required attribute, and its default value is `24` if omitted
- DatePicker: add `disabled` and `editable` attribute.
- Added `close` method for Message and Notification to manually close an instance

#### Breaking change
- DatePicker: can't change value when `readonly` is true, setting `editable` to false if you want to disabled input. #976

### 1.0.0

*2016-11-9*

Element 1.0.0 released.
