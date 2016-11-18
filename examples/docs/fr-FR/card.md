<script>
  import dateUtil from 'main/utils/date'
  export default {
    data() {
      return {
        currentDate: dateUtil.format(new Date(), 'yyyy-MM-dd HH:mm')
      };
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .item {
    padding: 18px 0;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix {
    @utils-clearfix;
  }

  .box-card {
    width: 480px;
  }
</style>
## Card (Carte)

Intégrer les informations dans un conteneur de type carte.

### Utilisation de base

Une carte comprend le titre, le contenu et les opérations.

::: demo La carte est composée d'un `header` et d'un `body`. `Header` est facultatif et son contenu dépend d'un emplacement `slot`.
```html
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">Card name</span>
    <el-button style="float: right;" type="primary">Bouton</el-button>
  </div>
  <div v-for="o in 4" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Carte simple

La partie `header` peut être omise.

:::demo
```html
<el-card class="box-card">
  <div v-for="o in 4" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Avec des images

Affichez des contenus plus riches en ajoutant quelques configurations.

::: demo L'attribut `body-style` définit le style CSS du `body` personnalisé. Cet exemple utilise également `el-col` pour la mise en page.
```html
<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~examples/assets/images/hamburger.png" class="image">
      <div style="padding: 14px;">
        <span>Délicieux hamburger</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">Bouton</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
```
:::

### Attributs
| Attributs      | Description          | Type      | Valeurs acceptées       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| header | Titre de la carte. Accepte également du DOM passé par `slot#header` | string| — | — |
| body-style | style CSS du body | object| — | { padding: '20px' } |
