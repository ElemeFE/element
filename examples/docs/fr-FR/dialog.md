<script>
  module.exports = {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogVisible: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      openDialog() {
        this.$refs.dialogBind.open();
      }
    }
  };
</script>

## Dialog (Dialogue)

Informe les utilisateurs tout en préservant l'état de la page en cours.

### Utilisation de base

Le composant `Dialog` fait apparaître une boîte de dialogue, et elle est complètement personnalisable.

::: demo Définissez l'attribut `v-model` avec un` Boolean` et la boîte de dialogue apparaîtra quand il sera à `true`. La boîte de dialogue comporte deux parties: `body` et `footer`. Ce dernier, nécessite un `slot` nommé `footer`. L'attribut optionnel `title` (vide par défaut) sert à définir un titre. Cet exemple modifie explicitement la valeur de `v-model` pour activer la boîte de dialogue. En outre, nous fournissons également la méthode `open` et` close`, que vous pouvez appeler pour ouvrir / fermer la boîte de dialogue.
```html
<el-button type="text" @click.native="dialogVisible = true">Cliquez pour ouvrir la boîte de dialogue</el-button>

<el-dialog title="Tips" v-model="dialogVisible" size="tiny">
  <span>C'est un message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">Annuler</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">Confirmer</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>
```
:::

### Personnalisations

Le contenu de la boîte de dialogue peut être n'importe quoi, même une table ou un formulaire. Cet exemple montre comment utiliser la table d'Element et le formulaire avec boîte de dialogue.

::: demo
```html
<!-- Table -->
<el-button type="text" @click.native="dialogTableVisible = true" type="text">Ouvrez une boîte de dialogue avec une table imbriquée</el-button>

<el-dialog title="Adresse de livraison" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Nom" width="200"></el-table-column>
    <el-table-column property="address" label="Adresse"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click.native="dialogFormVisible = true" type="text">Ouvrez une boîte de dialogue avec un formulaire imbriqué</el-button>

<el-dialog title="Adresse de livraison" v-model="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Nom" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Veuillez sélectionner une zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogFormVisible = false">Annuler</el-button>
    <el-button type="primary" @click.native="dialogFormVisible = false">Confirmer</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
```
:::

### Attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | titre de la boîte de dialogue | string    | —                               | —      |
| size      | taille de la boîte de dialogue | string    | tiny/small/large/full | small |
| top      | valeur CSS pour `top` de la boîte de dialogue, fonctionne quand` size` n'est pas `full` | string    | — | 15% |
| modal     | si un masque est affiché | boolean   | — | true |
| lock-scroll     | si le défilement du `body` est désactivé lorsque la boîte de dialogue est affichée | boolean   | — | true |
| custom-class      | noms de classes personnalisés pour la boîte de dialogue | string    | — | — |
| close-on-click-modal | si le dialogue peut être fermé en cliquant sur le masque | boolean    | — | true |
| close-on-press-escape | si le dialogue peut être fermé en appuyant sur ESC | boolean    | — | true |
| show-close | si un un bouton de fermeture doit être affiché | boolean    | — | true |

### Slots
| Nom | Description |
|------|--------|
| — | contenu de la boîte de dialogue |
| footer | contenu du pied de page de la boîte de dialogue |

### Méthodes
Chaque instance `el-dialog` a les méthodes suivantes qui peuvent être utilisées pour ouvrir / fermer l'instance sans modifier explicitement la valeur de` v-model`:

| Méthode | Description |
|------|--------|
| open | ouvre l'instance en cours |
| close | ferme l'instance en cours |

### Événements
| Nom de l'événement | Description | Paramètres |
|---------- |-------- |---------- |
| open | déclenché lorsque la boîte de dialogue s'ouvre | — |
| close | déclenché lorsque la boîte de dialogue se ferme | — |
