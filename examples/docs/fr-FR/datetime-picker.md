## DateTimePicker

Selectionnez une date et un heure dans un seul picker.

:::tip
DateTimePicker est dérivé de DatePicker et TimePicker. Pour plus d'informations sur `pickerOptions` et d'autres attributs, vous pouvez vous référer à DatePicker et TimePicker.
:::

### Date et horaire

:::demo Vous pouvez sélectionner une date et un horaire en un seul picker en réglant `type` sur `datetime`. La manière d'utiliser des raccourcis est la même que pour DatePicker.

```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Selectionnez date et horaire">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Selectionnez date et horaire"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec horaire par défaut</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Selectionnez date et horaire"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
```
:::

### Plage de dates et d'horaires

:::demo Vous pouvez sélectionner des plages en configurant `type` sur `datetimerange`.

```html
<template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
```
:::

### Horaire par défaut pour les plages de dates

:::demo Lorsque vous sélectionnez une plage de dates dans le panneau de date avec le type `datetimerange`, `00:00:00` sera utilisé comme horaire par défaut pour les dates de début et de fin. Vous pouvez contrôler cette valeur avec l'attribut `default-time`. Il accepte un tableau de une ou deux chaînes de caractères. La première indique l'horaire de la date de début, la deuxième celui de la date de fin.
```html
<template>
  <div class="block">
    <span class="demonstration">Heure de la date de début 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Heure de la date de début 12:00:00, heure de la date de fin 08:00:00</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      align="right"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

### Attributs
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | La valeur liée. | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
| readonly | Si le DatePicker est en lecture seule. | boolean | — | false |
| disabled | Si le DatePicker est désactivé. | boolean | — | false |
| editable | Si le champ est éditable. | boolean | — | true |
| clearable | Si la croix de reset doit apparaître. | boolean | — | true |
|size | Taille du champ. | string | large/small/mini | — |
| placeholder | Le placeholder en mode normal. | string | — | — |
| start-placeholder | Le placeholder de la date de début en mode plage de dates. | string | — | — |
| end-placeholder | Le placeholder de la date de fin en mode plage de dates. | string | — | — |
| time-arrow-control | Si l'horaire peut être sélectionné en utilisant les flèches de direction. | boolean | — | false |
| type | Type du picker. | string | year/month/date/datetime/ week/datetimerange/daterange | date |
| format | Format d'affichage de la date dans le champ. | string | Voir [formats de date](#/fr-FR/component/date-picker#formats-de-date) | yyyy-MM-dd HH:mm:ss |
| align | Alignements. | left/center/right | left |
| popper-class | Nom de classe pour le menu déroulant du DateTimePicker. | string | — | — |
| picker-options | Options additionnelles, voir la table ci-dessous. | object | — | {} |
| range-separator | Séparateur de plage. | string | - | '-' |
| default-value | Date par défaut du calendrier, optionnelle. | Date | N'importe quelle valeur acceptée par `new Date()` | — |
| default-time | L'horaire par défaut après avoir choisi une date. | normal: string / plage de dates: string[] | normal: un string tel que `12:00:00`, range: tableau de deux strings, le premier pour la date de début, le deuxième pour la date de fin. Si non-spécifié, `00:00:00` est utilisé. | — |
| value-format | Format de la variable stockée, optionnel. Si non-spécifié, La valeur sera un objet Date. | string | Voir [formats de date](#/fr-FR/component/date-picker#formats-de-date) | — |
| name | Identique au `name` de l'input natif | string | — | — |
| unlink-panels | Rend indépendants les deux panneaux de plage de dates | boolean | — | false |
| prefix-icon | Icône de préfixe. | string | — | el-icon-date |
| clear-icon | Icône de reset | string | — | el-icon-circle-close |

### Options du Picker
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | a { text, onClick } object array to set shortcut options, check the table below | object[] | — | — |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function | — | — |
| firstDayOfWeek | first day of week | Number | 1 to 7 | 7 |

### Raccourcis
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | Titre du raccourci. | string | — | — |
| onClick | Callback se déclenchant quand le raccourci est cliqué, avec `vm` en paramètre. Vous pouvez changer la valeur du picker en émettant l'évènement `pick`. Exemple: `vm.$emit('pick', new Date())`| function | — | — |

### Évènements
| Nom | Description | Paramètres |
|---------|--------|---------|
| change | Se déclenche quand l'utilisateur confirme la valeur | component's binding value |
| blur | Se déclenche quand le champ perds le focus. | component instance |
| focus | Se déclenche quand le champ a le focus. | component instance |

### Méthodes
| Méthode | Description | Paramètres |
|------|--------|-------|
| focus | Focus sur le champ. | — |
