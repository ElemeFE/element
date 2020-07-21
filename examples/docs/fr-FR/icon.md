## Icônes

Element fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `el-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">Chercher</el-button>

```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
