## Regex

Add regex mask for inputs needed.

### Regex inside a container

Use regex in a container (such as a FromItem or Form).

:::demo Element provides two ways to invoke Loading: directive and service. For the custom directive `v-loading`, you just need to bind a `boolean` value to it. By default, the loading mask will append to the element where the directive is used. Adding the `body` modifier makes the mask append to the body element.

```html
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Phone number" v-regex="'^\\+(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$'">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
  <el-form-item label="Email">
    <el-input v-model="form.email" v-regex="/[a-zA-Z0-9_.+-]+(@example\.com\s*)/g"></el-input>
    <!--<el-input v-model="form.email" v-regex="'^[a-zA-Z0-9_.+-]+(@example\.com)$'"></el-input>-->
  </el-form-item>
  <el-form-item label="Only symbols">
    <el-input v-model="form.custom" v-regex='/[!@#$%^&*(),.?":{}|<>]+/g'></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        form: {
          phone: '',
          email: '',
          symbols: ''
        }
      }
    }
  }
</script>
```
:::

### Customization

You can customize regex masks in one container more than one inputs.

:::demo Add attribute `element-loading-text` to the element on which `v-loading` is bound, and its value will be displayed under the spinner. Similarly, `element-loading-spinner` and `element-loading-background` are for customizing loading spinner class name and background color.
```html
<el-form ref="form" :model="form" label-width="120px"
  v-regex="masks">
  <el-form-item label="Phone number">
    <el-input name="phone" v-model="form.phone"></el-input>
  </el-form-item>
  <el-form-item label="Email">
    <el-input name="email" v-model="form.email"></el-input>
    <!--<el-input v-model="form.email" v-regex="'^[a-zA-Z0-9_.+-]+(@example\.com)$'"></el-input>-->
  </el-form-item>
  <el-form-item label="Only symbols">
    <el-input name="symbols" v-model="form.custom"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        form: {
          phone: '',
          email: '',
          symbols: ''
        },
        masks: {
          phone: '^\\+(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$',
          email: /[a-zA-Z0-9_.+-]+(@example\.com\s*)/g,
          symbols: /[!@#$%^&*(),.?":{}|<>]+/g
        }
      }
    }
  }
</script>
```
:::

### Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node | object/string | — | document.body |
| body | same as the `body` modifier of `v-loading` | boolean | — | false |
| fullscreen | same as the `fullscreen` modifier of `v-loading` | boolean | — | true |
| lock | same as the `lock` modifier of `v-loading` | boolean | — | false |
| text | loading text that displays under the spinner | string | — | — |
| spinner | class name of the custom spinner | string | — | — |
| background | background color of the mask | string | — | — |
| customClass | custom class name for Loading | string | — | — |