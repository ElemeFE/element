<style>
.tm-price-info {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
## Price Info

Price Info used to display the sum and part sum. See examples to understand it better.

### Basic usage

:::demo Use `type` [`paid`, `not-paid`, `part-paid`] to define Info Price's style.

```html
<div>
  <tm-price-info :sum="10334.92" currency="rub" size="tiny"></tm-price-info>
  <tm-price-info :sum="11731.11" currency="rub" size="extra-small"></tm-price-info>
  <tm-price-info :sum="12560.10" type="paid" currency="rub" size="small" taxes-info></tm-price-info>
  <tm-price-info :sum="22560.56" type="paid" currency="usd" size="medium" taxes-info></tm-price-info>
  <tm-price-info :sum="32560.23" type="paid" currency="eur" size="large" taxes-info></tm-price-info>
  <tm-price-info :sum="42560.00" type="not-paid" currency="rub" size="large" taxes-info></tm-price-info>
  <tm-price-info :sum="52560.00" :part-sum="17560.00" type="part-paid" currency="rub" size="large" taxes-info></tm-price-info>
</div>
<div>
  <tm-price-info :sum="12312.30" hide-currency></tm-price-info>
  <tm-price-info :sum="12560.10" is-start-price></tm-price-info>
  <tm-price-info :sum="12312.21" no-dash></tm-price-info>
</div>
```
:::


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| sum     | value sum  | string    |   - |     —    |
| part-sum     |  value part sum | string    |   - |     —    |
| type     | type price info  | string    |   paid-no-dash / paid / not-paid / part-paid |     —    |
| currency     | type of currency  | string    |   rub / usd / eur |     —    |
| size     | size price info  | string    |   tiny / extra-small / small / medium / large |     —    |
| taxes-info     | taxes on/off  | Boolean    |   false / true |     false    |
| is-start-price     | Shows 'from' word and defined that price isn't fixed  | Boolean    |   false / true |     false    |
| starts-prefix     | Defines the prefix word before price | String    |   -  |    'от'    |
| hide-currency     | Hides currency if true | Boolean | false / true |    false    |
| no-dash     | Remove dashed border if true | Boolean | false / true |    false    |