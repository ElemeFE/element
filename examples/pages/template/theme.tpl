<style lang="scss">
  .page-theme {
    h2 {
      font-size: 28px;
      margin: 0;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .theme-card {
      display: inline-block;
      height: 150px;
      height: 16vw;
      width: 25%;
      cursor: default;
      vertical-align: bottom;
    }
    .theme-section {
      margin-bottom: 20px;
    }
  }
</style>
<template>
  <div class="page-container page-theme">
    <section class="theme-section">
      <h2>官方主题</h2>
      <ul>
        <li class="theme-card" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">
          <theme-card></theme-card>
        </li>
      </ul>
    </section>
    <section class="theme-section">
      <h2>我的主题 (2/8)</h2>
      <ul>
        <li class="theme-card">
          <theme-card
            type="upload"
          ></theme-card>
        </li>
        <li class="theme-card" v-for="item in [1,2,3,4,5,6,7]" :key="item">
          <theme-card></theme-card>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import ThemeCard from '../../components/theme-card.vue';

  export default {
    components: {
      ThemeCard
    },
    data() {
      return {
        count: 3
      };
    },
    mounted() {}
  };
</script>
