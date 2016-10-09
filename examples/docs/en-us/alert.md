
## Alert

Provide important alert messages for users in the webpages.

### How to use

Alert components are non-overlay elements in the page which will not disappear automatically.


::: demo Alert components provide 4 types of themes，defined by `type`，default value is `info`.

```html
<template>
  <el-alert
    title="success alert"
    type="success">
  </el-alert>
  <el-alert
    title="info alert"
    type="info">
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning">
  </el-alert>
  <el-alert
    title="error alert"
    type="error">
  </el-alert>
</template>
```
:::

### Customizable Closable Button

Customizable Closable Buttons with texts or other symbols.

::: demo In the Alert components, you can set if the alert components can be closed or not，closing text and closing callbacks. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and default is `true`. You can set `close-text` attribute to change the right hand side closing symbol. Be careful that `close-text` must be String. Set `close` event to fire a callback.

```html
<template>
  <el-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </el-alert>
  <el-alert
    title="callback alert"
    type="warning"
    @close="hello">
  </el-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
```
:::

### with icon

To improve readability when trying to show some kind of states.

::: demo By setting `show-icon` attribute to display Alert icon, and this will show your intent to users more effectively.

```html
<template>
  <el-alert
    title="success alert"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    show-icon>
  </el-alert>
</template>
```
:::

### With description

Description includes a title and content to show a more detail warning.

::: demo Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.

```html
<template>
  <el-alert
    title="with description"
    type="success"
    description="This is a description.">
  </el-alert>
</template>
```
:::

### With icon and description

::: demo At last, this is an example has both icon and description.

```html
<template>
  <el-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </el-alert>
</template>
```
:::

### Attributes
| Attribute      | Description          | Type      | Optional Value                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | title **REQUIRED** | string | — | — |
| type | component type | string | success/warning/info/error | info |
| description | supportive text | string | — | — |
| closable | if closable or not | boolean | — | true |
| close-text | add customized text | string | — | — |
| show-icon | if show closing icon | boolean | — | false |


### Events
| Event Name | Description | Argument |
|---------- |-------- |---------- |
| close | callback function when closing alert | — |
