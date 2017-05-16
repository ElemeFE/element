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

## Icon 

Element provides a set of common icons.

### Basic usage

Just assign the class name to `el-icon-iconName`.

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="search">Search</el-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      {{'el-icon-' + name}}
    </span>
  </li>
</ul>