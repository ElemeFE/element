## Popover

### Usage

Similaire à Tooltip, Popover est aussi construit avec `Vue-popper`. Certains attributs sont donc les mêmes, vous pourrez vous référer à la documentation de Tooltip pour certains d'entre eux.

:::demo L'attribut `trigger` détermine comment le popover se déclenche: `hover`, `click`, `focus` ou `manual`. Concernant l'élément déclencheur, vous pouvez l'écrire de deux manières: en utilisant le slot `slot="reference"` ou bien la directive `v-popover` avec `ref` égal à popover.

```html
<template>
  <el-popover
    placement="top-start"
    title="Title"
    width="200"
    trigger="hover"
    content="this is content, this is content, this is content">
    <el-button slot="reference">S'active au passage du curseur</el-button>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">S'active en cliquant</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    width="200"
    trigger="focus"
    content="this is content, this is content, this is content">
  </el-popover>
  <el-button v-popover:popover>S'active au focus</el-button>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">S'active manuellement</el-button>
  </el-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
```
:::

### Informations imbriquées

D'autres composants peuvent s'imbriquer dans un popover.

:::demo Remplacez `content` par un `slot`.

```html
<el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Cliquez pour activer</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
```
:::

### Opérations imbriquées

Vous pouvez aussi imbriquer des opérations. Procéder ainsi est plus léger que d'utiliser Dialog.

:::demo
```html
<el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>Voulez-vous vraiment supprimer ceci?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">Annuler</el-button>
    <el-button type="primary" size="mini" @click="visible = false">Confirmer</el-button>
  </div>
  <el-button slot="reference">Supprimer</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
</script>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | Comment le popover se déclenche. | string  | click/focus/hover/manual |    click    |
| title | Titre du popover. | string | — | — |
| content | Contenu du popover, peut être remplacé par un `slot` | string | — | — |
| width | Largeur du popover. | string, number  | — | Min width 150px |
| placement | Emplacement du popover. | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
| disabled | Si le popover est désactivé. | boolean | — |  false |
| value / v-model | Si le popover est visible. | Boolean | — |  false |
| offset | Décalage du popover. | number | — |  0 |
| transition | Animation de transition du popover. | string | — | el-fade-in-linear |
| visible-arrow | Si une flèche doit être affichée ou non. Pour plus d'informations, référez-vous à [Vue-popper](https://github.com/element-component/vue-popper). | boolean | — | true |
| popper-options | Paramètres pour [popper.js](https://popper.js.org/docs/v2/). | object | Référez-vous à [popper.js](https://popper.js.org/docs/v2/). | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class | Classe du popover. | string | — | — |
| open-delay | Délai d'affichage, lorsque `trigger` est 'hover', en millisecondes. | number | — | — |
| close-delay | delay before disappearing when `trigger` is hover, in milliseconds | number | — | 200 |
| tabindex   | [tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) de Popover | number | — | 0 |

### Slot

| Nom | Description |
| --- | --- |
| — | Contenu du popover. |
| reference | Element HTML qui déclenche le popover. |

### Évènements

| Nom | Description | Paramètres |
|---------|--------|---------|
| show | Se déclenche quand le popover s'affiche. | — |
| after-enter | Se déclenche quand la transition d'entrée se termine. | — |
| hide | Se déclenche quand le popover disparaît. | — |
| after-leave | Se déclenche quand la transition de sortie se termine. | — |
