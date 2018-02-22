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

## Badge

Badges are using for show any information. See examples to understand it better.

### Basic usage

:::demo Use `hollow` and `round` to define Badge's style. If you'd like to fix colors on hover use `no-hover`.

```html
<div>
    Account: <tm-badge>Default</tm-badge> / <tm-badge no-hover color="orange">VIP</tm-badge>
    <br><br>
    Subscription: <tm-badge hollow round color="green">Active</tm-badge> / <tm-badge hollow round color="red">Expired</tm-badge>
</div>
```
:::

### Want any icons? Or anything else?

:::demo You may place inside element anything you want. Really.

```html
<div>
    <div class="demo-services">
        Services:
        <tm-badge round hollow no-hover>
            <tm-icon name="wifi"></tm-icon>
            Wi-Fi
        </tm-badge>
        <tm-badge round hollow no-hover>
            <tm-icon name="bath"></tm-icon>
            Bath
        </tm-badge>
        <tm-badge round hollow no-hover>
            <tm-icon name="knife-fork"></tm-icon>
            Kitchet
        </tm-badge>
    </div>
    <hr>
    <div class="demo-payment">
        <tm-badge round hollow no-hover color="red">
            <i class="circle circle-red"></i>
            Waiting for payment
        </tm-badge>
        /
        <tm-badge round hollow no-hover color="green">
            <i class="circle circle-green"></i>
            Paid
        </tm-badge>
    </div>
</div>

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