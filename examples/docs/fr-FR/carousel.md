## Carousel

Affiche en boucle une série d'images ou de textes dans un espace limité.

### Usage

:::demo Utilisez `el-carousel` avec `el-carousel-item`, et vous obtiendrez un carrousel. Le contenu de chaque slide est complètement personnalisable, il vous suffit juste de le placer à l'intérieur de la balise `el-carousel-item`. Par défaut le carrousel défile quand la souris passe sur un indicateur. Réglez `trigger` sur `click` et le carrousel défilera uniquement quand vous cliquerez sur l'indicateur.
```html
<template>
  <div class="block">
    <span class="demonstration">Défile quand la souris passe sur l'indicateur (défaut)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Défile quand on clique sur l'indicateur</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Indicateurs

Les indicateurs peuvent être affichés en dehors du carrousel.

:::demo L'attribut `indicator-position` détermine où les indicateurs sont localisés. Par défaut ils se trouvent à l'intérieur du carrousel, régler `indicator-position` sur `outside` les affichera à l'extérieur; régler `indicator-position` sur `none` les cachera totalement.
```html
<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Flèches

Vous pouvez définir quand les flèches doivent apparaître.

:::demo L'attribut `arrow` détermine quand les flèches sont affichées. Par défaut elles apparaissent quand la souris passe sur le carrousel. Réglez `arrow` sur `always` ou `never` affiche ou cache les flèches de manière permanente.
```html
<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Mode carte

Quand la page est suffisamment large mais avec une hauteur limitée, vous pouvez activer le mode carte.

:::demo Réglez `type` sur `card` pour activer le mode carte. Hormis l'apparence, la principale différence par rapport au mode commun est que cliquer sur une des slides se trouvant de chaque coté fait directement défiler le carrousel.
```html
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

Par défaut, `direction` est `horizontal`. Vous pouvez faire en sorte que le défilement soit vertical en mettant `direction` à `vertical`.

:::demo
```html
<template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Attributs du Carrousel
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du carrousel. | string | — | — |
| initial-index | Index de la slide initiale (commence à 0). | number | — | 0 |
| trigger | Comment les indicateurs sont déclenchés | string | hover/click | hover |
| autoplay | Si le carrousel défile automatiquement | boolean | — | true |
| interval | Intervalle pour le défilement automatique, en millisecondes. | number | — | 3000 |
| indicator-position | Position des indicateurs. | string | outside/none | — |
| arrow | Détermine quand les flèches sont affichées. | string | always/hover/never | hover |
| type | Type du carrousel. | string | card | — |
| loop | Affiche les éléments en boucle. | boolean | - | true |
| direction | Détermine la direction du défilement. | string | horizontal/vertical | horizontal |

### Évènements du Carrousel
| Nom | Description | Paramètres |
|---------|---------|---------|
| change | Se déclenche quand la slide active défile. | Index de la nouvelle slide, index de l'ancienne slide |

### Méthodes du Carrousel
| Mathode | Description | Paramètres |
|---------- |-------------- | -- |
| setActiveItem | Défile manuellement vers une slide. | index de la slide d'arrivée, à partir de 0; ou bien le `name` du `el-carousel-item` correspondant|
| prev | Défile vers la slide précédente. | — |
| next | Défile vers la slide suivante. | — |

### Attributs du Carrousel-Item
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | Nom de l'item, peut être utilisé dans `setActiveItem`. | string | — | — |
| label | Texte affiché au niveau de l'indicateur correspondant.| string | — | — |
