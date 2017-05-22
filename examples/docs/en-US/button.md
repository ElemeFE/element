<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let thirdDemo = demos[2];
        addClass(thirdDemo, 'intro-block');
      });
    }
  }
</script>
<style>
  .demo-box.demo-button {
    .el-row {
      margin-bottom: 10px;
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      margin-bottom: 20px;

      .el-button + .el-button {
        margin-left: 0;
      }

      & + .el-button-group {
        margin-left: 10px;
      }
    }
  }

  .demo-box.demo-button .intro-block {
    padding: 0;
  }

  .demo-button .intro-block .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-button .intro-block .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-button .intro-block .wrapper {
    float: right;
    margin-right: 20px;
  }
</style>

## Button

Commonly used button.

### Basic usage

::: demo Button provides 7 themes defined by the `type` attribute.

```html
<el-button>Default Button</el-button>
<el-button type="primary">Primary Button</el-button>
<el-button type="text">Text Button</el-button>
```
:::

### Disabled Button

The `disableds` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<el-button :plain="true" :disabled="true">Default Button</el-button>
<el-button type="primary" disabled>Primary Button</el-button>
<el-button type="text" disabled>Text Button</el-button>
```
:::

### Color Indication

Different colors represent different meanings.

:::demo Use `plain` attribute to create a plain button, and it accepts a `Boolean` value. You can assign different `type` to a plain button as mentioned above. **Note**: When using the plain button, you still can set `type` to `text`, but it makes no difference. A plain button will be styled like a `text button` by default.
```html
<div class="block">
  <span class="demonstration">Default</span>
  <span class="wrapper">
    <el-button type="success">Success</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button type="info">Info</el-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">Hover to display color</span>
  <span class="wrapper">
    <el-button :plain="true" type="success">Success</el-button>
    <el-button :plain="true" type="warning">Warning</el-button>
    <el-button :plain="true" type="danger">Danger</el-button>
    <el-button :plain="true" type="info">Info</el-button>
  </span>
</div>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or with text together.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<el-button-group>` to group your buttons.

```html
<el-button-group>
  <el-button type="primary" icon="arrow-left">Previous Page</el-button>
  <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<el-button type="primary" :loading="true">Loading</el-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `large`, `small` or `mini`.

```html
<el-button type="primary" size="large">Large Button</el-button>
<el-button type="primary">Default Button</el-button>
<el-button type="primary" size="small">Small Button</el-button>
<el-button type="primary" size="mini">Mini Button</el-button>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   large/small/mini            |    —     |
| type     | button type   | string    |   primary/success/warning/danger/info/text |     —    |
| plain     | determine whether it's a plain button   | Boolean    | — | false   |
| loading   | determine whether it's loading   | Boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | button icon, accepts an icon name of Element icon component | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button/submit/reset | button |