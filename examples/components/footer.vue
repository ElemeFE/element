<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <p class="footer-main-title">Element 1.0 Hydrogen</p>
        <a href="https://github.com/ElemeFE/element/issues" class="footer-main-link" target="_blank">反馈建议</a>
        <a href="https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.md" class="footer-main-link" target="_blank">贡献指南</a>
      </div>
      <div class="footer-social">
        <el-popover
          ref="weixin"
          placement="top"
          width="120"
          class="footer-popover"
          trigger="hover">
          <div class="footer-popover-title">饿了么 UED</div>
          <img src="../assets/images/qrcode.png" alt="">
        </el-popover>
        <i class="doc-icon-weixin elementdoc" v-popover:weixin></i>
        <a href="//github.com/elemefe" target="_blank">
          <i class="doc-icon-github elementdoc"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
  .footer {
    height: 120px;
    background-color: #324057;
    color: #a4aebd;
    width: 100%;
    z-index: 1000;
    margin-top: -120px;
  
    * {
      word-spacing: 0;
    }

    .container {
      height: 100%;
    }
    
    .footer-main {
      font-size: 0;
      padding-top: 40px;
      display: inline-block;
      
      .footer-main-title {
        line-height: 1;
        font-size: 22px;
        margin: 0;
      }
      
      .footer-main-link {
        display: inline-block;
        margin: 12px 18px 0 0;
        line-height: 1;
        font-size: 12px;
        color: #768193;

        a {
          color: #768193;
          text-decoration: none;
        }
      }
    }
  
    .footer-social {
      float: right;
      line-height: 120px;
    
      .footer-popover {
        .el-popover {
          padding: 0;
          min-width: 120px;
          line-height: normal;
          box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);
        }

        .footer-popover-title {
          border-bottom: solid 1px #eaeefb;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #99a9bf;
          background-color: #f8f9fe;
        }
        
        img {
          size: 100px;
          margin: 10px;
        }
      }
      
      .elementdoc {
        transition: .3s;
        display: inline-block;
        line-height: 32px;
        text-align: center;
        color: #8D99AB;
        background-color: transparent;
        size: 32px;
        font-size: 32px;
        vertical-align: middle;
        &:hover {
           transform: scale(1.2);
        }
      }
  
      .doc-icon-weixin {
        margin-right: 36px;
        &:hover {
          color: #fff;
        }
      }

      .doc-icon-github {
        margin-right: 0;
        &:hover {
           color: #fff;
        }
      }
    }
  }
</style>
