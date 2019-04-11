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
      .theme-card-item {
        border-radius: 4px;
        overflow: hidden;
        background: #FFF;
        width: 90%;
        height: 90%;
        margin: 5% auto;
        box-shadow: 0 0 1px 0 #666;
        .preview {
          position: relative;
          height: 65%;
          width: 100%;
          .line {
            height: 50%;
          }
          .line-2 {
            width: 50%;
            height: 100%;;
            display: inline-block;
          }
          .line-4 {
            width: 25%;
            height: 100%;;
            display: inline-block;
          }
          .action {
            position: absolute;
            display: none;
            background: #000;
            opacity: .8;
            top: 0;
            left: 0;
            right: 0;
            bottom:0;
            .action-block {
              position: absolute;
              width: 40%;
              height: 50%;
              left: 30%;
              top: 25%;
            }
            .action-item {
              cursor: pointer;
              position: relative;
              display: inline-block;
              width: 30%;
              color: #eee;
              &:hover {
                color: #FFF;
                .circle {
                  border-color: #FFF;
                }
              }
              i {
                font-size: 22px;
                display: block;
                text-align: center;
                margin-top: 5px;
              }
              .circle {
                position: absolute;
                left: -5px;
                top: -5px;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                border: 1px solid #eee;
              }
              .name {
                display: block;
                font-size: 12px;
                margin-top: 15px;
                text-align: center;
              }
            }
          }
        }
        .info {
          padding: 10px 15px 0;
          line-height: 16px;
          .title {
            font-weight: bold;
            font-size: 16px;
            color: #303133;
          }
          .right {
            font-weight: normal;
            font-size: 12px;
            color: #909399;
            float: right;
          }
          .description {
            font-size: 14px; 
            color: #606266;
            margin-top: 10px;
          }
        }

        &:hover {
          box-shadow: 0 0 10px 0 #999;
          .action {
            display: block;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="page-container page-theme">
    <section>
      <h2>官方主题</h2>
      <ul>
        <li class="theme-card" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">
          <section class="theme-card-item">
            <div class="preview">
              <div class="line">
                <span class="line-2" style="background: red"></span>
                <span class="line-2" style="background: green"></span>
              </div>
              <div class="line">
                <span class="line-4" style="background: yellow"></span>
                <span class="line-4" style="background: purple"></span>
                <span class="line-4" style="background: yellow"></span>
                <span class="line-4" style="background: purple"></span>
              </div>
              <div class="action">
                <div class="action-block">
                  <div class="action-item">
                    <span class="circle"></span>
                    <i class="el-icon-view"></i>
                    <span class="name">查看</span>
                  </div>
                  <div class="action-item" style="margin-left: 40%;">
                    <span class="circle"></span>
                    <i class="el-icon-tickets"></i>
                    <span class="name">查看</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="info">
              <span class="title">
                Napos
                <span class="right">by Element</span>
              </span>
              <div class="description">
                为商户提供的设计方案
              </div>
            </div>
          </section>
        </li>
      </ul>
    </section>
    <section>
      <h2>我的主题 (2/8)</h2>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        count: 3
      };
    },
    mounted() {}
  };
</script>
