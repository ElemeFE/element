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
      &::before, &::after {
        display: table;
        content: "";
      }
      &::after {
        clear: both;
      }
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
      word-break: break-all;
      line-height: 1.6;
    }
    a {
      height: 42px;
      width: 190px;
      display: inline-block;
      line-height: 42px;
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
    <h2>Resource</h2>
    <!--<div class="resource-placeholder">-->
      <!--<img src="~examples/assets/images/resource-placeholder.svg" alt="">-->
      <!--<h4>Under construction</h4>-->
      <!--<p>More resources are being developed</p>-->
    <!--</div>-->
    
    <p>More resources are being developed</p>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/Axure-Components.svg" alt="">
            <h3>Axure Components</h3>
            <p>By importing Element UI in Axure, you can easily apply all the components we provide during interaction design.</p>
            <a
              onclick="ga('send', 'event', 'ResourceDownload', 'Download', 'Axure');" 
              href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.0.0.rplib"
            >Download</a>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/Sketch-Template.svg" alt="">
            <h3>Sketch Template</h3>
            <p>Apply components from Element template, so you can improve design efficiency while keeping a unified visual style.</p>
            <a 
              onclick="ga('send', 'event', 'ResourceDownload', 'Download', 'Sketch');"
              href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch"
            >Download</a>
          </div>
        </li>
        <!--<li>-->
          <!--<div class="card">-->
            <!--<img src="~examples/assets/images/Module.svg" alt="">-->
            <!--<h3>Interaction Design Documentation</h3>-->
            <!--<p>Take a closer look at the interaction design documentation. Learn more details of each component from a microcosmic perspective.</p>-->
            <!--<a href="https://github.com/ElementUI/Resources/raw/master/Element%20Components%20Documentation.zip">Download</a>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>
