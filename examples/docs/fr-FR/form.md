<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        var age = parseInt(value, 10);

        setTimeout(() => {
          if (!Number.isInteger(age)) {
            callback(new Error('Veuillez entrer des chiffres'));
          } else{
            if (age < 18) {
              callback(new Error('L\'âge doit être supérieur à 18 ans'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validaePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez saisir le mot de passe'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validaePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez saisir à nouveau le mot de passe'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Les deux entrées ne correspondent pas!'));
        } else {
          callback();
        }
      };
      return {
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
        formInline: {
          user: '',
          region: ''
        },
        formStacked: {
          name: '',
          region: '',
          type: '',
          remark: ''
        },
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        },
        formAlignLeft: {
          name: '',
          region: '',
          type: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        formLabelWidth: '80px',
        options: [
        ],
        rules: {
          name: [
            { required: true, message: 'Saisissez le nom de l'activité', trigger: 'blur' },
            { min: 3, max: 5, message: 'La longueur doit être entre 3 et 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Veuillez sélectionner une zone d'activité', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Choisissez une date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Veuillez choisir un moment', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Veuillez sélectionner au moins un type d'activité', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Veuillez sélectionner la ressource de l'activité', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Veuillez saisir le formulaire d'activité', trigger: 'blur' }
          ]
        },
        rules2: {
          pass: [
            { required: true, message: 'Veuillez saisir le mot de passe', trigger: 'blur' },
            { validator: validaePass }
          ],
          checkPass: [
            { required: true, message: 'Veuillez saisir à nouveau le mot de passe', trigger: 'blur' },
            { validator: validaePass2 }
          ],
          age: [
            { required: true, message: 'Veuillez entrer l'âge', trigger: 'blur' },
            { validator: checkAge, trigger: 'change' }
          ]
        },
        dynamicForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        },
        dynamicRule: {
          email: [
            { required: true, message: 'Veuillez saisir une adresse e-mail', trigger: 'blur' },
            { type: 'email', message: 'Veuillez saisir une adresse e-mail correcte', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            alert('Submit');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit3(ev) {
        this.$refs.dynamicForm.validate(valid => {
          if (valid) {
            alert('Submit');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleValidate(prop, errorMsg) {
        console.log(prop, errorMsg);
      },
      onSubmit() {
        console.log('submit!');
      },
      onRuleFormSubmit() {
        console.log('onRuleFormSubmit');
      },
      removeDomain(item) {
        var index = this.dynamicForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicForm.domains.push({
          key: this.dynamicForm.domains.length,
          value: ''
        });
      }
    }
  }
</script>

<style>
  .demo-form.demo-en-US {
    .el-select .el-input {
      width: 360px;
    }
    .el-form {
      width: 480px;
    }

    .line {
      text-align: center;
    }

    .el-checkbox-group {
      width: 320px;
      margin: 0;
      padding: 0;
      list-style: none;

      &:after,&:before {
        content: ' ';
        display: table;
      }
      &:after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
      }

      .el-checkbox {
        float: left;
        width: 160px;
        padding-right: 20px;
        margin: 0;
        padding: 0;

        + .el-checkbox {
          margin-left: 0;
        }
      }
    }
    .demo-form-normal {
      width: 480px;
    }
    .demo-form-inline {
      .el-input {
        width: 150px;
      }
      > * {
        margin-right: 10px;
      }
    }
    .demo-form-stacked {
      width: 270px;

      .el-select .el-input {
        width: 100%;
      }
    }
    .demo-ruleForm {
      width: 480px;

      .el-input,
      .el-textarea {
        width: auto;
      }

      .el-select .el-input {
        width: 360px;
      }
    }
    .demo-dynamic {
      .el-input {
        display: inline-block;
        margin-right: 10px;
        width: 270px;
        vertical-align: top;
      }
    }
    .fr {
      float: right;
    }
  }
</style>

## Form (Formulaire)

Un formulaire est composé de `input`, `radio`, `select`, `checkbox` et ainsi de suite. Avec un formulaire, vous pouvez collecter, vérifier et soumettre des données.

### Formulaire de base

Il inclut toutes sortes d'éléments d'entrée, tels que `input`, `select`, `radio` et `checkbox`.

::: demo Dans chaque composant `form`, vous avez besoin d'un champ `form-item` pour être le conteneur de votre entrée.
```html
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Nom de l'activité">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Zone d'activité">
    <el-select v-model="form.region" placeholder="Veuillez sélectionner votre zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Temps d'activité">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Choisissez une date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="Choisissez un moment" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Livraison instantanée">
    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Type d'activité">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="Activités en ligne" name="type"></el-checkbox>
      <el-checkbox label="Activités de promotion" name="type"></el-checkbox>
      <el-checkbox label="Activités hors ligne" name="type"></el-checkbox>
      <el-checkbox label="Exposition simple de la marque" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Commanditaire"></el-radio>
      <el-radio label="Lieu"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Formulaire d'activité">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Créer</el-button>
    <el-button>Annuler</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

### Formulaire en ligne

Lorsque l'espace vertical est limité et que le formulaire est relativement simple, vous pouvez la mettre dans une seule ligne.

::: demo Définissez l'attribut `inline` à `true` et le formulaire sera en ligne.
```html
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item>
    <el-input v-model="formInline.user" placeholder="Approuvé par"></el-input>
  </el-form-item><el-form-item>
    <el-select v-model="formInline.region" placeholder="Zone d'activité">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item><el-form-item>
    <el-button type="primary" @click="onSubmit">Requête</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

### Alignement

Depending on your design, there are several different ways to align your label element.
Selon votre conception, il existe plusieurs façons d'aligner vos label.

#### Sommet

::: demo L'attribut `label-position` décide de l'alignement des labels, il peut être `top` ou `left`. Lorsqu'il est défini sur `top`, les labels seront placées au dessus du champ de formulaire.
```html
<el-form label-position="top" :model="formStacked" class="demo-form-stacked">
  <el-form-item label="Nom">
    <el-input v-model="formStacked.name"></el-input>
  </el-form-item>
  <el-form-item label="Zone d'activité">
    <el-input v-model="formStacked.region"></el-input>
  </el-form-item>
  <el-form-item label="Formulaire d'activité">
    <el-input v-model="formStacked.type"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formStacked: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

#### Droite

::: demo Lorsque `label-position` est omis, les labels s'alignent vers la droite
```html
<el-form :model="formAlignRight" label-width="120px">
  <el-form-item label="Nom de l'activité">
    <el-input v-model="formAlignRight.name"></el-input>
  </el-form-item>
  <el-form-item label="Zone de promotion">
    <el-input v-model="formAlignRight.region"></el-input>
  </el-form-item>
  <el-form-item label="Formulaire de l'activité">
    <el-input v-model="formAlignRight.type"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

#### Gauche

:::demo When `label-position` is set to `top`, labels will align to the left.
::: demo Lorsque `label-position` est réglé sur `left`, les labels s'alignent vers la gauche.
```html
<el-form :model="formAlignLeft" label-position="left" label-width="120px">
  <el-form-item label="Nom de l'activité">
      <el-input v-model="formAlignLeft.name"></el-input>
    </el-form-item>
    <el-form-item label="Zone de promotion">
      <el-input v-model="formAlignLeft.region"></el-input>
    </el-form-item>
    <el-form-item label="Formulaire de l'activité">
      <el-input v-model="formAlignLeft.type"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formAlignLeft: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

### Validation

Le composant de formulaire vous permet de vérifier vos données, vous aidant à trouver et à corriger les erreurs.

::: demo Il suffit d'ajouter l'attribut `rule` pour au composant` Form`; passer les règles de validation et définir l'attribut `prop` sur les `Form-Item` comme une clé spécifique qui doit être validée. Voir plus d'informations sur [validateur asynchrone] (https://github.com/yiminghe/async-validator).
```html
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Nom de l'activité" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Zone de l'activité" prop="region">
    <el-select v-model="ruleForm.region" placeholder="Activity zone">
      <el-option label="Zone une" value="shanghai"></el-option>
      <el-option label="Zone deux" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Temps d'activité" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="Choisissez une date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="Choisissez un moment" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="Livraison instantanée">
    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Type d'activité" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="Activités en ligne" name="type"></el-checkbox>
            <el-checkbox label="Activités de promotion" name="type"></el-checkbox>
            <el-checkbox label="Activités hors ligne" name="type"></el-checkbox>
            <el-checkbox label="Exposition simple de la marque" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="Commanditaire"></el-radio>
      <el-radio label="Lieu"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Formulaire d'activité" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleSubmit">Créer</el-button>
    <el-button @click="handleReset">Annuler</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Saisissez le nom de l'activité', trigger: 'blur' },
            { min: 3, max: 5, message: 'La longueur doit être entre 3 et 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Veuillez sélectionner une zone d'activité', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Choisissez une date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Veuillez choisir un moment', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Veuillez sélectionner au moins un type d'activité', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Veuillez sélectionner la ressource de l'activité', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Veuillez saisir le formulaire d'activité', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```
:::

### Règles de validation personnalisées

::: demo Cet exemple montre comment personnaliser vos propres règles de validation pour terminer une vérification de mot de passe à deux facteurs.
```html
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Mot de passe" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="Confirmer" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="Âge" prop="age">
    <el-input v-model="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleSubmit2">Soumettre</el-button>
    <el-button @click="handleReset2">Annuler</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        var age = parseInt(value, 10);

        setTimeout(() => {
          if (!Number.isInteger(age)) {
            callback(new Error('Veuillez entrer des chiffres'));
          } else{
            if (age < 18) {
              callback(new Error('L\'âge doit être supérieur à 18 ans'));
            } else {
              callback();
            }
          } 
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez saisir le mot de passe'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez saisir à nouveau le mot de passe'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Les deux entrées ne correspondent pas!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { required: true, message: 'Veuillez saisir le mot de passe', trigger: 'blur' },
            { validator: validatePass }
          ],
          checkPass: [
            { required: true, message: 'Veuillez saisir à nouveau le mot de passe', trigger: 'blur' },
            { validator: validatePass2 }
          ],
          age: [
            { required: true, message: 'Veuillez entrer l'âge', trigger: 'blur' },
            { validator: checkAge, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```
:::

### Supprimer ou ajouter des éléments de formulaire dynamiquement

::: demo En plus de transmettre toutes les règles de validation à la fois sur le composant de formulaire, vous pouvez également passer les règles de validation ou supprimer des règles sur un seul champ de formulaire dynamiquement.
```html
<el-form :model="dynamicForm" :rules="dynamicRule" ref="dynamicForm" label-width="120px" class="demo-dynamic">
  <el-form-item prop="email" label="Email">
    <el-input v-model="dynamicForm.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in dynamicForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains:' + index"
    :rules="{
      type: 'object', required: true,
      fields: {
        value: { required: true, message: 'Le domaine ne peut pas être nul', trigger: 'blur' }
      }
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.native.prevent="removeDomain(domain)">Delete</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="handleSubmit3">Soumettre</el-button>
    <el-button @click="addDomain">Nouveau domaine</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        dynamicForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        },
        dynamicRule: {
          email: [
            { required: true, message: 'Veuillez saisir une adresse e-mail', trigger: 'blur' },
            { type: 'email', message: 'Veuillez saisir une adresse e-mail correcte', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      handleSubmit3(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      removeDomain(item) {
        var index = this.dynamicForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicForm.domains.push({
          key: this.dynamicForm.domains.length,
          value: ''
        });
      }
    }
  }
</script>
```
::: 

### Form attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| model| données du composant formulaire | object | — | — |
| rules | règles de validation du formulaire | object | — | — |
| inline | si le formulaire est en ligne | boolean | — | false |
| label-position | position du label | string | left/right/top | right |
| label-width | largeur du label et tous les éléments de formulaire hériteront de `Form` | string | — | — |
| label-suffix | suffixe du label | string | — | — |

### Form méthodes
| Méthodes | Description |
| ---- | ---- |
| validate(cb) | méthode de validation du formulaire en entier |
| validateField(prop, cb) | méthode pour valider un certain élément de formulaire |
| resetFields | réinitialiser tous les champs et supprimer le résultat de validation |

### Form-Item attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| prop | une clé de `model` | string | keys of model that passed to `form` |
| label | label | string | — | — |
| label-width | largeur du label, p. Ex. '50px' | string | — | — |
| required | si le champ est requis ou non, sera déterminé par des règles de validation si omis | string |  — | false |
