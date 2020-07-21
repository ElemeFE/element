## Divider

Une ligne de séparation entre deux contenus.

### Usage basique

Séparer le texte de deux paragraphes.

:::demo
```html
<template>
  <div>
    <span>Je suis assis à ma fenêtre ce matin où le monde, tel un passant, s’arrête un instant, me fait signe de la tête et part.</span>
    <el-divider></el-divider>
    <span>Les petites pensées sont le bruissement des feuilles; ils ont leur murmure de joie dans mon esprit.</span>
  </div>
</template>
```
:::

### Contenu personnalisé

Vous ajouter du contenu dans la ligne de séparation.

:::demo
```html
<template>
  <div>
    <span>Vous ne voyez pas ce que vous êtes, ce que vous voyez est votre ombre.</span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <span>Je ne peux pas choisir le meilleur. Le meilleur me choisit.</span>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <span>Mes souhaits sont des imbéciles, ils crient à travers ta chanson, mon Maître. Laisse-moi mais écoute.</span>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
  </div>
</template>
```
:::

### Séparation verticale

:::demo
```html
<template>
  <div>
    <span>Pluie</span>
    <el-divider direction="vertical"></el-divider>
    <span>Maison</span>
    <el-divider direction="vertical"></el-divider>
    <span>Herbe</span>
  </div>
</template>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| direction      | Règle la direction du séparateur.  | string  |          horizontal / vertical           |    horizontal     |
| content-position      | Personnalise le contenu du séparateur. | String  |  left / right / center  |  center |
