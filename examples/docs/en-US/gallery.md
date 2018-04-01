## Gallery

:::demo default

```html
<tm-gallery ref="gallery1"></tm-gallery>
<div>
  <tm-button type="primary" @click="() => { this.$refs.gallery1.tst() }">Primary</tm-button>
</div>
```
:::

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