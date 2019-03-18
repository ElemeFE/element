## Rate

Utilisé pour donner une note sur cinq étoiles.

### Usage

:::demo Rate divise les scores en trois niveaux et ces niveaux peuvent être distingués en utilisant différentes couleurs de fond. Par défaut ces couleurs sont identiques, mais vous pouvez affecter un tableau des codes couleur à l'attribut `colors`, ainsi que les deux seuils via `low-threshold` et `high-threshold`.

```html
<div class="block">
  <span class="demonstration">Défaut</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Couleurs pour chaque niveau</span>
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>
```
:::

### Avec du texte

Vous pouvez ajouter du texte à chaque score.

:::demo Ajoutez l'attribut `show-text` pour afficher du texte à droite des étoiles. Vous pouvez choisir les textes avec l'attribut `texts`. C'est un tableau dont la taille doit être égale au score max `max`.

```html
<el-rate
  v-model="value3"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>

<script>
  export default {
    data() {
      return {
        value3: null
      }
    }
  }
</script>
```
:::

### Plus d'icônes

Vous pouvez utiliser différentes icônes pour chaque

:::demo Vous pouvez personnaliser les icônes de chaque niveau en utilisant `icon-classes`. Dans cet exemple, nous utilisons aussi `void-icon-class` qui permet de choisir l'icône des valeurs non-sélectionnées.

```html
<el-rate
  v-model="value4"
  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script>
  export default {
    data() {
      return {
        value4: null
      }
    }
  }
</script>
```
:::

### Lecture seule

Le score peut être en lecture seule. Les demi-étoiles sont supportées.

:::demo Utilisez `disabled` pour mettre le composant en lecture seule. Ajoutez `show-score` pour afficher le score à droite des étoiles. De plus, vous pouvez utiliser `score-template` pour déterminer un template. Il doit contenir `{value}` qui sera remplacé par la valeur du score.

```html
<el-rate
  v-model="value5"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value} points">
</el-rate>

<script>
  export default {
    data() {
      return {
        value5: 3.7
      }
    }
  }
</script>
```
:::

### Attributs

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | La valeur liée. | number | — | 0 |
| max | Score maximum. | number | — | 5 |
| disabled | Si le score est en lecture seule. | boolean | — | false |
| allow-half | Si les demi-étoiles sont autorisées. | boolean | — | false |
| low-threshold | Seuil entre les niveaux bas et moyen. La valeur sera incluse dans le niveau bas. | number | — | 2 |
| high-threshold | Seuil entre les niveaux moyen et haut. La valeur sera incluse entre dans le niveau haut. | number | — | 4 |
| colors | Couleurs des icônes. Doit en contenir trois, correspondants à chaque niveau. | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | Couleur des icônes non-sélectionnées. | string | — | #C6D1DE |
| disabled-void-color | Couleur des icônes non-sélectionnées en lecture seule. | string | — | #EFF2F7 |
| icon-classes | Liste des classes des icônes. Doit en contenir trois, correspondants à chaque niveau. | array | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | Classe des icônes non-sélectionnées. | string | — | el-icon-star-off |
| disabled-void-icon-class | Classe des icônes non-sélectionnées en lecture seule. | string | — | el-icon-star-on |
| show-text | Si du texte doit apparaître à droite des étoiles. | boolean | — | false |
| show-score | Si le score doit apparaître. Incompatible avec show-text. | boolean | — | false |
| text-color | Couleur du texte. | string | — | #1F2D3D |
| texts | Label des différents scores. | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| score-template | Template du score. | string | — | {value} |

### Évènements

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| change | Se déclenche quand la valeur change. | Valeur après le changement. |
