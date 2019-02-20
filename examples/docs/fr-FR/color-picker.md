<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF',
        color5: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      };
    },
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
      });
    },
  }
</script>

<style>
  .demo-color-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demo-color-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-color-picker .el-color-picker + .el-color-picker {
    margin-left: 20px;
  }
</style>

## ColorPicker

ColorPicker est un sélecteur de couleur qui supporte plusieurs formats.

### Usage

:::demo ColorPicker nécessite une variable de type string liée à v-model.
```html
<div class="block">
  <span class="demonstration">Avec valeur par défaut</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">Sans valeur par défaut</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
```
:::

### Canal Alpha

:::demo ColorPicker supporte le canal alpha. Pour activer la sélection du canal alpha, ajoutez l'attribut `show-alpha`.
```html
<el-color-picker v-model="color3" show-alpha></el-color-picker>

<script>
  export default {
    data() {
      return {
        color3: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
```
:::

### Couleurs prédéfinies

:::demo ColorPicker supporte les couleurs prédéfinies.
```html
<el-color-picker
  v-model="color5"
  show-alpha
  :predefine="predefineColors">
</el-color-picker>

<script>
  export default {
    data() {
      return {
        color5: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
</script>
```
:::

### Tailles

:::demo
```html
<el-color-picker v-model="color4"></el-color-picker>
<el-color-picker v-model="color4" size="medium"></el-color-picker>
<el-color-picker v-model="color4" size="small"></el-color-picker>
<el-color-picker v-model="color4" size="mini"></el-color-picker>

<script>
  export default {
    data() {
      return {
        color4: '#409EFF'
      }
    }
  };
</script>
```
:::

### Attributs
| Attribut | Description | Type | Valeurs acceptées | Défaut |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | La valeur liée. | string | — | — |
| disabled | Désactive le ColorPicker. | boolean | — | false |
| size | Taille du ColorPicker. | string | — | medium / small / mini |
| show-alpha | Affiche la sélection du canal alpha. | boolean | — | false |
| color-format | Format de couleur du v-model. | string | hsl / hsv / hex / rgb | hex (quand show-alpha est false)/ rgb (quand show-alpha est true) |
| popper-class | Classe du menu déroulant du ColorPicker. | string | — | — |
| predefine | Couleurs prédéfinies. | array | — | — |

### Évènements
| Nom | Description | Paramètres |
|---------|--------|---------|
| change | Se déclenche quand la valeur change. | La valeur de la couleur |
| active-change | Se déclenche quand la couleur active change. | La valeur de la couleur active |
