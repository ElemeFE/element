## Collapse

Utilisez Collapse pour stocker du contenu.

### Usage

Vous pouvez agrandir plusieurs panneaux.

:::demo
```html
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Cohérence" name="1">
    <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>
    <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
    <div>Retour d'expérience: permets aux utilisateurs de percevoir clairement leurs opérations par le biais d'animations et d'effets interactifs.</div>
    <div>Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficacité" name="3">
    <div>Simplifier le processus: garde chaque opération simple et intuitive.;</div>
    <div>Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;</div>
    <div>Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllabilité" name="4">
    <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>
    <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>
  </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
:::

### Accordéon

En mode accordéon, un seul panneau peut être ouvert à la fois.

:::demo Utilisez l'attribut `accordion` pour activer le mode accordéon.
```html
<el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Cohérence" name="1">
      <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>
      <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <div>Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.</div>
      <div>Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</div>
    </el-collapse-item>
    <el-collapse-item title="Efficacité" name="3">
      <div>Simplifier le processus: garde chaque opération simple et intuitive.;</div>
      <div>Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;</div>
      <div>Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</div>
    </el-collapse-item>
    <el-collapse-item title="Controllabilité" name="4">
      <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>
      <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>
    </el-collapse-item>
</el-collapse>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
```
:::

### Titre personnalisé

En plus de l'utilisation de l'attribut `title`, vous pouvez configurer les titres de panneau, ce qui rend possible l'ajout de contenu personnalisé, comme des icônes par exemple.

:::demo
```html
<el-collapse accordion>
  <el-collapse-item name="1">
    <template slot="title">
      Cohérence<i class="header-icon el-icon-info"></i>
    </template>
    <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>
    <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback" name="2">
      <div>Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.</div>
      <div>Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</div>
  </el-collapse-item>
  <el-collapse-item title="Efficacité" name="3">
      <div>Simplifier le processus: garde chaque opération simple et intuitive.;</div>
      <div>Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;</div>
      <div>Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</div>
  </el-collapse-item>
  <el-collapse-item title="Controllabilité" name="4">
      <div>Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;</div>
      <div>Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</div>
  </el-collapse-item>
</el-collapse>
```
:::

### Attributs de Collapse
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | Le panneau actuellement activé. | string (en mode accordéon) / array (en mode normal) | — | — |
| accordion | Active le mode accordéon. | boolean | — | false |

### Évènements de Collapse
| Nom | Description | Paramètres |
|---------|---------|---------|
| change | Se déclenche quand un panneau est activé / désactivé. | (activeNames: array (en mode normal) / string (en mode accordéon)) |

### Attributs de Collapse-Item
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name      | Identifiant unique du panneau. | string/number | — | — |
| title     | Titre du panneau.              | string        | — | — |
| disabled  | Désactive le panneau.          | boolean       | — | — |
