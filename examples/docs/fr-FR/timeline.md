## Timeline

Affiche une suite d'évènements dans un ordre chronologique.

### Usage

La timeline peut être divisée en plusieurs activités en ordre ascendant ou descendant. Les timestamps sont des caractéristiques importantes qui les distinguent des autres composants. Notez la différence avec Steps.

:::demo
```html
<div class="block">
  <div class="radio">
    Order:
    <el-radio-group v-model="reverse">
      <el-radio :label="true">Descendant</el-radio>
      <el-radio :label="false">Ascendant</el-radio>
    </el-radio-group>
  </div>

  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>

<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'Début de l\'évènement',
          timestamp: '2018-04-15'
        }, {
          content: 'Approuvé',
          timestamp: '2018-04-13'
        }, {
          content: 'Succès',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
</script>
```
:::

### Noeud personnalisé

Vous pouvez personnaliser la taille, la couleur et les icônes de chaque Noeud.

:::demo
```html
<div class="block">
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>

<script>
  export default {
    data() {
      return {
        activities: [{
          content: 'Icône',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Couleur',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Taille',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Défaut',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
</script>
```
:::

### Timestamp personnalisé

Le timestamp peut être placé au-dessus du contenu lorsque celui-ci est trop haut.

:::demo
```html
<div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Mise à jour du template GitHub</h4>
        <p>Commit de Tom le 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>Mise à jour du template GitHub</h4>
        <p>Commit de Tom le 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>Mise à jour du template GitHub</h4>
        <p>Commit de Tom le 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
```
:::

### Attributs de Timeline

| Attribut      | Description    | Type      | Valeurs acceptées | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| reverse | Si l'ordre chronologique est ascendant ou descendant, le défaut étant ascendant. | boolean | — | false |

### Attribut de Timeline-item

| Attribut      | Description    | Type      | Valeurs acceptées | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| timestamp     | Le contenu du timestamp. | string  | - | — |
| hide-timestamp  | Si le timestamp doit être affiché. | boolean | — | false |
| placement | La position du timestamp. | string | top / bottom | bottom |
| type | Le type de noeud. | string | primary / success / warning / danger / info | - |
| color | La couleur de fond du noeud. | string | hsl / hsv / hex / rgb | - |
| size | La taille du noeud | string | normal / large | normal |
| icon | Le nom de classe de l'icône. | string | — | - |

### Slots de Timeline-Item

| Nom | Description |
|------|--------|
| — | Contenu personnalisé pour le timeline-item. |
| dot | Noeud personnalisé. |
