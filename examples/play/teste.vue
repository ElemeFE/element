<template>
  <div>
    <el-container>
      <el-row type="flex">
        <el-col :span="24">
          <el-swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <el-swiper-slide>I'm Slide 1</el-swiper-slide>
            <el-swiper-slide>I'm Slide 2</el-swiper-slide>
            <el-swiper-slide>I'm Slide 3</el-swiper-slide>
            <el-swiper-slide>I'm Slide 4</el-swiper-slide>
            <el-swiper-slide>I'm Slide 5</el-swiper-slide>
            <el-swiper-slide>I'm Slide 6</el-swiper-slide>
            <el-swiper-slide>I'm Slide 7</el-swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </el-swiper>
        </el-col>      
      </el-row>
    </el-container>
  </div>
</template>
<script>
	export default {
    data() {
      return {
        checked: false,
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
	}
</script>
<style lang="scss"></style>