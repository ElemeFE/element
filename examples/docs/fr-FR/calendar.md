## Calendrier

Affiche un calendrier.

### Usage basique

:::demo Réglez `value` pour spécifier le mois à afficher. Si `value` n'est pas spécifiée, le mois actuel sera affiché. `value` supporte le two-way binding.
```html
<el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
```
:::

### Contenu personnalisé

:::demo Personnalisez le contenu du calendrier en utilisant le `scoped-slot` appelé `dateCell`. Dans ce `scoped-slot` vous aurez accès au paramètres date (date de la cellule courante), data (incluant les attributs type, isSelected et day). Pour plus d'informations, référez-vous à la documentation ci-dessous.
```html
<el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
```
:::

### Intervalle

:::demo Utilisez l'attribut `range` pour afficher un intervalle particulier. Le début doit être un lundi et la fin un dimanche, l'intervalle ne pouvant excéder deux mois.
```html
<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
```
:::

### Attributs

| Attribut          | Description   | Type      | Valeurs acceptées     | Défaut   |
|------------------ |-------------- |---------- |---------------------- |--------- |
| value / v-model   | Valeur liée.  | Date/string/number | —            | —        |
| range             | Intervalle de dates, début et fin inclus. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months. | Array     | —           | —      |
| first-day-of-week | fisrt day of week| Number | 1 to 7                |  1       |

### Slot dateCell

| Attribut       | Description   | Type      | Valeurs acceptées       | Défaut  |
|-----------------|-------------- |---------- |---------------------- |--------- |
| date            | Date de la cellule courante.  | Date      | —                     | —        |
| data            | { type, isSelected, day }. `type` indique le mois de la date courante, les valeurs prev-month, current-month et next-month pouvant être utilisées; `isSelected` indique si la date est sélectionnée; `day` est la date formattée en yyyy-MM-dd.    | Object      | —           | —      |
