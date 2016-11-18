<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 5
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

## InputNumber (Champ de saisie numérique)

Saisissez des valeurs numériques avec une plage personnalisable.

### Utilisation de base

::: demo Liez une variable à `v-model` dans l'élément` <el-input-number> `et vous êtes configuré.
```html
<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
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

::: demo L'attribut `disabled` accepte un `boolean`. Si la valeur est `true`, le composant est désactivé. Si vous avez juste besoin de contrôler la valeur dans une plage, vous pouvez ajouter l'attribut `min` pour définir la valeur minimale et` max` pour définir la valeur maximale. Par défaut, la valeur minimale est `0`.
```html
<template>
  <el-input-number v-model="num2" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: 1
      }
    }
  };
</script>
```
:::

### Pas

Permet de définir des pas incrémentiels.

::: demo Ajoutez l'attribut `step` pour définir le pas.
```html
<template>
  <el-input-number v-model="num3" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num3: 5
      }
    }
  };
</script>
```
:::

### Attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|----| ----| ---| ----| -----|
|value | valeur de liaison | number | — | — |
|min | la valeur minimale autorisée | number | — | 0 |
|max | a valeur maximale autorisée | number | — | `Infinity` |
|step | pas incrémentiels | number | — | 1 |
|size | taille du composant | string | large/small| — |
|disabled| si le composant est désactivé | boolean | — | false |

### Événements
| Nom de l'événement | Description | Paramètres |
|----| ---- | -----|
|change | déclenché lorsque la valeur change | value after change |
