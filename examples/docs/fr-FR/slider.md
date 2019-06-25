## Slider

Permet de sélectionner une valeur au sein d'un intervalle.

### Usage

La valeur est affichée lorsque le slider est utilisé.

:::demo Vous pouvez décider de la valeur initiale en initialisant la variable liée.

```html
<template>
  <div class="block">
    <span class="demonstration">Valeur par défaut</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Valeur initiale personnalisée</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Pas de tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Tooltip formatté</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Désactivé</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### Valeurs discrètes

Les valeurs peuvent être discrètes.

:::demo Réglez le pas avec l'attribut `step`. Vous pouvez affiché chaque point grâce à `show-stops`.

```html
<template>
  <div class="block">
    <span class="demonstration">Points absents</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Points affichés</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
```
:::

### Slider avec champ d'input

Vous pouvez afficher un champ d'input synchronisé pour entrer une valeur précise rapidement.

:::demo Ajoutez l'attribut `show-input` pour ajouter le champ à droite du Slider.

```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### Sélectionner une intervalle

Vous pouvez sélectionner des intervalles de valeurs au lieu d'une valeur unique.

:::demo Ajouter l'attribut `range` active le mode intervalle, ou la valeur sera maintenant un tableau contenant les deux valeurs de l'intervalle.
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
```
:::

### Mode vertical

:::demo Ajoutez l'attribut `vertical` active le mode vertical. Dans ce mode, l'attribut `height` est requis.
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

:::demo Vous pouvez afficher des marqueurs sur le slider grâce à l'attribut `marks`.
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
```
:::

## Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | La valeur liée. | number | — | 0 |
| min | Valeur minimale. | number | — | 0 |
| max | Valeur maximale. | number | — | 100 |
| disabled | Si le Slider est désactivé. | boolean | — | false |
| step | La taille du pas. | number | — | 1 |
| show-input | Si une champ d'input doit être affiché, ne marche que si `range` est `false`. | boolean | — | false |
| show-input-controls | Si des boutons de contrôle doivent être affichés quand `show-input` est `true`. | boolean | — | true |
| input-size | Taille du champ d'input. | string | large / medium / small / mini | small |
| show-stops | Si les points de valeurs discrètes doivent être affichés. | boolean | — | false |
| show-tooltip | Si le tooltip doit être affiché. | boolean | — | true |
| format-tooltip | Format du contenu du tooltip. | function(value) | — | — |
| range | Si le mode intervalle est activé. | boolean | — | false |
| vertical | Si le mode vertical est activé. | boolean | — | false |
| height | Hauteur du Slider, requis en mode vertical. | string | — | — |
| label | Label pour les lecteurs d'écran. | string | — | — |
| debounce | Délai après écriture en millisecondes, marche quand `show-input` est `true`. | number | — | 300 |
| tooltip-class | Classe du tooltip. | string | — | — |
| marks | Marqueurs, les clés doivent être des `number` et être comprises dans l'intervalle `[min, max]`. Chaque marqueur peut avoir un style particulier. | object | — | — |

## Évènements

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| change | Se déclenche quand la valeur change (si le changement est fait à la souris, se déclenche quand la souris redevient immobile). | La nouvelle valeur. |
| input | triggers when the data changes (It'll be emitted in real time during sliding) | value after changing |
