<script>
  export default {
    data: function () {
      return {
        dates: [
          { start: new Date(2018, 7, 1), end: new Date(2018, 7, 5) },
          { start: new Date(2018, 7, 15), span: 2 }
        ]
      }
    }
  }
</script>
## Calendar

### Default

:::demo default

```html
<tm-calendar :dates="[
  { start: new Date(2018, 7, 1), end: new Date(2018, 7, 5) },
  { start: new Date(2018, 7, 15), span: 2 }]" is-inline />
```
:::

### DoublePanel

:::demo double panel

```html
<tm-calendar :dates="[{ start: new Date(2018, 7, 1), end: new Date(2018, 7, 5) }]" is-double is-inline />

```
:::

### WithInput

:::demo with input

```html
<tm-calendar :dates="new Date(2018, 7, 1)" />

```

:::

### WithEvents

:::demo with events

```html
<tm-calendar :dates="new Date(2018, 7, 1)"
             with-events is-inline />

```

:::

### LargeCalendar

:::demo large calendar

```html
<tm-calendar :dates="new Date(2018, 7, 1)"
             large is-inline />

```