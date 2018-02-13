<script>
  var iconList = require('examples/icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>

<style>
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .page-component .content > ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    @utils-vertical-center;

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      color: #99a9bf;
    }
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `tm-icon-iconName`.

:::demo

```html
<i class="tm-icon-edit"></i>
<i class="tm-icon-share"></i>
<i class="tm-icon-delete"></i>
<tm-button type="primary" icon="tm-icon-search">Search</tm-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <tm-icon :name="name"></tm-icon>
      <span class="icon-name">{{name}}</span>
    </span>
  </li>
</ul>
