<script>
  export default {
    data: function () {
      return {
        date: "123"
      }
    }
  }
</script>
## DatePickerJoined

### Basic usage

:::demo default

```html
++{{ date }}
<tm-date-picker-joined
  suffix-icon="calendar"
  type="daterange" :value="date"
  v-model="date"></tm-date-picker-joined>

```
:::


### Gallery Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| images | images to show | array | — | — |
| start-at | start from N position | number | — | 0 |

### Gallery Methods
| Method | Description | Parameters |
|---------- |-------------- | -- |
| show | show gallery | — |
| hide | hide gallery | — |
| prev | switch to the previous image | — |
| next | switch to the next image | — |
| showImage | switch to N image | number |