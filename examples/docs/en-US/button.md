<style>
  .demo-box.demo-button {
    &:hover {
      background-color: whitesmoke;
    }
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

## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain` and `round` to define Button's style.

```html
<h4>Basic usage</h4>
<div>
  <tm-button>Default</tm-button>
  <tm-button type="primary">Primary</tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="secondary">Secondary</tm-button>
  <tm-button type="secondary" cancel>Secondary Cancel</tm-button>
  <tm-button type="secondary" remove>Secondary Delete</tm-button>
</div>
<div>
  <tm-button type="success">Success</tm-button>
  <tm-button type="info">Info</tm-button>
  <tm-button type="warning">Warning</tm-button>
  <tm-button type="danger">Danger</tm-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <tm-button plain>Plain</tm-button>
  <tm-button type="primary" plain>Primary</tm-button>
</div>
<div>
  <tm-button type="secondary" plain>Secondary</tm-button>
  <tm-button type="secondary" cancel plain>Secondary Cancel</tm-button>
  <tm-button type="secondary" remove plain>Secondary Delete</tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="success" plain>Success</tm-button>
  <tm-button type="info" plain>Info</tm-button>
  <tm-button type="warning" plain>Warning</tm-button>
  <tm-button type="danger" plain>Danger</tm-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <tm-button round>Round</tm-button>
  <tm-button type="primary" round>Primary</tm-button>
</div>
<div>
  <tm-button type="secondary" round>Secondary</tm-button>
  <tm-button type="secondary" cancel round>Secondary Cancel</tm-button>
  <tm-button type="secondary" remove round>Secondary Delete</tm-button>
</div>
<div style="margin: 20px 0">
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
<h4>Basic usage</h4>
<div>
  <tm-button disabled>Default</tm-button>
  <tm-button type="primary" disabled>Primary</tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="secondary" disabled>Secondary</tm-button>
  <tm-button type="secondary" disabled cancel>Secondary Cancel</tm-button>
  <tm-button type="secondary" disabled remove>Secondary Delete</tm-button>
</div>
<div>
  <tm-button type="success" disabled>Success</tm-button>
  <tm-button type="info" disabled>Info</tm-button>
  <tm-button type="warning" disabled>Warning</tm-button>
  <tm-button type="danger" disabled>Danger</tm-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <tm-button disabled plain>Plain</tm-button>
  <tm-button type="primary" disabled plain>Primary</tm-button>
</div>
<div>
  <tm-button type="secondary" disabled plain>Secondary</tm-button>
  <tm-button type="secondary" disabled cancel plain>Secondary Cancel</tm-button>
  <tm-button type="secondary" disabled remove plain>Secondary Delete</tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="success" disabled plain>Success</tm-button>
  <tm-button type="info" disabled plain>Info</tm-button>
  <tm-button type="warning" disabled plain>Warning</tm-button>
  <tm-button type="danger" disabled plain>Danger</tm-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <tm-button disabled round>Round</tm-button>
  <tm-button type="primary" disabled round>Primary</tm-button>
</div>
<div>
  <tm-button type="secondary" disabled round>Secondary</tm-button>
  <tm-button type="secondary" disabled cancel round>Secondary Cancel</tm-button>
  <tm-button type="secondary" disabled remove round>Secondary Delete</tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="success" disabled round>Success</tm-button>
  <tm-button type="info" disabled round>Info</tm-button>
  <tm-button type="warning" disabled round>Warning</tm-button>
  <tm-button type="danger" disabled round>Danger</tm-button>
</div>
```
:::

### Text Button & Text Button vs Icon

Buttons without border and background.

:::demo
```html
<div>
  <tm-button type="text">Text Button</tm-button>
  <tm-button type="text" disabled>Text Button</tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="text" icon="bucket">Отменить бронирование</tm-button>
  <tm-button type="text" icon="repeat">Повторить заказ</tm-button>
  <tm-button type="text" icon="copy">Скопировать</tm-button>
  <tm-button type="text" icon="star">Добавить в избранное</tm-button>
  <tm-button type="text" icon="upload">Загрузите список в формате .xls (.xlsx)</tm-button>
  <tm-button type="text" icon="advanced-search" search>Расширеный поиск</tm-button>
</div>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<h4>Basic usage</h4>
<div>
  <tm-button type="secondary" icon="check" circle approve></tm-button>
  <tm-button type="secondary" icon="cross" circle cancel></tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="default" icon="cross" size="mini">Закрыть карту</tm-button>
  <tm-button type="secondary" icon="location" size="mini">Поиск на карте</tm-button>
</div>
<div>
  <tm-button type="secondary" icon="plus">Создать заказ</tm-button>
  <tm-button type="info" icon="circle-plus" size="medium">Добавить перелет</tm-button>
</div>
<h4>Disable usage</h4>
<div>
  <tm-button type="secondary" icon="check" circle approve disabled></tm-button>
  <tm-button type="secondary" icon="cross" circle cancel disabled></tm-button>
</div>
<div style="margin: 20px 0">
  <tm-button type="default" icon="cross" size="mini" disabled>Закрыть карту</tm-button>
  <tm-button type="secondary" icon="location" size="mini" disabled>Поиск на карте</tm-button>
</div>
<div>
  <tm-button type="secondary" icon="plus" disabled>Создать заказ</tm-button>
  <tm-button type="info" icon="circle-plus" size="medium" disabled>Добавить перелет</tm-button>
</div>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<tm-button-group>` to group your buttons.

```html
<tm-button-group>
  <tm-button type="primary" icon="cart">В заказ</tm-button>
  <tm-button type="primary" icon="arrow-next">Бронировать</tm-button>
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
