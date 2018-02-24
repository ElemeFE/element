<style>
    .tm-badge + .tm-badge {
        margin-left: 10px;
    }
    .demo-badge {
        background: #f4f5f9;
    }
</style>

## Badge

Badges are using for show any information. See examples to understand it better.

### Basic usage

:::demo Use `type`, `plain` and `round` to define Badge's style. Also you can use `fill` when `plain` is on.

```html
<h4>Basic usage</h4>
<div>
    <tm-badge>Default</tm-badge>
    <tm-badge type="primary">Primary</tm-badge>
    <tm-badge type="success">Success</tm-badge>
    <tm-badge type="warning">Warning</tm-badge>
    <tm-badge type="danger">Danger</tm-badge>
</div>
<h4>Round usage</h4>
<div>
    <tm-badge round>Round</tm-badge>
    <tm-badge round type="primary">Primary</tm-badge>
    <tm-badge round type="success">Success</tm-badge>
    <tm-badge round type="warning">Warning</tm-badge>
    <tm-badge round type="danger">Danger</tm-badge>
</div>
<h4>Plain usage</h4>
<div>
    <tm-badge plain>Plain</tm-badge>
    <tm-badge plain type="primary">Primary</tm-badge>
    <tm-badge plain type="success">Success</tm-badge>
    <tm-badge plain type="warning">Warning</tm-badge>
    <tm-badge plain type="danger">Danger</tm-badge>
</div>
<h4>Plain usage with <u>fill="hollow"</u></h4>
<div>
    <tm-badge plain fill="hollow">Plain</tm-badge>
    <tm-badge plain fill="hollow" type="primary">Primary</tm-badge>
    <tm-badge plain fill="hollow" type="success">Success</tm-badge>
    <tm-badge plain fill="hollow" type="warning">Warning</tm-badge>
    <tm-badge plain fill="hollow" type="danger">Danger</tm-badge>
</div>
```
:::

### Extandable inner content

:::demo You may place inside element anything you want. Really.

```html
<h4>Using with icon</h4>
<div>
    <tm-badge>
        <tm-icon name="wifi"></tm-icon> Wi-Fi
    </tm-badge>
</div>
```
:::


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | badge special color   | string  |   primary / success / warning / danger            |    —     |
| round     | determine whether it's a round badge   | boolean    | — | false   |
| plain     | determine whether it's a plain badge   | boolean    | — | false   |
| fill     | determine fill of plain badge, available only with `plain`   | string    | default / hollow | —   |