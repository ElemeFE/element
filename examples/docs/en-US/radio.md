<script>
  module.exports = {
    data() {
      return {
        radio: '1',
        radio1: 'selected and disabled',
        radio2: 3,
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York',
        radio6: 'New York',
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1',
        radio11: 'calendar',
        radioCustom: 'a',
        customData: 'b',
        customData2: 'a'
      };
    }
  };
</script>

## Radio

Single selection among multiple options.

### Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.
```html
<template>
  <tm-radio v-model="radio" label="1">Option A</tm-radio>
  <tm-radio v-model="radio" label="2">Option B</tm-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::


### Custom content usage

:::demo
```html
<template>
  <tm-radio-group v-model="radioCustom" style="width: 200px">
    <tm-radio-button :custom-data="customData" :label="customData" class="tm-radio-button--separate">
      <template slot-scope="props">
        <span>{{ props.item }}</span><span>{{ props.item }}</span>
      </template>
    </tm-radio-button>
    <tm-radio-button :custom-data="customData2" :label="customData2" class="tm-radio-button--separate">
      <template slot-scope="props">
        <span>{{ props.item }}</span><span>{{ props.item }}</span>
      </template>
    </tm-radio-button>
  </tm-radio-group>  
</template>

<script>
  export default {
    data () {
      return {
        customData: {
          a: 'a',
          b: 'b'
        },
        customData2: {
          a: 'a2',
          b: 'b2'
        }
      };
    }
  }
</script>
```
:::

### Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.
```html
<template>
  <tm-radio disabled v-model="radio1" label="disabled">Option A</tm-radio>
  <tm-radio disabled v-model="radio1" label="selected and disabled">Option B</tm-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Radio button group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `tm-radio-group` with `tm-radio` to display a radio group. Bind a variable with `v-model` of `tm-radio-group` element and set label value in `tm-radio`. It also provides `change` event with the current value as its parameter.

```html
<tm-radio-group v-model="radio2">
  <tm-radio :label="3">Option A</tm-radio>
  <tm-radio :label="6">Option B</tm-radio>
  <tm-radio :label="9">Option C</tm-radio>
</tm-radio-group>

<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```
:::

### Button style

Radio with button styles and with icons.

:::demo You just need to change `tm-radio` element into `tm-radio-button` element. We also provide `size` attribute.
```html
<template>
  <div>
    <tm-radio-group v-model="radio11">
      <tm-radio-button theme="primary" label="calendar"><tm-icon name="calendar"></tm-icon></tm-radio-button>
      <tm-radio-button theme="primary" label="item-list"><tm-icon name="item-list"></tm-icon></tm-radio-button>
    </tm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tm-radio-group v-model="radio3">
      <tm-radio-button label="New York"></tm-radio-button>
      <tm-radio-button label="Washington"></tm-radio-button>
      <tm-radio-button label="Los Angeles"></tm-radio-button>
      <tm-radio-button label="Chicago"></tm-radio-button>
    </tm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tm-radio-group v-model="radio4" size="medium">
      <tm-radio-button label="New York" ></tm-radio-button>
      <tm-radio-button label="Washington"></tm-radio-button>
      <tm-radio-button label="Los Angeles"></tm-radio-button>
      <tm-radio-button label="Chicago"></tm-radio-button>
    </tm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tm-radio-group v-model="radio5" size="small">
      <tm-radio-button label="New York"></tm-radio-button>
      <tm-radio-button label="Washington" disabled ></tm-radio-button>
      <tm-radio-button label="Los Angeles"></tm-radio-button>
      <tm-radio-button label="Chicago"></tm-radio-button>
    </tm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tm-radio-group v-model="radio6" disabled size="mini">
      <tm-radio-button label="New York"></tm-radio-button>
      <tm-radio-button label="Washington"></tm-radio-button>
      <tm-radio-button label="Los Angeles"></tm-radio-button>
      <tm-radio-button label="Chicago"></tm-radio-button>
    </tm-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York',
        radio6: 'New York',
        radio11: 'calendar',
      };
    }
  }
</script>
```
:::

### With borders

:::demo The `border` attribute adds a border to Radios.
```html
<template>
  <div>
    <tm-radio v-model="radio7" label="1" border>Option A</tm-radio>
    <tm-radio v-model="radio7" label="2" border>Option B</tm-radio>
  </div>
  <div style="margin-top: 20px">
    <tm-radio v-model="radio8" label="1" border size="medium">Option A</tm-radio>
    <tm-radio v-model="radio8" label="2" border size="medium">Option B</tm-radio>
  </div>
  <div style="margin-top: 20px">
    <tm-radio-group v-model="radio9" size="small">
      <tm-radio label="1" border>Option A</tm-radio>
      <tm-radio label="2" border disabled>Option B</tm-radio>
    </tm-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tm-radio-group v-model="radio10" size="mini" disabled>
      <tm-radio label="1" border>Option A</tm-radio>
      <tm-radio label="2" border>Option B</tm-radio>
    </tm-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      };
    }
  }
</script>
```
:::

### Radio Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of Radio | string / number / boolean | — | —
disabled | whether Radio is disabled | boolean | — | false
border  | whether to add a border around Radio  | boolean   | — | false
size  | size of the Radio, only works when `border` is true  | string  | medium / small / mini | —
name | native 'name' attribute | string    |      —         |     —

### Radio Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-group Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
size | the size of radio buttons or bordered radios | string | medium / small / mini | —
disabled  | whether the nesting radios are disabled | boolean   | — | false
text-color | font color when button is active | string   | — | #ffffff   |
fill  | border and background color when button is active | string   | — | #409EFF   |

### Radio-group Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-button Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of radio | string / number | — | —
disabled | whether radio is disabled | boolean | — | false
name | native 'name' attribute | string    |      —         |     —
customData | custom data to pass into slot | any    |      —         |     —
