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
<tm-date-picker-joined v-model="date"></tm-date-picker-joined>

```
:::

### Range - non-clearable

:::demo default

```html
<tm-date-picker-joined
    :clearable="false"
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

### Extra large

:::demo 
```html
<tm-date-picker-joined
    size="extra-large"
    type="date"
    v-model="dateSingle"></tm-date-picker-joined>
```
:::


### Datepicker Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| suffix-icon | suffix-icon | string | — | — |
| prefix-icon | prefix-icon | string | — | — |
| size | input size | string | — | — |
| placeholder | input placeholder | string | — | — |
| type | datepicker type | string | date, daterange | daterange |
| clearable | Whether to show clear button | boolean | — | true |
