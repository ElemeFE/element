<style lang="scss">
.page-theme-preview {
  padding-top: 25px;
  .display {
    width: 75%;
    display: inline-block;
    vertical-align: top;
    h3 {
      font-size: 24px;
      margin: 0 0 20px 0;
    }
  }
  .side {
    display: inline-block;
    width: 25%;
    .editor {
      background: #f5f7fa;
      border: 1px solid #ebeef5;
      border-radius: 5px;
      margin-bottom: 20px;
    }
  }
}
</style>
<template>
  <div class="page-container page-theme-preview">
    <section class="display">
      <el-button type="text" icon="el-icon-back" @click="navBack">返回</el-button>
      <h3>{{previewConfig.name}}</h3>
      <basic-tokens-preview>
      </basic-tokens-preview>
      <components-preview>
      </components-preview>
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
import ComponentsPreview from '../../components/theme/components-preview';
import BasicTokensPreview from '../../components/theme/basic-tokens-preview';
import {
  loadPreviewToLocal
} from '../../components/theme/localstorage';

export default {
  components: {
    ThemeConfigurator,
    BasicTokensPreview,
    ComponentsPreview
  },
  data() {
    return {
      previewConfig: {}
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
  mounted() {
    const previewConfig = loadPreviewToLocal();
    const pageRefer = this.$route.params.refer;
    if (!previewConfig || !pageRefer) {
      this.$alert('No preview config', 'No preview config', {
        confirmButtonText: 'OK',
        callback: action => {
          const newPath = this.$route.path.replace('/preview', '');
          this.$router.replace(newPath);
        }
      });
      return;
    }
    this.previewConfig = previewConfig;
  }
};
</script>
