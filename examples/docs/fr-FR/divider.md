## Divider

Une ligne de séparation entre deux contenus.

### Usage basique

Séparer le texte de deux paragraphes.

:::demo
```html
<template>
  <div>
    <span>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</span>
    <el-divider></el-divider>
    <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
  </div>
</template>
```
:::

### Contenu personnalisé

Vous ajouter du contenu dans la ligne.

:::demo
```html
<template>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
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
| direction      | Régle la direction du séparateur.  | string  |          horizontal / vertical           |    horizontal     |
| content-position      | Personnalise le contenu du séparateur. | String  |  left / right / center  |  center |