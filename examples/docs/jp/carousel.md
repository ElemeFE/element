## Carousel(カルーセル)

限られたスペースに一連の画像やテキストをループさせる

### 基本的な使い方

:::demo `el-carousel` と `el-carousel-item` を組み合わせれば、carouselができあがります。各スライドの内容は完全にカスタマイズ可能で、`el-carousel-item`タグの中に配置するだけです。デフォルトでは、マウスがインジケータの上にカーソルを置くとcarouselが切り替わります。`trigger`を`click`に設定すると、インジケータがクリックされたときだけcarouselが切り替わります。
```html
<template>
  <div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### インジケータ

インジケータはcarouselの外側に表示することができます。

:::demo `indicator-position` 属性はインジケータの位置を決定します。デフォルトではcarouselの内側にあり、`indicator-position` を `outside` に設定すると外側に移動し、`indicator-position` を `none` に設定するとインジケータは非表示になります。
```html
<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### 矢印

矢印が表示されるタイミングを定義することができます。

:::demo `arrow` 属性は、いつ矢印が表示されるかを決定します。デフォルトでは、マウスがcarouselの上にカーソルを置いたときに表示されます。`arrow` を `always` または `never` に設定すると、矢印を恒久的に表示/非表示にすることができます。
```html
<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### カードモード

ページが十分に広くても高さが限られている場合、carouselのカードモードを有効にすることができます。

:::demo `type` を `card` にするとカードモードになります。見た目とは別に、カードモードと共通モードの最大の違いは、両側のスライドをクリックするとcarouselが直接カードモードに切り替わることです。
```html
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

デフォルトでは `direction` は `horizontal` である。`direction` を `vertical` に設定することで、carouselを垂直方向に表示させることができる。

:::demo
```html
<template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### carousel属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | carouselの高さ | string | — | — |
| initial-index | アクティブになったスライドのインデックス(0始まり) | number | — | 0 |
| trigger | インディケータの発動方法 | string | hover/click | hover |
| autoplay | スライドを自動的にループさせるかどうか | boolean | — | true |
| interval | 自動ループの間隔 (ミリ秒単位) | number | — | 3000 |
| indicator-position | インディケータの位置 | string | outside/none | — |
| arrow | 矢印が表示されている場合 | string | always/hover/never | hover |
| type | carouselのタイプ | string | card | — |
| loop | ループ表示 | boolean | - | true |
| direction | 表示方向 | string | horizontal/vertical | horizontal |

### carouselイベント
| Event Name | Description | Parameters |
|---------|---------|---------|
| change | アクティブなスライドが切り替わったときにトリガされます。 | index of the new active slide, index of the old active slide |

### carouselメソッド
| Method | Description | Parameters |
|---------- |-------------- | -- |
| setActiveItem | 手動でスライドを切り替える | index of the slide to be switched to, starting from 0; or the `name` of corresponding `el-carousel-item` |
| prev | 前のスライドに切り替える | — |
| next | 次のスライドに移る | — |

### carousel-アイテム属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | アイテムの名前は `setActiveItem` で使われています。 | string | — | — |
| label | 対応するインジケータのテキスト内容 | string | — | — |
