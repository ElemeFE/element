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
    .tm-icon {
      width: 30px;
      height: 30px;
      display: block;
      margin: 0 auto 10px;
    }
    svg {
        width: 26px;
        height: 26px;
    }
    .icon-name {
      display: block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
      font-size: 14px;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

## Icon

TM-Ui provides a set of common icons. It uses a svg-sprite so you are able to change color of it through CSS property `fill`.

### Basic usage

Just use a `tm-icon` component with `name` parameter.

:::demo

```html
Oh my god, it's an airplane - <tm-icon name="airplane"></tm-icon> !
```
:::

### Icons

Here is a list of our default SVG icons.
<br>If it isn't enough you can add some yours at `packages/theme-chalk/src/icons/`

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <tm-icon :name="name"></tm-icon>
      <span class="icon-name">{{name}}</span>
    </span>
  </li>
</ul>
