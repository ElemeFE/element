<script>
  module.exports = {
    data() {
      return {
        form: {
          date: null
        }
      };
    },
    methods: {
      d(date) {
        console.log("D", date);
        return false;
      }
    }
  };
</script>

<style>
  .tm-picker-panel__content {
      margin: 0;
      padding: 16px 0;
  }
    
  .tm-picker-panel__content table {
      table-layout: fixed;
      width: 100%;
   }
</style>

## AdvancedDatePicker

Use Date Picker for date input with mask.

:::demo

```html
   <tm-advanced-date-picker :local-storage-date="form.date" :disabled-date="d"
                            @typechange="$emit('to-parent', $event)" />                                    
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| picker-type | type of child DatePicker | string | — | dinamic |
| picker-class | class of child DatePicker | string | — | child-picker |
| disable-old-date | same options as DatePicker have | boolean | — | true |
| disabled-date | function to disable select date, more priority than disable-old-date | function | function | null |
| default-value | defaults value to show | date | date | Date() |
| local-storage-date | if app use a local storage, this prop be helpfull | array/date | — | null |

### shortcuts
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | title of the shortcut | string | — | — |
| onClick | callback function, triggers when the shortcut is clicked, with the `vm` as its parameter. You can change the picker value by emitting the `pick` event. Example: `vm.$emit('pick', new Date())`| function | — | — |


### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| date-picked | triggers when validated value is changed | component's binding value |
| typechange | triggers when type is changed | component's binding value |

### Methods
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |
| close | close popover | — |
| clear | clear date | — |

