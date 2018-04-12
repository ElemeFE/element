<script>
  export default {
    data: function () {
      return {
        date: null
      }
    }
  }
</script>
## DatePickerJoined

### Basic usage

:::demo default

```html
<tm-date-picker-joined
  suffix-icon="calendar"
  type="daterange"
  v-model="date"></tm-date-picker-joined>

```
:::


### Datepicker Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | data to bind | var | — | — |
| type | type of the picker | string | year/month/date/datetime/ week/datetimerange/daterange | daterange |
| suffix-icon | suffix-icon | string | — | — |
| prefix-icon | prefix-icon | string | — | — |
