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
<style>
  .demo-carousel .block {
    padding: 30px;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    float: left;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  
  .demo-carousel .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-carousel .el-carousel__container {
    text-align: center;
  }
  
  .demo-carousel .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  
  .demo-carousel .small h3 {
    font-size: 14px;
    line-height: 150px;
  }

  .demo-carousel .medium h3 {
    font-size: 14px;
    line-height: 200px;
  }
</style>
## Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法

适用广泛的基础用法

::: demo 结合使用`el-carousel`和`el-carousel-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`el-carousel-item`标签中。默认情况下，在鼠标 hover 底部的切换条时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。
```html
<template>
  <div class="block">
    <span class="demonstration">默认 Hover 切换条触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Click 切换条触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
```
:::

### 切换条

可以将切换条的显示位置设置在容器外部

::: demo `indicator-position`属性定义了切换条的位置。默认情况下，它会显示在走马灯内部，设置为`out`则会显示在外部。
```html
<template>
  <el-carousel indicator-position="out">
    <el-carousel-item v-for="item in 4">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
```
:::

### 切换箭头
可以设置切换箭头的显示时机

::: demo `show-arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将`show-arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。
```html
<template>
  <el-carousel :interval="5000" show-arrow="always">
    <el-carousel-item v-for="item in 4">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
```
:::

### 卡片化
当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

::: demo 设置`card`属性即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。
```html
<template>
  <el-carousel :interval="4000" card height="200px">
    <el-carousel-item v-for="item in 6">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 走马灯的高度 | number | — | 300 |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number | — | 0 |
| trigger | 切换条的触发方式 | string | click | — |
| arrow-size | 切换箭头的大小 | number | — | 36 |
| interval | 自动切换的时间间隔，单位为毫秒。若小于等于 0，则不会自动切换 | number | — | 3000 |
| indicator-position | 切换条的位置 | string | out | — |
| show-indicator | 是否显示切换条 | boolean | — | true |
| show-arrow | 切换箭头的显示时机 | string | always/never | — |
| card | 是否启用卡片模式 | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| index-change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

### Methods
| 方法名      | 说明          | 参数 |
|---------- |-------------- | - |
| setActiveIndex | 手动切换幻灯片 | 需要切换的幻灯片的索引，从 0 开始 |
