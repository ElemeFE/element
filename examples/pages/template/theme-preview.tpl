<style lang="scss">
.page-theme-preview {
  padding-top: 25px;
  .display {
    width: 75%;
    display: inline-block;
    vertical-align: top;
    h3 {
      font-size: 22px;
      margin: 0 0 20px 0;
    }
    h4 {
      font-size: 18px;
      margin: 10px 0;
    }
  }
  .side {
    display: inline-block;
    width: 25%;
    .editor {
      background: #f5f7fa;
      border: 1px solid #ebeef5;
      border-bottom: none;
      height: 100vh;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
}
</style>
<template>
  <div class="page-container page-theme-preview">
    <section class="display">
      <el-button type="text" icon="el-icon-back" @click="navBack">返回</el-button>
      <h3>饿了么商户系统</h3>
      <h4>颜色</h4>
      <h4>文字</h4>
      <h4>按钮</h4>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </section>
    <aside class="side">
      <section class="editor">
        <theme-configurator></theme-configurator>
      </section>
    </aside>
  </div>
</template>
<script>
import ThemeConfigurator from '../../components/theme-configurator';

export default {
  components: {
    ThemeConfigurator
  },
  data() {
    return {
      count: 3
    };
  },
  methods: {
    navBack() {
      this.$router.go(-1);
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    }
  },
  mounted() {}
};
</script>
