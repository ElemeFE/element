<script>
  export default {
    data: function () {
      return {
        date: null,
        dateSingle: ''
      }
    }
  }
</script>
## DatePickerJoined

### Range

:::demo default

```html
<tm-date-picker-joined
  suffix-icon="calendar"
  v-model="date"></tm-date-picker-joined>

```
:::


### Single

:::demo 
```html
<tm-date-picker-joined
  type="date"
  v-model="dateSingle"
  suffix-icon="calendar"></tm-date-picker-joined>
```
:::


### Datepicker Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| suffix-icon | suffix-icon | string | — | — |
| prefix-icon | prefix-icon | string | — | — |
| type | datepicker type | string | date, daterange | daterange |
