<template>
  <section class="theme-card-item">
    <template v-if="type === 'upload'">
      <div class="upload">
        <div class="upload-action">
          <i class="el-icon-upload2"></i>
          <span>点击上传主题</span>
        </div>
      </div>
    </template>
    <template v-else>
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
        <div class="description">为商户提供的设计方案</div>
      </div>
    </template>
  </section>
</template>

<style lang="scss">
.theme-card-item {
  user-select: none;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  width: 90%;
  height: 90%;
  margin: 5% auto;
  box-shadow: 0 0 1px 0 #666;
  .upload {
    cursor: pointer;
    background: #F5F7FA;
    height: 100%;
    width: 100%;
    .upload-action {
      width: 40%;
      margin: 0 auto;
      padding-top: 25%;
      text-align: center;
      color: #606266;
      font-size: 30px;
      span {
        display: block;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  .preview {
    position: relative;
    height: 65%;
    width: 100%;
    .line {
      height: 50%;
    }
    .line-2 {
      width: 50%;
      height: 100%;
      display: inline-block;
    }
    .line-4 {
      width: 25%;
      height: 100%;
      display: inline-block;
    }
    .action {
      position: absolute;
      display: none;
      background: #000;
      opacity: 0.8;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
          color: #fff;
          .circle {
            border-color: #fff;
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
</style>

<script>
export default {
  props: {
    type: String,
    base: {
      type: String,
      default: ''
    }
  }
};
</script>