<script>
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
        thirdDemo.classList.add('intro-block');
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

Frequently-used button.

### How to use

Basic usage.

::: demo Button component provide 7 types of buttons, is defined by `type` attribute, and default value is `default`.

```html
<el-button>Default Button</el-button>
<el-button type="primary">Primary Button</el-button>
<el-button type="text">Text Button</el-button>
```
:::

### Disabled Button

Disable the button.

:::demo Use `disabled` attribute to determine whether a button is available. It accepts a `Boolean` value.

```html
<el-button :plain="true" :disabled="true">Primary Button</el-button>
<el-button type="primary" :disabled="true">Primary Button</el-button>
<el-button type="text" :disabled="true">Text Button</el-button>
```
:::

### Color Indication

Different color can represent different meaning.

:::demo Use `plain` attribute to create a plain button, it accepts a `Boolean` value. you can assign different `type` to a plain button as mentioned above.
**Note**: When using the plain button, you still can set `type` to `text`, but it makes no difference. A plain button will be styled like a `text button` by default.

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

Use icon to add more meaning to button, you can use icon alone to save some space, or with text together.

:::demo use `icon` attribute to add icon, you can find the icon list in element icon component. You can add icon to the right side of the text with `<i>` tag. Custom icon can be used as well.

```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```
:::

### Button Group

Display as a button group, can be used to group a series of similar operations.

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

Click the button to load data, then the button is in loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<el-button type="primary" :loading="true">Loading</el-button>
```
:::

### Sizes

Except for default size, button component provide three additional sizes, you can choose a suitable one for your case.

:::demo Use attribute `size` to set additional sizes with `large`, `small` or `mine`.

```html
<el-button type="primary" size="large">Large Button</el-button>
<el-button type="primary">Default Button</el-button>
<el-button type="primary" size="small">Small Button</el-button>
<el-button type="primary" size="mini">Extra Small Button</el-button>
```
:::

### Attributes
| Attribute      | Description    | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   large,small,mini            |    —     |
| type     | button type   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | determine whether it's a plain button   | Boolean    | true,false | false   |
| disabled  | disable the button    | boolean   | true, false   | false   |
| icon  | button icon, accepts an icon name in the icon library | string   |  —  |  —  |
| native-type | native button type | string | button,submit,reset | button |