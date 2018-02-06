<style>
  .demo-box.demo-button {
    .tm-row {
      margin-bottom: 10px;
    }
    .tm-button + .tm-button {
      margin-left: 10px;
    }
    .tm-button-group {
      margin-bottom: 20px;

      .tm-button + .tm-button {
        margin-left: 0;
      }

      & + .tm-button-group {
        margin-left: 10px;
      }
    }
  }
</style>

### TM Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<div style="margin: 20px 0"> 
  <tm-button type="primary">Primary</tm-button>
  <tm-button type="secondary">Secondary</tm-button> 
</div> 
```
:::

## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain` and `round` to define Button's style.

```html 
<div>
  <tm-button>Default</tm-button>
  <tm-button type="primary">Primary</tm-button>
  <tm-button type="success">Success</tm-button>
  <tm-button type="info">Info</tm-button>
  <tm-button type="warning">Warning</tm-button>
  <tm-button type="danger">Danger</tm-button>
</div>

<div style="margin: 20px 0">
  <tm-button plain>Plain</tm-button>
  <tm-button type="primary" plain>Primary</tm-button>
  <tm-button type="success" plain>Success</tm-button>
  <tm-button type="info" plain>Info</tm-button>
  <tm-button type="warning" plain>Warning</tm-button>
  <tm-button type="danger" plain>Danger</tm-button>
</div>

<div>
  <tm-button round>Round</tm-button>
  <tm-button type="primary" round>Primary</tm-button>
  <tm-button type="success" round>Success</tm-button>
  <tm-button type="info" round>Info</tm-button>
  <tm-button type="warning" round>Warning</tm-button>
  <tm-button type="danger" round>Danger</tm-button>
</div>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<div>
  <tm-button disabled>Default</tm-button>
  <tm-button type="primary" disabled>Primary</tm-button>
  <tm-button type="success" disabled>Success</tm-button>
  <tm-button type="info" disabled>Info</tm-button>
  <tm-button type="warning" disabled>Warning</tm-button>
  <tm-button type="danger" disabled>Danger</tm-button>
</div>

<div style="margin-top: 20px">
  <tm-button plain disabled>Plain</tm-button>
  <tm-button type="primary" plain disabled>Primary</tm-button>
  <tm-button type="success" plain disabled>Success</tm-button>
  <tm-button type="info" plain disabled>Info</tm-button>
  <tm-button type="warning" plain disabled>Warning</tm-button>
  <tm-button type="danger" plain disabled>Danger</tm-button>
</div>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<tm-button type="text">Text Button</tm-button>
<tm-button type="text" disabled>Text Button</tm-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<tm-button type="primary" icon="tm-icon-edit"></tm-button>
<tm-button type="primary" icon="tm-icon-share"></tm-button>
<tm-button type="primary" icon="tm-icon-delete"></tm-button>
<tm-button type="primary" icon="tm-icon-search">Search</tm-button>
<tm-button type="primary">Upload<i class="tm-icon-upload tm-icon-right"></i></tm-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<tm-button-group>` to group your buttons.

```html
<tm-button-group>
  <tm-button type="primary" icon="tm-icon-arrow-left">Previous Page</tm-button>
  <tm-button type="primary">Next Page<i class="tm-icon-arrow-right tm-icon-right"></i></tm-button>
</tm-button-group>
<tm-button-group>
  <tm-button type="primary" icon="tm-icon-edit"></tm-button>
  <tm-button type="primary" icon="tm-icon-share"></tm-button>
  <tm-button type="primary" icon="tm-icon-delete"></tm-button>
</tm-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<tm-button type="primary" :loading="true">Loading</tm-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<div>
  <tm-button>Default</tm-button>
  <tm-button size="medium">Medium</tm-button>
  <tm-button size="small">Small</tm-button>
  <tm-button size="mini">Mini</tm-button>
</div>
<div style="margin-top: 20px">
  <tm-button round>Default</tm-button>
  <tm-button size="medium" round>Medium</tm-button>
  <tm-button size="small" round>Small</tm-button>
  <tm-button size="mini" round>Mini</tm-button>
</div>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |