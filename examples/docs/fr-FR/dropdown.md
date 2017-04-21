<script>
  export default {
    methods: {
      handleClick() {
        alert('bouton cliqué');
      }
    }
  }
</script>
## Dropdown (Combo)

Menu déroulant pour afficher des listes de liens et d'actions.

### Utilisation de base

Passez la souris sur le menu déroulant pour dérouler plus d'actions.

::: demo L'élément déclencheur est la valeur du `slot` par défaut, et la partie combo correspond à un `slot` nommée `dropdown`. Par défaut, la liste déroulante se déroule lorsque vous survolez l'élément déclencheur sans devoir cliquer dessus.
```html
<el-dropdown>
  <span class="el-dropdown-link">
    Combo<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item disabled>Action 4</el-dropdown-item>
    <el-dropdown-item divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```
:::

### Elément déclencheur

Utilisez le bouton pour déclencher la liste déroulante.

::: demo Utilisez `split-button` pour diviser l'élément déclencheur en un groupe de boutons, le bouton de gauche étant un bouton normal et celui de droite la cible de déclenchement réelle. Si vous voulez insérer une ligne de séparation entre le troisième et le quatrième élément, il suffit d'ajouter une classe `divider` au quatrième élément.
```html
<el-dropdown>
  <el-button type="primary">
    Combo<i class="el-icon-caret-bottom el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-dropdown split-button type="primary" @click="handleClick">
  Combo
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```
:::

### Comment déclencher

Cliquez sur l'élément déclencheur ou placez la souris dessus.

::: demo Utilisez l'attribut `trigger`. Par défaut, c'est `hover`.
```html
<el-row class="block-col-2">
  <el-col :span="12">
    <span class="demonstration">Placez la souris pour déclencher</span>
    <el-dropdown>
      <span class="el-dropdown-link">
        Combo<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
  <el-col :span="12">
    <span class="demonstration">Cliquez pour déclencher</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        Combo<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
```
:::

### Dropdown attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | menu de type bouton, reportez-vous au composant `Button`, ne fonctionne que lorsque` split-button` est vrai  | string  |          —             |    —     |
| size          | menu de type bouton, reportez-vous au composant `Button`, ne fonctionne que lorsque` split-button` est vrai  | string  |          —             |    —     |
| split-button | si un groupe de boutons est affiché | boolean         |     —       | false   |
| size          | taille du composant, reportez-vous au composant `Button`     | string          | large, small, mini  |  —  |
| menu-align    | alignement horizontal     | string          | start/end  | end |
| trigger       | comment déclencher     | string  |    hover/click  |  hover |

### Dropdown événements
| Nom de l'événement | Description | Paramètres |
|---------- |-------- |---------- |
| click | si `split-button` est` true`, déclenche lorsque le bouton gauche est cliqué | — |
| command | déclenche lorsque le combo est cliqué | la commande executée à partir du menu déroulant |

### Dropdown Menu Item Attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | une commande à envoyer à la fonction callback de `command` | string  |          —             |    —     |
| disabled      | si l'élément est désactivé  | boolean  |          —             |    false     |
| divided       | si un diviseur est affiché  | boolean  |          —             |    false     |
