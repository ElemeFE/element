<template>
  <div class="demo-image__carousel_lazy">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(url, key) in list" :key="key">
        <el-image :src="url" lazy></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      };
    }
  };
</script>

<style lang="scss">
  .demo-image__carousel_lazy {
    height: 500px;

    .el-carousel {
      height: 500px;

      .el-carousel__item {
        height: 500px;

        .el-image {
          height: 500px;
        }
      }
    }
  }
</style>
