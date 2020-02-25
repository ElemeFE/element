<style scoped>
  h3 {
    margin-bottom: 15px;
  }
  .block {
    margin-bottom: 55px;
  }
  p {
    margin: 0 0 15px;
  }
  .nav-demos {
    p {
      margin-bottom: 50px;
    }
    h5 {
      margin: 0;
    }
    img {
      padding: 15px;
      background-color: #F9FAFC;
      width: 100%;
      margin-bottom: 15px;
      cursor: pointer;
    }
  }
  .dialog-img {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  
    .imgWrap {
      margin: 0 auto;
      position: relative;
      top: 100px;
      padding-bottom: 50px;
    }
    img {
      display: block;
      width: 100%;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #373737;
    background-color: rgba(55, 55, 55, 0.6);
    height: 100%;
    z-index: 1000;
  }
  .zoom-enter-active,
  .zoom-leave-active {
    transition: transform .3s cubic-bezier(0.78, 0.14, 0.15, 0.86), opacity .3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .zoom-enter,
  .zoom-leave-active {
    transform: scale(0.3);
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
<template>
  <div>
    <h2>Navigation</h2>
    <div class="block">
      <p>La navigation a pour but de guider les utilisateurs pour qu'ils sachent ou aller et comment y parvenir. En général on peut distinguer deux types de navigation: le menu latéral ou 'sidebar' et le menu en haut de page ou 'topbar'.</p>
    </div>
    <div class="block">
      <h3>Choisir la bonne navigation</h3>
      <p>Une navigation appropriée procure à l'utilisation une expèrience facile et fluide, alors qu'une mauvaise navigation entraîne de la confusion. Voici les différences entre les navigations 'sidebar' et 'topbar'</p>
    </div>
    <div class="block">
      <h3>Menu latéral</h3>
      <el-row :gutter="20">
        <el-col :span="9">
          <p>Fixe la navigation sur le coté gauche, améliorant ainsi sa visibilité et facilitant le passage d'une page à l'autre. Dans ce cas, la zone en haut de la page peut contenir une barre de recherche, des liens vers de la documentation, des contacts, des boutons d'aide, etc. Utile pour des interfaces de gestion ou des sites utilitaires.</p>
        </el-col>
        <el-col :span="15" class="nav-demos">
          <img src="~examples/assets/images/navbar_1.png" alt="Catégories de niveau 1" @click="enlarge(846, $event)">
          <h5>Catégories de niveau 1</h5>
          <p>Appropriées pour des sites avec une structure simple et un seul niveau de page. L'affichage du chemin de navigation n'est pas néccessaire.</p>
          <img src="~examples/assets/images/navbar_2.png" alt="Catégories de niveau 2" @click="enlarge(846, $event)">
          <h5>Catégories de niveau 2</h5>
          <p>Le menu affiche au moins deux niveaux de navigation. Dans ce cas l'affichage du chemin de navigation est recommandé, afin que l'utilisateur sache facilement ou il se trouve.</p>
          <img src="~examples/assets/images/navbar_3.png" alt="Catégories de niveau 3" @click="enlarge(846, $event)">
          <h5>Catégories de niveau 3</h5>
          <p>Appropriées pour les sites web complexes. La barre la plus à gauche gère le premier niveau de navigation, tandis que celle à coté gère le deuxième niveau ansi que d'autres options.</p>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <h3>Menu en haut de page</h3>
      <el-row>
        <el-col :span="10">
          <p>Conforme à l'ordre normal de navigation qui va de haut en bas, ce qui rends les choses plus naturelles. Les quantités de liens et de texte sont limités par la largeur de la barre.</p>
        </el-col>
        <el-col :span="14" class="nav-demos">
          <img src="~examples/assets/images/navbar_0.png" alt="" @click="enlarge(846, $event)">
          <p>Approprié pour les sites ayant une navigation simple et un contenu large.</p>
        </el-col>
      </el-row>
    </div>
    <transition name="fade">
      <div class="mask" v-show="showDialog" @click="showDialog = false"></div>
    </transition>
    <transition name="zoom">
      <div class="dialog-img" :style='imgWrapStyle' v-show="showDialog" @click="showDialog = false">
        <div class="imgWrap" :style="imgStyle">
          <img :src="imgUrl" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgUrl: '',
        imgBound: {},
        showDialog: false,
        imgStyle: {},
        imgWrapStyle: {}
      };
    },
    watch: {
      showDialog(val) {
        document.body.style.overflow = val ? 'hidden' : '';
      }
    },
    methods: {
      enlarge(imgWidth, ev) {
        var imgNode = ev.target;
        // var bound = imgNode.getBoundingClientRect();
        var offset = {};
        var doc = document;

        offset.left = (doc.body.scrollWidth - imgWidth) / 2;
        offset.top = 100;

        this.imgUrl = imgNode.src;
        this.imgBound = imgNode.getBoundingClientRect();

        this.imgWrapStyle.transformOrigin = `${ev.clientX}px ${ev.clientY}px`;
        // this.imgStyle.transformOrigin = `${ev.clientX}px ${ev.clientY}px`;
        this.imgStyle.width = imgWidth + 'px';
        this.showDialog = true;
      }
    }
  };
</script>
