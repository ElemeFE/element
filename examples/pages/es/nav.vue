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
    <h2>Navegación</h2>
    <div class="block">
      <p>La navegación se centra en resolver los problemas de los usuarios sobre donde ir y como llegar ahí. En general, se puede categorizar en 'navegación de barra lateral' y 'navegación superior'.</p>
    </div>
    <div class="block">
      <h3>Elige la navegación correcta</h3>
      <p>Una navegación apropiada provee a los usuarios una mejor experiencia, mientras que una inapropiada genera confusión. Esta es la diferencia entre la navegación de la barra lateral y la navegación superior.</p>
    </div>
    <div class="block">
      <h3>Navegación lateral</h3>
      <el-row :gutter="20">
        <el-col :span="9">
          <p>Fija la navegación del lado izquierdo, esto permitirá una mejor visibilidad, lo que facilitará el cambio de pagina. En este caso, el área superior de la pagina contiene herramientas comúnmente utilizadas, por ejemplo, barra de búsqueda, botón de ayuda, botón de aviso, etc. Adecuado para sitios web de gestión.</p>
        </el-col>
        <el-col :span="15" class="nav-demos">
          <img src="~examples/assets/images/navbar_1.png" alt="Categorías de Nivel 1" @click="enlarge(846, $event)">
          <h5>Categorías de Nivel 1</h5>
          <p>Adecuado para sitios con una estructura simple con un solo nivel de páginas. No se necesita un 'breadcrumb'.</p>
          <img src="~examples/assets/images/navbar_2.png" alt="Categorías de Nivel 2" @click="enlarge(846, $event)">
          <h5>Categorías de Nivel 2</h5>
          <p>La barra lateral muestra hasta dos niveles de navegación. Se recomienda utilizar un 'breadcrumb' en combinación con la navegación de segundo nivel, lo que facilita la localización y navegación de los usuarios.</p>
          <img src="~examples/assets/images/navbar_3.png" alt="Categorías de Nivel 3" @click="enlarge(846, $event)">
          <h5>Categorías de Nivel 3</h5>
          <p>Adecuado para sitios web bastante complejos. La barra lateral izquierda contiene navegación de primer nivel, y la columna central muestra navegación de segundo nivel u otras opciones de utilidad.</p>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <h3>Navegación superior</h3>
      <el-row>
        <el-col :span="10">
          <p>Se ajusta de acuerdo a la exploración normal de arriba a abajo, lo que hace que las cosas sean más naturales. La cantidad de navegación y la longitud del texto están limitadas al ancho de la parte superior.</p>
        </el-col>
        <el-col :span="14" class="nav-demos">
          <img src="~examples/assets/images/navbar_0.png" alt="" @click="enlarge(846, $event)">
          <p>Adecuado para sitios con pocas navegaciones y grandes trozos.</p>
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
