## Alert

Affiche des messages importants.

### Usage

Les Alertes sont des composants non superposés qui ne disparaissent pas automatiquement.

:::demo Les Alertes peuvent être de 4 types différents, définit par `type`, le type par défaut étant `info`.

```html
<template>
  <el-alert
    title="succès"
    type="success">
  </el-alert>
  <el-alert
    title="information"
    type="info">
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning">
  </el-alert>
  <el-alert
    title="erreur"
    type="error">
  </el-alert>
</template>
```
:::

### Thème

Alert fournit deux thèmes différents, `light` et `dark`.

:::demo Réglez `effect` pour changer le thème, le défaut étant `light`.
```html
<template>
  <el-alert
    title="succès"
    type="success"
    effect="dark">
  </el-alert>
  <el-alert
    title="info"
    type="info"
    effect="dark">
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    effect="dark">
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    effect="dark">
  </el-alert>
</template>
```
:::

### Bouton personnalisable

Personnalisez le bouton de fermeture avec du texte ou des symboles.

:::demo Les alertes peuvent être configurées pour être fermables ou non. Le bouton de fermeture et les callbacks sont aussi personnalisables. L'attribut `closable` détermine si le composant peut être fermé ou non. Il accepte un `boolean`, la valeur par défaut étant `true`. Vous pouvez configurer l'attribut `close-text`pour remplacer la croix du bouton de fermeture. Assurez-vous que `close-text` soit une chaîne de caractères. L'évènement `close` se déclenche quand le composant est fermé.

```html
<template>
  <el-alert
    title="alerte non fermable"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="texte de fermeture personnalisé"
    type="info"
    close-text="Gotcha">
  </el-alert>
  <el-alert
    title="alerte avec callback"
    type="warning"
    @close="hello">
  </el-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
```
:::

### Avec icône

Afficher une icône améliore la lisibilité.

:::demo Ajouter l'attribut `show-icon` affiche une icône correspondant au type de l'alerte.

```html
<template>
  <el-alert
    title="succès"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="information"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    show-icon>
  </el-alert>
</template>
```
:::

## Texte centré

Utilisez l'attribut `center` pour centrer le texte.

:::demo

```html
<template>
  <el-alert
    title="succès"
    type="success"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="information"
    type="info"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    center
    show-icon>
  </el-alert>
</template>
```
:::

### Description

Contient un message avec plus d'informations.

:::demo A coté de l'attribut `title`, vous pouvez ajouter `description` pour décrire l'alerte avec plus de précisions. Les descriptions ne peuvent contenir que du texte, et les retours à la ligne sont automatiques.

```html
<template>
  <el-alert
    title="Titre"
    type="success"
    description="Ceci est la description.">
  </el-alert>
</template>
```
:::

### Icône et description

:::demo Pour finir, voici un exemple utilisant à la fois l'icône et la description.

```html
<template>
  <el-alert
    title="succès"
    type="success"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
  <el-alert
    title="information"
    type="info"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
</template>
```
:::

### Attributs
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | Titre.         | string | — | — |
| type | Type du composant. | string | success/warning/info/error | info |
| description | Texte de description. Peut aussi être passé via le slot par défaut | string | — | — |
| closable | Si peut être fermé ou non. | boolean | — | true |
| center | Si le texte doit être centré ou non. | boolean | — | false |
| close-text | Texte personnalisé pour le bouton de fermeture. | string | — | — |
| show-icon | Si une icône s'affiche ou non. | boolean | — | false |
| effect | Détermine le thème.  | string | light/dark | light |

### Slot

| Nom | Description |
|------|--------|
| — | la description |
| title | Le contenu du titre. |

### Évènements
| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| close | Se déclenche lorsque l'alerte est fermée. | — |
