## InputNumber

Un champ d'input de valeurs numériques, avec un domaine personnalisable.

### Usage

:::demo Liez une variable à `v-model` dans l'élément `<el-input-number>` et c'est tout !

```html
<template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>
```
:::

### Désactivé

:::demo L'attribut `disabled` accepte un `boolean` et si la valeur est `true`, le composant sera désactivé. Si vous souhaitez juste contrôler le domaine des valeurs possibles, ajoutez l'attribut `min` pour régler la valeur minimale et `max` pour la valeur maximale. Par défaut, la valeur minimale est `0`.

```html
<template>
  <el-input-number v-model="num" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```
:::

### Pas

Vous pouvez déterminer un pas pour le champs.

:::demo Ajoutez l'attribut `step` pour configurer le pas.

```html
<template>
  <el-input-number v-model="num" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
</script>
```
:::

### Pas strict

:::demo L'attribut `step-strictly` accepte un `boolean`. Si cet attribut est `true`, la valeur de l'input ne peut être qu'un multiple de `step`.

```html
<template>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
</script>
```
:::

### Précision

:::demo Ajoutez l'attribut `precision` pour régler la précision du champs.

```html
<template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```

:::

:::tip
La valeur de `precision` doit être un integer non négatif et ne doit pas être inférieure aux décimales de `step`.
:::

### Taille

Utilisez l'attribut `size` pour régler la taille avec `medium`, `small` ou `mini`.

:::demo

```html
<template>
  <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
</script>
```
:::

### Position des contrôles

:::demo Réglez `controls-position` pour déterminer la position des boutons.
```html
<template>
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|----| ----| ---| ----| -----|
| value / v-model | La valeur liée. | number | — | 0 |
| min | La valeur minimale autorisée. | number | — | `-Infinity` |
| max | La valeur maximale autorisée. | number | — | `Infinity` |
| step | Le pas pour l'incrémentation. | number | — | 1 |
| step-strictly | Si la valeur ne peut être qu'un multiple du pas. | boolean   | — | false |
| precision | La précision de la valeur. | number | — | — |
| size | La taille du composant. | string | large/small| — |
| disabled| Si le composant est désactivé. | boolean | — | false |
| controls| Si les boutons sont visibles. | boolean | — | true |
| controls-position | Position des boutons. | string | right | - |
| name | Identique à `name` dans l'input natif. | string | — | — |
| label | Texte du label. | string | — | — |
| placeholder | Placeholder du champ. | string | - | - |

### Évènements

| Nom | Description | Paramètres |
|----| ---- | -----|
| change | Se déclenche quand la valeur change. | currentValue, oldValue |
| blur | Se déclenche quand le champ perds le focus. | (event: Event) |
| focus | Se déclenche quand le champ a le focus. | (event: Event) |

### Méthodes

| Méthode | Description | Paramètres |
|------|--------|-------|
| focus | Met le focus sur le composant. | - |
| select | Sélectionne le texte dans le champ. | — |
