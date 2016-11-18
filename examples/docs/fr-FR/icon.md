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

## Icon (Icône)

Element fournit un ensemble d'icônes communes.

### Utilisation de base

Il suffit d'attribuer le nom de la classe `el-icon-iconName`.

::: demo
```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="search">Rechercher</el-button>
```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in icons">
    <span>
      <i :class="'el-icon-' + name"></i>
      {{'el-icon-' + name}}
    </span>
  </li>
</ul>
