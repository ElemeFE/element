## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <el-link href="https://element.eleme.io" target="_blank">défaut</el-link>
  <el-link type="primary">primaire</el-link>
  <el-link type="success">succès</el-link>
  <el-link type="warning">avertissement</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <el-link disabled>défaut</el-link>
  <el-link type="primary" disabled>primaire</el-link>
  <el-link type="success" disabled>succès</el-link>
  <el-link type="warning" disabled>avertissement</el-link>
  <el-link type="danger" disabled>danger</el-link>
  <el-link type="info" disabled>info</el-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <el-link :underline="false">non souligné</el-link>
  <el-link>Souligné</el-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <el-link icon="el-icon-edit">Éditer</el-link>
  <el-link>Vérifier<i class="el-icon-view el-icon--right"></i> </el-link>
</div>
```

:::

### Attributs

| Attribut  | Description                     | Type    | Options                                     | Défaut  |
| --------- | ------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type du lien.                   | string  | primary / success / warning / danger / info | défaut  |
| underline | Si le composant est souligné.   | boolean | —                                           | true    |
| disabled  | Si le composant est désactivé.  | boolean | —                                           | false   |
| href      | Identique au `href` natif.      | string  | —                                           | -       |
| icon      | Nom de classe de l'icône.       | string  | —                                           | -       |
