## switch

Switch component is used for switching the component between two opposing state. 

### How to use

Use `v-model` directly to bind a **boolean** value to this component and control the opposing states. Additionally you can add `on-text` or `off-text` attribute to show the message when the component is `on` or `off`, respectively. The `on-color` and `off-color` attribute decides the backgroundcolor of this component in different states.

:::demo

```html
<el-switch
  v-model="value1"
  on-text=""
  off-text="">
</el-switch>
<el-switch
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>
```

:::

### disabled

`disabled` attribute means whether the component need to be disabled or not. 

:::demo

```html
<el-switch
  v-model="value3"
  on-text=""
  off-text=""
  disabled>
</el-switch>
<el-switch
  v-model="value3"
  disabled>
</el-switch>
```

:::

### Attributes

Attribute | Description | Type | Options | Default
----| ----| ----| ----|----
disbaled | Disable the component or not | boolean | --- | false
width| The width of component | number | --- | 58 (with text) / 46 (no text)
on-close-icon| If component is in 'on' state, set the classes of icon | string | ---| ---
off-close-icon|If component is in 'off' state, set the classes of icon| string | ---| ---
on-text | If component is in 'on' state, set the text of component | string | --- | ON
off-text | If component is in 'off' state, set the text of component | string | --- | OFF
on-color | If component is in 'on' state, set the background color of component | string | --- | <span style="background-color: #20A0FF">#20A0FF</span>
off-color | If component is in 'off' state, set the background color of component | string | --- | <span style="background-color: #C0CCDA">#C0CCDA</span>
name| The name of component | string | --- | ---

### Events

Event | Description | Callback Parameter
---- | ----| ----
change | Change the state and then trigger the callback function | --- 

