<script>
  module.exports = {
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: 'Aujourd\'hui',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Hier',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'Il y a une semaine',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: 'La semaine dernière',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Le mois dernier',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Les 3 derniers mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: new Date(),
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: '',
        value16: ''
      };
    }
  };
</script>

## DateTimePicker (Sélecteur d'heure et de date)

Sélectionnez la date et l'heure dans un sélecteur.

###  Date et heure

::: demo Vous pouvez sélectionner la date et l'heure dans un sélecteur en même temps en définissant `type` à `datetime`. La façon d'utiliser les raccourcis est la même que le sélecteur de date.
```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Sélectionnez la date et l'heure">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec des raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Sélectionnez la date et l'heure"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: 'Aujourd\'hui',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Hier',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'Il y a une semaine',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

### Plage de date et heure

::: demo Vous pouvez sélectionner une plage de date et d'heure en définissant `type` à `datetimerange`.
```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value3"
      type="datetimerange"
      placeholder="Sélectionnez la plage de temps"
      style="width:350px">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec des raccourcis</span>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      placeholder="Sélectionnez la plage de temps"
      align="right"
      style="width:350px">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: 'La semaine dernière',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Le mois dernier',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Les 3 derniers mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: '',
        value4: ''
      };
    }
  };
</script>
```
:::

### Attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | si `DatePicker` est en lecture seule | boolean | — | false |
| disabled | si `DatePicker` est désactivé | boolean | - | false |
| editable | si le champ est modifiable | boolean | - | true |
| placeholder | caractères génériques | string | — | — |
| type | type du sélecteur | string | year/month/date/datetime/week/datetimerange/daterange | date |
| format | format du sélecteur | string | year `yyyy` month `MM` day `dd`, <br>hour `HH`, minute `mm`, second `ss` | yyyy-MM-dd |
| align | alignement | left/center/right | left |
| picker-options | options supplémentaires, consultez le tableau ci-dessous | object | — | {} |

### Options supplémentaires
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | un tableau d'objets {text, onClick} pour définir les options de raccourcis, consultez le tableau ci-dessous | object[] | — | — |
| disabledDate | une fonction déterminant si une date est désactivée avec cette date comme paramètre. Doit retourner un `Boolean` | function | — | — |

### Raccourcis
| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | titre du raccourci | string | — | — |
| onClick | fonction Callback, déclenchée lorsque le raccourci est cliqué, avec le `vm` comme paramètre. <br> Vous pouvez changer la valeur du sélecteur en émettant l'événement `pick`. <br> Exemple: `vm.$Emit('pick', new Date())` | function | — | — |
