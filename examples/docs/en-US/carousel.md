<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
        demos[0].className += ' small';
        demos[3].className += ' medium';
      });
    }
  }
</script>
## Carousel

Loop a series of images or texts in a limited space

### Basic usage

::: demo Combine `el-carousel` with `el-carousel-item`, and you'll get a carousel. Content of each slide is completely customizable, and you just need to place it inside  `el-carousel-item` tag. By default the carousel switches when mouse hovers over an indicator. Set `trigger` to `click`, and the carousel switches only when an indicator is clicked.
```html
<template>
  <div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
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

### Indicators

Indicators can be displayed outside the carousel

::: demo The `indicator-position` attribute determines where the indicators are located. By default they are inside the carousel, and setting `indicator-position` to `out` moves them outside.
```html
<template>
  <el-carousel indicator-position="out">
    <el-carousel-item v-for="item in 4">
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

### Arrows

You can define when arrows are displayed

::: demo The `show-arrow` attribute determines when arrows are displayed. By default they appear when mouse hovers over the carousel. Setting `show-arrow` to `always` or `never` shows/hides the arrows permanently.
```html
<template>
  <el-carousel :interval="5000" show-arrow="always">
    <el-carousel-item v-for="item in 4">
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

### Card mode

When a page is wide enough but has limited height, you can activate card mode for carousels

::: demo Setting `card` to `true` activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the carousel in card mode.
```html
<template>
  <el-carousel :interval="4000" card height="200px">
    <el-carousel-item v-for="item in 6">
      <h3>{{ item }}</h3>
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

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the carousel | number | — | 300 |
| initial-index | index of the initially active slide (starting from 0) | number | — | 0 |
| trigger | how indicators are triggered | string | click | — |
| arrow-size | size of the arrows | number | — | 36 |
| interval | interval of the auto loop, in milliseconds. If less than or equal to 0, the carousel will not loop | number | — | 3000 |
| indicator-position | position of the indicators | string | out | — |
| show-indicator | whether indicators are shown | boolean | — | true |
| show-arrow | when arrows are shown | string | always/never | — |
| card | whether card mode is activated | boolean | — | false |

### Events
| Event Name | Description | Parameters |
|---------|---------|---------|
| index-change | triggers when the active slide switches | index of the new active slide, index of the old active slide |

### Methods
| Method | Description | Parameters |
|---------- |-------------- | - |
| setActiveIndex | manually switch slide | index of the slide to be switched to, starting from 0 |
