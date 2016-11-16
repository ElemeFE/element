<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

## Alert (Alerte)

Affiche des messages d'alerte.

### Utilisation de base

Les composants de type `Alert` sont des éléments non superposés de la page qui ne disparaissent pas automatiquement.

::: demo Le composant `Alert` propose 4 types de thèmes définis par `type`, dont la valeur par défaut est` info`.

```html
<template>
  <el-alert
    title="success alert"
    type="success">
  </el-alert>
  <el-alert
    title="info alert"
    type="info">
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning">
  </el-alert>
  <el-alert
    title="error alert"
    type="error">
  </el-alert>
</template>
```
:::

### Bouton de fermeture personnalisable

Personnalisez le bouton de fermeture avec du texte ou des symboles.

::: demo Le composant `Alert` vous permet de configurer s'il est fermable ou non. Le texte du bouton de fermeture et les fonctions de callback de fermeture sont également personnalisables. L'attribut `closable` décide si le composant peut être fermé ou non. Il accepte un `boolean` et la valeur par défaut est `true`. Vous pouvez définir l'attribut `close-text` pour remplacer le symbole de croix par défaut comme bouton de fermeture. Veillez à ce que `close-text` soit une chaîne. L'événement `close` se déclenche lorsque le composant est fermé.

```html
<template>
  <el-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </el-alert>
  <el-alert
    title="alert with callback"
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

### Avec une icône

L'affichage d'une icône améliore la lisibilité.

::: demo L'attribut `show-icon` affiche une icône correspondant au type du composant actuel.

```html
<template>
  <el-alert
    title="success alert"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    show-icon>
  </el-alert>
</template>
```
:::

### Avec une description

La description permet un message avec des informations plus détaillées.

::: demo Outre l'attribut `title` requis, vous pouvez ajouter un attribut` description` pour vous aider à décrire l'alerte avec plus de détails. La description doit être une chaine.

```html
<template>
  <el-alert
    title="Avec une description"
    type="success"
    description="Ceci est une description.">
  </el-alert>
</template>
```
:::

### Avec une icône et une description

::: demo Pour finir, voici un exemple avec l'icône et la description.

```html
<template>
  <el-alert
    title="success alert"
    type="success"
    description="Texte de description"
    show-icon>
  </el-alert>
  <el-alert
    title="info alert"
    type="info"
    description="Texte de description"
    show-icon>
  </el-alert>
  <el-alert
    title="warning alert"
    type="warning"
    description="Texte de description"
    show-icon>
  </el-alert>
  <el-alert
    title="error alert"
    type="error"
    description="Texte de description"
    show-icon>
  </el-alert>
</template>
```
:::

### Attributs
| Attributs      | Description          | Type      | Valeurs acceptées      | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | titre **REQUIRED** | string | — | — |
| type | type de composant | string | success/warning/info/error | info |
| description | texte de description | string | — | — |
| closable | fermable ou non | boolean | — | true |
| close-text | texte personnalisé du bouton de fermeture | string | — | — |
| show-icon | Si une icône de type est affichée | boolean | — | false |


### Événements
| Nom de l'événement | Description | Paramètres |
|---------- |-------- |---------- |
| close | Déclenché lorsque le composant est fermé | — |
