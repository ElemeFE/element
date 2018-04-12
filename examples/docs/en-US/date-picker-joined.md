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

### This components uses only with daterange date-picker

:::demo default

```html
<tm-date-picker-joined
  suffix-icon="calendar"
  type="year"
  v-model="date"></tm-date-picker-joined>

```
:::


### Datepicker Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | data to bind | var | — | — |
| suffix-icon | suffix-icon | string | — | — |
| prefix-icon | prefix-icon | string | — | — |
