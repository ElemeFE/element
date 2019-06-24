## Backtop

Un bouton pour revenir en haut de la page

### Basic usage

Scrollez en bas de la page pour voir le bouton en bas à droite.
:::demo

```html
<template>
  Scrollez en bas de la page pour voir le bouton en bas à droite.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</template>
```

:::

### Customizations

La zone d'affichage est de 40px \* 40px.
:::demo

```html
<template>
  Scrollez en bas de la page pour voir le bouton en bas à droite.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
</template>
```

:::

### Attributes

| Attribut          | Description                                                         | Type            | Valeurs acceptées | Défaut |
| ----------------- | ------------------------------------------------------------------- | --------------- | --------------- | ------- |
| target            | La cible pour déclencher le scroll                                  | string          |                 |         |
| visibility-height | Le bouton ne s'affichera pas tant que la hauteur de défilement n'aura pas atteint cette valeur. |  number |    | 200     |
| right             | La distance du bord droit                                           | number |                 | 40      |
| bottom            | La distance du bord gauche                                          | number |                 | 40      |

### Events

| Event Name | Description         | Parameters  |
| ---------- | ------------------- | ----------- |
| click      | Se déclenche quand l'utilisateur clique | click event |
