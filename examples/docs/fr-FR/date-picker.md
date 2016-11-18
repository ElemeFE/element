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
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: ''
      };
    }
  };
</script>

## DatePicker (Sélecteur de date)

Utilisez le sélecteur de date pour saisir des dates.

###  Entrez la date

Sélecteur de date de base mesuré en jours.

::: demo La mesure est déterminée par l'attribut `type`. Vous pouvez activer les options rapides en créant un objet `picker-options` avec la propriété` shortcuts`. La date désactivée est définie par `disabledDate`, qui est une fonction.
```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Sélectionnez une date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Sélecteur avec options rapides</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Sélectionnez une date"
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
        value2: '',
      };
    }
  };
</script>

```

:::

### Autres mesures

Vous pouvez choisir `week`,` month` ou `year` en configurant le composant `datepicker`.

::: demo
```html
<div class="block">
  <span class="demonstration">Semaine</span>
  <el-date-picker
    v-model="value3"
    type="week"
    format="Week WW"
    placeholder="Choisissez une semaine">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Mois</span>
  <el-date-picker
    v-model="value4"
    type="month"
    placeholder="Choisissez un mois">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Année</span>
  <el-date-picker
    v-model="value5"
    type="year"
    placeholder="Choisissez une année">
  </el-date-picker>
</div>

<script>
  export default {
    data() {
      return {
        value3: '',
        value4: '',
        value5: ''
      };
    }
  };
</script>
```

:::

###  Plage de dates

La sélection d'une plage de dates est prise en charge.

::: demo
```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      placeholder="Choisissez une plage"
      style="width: 220px">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Sélecteur avec options rapides</span>
    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      placeholder="Choisissez une plage"
      :picker-options="pickerOptions2"
      style="width: 220px">
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
        value6: '',
        value7: ''
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
| disabled | si `DatePicker` est désactivé | boolean | — | false |
| editable | si le champ est modifiable | boolean | — | true |
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
