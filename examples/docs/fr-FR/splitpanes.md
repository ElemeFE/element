## Split Panes

Ce composant divise un espace en volets.

### Usage

En définissant `pane-size` pour déterminer la taille en pourcentage d'un volet. `pane-max` définit la taille maximale en pourcentage qui peut être ajustée en faisant glisser le séparateur. `pane-min` définit la taille minimale en pourcentage qui peut être ajustée en faisant glisser le séparateur.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Diviser l'espace vertical

Ajoutez `is-vertical` pour diviser un espace vertical.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes" is-vertical>
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::



### Combinaisons

Les volets divisés imbriqués peuvent être utilisés pour combiner des volets divisés verticaux et horizontaux.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20">
      <span>1</span>
    </el-pane>
    <el-pane>
      <el-splitpanes is-vertical>
        <el-pane>
          <span>2</span>
        </el-pane>
        <el-pane>
          <span>3</span>
        </el-pane>
        <el-pane>
          <span>4</span>
        </el-pane>
      </el-splitpanes>
    </el-pane>
    <el-pane>
      <span>5</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Attributs des Splitpanes
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| is-expansive  | si c'est vrai, les séparateurs pourraient pousser d'autres volets  | Boolean   |  —  |  true |
| is-vertical  | si vrai, l'espace est divisé verticalement  | Boolean   |  —  |  false |
| has-leading-splitter  | si vrai, un séparateur de tête s'afficherait pour un double clic pour maximiser le premier volet  | Boolean   |  —  |  false |
| has-dblclick-expansion  |  si vrai, double-cliquez sur un séparateur pour maximiser le volet | Boolean   |  —  |  true |

### Attributs du Pane
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| pane-size  | la taille en pourcentage d'un volet | Number   |  —  | - |
| pane-max  | taille maximale en pourcentage qui peut être ajustée en faisant glisser le séparateur | Number   | -  |     100    |
| pane-min  | pourcentage minimum pouvant être ajusté en faisant glisser le séparateur  | Number   | — |  0  |


### Évènements
| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| ready | événement après que les volets sont prêts | — |
| resize | déclencheurs d'événements si les volets sont redimensionnés  | — |
| resized | l'événement se déclenche si le redimensionnement des volets est terminé | — |
| pane-maximize | l'événement se déclenche si un volet est agrandi en double-cliquant sur un séparateur | — |
| pane-click | déclencheur d'événement si un volet est cliqué | — |
| splitter-click | l'événement se déclenche en cas de clic sur un séparateur | — |
