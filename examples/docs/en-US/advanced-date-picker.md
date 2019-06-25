<script>
  module.exports = {
    data() {
      return {
        form: {
          dynamicDate: null,
          date: null
        }
      };
    },
    methods: {
      d(date) {
        // console.log("D", date);
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

Default (dynamic) Advanced Date Picker

:::demo

```html
   <tm-advanced-date-picker v-model="form.dynamicDate"
                            :disabled-date="d"
                            format="dd.MM.yyyy"
                            @typechange="$emit('to-parent', $event)" />
```
:::

Single (date) Advanced Date Picker

:::demo

```html
   <tm-advanced-date-picker v-model="form.date"
                            picker-type="date"
                            format="dd.MM.yyyy"
                            @typechange="$emit('to-parent', $event)" />
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| picker-type | type of child DatePicker | string | year/month/date/datetime/ week/datetimerange/daterange/dynamic | dynamic |
| picker-class | class of child DatePicker | string | — | child-picker |
| value | value of date-picker | array/date/string | — | null |
| format | format of the displayed value in the input box | string | see [date formats](#/en-US/component/date-picker#date-formats) | yyyy-MM-dd |
| value-format | optional, format of binding value. If not specified, the binding value will be a Date object | string | see [date formats](#/en-US/component/date-picker#date-formats) | — |
| disable-old-date | same options as DatePicker has | boolean | — | false |
| disabled-date | function to disable select date, more priority than disable-old-date | function | function | null |
| default-value | optional, default date of the calendar | Date | anything accepted by `new Date()` | — |
| clearable | Whether to show clear button | boolean | — | true |
| prefix-icon | Custom prefix icon class | string | — | calendar |
| suffix-icon | Custom prefix icon class | string | — |  — |

### shortcuts
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | title of the shortcut | string | — | — |
| onClick | callback function, triggers when the shortcut is clicked, with the `vm` as its parameter. You can change the picker value by emitting the `pick` event. Example: `vm.$emit('pick', new Date())`| function | — | — |


### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| input | triggers when input date is changed | component's binding value |
| date-changed | the same as `input` event | component's binding value |
| date-picked | triggers when validated value is changed | component's binding value |
| typechange | triggers when type is changed | component's binding value |

### Methods
| Method | Description | Parameters |
|------|--------|-------|
| focus | focus the Input component | — |
| close | close popover | — |
| clear | clear date | — |

