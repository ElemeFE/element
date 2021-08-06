<style scoped>
  .page-resource {
    box-sizing: border-box;
    padding: 60px 0 120px;
    
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
  .card {
    background: #fff;
    transition: box-shadow .3s,border-color .3s;
    border: 1px solid #eee;
    border-radius: 12px;
    margin-bottom: 16px;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(80,101,161,0.10);
      .card-image-cover {
        opacity: 1;
      }
    }

    &-image {
      width: 100%;
      background: #107DFF;
      padding-bottom: 64.2857143%;
      border-radius: 12px 12px 0 0;
      position: relative;
      &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.4);
        path,circle {
          fill: #fff;
        }
      }
      &-cover {
        transition: opacity 0.3s;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.1);
        border-radius: 12px 12px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: block;
          padding: 6px 24px;
          border-radius: 24px;
          background: rgba(0,0,0,0.4);
          color: #fff;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    &-footer {
      padding: 16px;
    }
    &-title {
      margin: 0 0 7px;
      font-size: 20px;
      font-weight: 600;
      color: #333;
      line-height: 28px;
    }
    &-description {
      font-size: 14px;
      color: #999;
      margin: 0;
    }
  }
  h2 {
    font-size: 24px;
    color: #333333;
    line-height: 34px;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
  }
  @media (max-width: 768px) {
    .page-resource {
      padding: 24px;
    }
  }
</style>
<template>
  <div class="page-container page-resource">
    <h2><%= 1 ></h2>
    <p><%= placeholder2 ></p>
    <div class="content">
      <el-row :gutter="24">
        <el-col :xs="24" :span="6">
          <div class="card">
            <div class="card-image">
              <svg class="card-image-icon" width="29" height="30" viewbox="0 0 29 30" xmlns="http://www.w3.org/2000/svg"> 
                <g transform="rotate(-30 18.735 4.966)" fill="none" fill-rule="evenodd">
                  <path fill="#006DFF" d="M0 0h19.969v3.744H0zM0 8.736h12.48v3.744H0zM0 17.473h19.969v3.744H0z" />
                  <circle fill="#E50A00" cx="17.473" cy="10.608" r="2.496" />
                </g>
              </svg>
              <div class="card-image-cover">
                <a
                  onclick="ga('send', 'event', 'ResourceDownload', 'Download', 'Axure');" 
                  href="https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib"
                >
                <i class="el-icon-download"></i>
                <%= 5 ></a>
              </div>
            </div>
            <div class="card-footer">
              <h3 class="card-title"><%= 3 ></h3>
              <p class="card-description"><%= 4 ></p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :span="6">
          <div class="card">
            <div class="card-image">
              <svg class="card-image-icon" width="29" height="30" viewbox="0 0 29 30" xmlns="http://www.w3.org/2000/svg"> 
                <g transform="rotate(-30 18.735 4.966)" fill="none" fill-rule="evenodd">
                  <path fill="#006DFF" d="M0 0h19.969v3.744H0zM0 8.736h12.48v3.744H0zM0 17.473h19.969v3.744H0z" />
                  <circle fill="#E50A00" cx="17.473" cy="10.608" r="2.496" />
                </g>
              </svg>
              <div class="card-image-cover">
                <a 
                  onclick="ga('send', 'event', 'ResourceDownload', 'Download', 'Sketch');"
                  href="https://github.com/ElementUI/Resources/raw/master/Element%20UI%20Kit_v2.0.sketch"
                >
                <i class="el-icon-download"></i>
                <%= 5 ></a>
              </div>
            </div>
            <div class="card-footer">
              <h3 class="card-title"><%= 6 ></h3>
              <p class="card-description"><%= 7 ></p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
