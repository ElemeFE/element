## Breadcrumb (Aide à la navigation)

Affiche l'emplacement de la page en cours, facilitant ainsi le retour du navigateur.

### Utilisation de base

::: demo Dans `el-breadcrumb`, chaque` el-breadcrumb-item` est une balise qui représente chaque niveau à partir de la page d'accueil. Ce composant a un attribut `String` `séparator`, et il détermine le séparateur. Sa valeur par défaut est '/'.
```html
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">page d'accueil</el-breadcrumb-item>
  <el-breadcrumb-item>gestion des promotions</el-breadcrumb-item>
  <el-breadcrumb-item>liste des promotions</el-breadcrumb-item>
  <el-breadcrumb-item>détail de la promotion</el-breadcrumb-item>
</el-breadcrumb>
```
:::

### Breadcrumb attributs
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | caractère de séparation | string | — | / |

### Breadcrumb Item attributs
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Cible du lien, même que `to` de` vue-router` | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'historique | boolean | — | false |
