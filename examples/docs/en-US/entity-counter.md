## Entity Counter

### Basic usage

:::demo

```html
<tm-entity-counter placeholder="Без детей (до 12 лет)" :declination="['взрослый', 'взрослых', 'взрослых']"></tm-entity-counter>
```

:::

### Entity Counter Attributes
| Attribute | Description | Type | Options | Default |
|---------- |-------- |---------- |-------------  |-------- |
| declination | array of declination label presentation | String[] | — | — |
| placeholder | dafault label for 0 value | String | — | — |
| min | minimum possible value | Integer | — | 0 |
| max | maximum possible value | Integer | — | 0 |
