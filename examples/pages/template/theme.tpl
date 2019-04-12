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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .theme-card {
      display: inline-block;
      height: 150px;
      height: 16vw;
      flex: 0 0 24%;
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
        <li class="theme-card" v-for="item in officialTheme" :key="item.name">
          <theme-card
            type="official"
            :config="item"
          ></theme-card>
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
        <li class="theme-card" v-for="item in []" :key="item">
          <theme-card
            type="user"
          ></theme-card>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import ThemeCard from '../../components/theme/theme-card.vue';
  import themeList from '../../components/theme/theme-list.js';
  
  export default {
    components: {
      ThemeCard
    },
    data() {
      return {
        officialTheme: themeList
      };
    },
    mounted() {}
  };
</script>
