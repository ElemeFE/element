## Layout

Vous pouvez créer une mise en page facilement et rapidement grâce à une base de 24 colonnes.

### Mise en page basique

Créez une grille de mise en page basique grâce aux colonnes.

:::demo Grâce à `row` et `col`, vous pouvez arranger la mise en page en utilisant l'attribut `span`.
```html
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### Espacement

L'espacement entre colonnes est configurable.

:::demo Utilisez l'attribut `gutter` dans el-row pour spécifier l'espacement entre colonnes. La valeur par défaut est 0.
```html
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### Mise en page complexe

Vous pouvez former une mise en page complexe en combinant les systèmes de colonnes 1 / 24 comme vous le souhaitez.

:::demo
```html
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### Décalage des colonnes

Vous pouvez spécifier un décalage pour les colonnes.

:::demo Utiliser l'attribut `offset` pour régler le décalage.

```html
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### Alignement

Utilisez la mise en page flex pour rendre l'alignement des colonnes flexible.

:::demo Vous pouvez activer la mise en page flex en réglant l'attribut `type` à 'flex', puis en configurant la disposition des éléments enfants avec l'attribut `justify` définit à 'start', 'center', 'end', 'space-between' ou 'space-around'.
```html
<el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="end">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### Mise en page responsive

Se basant sur le design responsive de Bootstrap, il existe cinq breakpoints déjà définit: xs, sm, md, lg and xl.

:::demo
```html
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```
:::

### Classes pour cacher certains éléments

Element fournit également une série de classes pour cacher des éléments dans certaines circonstances. Ces classes peuvent être ajoutées à n'importe quel élément du DOM ou composant. Vous devrez importer le fichier CSS suivant pour pouvoir les utiliser:

```js
import 'element-ui/lib/theme-chalk/display.css';
```

Ces classes sont:
- `hidden-xs-only` - disparaît sur les très petits viewports uniquement
- `hidden-sm-only` - disparaît sur les petits viewports uniquement
- `hidden-sm-and-down` - disparaît sur les petits viewports et plus petits
- `hidden-sm-and-up` - disparaît sur les petits viewports et plus grand
- `hidden-md-only` - disparaît sur les viewports moyens uniquement
- `hidden-md-and-down` - disparaît sur les viewports moyens et plus petits
- `hidden-md-and-up` - disparaît sur les viewports moyens et plus grand
- `hidden-lg-only` - disparaît sur les viewports larges uniquement
- `hidden-lg-and-down` - disparaît sur les viewports larges et plus petits
- `hidden-lg-and-up` - disparaît sur les viewports larges et plus grand
- `hidden-xl-only` - disparaît sur les viewports très larges uniquement

### Attributs des lignes

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | Espacement de la grille. | number | — | 0 |
| type | Mode de mise en page. Vous pouvez utiliser flex, qui fonctionne sur les navigateurs modernes. | string | — | — |
| justify | Alignement horizontal pour le mise en page flex. | string | start/end/center/space-around/space-between | start |
| align | Alignement vertical pour la mise en page flex. | string | top/middle/bottom | — |
| tag | Élément de tag personnalisé. | string | * | div |

### Attributs des colonnes

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | Nombre de colonnes sur lesquelles l'élément s'étend. | number | — | 24 |
| offset | Nombre d'espacements sur la gauche de l'élément. | number | — | 0 |
| push |  Nombre de colonnes dont l'élément se déplace vers la droite. | number | — | 0 |
| pull |  Nombre de colonnes dont l'élément se déplace vers la gauche. | number | — | 0 |
| xs | `<768px` Nombre de colonnes responsives ou bien objet de propriétés de colonne. | number/object (e.g. {span: 4, offset: 4}) | — | — |
| sm | `≥768px` Nombre de colonnes responsives ou bien objet de propriétés de colonne. | number/object (e.g. {span: 4, offset: 4}) | — | — |
| md | `≥992px` Nombre de colonnes responsives ou bien objet de propriétés de colonne. | number/object (e.g. {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` Nombre de colonnes responsives ou bien objet de propriétés de colonne. | number/object (e.g. {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` Nombre de colonnes responsives ou bien objet de propriétés de colonne. | number/object (e.g. {span: 4, offset: 4}) | — | — |
| tag | Élément de tag personnalisé. | string | * | div |
