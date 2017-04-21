<script>
  module.exports = {
    data() {
      return {
        checkList: ['sélectionné et désactivé','Option A'],
        // checkList2: ['Option A'],
        checked: true,
        checked1: false,
        checked2: true,
        isValid: 'valid'
      };
    }
  };
</script>

## Checkbox (Case à cocher)

Un groupe d'options pour des choix multiples.

### Utilisation de base

Le composant `checkbox` peut être utilisée seul pour basculer entre deux états.

::: demo Définissez `v-model` (variable 'bindée') dans `el-checkbox`. La valeur par défaut est un `Boolean` pour une seule `checkbox`, et elle devient `true` lorsqu'elle est sélectionnée.
```html
<template>
  <!-- `checked` doit être true ou false -->
  <el-checkbox v-model="checked">Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

## État désactivé

État désactivé pour les `checkbox`.

::: demo Définissez l'attribut `disabled`.
```html
<template>
  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### Groupe de cases à cocher

Il est utilisé pour les cases à cocher multiples qui sont liées à un groupe. Il indique si une option est sélectionnée en vérifiant si elle est cochée.

::: demo L'élément `checkbox-group` peut gérer plusieurs cases dans un groupe en utilisant `v-model` qui est lié comme un `Array`. `Label` peut modifier la description qui suit le bouton de la case à cocher. C'est aussi la valeur de la case à cocher. `Label` correspond aux valeurs des éléments dans le tableau. Il est sélectionné si la valeur spécifiée existe dans le tableau et vice versa.
```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="désactivé" disabled></el-checkbox>
    <el-checkbox label="sélectionné et désactivé" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['sélectionné et désactivé','Option A']
      };
    }
  };
</script>
```
:::

### Checkbox attributs
| Attributs      | Description         | Type    | Options                         | Défaut|
|---------- |-------- |---------- |-------------  |-------- |
| label     | valeur de la case à cocher lorsqu'elle est utilisée dans un `checkbox-group`   | string    |       —        |     —    |
| true-label | valeur de la case à cocher si elle est cochée   | string, number    |       —        |     —    |
| false-label | valeur de la case à cocher si elle n'est pas cochée   | string, number    |      —         |     —    |
| name | Attribut `name` natif | string    |      —         |     —    |
| disabled  | si la case est désactivée   | boolean   |  — | false   |
| checked  | si la case est cochée   | boolean   |  — | false   |
| indeterminate  | Même chose que `indeterminate` de la case à cocher native | boolean   |  — | false   |

### Checkbox-group événements
| Nom de l'événement | Description | Paramètres |
|---------- |-------- |---------- |
| change  | Déclenche lorsque la valeur change | Event object |
