<style>
    .demo-services .tm-badge {
        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2);
        color: #5f5f5f;
        margin-left: 5px;
    }
    .demo-services .tm-icon svg {
        width: 12px;
        height: 12px;
        fill: #5f5f5f;
    }
    .demo-payment .tm-badge {
        border: none;
        font-weight: 500;
        width: 160px;
    }
    .demo-payment .tm-badge--red {
        background: #f5ddde;
    }
    .demo-payment .tm-badge--green {
        background: #daf2e0;
    }
    .circle {
        display: inline-block;
        vertical-align: middle;
        width: 6px;
        height: 6px;
        margin-right: 2px;
        border-radius: 50%;
    }
    .circle-red {
        background: #ec5657;
    }
    .circle-green {
        background: #5dc376;
    }
</style>

## Time Info

Time Info are using for show any information. See examples to understand it better.

### Basic usage

:::demo Bla Bla

```html
<div>
  <tm-time-info type="hour">12</tm-time-info>
</div>
```
:::

<style>
    .demo-services .tm-badge {
        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2);
        color: #5f5f5f;
        margin-left: 5px;
    }
    .demo-services .tm-icon svg {
        width: 12px;
        height: 12px;
        fill: #5f5f5f;
    }
    .demo-payment .tm-badge {
        border: none;
        font-weight: 500;
        width: 160px;
    }
    .demo-payment .tm-badge--red {
        background: #f5ddde;
    }
    .demo-payment .tm-badge--green {
        background: #daf2e0;
    }
    .circle {
        display: inline-block;
        vertical-align: middle;
        width: 6px;
        height: 6px;
        margin-right: 2px;
        border-radius: 50%;
    }
    .circle-red {
        background: #ec5657;
    }
    .circle-green {
        background: #5dc376;
    }
</style>
```
:::


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| color     | badge special color   | string  |   green / orange / red            |    —     |
| hollow     | determine whether it's a hollow badge   | boolean    |   — |     false    |
| round     | determine whether it's a round button   | boolean    | — | false   |
| no-hover     | determine whether badge has no hover   | boolean    | — | false   |
