<style scoped>
  .page-resource {
    padding-top: 55px;
    box-sizing: border-box;
    
    .resource-placeholder {
      margin: 50px auto 100px;
      text-align: center;
      
      img {
        width: 150px;
      }
      
      h4 {
        margin: 20px 0 16px;
        font-size: 16px;
        color: #1f2f3d;
        line-height: 1;
      }
      
      p {
        margin: 0;
        font-size: 14px;
        color: #99a9bf;
        line-height: 1;
      }
    }
  }
  .cards {
    margin: 35px auto 110px;

    .container {
      @utils-clearfix;
      padding: 0;
      margin: 0 -11px;
      width: auto;
    }

    li {
      width: 33.33333%;
      padding: 0 11px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }
  }
  h2 {
    font-size: 28px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
  }
  .card {
    height: 394px;
    width: 100%;
    background:#ffffff;
    border:1px solid #eaeefb;
    border-radius:5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: bottom .3s;
    bottom: 0;

    img {
      margin: 75px auto 35px;
      height: 87px;
    }
    h3 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #1f2f3d;
      font-weight: normal;
      height: 22px;
    }
    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 30px;
      margin: 0;
      line-height: 1.6;
    }
    a {
      height: 42px;
      width: 190px;
      display: inline-block;
      line-height: @height;
      font-size: 14px;
      background-color: #409EFF;
      color: #fff;
      text-align: center;
      border: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 2px;
      transition: all .3s;
      text-decoration: none;
      margin-top: 20px;
    }
  }
  @media (max-width: 850px) {
    .cards {
      li {
        max-width: 500px;
        float: none;
        margin: 10px auto 30px;
        width: 80%;
        .card {
          height: auto;
          padding-bottom: 20px;
        }
      }
      h3 {
        height: auto;
      }
    }
  }
</style>
<template>
  <div class="page-container page-resource">
    <h2>Recursos</h2>
    <!--<div class="resource-placeholder">-->
      <!--<img src="~examples/assets/images/resource-placeholder.svg" alt="">-->
      <!--<h4>En construcción</h4>-->
      <!--<p>Se están desarrollando más recursos</p>-->
    <!--</div>-->
    
    <p>Se están desarrollando más recursos</p>
    <div class="cards">
      <ul class="container">
        <!--<li>-->
          <!--<div class="card">-->
            <!--<img src="~examples/assets/images/Axure-Components.svg" alt="">-->
            <!--<h3>Componetes de Axure</h3>-->
            <!--<p>Mediante la importación de elementos de interfaz de usuario en Axure, se puede aplicar fácilmente a todos los componentes que proporcionamos durante el diseño de interacción.</p>-->
            <!--<a href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v1.1.0.rplib">Descarga</a>-->
          <!--</div>-->
        <!--</li>-->
        <li>
          <div class="card">
            <img src="~examples/assets/images/Sketch-Template.svg" alt="">
            <h3>Plantilla de Sketch</h3>
            <p>Aplica componentes de la plantilla Element para que pueda mejorarla eficiencia del diseño manteniendo un estilo visual unificado.</p>
            <a href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch">Descarga</a>
          </div>
        </li>
        <!--<li>-->
          <!--<div class="card">-->
            <!--<img src="~examples/assets/images/Module.svg" alt="">-->
            <!--<h3>Documentación de diseño de interacción</h3>-->
            <!--<p>Eche un vistazo más de cerca a la documentación de diseño de interacción. Conoce más detalles de cada componente desde una perspectiva microcósmica.</p>-->
            <!--<a href="https://github.com/ElementUI/Resources/raw/master/Element%20Components%20Documentation.zip">Descarga</a>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>
